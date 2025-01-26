<?php

namespace App\Http\Middleware;

use App\Models\Team;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureTeamHasLecturer
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $isTeamHasLecturer = Team::find($request->route('teamId'))->lecturer_id;
        
        if ($isTeamHasLecturer) return $next($request);

        return back()->with('msg', 'Tim belum memiliki Dosen Pembimbing');
    }
}
