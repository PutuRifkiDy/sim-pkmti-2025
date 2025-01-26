<?php

namespace App\Http\Middleware;

use App\Models\Proposal;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureTeamHasProposal
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $isProposalExist = Proposal::where('team_id', $request->route('teamId'))->first();
        
        if ($isProposalExist) return $next($request);

        return back()->with('msg', 'Tim belum memiliki proposal');
    }
}
