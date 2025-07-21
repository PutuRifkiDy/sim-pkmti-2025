<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ProposTitleExample;
use GuzzleHttp\Psr7\Response;
use Inertia\Inertia;

class ProposTitleExampleController extends Controller
{
    public function index()
    {
        $propos_title_example = ProposTitleExample::get();

        return Inertia::render('ProposalTitles', compact('propos_title_example'));
    }
}
