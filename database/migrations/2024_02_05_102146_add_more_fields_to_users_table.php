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
        Schema::table('users', function (Blueprint $table) {
            $table->after('email_verified_at', function ($table) {
                $table->string('nim', 10);
                $table->string('phone');
                $table->string('line_id');
                $table->enum('role', ['admin', 'participant', 'lecturer'])->default('participant');
            });
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('nim');
            $table->dropColumn('phone');
            $table->dropColumn('line_id');
            $table->dropColumn('role');
        });
    }
};
