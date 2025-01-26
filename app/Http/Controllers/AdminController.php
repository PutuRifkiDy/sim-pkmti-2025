<?php

namespace App\Http\Controllers;

use App\Models\Proposal;
use App\Models\Team;
use App\Models\User;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function showUsers() {
        $users = User::with('team', 'team.proposal', 'team.assistanceProofs')->get();

        foreach ($users as $user) {
            if ($user->team_id && 
                $user->team->lecturer_id &&
                $user->team->proposal && 
                $user->team->proposal->final_proposal_url &&
                $user->team->proposal->status == 'approved' &&
                $user->team->assistanceProofs->count() >= 3) {
                    $user["status"] = 'passed'; 
            } else {
                $user["status"]  = 'failed';
            }
        }

        return Inertia::render('Admin/ShowUsers', compact('users'));
    }

    public function showTeams() {
        $teams = Team::with('members', 'leader', 'lecturer')->get();

        return Inertia::render('Admin/ShowTeams', compact('teams'));
    }

    public function showProposals() {
        $proposals = Proposal::with('team', 'team.assistanceProofs', 'team.lecturer')->get();

        return Inertia::render('Admin/ShowProposals', compact('proposals'));
    }
}
