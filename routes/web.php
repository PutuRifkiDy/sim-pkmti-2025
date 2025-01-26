<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AssistanceProofController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProposalController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\UserController;
use App\Jobs\SendEmailJob;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use function Termwind\render;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/test-email', function () {
    $emailArgs = [
        'email' => 'ptadityamahendrap@gmail.com',
        'subject' => 'Selamat Datang di PKM TI',
        'view' => 'emails.reject-proposal',
        'data' => [
            'name' => 'Aditya Mahendra',
            'proposal_title' => 'HAHAHA',
            'note' => 'Skill Issue'
        ],
        'attachments' => []
    ];
    dispatch(new SendEmailJob($emailArgs));
});

Route::get('/guidebook', fn () => Redirect::to('https://drive.google.com/drive/folders/1fczvCUzj9yp-uJetouDcljul4hZ2rwtU?usp=drive_link'))->name('guidebook');
Route::get('/panduan-belmawa', fn () => Redirect::to('https://drive.google.com/drive/folders/1rs3oFykE4d6NM7MUgxuNCqx291ORPqZI?usp=drive_link'))->name('panduanbelmawa');

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/dashboard', function () {
    $user = User::with('team', 'team.proposal', 'team.members', 'team.assistanceProofs')->find(Auth::id());

    $infos = [
        "hasTeam" => !is_null($user->team_id),
        "hasEnoughTeamMembers" => $user->team->members->count() >= 3,
        "hasProposal" => !is_null($user->team->proposal),
        "proposalStatus" => $user->team->proposal->status ?? "unsubmitted",
        // "note" => $user->team->proposal->note ?? "",
        "hasEnoughAssistanceProofs" => $user->team->assistanceProofs->count() >= 3,
    ];

    return Inertia::render('Dashboard', compact('infos'));
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::middleware('has.no-team')->group(function () {
        Route::get('/teams', fn () => Inertia::render('Teams/NotTeamed'))->name('teams.not-teamed');
        Route::post('/teams', [TeamController::class, 'create'])->name('teams.create');
        Route::get('/teams/{token}/join', [TeamController::class, 'join'])->name('teams.join');
    });

    Route::middleware(['role:admin,member'])->group(function () {
        Route::get('/teams/{teamId}', [TeamController::class, 'show'])->name('teams.show');
        Route::delete('/teams/{teamId}/leave', [TeamController::class, 'leave'])->name('teams.leave');
    });

    Route::middleware(['role:admin,leader'])->group(function () {
        Route::delete('/teams/{teamId}/kick/{userId}', [TeamController::class, 'kickMember'])->name('teams.kick');
        Route::patch('/teams/{teamId}/leader/{userId}', [TeamController::class, 'changeLeader'])->name('teams.changeLeader');
        Route::patch('/teams/{teamId}', [TeamController::class, 'update'])->name('teams.update');
        Route::delete('/teams/{teamId}', [TeamController::class, 'destroy'])->name('teams.destroy');
    });

    Route::middleware(['role:admin,member'])->prefix('/teams/{teamId}')->group(function () {
        Route::get('/proposals', [ProposalController::class, 'show'])->name('proposals.show');
        Route::post('/proposals', [ProposalController::class, 'create'])->middleware('has.no-proposal')->name('proposals.create');
        Route::patch('/proposals', [ProposalController::class, 'update'])->name('proposals.update');
        Route::delete('/proposals', [ProposalController::class, 'destroy'])->name('proposals.destroy');

        Route::get('/assistance-proofs', [AssistanceProofController::class, 'show'])->name('assistance-proofs.show');
        Route::middleware(['has.proposal', 'has.lecturer'])->group(function () {
            Route::post('/assistance-proofs', [AssistanceProofController::class, 'add'])->name('assistance-proofs.add');
            Route::patch('/assistance-proofs/{id}', [AssistanceProofController::class, 'update'])->name('assistance-proofs.update');
            Route::delete('/assistance-proofs/{id}', [AssistanceProofController::class, 'destroy'])->name('assistance-proofs.destroy');
        });
    });

    Route::middleware(['role:admin,lecturer'])->group(function () {
        Route::patch('/proposals/{proposalId}/accept', [ProposalController::class, 'accept'])->name('proposals.accept');
        Route::patch('/proposals/{proposalId}/reject', [ProposalController::class, 'reject'])->name('proposals.reject');
    });

    Route::middleware(['role:admin'])->resource('users', UserController::class);
});

Route::middleware(['auth', 'role:admin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');
    Route::get('/users', [AdminController::class, 'showUsers'])->name('admin.users');
    Route::get('/teams', [AdminController::class, 'showTeams'])->name('admin.teams');
    Route::get('/proposals', [AdminController::class, 'showProposals'])->name('admin.proposals');
    Route::get('/assistance-proofs', [AdminController::class, 'showAssistanceProofs'])->name('admin.assistance-proofs');
});

require __DIR__ . '/auth.php';
