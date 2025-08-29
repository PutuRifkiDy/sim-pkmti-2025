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
                $table->enum('status', ['passed', 'failed'])->nullable();
                $table->enum('status_grup_line_join', ['joined', 'not_joined'])->default('not_joined');
                $table->boolean('is_failed_inov')->default(false);
                $table->string('certificate_path')->nullable();
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
            $table->dropColumn('status');
            $table->dropColumn('certificate_path');
            $table->dropColumn('status_grup_line_join');
            $table->dropColumn('is_failed_inov');
        });
    }
};
