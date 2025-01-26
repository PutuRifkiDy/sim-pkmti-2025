<?php

namespace App\Http\Controllers;

use App\Models\AssistanceProof;
use App\Models\Lecturer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AssistanceProofController extends Controller
{
    public function show($teamId)
    {
        $proofs = AssistanceProof::with('team')->where('team_id', $teamId)->orderBy('assistance_date', 'asc')->get();
        
        return Inertia::render('AssistanceProofs/Show', compact('proofs'));
    }

    public function add(Request $request, $teamId)
    {
        $request->validate([
            'proof_url' => 'required|url|max:255|unique:'.AssistanceProof::class,
            'assistance_date' => 'required|date',
        ], [
            'proof_url.required' => 'Mohon masukkan bukti asistensi',
            'assistance_date.required' => 'Mohon pilih tanggal saat asistensi dilakukan',
        ]);

        AssistanceProof::create([
            'proof_url' => $request->proof_url,
            'team_id' => $teamId,
            'assistance_date' => $request->assistance_date,
        ]);

        return back()->with('msg', 'Bukti asistensi berhasil diunggah');
    }

    public function update(Request $request, $teamId, $id)
    {
        $request->validate([
            'proof_url' => 'required|url',
            'assistance_date' => 'required|date',
        ]);

        AssistanceProof::find($id)->update($request->all());

        return back()->with('msg', 'Bukti asistensi berhasil diubah');
    }

    public function destroy($teamId, $id)
    {
        AssistanceProof::find($id)->delete();

        return back()->with('msg', 'Bukti asistensi berhasil dihapus');
    }

    
}
