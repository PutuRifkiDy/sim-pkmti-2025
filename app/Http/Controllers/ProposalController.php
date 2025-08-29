<?php
namespace App\Http\Controllers;

use App\Jobs\SendEmailJob;
use App\Models\Proposal;
use App\Models\Team;
use App\Models\User;
use App\Rules\MaxWordCount;
use App\Rules\ValidProposalScheme;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProposalController extends Controller
{
    public const MAX_GFT_TEAMS = 5;

    public function show($teamId)
    {
        $proposal = Proposal::with('team')->where('team_id', $teamId)->first();
        return Inertia::render('Proposals/Show', compact('proposal'));
    }

    public function create(Request $request, $teamId)
    {
        $request->validate([
            'scheme' => ['required', 'string', 'max:255', new ValidProposalScheme],
            'title' => ['required', 'string', 'max:255', new MaxWordCount(20)],
            'description' => ['string', 'max:512', 'nullable'],
        ], [
            'scheme.required' => 'Mohon pilih bidang PKM',
            'title.required' => 'Mohon masukkan judul proposal',
        ]);

        // validate quota for PKM-GFT
        // if ($request->scheme == 'PKM-GFT') {
        //     $gftTeamsCount = Proposal::where('scheme', 'PKM-GFT')->count();

        //     if ($gftTeamsCount == self::MAX_GFT_TEAMS) return back()->with('msg', 'Kuota skema PKM-GFT sudah penuh');
        // }

        // validate submit timeline
        // $from = strtotime('2024-04-01'); // ??
        // $to = strtotime('2024-04-07'); // ??
        // $current = strtotime(date('Y-m-d'));

        // if ((env('APP_ENV') != 'local') && ($current < $from)) {
        //     return back()->with('msg', 'Masa pengajuan proposal dimulai dari x-y blablabla 2024');
        // }

        // if ((env('APP_ENV') != 'local') && ($current > $to)) {
        //     return back()->with('msg', 'Masa pengajuan proposal telah berakhir');
        // }

        $user = Auth::user();
        $teamMembersCount = User::where('team_id', $teamId)->count();
        $team = Team::find($teamId);

        $angkatan = substr($user->nim, 0, 2);

        if ($team->is_team_get_min_member == false) {
            if ($teamMembersCount < 2) {
                return back()->with('msg', 'Tim terdiri dari minimal 2 orang untuk mengajukan proposal');
            }
        } else if ($team->is_team_get_min_member == true) {
            if ($angkatan == '24') {
                if ($teamMembersCount != 3) {
                    return back()->with('msg', 'Tim angkatan 24 wajib terdiri dari 3 orang untuk mengajukan proposal');
                }
            } else {
                if ($teamMembersCount < 3) {
                    return back()->with('msg', 'Tim terdiri dari minimal 3 orang untuk mengajukan proposal');
                }
            }
        }


        if (!Team::find($teamId)->lecturer_id) {
            return back()->with('msg', 'Tim anda belum memiliki dosen pembimbing');
        }

        Proposal::create([
            'team_id' => $teamId,
            'scheme' => $request->scheme,
            'title' => $request->title,
            'description' => $request->description,
            'status' => 'pending',
        ]);

        return back()->with('msg', 'Timmu telah berhasil mengajukan proposal');
    }

    public function update(Request $request, $teamId)
    {
        $request->validate([
            'title' => ['required', 'string', 'max:255', new MaxWordCount(20)],
            'scheme' => ['required', 'string', 'max:255', new ValidProposalScheme],
            'description' => ['string', 'max:255', 'nullable'],
            'draft_proposal_url' => ['url', 'nullable'],
            'final_proposal_url' => ['url', 'nullable'],
            'note' => ['string', 'nullable'],
        ], [
            'scheme.required' => 'Mohon pilih bidang PKM',
            'title.required' => 'Mohon masukkan judul proposal',
        ]);

        // validate quota for PKM-GFT
        // if ($request->scheme == 'PKM-GFT') {
        //     $gftTeamsCount = Proposal::where('scheme', 'PKM-GFT')->count();

        //     if ($gftTeamsCount >= self::MAX_GFT_TEAMS) {
        //         return back()->with('msg', 'Kuota skema PKM-GFT sudah penuh');
        //     }

        // }

        $user = Auth::user();
        $teamMembersCount = User::where('team_id', $teamId)->count();

        $angkatan = substr($user->nim, 0, 2);

        if ($angkatan == '24') {
            if ($teamMembersCount != 3) {
                return back()->with('msg', 'Tim angkatan 24 wajib terdiri dari 3 orang untuk mengajukan proposal');
            }
        } else {
            if ($teamMembersCount < 3) {
                return back()->with('msg', 'Tim terdiri dari minimal 3 orang untuk mengajukan proposal');
            }
        }

        if (!Team::find($teamId)->lecturer_id) {
            return back()->with('msg', 'Tim anda belum memiliki dosen pembimbing');
        }

        Proposal::where('team_id', $teamId)->first()->update($request->all());

        // if updated by participant, set status to pending
        if ($request->user()->role == 'participant' || $request->user()->role == 'admin') {
            Proposal::where('team_id', $teamId)->first()->update(['status' => 'pending']);
        }

        return back()->with('msg', 'Proposal telah diperbarui');
    }

    public function accept($proposalId)
    {
        $proposal = Proposal::find($proposalId);
        if ($proposal) {
            $proposal->update(['status' => 'approved']);
            // send email to team leader
            $proposalTitle = Proposal::find($proposalId)->title;
            $leaderId = Proposal::with('team')->find($proposalId)->team->leader_id;
            $leader = User::find($leaderId)->first();
            $emailArgs = [
                'email' => $leader->email,
                'subject' => 'Selamat! Proposal PKM Kalian Telah Disetujui! 🎉',
                'view' => 'emails.accept-proposal',
                'data' => [
                    'name' => $leader->name,
                    'proposal_title' => $proposalTitle,
                ],
                'attachments' => [],
            ];
            dispatch(new SendEmailJob($emailArgs));
            return back()->with('msg', 'Proposal telah disetujui')->with(['inertia_reload' => true]);
        }

        return back()->with('msg', 'Proposal tidak ditemukan')->with(['inertia_reload' => true]);
    }

    public function reject($proposalId, Request $request)
    {
        $request->validate([
            'note' => 'required|string',
        ], [
            'note.required' => 'Mohon masukkan alasan penolakan',
        ]);

        Proposal::find($proposalId)->update([
            'status' => 'rejected',
            'note' => $request->note,
        ]);

        // send email to team leader
        $proposalTitle = Proposal::find($proposalId)->title;
        $leaderId = Proposal::with('team')->find($proposalId)->team->leader_id;
        $leader = User::find($leaderId)->first();
        $emailArgs = [
            'email' => $leader->email,
            'subject' => 'Yuk, Semangat! Proposal PKM Kalian Masih Bisa Direvisi! 💪',
            'view' => 'emails.reject-proposal',
            'data' => [
                'name' => $leader->name,
                'proposal_title' => $proposalTitle,
                'note' => $request->note,
            ],
            'attachments' => [],
        ];
        dispatch(new SendEmailJob($emailArgs));

        return back()->with('msg', 'Proposal telah ditolak')->with(['inertia_reload' => true]);
    }

    public function destroy($teamId)
    {
        Proposal::where('team_id', $teamId)->first()->delete();

        return back()->with('msg', 'Proposalmu telah dihapus');
    }
}
