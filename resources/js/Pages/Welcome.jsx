import { Head, Link } from "@inertiajs/react";
import { motion, useAnimation } from "framer-motion";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import {
    MapPinIcon,
    CalendarDaysIcon,
    BookmarkSquareIcon,
    CalendarIcon,
    ArrowLongDownIcon,
    ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
import Accordion from "@/Components/Accordion";
import { useState, useEffect } from "react";
import CustomCarousel from "@/Components/CustomCorausel";
import NavBar from "@/Components/NavBar";
import ScrollToTop from "@/Components/ScrollTop";
import SlickCarousel from "@/Components/SlickCarousel";
import { IconTextHomePage, IconViewDemo, IconTextTopics, IconLine, IconWhatsapp } from "@/Components/IconLanding";
import { BoardArt } from "@/Components/Boards";
import { BoardArtDark } from "@/Components/BoardDark";
export default function Welcome({ auth }) {
    const controls = useAnimation();
    const [openIndex, setOpenIndex] = useState(null);
    const [activeCategoryFaq, setActiveCategoryFaq] = useState("Guidebook");
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY * 0.23); // Efek Parallax
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleAccordionClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const variantFade = (x, y) => {
        return {
            visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } },
            hidden: { opacity: 0, x: x, y: y, transition: { duration: 0.5 } },
        };
    };

    const variantZoom = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
        hidden: { opacity: 0, scale: 0.5, transition: { duration: 0.5 } },
    };



    const topics = [
        {
            title: "PKM-KC",
            links: "https://drive.google.com/file/d/1VhnGeOLCPxXXNy1WIshnUoMjLaNTu4nb/view?usp=sharing",
            description:
                "Program Kreativitas Mahasiswa-Karsa Cipta (PKM-KC) merupakan program penciptaan yang didasari atas karsa dan nalar mahasiswa, bersifat konstruktif serta menghasilkan suatu sistem...",
        },
        {
            title: "PKM-K",
            links: "https://drive.google.com/file/d/1P2Xi_pevKDFX82gv7NviF2yYZl4azjoj/view?usp=sharing",
            description:
                "Program Kreativitas Mahasiswa Kewirausahaan (PKM-K) merupakan program kreativitas mahasiswa dalam menciptakan aktivitas usaha. Dalam PKM-K, tim mahasiswa berlatih membuat...",
        },
        {
            title: "PKM-PM",
            links: "https://drive.google.com/file/d/10AyHDJx650ORiSBwg2h9S8xV6H-OYWgr/view?usp=sharing",
            description:
                "PKM-PM adalah program penerapan ilmu pengetahuan, teknologi dan seni yang berorientasi non profit dalam upaya untuk membantu mengatasi permasalahan kemiskinan...",
        },
        {
            title: "PKM-PI",
            links: "https://drive.google.com/file/d/19JHFO6JWpAyw-vi7dnuoiSOZ9X-P0cfO/view?usp=sharing",
            description:
                "Program Kreativitas Mahasiswa Penerapan-IPTEK (PKM-PI) termasuk ke dalam salah satu kelompok PKM 5 bidang yang menerapkan ilmu pengetahuan dan teknologi untuk menjadi...",
        },
        {
            title: "PKM-GFT",
            links: "https://drive.google.com/file/d/1BXEK5quZ7oIfbPTju1qU1M9SuagRhHtq/view?usp=sharing",
            description:
                "PKM Gagasan Futuristik Tertulis (PKM-GFT) merupakan gagasan kreatif yang futuristik sebagai respons intelektual atas persoalan aktual yang dihadapi bangsa. Gagasan tersebut tidak terkait...",
        },
    ];

    return (
        <>
            <Head title="PKM TI" />

            {/* Start Navbar */}
            <NavBar auth={auth} />
            {/* End Navbar */}

            <main className="md:px-12 px-2 pt-24 light:bg-[#F7F7F7] overflow-x-hidden">
                {/* Start HomePage */}
                <section className="flex md:flex-row flex-col-reverse max-w-full justify-between pb-20">
                    {/* Home Page Bagian Kiri */}
                    <motion.div
                        whileInView="visible"
                        variants={variantFade(-100, 0)}
                        initial="hidden"
                        animate={controls}
                        className="flex flex-col gap-7 justify-center items-center"
                    >
                        <div className="relative md:w-[581px] max-w-full md:h-[210px] h-[148px] text-center md:text-start">
                            <div className="md:absolute md:block hidden md:left-2 left-12 top-14">
                                <IconTextHomePage />
                            </div>
                            <p className="font-bold md:text-[64px] text-[36px] light:text-[#111E41] leading-[1.1em] dark:text-[#42A1A4]">Sistem Informasi Pelatihan PKM TI Udayana</p>
                        </div>
                        <div>
                            <p className="text-[18px] leading-[1.6em] light:text-[#0F172A] md:w-[581px] max-max-w-full font-normal dark:text-[#42A1A4] text-center md:text-start">
                                Pelatihan PKM TI 2025 merupakan bagian dari program kerja Himpunan Mahasiswa Teknologi Informasi Universitas Udayana periode 2025, yang bertujuan membimbing mahasiswa dalam merancang Program Kreativitas Mahasiswa (PKM) yang inovatif dan kreatif di bidang Teknologi Informasi.
                            </p>
                        </div>
                        <div className="flex md:flex-row flex-col md:gap-5 gap-1 md:justify-start justify-center md:w-[581px] w-full">
                            {auth.user ? (
                                <>
                                    {/* <Link
                                        as="button"
                                        href={route("register")}
                                        className="font-bold border-[1px] border-slate-300 px-6 py-2 rounded-md text-[#59DFD1] hover:text-white hover:bg-[#42A1A4] dark:text-gray-400 dark:hover:text-white transition-all duration-300 flex flex-row gap-2 justify-center items-center hover:shadow-[0_0_10px_#42A1A4]"
                                    >
                                        <IconViewDemo />
                                        View Demo
                                    </Link> */}
                                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="font-bold border-[1px] border-slate-300 px-6 py-2 rounded-md text-[#59DFD1] hover:text-white hover:bg-[#42A1A4] dark:text-gray-400 dark:hover:text-white transition-all duration-300 flex flex-row gap-2 justify-center items-center hover:shadow-[0_0_10px_#42A1A4]" onClick={() => document.getElementById('my_modal_4').showModal()}>open modal</button>
                                    <dialog id="my_modal_4" className="modal">
                                        <div className="modal-box w-11/12 max-w-5xl">
                                            <h3 className="font-bold text-lg">Hello!</h3>
                                            <p className="py-4">Click the button below to close</p>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button, it will close the modal */}
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </>
                            ) : (
                                <>
                                    <Link
                                        as="button"
                                        href={route("register")}
                                        className="font-bold bg-[#42A1A4] px-12 py-3 rounded-md text-white hover:text-white hover:bg-[#59DFD1] dark:text-gray-400 dark:hover:text-white transition-all duration-300 shadow-[0_0_10px_#42A1A4]"
                                    >
                                        Sign Up Now
                                    </Link>
                                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="font-bold border-[1px] border-slate-300 px-6 py-2 rounded-md text-[#59DFD1] hover:text-white hover:bg-[#42A1A4] dark:text-gray-400 dark:hover:text-white transition-all duration-300 flex flex-row gap-2 justify-center items-center hover:shadow-[0_0_10px_#42A1A4]" onClick={() => document.getElementById('my_modal_4').showModal()}>View Demo</button>
                                    <dialog id="my_modal_4" className="modal">
                                        <div className="modal-box w-11/12 max-w-5xl">
                                            <h3 className="font-bold text-lg">Hello!</h3>
                                            <p className="py-4">Click the button below to close</p>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button, it will close the modal */}
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </>
                            )}
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView="visible"
                        variants={variantFade(100, 0)}
                        initial="hidden"
                        animate={controls}
                        className="flex justify-center items-center pt-2"
                    >
                        {/* Home Page Bagian Kanan */}
                        <img src="/images/image-homepage.png" alt="" className="md:w-[672.34px] max-w-full md:h-[552px] h-auto animate-bounce-custom" />
                    </motion.div>
                </section>

                {/* End HomePage */}

                {/* Agenda Acara*/}
                <section className="mb-20 flex justify-center items-center md:mx-36 mx-0">
                    <motion.div
                        whileInView="visible"
                        variants={variantFade(0, 100)}
                        initial="hidden"
                        animate={controls}
                        className="flex md:flex-row flex-col justify-between gap-5 px-12 py-10 max-w-full shadow-xl border border-base-300 rounded-2xl"
                    >
                        <div className="flex flex-row gap-4 sm:pr-10">
                            <BookmarkSquareIcon className="w-6 h-6 font-extrabold" />
                            <div className="block">
                                <span className="capitalize text-gray-400 font-normal text-sm md:text-base">
                                    Agenda Acara
                                </span>

                                <p className="text-base md:text-sm font-light">
                                    Pembukaan PKM-TI 2024
                                </p>
                            </div>
                        </div>

                        <div className="divider divider-horizontal before:bg-black after:bg-black"></div>

                        <div className="flex flex-row gap-4">
                            <CalendarDaysIcon className="w-6 h-6 font-extrabold" />
                            <div className="block">
                                <span className="capitalize text-gray-400 font-normal text-sm md:text-base">
                                    Date
                                </span>

                                <p className="text-base md:text-sm font-light">
                                    Minggu, 4 Februari 2024
                                </p>
                            </div>
                        </div>

                        <div className="divider divider-horizontal before:bg-black after:bg-black"></div>

                        <div className="flex flex-row gap-4">
                            <MapPinIcon className="w-6 h-6 font-extrabold" />

                            <div className="block">
                                <span className="capitalize text-gray-400 font-normal text-sm md:text-base">
                                    Lokasi Acara
                                </span>

                                <p className="text-base md:text-sm font-light ">
                                    Gedung Teknologi Informasi Fakultas
                                    Teknik Universitas Udayana
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>
                {/* End Agenda Acara */}

                {/* Start Tentang PKM-TI */}
                <section className="flex md:flex-row flex-col max-w-full justify-around mb-20" id="about-us">
                    <motion.div
                        whileInView="visible"
                        variants={variantFade(-100, 0)}
                        initial="hidden"
                        animate={controls}
                    >
                        {/* Tentang PKM Bagian kiri */}
                        <img src="images/image-tentangpkmti2025.png" alt="" className="md:w-[521px] max-w-full md:h-[479px] h-auto animate-bounce-custom" />
                    </motion.div>
                    <motion.div
                        whileInView="visible"
                        variants={variantFade(100, 0)}
                        initial="hidden"
                        animate={controls}
                        className="flex flex-col justify-center md:w-[687px] max-w-full gap-10"
                    >
                        <div className="relative text-center md:text-start">
                            <div className="md:absolute md:block hidden md:left-72 left-12 top-14">
                                <IconTextHomePage />
                            </div>
                            <p className="font-bold md:text-[56px] text-[36px] light:text-[#111E41] leading-[1.1em] dark:text-[#42A1A4]">Tentang PKM TI 2025</p>
                        </div>
                        <div className="flex flex-col gap-3 text-center md:text-start">
                            <p className="text-[24px] leading-[1.8em] light:text-[#111E41] dark:text-[#42A1A4] font-bold">
                                Apa itu PKM TI 2025?
                            </p>
                            <p className="text-[17px] leading-[1.8em] light:text-[#111E41] dark:text-[#42A1A4]">
                                Pelatihan PKM Teknologi Informasi 2025 oleh HMTI bertujuan memberikan platform bagi mahasiswa untuk memperluas pengetahuan tentang Program Kreativitas Mahasiswa (PKM). Mengusung tema “...” pelatihan ini diharapkan memotivasi mahasiswa Teknologi Informasi untuk mengembangkan kreativitas visioner dan mengikuti tren masa depan. Kegiatan ini juga bertujuan meningkatkan pemahaman mahasiswa terkait pengembangan judul, penyesuaian format pedoman, teknik penelitian, dan keterampilan teknis.
                            </p>
                            <a
                                href="#pkm-topik"
                                className="flex mt-4 text-[17px] text-slate-500 cursor-pointer"
                            >
                                <ArrowLongDownIcon className="w-6 h-6 mr-3 animate-bounce" />
                                Jelajahi Bidang PKM TI 2025
                            </a>
                        </div>
                    </motion.div>

                </section>
                {/* End Tentang PKM-TI */}


                {/* Start Ekspolari PKM-TI */}
                <motion.div
                    whileInView="visible"
                    variants={variantFade(0, 100)}
                    initial="hidden"
                    animate={controls}
                    className="flex flex-col mb-20 justify-center items-center text-white"
                    id="pkm-topik"
                >
                    <div className="flex flex-row bg-white gap-2 md:py-5 py-4 px-3 rounded-t-2xl w-full shadow-2xl border-[1px] border-slate-200">
                        <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-[#E11D48]"></div>
                        <div className="md:w-3 md:h-3 w-2 h-2 bg-[#FBBF24] rounded-full"></div>
                        <div className="md:w-3 md:h-3 w-2 h-2 bg-[#22C55E] rounded-full"></div>
                    </div>
                    <div className="flex flex-col bg-gradient-custom max-w-full h-auto rounded-b-2xl shadow-2xl">
                        <motion.div
                            whileInView="visible"
                            variants={variantZoom}
                            initial="hidden"
                            animate={controls}
                            className="flex flex-col relative items-center text-center m-8 md:m-16 md:gap-2 gap-1"
                        >
                            <h2 className="md:text-xl text-lg font-bold uppercase">Eksplorasi Topik PKM</h2>
                            <h1 className="font-bold md:text-[48px] text-[36px] leading-9 z-10">Kembangkan Ide Cemerlang Anda</h1>
                            <div className="md:absolute md:block hidden md:left-[740px] left-12 top-20 z-0">
                                <IconTextTopics />
                            </div>
                            <p className="text-[16px] leading-[1.5em] font-normal md:mx-[70px] mt-2 md:mt-6">
                                Jelajahi kategori-kategori sub topik PKM kami dan temukan passion yang menggetarkan hati Anda. Mulai dari keberlanjutan hingga teknologi, kesehatan hingga seni, kami mengundang Anda untuk meresapi setiap sub topik dengan penuh antusiasme. Temukan tempat Anda di dunia PKM, di mana setiap kategori adalah panggung bagi idealisasi dan perubahan.
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 mx-8 mb-12">
                            {topics.map((topic, index) => (
                                <motion.div
                                    whileInView="visible"
                                    variants={variantZoom}
                                    initial="hidden"
                                    animate={controls}
                                    key={index} className="flex flex-col justify-center items-center bg-white text-black m-2 px-4 py-6 rounded-lg text-center gap-2 hover:shadow-[0_0_10px_#285B70]"
                                    id="pkm-topik"
                                >
                                    <h1 className="font-semibold text-[24px] text-[#111E41] leading-[1.1em]">{topic.title}</h1>
                                    <p className="text-[17px] text-[#475569] leading-[1.4em]">{topic.description}</p>
                                    <Link href={topic.links} className="border-[2px] w-full border-[#285B70] p-2 rounded-lg mt-1 text-[#285B70] text-[17px] leading-[24px] tracking-[0.5px] hover:bg-[#285B70] hover:text-white hover:shadow-[0_0_10px_#285B70] transition-all duration-500 ease-in-250">
                                        Selengkapnya
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                {/* End Ekspolari PKM-TI */}


                {/* Start Pembicara */}
                <section className="flex flex-col-reverse lg:flex-row items-center max-w-full gap-6 mb-20">
                    <SlickCarousel>
                        <div>
                            <div className="relative mx-2 overflow-hidden group rounded-lg">
                                <div className="w-64 h-80 overflow-hidden">
                                    <img
                                        src="images/arya-sasmita-2.JPG"
                                        className="w-[750px] h-[422px] rounded-lg object-cover object-center cursor-pointer group-hover:scale-125 duration-300"
                                    />
                                </div>
                                <div className="absolute w-64 h-80 inset-0 cursor-pointer bg-gradient-blue opacity-0 hover:opacity-100 rounded-lg transition-opacity flex justify-center items-center">
                                    <div className="px-4">
                                        <p className="text-white opacity-100 text-lg font-bold leading-5">
                                            “Tips Untuk Menyusun Proposal PKM yang Sesuai!"
                                        </p>
                                        <div className="divider before:bg-white after:bg-white"></div>
                                        <div className="flex flex-col">
                                            <span className="font-bold capitalize text-sm text-white">
                                                Gusti Made Arya Sasmita, ST., MT.
                                            </span>
                                            <p className="font-light text-sm md:text-xs text-white">
                                                Dosen Teknologi Informasi
                                            </p>
                                        </div>

                                        <div className="flex flex-col mt-4 gap-3">
                                            <div className="flex flex-row gap-4 items-center">
                                                <CalendarIcon className="w-4 h-4 text-white" />
                                                <p className="text-xs font-thin capitalize text-white">
                                                    Sabtu, 30 Maret 2024
                                                </p>
                                            </div>

                                            <div className="flex flex-row gap-4 items-center">
                                                <MapPinIcon className="w-8 h-8 text-white" />
                                                <p className="text-xs font-thin capitalize text-white">
                                                    Gedung Teknologi
                                                    Informasi, Fakultas
                                                    Teknik Universitas
                                                    Udayana
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="relative mx-2 overflow-hidden group rounded-lg">
                                <div className="w-64 h-80 overflow-hidden">
                                    <img
                                        src="images/anak-agung-harry-susila.JPG?Dosen-TeknologiInformasi"
                                        className="w-[750px] h-[422px] rounded-lg object-cover object-center cursor-pointer group-hover:scale-125 duration-300"
                                    />
                                </div>
                                <div className="absolute w-64 h-80 inset-0 cursor-pointer bg-gradient-blue opacity-0 hover:opacity-100 rounded-lg transition-opacity flex justify-center items-center">
                                    <div className="px-4">
                                        <p className="text-white opacity-100 text-lg font-bold leading-5">
                                            “Tips and Trik Menyusun Proposal
                                            PKM dengan Benar”
                                        </p>
                                        <div className="divider before:bg-white after:bg-white"></div>
                                        <div className="flex flex-col">
                                            <span className="font-bold capitalize text-sm text-white">
                                                Anak Agung Ngurah Hary Susila, S.TI., M.MT.
                                            </span>
                                            <p className="font-light text-sm md:text-xs text-white">
                                                Dosen Teknologi Informasi
                                            </p>
                                        </div>

                                        <div className="flex flex-col mt-4 gap-3">
                                            <div className="flex flex-row gap-4 items-center">
                                                <CalendarIcon className="w-4 h-4 text-white" />
                                                <p className="text-xs font-thin capitalize text-white">
                                                    Sabtu, 30 Maret 2024
                                                </p>
                                            </div>

                                            <div className="flex flex-row gap-4 items-center">
                                                <MapPinIcon className="w-8 h-8 text-white" />
                                                <p className="text-xs font-thin capitalize text-white">
                                                    Gedung Teknologi
                                                    Informasi, Fakultas
                                                    Teknik Universitas
                                                    Udayana
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="relative mx-2 overflow-hidden group rounded-lg">
                                <img
                                    src="images/seorang-ahli.jpg"
                                    className="w-64 h-80 rounded-lg object-fill object-center cursor-pointer group-hover:scale-125 duration-300"
                                />
                                <div className="absolute w-64 h-80 inset-0 cursor-pointer bg-gradient-blue opacity-0 hover:opacity-100 rounded-lg transition-opacity flex justify-center items-center">
                                    <div className="px-4">
                                        <p className="text-white opacity-100 text-lg font-bold leading-5">
                                            “Tips and Trik Membuat Proposal
                                            PKM Lolos Pimnas 1”
                                        </p>
                                        <div className="divider before:bg-white after:bg-white"></div>
                                        <div className="flex flex-col">
                                            <span className="font-bold capitalize text-sm text-white">
                                                Seseorang Ahli
                                            </span>
                                            <p className="font-light text-sm md:text-xs text-white">
                                                Ahli Proposal PKM
                                            </p>
                                        </div>

                                        <div className="flex flex-col mt-4 gap-3">
                                            <div className="flex flex-row gap-4 items-center">
                                                <CalendarIcon className="w-4 h-4 text-white" />
                                                <p className="text-xs font-thin capitalize text-white">
                                                    Sabtu, 30 Maret 2024
                                                </p>
                                            </div>

                                            <div className="flex flex-row gap-4 items-center">
                                                <MapPinIcon className="w-8 h-8 text-white" />
                                                <p className="text-xs font-thin capitalize text-white">
                                                    Gedung Teknologi
                                                    Informasi, Fakultas
                                                    Teknik Universitas
                                                    Udayana
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SlickCarousel>

                    <motion.div
                        whileInView="visible"
                        variants={variantFade(100, 0)}
                        initial="hidden"
                        animate={controls}
                        className="flex flex-col max-w-full lg:w-1/2"
                    >
                        <span className="uppercase text-[20px] font-semibold sm:text-base text-[#42A1A4] mb-1">
                            Pembicara
                        </span>
                        <h3 className="capitalize text-3xl md:text-[48px] lg:text-5xl font-bold text-[#285B70] leading-12 md:leading-16">
                            Bertemu dengan mereka yang sudah profesional
                        </h3>
                        <p className="text-[18px] leading-[1.5em] font-normal light:text-[#111E41] mt-3">
                            Selamatkan tempat di barisan terdepan karena
                            kami mempersembahkan Narasumber yang luar biasa
                            di acara spesial PKM kami! Bersiaplah untuk
                            terinspirasi, berinteraksi, dan mengambil
                            momentum positif dari pandangan hidup yang penuh
                            semangat. Tunggu apa lagi? Bergabunglah dengan
                            kami untuk pengalaman yang mengesankan! 🚀
                        </p>
                    </motion.div>
                </section>
                {/* End Pembicara */}


                {/* Start Timeline */}
                <section className="relative px-6 md:px-24 mt-36 mb-16 " id="Timeline">
                    <div
                        className="absolute right-0 left-0 top-[400px] flex justify-center items-center -z-10"
                        style={{ transform: `translateY(${offsetY}px)`, transition: "transform 0.1s ease-out" }}
                    >
                        <img src="images/Logo-PKM-TI-2025.png" alt="Background Icon" className="w-[400px] opacity-30 animate-bounce-custom" />
                    </div>
                    <div
                        className="absolute right-0 left-0 bottom-[1800px] flex justify-center items-center -z-10"
                        style={{ transform: `translateY(${offsetY}px)`, transition: "transform 0.1s ease-out" }}
                    >
                        <img src="images/Logo-PKM-TI-2025.png" alt="Background Icon" className="w-[400px] opacity-30 animate-bounce-custom" />
                    </div>
                    <div className="flex flex-col justify-center items-center z-10 mb-20">
                        <h1 className="text-center text-[#42A1A4] text-[14px] md:text-[20px] font-bold" data-aos="fade-left">
                            TIMELINE PKM TI 2025
                        </h1>
                        <h1 className="text-center text-[24px] md:text-[48px] font-bold w-full tracking-[0.2px] z-10 text-[#285B70]" data-aos="fade-right">
                            Jangan Lewatkan Kesempatan Ini
                        </h1>
                        <p className="font-normal text-[16px] tracking-[0.01em] text-slate-500 text-center">
                            Setiap detik adalah kesempatan untuk belajar, berbagi, dan terhubung dengan komunitas kreatif. Catat tanggalnya dan pastikan Anda tidak melewatkan momen magis di PKM Wonderland. Ayo, mari jadwalkan momen berharga kita bersama!
                        </p>
                    </div>
                    <div className="flex flex-col gap-[130px] left-4 items-center pt-12 absolute w-1 bg-[#285B70] h-max md:left-1/2 transform md:-translate-x-1/2 z-10">
                        <div className="w-5 h-5 md:w-9 md:h-9 bg-[#285B70] rounded-full relative z-20">
                            <div className="items-center w-full h-full bg-[#285B70] rounded-full animate-ping"></div>
                        </div>
                        <div className="w-5 h-5 md:w-9 md:h-9 bg-[#285B70] rounded-full relative z-20">
                            <div className="items-center w-full h-full bg-[#285B70] rounded-full animate-ping"></div>
                        </div>
                        <div className="w-5 h-5 md:w-9 md:h-9 bg-[#285B70] rounded-full relative z-20">
                            <div className="items-center w-full h-full bg-[#285B70] rounded-full animate-ping"></div>
                        </div>
                        <div className="w-5 h-5 md:w-9 md:h-9 bg-[#285B70] rounded-full relative z-20">
                            <div className="items-center w-full h-full bg-[#285B70] rounded-full animate-ping"></div>
                        </div>
                        <div className="w-5 h-5 md:w-9 md:h-9 bg-[#285B70] rounded-full relative z-20">
                            <div className="items-center w-full h-full bg-[#285B70] rounded-full animate-ping"></div>
                        </div>
                        <div className="w-5 h-5 md:w-9 md:h-9 bg-[#285B70] rounded-full relative z-20">
                            <div className="items-center w-full h-full bg-[#285B70] rounded-full animate-ping"></div>
                        </div>
                        <div className="w-5 h-5 md:w-9 md:h-9 bg-[#285B70] rounded-full relative z-20">
                            <div className="items-center w-full h-full bg-[#285B70] rounded-full animate-ping"></div>
                        </div>
                        <div className="w-5 h-5 md:w-9 md:h-9 bg-[#285B70] rounded-full relative z-20">
                            <div className="items-center w-full h-full bg-[#285B70] rounded-full animate-ping"></div>
                        </div>
                        <div className="w-5 h-5 md:w-9 md:h-9 bg-[#285B70] rounded-full relative z-20">
                            <div className="items-center w-full h-full bg-[#285B70] rounded-full animate-ping"></div>
                        </div>
                        <div className="w-5 h-5 md:w-9 md:h-9 bg-[#285B70] rounded-full relative z-20">
                            <div className="items-center w-full h-full bg-[#285B70] rounded-full animate-ping"></div>
                        </div>
                        <div className="w-5 h-5 md:w-9 md:h-9 bg-[#285B70] rounded-full relative z-20">
                            <div className="items-center w-full h-full bg-[#285B70] rounded-full animate-ping"></div>
                        </div>
                    </div>
                    <motion.div
                        whileInView="visible"
                        variants={variantFade(-100, 0)}
                        initial="hidden"
                        animate={controls}
                        className="font-sans my-3 md:my-5 flex w-full justify-end z-10 md:pl-20"
                    >
                        <div className="w-full md:w-[466px] ml-5 md:ml-0 mr-0 md:mr-18 p-4 border shadow-lg rounded-md ">
                            <h3 className="text-[16px] md:text-[20px] font-bold">Pendaftaran dan Pengumpulan Judul</h3>
                            <p className="text-[14px] md:text-[16px] font-medium mb-1">⌛ 8 - 14 Maret 2024
                            </p>
                            <p className="text-[14px] md:text-[16px]">📍 Melalui website resmi PKM TI https://pkm.hmtiudayana.id/</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView="visible"
                        variants={variantFade(100, 0)}
                        initial="hidden"
                        animate={controls}
                        className="font-sans my-3 md:my-12 flex w-full justify-end md:justify-start z-10 pr-0 md:pr-24"
                    >
                        <div className="w-full md:w-[466px] ml-5 md:ml-18 p-4 border shadow-lg rounded-md">
                            <h3 className="text-[16px] md:text-[20px] font-bold">Seleksi Judul</h3>
                            <p className="text-[14px] md:text-[16px] font-medium mb-1">⌛
                                8 - 21 Maret 2024
                            </p>
                            <p className="text-[16px]">📍 Online</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView="visible"
                        variants={variantFade(-100, 0)}
                        initial="hidden"
                        animate={controls}
                        className="font-sans my-10 md:my-5 flex w-full justify-end z-10 pl-0 md:pl-20"
                    >
                        <div className="w-full md:w-[466px] ml-5 md:ml-0 mr-0 md:mr-18 p-4 border shadow-lg rounded-md">
                            <h3 className="text-[16px] md:text-[20px] font-bold">Pengumuman Tim Terdaftar</h3>
                            <p className="text-[14px] md:text-[16px] font-medium mb-1">⌛
                                22 Maret 2024
                            </p>
                            <p className="text-[16px]">📍 Online</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView="visible"
                        variants={variantFade(100, 0)}
                        initial="hidden"
                        animate={controls}
                        className="font-sans my-3 md:my-16 flex w-full justify-end md:justify-start z-10 pr-0 md:pr-24"
                    >
                        <div className="w-full md:w-[466px] ml-5 md:ml-18 p-4 border shadow-lg rounded-md">
                            <h3 className="text-[16px] md:text-[20px] font-bold">Technical Meeting Peserta</h3>
                            <p className="text-[14px] md:text-[16px] font-medium mb-1">⌛
                                23 Maret 2024
                            </p>
                            <p className="text-[16px]">📍 Online</p>
                        </div>
                    </motion.div>
                    <div
                        alt="gambar"
                        className="max-w-[570px] h-[445px] absolute right-0 top-[6000px] md:top-[3200px] animate-bounce-custom"
                        data-aos="fade-up"
                    >
                    </div>
                    <motion.div
                        whileInView="visible"
                        variants={variantFade(-100, 0)}
                        initial="hidden"
                        animate={controls}
                        className="font-sans my-3 md:my-5 flex w-full justify-end z-10 pl-0 md:pl-20"
                    >
                        <div className="w-full md:w-[466px] ml-5 md:ml-0 mr-0 md:mr-18 p-4 border shadow-lg rounded-md">
                            <h3 className="text-[16px] md:text-[20px] font-bold">Pelatihan PKM TI 2024</h3>
                            <p className="text-[14px] md:text-[16px] font-medium mb-1">⌛
                                30 Maret 2024
                            </p>
                            <p className="text-[16px]">📍 Aula Suastika, Gedung TI, Fakultas Teknik, Jimbaran</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView="visible"
                        variants={variantFade(100, 0)}
                        initial="hidden"
                        animate={controls}
                        className="font-sans my-3 md:my-12 flex w-full justify-end md:justify-start z-10 pr-0 md:pr-24"
                    >
                        <div className="w-full md:w-[466px] ml-5 md:ml-18 p-4 border shadow-lg rounded-md">
                            <h3 className="text-[16px] md:text-[20px] font-bold">Masa Asistensi Draf Proposal PKM TI</h3>
                            <p className="text-[14px] md:text-[16px] font-medium mb-1">⌛
                                30 Maret - 17 Mei 2024
                            </p>
                            <p className="text-[16px]">📍 Hybird</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView="visible"
                        variants={variantFade(-100, 0)}
                        initial="hidden"
                        animate={controls}
                        className="font-sans my-10 md:my-5 flex w-full justify-end z-10 pl-0 md:pl-20"
                    >
                        <div className="w-full md:w-[466px] ml-5 md:ml-0 mr-0 md:mr-18 p-4 border shadow-lg rounded-md">
                            <h3 className="text-[16px] md:text-[20px] font-bold">Pengumpulan Bukti Asistensi</h3>
                            <p className="text-[14px] md:text-[16px] font-medium mb-1">⌛
                                31 Maret - 16 Mei 2024
                            </p>
                            <p className="text-[14px] md:text-[16px]">📍 Melalui website resmi PKM TI https://pkm.hmtiudayana.id/</p>
                            {/* <p className="text-[16px]">📍 On Webex https://webex</p> */}
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView="visible"
                        variants={variantFade(100, 0)}
                        initial="hidden"
                        animate={controls}
                        className="font-sans my-3 md:my-14 flex w-full justify-end md:justify-start z-10 pr-0 md:pr-24"
                    >
                        <div className="w-full md:w-[466px] ml-5 md:ml-18 p-4 border shadow-lg rounded-md">
                            <h3 className="text-[16px] md:text-[20px] font-bold">Pengumpulan Draf Proposal</h3>
                            <p className="text-[14px] md:text-[16px] font-medium mb-1">⌛
                                11 - 17 Mei 2024
                            </p>
                            <p className="text-[16px]">📍 Melalui website resmi PKM TI https://pkm.hmtiudayana.id/</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView="visible"
                        variants={variantFade(-100, 0)}
                        initial="hidden"
                        animate={controls}
                        className="font-sans my-3 md:my-5 flex w-full justify-end z-10 pl-0 md:pl-20"
                    >
                        <div className="w-full md:w-[466px] ml-5 md:ml-0 mr-0 md:mr-18 p-4 border shadow-lg rounded-md">
                            <h3 className="text-[16px] md:text-[20px] font-bold">Klinik PKM TI 2024</h3>
                            <p className="text-[14px] md:text-[16px] font-medium mb-1">⌛
                                8 Juni 2024
                            </p>
                            <p className="text-[16px]">📍 Online</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView="visible"
                        variants={variantFade(100, 0)}
                        initial="hidden"
                        animate={controls}
                        className="font-sans my-3 md:my-5 flex w-full justify-end md:justify-start z-10 pr-0 md:pr-24"
                    >
                        <div className="w-full md:w-[466px] ml-5 md:ml-18 p-4 border shadow-lg rounded-md">
                            <h3 className="text-[16px] md:text-[20px] font-bold">Pengumpulan Proposal Final</h3>
                            <p className="text-[14px] md:text-[16px] font-medium mb-1">⌛
                                12 - 15 Juni 2024
                            </p>
                            <p className="text-[16px]">📍 Melalui website resmi PKM TI https://pkm.hmtiudayana.id/</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView="visible"
                        variants={variantFade(-100, 0)}
                        initial="hidden"
                        animate={controls}
                        className="font-sans my-3 md:my-16 flex w-full justify-end z-10 pl-0 md:pl-20"
                    >
                        <div className="w-full md:w-[466px] ml-5 md:ml-0 mr-0 md:mr-18 p-4 border shadow-lg rounded-md">
                            <h3 className="text-[16px] md:text-[20px] font-bold">Pengumuman Kelulusan Pelatihan PKM TI 2024</h3>
                            <p className="text-[14px] md:text-[16px] font-medium mb-1">⌛
                                22 Juni 2024
                            </p>
                            <p className="text-[14px] md:text-[16px]">📍 Melalui website resmi PKM TI https://pkm.hmtiudayana.id/</p>
                            {/* <p className="text-[16px]">📍 On Webex https://webex</p> */}
                        </div>
                    </motion.div>
                </section>
                {/* End Timeline */}


                {/* Start News Letter */}
                <section className="flex flex-col max-w-full py-4 my-24 sm:px-12">
                    <div className="relative z-[1] h-fit pb-28 sm:pb-40 max-w-full rounded-2xl sm:rounded-3xl overflow-hidden p-10 bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block bg-gradient-custom2 before:-z-[1]">
                        <motion.div
                            whileInView="visible"
                            variants={variantZoom}
                            initial="hidden"
                            animate={controls}
                            className="flex flex-col justify-start items-center"
                        >
                            <div className="flex items-center space-x-2 mb-2">
                                <p className="uppercase font-bold text-sm sm:text-xl text-center text-white px-6">
                                    para suhu berbicara
                                </p>
                            </div>
                            <div className="relative flex">
                                <h2 className="capitalize text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-2 z-10">
                                    Bergabung dengan mereka
                                </h2>
                                <div className="md:absolute md:block hidden top-[65px] z-0">
                                    <IconTextTopics />
                                </div>
                            </div>
                            <p className="text-slate-200 text-center text-sm sm:text-base mt-6 mx-0 md:mx-12">
                                Jelajahi kategori-kategori sub topik PKM kami dan temukan passion yang menggetarkan hati Anda. Mulai dari keberlanjutan hingga teknologi, kesehatan hingga seni, kami mengundang Anda untuk meresapi setiap sub topik dengan penuh antusiasme. Temukan tempat Anda di dunia PKM, di mana setiap kategori adalah panggung bagi idealisasi dan perubahan.
                            </p>
                        </motion.div>
                    </div>

                    <div className="relative -mt-24 sm:-mt-32 z-[5] flex justify-center items-center">
                        <CustomCarousel className="flex justify-center items-center text-center space-x-4">
                            <div className="relative flex justify-center items-center pb-5">
                                <div className="flex flex-col items-center w-11/12 md:max-w-[50rem] p-6 bg-white backdrop-brightness-150 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex justify-center items-center mb-4 max-w-[12rem] max-h-[12rem] rounded-full overflow-hidden border-2 border-[#285b70]">
                                        <img
                                            src="images/image-bayu.png"
                                            className="object-contain object-center bg-no-repeat hover:scale-110"
                                            alt="Kepin"
                                        />
                                    </div>
                                    <p className="text-center text-slate-600 mb-2">
                                        “ Program Kreativitas Mahasiswa-Karsa Cipta (PKM-KC) merupakan program penciptaan yang didasari atas karsa dan nalar mahasiswa, bersifat konstruktif serta menghasilkan suatu sistem, desain, model/barang atau prototipe dan sejenisnya. “
                                    </p>
                                    <h3 className="capitalize text-xl text-[#285b70] font-bold mb-2">
                                        Bayu Zilong
                                    </h3>
                                    <p className="capitalize text-slate-400">
                                        mahasiswa aktif teknologi informasi
                                    </p>
                                </div>
                            </div>

                            <div className="relative flex justify-center items-center pb-5">
                                <div className="flex flex-col items-center w-11/12 md:max-w-[50rem] p-6 bg-white backdrop-brightness-150 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex justify-center items-center mb-4 max-w-[12rem] max-h-[12rem] rounded-full overflow-hidden border-2 border-[#285b70]">
                                        <img
                                            src="images/kak-christina.jpg?v=1"
                                            className="object-contain object-center bg-no-repeat"
                                            alt="Christina"
                                        />
                                    </div>
                                    <p className="text-center text-slate-600 mb-2">
                                        “Banyak insight dan pandangan baru yang saya dapat berkat tips and trick dari Pelatihan PKM TI. Saya merasa lebih siap dan percaya diri untuk eksplorasi ide menjadi hasil yang inovatif.”
                                    </p>
                                    <h3 className="capitalize text-xl text-[#285b70] font-bold mb-2">
                                        Christina
                                    </h3>
                                    <p className="capitalize text-slate-400">
                                        mahasiswa aktif teknologi informasi
                                    </p>
                                </div>
                            </div>

                        </CustomCarousel>
                    </div>
                </section>
                {/* End News Letter */}


                {/* Start FAQ */}
                <section className="flex flex-col gap-5 justify-center items-center w-full mb-20" id="FaQ">
                    <motion.div
                        whileInView="visible"
                        variants={variantZoom}
                        initial="hidden"
                        animate={controls}
                        className="flex flex-col gap-2 justify-center items-center text-center"
                    >
                        <p className="font-bold text-[20px] tracking-[0.01em] text-[#42A1A4]">
                            FAQ
                        </p>
                        <h1 className="font-bold text-[50px] leading-[50px] text-[#285B70]">
                            Pertanyaan Umum yang Sering Ditanyakan
                        </h1>
                        <p className="font-normal text-[16px] tracking-[0.01em] text-slate-500">
                            Pertanyaan umum yang sering ditanyakan terkait PKM TI 2025. Jika masih ada yang ingin ditanyakan lebih lanjut, kalian bisa hubungi narahubung dibawah ini.
                        </p>
                    </motion.div>
                    {/* Buttons */}
                    <motion.div
                        whileInView="visible"
                        variants={variantZoom}
                        initial="hidden"
                        animate={controls}
                        className="flex md:flex-row flex-col justify-center items-center gap-5 w-full"
                    >
                        <div
                            onClick={() => setActiveCategoryFaq("Guidebook")}
                            className={`${activeCategoryFaq === "Guidebook" ? "bg-[#59DFD1] shadow-[0_0_20px_#59DFD1] text-white" : ""
                                } hover:bg-[#59DFD1] hover:shadow-[0_0_10px_#59DFD1] hover:text-white md:w-[196px] w-full md:h-[50px] h-[60px] flex justify-center items-center rounded-[50px] border-[1px] border-slate-200 text-[#42A1A4] font-bold text-[20px] transition-all duration-300 ease-in-out cursor-pointer`}
                        >
                            Guidebook
                        </div>
                        <div
                            onClick={() => setActiveCategoryFaq("Hari H PKM")}
                            className={`${activeCategoryFaq === "Hari H PKM" ? "bg-[#59DFD1] text-white shadow-[0_0_20px_#59DFD1]" : ""
                                } hover:bg-[#59DFD1] hover:shadow-[0_0_10px_#59DFD1] hover:text-white md:w-[196px] w-full md:h-[50px] h-[60px] flex justify-center items-center rounded-[50px] border-[1px] border-slate-200 text-[#42A1A4] font-bold text-[20px] transition-all duration-300 ease-in-out cursor-pointer`}
                        >
                            Hari H PKM
                        </div>
                        <div
                            onClick={() => setActiveCategoryFaq("Klinik PKM")}
                            className={`${activeCategoryFaq === "Klinik PKM" ? "bg-[#59DFD1] text-white shadow-[0_0_20px_#59DFD1]" : ""
                                } hover:bg-[#59DFD1] hover:shadow-[0_0_10px_#59DFD1] hover:text-white md:w-[196px] w-full md:h-[50px] h-[60px] flex justify-center items-center rounded-[50px] border-[1px] border-slate-200 text-[#42A1A4] font-bold text-[20px] transition-all duration-300 ease-in-out cursor-pointer`}
                        >
                            Klinik PKM
                        </div>
                    </motion.div>
                    <div className="flex md:flex-row flex-col justify-evenly items-center w-full">
                        <motion.div
                            whileInView="visible"
                            variants={variantFade(-100, 0)}
                            initial="hidden"
                            animate={controls}
                        >
                            <img src="images/faq.png" alt="" key={activeCategoryFaq} className="w-full md:w-[481px] md:h-[483px] h-auto animate-bounce-custom" />
                        </motion.div>
                        {activeCategoryFaq === "Guidebook" && (
                            <motion.div
                                whileInView="visible"
                                variants={variantZoom}
                                initial="hidden"
                                animate={controls}
                                className="flex flex-col gap-2 md:w-[636px] w-full"
                            >
                                <Accordion
                                    heading="Apakah mahasiswa program studi Teknologi Informasi Universitas Udayana wajib mengikuti Pelatihan PKM TI 2024?"
                                    description="Mahasiswa yang belum mengikuti Pelatihan PKM TI periode sebelumnya atau belum lulus pada pelatihan sebelumnya wajib untuk mengikuti Pelatihan PKM TI 2024. Dan bagi mahasiswa yang sudah mengikuti Pelatihan PKM TI periode sebelumnya juga boleh mengikuti Pelatihan PKM TI 2024."
                                    isOpen={openIndex === 0}
                                    onClick={() => handleAccordionClick(0)}
                                />
                                <Accordion
                                    heading="Apa yang akan dilakukan mahasiswa selama Pelatihan PKM TI 2024?"
                                    description="Selama Pelatihan PKM TI 2024, mahasiswa akan dibimbing dalam merancang Program Kreativitas Mahasiswa (PKM) yang inovatif dan kreatif di bidang Teknologi Informasi."
                                    isOpen={openIndex === 1}
                                    onClick={() => handleAccordionClick(1)}
                                />
                                <Accordion
                                    heading="Apa yang diharapkan mahasiswa peroleh setelah mengikuti Pelatihan PKM TI 2024?"
                                    description="Setelah mengikuti Pelatihan PKM TI 2024, diharapkan mahasiswa akan memperoleh pemahaman mendalam mengenai pengembangan judul, penyesuaian format berdasarkan pedoman, teknik penelitian, serta keterampilan teknis yang diperlukan untuk mengimplementasikan ide-ide tersebut."
                                    isOpen={openIndex === 3}
                                    onClick={() => handleAccordionClick(3)}
                                />
                                <Accordion
                                    heading="Apa luaran yang dihasilkan oleh mahasiswa setelah mengikuti Pelatihan PKM TI 2024?"
                                    description="Luaran dari kegiatan ini berupa proposal PKM yang memiliki potensi memberikan manfaat signifikan dalam konteks Teknologi Informasi dan dapat diajukan untuk mendapatkan dukungan dan pendanaan pada tahun 2025."
                                    isOpen={openIndex === 4}
                                    onClick={() => handleAccordionClick(4)}
                                />

                            </motion.div>
                        )}
                        {activeCategoryFaq === "Hari H PKM" && (
                            <motion.div
                                whileInView="visible"
                                variants={variantZoom}
                                initial="hidden"
                                animate={controls}
                                className="flex flex-col gap-2 md:w-[636px] w-full"
                            >
                                <Accordion
                                    heading="Apakah mahasiswa program studi Teknologi Informasi Universitas Udayana wajib mengikuti Pelatihan PKM TI 2024?"
                                    description="Mahasiswa yang belum mengikuti Pelatihan PKM TI periode sebelumnya atau belum lulus pada pelatihan sebelumnya wajib untuk mengikuti Pelatihan PKM TI 2024. Dan bagi mahasiswa yang sudah mengikuti Pelatihan PKM TI periode sebelumnya juga boleh mengikuti Pelatihan PKM TI 2024."
                                    isOpen={openIndex === 0}
                                    onClick={() => handleAccordionClick(0)}
                                />
                                <Accordion
                                    heading="Apa yang akan dilakukan mahasiswa selama Pelatihan PKM TI 2024?"
                                    description="Selama Pelatihan PKM TI 2024, mahasiswa akan dibimbing dalam merancang Program Kreativitas Mahasiswa (PKM) yang inovatif dan kreatif di bidang Teknologi Informasi."
                                    isOpen={openIndex === 1}
                                    onClick={() => handleAccordionClick(1)}
                                />
                                <Accordion
                                    heading="Apa yang diharapkan mahasiswa peroleh setelah mengikuti Pelatihan PKM TI 2024?"
                                    description="Setelah mengikuti Pelatihan PKM TI 2024, diharapkan mahasiswa akan memperoleh pemahaman mendalam mengenai pengembangan judul, penyesuaian format berdasarkan pedoman, teknik penelitian, serta keterampilan teknis yang diperlukan untuk mengimplementasikan ide-ide tersebut."
                                    isOpen={openIndex === 3}
                                    onClick={() => handleAccordionClick(3)}
                                />
                                <Accordion
                                    heading="Apa luaran yang dihasilkan oleh mahasiswa setelah mengikuti Pelatihan PKM TI 2024?"
                                    description="Luaran dari kegiatan ini berupa proposal PKM yang memiliki potensi memberikan manfaat signifikan dalam konteks Teknologi Informasi dan dapat diajukan untuk mendapatkan dukungan dan pendanaan pada tahun 2025."
                                    isOpen={openIndex === 4}
                                    onClick={() => handleAccordionClick(4)}
                                />

                            </motion.div>
                        )}
                        {activeCategoryFaq === "Klinik PKM" && (
                            <div className="flex flex-col gap-2 md:w-[636px] w-full">
                                {/* <Accordion
                                    heading="Apakah mahasiswa program studi Teknologi Informasi Universitas Udayana wajib mengikuti Pelatihan PKM TI 2024?"
                                    description="Mahasiswa yang belum mengikuti Pelatihan PKM TI periode sebelumnya atau belum lulus pada pelatihan sebelumnya wajib untuk mengikuti Pelatihan PKM TI 2024. Dan bagi mahasiswa yang sudah mengikuti Pelatihan PKM TI periode sebelumnya juga boleh mengikuti Pelatihan PKM TI 2024."
                                    isOpen={openIndex === 0}
                                    onClick={() => handleAccordionClick(0)}
                                />
                                <Accordion
                                    heading="Apa yang akan dilakukan mahasiswa selama Pelatihan PKM TI 2024?"
                                    description="Selama Pelatihan PKM TI 2024, mahasiswa akan dibimbing dalam merancang Program Kreativitas Mahasiswa (PKM) yang inovatif dan kreatif di bidang Teknologi Informasi."
                                    isOpen={openIndex === 1}
                                    onClick={() => handleAccordionClick(1)}
                                />
                                <Accordion
                                    heading="Apa yang diharapkan mahasiswa peroleh setelah mengikuti Pelatihan PKM TI 2024?"
                                    description="Setelah mengikuti Pelatihan PKM TI 2024, diharapkan mahasiswa akan memperoleh pemahaman mendalam mengenai pengembangan judul, penyesuaian format berdasarkan pedoman, teknik penelitian, serta keterampilan teknis yang diperlukan untuk mengimplementasikan ide-ide tersebut."
                                    isOpen={openIndex === 3}
                                    onClick={() => handleAccordionClick(3)}
                                />
                                <Accordion
                                    heading="Apa luaran yang dihasilkan oleh mahasiswa setelah mengikuti Pelatihan PKM TI 2024?"
                                    description="Luaran dari kegiatan ini berupa proposal PKM yang memiliki potensi memberikan manfaat signifikan dalam konteks Teknologi Informasi dan dapat diajukan untuk mendapatkan dukungan dan pendanaan pada tahun 2025."
                                    isOpen={openIndex === 4}
                                    onClick={() => handleAccordionClick(4)}
                                /> */}

                            </div>
                        )}
                    </div>
                </section>
                {/* End FAQ


                {/* Start Kontak Kami */}
                <section className="flex flex-col justify-center items-center w-full my-12" id="contact-us">
                    <motion.div
                        whileInView="visible"
                        variants={variantZoom}
                        initial="hidden"
                        animate={controls}
                        className="flex flex-col justify-center items-center"
                    >
                        <h1 className="font-bold text-[48px] text-[#285B70]">
                            Kontak Kami
                        </h1>
                        <p className="w-4/5 text-base text-center">
                            Jika Anda memiliki pertanyaan lebih lanjut, jangan ragu untuk menghubungi narahubung yang tertera di bawah ini.
                        </p>
                    </motion.div>
                    <motion.div
                        whileInView="visible"
                        variants={variantZoom}
                        initial="hidden"
                        animate={controls}
                        className="grid grid-cols-1 md:grid-cols-3 justify-between my-8 gap-16"
                    >
                        <div className="flex flex-col gap-2 bg-[#285B70] py-4 pl-4 pr-24 rounded-b-2xl border-t-2 border-[#285B70] bg-opacity-20">
                            <h1 className="font-bold text-xl">Tiksna Apsari</h1>
                            <div className="flex flex-row justify-start gap-4">
                                <IconLine />
                                <a href="https://line.me/R/ti/p/~tiksnaapsr." className="text-base light:text-[#2A3374] dark:text-white">tiksnaapsr.</a>
                            </div>
                            <div className="flex flex-row justify-start gap-4">
                                <IconWhatsapp />
                                <a href="wa.me/6285739490558" className="text-base light:text-[#2A3374] dark:text-white">+62 857-3949-0558</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-[#42A1A4] py-4 pl-4 pr-24 rounded-b-2xl border-t-2 border-[#285B70] bg-opacity-20">
                            <h1 className="font-bold text-xl">Dewa Ayu</h1>
                            <div className="flex flex-row justify-start gap-4">
                                <IconLine />
                                <a href="https://line.me/R/ti/p/~dewayu1275" className="text-base light:text-[#2A3374] dark:text-white">dewayu1275</a>
                            </div>
                            <div className="flex flex-row justify-start gap-4">
                                <IconWhatsapp />
                                <a href="wa.me/6285940899163" className="text-base light:text-[#2A3374] dark:text-white">+62 859-4089-9163</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-[#285B70] py-4 pl-4 pr-24 rounded-b-2xl border-t-2 border-[#285B70] bg-opacity-20">
                            <h1 className="font-bold text-xl">Putu Rifki</h1>
                            <div className="flex flex-row justify-start gap-4">
                                <IconLine />
                                <a href="https://line.me/R/ti/p/~puturifki56" className="text-base light:text-[#2A3374] dark:text-white">puturifki56</a>
                            </div>
                            <div className="flex flex-row justify-start gap-4">
                                <IconWhatsapp />
                                <a href="wa.me/62881038194017" className="text-base light:text-[#2A3374] dark:text-white">+62 881-0381-94017</a>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView="visible"
                        variants={variantZoom}
                        initial="hidden"
                        animate={controls}
                    >
                        <img src="images/kontak-kami.png" alt="KONTAK-KAMI" className="md:w-[584px] w-full md:h-[540px] h-auto my-2 animate-bounce-custom" />
                    </motion.div>
                </section>
                {/* End Kontak Kami */}
                <ScrollToTop />
            </main>

            {/* Start Footer */}
            <footer className="footer p-12 bg-base-200 text-base-content grid-flow-row sm:grid-cols-2 md:grid-cols-6 gap-x-20">
                <aside className="col-span-2 w-4/5 md:max-w-full">
                    <img
                        src="images/Logo-PKM-TI-2025.png"
                        className="w-32"
                        alt="PKM TI Logo"
                    />
                    <p className="capitalize text-lg font-semibold">
                        program studi sarjana teknologi informasi fakultas
                        teknik universitas udayana
                    </p>
                </aside>
                <nav className="col-span-1 md:col-span-2">
                    <h6 className="footer-title mb-0">Alamat</h6>
                    <a className="link link-hover mb-4" href="https://maps.app.goo.gl/BxpnRYfHvLDrVYmZ8" target="_blank" rel="noopener noreferrer">
                        Jl. Kampus Udayana Bukit Jimbaran, Jimbaran, Kuta
                        Selatan, Kabupaten Badung, Bali 80361
                    </a>

                    <h6 className="footer-title mb-0">Telepon</h6>
                    <a className="link link-hover mb-4" href="tel:0361701806">(0361) 701806</a>

                    <h6 className="footer-title mb-0">Email</h6>
                    <a className="link link-hover mb-4" href="mailto:hmti@unud.ac.id">hmti@unud.ac.id</a>
                </nav>
                <nav className="col-span-1 md:col-span-2">
                    <h6 className="footer-title mb-0">Terkait</h6>
                    <a className="link link-hover mb-2">
                        UNUD | Teknologi Informasi
                    </a>

                    <a className="link link-hover mb-2">BEM PM Udayna</a>

                    <a className="link link-hover mb-2">SMFT Udayana</a>
                </nav>
            </footer>
            <footer className="py-5 px-12 bg-base-300 text-slate-600">
                <p>© 2025 PKM TI Udayana </p>
            </footer>
            {/* End Footer */}

        </>
    );
}
