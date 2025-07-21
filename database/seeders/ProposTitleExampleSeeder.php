<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProposTitleExampleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $data = [
            [
                'title'       => "Little Step: Platform Inovatif Dalam Mencegah Stunting Dalam Mengoptimalkan Tumbuh Kembang Anak",
                'scheme'      => "PKM - K",
                'institution' => "Universitas Bina Nusantara",
            ],
            [
                'title'       => "Inovasi Dengar Svara Sebagai Solusi Pembelajaran Bahasa Isyarat dan Pemberdayaan Penyandang Disabilitas",
                'scheme'      => "PKM - K",
                'institution' => "Universitas Bina Nusantara",
            ],
            [
                'title'       => "Roomify: Aplikasi Penghubung Customer dan Designer Interior dengan Transparansi Budget dan Personalisasi AI",
                'scheme'      => "PKM - K",
                'institution' => "Universitas Bina Nusantara",
            ],
            [
                'title'       => "Little Step: Platform Inovatif Dalam Mencegah Stunting Dalam Mengoptimalkan Tumbuh Kembang Anak",
                'scheme'      => "PKM - K",
                'institution' => "Universitas Bina Nusantara",
            ],
            [
                'title'       => "Petaloka: Inovasi Tas Cerdas Pencegah Skoliosis yang Dilengkapi dengan GPS dan Panic Button untuk Keamanan Anak di Era Digital",
                'scheme'      => "PKM - K",
                'institution' => "Universitas Telkom",
            ],
            [
                'title'       => "SIGMA (Sistem layanan Magang dan Mentoring Andalan) Platform Terdepan yang Mengintegrasikan Pencarian Magang dan Pendampingan Professional untuk Pengembangan Karir",
                'scheme'      => "PKM - K",
                'institution' => "Universitas Teknologi Yogyakarta",
            ],
            [
                'title'       => "Inovasi Buku Pembelajaran Asyik Kebudayaan Tulungagung Berbasis 3D Dilengkapi Audio, Game Interaktif serta QR Barcode untuk siswa Sekolah Dasar",
                'scheme'      => "PKM - K",
                'institution' => "Universitas Bhinneka PGRI",
            ],
            [
                'title'       => "Little Step: Platform Inovatif Dalam Mencegah Stunting Dalam Mengoptimalkan Tumbuh Kembang Anak",
                'scheme'      => "PKM - K",
                'institution' => "Universitas Bina Nusantara",
            ],
            [
                'title'       => "CubeBot: Inovasi Robot Edukasi untuk Mengembangkan Keterampilan Berpikir Ranah Kognitif, Afektif, dan Psikomotorik pada Periode Intelektual",
                'scheme'      => "PKM - K",
                'institution' => "Universitas Muhammadiyah Malang",
            ],
            [
                'title'       => "Little Explorer: Mini Book Interaktif sebagai Media Belajar Vocabulary Bahasa Inggris dengan Metode Demonstrasi Berbasis Augmented Reality",
                'scheme'      => "PKM - K",
                'institution' => "Universitas PGRI Jombang",
            ],
            [
                'title'       => "Little Step: Platform Inovatif Dalam Mencegah Stunting Dalam Mengoptimalkan Tumbuh Kembang Anak",
                'scheme'      => "PKM - K",
                'institution' => "Universitas Bina Nusantara",
            ],
            [
                'title'       => "MathQuest: Interactive Speaking Card berbasis Petualangan sebagai Upaya Meningkatkan Self Efficacy dan Pemahaman Konsep Geometri untuk Siswa Sekolah Dasar",
                'scheme'      => "PKM - K",
                'institution' => "Universitas PGRI Jombang",
            ],
            [
                'title'       => "GenKiddo Academy: Platform Pembelajaran Coding dan AI Anak Berbasis LMS untuk Mencetak Talenta Digital Indonesia Emas 2045",
                'scheme'      => "PKM - K",
                'institution' => "Institut Teknologi Sepuluh Nopember",
            ],
            [
                'title'       => "REXTRA: Aplikasi Mobile Rekomendasi Persiapan Karir Digital Berbasis Artificial Intelligence Guna Optimalisasi Career Self-EfficacyMahasiwa dalam Ekosistem Digital Indonesia",
                'scheme'      => "PKM - K",
                'institution' => "Institut Teknologi Sepuluh Nopember",
            ],
            [
                'title'       => "Curhatorium: Platform Inovasi Gamified Peer-support Community untuk Meningkatkan Kesehatan Mental Generasi Muda",
                'scheme'      => "PKM - K",
                'institution' => "Universitas Airlangga",
            ],
            [
                'title'       => "ChiBook: Buku Interaktif untuk Mengasah Berpikir Komputasional sebagai Langkah dalam Meningkatkan Kemampuan Pemecahan Masalah Anak Usia Dini",
                'scheme'      => "PKM - K",
                'institution' => "Universitas Diponegoro",
            ],
            [
                'title'       => "Nova the Starbook: Revolusi Smart Storybook Interaktif berbasis Role Modelling untuk Menanamkan Kemandirian dan Kebiasaan Sehat Gigi Anak Sejak Dini",
                'scheme'      => "PKM - K",
                'institution' => "UUniversitas Gadjah Mada",
            ],
            [
                'title'       => "Protextify: Inovasi Platform Penulisan Digital Anti-Plagiarisme Berbasis Cloud-Based Website dan Text Analytics untuk Penguatan Literasi dan Integritas Akademik",
                'scheme'      => "PKM - K",
                'institution' => "Universitas Lampung",
            ],
            [
                'title'       => "Speaking Anxiety Reduction Kit: Modul Pembelajaran Adaptif dengan Integrasi Fitur Analisis Ekspresi Wajah untuk Mengurangi Kecemasan Berbicara Pelajar Bahasa Inggris",
                'scheme'      => "PKM - K",
                'institution' => "Universitas Negeri Malang",
            ],
            [
                'title'       => "Inovasi Bisnis Teknologi Pengusir Hama Pertanian Padi Berbasis Internet of Things Terintegrasi Solar Cell",
                'scheme'      => "PKM - K",
                'institution' => "Universitas Negeri Padang",
            ],
            [
                'title'       => "Incensory: Inovasi Alat Terapi Multisensori Berbasis Kombinasi Parfum Kemenyan dan Virtual Reality Phone sebagai Upaya Mengatasi Fobia Spesifik",
                'scheme'      => "PKM - K",
                'institution' => "Universitas Padjadjaran",
            ],
            [
                'title'       => "SmartBungah: Expressive Smart Pot Berbasis Voice Interaction sebagai Media Stress Relief dan Upaya Green Living di Kawasan Urban",
                'scheme'      => "PKM - K",
                'institution' => "Universitas Padjadjaran",
            ],
            [
                'title'       => "PetPartner : Usaha Jasa Layanan Berbasis Aplikasi Terintegrasi Untuk Kebutuhan dan Kesejahteraan Hewan Peliharaan",
                'scheme'      => "PKM - K",
                'institution' => "Universitas Sumatera Utara",
            ],
            [
                'title'       => "STORY BLOX: Mainan Edukatif Cerita Pendek Berbasis STEM Untuk Mendukung Kemampuan Spasial Pada Anak Perempuan",
                'scheme'      => "PKM - K",
                'institution' => "Universitas Tidar",
            ],
            [
                'title'       => "Surverior: Startup Survei Akademik Digital dengan AI & Gamifikasi untuk Meningkatkan Kualitas Data Penelitian",
                'scheme'      => "PKM - K",
                'institution' => "Politeknik Negeri Bandung",
            ],
            [
                'title'       => "NISKALA: Adventure Game berbasis Branching Narrative unuk Edukasi Literasi Digital dan Perlawanan Judi Online Berkedok Game bagi Generasi Muda",
                'scheme'      => "PKM - K",
                'institution' => "Politeknik Negeri Jakarta",
            ],
        ];

        DB::table('propos_title_examples')->insert($data);
    }
}
