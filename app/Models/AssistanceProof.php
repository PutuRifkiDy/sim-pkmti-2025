<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AssistanceProof extends Model
{
    use HasFactory;

    protected $protected = [];

    protected $fillable = [
        'proof_url',
        'team_id',
        'assistance_date',
    ];

    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}
