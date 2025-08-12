<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AssistanceProofController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProposalController;
use App\Http\Controllers\ProposTitleExampleController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\UserController;
use App\Jobs\SendEmailJob;
use App\Models\Proposal;
use App\Models\User;
use Carbon\Carbon;
use function Termwind\render;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
        'email'       => 'ptadityamahendrap@gmail.com',
        'subject'     => 'Selamat Datang di PKM TI',
        'view'        => 'emails.reject-proposal',
        'data'        => [
            'name'           => 'Aditya Mahendra',
            'proposal_title' => 'HAHAHA',
            'note'           => 'Skill Issue',
        ],
        'attachments' => [],
    ];
    dispatch(new SendEmailJob($emailArgs));
});

Route::get('/guidebook', fn() => Redirect::to('https://drive.google.com/drive/folders/1fczvCUzj9yp-uJetouDcljul4hZ2rwtU?usp=drive_link'))->name('guidebook');
Route::get('/panduan-belmawa', fn() => Redirect::to('https://drive.google.com/drive/folders/1rs3oFykE4d6NM7MUgxuNCqx291ORPqZI?usp=drive_link'))->name('panduanbelmawa');

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin'       => Route::has('login'),
        'canRegister'    => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion'     => PHP_VERSION,
    ]);
})->name('welcome');

// Route::get('/proposal-titles', function () {
//     return Inertia::render('ProposalTitles', [ProposTitleExampleController::class, 'index']);
// })->name('proposal-titles');

Route::get('proposal-titles', [ProposTitleExampleController::class, 'index'])->name('proposal-titles');

Route::get('/dashboard', function () {
    $user     = User::with('team', 'team.proposal', 'team.members', 'team.assistanceProofs')->find(Auth::id());
    $get_user = User::select('name', 'nim', 'status')->where('status', 'passed')->find(Auth::id());

    // sharing session
    $end_date_sharing_session_event = date('Y-m-d H:i:s', strtotime('2025-08-12 03:07:00'));
    // setelah sharing session
    $end_date_hari_h_event = date('Y-m-d H:i:s', strtotime('2025-08-12 03:09:00'));
    // sebelum daftar tim
    $start_date_coaching_PKM = date('Y-m-d H:i:s', strtotime('2025-08-12 03:10:00'));

    $timeline_events = [
        [
            'title' => 'Pembukaan dan Sharing Session Pelatihan PKM-TI 2025',
            'date'  => $end_date_sharing_session_event,
        ],
        [
            'title' => 'Pendaftaran Pelatihan PKM-TI 2025',
            'date'  => $start_date_coaching_PKM,
        ],
    ];

    $date_sharing_session = null;
    $date_coaching_pkm    = null;
    $text_hari_h          = "";

    if (Carbon::now() < Carbon::parse($end_date_sharing_session_event)) {
        $date_sharing_session = $timeline_events[0];
    } elseif (Carbon::now() < Carbon::parse($end_date_hari_h_event)) {
        $text_hari_h = "Sedang berlangsung acara Pembukaan dan Sharing Session Pelatihan PKM-TI 2025";
    } elseif (Carbon::now() < Carbon::parse($start_date_coaching_PKM)) {
        $date_coaching_pkm = $timeline_events[1];
    }

    $infos = [
        "hasTeam"                   => ! is_null($user->team),
        "hasProposal"               => $user->team && ! is_null($user->team->proposal),
        "proposalStatus"            => $user->team && $user->team->proposal ? $user->team->proposal->status : 'unsubmitted',
        "hasEnoughAssistanceProofs" => $user->team && $user->team->assistanceProofs->count() >= 3,
        "hasNotUploadFinalProposal" => $user->team?->proposal?->final_proposal_url == null,
    ];

    if (str_contains($user->nim, '24')) {
        $infos["hasEnoughTeamMembersAkt24"] = $user->team && $user->team->members->count() == 3;
    } else {
        $infos["hasEnoughTeamMembersNonAkt24"] = $user->team && $user->team->members->count() >= 3;
    }

    return Inertia::render('Dashboard', compact('infos', 'user', 'get_user', 'date_sharing_session', 'date_coaching_pkm', 'end_date_hari_h_event', 'text_hari_h', 'timeline_events'));
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::middleware('has.no-team')->group(function () {
        Route::get('/teams', fn() => Inertia::render('Teams/JoinOrCreate'))->name('teams.join_or_create');
        Route::get('/teams/join-tim', fn() => Inertia::render('Teams/JoinTeam'))->name('teams.join_tim');
        Route::get('/teams/create-tim', fn() => Inertia::render('Teams/CreateTeam'))->name('teams.create_tim');
        // Route::get('/teams', fn () => Inertia::render('Teams/NotTeamed'))->name('teams.not-teamed');
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
        Route::delete("admin/teams/delete/{teamId}", [TeamController::class, 'destroy_admin'])->name('admin.teams.destroy');
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
    Route::middleware(['role:admin'])->post('users/{user}', [UserController::class, 'update'])->name('users.update');
    Route::middleware(['role:admin'])->post('user/{user}/reset-password', [UserController::class, 'resetPassword'])->name('users.reset-password');
});

Route::middleware('auth')->prefix('admin')->group(function () {
    Route::get('/dashboard', [AdminController::class, 'index'])->name('admin.dashboard')->middleware('role:admin,lecturer');
    Route::get('/users', [AdminController::class, 'showUsers'])->name('admin.users')->middleware('role:admin');
    Route::get('/teams', [AdminController::class, 'showTeams'])->name('admin.teams')->middleware('role:admin');
    Route::get('/proposals', [AdminController::class, 'showProposals'])->name('admin.proposals')->middleware('role:lecturer,admin');
    Route::get('/assistance-proofs', [AdminController::class, 'showAssistanceProofs'])->name('admin.assistance-proofs')->middleware('role:admin');
});

require __DIR__ . '/auth.php';
