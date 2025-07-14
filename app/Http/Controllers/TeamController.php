<?php

namespace App\Http\Controllers;

use App\Models\Lecturer;
use App\Models\Team;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;

class TeamController extends Controller
{
    const MAX_PARTICIPANTS_NON_24 = 5;
    const MAX_PARTICIPANTS_24 = 3;

    public function show($teamId)
    {
        if (!Auth::getUser()->team_id && Auth::getUser()->role != 'admin') {
            return to_route('teams.join_or_create');
        }

        $team = Team::with('leader', 'members', 'proposal')->find($teamId);

        if (!$team) abort(404);

        $lecturers = Lecturer::all();

        return Inertia::render('Teams/Show', compact('team', 'lecturers'));
    }

    public function create(Request $request)
    {
        if (Auth::getUser()->team_id) {
            return to_route('teams.show', Auth::getUser()->team_id);
        }

        $request->validate([
            'team_name' => 'required|string|max:255|unique:'.Team::class,
        ], [
            'team_name.required' => 'Mohon masukkan nama tim',
        ]);

        $token = Str::random(8);

        $team = Team::create([
            'team_name' => $request->team_name,
            'token' => $token,
            'leader_id' => Auth::id(),
        ]);

        $user = User::find(Auth::id());
        $user->team_id = $team->id;
        $user->save();

        return to_route('teams.show', $team->id);
    }

    public function join($token)
    {
        $user_login = Auth::user();
        // dd($user_login);
        $team = Team::where('token', $token)->first();
        if (!$team) return back()->with('msg', 'Tim tidak ditemukan.');

        $teamId = $team->id;
        $teamMembersCount = User::where('team_id', $teamId)->count();


        // cek non 24
        if (str_contains($user_login->nim, '24')) {
            if ($teamMembersCount == self::MAX_PARTICIPANTS_24) {
                return back()->with('msg', 'Tim sudah penuh!');
            }
        } else {
            if ($teamMembersCount == self::MAX_PARTICIPANTS_NON_24) {
                return back()->with('msg', 'Tim sudah penuh!');
            }
        }

        // ensure nim yang isi 24 tidak ada di tim yang nim nya ga isi 24
        $teamMembers = User::where('team_id', $teamId)->get();
        foreach ($teamMembers as $member) {
            if (str_contains($user_login->nim, '24') && !str_contains($member->nim, '24')) {
                return back()->with('msg', 'Kamu tidak bisa bergabung dengan tim yang anggotanya bukan angkatan 24!');
            } elseif (!str_contains($user_login->nim, '24') && str_contains($member->nim, '24')) {
                return back()->with('msg', 'Kamu tidak bisa bergabung dengan tim yang anggotanya angkatan 24!');
            }
        }

        User::find(Auth::id())->update(['team_id' => $teamId]);

        return to_route('teams.show', $teamId)->with('msg', 'Selamat bergabung!');
    }

    public function leave($teamId)
    {
        $user = User::find(Auth::id());
        $pastTeam = Team::with('members')->find($teamId);
        $teamMembersCount = $pastTeam->members->count();

        $user->update(['team_id' => null]);

        if ($teamMembersCount == 1) {
            $pastTeam->delete();
        } else if ($pastTeam->leader_id == $user->id) {
            $pastTeam->update(['leader_id' =>  User::where('team_id', $teamId)->first()->id]);
        }

        return to_route('dashboard')->with('msg', 'Kamu berhasil keluar dari tim');
    }

    public function kickMember($teamId, $userId)
    {
        $user = User::find($userId);
        $pastTeam = Team::with('members')->find($teamId);
        $teamMembersCount = $pastTeam->members->count();

        $user->update(['team_id' => null]);

        if ($teamMembersCount == 1) {
            $pastTeam->delete();
            return to_route('dashboard')->with('msg', 'Tim dibubarkan');
        } else if ($pastTeam->leader_id == $userId) {
            $pastTeam->update(['leader_id' =>  User::where('team_id', $teamId)->first()->id]);
        }

        return back()->with('msg', 'Anggota tim berhasil dikeluarkan');
    }

    public function changeLeader($teamId, $userId)
    {
        Team::find($teamId)->update(['leader_id' => $userId]);

        return back()->with('msg', 'Ketua tim berhasil diganti');
    }

    public function update(Request $request, $teamId)
    {
        $request->validate([
            'team_name' => 'required|string|max:255',
        ], [
            'team_name.required' => 'Nama tim tidak boleh kosong',
        ]);

        Team::find($teamId)->update($request->all());

        return back()->with('msg', 'Informasi tim berhasil diubah.');
    }

    public function destroy($teamId)
    {
        Team::find($teamId)->delete();

        return to_route('dashboard')->with('msg', 'Tim berhasil dibubarkan.');
    }
}
