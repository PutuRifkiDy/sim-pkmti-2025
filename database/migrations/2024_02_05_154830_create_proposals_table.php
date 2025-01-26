<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('proposals', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('team_id');
            $table->enum('scheme', ['PKM-RE', 'PKM-VGK', 'PKM-KI', 'PKM-K', 'PKM-PM', 'PKM-PI', 'PKM-GFT', 'PKM-RSH', 'PKM-KC', 'PKM-AI']);
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('draft_proposal_url')->nullable();
            $table->string('final_proposal_url')->nullable();
            $table->enum('status', ['pending', 'approved', 'rejected'])->nullable();
            $table->text('note')->nullable();
            $table->timestamps();

            $table->foreign('team_id')->references('id')->on('teams')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proposals');
    }
};
