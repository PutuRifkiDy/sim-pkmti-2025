<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proposal extends Model
{
    use HasFactory;

    protected $fillable = [
        'team_id',
        'scheme',
        'title', 
        'description', 
        'draft_proposal_url', 
        'final_proposal_url', 
        'status', 
        'note', 
    ];

    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}
