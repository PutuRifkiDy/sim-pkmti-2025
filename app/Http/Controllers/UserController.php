<?php

namespace App\Http\Controllers;

use App\Models\Team;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        //
    }

    public function update(Request $request, string $id)
    {
        $selectedRequest = [
            'name' => $request->input('name'),
            'role' => $request->input('role'),
            'email' => $request->input('email'),
            'nim' => $request->input('nim'),
            'phone' => $request->input('phone'),
            'line_id' => $request->input('line_id'),
            'status' => $request->input('status'),
            'certificate_path' => $request->input('certificate_path'),
        ];

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'role' => 'required|string',
            'email' => [
                'required',
                'email',
                Rule::unique('users')->ignore($id, 'id')
            ],
            'nim' => [
                'required',
                'string',
                'min:10',
                'max:10',
                Rule::unique('users')->ignore($id, 'id')
            ],
            'phone' => 'required|regex:/^08[0-9]+$/',
            'line_id' => 'required|string',
            'status' => 'nullable|string',
            'certificate_path' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        if ($validator->fails()) {
            return back()
                ->withErrors($validator)
                ->withInput();
        }


        if ($request->hasFile('certificate_path') && $request->file('certificate_path')->isValid()) {
            $image = $request->file('certificate_path');

            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->move(public_path('uploads'), $imageName);

            $selectedRequest['certificate_path'] = 'uploads/' . $imageName;
        }

        User::find($id)->update($selectedRequest);

        return back()->with('msg', 'Pengguna berhasil diperbarui');
    }

    public function destroy(string $id)
    {
        $userId = $id;

        // logic if he/she has a team
        $user = User::find($userId);

        if ($user->team_id) {
            $teamId = $user->team_id;
            $pastTeam = Team::with('members')->find($teamId);
            $teamMembersCount = User::where('team_id', $teamId)->count();

            if ($teamMembersCount == 1) {
                // logic if he/she was alone
                $pastTeam->delete();
            } else {
                // logic if he/she was a leader at the team
                if ($pastTeam->leader_id == $userId) {
                    $pastTeam->update(['leader_id' =>  $pastTeam->members()->first()->id]);
                }
            }
        }

        $user->delete();

        return back()->with('msg', 'Pengguna berhasil dihapus');
    }

    public function resetPassword(User $user)
    {
        $user->update([
            'password' => bcrypt($user->nim)
        ]);
        return back()->with('msg', 'Password berhasil direset');
    }
}
