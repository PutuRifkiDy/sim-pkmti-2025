<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lecturer extends Model
{
    use HasFactory;

    protected $protected = [];

    public function assistanceProofs()
    {
        return $this->hasMany(AssistanceProof::class);
    }

    public function teams()
    {
        return $this->hasMany(Team::class);
    }
}
