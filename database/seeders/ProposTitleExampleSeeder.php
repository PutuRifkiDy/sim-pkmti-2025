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
            [
                'title'       => "BalaSwara: Aplikasi Terapi Wicara Berbasis Gamifikasi sebagai Media dalam Peningkatan Kemampuan Bicara Penyandang Tuli di Rumah Ceria Medan",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Muhammadiyah Sumatera Utara",
            ],
            [
                'title'       => "Pemberdayaan Karang Taruna Mengedukasi Peka Toksin Berbasis AI Sebagai Pencegah dan Pendeteksi Jamur Hitam Untuk Melindungi Kesehatan Warga Desa Pamekaran",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Komputer Indonesia",
            ],
            [
                'title'       => "Inovasi Layanan Hukum Berbasis Digital Melalui Platform Hak Keadilan Kita (HAKITA) Untuk Pemberdayaan Karang Taruna Dalam Mewujudkan Desa Sadar Hukum",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Kuningan",
            ],
            [
                'title'       => "PROGRAM CIREMAI AUGMENTED REALITY ADVENTURE (CEMARA) UNTUK MENDUKUNG IMPLEMENTASI MUATAN LOKAL GUNUNG CIREMAI DI SEKOLAH PILOT PROJECT",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Kuningan",
            ],
            [
                'title'       => "J-Digi Platfom Journalling Digital dalam Upaya Mengatasi Dampak Bullying dan Meningkatkan Produktivitas Siswa di MTSs Al Wahdah",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Swadaya Gunung Jati",
            ],
            [
                'title'       => "Inovasi Skrining Kesehatan Mental Calon Pengantin Berbasis Aplikasi SEKATA di KUA Kapanewon Sewon",
                'scheme'      => "PKM - PM",
                'institution' => "Sekolah Tinggi Ilmu Kesehatan Akbidyo",
            ],
            [
                'title'       => "Smart Posyandu: Optimalisasi Layanan 5 Meja Posyandu Berbasis Digital Menuju Posyandu 4.0",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Aisyiyah Yogyakarta",
            ],
            [
                'title'       => "Meningkatkan Kualitas Hidup Lansia di Panti Wredha Mulya melalui Sistem Pengingat Obat Otomatis",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Kristen Duta Wacana",
            ],
            [
                'title'       => "Lab Mini Sains: Pemberdayaan Karang Taruna dalam Eksperimen Edukatif Melalui AR dan Prototype Guna Meningkatkan Kualitas SDM Desa Kenteng",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Dian Nuswantoro",
            ],
            [
                'title'       => "Pendampingan Pemanfaatan Media Digital Interaktif Berbasis Gamifikasi untuk Optimalisasi Kompetensi Mengajar Guru di MTs Nurun Najah Kepuk Jepara",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Islam Nahdlatul Ulama Jepara",
            ],
            [
                'title'       => "Garudaku: Flip Book Berbasis Augmented Reality Guna Meningkatkan Profil Karakter Pancasila Pada Anak Usia Sd Di Panti Asuhan Yayasan Bunyanun Marsus Indonesia",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Muhammadiyah Semarang",
            ],
            [
                'title'       => "JAWARA-TECH: PENINGKATAN LITERASI BAHASA KRAMA DAN AKSARA JAWA MELALUI GAME BASED LEARNING TERINTEGRASI IT DI SD MUHAMMADIYAH 16 KARANGASEM",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Muhammadiyah Surakarta",
            ],
            [
                'title'       => "LENTERA ZYLAND: Game Edukasi Berbasis Computational Thinking untuk Meningkatkan Literasi Numerasi Siswa Slow Learner di Sekolah Inklusif Surakarta",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Muhammadiyah Surakarta",
            ],
            [
                'title'       => "SAMATA (Smart Augmented Technology for Children Disability): Stroller Pintar untuk Anak-anak Autisme melalui Komunikasi Augmentatif Gambar di SLB-River Kids",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Muhammadiyah Malang",
            ],
            [
                'title'       => "Peningkatan Soft Skill dan Hard Skill Santri Pondok untuk Membangun Santripreneur melalui Budidaya Lele dengan Metode Bioflok Berbasis IoT",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Nahdlatul Ulama Blitar",
            ],
            [
                'title'       => "Pesantren Digital Class: Pelatihan Menulis Cerita Bahasa Inggris berbasis Artificial Intelligence ",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Nahdlatul Ulama Sunan Giri",
            ],
            [
                'title'       => "Adabku Budayaku: Digitalisasi Nilai Tata Krama Anak Usia Dini dengan Media Cerita interaktif Augmented Story Telling",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas PGRI Jombang",
            ],
            [
                'title'       => "EduSmart: Media Audio-Visual Interaktif untuk Mengenalkan Angka dan Kosakata Bagi Siswa Tunagrahita di SLB Ibadurrahman ",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas PGRI Jombang",
            ],
            [
                'title'       => "Penerapan Teknologi IoT: Tempat Sampah Cerdas (Arduino-Based Smart Trash) sebagai Sarana Edukasi Pemilahan Sampah Organik dan Anorganik siswa di Sekolah",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas PGRI Mpu Sindok",
            ],
            [
                'title'       => "Etnobook Makka-QR Code: Membangun Arithmetic Adventure Bagi Penyandang Tunarungu di SLB Harapan Sinjai ",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Muhammadiyah Bone",
            ],
            [
                'title'       => "Lontara Technobraille: Integrasi Media Pembelajaran Aksara Lontara Berbasis Arduino pada Siswa Tunanetra SLB-A Yapti sebagai Aksebilitas Pendidikan Inklusi",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Muhammadiyah Makassar",
            ],
            [
                'title'       => "Optimalisasi Sistem Informasi Keuangan Berbasis IT pada Panti Asuhan Aisyiyah untuk Meningkatkan Efisiensi dan Akurasi Laporan Keuangan",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Dharma Andalas",
            ],
            [
                'title'       => "Pengembangan Modul dan Pelatihan Proyek Elektronika untuk Mendukung Deep Learning dalam Pembelajaran P5 Rekayasa Teknologi bagi Siswa SMAN 9 Pekanbaru",
                'scheme'      => "PKM - PM",
                'institution' => "Politeknik Caltex Riau",
            ],
            [
                'title'       => "Biohero: Transformasi Komunitas Muda Kader Lingkungan Lesanpuro Melalui LCA(Life Cycle Assessment) Berbasis Aplikasi Kita.Hijau Guna Menciptakan Lingkungan Bersih",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Brawijaya",
            ],
            [
                'title'       => "Revitalisasi Lingkungan Tambaklorok melalui 𝘚𝘪𝘭𝘷𝘰𝘧𝘪𝘴𝘩𝘦𝘳𝘺 𝘈𝘲𝘶𝘢𝘤𝘶𝘭𝘵𝘶𝘳𝘦 𝘚𝘺𝘴𝘵𝘦𝘮 berbasis IoT: Inovasi Budidaya Perikanan Memanfaatkan Lahan Terabrasi untuk Mendukung Pembangunan Berkelanjutan",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Diponegoro",
            ],
            [
                'title'       => "Peningkatan Oromotor Anak dengan Speech Delay di Wahana Keluarga Cerebral Palsy melalui Game Edukatif Berbasis Audio Sensory dan Augmented Reality",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Gadjah Mada",
            ],
            [
                'title'       => "Anemia Guard: Upaya Pencegahan Anemia Berbasis Digital Book and Augmented Reality Pada Remaja Putri SMA Negeri 5 Kota Jambi",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Jambi",
            ],
            [
                'title'       => "Si Gempi: Komik Edukasi Hukum Cambuk Berbasis AR 3D Sebagai Solusi Pencegahan Jarimah di SMAN 1 Kuta Makmur",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Malikussaleh",
            ],
            [
                'title'       => "BRIGHT: Pengembangan Wisata Budaya dan Alam Brakseng Berbasis Internet of Things Melalui Optimalisasi Kelompok Informasi Masyarakat",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Negeri Malang",
            ],
            [
                'title'       => "Galaktika Project: Inovasi Produk Edukatif AR Kolaboratif melalui Assemblr Edu dan Canva untuk Optimalisasi Proyek P5 dan Literasi Digital Berkelanjutan",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Negeri Manado",
            ],
            [
                'title'       => "Ngoding bareng siswa SMA 2 Tondano melalui pelatihan Matlab untuk visualisasi Eksperimen Fisika berbasis Komputasi",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Negeri Manado",
            ],
            [
                'title'       => "Portmath : Aplikasi Virtual Laboratory Berbasis Differentiated Learning Terintegrasi Augmented Reality Untuk Meningkatkan Keterampilan Numerasi Siswa SMP Negeri 15 Surabaya",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Negeri Surabaya",
            ],
            [
                'title'       => "Budidaya Labu Siam Berteknologi IoT dan Panel Surya Pada Lahan Non Produktif Untuk Meningkatkan Pendapatan Kelompok PKK Di Desa Belantih",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Pendidikan Ganesha",
            ],
            [
                'title'       => "Charity Education: Menciptakan Joyful Learning pada Kelas ABK Multikategori melalui Morph Cards Berdiferensiasi Berbasis AR Terintegrasi Mindfulness di Yayasan CIMD",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Pendidikan Ganesha",
            ],
            [
                'title'       => "Sustainzyme: Eco Enzyme Berbasis IoT sebagai Upaya Pemberdayaan Masyarakat dalam Pengelolaan Limbah Organik Menuju Ekonomi Hijau",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Pendidikan Indonesia",
            ],
            [
                'title'       => "Zona Anak Religi: Edukasi Tarikh Islam melalui Pop-up Book Interaktif berbasis Augmented Reality bagi Anak-anak DTA Al-Barkah Gegerkalong Bandung",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Pendidikan Indonesia",
            ],
            [
                'title'       => "OPTIMALISASI PERAN KADER DALAM DETEKSI DINI PENYAKIT TIDAK MENULAR MELALUI PENGGUNAAN APLIKASI ANDROID DAN PEMANFAATAN TANAMAN OBAT KELUARGA",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Sam Ratulangi",
            ],
            [
                'title'       => "Implementasi Pembelajaran AI melalui Pengembangan Aplikasi Chatbot Reminder bagi Guru dan Siswa Berbasis Website di SMAN 2 Bangkalan",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Trunojoyo",
            ],
            [
                'title'       => "OPTIMALISASI LITERASI DAN NUMERASI SISWA SEKOLAH DASAR DI YAYASAN AL FURQAN JEMBER MELALUI MINI ROBOT UNTUK MEWUJUDKAN INDONESIA EMAS 2045",
                'scheme'      => "PKM - PM",
                'institution' => "Politeknik Negeri Jember",
            ],
            [
                'title'       => "Pemberdayaan Keluarga dan Pengasuh Anak dengan Autisme melalui Platform Web Interaktif untuk Edukasi Gizi Seimbang dan Alternatif Modifikasi Makanan",
                'scheme'      => "PKM - PM",
                'institution' => "Politeknik Negeri Jember",
            ],
            [
                'title'       => "Smart Posyandu: Optimalisasi Layanan 5 Meja Posyandu Berbasis Digital Menuju Posyandu 4.0",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Aisyiyah Yogyakarta",
            ],
            [
                'title'       => "Transformasi Digital: Penguatan Literasi Keuangan dan Teknologi Pembayaran QRIS bagi Paguyuban Pedagang Tradisional di Pasar Argosari Gunungkidul",
                'scheme'      => "PKM - PM",
                'institution' => "Sekolah Tinggi Ilmu Manajemen YKPN Yogyakarta ",
            ],
            [
                'title'       => "Implementasi Digital Marketing melalui Revitalisasi Anyaman Daun Lontar pada PKK di Desa Bontobulaeng Kabupaten Bulukumba",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Dipa Makassar",
            ],
            [
                'title'       => "Transformasi Pembelajaran Menjelajah Tata Surya dengan Teknologi Hologram sebagai Upaya Meningkatkan Kualitas Pendidikan IPAS di SD Negeri Pampang",
                'scheme'      => "PKM - PM",
                'institution' => "Universitas Muslim Indonesia",
            ],
            [
                'title'       => "Implementasi Alat Inkubator Fermentasi IoT Terintegrasi Web Monitoring dan Energi Terbarukan Untuk Meningkatkan Produktivitas Usaha Tempe Jaya Mandiri 1980 Purwokerto",
                'scheme'      => "PKM - PI",
                'institution' => "UNIVERSITAS TELKOM",
            ],
            [
                'title'       => "Dissolve – Multisensori Augmented Reality untuk Disleksia: Inovasi Digital sebagai Transformasi Peningkatan Layanan PPDK Kemuning Kembar",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Kristen Duta Wacana",
            ],
            [
                'title'       => "Smartpaddy: Penerapan Drone Sprayer Pesticide Berbasis Iot Untuk Meningkatkan Efisiensi Dan Produktivitas Pertanian Di Kelompok Tani Maju Makmur Salatiga",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Muhammadiyah Semarang",
            ],
            [
                'title'       => "Digitalisasi Usaha Toko Sayur Lokal melalui Platform E-Commerce Fresh Market: Inovasi Mahasiswa untuk Pemberdayaan UMKM",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Semarang",
            ],
            [
                'title'       => "Transformasi Digital Customer Service menggunakan Artificial Intelligence Untuk Akselerasi Bisnis Dan Peningkatan Penjualan Pada Komunitas Rajuters Solo",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Sugeng Hartono",
            ],
            [
                'title'       => "PKM IMPLEMENTASI SISTEM KONTROL SUHU DAN SALINITAS AIR BERBASIS ARDUINO PADA TAMBAK BUDIDAYA UDANG VANAME SONGKA",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Cokroaminoto Palopo",
            ],
            [
                'title'       => "PKM PENERAPAN TEKNOLOGI SISTEM KONTROL GAS BERACUN OTOMATIS PADA KELOMPOK USAHA TERNAK AYAM LAYER BERBASIS ARDUINO",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Cokroaminoto Palopo",
            ],
            [
                'title'       => "PKM PENERAPAN TEKNOLOGI SMART DEW IRRIGATION PADA BUDIDAYA TANAMAN IPOMOEA REPTANS BERBASIS INTERNET OF THINGS",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Cokroaminoto Palopo",
            ],
            [
                'title'       => "Penerapan Aplikasi Internet Of Things Sebagai solusi Cerdas Untuk Monitoring Budidaya Lobster Mutiara di Desa Leppe",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Muhammadiyah Kendari",
            ],
            [
                'title'       => "Implementasi Alat Inkubator Fermentasi IoT Terintegrasi Web Monitoring dan Energi Terbarukan Untuk Meningkatkan Produktivitas Usaha Tempe Jaya Mandiri 1980 Purwokerto",
                'scheme'      => "PKM - PI",
                'institution' => "UNIVERSITAS TELKOM",
            ],
            [
                'title'       => "Biowatch-X: Teknologi Sistem Monitoring Real-Time Hama Babi Hutan dan Orangutan Berbasis Internet of Things pada Perkebunan UD. Sawit Jaya",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Muhammadiyah Banjarmasin",
            ],
            [
                'title'       => "IChili: Pemantauan dan Pengendalian Penyakit Cabai Rawit Tiung Tanjung Berbasis Internet of Things untuk Optimalisasi Produktivitas Pertanian UD Lestari Kecamatan Bakumpai",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Muhammadiyah Banjarmasin",
            ],
            [
                'title'       => "SmartAgri Borneo: Sistem Monitoring dan Penyiraman Otomatis Berbasis Internet of Things Sebagai Optimalisasi Efisiensi Pembudidaya di UD. Jamur Borneo",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Muhammadiyah Banjarmasin",
            ],
            [
                'title'       => "SmartAgri Borneo: Sistem Monitoring dan Penyiraman Otomatis Berbasis Internet of Things Sebagai Optimalisasi Efisiensi Pembudidaya di UD. Jamur Borneo",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Muhammadiyah Banjarmasin",
            ],
            [
                'title'       => "Implementasi IoT berbasis website untuk monitoring real-time penggunaan Air bersih dan Estimasi tagihan pada PDAM kota Kupang.",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Katolik Widya Mandira Kupang",
            ],
            [
                'title'       => "GREENFEEDER : INOVASI ALAT PEMBERI PAKAN IKAN OTOMATIS BERBASIS ARDUINO DAN PLTS UNTUK MENDUKUNG BUDIDAYA IKAN BERKELANJUTAN DI KOLAMPAK NADIR",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Riau Kepulauan",
            ],
            [
                'title'       => "IMPLEMENTASI KONTROL SUHU BERBASIS ARDUINO PADA OVEN KUE BROWNIES DALAM MENINGKATKAN EFEKTIFITAS DAN PRODUKTIVITAS PROSES PRODUKSI UMKM BAPAK SUGENG",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Riau Kepulauan",
            ],
            [
                'title'       => "GREENFEEDER : INOVASI ALAT PEMBERI PAKAN IKAN OTOMATIS BERBASIS ARDUINO DAN PLTS UNTUK MENDUKUNG BUDIDAYA IKAN BERKELANJUTAN DI KOLAM PAK NADIR",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Riau Kepulauan",
            ],
            [
                'title'       => "IMPLEMENTASI KONTROL SUHU BERBASIS ARDUINO PADA OVEN KUE BROWNIES DALAM MENINGKATKAN EFEKTIFITAS DAN PRODUKTIVITAS PROSES PRODUKSI UMKM BAPAK SUGENG",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Riau Kepulauan",
            ],
            [
                'title'       => "FeediKoi Berbasis ESP32 dan AIoT sebagai Sistem Otomatis Manajemen Pakan Ikan untuk Peningkatan Kualitas Produksi di Rumah Singgah Koi Farm",
                'scheme'      => "PKM - PI",
                'institution' => "Institut Teknologi Sepuluh Nopember",
            ],
            [
                'title'       => "Smartbiome: Pemanfaatan Kangkung Air (Ipomoea aquatica) dan Filtrasi untuk Reduksi Amonia dengan Sistem Monitoring real-time di Tambak Bandeng Keputih",
                'scheme'      => "PKM - PI",
                'institution' => "Institut Teknologi Sepuluh Nopember",
            ],
            [
                'title'       => "PKM PENERAPAN TEKNOLOGI SISTEM KONTROL GAS BERACUN OTOMATIS PADA KELOMPOK USAHA TERNAK AYAM LAYER BERBASIS ARDUINO",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Cokroaminoto Palopo",
            ],
            [
                'title'       => "PKM PENERAPAN TEKNOLOGI SMART DEW IRRIGATION PADA BUDIDAYA TANAMAN IPOMOEA REPTANS BERBASIS INTERNET OF THINGS",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Cokroaminoto Palopo",
            ],
            [
                'title'       => "Implementasi Perangkat Pemantauan Domba Otomatis Berbasis IoT (Sheepherd) di Koperasi Domba Makmur Indonesia",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Gadjah Mada",
            ],
            [
                'title'       => "Inovasi Alat Sortir Otomatis Berbasis Sensor SmartFishSorter (SFS) untuk Meningkatkan Efisiensi Proses Sortir pada Budidaya Lele Pak Nur Hidayat Yogyakarta",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Gadjah Mada",
            ],
            [
                'title'       => "Penerapan Teknologi Komunal Inkubator Berbasis Termohigrostatik IoT untuk Mendukung Perawatan Anak Domba di CV Cipta Visi Group",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Gadjah Mada",
            ],
            [
                'title'       => "Smartfarming: Kumbung Jamur Tiram Berbasis Sistem Fuzzy Logic Terintegrasi Internet of Things (IoT) Guna Mendukung Pertanian yang Berkelanjutan",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Hasanudin",
            ],
            [
                'title'       => "Smart GreenHeat: Inovasi Mesin Pengering Limbah Peternakan dengan Kendali Pintar Berbasis Mikrohidro untuk Meningkatkan Produksi Pupuk pada BUMDes Sukamaju",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Negeri Medan",
            ],
            [
                'title'       => "Digitalisasi Pengelolaan Air PDAM Banda Aceh: Implementasi Smart Water Meter dan Machine Learning untuk Optimalisasi Distribusi Air",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Syiah Kuala",
            ],
            [
                'title'       => "Penerapan Teknologi Untuk Optimalisasi Branding dan Pemasaran Digital Produk VCO Pada Kelompok Tani Oemanas di Wilayah Perbatasan Indonesia-Timor Leste",
                'scheme'      => "PKM - PI",
                'institution' => "Universitas Timor",
            ],
            [
                'title'       => "Inovasi Alat Pengasapan Ikan Salai Khas Palembang Berbasis Solar Cell dan Sistem IoT Guna Pengurangan Carbon Footprint Ikan Salai Bunyamin",
                'scheme'      => "PKM - PI",
                'institution' => "Politeknik Negeri Sriwijaya",
            ],
            [
                'title'       => "Smart Press Machine 2-In-1 : Combustion and Pressing Berbasis IoT sebagai Solusi Efisiensi Bakar Efektif pada UMKM Pisang Epe Mandiri.",
                'scheme'      => "PKM - PI",
                'institution' => "Politeknik Negeri Ujung Pandan",
            ],
            [
                'title'       => "Holomate Virtual Reality: Intervensi Psikologis sebagai Solusi Revolusioner untuk Mempersiapkan Hidup Berkeluarga",
                'scheme'      => "PKM - VGK",
                'institution' => "Universitas Buana Perjuangan Karawang",
            ],
            [
                'title'       => "SMART DISASTER PREPARADNESS APP: SOLUSI CERDAS KESELAMATAN DAN PEMANTAUAN LINGKUNGAN BERBASIS TEKNOLOGI GPS, IOT, DAN AI UNTUK RESPON CEPAT BENCANA",
                'scheme'      => "PKM - VGK",
                'institution' => "Universitas Jenderal Achmad Yani",
            ],
            [
                'title'       => "SmartEcoWave: Penghasil Energi Listrik Tenaga Gelombang dan Surya Terintegrasi AI-IoT Sebagai Solusi Pemerataan Infrastruktur dan Diversifikasi Kelistrikan Nasional",
                'scheme'      => "PKM - VGK",
                'institution' => "Universitas Kristen Duta Wacana",
            ],
            [
                'title'       => "Konseling Berbasis Metaverse Menggunakan Teknologi Virtual Reality Sebagai Upaya Pemulihan Psikologis Perempuan Korban Kekerasan",
                'scheme'      => "PKM - VGK",
                'institution' => "Universitas Sanata Dharma",
            ],
            [
                'title'       => "Glasses of Voice: Kacamata AI Multi-bahasa dengan audio interaktif dan pembaca dunia bagi tunanetra",
                'scheme'      => "PKM - VGK",
                'institution' => "Institut Teknologi Sains dan Kesehatan PKU Muhammadiyah Surakarta",
            ],
            [
                'title'       => "Inovasi Sekolah Rakyat Berbasis Internet of Things Untuk Pemerataan Pendidikan dan Pengurangan Kesenjangan Sosial di Kabupaten Banjarnegara",
                'scheme'      => "PKM - VGK",
                'institution' => "Sekolah Tinggi Ilmu Ekonomi Tamansiswa",
            ],
            [
                'title'       => "REGIONAL AI DRIVE COMMUNITY, STRATEGI PENANGGULANGAN DEGRADASI INTELEKTUAL AKIBAT PENGGUNAAN AI YANG BERLEBIHAN",
                'scheme'      => "PKM - VGK",
                'institution' => "Universitas Pignatelli Triputra",
            ],
            [
                'title'       => "AI Based Smart Agriculture: Pertanian Berbasis AI untuk Meningkatkan Minat Petani Muda dengan Sistem Pertanian Terbarukan",
                'scheme'      => "PKM - VGK",
                'institution' => "Universitas Muhammadiyah Ponorogo",
            ],
            [
                'title'       => "Virtual Heritage Gallery: Platform Promosi Kain Endek Bali Berbasis Teknologi XR",
                'scheme'      => "PKM - VGK",
                'institution' => "Institut Pariwisata dan Bisnis International",
            ],
            [
                'title'       => "SAPAPUA: Inovasi Berbasis Teknologi Aplikasi sebagai Upaya Meningkatkan Eksistensi Bahasa Papua",
                'scheme'      => "PKM - VGK",
                'institution' => "Universitas Pendidikan Muhammadiyah Sorong",
            ],
            [
                'title'       => "Autonomous AI and IOT Based Port Sebagai Solusi Pengurangan Turnaround Time dan Meningkatkan Efisiensi Distribusi Migas Nasional dan Internasional",
                'scheme'      => "PKM - VGK",
                'institution' => "Institut Teknologi Sepuluh Nopember",
            ],
            [
                'title'       => "Gerakan Hidup Sehat Berbasis Smart Gym, IoT, dan Green Building: Strategi Terintegrasi BPJS dalam Penanggulangan Obesitas Menuju Ekosistem Kebugaran Berkelanjutan",
                'scheme'      => "PKM - VGK",
                'institution' => "Institut Teknologi Sepuluh Nopember",
            ],
            [
                'title'       => "CerebrAI: Smart Cognitive and Mental Health Companion Berbasis AI sebagai Upaya Pencegahan Brain Rot dan Platform Penguatan Literasi Kesehatan Digital",
                'scheme'      => "PKM - VGK",
                'institution' => "Institut Teknologi Sumatera",
            ],
            [
                'title'       => "EASY-G: CUTTING-EDGE SMART APPLICATION SEBAGAI SISTEM PENGELOLAAN GIZI SEHAT MELALUI COMMUNITY-SUPPORTED AGRICULTURE (CSA) GUNA MENDUKUNG PROGRAM MAKAN BERGIZI GRATIS",
                'scheme'      => "PKM - VGK",
                'institution' => "Institut Teknologi Sumatera",
            ],
            [
                'title'       => "NOTOBATES (Non-Fungible Token-Based Certificate): Inovasi Digital Penyelesaian Sengketa Pertanahan Berbasis Blockchain dengan Integrasi Multisig Wallet dan Smart Contract",
                'scheme'      => "PKM - VGK",
                'institution' => "Universitas Gadjah Mada",
            ],
            [
                'title'       => "Sustainable Integrated Kitchen System (SIKE): Pemantauan Berbasis AI untuk Optimalisasi Makan Bergizi Gratis serta Pengimplementasian Limbah Makanan Menjadi Energi Terbarukan",
                'scheme'      => "PKM - VGK",
                'institution' => "Universitas Gadjah Mada",
            ],
            [
                'title'       => "Gambling Activity Tracing Engine (GATE) System: Inovasi Berbasis Artificial Intelligence Untuk Pemblokiran Situs Judi Online Sebagai Upaya Pemberantasan Kemiskinan",
                'scheme'      => "PKM - VGK",
                'institution' => "Universitas Lampung",
            ],
            [
                'title'       => "CLAIM DEEPFAKE MELALUI UMPAN BALIK ARTIFICIAL INTELLIGENCE",
                'scheme'      => "PKM - VGK",
                'institution' => "Universitas Negeri Medan",
            ],
            [
                'title'       => "FARMORA: Smart Aquaponic Reservoir Berbasis Artificial Intelligence of Things dengan Pendekatan Bioremediasi Mewujudkan Kemandirian Pangan di Morokrembangan Kota Surabaya",
                'scheme'      => "PKM - VGK",
                'institution' => "Universitas Negeri Surabaya",
            ],
            [
                'title'       => "WayangVerse: Pemanfaatan Teknologi Metaverse untuk Melestarikan Seni Wayang Kulit Demi Mewujudkan Indonesia Berkebudayaan 2045",
                'scheme'      => "PKM - VGK",
                'institution' => "Universitas Sriwijaya",
            ],
            [
                'title'       => "Literacy Catalyst Building: Wajah Baru Pusat Literasi Berbasis Teknologi MR, AI, dan Robotika Demi Mewujudkan Indonesia Emas 2045",
                'scheme'      => "PKM - VGK",
                'institution' => "Universitas Sumatera Utara",
            ],

            // START KC
            [
                'title'       => "FLOOVIA: Aplikasi Cerdas untuk Monitoring dan Peringatan Banjir Jalanan Berbasis AI dan IoT",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Mikroskil",
            ],
            [
                'title'       => "Cualify: Platform Cerdas Pelestarian Batik Cual Bangka Belitung melalui Klasifikasi dan Generator Berbasis Deep learning sebagai Upaya Digitalisasi Budaya",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Muhammadiyah Bangka Belitung",
            ],
            [
                'title'       => "FILTORA (Filter Optimized Air): Pemurnian Udara Cerdas Bebas Asap Rokok Berbasis Bioreaktor Pseudomonas Putida, Karbon Aktif, Machine Learning, dan IoT",
                'scheme'      => "PKM - KC",
                'institution' => "Institut Teknologi Perusahaan Listrik Negara",
            ],
            [
                'title'       => "STUPA: Smart Thinking Upgrade Platform – Inovasi Game Edukatif untuk Penguatan Berpikir Kritis di Era Digital",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Bina Nusantara",
            ],
            [
                'title'       => "EcoSmart Komposter: Pengelolaan Sampah Organik Melalui Smart Composting System Berbasis IoT dan Analitika Data",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Budi Luhur",
            ],
            [
                'title'       => "Monitoring Kesehatan Sapi Potong Menggunakan Kamera Termal dan Metode Algoritma YOLO",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Gunadarma",
            ],
            [
                'title'       => "Sistem Pendeteksi Kebocoran Gas Real-Time Berbasis IoT dan Kecerdasan Buatan untuk Keamanan Rumah Tangga",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Gunadarma",
            ],
            [
                'title'       => "Sistem Pengusir Satwa Liar di Wilayah IKN Berbasis Deteksi Visual dan Gelombang Suara",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Gunadarma",
            ],
            [
                'title'       => "Cold Room Monitoring and Early Warning IOT Based",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Indraprasta PGRI",
            ],
            [
                'title'       => "SITCARE: Sistem Pemantau Kelelahan Pekerja Kantor Berdasarkan Durasi dan Posisi Duduk berbasis Fusi Sensor dan Internet of Things",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Kristen Krida Wacana",
            ],
            [
                'title'       => "Inovasi Sistem Filtrasi Emisi Berbasis IoT dan Material Alami untuk Mendukung Industri Tahu Ramah Lingkungan",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Trisakti",
            ],
            [
                'title'       => "Efektivitas Platform Website RelaxaMind Sebagai Solusi Digital Inovatif untuk Penanganan Stress Dewasa Awal",
                'scheme'      => "PKM - KC",
                'institution' => "Sekolah Tinggi Ilmu Kesehatan Widya Dharma Husada Tangerang",
            ],
            [
                'title'       => "TungguTiba: Sistem Penerimaan Paket Cerdas Berbasis AIoT dengan Keamanan dan Otomasi Pembayaran Cash on Delivery",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Bina Insani",
            ],
            [
                'title'       => "Digitaka: Digitalisasi Cerita Aji Saka Melalui Aplikasi Game Android",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Komputer Indonesia",
            ],
            [
                'title'       => "Netrana: Tongkat Teleskopik Berbasis AI dan IoT Terintegrasi Aplikasi Mobile untuk Deteksi Rintangan, Navigasi, dan Keamanan Tunanetra di Ruang Publik",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Komputer Indonesia",
            ],
            [
                'title'       => "Protego: Modul Helm Proyek Berbasis IoT untuk Pemantauan Real-Time Kesehatan dan Deteksi Risiko Kecelakaan Kerja Menggunakan Pendekatan Rule-Based",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Muhammadiyah Bandung",
            ],
            [
                'title'       => "BioAdaptive Driving System Inovasi Keselamatan Berkendara: Deteksi Emosi dan Stres Pengemudi Menggunakan Sensor Biometrik dan Kecerdasan Buatan",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Telkom",
            ],
            [
                'title'       => "SmartGrip: Inovasi Harness Cerdas dengan LoRa, Gyroscope, dan GPS untuk Mencegah Kecelakaan Tenaga kerja pada ketinggian",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Telkom",
            ],
            [
                'title'       => "TumbuhSehat: Inovasi Pemantauan Gizi Makanan Berbasis Computer Vision untuk Meningkatkan Kesadaran Orang Tua Terhadap Gizi Anak",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Telkom",
            ],
            [
                'title'       => "Smartsight: rancang bangun mobilitas tunanetra berbentuk kacamata menggunakan kamera dan sensor jarak dengan algoritma YOLOv5",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Ahmad Dahlan",
            ],
            [
                'title'       => "T-care: Integrasi Smart Medicine Box Portable berbasis IoT dan Artificial Intelligence Apps Sebagai Optimalisasi Pengobatan Tuberkulosis Menuju Eliminasi Tuberkulosis 2030",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Islam Indonesia",
            ],
            [
                'title'       => "Oral Cancer Detection Based on CNN (Convolutional Neutral Network), Machine Learning dan Deep Learning",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Muhammadiyah Yogyakarta",
            ],
            [
                'title'       => "Pengembangan Detektor Dini Kanker Melanoma Menggunakan Machine Learning Terintegrasi Internet Of Things dengan Algoritma Convolutional Neural Network",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Muhammadiyah Yogyakarta",
            ],
            [
                'title'       => "SELIMUT PENGHANGAT PINTAR BERBASIS IOT DENGAN PEMANTAUAN DAN KENDALI TERINTEGRASI UNTUK PENANGANAN HIPOTERMIA PADA PASIEN ISOLASI",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Sanata Dharma",
            ],
            [
                'title'       => "HELIA: Asisten Navigasi Cerdas Berbasis Head-Up Display dengan LLM dan NLP untuk Membantu Pengendara Motor",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Teknologi Yogyakarta",
            ],
            [
                'title'       => "NiloIntellis: Sistem Cerdas Berbasis IoT dan AI untuk Pemantauan, Prediksi, dan Rekomendasi pada Budidaya Ikan Nila",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Teknologi Yogyakarta",
            ],
            [
                'title'       => "PETRA: Inovasi Navigasi Cerdas Berbasis YOLOv8 sebagai Mata Virtual Disabilitas Tunanetra dengan Deteksi Objek dan Voice Over Real-Time",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Dian Nuswantoro",
            ],
            [
                'title'       => "Reusable Portable Pregnancy Detector: Inovasi Deteksi Kehamilan dan Monitoring Janin Berbasis IoT untuk Penguatan Sains dan Teknologi Kesehatan",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Dian Nuswantoro",
            ],
            [
                'title'       => "Smart Floating Cage: Karamba Jaring Apung Portable Berbasis IoT dan Robot Operation System untuk Navigasi Cerdas",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Dian Nuswantoro",
            ],
            [
                'title'       => "FeelSafe: Inovasi AI Empatik Berbasis Analisis Emosi Multimodal dan Retrieval-Augmented Generation untuk Dukungan Psikologis bagi Mahasiswa",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Islam Sultan Agung",
            ],
            [
                'title'       => "Neprofit: Inovasi Smart Health Monitoring Terintegrasi Mobile Apps dengan AI-Powered Machine Learning untuk Deteksi Dini Chronic Kidney Disease pada Anak",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Islam Sultan Agung",
            ],
            [
                'title'       => "Emong: Aplikasi Cerdas Monitoring Kesehatan Mental Melalui Analisis Emosi Wajah Siswa SMA Berbasis Deep Learning",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Muhammadiyah Semarang",
            ],
            [
                'title'       => "Eco Thermal Box: Kemasan Bio-Degradable Foam Berbasis IoT dengan Sensor Pemantau pH dan Suhu untuk Distribusi Berkelanjutan",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Muhammadiyah Surakarta",
            ],
            [
                'title'       => "Smart Air Pollution Monitoring: Sistem IoT Berbasis Atenuasi Intensitas Cahaya untuk Deteksi CO dan Mitigasi Polusi Udara di Kota Tuban",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Muhammadiyah Lamongan",
            ],
            [
                'title'       => "Smart Eye Tracking: Rancang Bangun Alat Uji Level Fokus pada Anak Kecanduan Game Online",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Muhammadiyah Lamongan",
            ],
            [
                'title'       => "CryoSynctive: Perangkat Nonthermal Plasma Berbasis Edge AI dan IoT untuk Penyembuhan Luka Kronis pada Pasien Diabetes",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Muhammadiyah Malang",
            ],
            [
                'title'       => "MarSafe: Smart Tracking Berbasis LoRaWAN secara Real-Time pada Nelayan dengan Prediksi Arah Angin menggunakan SARIMA untuk Mitigasi Nelayan Hilang",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Muhammadiyah Malang",
            ],
            [
                'title'       => "Vision Medicine: Smart Glasses Berbasis Machine Learning untuk Deteksi Obat Bagi Penyandang Tunanetra dengan Generative AI dan Voice Assistant",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Muhammadiyah Malang",
            ],
            [
                'title'       => "HIGH-SPEED SCREENING Deteksi Multipel Penyakit Berbasis Deep Learning Melalui Citra Retina, Kuku, dan Wajah dalam Mendukung Program Asta Cita",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Muhammadiyah Ponorogo",
            ],
            [
                'title'       => "Drytech Batik Ecoprint Berbasis Internet of Things dengan Solar Panel sebagai Alternatif Mempercepat Pengeringan pada Proses Pembuatan Batik Eco Print",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Muhammadiyah Sidoarjo",
            ],
            [
                'title'       => "Digital Aplikasi Berbasis AI untuk Latihan Bicara Siswa Cerebral Palsy",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Mercubaktijaya",
            ],
            [
                'title'       => "POCALA: Pocket AI Assistant Berbasis Large Language Model dengan Teknologi Speech Recognition dan Synthesis untuk Pembelajaran Bahasa Inggris",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Islam Kalimantan Muhammad Arsyad Al Banjari Banjarmasin",
            ],
            [
                'title'       => "IGNISAFE: Drone Autopilot Berbasis Machine Learning untuk Deteksi Dini Kebakaran Hutan Gambut di Indonesia",
                'scheme'      => "PKM - KC",
                'institution' => "Institut Pertanian Bogor",
            ],
            [
                'title'       => "ISARA: Inovasi Komunikasi Dua Arah Melalui Gerakan Isyarat, Teks, Gambar, dan Suara Berbasis Artificial Intelligence Menggunakan Kamera Smartphone",
                'scheme'      => "PKM - KC",
                'institution' => "Institut Teknologi Bacharuddin Jusuf Habibie",
            ],
            [
                'title'       => "SIPAKARENA: Sistem Pengolahan Gula Aren Kendali Real-time dan Otomatis Berbasis Internet of Things",
                'scheme'      => "PKM - KC",
                'institution' => "Institut Teknologi Bacharuddin Jusuf Habibie",
            ],
            [
                'title'       => "BrainAI: Sistem Lokalisasi dan Ekstraksi Informasi pada Tumor Otak Menggunakan Deep Learning dan Vision Large Language Model",
                'scheme'      => "PKM - KC",
                'institution' => "Institut Teknologi Sepuluh Nopember",
            ],
            [
                'title'       => "Colorimetric Strip Test Biosensor Berbasis Machine Learning untuk Deteksi Cepat Kandungan Minyak Babi dalam Makanan",
                'scheme'      => "PKM - KC",
                'institution' => "Institut Teknologi Sepuluh Nopember",
            ],
            [
                'title'       => "EyeXaminer: Integrasi Fundus Capture Non-Midriatik Berbasis Smartphone dan CNN Multimodal untuk Prediksi Risiko dan Waktu Kebutaan pada Pasien Diabetes",
                'scheme'      => "PKM - KC",
                'institution' => "Institut Teknologi Sepuluh Nopember",
            ],
            [
                'title'       => "Lifeband Smartband Non Invasif Berbasis Photoplethysmography dan Extreme Gradient Booster untuk Prediksi Kadar Gula Darah dan Monitoring Kesehatan Real-Time",
                'scheme'      => "PKM - KC",
                'institution' => "Institut Teknologi Sepuluh Nopember",
            ],
            [
                'title'       => "Robot-Assisted Pollination Berbasis Drone Dilengkapi Deteksi Kesiapan Penyerbukan Kelapa Sawit Secara Multimodal Menggunakan Citra dan Aroma",
                'scheme'      => "PKM - KC",
                'institution' => "Institut Teknologi Sepuluh Nopember",
            ],
            [
                'title'       => "Sistem Peringatan Dini Tuberkulosis Berdasarkan Suara Batuk dengan Menggunakan Model Deep Learning Sebagai Upaya Eliminasi Tuberkulosis 2030",
                'scheme'      => "PKM - KC",
                'institution' => "Institut Teknologi Sepuluh Nopember",
            ],
            [
                'title'       => "Penggunaan Intelligence Doll untuk Mengatasi Kesehatan Mental pada Gen-Z",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Airlangga",
            ],
            [
                'title'       => "BREAST-SCAN: Sistem Deteksi Kanker Payudara Non-Invasif Berbasis Multi-Modal Deep Learning Terintegrasi Internet of Things",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Andalas",
            ],
            [
                'title'       => "Alat Deteksi Toksoplasmosis Okular pada Retina Mata Menggunakan Metode Indirect Ophthalmoscopy dan Image Enhancement Berbasis Computer Vision",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Brawijaya",
            ],
            [
                'title'       => "SMART-WTE: Sistem Manajemen Sampah Terintegrasi dengan Teknologi AI untuk Pembangkit Listrik Tenaga Sampah di Kota Jayapura",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Cenderawasih",
            ],
            [
                'title'       => "Canditect: Inovasi Deteksi Dini Kandidiasis Oral Berbasis IoT dan Machine Learning dengan Metode Analisis Saliva",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Gadjah Mada",
            ],
            [
                'title'       => "Cardioguard: Perangkat Wearable Berbasis AI dan IoT untuk Deteksi serta Pertolongan Pertama Henti Jantung",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Gadjah Mada",
            ],
            [
                'title'       => "Glycemia Breath Analyzer: Pendeteksi Dini Diabetes Melitus dan Pemantau Gula Darah dengan Breath Analyzer Berbasis Machine Learning Terintegrasi IoT",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Gadjah Mada",
            ],
            [
                'title'       => "Orside: Detektor Lesi Pra-Kanker Portable Berbasis Fluoresensi Menggunakan Deep Learning dengan Metode Convolutional Neural Network (CNN)",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Gadjah Mada",
            ],
            [
                'title'       => "Sistem Deteksi Dini Retinoblastoma Inklusif Berbasis Two-Step Convolutional Neural Network Terintegrasi Mobile App untuk Real-Time Screening pada Balita",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Gadjah Mada",
            ],
            [
                'title'       => "Smart Goat Signal Camera: Teknologi Cerdas untuk Pemantauan dan Analisis Ternak berbasis Artificial Intelligence",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Gadjah Mada",
            ],
            [
                'title'       => "AgriNose: Rancang Bangun Prototipe Deteksi Awal Serangan Hama Berbasis Sensor VOC (Volatile Organic Compounds) dan IoT untuk Mencegah Gagal Panen",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Halu Oleo",
            ],
            [
                'title'       => "Smart Dental Laser Scaler Multifunction Berbasis Computer Vision: Solusi Scaling Masa Depan Tanpa Rasa Cemas, Takut, dan Ngilu pada Pasien",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Hasanuddin",
            ],
            [
                'title'       => "Fotrix: Prototipe Portabel 2-in-1 Berenergi Surya Terintegrasi IoT untuk Produksi Hidrogen dari Air Laut sekaligus Degradasi Mikroplastik",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Indonesia",
            ],
            [
                'title'       => "iSave: IoT Smart Vest dengan Feedback untuk Pencegahan Low Back Pain dan Transformasi Budaya Kerja Ergonomis Berkelanjutan di Agroindustri",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Jember",
            ],
            [
                'title'       => "Optimalisasi Pemeliharaan Aset dan Manajemen Risiko dengan Sistem Peringatan Dini Berbasis AI di Industri Migas",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Lampung",
            ],
            [
                'title'       => "Sahabat Gula: Implementasi Convolutional Neural Network untuk Pemindaian Makanan Lokal dan Monitoring Konsumsi Gula dalam Upaya Mitigasi Risiko Diabetes",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Mataram",
            ],
            [
                'title'       => "Teknik Konversi Sampah PET (polyethylene terephthalate) Menjadi Bijih Plastik Menggunakan Metode IoT-Screw Extruder Berporos Vertikal",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Mataram",
            ],
            [
                'title'       => "MangiSort: Alat Sortir Manggis berbasis Machine Learning menggunakan Computer Vision dalam Meningkatkan Jaminan Mutu para Penghasil Manggis",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Negeri Padang",
            ],
            [
                'title'       => "EyeSphere: Inovasi Multi-Diagnostik Dini Gangguan Oftalmologi melalui Klasifikasi Citra Retina Berbasis Deep Learning Terintegrasi IoT untuk Pencegahan Disfungsi Visual",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Negeri Surabaya",
            ],
            [
                'title'       => "KidySense: Deteksi Dini Gagal Ginjal Berbasis Biosensor dan Tiny Machine Learning Sebagai Upaya Pencegahan Gagal Ginjal Kronis pada Anak",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Negeri Surabaya",
            ],
            [
                'title'       => "PARKHERE: Sistem Parkir Modern Berbasis Geolocation untuk Menanggulangi Masalah Parkir di Urban Area dengan Informasi Realtime dan Pembayaran E-Wallet",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Pembangunan Nasional Veteran Jakarta",
            ],
            [
                'title'       => "SwimSafe: Baju Renang Anak Berteknologi IoT dan AI dengan Sensor Pencegah Tenggelam serta Notifikasi Real-Time ke Aplikasi",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Pembangunan Nasional Veteran Jakarta",
            ],
            [
                'title'       => "SkyWay: Hexacopter Drone Logistik Semi-Otonom Terintegrasi IoT untuk Distribusi Dinamis Perkotaan dengan Navigasi Swarm Intellegence Minimalisasi Hambatan Operasional di Surabaya",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Pembangunan Nasional Veteran Jawa Timur",
            ],
            [
                'title'       => "Prototipe HYFER-LO untuk Monitoring Lingkungan Berbasis IoT dengan Energi Terbarukan dari Plant-Microbial Fuel Cell",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Pendidikan Indonesia",
            ],
            [
                'title'       => "SIGNOVA: Smart Glove Berbasis Artificial Intelligence dengan Integrasi App Education Assistant untuk Peningkatan Komunikasi Bahasa Isyarat Penyandang Tunarungu dan Tunawicara",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Pendidikan Indonesia",
            ],
            [
                'title'       => "UroMed: Integrasi IoT dan AI dalam Telemonitoring Uroflowmetry untuk Optimalisasi Deteksi Kesehatan Urologi",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Pendidikan Indonesia",
            ],
            [
                'title'       => "Pengembangan Model Bus Otonom Berbasis Internet of Things (IoT) sebagai Angkutan Masa Depan di Lingkungan Universitas Riau",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Riau",
            ],
            [
                'title'       => "NEUROKIT: Dynamic Toolkit Berbasis Multimodal Neurotherapeutic dengan Pendekatan Gamifikasi Terintegrasi Generative AI untuk Peningkatan Attention Span dan Memory Retention Siswa",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Sam Ratulangi",
            ],
            [
                'title'       => "WOW (Waste to Worth): Platform E-commerce berbasis Generative AI untuk Optimalisasi Jaringan Penyedia dan Pengrajin Limbah",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Siliwangi",
            ],
            [
                'title'       => "OPTIMALISASI PROSES TANAM JAGUNG MELALUI INTEGRASI SISTEM KENDALI JARAK JAUH PADA ROW SEEDER BERBASIS INTERNET OF THINGS",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Singaperbangsa Karawang",
            ],
            [
                'title'       => "Alat Penyadap Getah Karet Otomatis Berbasis Internet of Things Untuk Meningkatkan Efektivitas dan Efisiensi Panen Karet",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Sriwijaya",
            ],
            [
                'title'       => "Energi Jenius : Sistem Internet of Things Cerdas Untuk Proteksi dan Penghematan Daya Listrik Rumah Tangga Secara Real Time",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Sultan Ageng Tirtayasa",
            ],
            [
                'title'       => "NIRMAS: Perangkat Deteksi Makronutrien Portabel Berbasis Near-Infrared Terintegrasi Machine Learning dan Nutritional Management System Guna Mengontrol Pola Makan Sehat",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Sumatera Utara",
            ],
            [
                'title'       => "Deteksi Dini Penyakit Paru Obstruktif Kronik dengan Volatile Organic Compounds melalui Hembusan Nafas Perokok Terintegrasi Internet of Things",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Syiah Kuala",
            ],
            [
                'title'       => "CodeAlpha: Platform Pembelajaran Koding Berbasis Petualangan dan Kompetisi Tim untuk Gen Alpha Menggunakan Metode Peer Learning",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Tanjungpura",
            ],
            [
                'title'       => "ECHOFRAME: Smart Mirror Interaktif Berbasis Kecerdasan Buatan dengan Computer Vision dan Natural Language Processing untuk Dukungan Psikologis Personal",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Tanjungpura",
            ],
            [
                'title'       => "PostureTrack: Prototipe Monitoring Tulang Belakang Berbasis IMU dan Adaptive Machine Learning untuk Pencegahan Gangguan Muskuloskeletal akibat Posisi Duduk Non-Ergonomis",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Tanjungpura",
            ],
            [
                'title'       => "Smart Bra Berbasis Multisensor dan Hybrid CNN-GRU Terintegrasi IoMT dengan Analisis Variasi Biometrik untuk Deteksi dan Pemantauan Kanker Payudara",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Udayana",
            ],
            [
                'title'       => "Self-monitoring Proteinuria dan Tekanan Darah pada Deteksi Hipertensi Dalam Kehamilan Berbasis Machine Learning Terintegrasi Spektrofotometer dan Osilometri",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Udayana",
            ],
            [
                'title'       => "Prototipe Rekonstruksi 3D Berbasis Gaussian Splatting dan Visual Language Model untuk Konservasi Digital Cagar Budaya",
                'scheme'      => "PKM - KC",
                'institution' => "Universitas Udayana",
            ],
            [
                'title'       => "Quadcopter Otonom Berbasis Computer Vision untuk Deteksi dan Pemadaman Api di Gedung Bertingkat",
                'scheme'      => "PKM - KC",
                'institution' => "Politeknik Elektronika Negeri Surabaya",
            ],
            [
                'title'       => "STUNTLESS : Sistem Monitoring Tumbuh Kembang Balita Berbasis IoT dan Terintegrasi dengan Website untuk Deteksi Stunting secara Real-Time",
                'scheme'      => "PKM - KC",
                'institution' => "Politeknik Elektronika Negeri Surabaya",
            ],
            [
                'title'       => "ImCom: Implementasi Teknologi Inovatif Berbasis SmartWatch untuk Mendukung Aksesibilitas dan Interaksi Penyandang Tuna Rungu melalui Fitur Speech to Text",
                'scheme'      => "PKM - KC",
                'institution' => "Politeknik Negeri Batam",
            ],
            [
                'title'       => "SAID (Stroke Aid Intelligence Dispatcher): Aplikasi Deteksi Dini Stroke Melalui Suara dan Bantuan Medis Berbasis AI dengan BE-FAST",
                'scheme'      => "PKM - KC",
                'institution' => "Politeknik Negeri Jakarta",
            ],
            [
                'title'       => "Pengembangan TummyTrack: Matras Pintar Berbasis IoT untuk Pemantauan Aktivitas Tummy Time Bayi",
                'scheme'      => "PKM - KC",
                'institution' => "Politeknik Negeri Jember",
            ],
            [
                'title'       => "Identifikasi aktivitas pasien tidak normal dengan menggunakan deep learning dan internet of things upaya peningkatan keselamatan pasien",
                'scheme'      => "PKM - KC",
                'institution' => "Politeknik Negeri Madiun",
            ],
            [
                'title'       => "HikeVest: Sistem Komunikasi dan Pencegahan Hipotermia Berbasis LoRa yang Wearable untuk Pendakian Gunung Menggunakan Fuzzy Mamdani dengan Panel Surya",
                'scheme'      => "PKM - KC",
                'institution' => "Politeknik Negeri Malang",
            ],
            [
                'title'       => "Jaket Pintar Berbasis IoT dengan Deteksi Hipotermia, GPS Tracking, dan Sinyal SOS via LoRa untuk Meningkatkan Efisiensi Operasi SAR Pendaki",
                'scheme'      => "PKM - KC",
                'institution' => "Politeknik Negeri Malang",
            ],
            [
                'title'       => "Begal-Detector: Prototipe CCTV Cerdas Berbasis Lightweight Multi-model Framework Sebagai Alat Deteksi Begal yang Akurat dan Cepat Terintegrasi Aplikasi Mobile",
                'scheme'      => "PKM - KC",
                'institution' => "Politeknik Negeri Ujung Pandang",
            ],
            [
                'title'       => "RiverEye: Sistem Cerdas Berbasis CCTV dan Deteksi Anomali untuk Pencegahan Banjir Akibat Sampah di Aliran Sungai Perkotaan",
                'scheme'      => "PKM - KC",
                'institution' => "Politeknik Negeri Ujung Pandang",
            ],
            [
                'title'       => "Robobox: Asisten Penerimaan Paket Ramah Lingkungan Berbasis Audiovisual",
                'scheme'      => "PKM - KC",
                'institution' => "Politeknik Negeri Ujung Pandang",
            ],

            // START PKM - GFT
            [
                'title'       => "Bio-Arc Agroecosphere: Kawasan Futuristik Agri-Terra dengan IoT, CRISPR Crops, dan Zero Waste untuk Swasembada Pangan Indonesia Emas",
                'scheme'      => "PKM - GFT",
                'institution' => "Institut Pertanian Bogor",
            ],
            [
                'title'       => "PlanThrive: Kawasan Pertanian Ruang Bawah Tanah Berbasis Artificial Intelligence, Internet of Things, dan Blockchain untuk Mendukung Ketahanan Pangan Berkelanjutan",
                'scheme'      => "PKM - GFT",
                'institution' => "Institut Pertanian Bogor",
            ],
            [
                'title'       => "WAVERY: Integrated Smart Water Source Using Artificial Intelligence for Sustainable Clean Water in Indonesian Archipelago",
                'scheme'      => "PKM - GFT",
                'institution' => "Institut Pertanian Bogor",
            ],
            [
                'title'       => "Inovasi Integrated Flood Management System Berbasis Artificial Intelligence, Internet of Things, dan Tanggul Hijau sebagai Solusi Berkelanjutan Pengendalian Banjir Perkotaan",
                'scheme'      => "PKM - GFT",
                'institution' => "Institut Teknologi Bandung",
            ],
            [
                'title'       => "Eco-Struvite City: Smart City Zero Waste Berbasis IoT dan Energi Surya untuk Produksi Struvite dari Limbah Domestik",
                'scheme'      => "PKM - GFT",
                'institution' => "Institut Teknologi Perusahaan Listrik Negara",
            ],
            [
                'title'       => "Integrasi Underground Biofilter dan IoT-Driven Road Monitoring System untuk Optimalisasi Drainase dan Transformasi Infrastruktur Berkelanjutan",
                'scheme'      => "PKM - GFT",
                'institution' => "Politeknik Negeri Balikpapan",
            ],
            [
                'title'       => "Subsidence Twin Space: Platform Digital Terintegrasi AI, IoT dan Blockchain untuk Deteksi, Prediksi, dan Pemantauan Penurunan Tanah secara Real-Time",
                'scheme'      => "PKM - GFT",
                'institution' => "Universitas Gadjah Mada",
            ],
            [
                'title'       => "Sistem Deteksi Mikroplastik Berbasis Optik Nirkabel Jarak Jauh dengan Memanfaatkan Prinsip Laser Scattering dan Implementasi Machine Learning",
                'scheme'      => "PKM - GFT",
                'institution' => "Universitas Gadjah Mada",
            ],
            [
                'title'       => "Seismic Energy Generator (SeisGen): Sistem Perkotaan Zero Disaster Berbasis Viscopiezoelektrik dan Internet of Things sebagai Solusi Mitigasi Bencana Gempa Bumi",
                'scheme'      => "PKM - GFT",
                'institution' => "Universitas Hasanuddin",
            ],
            [
                'title'       => "Xyterra Dome: Inovasi Smart Climate Farming Berbasis IoT dan AI untuk Ketahanan Pangan, Air, dan Energi Berkelanjutan",
                'scheme'      => "PKM - GFT",
                'institution' => "Universitas Indraprasta PGRI",
            ],
            [
                'title'       => "INTEGRATED LIGHTHOUSE ELECTRICAL PLATFORM (ILEP) : Stasiun Listrik Apung untuk Kemandirian Energi, Keselamatan Laut, dan Kontrol Lingkungan Pesisir Berbasis AI & IoT",
                'scheme'      => "PKM - GFT",
                'institution' => "Universitas Islam Indonesia",
            ],
            [
                'title'       => "Smart Water: Konsep Pengurangan Resiko Banjir dan Konservasi Sumber Daya Air Berbasis SIG dan IoT",
                'scheme'      => "PKM - GFT",
                'institution' => "Universitas Muhammadiyah Surakarta",
            ],
            [
                'title'       => "TerraGuard Urban: Transformasi Pulau Minim Penduduk Sebagai Smart Island dengan IoT untuk Mitigasi Bencana dan Infrastruktur Cerdas",
                'scheme'      => "PKM - GFT",
                'institution' => "Universitas Sultan Ageng Tirtayasa",
            ],
            [
                'title'       => "Blockchain AgriChain: Transparansi dan Keamanan Rantai Pasok Pertanian Berbasis Blockchain dan Artificial Intelligence",
                'scheme'      => "PKM - GFT",
                'institution' => "Universitas Nahdlatul Ulama Surabaya",
            ],
            [
                'title'       => "Algenix-Nexus: Transformasi Limbah dan Emisi Karbon Menjadi Bioekonomi Tropis Melalui Fotobioreaktor Mikroalga Unggul Berbasis AI, IoT, dan Quantum MRV",
                'scheme'      => "PKM - GFT",
                'institution' => "Universitas Palangka Raya",
            ],
            [
                'title'       => "Model Ekosistem Pertanian Organik Nasional Berbasis IoT dan Edukasi Digital Menuju Ketahanan Pangan 2045",
                'scheme'      => "PKM - GFT",
                'institution' => "Universitas Palangka Raya",
            ],
            [
                'title'       => "Blockchain Food System (BFS): Sistem Monitoring Distribusi Pangan Terintegrasi Berbasis Blockchain untuk Mencapai Indonesia Sustainable Food Security Tahun 2045",
                'scheme'      => "PKM - GFT",
                'institution' => "Universitas Pendidikan Indonesia",
            ],
            [
                'title'       => "GoMulung: Solusi Integrasi IoT dan Teknologi Informasi dalam Pengelolaan Sampah Berbasis Pemberdayaan Pemulung untuk Mewujudkan Smart Waste Management di Indonesia",
                'scheme'      => "PKM - GFT",
                'institution' => "Universitas Pendidikan Indonesia",
            ],
            [
                'title'       => "GrainSync: Sistem Sentralisasi Produk Agribisnis Berbasis API dan IoT Terintegrasi untuk Mendukung Zero Hunger pada UN SDGs 2030",
                'scheme'      => "PKM - GFT",
                'institution' => "Universitas Pendidikan Indonesia",
            ],
            [
                'title'       => "Smart Reef Berbasis AI dan Energi Otonom Sebagai Solusi Inovatif untuk Pemulihan Ekosistem Terumbu Karang",
                'scheme'      => "PKM - GFT",
                'institution' => "Universitas PGRI Madiun",
            ],
            [
                'title'       => "Smart Reef Berbasis AI dan Energi Otonom Sebagai Solusi Inovatif untuk Pemulihan Ekosistem Terumbu Karang",
                'scheme'      => "PKM - GFT",
                'institution' => "Universitas PGRI Madiun",
            ],
            [
                'title'       => "KONSEP SISTEM PENDAFTARAN TANAH BERBASIS BLOCKCHAIN UNTUK MEWUJUDKAN KEPASTIAN HUKUM DAN MENCEGAH SENGKETA TANAH",
                'scheme'      => "PKM - GFT",
                'institution' => "Universitas Sam Ratulangi",
            ],
            [
                'title'       => "Pendekatan Sistem Kesehatan Terintegrasi Berbasis AI dalam Meningkatkan Kualitas Layanan Kesehatan Nasional",
                'scheme'      => "PKM - GFT",
                'institution' => "Universitas Sumatera Utara",
            ],
            [
                'title'       => "SEMAR-Net: Model Deep Learning Efisien dan Akurat untuk Mendeteksi Polip Kolorektal Secara Otomatis",
                'scheme'      => "PKM - GFT",
                'institution' => "Universitas Sebelas Maret",
            ],
            [
                'title'       => "Pendekatan Sistem Kesehatan Terintegrasi Berbasis AI dalam Meningkatkan Kualitas Layanan Kesehatan Nasional",
                'scheme'      => "PKM - GFT",
                'institution' => "Universitas Sumatera Utara",
            ],
        ];

        DB::table('propos_title_examples')->insert($data);
    }
}
