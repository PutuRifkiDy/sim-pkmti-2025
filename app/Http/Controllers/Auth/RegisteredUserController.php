<?php

namespace App\Http\Controllers\Auth;

use App\Enums\UserRole;
use App\Http\Controllers\Controller;
use App\Jobs\SendEmailJob;
use App\Mail\Welcome;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Contracts\Mail\Attachable;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'nim' => 'required|string|min:10|max:10|unique:' . User::class,
            'phone' => 'required|regex:/^08[0-9]+$/',
            'line_id' => 'required|string',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'nim' => $request->nim,
            'phone' => $request->phone,
            'line_id' => $request->line_id,
            'password' => Hash::make($request->password),
            'role' => UserRole::PARTICIPANT
        ]);

        event(new Registered($user));

        // send welcome email
        $emailArgs = [
            'email' => $user->email,
            'subject' => 'Selamat Datang di PKM TI',
            'view' => 'emails.welcome',
            'data' => [
                'name' => $user->name
            ],
            'attachments' => []
        ];
        dispatch(new SendEmailJob($emailArgs));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
