<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LecturerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "nip" => "1985050920181123001",
                "nidn" => "0809058502",
                "name" => "Ni Kadek Dwi Rusjayanthi, S.T., M.T.",
                "email" => "dwi.rusjayanthi@unud.ac.id",
            ],
            [
                "nip" => "1983081620140212001",
                "nidn" => "8862650017",
                "name" => "Kadek S  W",
                "email" => "suar_wibawa@yahoo.com",
            ],
            [
                "nip" => "1985110320181113001",
                "nidn" => "0003118509",
                "name" => "I Putu Agus Eka Pratama, S.T., M.T.",
                "email" => "eka.pratama@unud.ac.id",
            ],
            [
                "nip" => "197404241999031003",
                "nidn" => "0024047406",
                "name" => "Prof. Dr. I Ketut Gede Darma Putra, S.Kom., M.T.",
                "email" => "ikgdarmaputra@unud.ac.id",
            ],
            [
                "nip" => "197506121999031002",
                "nidn" => "0006127508",
                "name" => "Dr. Ir. A.A. Kompiang Oka Sudana, S.Kom., M.T.",
                "email" => "agungokas@unud.ac.id",
            ],
            [
                "nip" => "197502272000031001",
                "nidn" => "0027027509",
                "name" => "I Nyoman Piarsa, ST., MT.",
                "email" => "manpits@unud.ac.id",
            ],
            [
                "nip" => "197312132008011004",
                "nidn" => "0013127304",
                "name" => "Anak Agung Ketut Agung Cahyawan Wiranatha, ST, MT",
                "email" => "agung.cahyawan@unud.ac.id",
            ],
            [
                "nip" => "197303262000031002",
                "nidn" => "0026037305",
                "name" => "Gusti Made Arya Sasmita, ST., MT.",
                "email" => "aryasasmita@unud.ac.id",
            ],
            [
                "nip" => "197304212001122001",
                "nidn" => "0021047310",
                "name" => "Gusti Agung Ayu Putri, S.T., M.T.",
                "email" => "agung.ayuputri@unud.ac.id",
            ],
            [
                "nip" => "197504232003121002",
                "nidn" => "0023047504",
                "name" => "Dr. Eng. I Putu Agung Bayupati, S.T.,M.T.",
                "email" => "bayupati@unud.ac.id",
            ],
            [
                "nip" => "197510242003121010",
                "nidn" => "0024107505",
                "name" => "Dr. I Made Sukarsa, ST.,MT",
                "email" => "sukarsa@unud.ac.id",
            ],
            [
                "nip" => "197904172008121002",
                "nidn" => "0017047903",
                "name" => "Putu Wira Buana, S.Kom.,MT",
                "email" => "wb@unud.ac.id",
            ],
            [
                "nip" => "198411202009121002",
                "nidn" => "0020118402",
                "name" => "I Ketut Adi Purnawan, ST., M.Eng",
                "email" => "adipurnawan@unud.ac.id",
            ],
            [
                "nip" => "198003172009122002",
                "nidn" => "0017038007",
                "name" => "Ni Made Ika Marini Mandenni, ST.,M.Kom",
                "email" => "made_ikamarini@unud.ac.id",
            ],
            [
                "nip" => "198308062010121005",
                "nidn" => "0006088304",
                "name" => "Dr.Eng. I Made Agus Dwi Suarjaya, S.T., M.Eng.",
                "email" => "agussuarjaya@it.unud.ac.id",
            ],
            [
                "nip" => "198103272014042001",
                "nidn" => "0827038102",
                "name" => "Ni Kadek Ayu Wirdiani, S.T., M.T.",
                "email" => "ayuwirdiani@unud.ac.id",
            ],
            [
                "nip" => "1988122520181123001",
                "nidn" => "0825128801",
                "name" => "Dr. Eng. Desy Purnami Singgih Putri, S.Si., M.Sc.",
                "email" => "desysinggihputri@gmail.com",
            ],
            [
                "nip" => "199111152019031017",
                "nidn" => "0015119103",
                "name" => "I Putu Arya Dharmaadi, ST.,MT",
                "email" => "aryadharmaadi@unud.ac.id",
            ],
            [
                "nip" => "1989052420181123001",
                "nidn" => null,
                "name" => "Ni Putu Sutrami, S.Kom., M.T.",
                "email" => "sutramiani@unud.ac.id",
            ],
            [
                "nip" => "1988050320181113001",
                "nidn" => "0803058801",
                "name" => "I Made Sunia Raharja, S.Kom., M.Cs",
                "email" => "sunia.raharja@unud.ac.id",
            ],
            [
                "nip" => "198606062015041001",
                "nidn" => "0806068602",
                "name" => "Dwi Putra Githa, S.T., M.T.",
                "email" => "dwiputragitha@gmail.com",
            ],
            [
                "nip" => "198808072014041001",
                "nidn" => "0007088804",
                "name" => "I Made Suwija Putra, S.T., M.T.",
                "email" => "putrasuwija@unud.ac.id",
            ],
            [
                "nip" => "198308162018031001",
                "nidn" => "0016088306",
                "name" => "KADEK SUAR WIBAWA, M.T.",
                "email" => "suar_wibawa@unud.ac.id",
            ],
            [
                "nip" => "1991100120181113001",
                "nidn" => "0001109102",
                "name" => "Anak Agung Ngurah Hary Susila, S.TI., M.MT.",
                "email" => "harysusila@unud.ac.id",
            ],
            [
                "nip" => "1992032020181113001",
                "nidn" => "0020039204",
                "name" => "Dewa Made Sri Arsa, S.Kom., M.Kom.",
                "email" => "dewamsa@unud.ac.id",
            ],
            [
                "nip" => "1990081320230813001",
                "nidn" => "8985550022",
                "name" => "Ir. Putu Veda Andreyana, S.TI.,M.T.",
                "email" => "putuveda@unud.ac.id",
            ],
            [
                "nip" => "1995052520230813001",
                "nidn" => "9900004168",
                "name" => "I Putu Sugi Almantara,S.TI., M.T.",
                "email" => "sugik.almantara@gmail.com",
            ],
            [
                "nip" => "199412232022031012",
                "nidn" => "0023129402",
                "name" => "Wayan Oger Vihikan, S.T.I., M.I.T.",
                "email" => "oger_vihikan@unud.ac.id",
            ],
            [
                "nip" => "198804052022032001",
                "nidn" => "0005048806",
                "name" => "Ni Wayan Emmy Rosiana Dewi, S.T., M.Kom.",
                "email" => "emmyrosiana@unud.ac.id",
            ],
            [
                "nip" => "198905242022032010",
                "nidn" => "0024058906",
                "name" => "Dr. Ni Putu Sutramiani, S.Kom., M.T.",
                "email" => "sutramiani@unud.ac.id",
            ],
            [
                "nip" => "199508202022031010",
                "nidn" => "0020089504",
                "name" => "Muhammad Alam Pasirulloh",
                "email" => "muhammad.alam@unud.ac.id",
            ],
            [
                "nip" => "199505012022031012",
                "nidn" => "0001059502",
                "name" => "I Nyoman Prayana Trisna, S.Kom., M.Cs.",
                "email" => "prayana.trisna@unud.ac.id",
            ],
            [
                "nip" => "199208152022031005",
                "nidn" => "0015089210",
                "name" => "Ir. Fajar Purnama, S.T.,M.Eng.,Ph.D.",
                "email" => "fajarpurnama@unud.ac.id",
            ],
            [
                "nip" => "199008172023211039",
                "nidn" => "0817089002",
                "name" => "Yohanes Perdana Putra, S.T.I., M.T.",
                "email" => "yperdana.putra@gmail.com",
            ],
            [
                "nip" => "199601192023211007",
                "nidn" => null,
                "name" => "Yogiswara Dharma Putra, S.T.I., M.T.",
                "email" => "yogiswaradputra@gmail.com",
            ]
        ];

        DB::table('lecturers')->insertOrIgnore($data);
    }
}
