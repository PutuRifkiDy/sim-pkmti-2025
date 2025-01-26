<?php

namespace App\Http\Controllers;

use App\Jobs\SendEmailJob;
use App\Models\Proposal;
use App\Models\User;
use App\Rules\MaxWordCount;
use App\Rules\ValidProposalScheme;
use Illuminate\Http\Request;
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
        if ($request->scheme == 'PKM-GFT') {
            $gftTeamsCount = Proposal::where('scheme', 'PKM-GFT')->count();

            if ($gftTeamsCount == self::MAX_GFT_TEAMS) return back()->with('msg', 'Kuota skema PKM-GFT sudah penuh');
        }

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

        // allow submit when team member count if more than 3
        $teamMembersCount = User::where('team_id', $teamId)->count();
        
        if ($teamMembersCount < 3) {
            return back()->with('msg', 'Tim terdiri dari minimal 3 orang untuk mengajukan proposal');
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
            'note' => ['string', 'nullable']
        ], [
            'scheme.required' => 'Mohon pilih bidang PKM',
            'title.required' => 'Mohon masukkan judul proposal',
        ]);
        
        // validate quota for PKM-GFT
        if ($request->scheme == 'PKM-GFT') {
            $gftTeamsCount = Proposal::where('scheme', 'PKM-GFT')->count();

            if ($gftTeamsCount >= self::MAX_GFT_TEAMS) return back()->with('msg', 'Kuota skema PKM-GFT sudah penuh');
        }

        Proposal::where('team_id', $teamId)->first()->update($request->all());

        // if updated by participant, set status to pending
        if ($request->user()->role == 'participant') {
            Proposal::where('team_id', $teamId)->first()->update(['status' => 'pending']);
        }

        return back()->with('msg', 'Proposal telah diperbarui');
    }

    public function accept($proposalId)
    {
        Proposal::find($proposalId)->update(['status' => 'approved']);

        // send email to team leader
        // $proposalTitle = Proposal::find($proposalId)->title;
        // $leaderId = Proposal::with('team')->find($proposalId)->team->leader_id;
        // $leader = User::find($leaderId)->first();
        // $emailArgs = [
        //     'email' => $leader->email,
        //     'subject' => 'Selamat! Proposal PKM Kalian Telah Disetujui! 🎉',
        //     'view' => 'emails.accept-proposal',
        //     'data' => [
        //         'name' => $leader->name,
        //         'proposal_title' => $proposalTitle,
        //     ],
        //     'attachments' => []
        // ];
        // dispatch(new SendEmailJob($emailArgs));

        return back()->with('msg', 'Proposal telah disetujui');
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
        // $proposalTitle = Proposal::find($proposalId)->title;
        // $leaderId = Proposal::with('team')->find($proposalId)->team->leader_id;
        // $leader = User::find($leaderId)->first();
        // $emailArgs = [
        //     'email' => $leader->email,
        //     'subject' => 'Yuk, Semangat! Proposal PKM Kalian Masih Bisa Direvisi! 💪',
        //     'view' => 'emails.reject-proposal',
        //     'data' => [
        //         'name' => $leader->name,
        //         'proposal_title' => $proposalTitle,
        //         'note' => $request->note,
        //     ],
        //     'attachments' => []
        // ];
        // dispatch(new SendEmailJob($emailArgs));

        return back()->with('msg', 'Proposal telah ditolak');
    }

    public function destroy($teamId)
    {
        Proposal::where('team_id', $teamId)->first()->delete();

        return back()->with('msg', 'Proposalmu telah dihapus');
    }
}
