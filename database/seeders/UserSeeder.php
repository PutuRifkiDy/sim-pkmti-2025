<?php
namespace Database\Seeders;

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
            [
                'name'     => "Putu Rifki Dirkayuda",
                'email'    => "puturifki56@gmail.com",
                'nim'      => "2305551068",
                'phone'    => "0881038194017",
                'line_id'  => "puturifki56",
                'status'   => "failed",
                'role'     => "admin",
                'password' => bcrypt("ilmiah231068"),
            ],
            [
                'name'     => "I Putu Gunamanta Yuana ",
                'email'    => "gunamanta.yuana@gmail.com ",
                'nim'      => "2405551100",
                'phone'    => "089643471945",
                'line_id'  => "swesty01",
                'status'   => "failed",
                'role'     => "admin",
                'password' => bcrypt("ilmiah241100"),
            ],
            [
                'name'     => "Putu Rama Devantara",
                'email'    => "runesong71@gmail.com",
                'nim'      => "2405551067",
                'phone'    => "081339619293",
                'line_id'  => "devantara123",
                'status'   => "failed",
                'role'     => "admin",
                'password' => bcrypt("ilmiah241067"),
            ],
            [
                'name'     => "Najwa Tahir",
                'email'    => "najwatahir186@gmail.com",
                'nim'      => "2405551039",
                'phone'    => "0895386344682",
                'line_id'  => "najwatahir8",
                'status'   => "failed",
                'role'     => "admin",
                'password' => bcrypt("ilmiah241039"),
            ],
            [
                'name'     => "Nyoman Tri Darma Wahyudi",
                'email'    => "triidarma06@gmail.com",
                'nim'      => "2305551052",
                'phone'    => "081333486847",
                'line_id'  => "tri.dharma.",
                'status'   => "failed",
                'role'     => "admin",
                'password' => bcrypt("ilmiah231052"),
            ],
            [
                'name'     => "Putu Devasya Aditya Widyadana",
                'email'    => "widyadana.2305551071@student.unud.ac.id ",
                'nim'      => "2305551071",
                'phone'    => "089643860167",
                'line_id'  => "aawwwdeva",
                'status'   => "failed",
                'role'     => "admin",
                'password' => bcrypt("ilmiah231071"),
            ],
            [
                'name'     => "I Made Nanda Prasetya Dwipayana",
                'email'    => "nandaprasetya712@gmail.com",
                'nim'      => "2405551043",
                'phone'    => "085706693595",
                'line_id'  => "nandaprasetya",
                'status'   => "failed",
                'role'     => "admin",
                'password' => bcrypt("ilmiah241043"),
            ],
            [
                'name'     => "Nyoman Wiprayanka",
                'email'    => "nyomantayo@gmail.com",
                'nim'      => "2305551009",
                'phone'    => "085969084584",
                'line_id'  => "nyomanwiprayanka",
                'status'   => "failed",
                'role'     => "admin",
                'password' => bcrypt("ilmiah231009"),
            ],
        ];

        DB::table('users')->insertOrIgnore($data);

    }
}
