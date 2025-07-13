<?php

namespace App\Http\Middleware;

use App\Models\Team;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class Role
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$roles): Response
    {
        $user = Auth::user();

        foreach ($roles as $role) {
            switch ($role) {
                case 'admin':
                    if ($user->role == $role)
                        return $next($request);
                    break;
                case 'lecturer':
                    if ($user->role == $role)
                        return $next($request);
                    break;
                case 'participant':
                    break;
                case 'member':
                    if ($user->team_id) {
                        $teamId = $request->route('teamId');
                        $members = Team::with("members")->find($teamId)->members()->get();
                        foreach ($members as $member) {
                            if ($user->id == $member->id) return $next($request);
                        }
                    }
                    break;
                case 'leader':
                    if ($user->team_id &&
                        $user->id == Team::find($user->team_id)->leader_id)
                            return $next($request);
                    break;
                case 'join_or_create':
                    if (!$user->team_id) return $next($request);
                    else return to_route('teams.show', $user->team_id);
                    break;
                default:
                    abort(403);
            }
        }

        abort(403);
    }
}
