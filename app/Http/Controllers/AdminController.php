<?php

namespace App\Http\Controllers;

use App\Models\Proposal;
use App\Models\Team;
use App\Models\User;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index(){
        $users = User::count();
        $teams = Team::count();
        $proposals = Proposal::count();
        $get_teams = Team::with('members', 'leader', 'lecturer')->get();
        $proposal_ispending = Proposal::where('status', 'pending')->count();

        return Inertia::render('Admin/Dashboard', compact('users','teams','proposals','proposal_ispending', 'get_teams'));
    }

    public function showUsers() {
        $users = User::with('team', 'team.proposal', 'team.assistanceProofs')->get();
        $akt21 = User::where('nim', 'like', '21%')->count();
        $akt22 = User::where('nim', 'like', '22%')->count();
        $akt23 = User::where('nim', 'like', '23%')->count();
        $akt24 = User::where('nim', 'like', '24%')->count();

        foreach ($users as $user) {
            if ($user->team_id &&
                $user->team->lecturer_id &&
                $user->team->proposal &&
                $user->team->proposal->final_proposal_url &&
                $user->team->proposal->status == 'approved' &&
                $user->team->assistanceProofs->count() >= 3) {
                    $user['status'] = 'passed';
            } else {
                $user['status']  = 'failed';
            }

            $user->save();
        }

        return Inertia::render('Admin/ShowUsers', compact('users', 'akt21', 'akt22', 'akt23', 'akt24'));
    }

    public function showTeams() {
        $teams = Team::with('members', 'leader', 'lecturer')->get();
        $total_teams = Team::count();

        return Inertia::render('Admin/ShowTeams', compact('teams', 'total_teams'));
    }

    public function showProposals() {
        $proposals = Proposal::with('team', 'team.assistanceProofs', 'team.lecturer')->get();
        $total_proposal = Proposal::count();
        $total_pending = Proposal::where('status', 'pending')->count();
        $total_accept = Proposal::where('status', 'approved')->count();
        $total_reject = Proposal::where('status', 'reject')->count();

        return Inertia::render('Admin/ShowProposals', compact('proposals', 'total_proposal', 'total_pending', 'total_accept', 'total_reject'));
    }
}
