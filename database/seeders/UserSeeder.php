<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            // Data dengan nim berawalan 230555
            ['name' => 'John Doe', 'email' => 'johndoe230555@example.com', 'nim' => '2305550001', 'phone' => '081234567890', 'line_id' => 'johndoe123', 'status' => 'failed', 'password' => bcrypt('password123')],
            ['name' => 'Jane Doe', 'email' => 'janedoe230555@example.com', 'nim' => '2305550002', 'phone' => '081234567891', 'line_id' => 'janedoe123', 'status' => 'failed', 'password' => bcrypt('password123')],
            // Data dengan nim berawalan 240555
            ['name' => 'Alex Smith', 'email' => 'alexsmith240555@example.com', 'nim' => '2405550001', 'phone' => '081234567892', 'line_id' => 'alexsmith123', 'status' => 'failed', 'password' => bcrypt('password123')],
            ['name' => 'Emily Clark', 'email' => 'emilyclark240555@example.com', 'nim' => '2405550002', 'phone' => '081234567893', 'line_id' => 'emilyclark123', 'status' => 'failed', 'password' => bcrypt('password123')],
            // Data dengan nim berawalan 220555
            ['name' => 'Michael Jordan', 'email' => 'michaeljordan220555@example.com', 'nim' => '2205550001', 'phone' => '081234567894', 'line_id' => 'michaeljordan123', 'status' => 'failed', 'password' => bcrypt('password123')],
            ['name' => 'Sarah Lee', 'email' => 'sarahlee220555@example.com', 'nim' => '2205550002', 'phone' => '081234567895', 'line_id' => 'sarahlee123', 'status' => 'failed', 'password' => bcrypt('password123')],
            // Data dengan nim berawalan 210555
            ['name' => 'Chris Brown', 'email' => 'chrisbrown210555@example.com', 'nim' => '2105550001', 'phone' => '081234567896', 'line_id' => 'chrisbrown123', 'status' => 'failed', 'password' => bcrypt('password123')],
            ['name' => 'Lisa White', 'email' => 'lisawhite210555@example.com', 'nim' => '2105550002', 'phone' => '081234567897', 'line_id' => 'lisawhite123', 'status' => 'failed', 'password' => bcrypt('password123')]
        ];

        DB::table('users')->insertOrIgnore($data);

    }
}
