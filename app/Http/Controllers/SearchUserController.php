<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class SearchUserController extends Controller
{
    public function Index(): Response
    {
        $user                       = User::with('team', 'team.proposal', 'team.members', 'team.assistanceProofs')->find(Auth::id());
        $users_except_lecturer_user = User::where('role', '!=', 'lecturer')->get();
        return Inertia::render('ShowUsers/Index', compact('users_except_lecturer_user', 'user'));
    }
}
