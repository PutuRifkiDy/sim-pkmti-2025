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
            <Head title="Welcome" />

            {/* Start Navbar */}
            <NavBar auth={auth} />
            {/* End Navbar */}

            <main className="md:px-12 px-2 pt-36 light:bg-[#F7F7F7] overflow-x-hidden dark:bg-[#1d232a]">
                {/* Start HomePage */}
                <section className="flex md:flex-row flex-col-reverse max-w-full justify-between mb-36">
                    {/* Home Page Bagian Kiri */}
                    <motion.div
                        whileInView="visible"
                        variants={variantFade(-100, 0)}
                        initial="hidden"
                        animate={controls}
                        className="flex flex-col gap-7 justify-center items-start w-full"
                    >
                        <div className="relative md:w-[581px] max-w-full md:h-[210px] h-[148px] text-center md:text-start">
                            <div className="md:absolute md:block hidden md:left-2 left-12 top-14 ">
                                <IconTextHomePage />
                            </div>
                            <p className="font-bold md:text-[64px] text-[36px] text-[#111E41] dark:text-[#42A1A4] leading-[1.1em]">Sistem Informasi Pelatihan PKM TI Udayana</p>
                        </div>
                        <div>
                            <p className="text-[18px] leading-[1.6em] light:text-[#0F172A] md:w-[581px] max-max-w-full font-normal text-center md:text-start dark:text-gray-400">
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
                                    <button className="font-bold border-[1px] border-slate-200 px-6 py-2 rounded-md text-[#59DFD1] hover:text-white hover:bg-[#42A1A4] dark:text-gray-100 dark:hover:text-white transition-all duration-300 flex flex-row gap-2 justify-center items-center hover:shadow-[0_0_10px_#42A1A4]" onClick={() => document.getElementById('my_modal_3').showModal()}>View Demo</button>
                                    <dialog id="my_modal_3" className="modal">
                                        <div className="modal-box w-11/12 max-w-5xl">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <h3 className="font-bold text-lg mb-3 dark:text-slate-200">Demonstrasi Sistem Informasi PKM TI 2025</h3>
                                            <div className="video-container">
                                                <iframe
                                                    width="100%"
                                                    height="500"
                                                    src="https://www.youtube.com/embed/your-video-id"
                                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    title="Video Demonstrasi"
                                                ></iframe>
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
                                    <button className="font-bold border-[1px] border-slate-300 px-6 py-2 rounded-md text-[#59DFD1] hover:text-white hover:bg-[#42A1A4] dark:text-gray-400 dark:hover:text-white transition-all duration-300 flex flex-row gap-2 justify-center items-center hover:shadow-[0_0_10px_#42A1A4] " onClick={() => document.getElementById('my_modal_3').showModal()}>View Demo</button>
                                    <dialog id="my_modal_3" className="modal">
                                        <div className="modal-box w-11/12 max-w-5xl">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <h3 className="font-bold text-lg mb-3 dark:text-slate-200">Demonstrasi Sistem Informasi PKM TI 2025</h3>
                                            <div className="video-container">
                                                <iframe
                                                    width="100%"
                                                    height="500"
                                                    src="https://www.youtube.com/embed/your-video-id"
                                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    title="Video Demonstrasi"
                                                ></iframe>
                                            </div>
                                        </div>
                                    </dialog>

                                </>
                            )}
                        </div>
                    </motion.div>

                    <div className="w-full flex justify-center">
                        <div className="relative">
                            {/* Home Page Bagian Kanan */}
                            <div className="md:w-[270px] md:h-[340px] absolute -right-80 top-0">
                                <img src="/images/elements/element_home_section_1.png" alt="" className=" " />
                            </div>
                            <div className="md:w-[270px] md:h-[340px] absolute -left-52  -bottom-12">
                                <img src="/images/elements/element_home_section_2.png" className="" alt="" />
                            </div>

                            <div className="md:w-[247.18px] md:h-[178.26px] absolute top-8 -left-56">
                                <img src="/images/elements/element_home_section_3.png" className="" alt="" />
                            </div>

                            <div className="md:w-[332.31px] md:h-[239.94px] absolute left-0 top-8 z-20">
                                <img src="/images/elements/element_home_section_4.png" className="" alt="" />
                            </div>

                            <div className="md:w-[332.31px] md:h-[239.94px] absolute -right-24 top-48 z-0">
                                <img src="/images/elements/element_home_section_5.png" className="" alt="" />
                            </div>
                            <div className="md:w-[247.18px] md:h-[178.26px]  absolute -right-80 -bottom-4">
                                <img src="/images/elements/element_home_section_6.png" className="" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* End HomePage */}

                {/* Agenda Acara*/}
                <section className="mb-20 flex justify-center items-center md:mx-36 mx-0">
                    <motion.div
                        whileInView="visible"
                        variants={variantFade(0, 100)}
                        initial="hidden"
                        animate={controls}
                        className="flex md:flex-row flex-col justify-between gap-5 px-12 py-10 max-w-full shadow-xl border border-base-300 rounded-2xl dark:border-gray-400"
                    >
                        <div className="flex flex-row gap-4 sm:pr-10">
                            <BookmarkSquareIcon className="w-6 h-6 font-extrabold dark:text-gray-400 text-black" />
                            <div className="block">
                                <span className="capitalize text-black dark:text-gray-400 font-normal text-sm md:text-base">
                                    Agenda Acara
                                </span>

                                <p className="text-base md:text-sm font-light dark:text-gray-400">
                                    Pembukaan PKM-TI 2024
                                </p>
                            </div>
                        </div>

                        <div className="divider divider-horizontal before:bg-black after:bg-black dark:before:bg-gray-400 dark:after:bg-gray-400"></div>

                        <div className="flex flex-row gap-4">
                            <CalendarDaysIcon className="w-6 h-6 font-extrabold dark:text-gray-400" />
                            <div className="block">
                                <span className="capitalize text-black dark:text-gray-400 font-normal text-sm md:text-base">
                                    Date
                                </span>

                                <p className="text-base md:text-sm font-light dark:text-gray-400">
                                    Minggu, 4 Februari 2024
                                </p>
                            </div>
                        </div>

                        <div className="divider divider-horizontal before:bg-black after:bg-black dark:before:bg-gray-400 dark:after:bg-gray-400"></div>

                        <div className="flex flex-row gap-4">
                            <MapPinIcon className="w-6 h-6 font-extrabold dark:text-gray-400" />

                            <div className="block">
                                <span className="capitalize text-dark dark:text-gray-400 font-normal text-sm md:text-base">
                                    Lokasi Acara
                                </span>

                                <p className="text-base md:text-sm font-light dark:text-gray-400">
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
                            <p className="font-bold md:text-[56px] text-[36px] text-[#111E41] leading-[1.1em] dark:text-[#42A1A4]">Tentang PKM TI 2025</p>
                        </div>
                        <div className="flex flex-col gap-3 text-center md:text-start">
                            <p className="text-[24px] leading-[1.8em] text-[#111E41] dark:text-[#42A1A4] font-bold">
                                Apa itu PKM TI 2025?
                            </p>
                            <p className="text-[17px] leading-[1.8em] text-[#111E41] dark:text-gray-400">
                                Pelatihan PKM Teknologi Informasi 2025 oleh HMTI bertujuan memberikan platform bagi mahasiswa untuk memperluas pengetahuan tentang Program Kreativitas Mahasiswa (PKM). Mengusung tema “Mengasah Kreativitas Mahasiswa untuk Menghasilkan
                                Karya Inovatif Melalui PKM” pelatihan ini diharapkan memotivasi mahasiswa Teknologi Informasi untuk mengembangkan kreativitas visioner dan mengikuti tren masa depan. Kegiatan ini juga bertujuan meningkatkan pemahaman mahasiswa terkait pengembangan judul, penyesuaian format pedoman, teknik penelitian, dan keterampilan teknis.
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
                        <p className="text-[18px] leading-[1.5em] font-normal light:text-[#111E41] mt-3 dark:text-gray-400">
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
{/*
                <section className="relative px-6 md:px-24 mt-36 mb-16 " id="Timeline">
                    <div
                        className="absolute right-0 left-0 top-[400px] md:flex hidden justify-center items-center -z-10"
                        style={{ transform: `translateY(${offsetY}px)`, transition: "transform 0.1s ease-out" }}
                    >
                        <img src="images/Logo-PKM-TI-2025.png" alt="Background Icon" className="w-[400px] opacity-30 animate-bounce-custom" />
                    </div>
                    <div
                        className="absolute right-0 left-0 bottom-[1800px] md:flex hidden justify-center items-center -z-10"
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
                        className="font-sans my-3 md:my-5 flex w-full justify-end z-10 md:pl-20 "
                    >
                        <div className="w-full md:w-[466px] ml-5 md:ml-0 mr-0 md:mr-18 p-4 border shadow-lg rounded-md dark:text-gray-400">
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
                        <div className="w-full md:w-[466px] ml-5 md:ml-18 p-4 border shadow-lg rounded-md dark:text-gray-400">
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
                        <div className="w-full md:w-[466px] ml-5 md:ml-0 mr-0 md:mr-18 p-4 border shadow-lg rounded-md dark:text-gray-400">
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
                        <div className="w-full md:w-[466px] ml-5 md:ml-18 p-4 border shadow-lg rounded-md dark:text-gray-400">
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
                    
                    >
                    </div>
                    <motion.div
                        whileInView="visible"
                        variants={variantFade(-100, 0)}
                        initial="hidden"
                        animate={controls}
                        className="font-sans my-3 md:my-5 flex w-full justify-end z-10 pl-0 md:pl-20"
                    >
                        <div className="w-full md:w-[466px] ml-5 md:ml-0 mr-0 md:mr-18 p-4 border shadow-lg rounded-md dark:text-gray-400">
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
                        <div className="w-full md:w-[466px] ml-5 md:ml-18 p-4 border shadow-lg rounded-md dark:text-gray-400">
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
                        <div className="w-full md:w-[466px] ml-5 md:ml-0 mr-0 md:mr-18 p-4 border shadow-lg rounded-md dark:text-gray-400">
                            <h3 className="text-[16px] md:text-[20px] font-bold">Pengumpulan Bukti Asistensi</h3>
                            <p className="text-[14px] md:text-[16px] font-medium mb-1">⌛
                                31 Maret - 16 Mei 2024
                            </p>
                            <p className="text-[14px] md:text-[16px]">📍 Melalui website resmi PKM TI https://pkm.hmtiudayana.id/</p>
                            
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView="visible"
                        variants={variantFade(100, 0)}
                        initial="hidden"
                        animate={controls}
                        className="font-sans my-3 md:my-14 flex w-full justify-end md:justify-start z-10 pr-0 md:pr-24"
                    >
                        <div className="w-full md:w-[466px] ml-5 md:ml-18 p-4 border shadow-lg rounded-md dark:text-gray-400">
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
                        <div className="w-full md:w-[466px] ml-5 md:ml-0 mr-0 md:mr-18 p-4 border shadow-lg rounded-md dark:text-gray-400">
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
                        <div className="w-full md:w-[466px] ml-5 md:ml-18 p-4 border shadow-lg rounded-md dark:text-gray-400">
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
                        <div className="w-full md:w-[466px] ml-5 md:ml-0 mr-0 md:mr-18 p-4 border shadow-lg rounded-m dark:text-gray-400">
                            <h3 className="text-[16px] md:text-[20px] font-bold">Pengumuman Kelulusan Pelatihan PKM TI 2024</h3>
                            <p className="text-[14px] md:text-[16px] font-medium mb-1">⌛
                                22 Juni 2024
                            </p>
                            <p className="text-[14px] md:text-[16px]">📍 Melalui website resmi PKM TI https://pkm.hmtiudayana.id/</p>
                        </div>
                    </motion.div>
                </section>

                */}
                {/* End Timeline */}

                <div className="absolute left-2 sm:block hidden">
                    <img src="images/asset25.png" alt="bwabwa"/>
                </div>
                <section className="mx-auto mt-20 w-full max-w-[1200px] flex-shrink-0 px-4 sm:px-8 md:mt-36">
                    <h1
                        className="font-sans text-center text-[47px] font-bold uppercase dark:text-white sm:text-4xl"

                    >
                        TIMELINE PKM TI 2025
                    </h1>
                    <p
                        className="font-sans mx-auto max-w-[653px] text-center font-bold text-2xl dark:text-gray-500 text-[#285B70]"
                    >
                        Jangan Lewatkan Kesempatan Ini 
                    </p>
                    <div className="h-16" />
                    <div className="relative mt-12 flex min-h-fit flex-col items-center" style={{ gap: '96px' }}>
                    <div className="absolute -left-24 -top-16 sm:block hidden">
                        <img src="images/asset25.png" alt="bwabwa"/>
                    </div>
                        {/* Timeline items */}
                        <div
                            className="relative z-10 flex w-full max-w-[900px] items-center "
                        >
                            <div className="font-sans relative h-max flex-1 flex-shrink-0 rounded-[20px] shadow-xl border border-[#E8E8E8] bg-white py-4 dark:bg-[#285B70]">
                                {/* Status Label */}
                                <div className={`absolute right-3 top-3 flex items-center gap-2 rounded-[10px] px-3 py-1 shadow-sm bg-[#E82323]/20 text-[#E82323]`}>
                                    <div className={`h-3 w-3 rounded-full bg-[#E82323]`} />
                                    <span className={`font-sans text-[10px] font-medium text-[#E82323]`}>
                                        Not Available
                                    </span>
                                </div>

                                {/* Title */}
                                <div className='flex items-start mb-1'>
                                    <p className="xs:text-sm text-2xl font-bold pl-8 pt-4 sm:pt-1 capitalize text-[#141619] dark:text-white sm:text-lg md:text-3xl lg:text-[#30px] md:w-[600px] max-w-none sm:pl-16 sm:text-[30px] lg:mt-1">
                                        Pembukaan PKM TI
                                    </p>
                                </div>
                                {/* Date */}
                                <div className="flex items-center px-6 pt-2 sm:pl-16">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 1C7.43506 1 7.13301 1.15145 6.91031 1.42103C6.68761 1.69062 6.5625 2.05625 6.5625 2.4375V3.875H5.375C4.74511 3.875 4.14102 4.1779 3.69562 4.71707C3.25022 5.25624 3 5.9875 3 6.75V21.125C3 21.8875 3.25022 22.6188 3.69562 23.1579C4.14102 23.6971 4.74511 24 5.375 24H19.625C20.2549 24 20.859 23.6971 21.3044 23.1579C21.7498 22.6188 22 21.8875 22 21.125V6.75C22 5.9875 21.7498 5.25624 21.3044 4.71707C20.859 4.1779 20.2549 3.875 19.625 3.875H18.4375V2.4375C18.4375 2.05625 18.3124 1.69062 18.0897 1.42103C17.867 1.15145 17.5649 1 17.25 1C16.9351 1 16.633 1.15145 16.4103 1.42103C16.1876 1.69062 16.0625 2.05625 16.0625 2.4375V3.875H8.9375V2.4375C8.9375 2.05625 8.81239 1.69062 8.58969 1.42103C8.36699 1.15145 8.06494 1 7.75 1ZM7.75 8.1875C7.43506 8.1875 7.13301 8.33895 6.91031 8.60853C6.68761 8.87812 6.5625 9.24375 6.5625 9.625C6.5625 10.0062 6.68761 10.3719 6.91031 10.6415C7.13301 10.911 7.43506 11.0625 7.75 11.0625H17.25C17.5649 11.0625 17.867 10.911 18.0897 10.6415C18.3124 10.3719 18.4375 10.0062 18.4375 9.625C18.4375 9.24375 18.3124 8.87812 18.0897 8.60853C17.867 8.33895 17.5649 8.1875 17.25 8.1875H7.75Z" fill="#979797"/>
                                    </svg>
                                    <p className="text-[16px] leading-[24px] font-normal text-[#979797] px-2">
                                        23 Agustus 2025
                                    </p>
                                </div>
                                <div className="flex items-center px-6 pt-2 sm:pl-16">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-6 sm:h-6">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.78266 3.91169C7.56423 2.04737 9.98057 1 12.5001 1C15.0196 1 17.436 2.04737 19.2175 3.91169C20.9991 5.77601 22 8.30457 22 10.9411C22 13.5777 20.9991 16.1062 19.2175 17.9706L12.5001 25L5.78266 17.9706C4.90045 17.0475 4.20064 15.9516 3.72319 14.7455C3.24574 13.5394 3 12.2466 3 10.9411C3 9.63562 3.24574 8.3429 3.72319 7.13678C4.20064 5.93066 4.90045 4.83477 5.78266 3.91169ZM12.5001 13.7813C13.2199 13.7813 13.9103 13.4821 14.4193 12.9494C14.9283 12.4168 15.2142 11.6944 15.2142 10.9411C15.2142 10.1879 14.9283 9.46545 14.4193 8.93282C13.9103 8.40018 13.2199 8.10095 12.5001 8.10095C11.7803 8.10095 11.0899 8.40018 10.5809 8.93282C10.0719 9.46545 9.78598 10.1879 9.78598 10.9411C9.78598 11.6944 10.0719 12.4168 10.5809 12.9494C11.0899 13.4821 11.7803 13.7813 12.5001 13.7813Z" fill="#979797"/>
                                    </svg>
                                    <p className="text-[16px] font-normal text-[#979797] px-2">
                                        Gedung Teknologi Informasi Fakultas Teknik Universitas Udayana
                                    </p>
                                </div>
                                    
                            </div>

                            {/* Icon lingkaran */}
                            <div className="absolute -top-8 -left-6 rounded-[500px] bg-[#285B70] p-4 sm:-left-10 sm:top-8 z-10 ">
                                <div className="absolute inset-0 z-0 h-full w-full animate-ping rounded-full bg-[#285B70]"></div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="39"
                                    height="39"
                                    viewBox="0 0 39 39"
                                    fill="none"
                                    x="26.5"
                                    y="26.5"
                                >
                                    <path
                                        d="M6.09375 36.5625C5.77052 36.5625 5.46052 36.4341 5.23196 36.2055C5.0034 35.977 4.875 35.667 4.875 35.3438V5.18959C4.87509 4.87026 4.95882 4.55653 5.11785 4.27963C5.27688 4.00272 5.50567 3.7723 5.78145 3.61131C6.70313 3.07582 8.5602 2.4375 12.1875 2.4375C15.0219 2.4375 18.1921 3.55799 20.9892 4.54594C23.2416 5.34193 25.369 6.09375 26.8125 6.09375C28.6707 6.08805 30.5091 5.71259 32.2207 4.98926C32.4291 4.90128 32.6561 4.86624 32.8814 4.88727C33.1066 4.9083 33.3232 4.98474 33.5117 5.10978C33.7003 5.23482 33.8549 5.40458 33.9619 5.60391C34.0689 5.80324 34.125 6.02595 34.125 6.25219V22.9613C34.1247 23.2574 34.0381 23.5471 33.8757 23.7948C33.7134 24.0425 33.4824 24.2375 33.2109 24.356C32.5475 24.6462 30.1252 25.5938 26.8125 25.5938C24.9737 25.5938 22.6703 25.0499 20.232 24.4733C17.4913 23.8258 14.6578 23.1562 12.1875 23.1562C9.37904 23.1562 7.94168 23.5813 7.3125 23.8502V35.3438C7.3125 35.667 7.1841 35.977 6.95554 36.2055C6.72698 36.4341 6.41698 36.5625 6.09375 36.5625Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <div className="absolute -top-7 left-0 bg-[#285B70] sm:-left-[6px] h-[290px] sm:h-[300px] w-[5px] rounded-full z-0"></div>
                        </div>
                        <div
                            className="relative z-10 flex w-full max-w-[900px] items-center "
                        >
                            <div className="font-sans relative h-max flex-1 flex-shrink-0 rounded-[20px] shadow-xl border border-[#E8E8E8] bg-white py-4 dark:bg-[#285B70]">
                                {/* Status Label */}
                                <div className={`absolute right-3 top-3 flex items-center gap-2 rounded-[10px] px-3 py-1 shadow-sm bg-[#E82323]/20 text-[#E82323]`}>
                                    <div className={`h-3 w-3 rounded-full bg-[#E82323]`} />
                                    <span className={`font-sans text-[10px] font-medium text-[#E82323]`}>
                                        Not Available
                                    </span>
                                </div>

                                {/* Title */}
                                <div className='flex items-start mb-1'>
                                    <p className="xs:text-sm text-2xl font-bold pl-8 pt-4  sm:pt-1 capitalize text-[#141619] dark:text-white sm:text-lg md:text-3xl lg:text-[#30px] md:w-[600px] max-w-none sm:pl-16 sm:text-[30px] lg:mt-1">
                                        Pembukaan PKM TI
                                    </p>
                                </div>
                                {/* Date */}
                                <div className="flex items-center px-6 pt-2 sm:pl-16">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 1C7.43506 1 7.13301 1.15145 6.91031 1.42103C6.68761 1.69062 6.5625 2.05625 6.5625 2.4375V3.875H5.375C4.74511 3.875 4.14102 4.1779 3.69562 4.71707C3.25022 5.25624 3 5.9875 3 6.75V21.125C3 21.8875 3.25022 22.6188 3.69562 23.1579C4.14102 23.6971 4.74511 24 5.375 24H19.625C20.2549 24 20.859 23.6971 21.3044 23.1579C21.7498 22.6188 22 21.8875 22 21.125V6.75C22 5.9875 21.7498 5.25624 21.3044 4.71707C20.859 4.1779 20.2549 3.875 19.625 3.875H18.4375V2.4375C18.4375 2.05625 18.3124 1.69062 18.0897 1.42103C17.867 1.15145 17.5649 1 17.25 1C16.9351 1 16.633 1.15145 16.4103 1.42103C16.1876 1.69062 16.0625 2.05625 16.0625 2.4375V3.875H8.9375V2.4375C8.9375 2.05625 8.81239 1.69062 8.58969 1.42103C8.36699 1.15145 8.06494 1 7.75 1ZM7.75 8.1875C7.43506 8.1875 7.13301 8.33895 6.91031 8.60853C6.68761 8.87812 6.5625 9.24375 6.5625 9.625C6.5625 10.0062 6.68761 10.3719 6.91031 10.6415C7.13301 10.911 7.43506 11.0625 7.75 11.0625H17.25C17.5649 11.0625 17.867 10.911 18.0897 10.6415C18.3124 10.3719 18.4375 10.0062 18.4375 9.625C18.4375 9.24375 18.3124 8.87812 18.0897 8.60853C17.867 8.33895 17.5649 8.1875 17.25 8.1875H7.75Z" fill="#979797"/>
                                    </svg>
                                    <p className="text-[16px] leading-[24px] font-normal text-[#979797] px-2">
                                        23 Agustus 2025
                                    </p>
                                </div>
                                <div className="flex items-center px-6 pt-2 sm:pl-16">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-6 sm:h-6">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.78266 3.91169C7.56423 2.04737 9.98057 1 12.5001 1C15.0196 1 17.436 2.04737 19.2175 3.91169C20.9991 5.77601 22 8.30457 22 10.9411C22 13.5777 20.9991 16.1062 19.2175 17.9706L12.5001 25L5.78266 17.9706C4.90045 17.0475 4.20064 15.9516 3.72319 14.7455C3.24574 13.5394 3 12.2466 3 10.9411C3 9.63562 3.24574 8.3429 3.72319 7.13678C4.20064 5.93066 4.90045 4.83477 5.78266 3.91169ZM12.5001 13.7813C13.2199 13.7813 13.9103 13.4821 14.4193 12.9494C14.9283 12.4168 15.2142 11.6944 15.2142 10.9411C15.2142 10.1879 14.9283 9.46545 14.4193 8.93282C13.9103 8.40018 13.2199 8.10095 12.5001 8.10095C11.7803 8.10095 11.0899 8.40018 10.5809 8.93282C10.0719 9.46545 9.78598 10.1879 9.78598 10.9411C9.78598 11.6944 10.0719 12.4168 10.5809 12.9494C11.0899 13.4821 11.7803 13.7813 12.5001 13.7813Z" fill="#979797"/>
                                    </svg>
                                    <p className="text-[16px] font-normal text-[#979797] px-2">
                                        Gedung Teknologi Informasi Fakultas Teknik Universitas Udayana
                                    </p>
                                </div>
                                    
                            </div>

                            {/* Icon lingkaran */}
                            <div className="absolute -top-8 -left-6 rounded-[500px] bg-[#285B70] p-4 sm:-left-10 sm:top-8 z-10 ">
                                <div className="absolute inset-0 z-0 h-full w-full animate-ping rounded-full bg-[#285B70]"></div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="39"
                                    height="39"
                                    viewBox="0 0 39 39"
                                    fill="none"
                                    x="26.5"
                                    y="26.5"
                                >
                                    <path
                                        d="M6.09375 36.5625C5.77052 36.5625 5.46052 36.4341 5.23196 36.2055C5.0034 35.977 4.875 35.667 4.875 35.3438V5.18959C4.87509 4.87026 4.95882 4.55653 5.11785 4.27963C5.27688 4.00272 5.50567 3.7723 5.78145 3.61131C6.70313 3.07582 8.5602 2.4375 12.1875 2.4375C15.0219 2.4375 18.1921 3.55799 20.9892 4.54594C23.2416 5.34193 25.369 6.09375 26.8125 6.09375C28.6707 6.08805 30.5091 5.71259 32.2207 4.98926C32.4291 4.90128 32.6561 4.86624 32.8814 4.88727C33.1066 4.9083 33.3232 4.98474 33.5117 5.10978C33.7003 5.23482 33.8549 5.40458 33.9619 5.60391C34.0689 5.80324 34.125 6.02595 34.125 6.25219V22.9613C34.1247 23.2574 34.0381 23.5471 33.8757 23.7948C33.7134 24.0425 33.4824 24.2375 33.2109 24.356C32.5475 24.6462 30.1252 25.5938 26.8125 25.5938C24.9737 25.5938 22.6703 25.0499 20.232 24.4733C17.4913 23.8258 14.6578 23.1562 12.1875 23.1562C9.37904 23.1562 7.94168 23.5813 7.3125 23.8502V35.3438C7.3125 35.667 7.1841 35.977 6.95554 36.2055C6.72698 36.4341 6.41698 36.5625 6.09375 36.5625Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <div className="absolute -top-7 left-0 bg-[#285B70] sm:-left-[6px] h-[290px] sm:h-[300px] w-[5px] rounded-full z-0"></div>
                        </div>
                        <div className="absolute top-24">
                            <img src="images/Logo-PKM-TI-2025.png" alt="Background Icon" className="w-[500px] opacity-30 animate-bounce-custom" />
                        </div>
                        <div
                            className="relative z-10 flex w-full max-w-[900px] items-center "
                        >
                            <div className="font-sans relative h-max flex-1 flex-shrink-0 rounded-[20px] shadow-xl border border-[#E8E8E8] bg-white py-4 dark:bg-[#285B70]">
                                {/* Status Label */}
                                <div className={`absolute right-3 top-3 flex items-center gap-2 rounded-[10px] px-3 py-1 shadow-sm bg-[#E82323]/20 text-[#E82323]`}>
                                    <div className={`h-3 w-3 rounded-full bg-[#E82323]`} />
                                    <span className={`font-sans text-[10px] font-medium text-[#E82323]`}>
                                        Not Available
                                    </span>
                                </div>

                                {/* Title */}
                                <div className='flex items-start mb-1'>
                                    <p className="xs:text-sm text-2xl font-bold pl-8 pt-4  sm:pt-1 capitalize text-[#141619] dark:text-white sm:text-lg md:text-3xl lg:text-[#30px] md:w-[600px] max-w-none sm:pl-16 sm:text-[30px] lg:mt-1">
                                        Pembukaan PKM TI
                                    </p>
                                </div>
                                {/* Date */}
                                <div className="flex items-center px-6 pt-2 sm:pl-16">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 1C7.43506 1 7.13301 1.15145 6.91031 1.42103C6.68761 1.69062 6.5625 2.05625 6.5625 2.4375V3.875H5.375C4.74511 3.875 4.14102 4.1779 3.69562 4.71707C3.25022 5.25624 3 5.9875 3 6.75V21.125C3 21.8875 3.25022 22.6188 3.69562 23.1579C4.14102 23.6971 4.74511 24 5.375 24H19.625C20.2549 24 20.859 23.6971 21.3044 23.1579C21.7498 22.6188 22 21.8875 22 21.125V6.75C22 5.9875 21.7498 5.25624 21.3044 4.71707C20.859 4.1779 20.2549 3.875 19.625 3.875H18.4375V2.4375C18.4375 2.05625 18.3124 1.69062 18.0897 1.42103C17.867 1.15145 17.5649 1 17.25 1C16.9351 1 16.633 1.15145 16.4103 1.42103C16.1876 1.69062 16.0625 2.05625 16.0625 2.4375V3.875H8.9375V2.4375C8.9375 2.05625 8.81239 1.69062 8.58969 1.42103C8.36699 1.15145 8.06494 1 7.75 1ZM7.75 8.1875C7.43506 8.1875 7.13301 8.33895 6.91031 8.60853C6.68761 8.87812 6.5625 9.24375 6.5625 9.625C6.5625 10.0062 6.68761 10.3719 6.91031 10.6415C7.13301 10.911 7.43506 11.0625 7.75 11.0625H17.25C17.5649 11.0625 17.867 10.911 18.0897 10.6415C18.3124 10.3719 18.4375 10.0062 18.4375 9.625C18.4375 9.24375 18.3124 8.87812 18.0897 8.60853C17.867 8.33895 17.5649 8.1875 17.25 8.1875H7.75Z" fill="#979797"/>
                                    </svg>
                                    <p className="text-[16px] leading-[24px] font-normal text-[#979797] px-2">
                                        23 Agustus 2025
                                    </p>
                                </div>
                                <div className="flex items-center px-6 pt-2 sm:pl-16">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-6 sm:h-6">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.78266 3.91169C7.56423 2.04737 9.98057 1 12.5001 1C15.0196 1 17.436 2.04737 19.2175 3.91169C20.9991 5.77601 22 8.30457 22 10.9411C22 13.5777 20.9991 16.1062 19.2175 17.9706L12.5001 25L5.78266 17.9706C4.90045 17.0475 4.20064 15.9516 3.72319 14.7455C3.24574 13.5394 3 12.2466 3 10.9411C3 9.63562 3.24574 8.3429 3.72319 7.13678C4.20064 5.93066 4.90045 4.83477 5.78266 3.91169ZM12.5001 13.7813C13.2199 13.7813 13.9103 13.4821 14.4193 12.9494C14.9283 12.4168 15.2142 11.6944 15.2142 10.9411C15.2142 10.1879 14.9283 9.46545 14.4193 8.93282C13.9103 8.40018 13.2199 8.10095 12.5001 8.10095C11.7803 8.10095 11.0899 8.40018 10.5809 8.93282C10.0719 9.46545 9.78598 10.1879 9.78598 10.9411C9.78598 11.6944 10.0719 12.4168 10.5809 12.9494C11.0899 13.4821 11.7803 13.7813 12.5001 13.7813Z" fill="#979797"/>
                                    </svg>
                                    <p className="text-[16px] font-normal text-[#979797] px-2">
                                        Gedung Teknologi Informasi Fakultas Teknik Universitas Udayana
                                    </p>
                                </div>
                                    
                            </div>

                            {/* Icon lingkaran */}
                            <div className="absolute -top-8 -left-6 rounded-[500px] bg-[#285B70] p-4 sm:-left-10 sm:top-8 z-10 ">
                                <div className="absolute inset-0 z-0 h-full w-full animate-ping rounded-full bg-[#285B70]"></div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="39"
                                    height="39"
                                    viewBox="0 0 39 39"
                                    fill="none"
                                    x="26.5"
                                    y="26.5"
                                >
                                    <path
                                        d="M6.09375 36.5625C5.77052 36.5625 5.46052 36.4341 5.23196 36.2055C5.0034 35.977 4.875 35.667 4.875 35.3438V5.18959C4.87509 4.87026 4.95882 4.55653 5.11785 4.27963C5.27688 4.00272 5.50567 3.7723 5.78145 3.61131C6.70313 3.07582 8.5602 2.4375 12.1875 2.4375C15.0219 2.4375 18.1921 3.55799 20.9892 4.54594C23.2416 5.34193 25.369 6.09375 26.8125 6.09375C28.6707 6.08805 30.5091 5.71259 32.2207 4.98926C32.4291 4.90128 32.6561 4.86624 32.8814 4.88727C33.1066 4.9083 33.3232 4.98474 33.5117 5.10978C33.7003 5.23482 33.8549 5.40458 33.9619 5.60391C34.0689 5.80324 34.125 6.02595 34.125 6.25219V22.9613C34.1247 23.2574 34.0381 23.5471 33.8757 23.7948C33.7134 24.0425 33.4824 24.2375 33.2109 24.356C32.5475 24.6462 30.1252 25.5938 26.8125 25.5938C24.9737 25.5938 22.6703 25.0499 20.232 24.4733C17.4913 23.8258 14.6578 23.1562 12.1875 23.1562C9.37904 23.1562 7.94168 23.5813 7.3125 23.8502V35.3438C7.3125 35.667 7.1841 35.977 6.95554 36.2055C6.72698 36.4341 6.41698 36.5625 6.09375 36.5625Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <div className="absolute -top-7 left-0 bg-[#285B70] sm:-left-[6px] h-[290px] sm:h-[300px] w-[5px] rounded-full z-0"></div>
                        </div>
                         <div className="absolute -right-[200px] bottom-16 sm:block hidden">
                            <img src="images/asset25.png" alt="bwabwa"/>
                        </div>
                        <div
                            className="relative z-10 flex w-full max-w-[900px] items-center "
                        >
                            <div className="font-sans relative h-max flex-1 flex-shrink-0 rounded-[20px] shadow-xl border border-[#E8E8E8] bg-white py-4 dark:bg-[#285B70]">
                                {/* Status Label */}
                                <div className={`absolute right-3 top-3 flex items-center gap-2 rounded-[10px] px-3 py-1 shadow-sm bg-[#E82323]/20 text-[#E82323]`}>
                                    <div className={`h-3 w-3 rounded-full bg-[#E82323]`} />
                                    <span className={`font-sans text-[10px] font-medium text-[#E82323]`}>
                                        Not Available
                                    </span>
                                </div>

                                {/* Title */}
                                <div className='flex items-start mb-1'>
                                    <p className="xs:text-sm text-2xl font-bold pl-8 pt-4  sm:pt-1 capitalize text-[#141619] dark:text-white sm:text-lg md:text-3xl lg:text-[#30px] md:w-[600px] max-w-none sm:pl-16 sm:text-[30px] lg:mt-1">
                                        Pembukaan PKM TI
                                    </p>
                                </div>
                                {/* Date */}
                                <div className="flex items-center px-6 pt-2 sm:pl-16">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 1C7.43506 1 7.13301 1.15145 6.91031 1.42103C6.68761 1.69062 6.5625 2.05625 6.5625 2.4375V3.875H5.375C4.74511 3.875 4.14102 4.1779 3.69562 4.71707C3.25022 5.25624 3 5.9875 3 6.75V21.125C3 21.8875 3.25022 22.6188 3.69562 23.1579C4.14102 23.6971 4.74511 24 5.375 24H19.625C20.2549 24 20.859 23.6971 21.3044 23.1579C21.7498 22.6188 22 21.8875 22 21.125V6.75C22 5.9875 21.7498 5.25624 21.3044 4.71707C20.859 4.1779 20.2549 3.875 19.625 3.875H18.4375V2.4375C18.4375 2.05625 18.3124 1.69062 18.0897 1.42103C17.867 1.15145 17.5649 1 17.25 1C16.9351 1 16.633 1.15145 16.4103 1.42103C16.1876 1.69062 16.0625 2.05625 16.0625 2.4375V3.875H8.9375V2.4375C8.9375 2.05625 8.81239 1.69062 8.58969 1.42103C8.36699 1.15145 8.06494 1 7.75 1ZM7.75 8.1875C7.43506 8.1875 7.13301 8.33895 6.91031 8.60853C6.68761 8.87812 6.5625 9.24375 6.5625 9.625C6.5625 10.0062 6.68761 10.3719 6.91031 10.6415C7.13301 10.911 7.43506 11.0625 7.75 11.0625H17.25C17.5649 11.0625 17.867 10.911 18.0897 10.6415C18.3124 10.3719 18.4375 10.0062 18.4375 9.625C18.4375 9.24375 18.3124 8.87812 18.0897 8.60853C17.867 8.33895 17.5649 8.1875 17.25 8.1875H7.75Z" fill="#979797"/>
                                    </svg>
                                    <p className="text-[16px] leading-[24px] font-normal text-[#979797] px-2">
                                        23 Agustus 2025
                                    </p>
                                </div>
                                <div className="flex items-center px-6 pt-2 sm:pl-16">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-6 sm:h-6">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.78266 3.91169C7.56423 2.04737 9.98057 1 12.5001 1C15.0196 1 17.436 2.04737 19.2175 3.91169C20.9991 5.77601 22 8.30457 22 10.9411C22 13.5777 20.9991 16.1062 19.2175 17.9706L12.5001 25L5.78266 17.9706C4.90045 17.0475 4.20064 15.9516 3.72319 14.7455C3.24574 13.5394 3 12.2466 3 10.9411C3 9.63562 3.24574 8.3429 3.72319 7.13678C4.20064 5.93066 4.90045 4.83477 5.78266 3.91169ZM12.5001 13.7813C13.2199 13.7813 13.9103 13.4821 14.4193 12.9494C14.9283 12.4168 15.2142 11.6944 15.2142 10.9411C15.2142 10.1879 14.9283 9.46545 14.4193 8.93282C13.9103 8.40018 13.2199 8.10095 12.5001 8.10095C11.7803 8.10095 11.0899 8.40018 10.5809 8.93282C10.0719 9.46545 9.78598 10.1879 9.78598 10.9411C9.78598 11.6944 10.0719 12.4168 10.5809 12.9494C11.0899 13.4821 11.7803 13.7813 12.5001 13.7813Z" fill="#979797"/>
                                    </svg>
                                    <p className="text-[16px] font-normal text-[#979797] px-2">
                                        Gedung Teknologi Informasi Fakultas Teknik Universitas Udayana
                                    </p>
                                </div>
                                    
                            </div>

                            {/* Icon lingkaran */}
                            <div className="absolute -top-8 -left-6 rounded-[500px] bg-[#285B70] p-4 sm:-left-10 sm:top-8 z-10 ">
                                <div className="absolute inset-0 z-0 h-full w-full animate-ping rounded-full bg-[#285B70]"></div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="39"
                                    height="39"
                                    viewBox="0 0 39 39"
                                    fill="none"
                                    x="26.5"
                                    y="26.5"
                                >
                                    <path
                                        d="M6.09375 36.5625C5.77052 36.5625 5.46052 36.4341 5.23196 36.2055C5.0034 35.977 4.875 35.667 4.875 35.3438V5.18959C4.87509 4.87026 4.95882 4.55653 5.11785 4.27963C5.27688 4.00272 5.50567 3.7723 5.78145 3.61131C6.70313 3.07582 8.5602 2.4375 12.1875 2.4375C15.0219 2.4375 18.1921 3.55799 20.9892 4.54594C23.2416 5.34193 25.369 6.09375 26.8125 6.09375C28.6707 6.08805 30.5091 5.71259 32.2207 4.98926C32.4291 4.90128 32.6561 4.86624 32.8814 4.88727C33.1066 4.9083 33.3232 4.98474 33.5117 5.10978C33.7003 5.23482 33.8549 5.40458 33.9619 5.60391C34.0689 5.80324 34.125 6.02595 34.125 6.25219V22.9613C34.1247 23.2574 34.0381 23.5471 33.8757 23.7948C33.7134 24.0425 33.4824 24.2375 33.2109 24.356C32.5475 24.6462 30.1252 25.5938 26.8125 25.5938C24.9737 25.5938 22.6703 25.0499 20.232 24.4733C17.4913 23.8258 14.6578 23.1562 12.1875 23.1562C9.37904 23.1562 7.94168 23.5813 7.3125 23.8502V35.3438C7.3125 35.667 7.1841 35.977 6.95554 36.2055C6.72698 36.4341 6.41698 36.5625 6.09375 36.5625Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <div className="absolute -top-7 left-0 bg-[#285B70] sm:-left-[6px] h-[290px] sm:h-[300px] w-[5px] rounded-full z-0"></div>
                        </div>
                        <div
                            className="relative z-10 flex w-full max-w-[900px] items-center "
                        >
                            <div className="font-sans relative h-max flex-1 flex-shrink-0 rounded-[20px] shadow-xl border border-[#E8E8E8] bg-white py-4 dark:bg-[#285B70]">
                                {/* Status Label */}
                                <div className={`absolute right-3 top-3 flex items-center gap-2 rounded-[10px] px-3 py-1 shadow-sm bg-[#E82323]/20 text-[#E82323]`}>
                                    <div className={`h-3 w-3 rounded-full bg-[#E82323]`} />
                                    <span className={`font-sans text-[10px] font-medium text-[#E82323]`}>
                                        Not Available
                                    </span>
                                </div>

                                {/* Title */}
                                <div className='flex items-start mb-1'>
                                    <p className="xs:text-sm text-2xl font-bold pl-8 pt-4  sm:pt-1 capitalize text-[#141619] dark:text-white sm:text-lg md:text-3xl lg:text-[#30px] md:w-[600px] max-w-none sm:pl-16 sm:text-[30px] lg:mt-1">
                                        Pembukaan PKM TI
                                    </p>
                                </div>
                                {/* Date */}
                                <div className="flex items-center px-6 pt-2 sm:pl-16">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 1C7.43506 1 7.13301 1.15145 6.91031 1.42103C6.68761 1.69062 6.5625 2.05625 6.5625 2.4375V3.875H5.375C4.74511 3.875 4.14102 4.1779 3.69562 4.71707C3.25022 5.25624 3 5.9875 3 6.75V21.125C3 21.8875 3.25022 22.6188 3.69562 23.1579C4.14102 23.6971 4.74511 24 5.375 24H19.625C20.2549 24 20.859 23.6971 21.3044 23.1579C21.7498 22.6188 22 21.8875 22 21.125V6.75C22 5.9875 21.7498 5.25624 21.3044 4.71707C20.859 4.1779 20.2549 3.875 19.625 3.875H18.4375V2.4375C18.4375 2.05625 18.3124 1.69062 18.0897 1.42103C17.867 1.15145 17.5649 1 17.25 1C16.9351 1 16.633 1.15145 16.4103 1.42103C16.1876 1.69062 16.0625 2.05625 16.0625 2.4375V3.875H8.9375V2.4375C8.9375 2.05625 8.81239 1.69062 8.58969 1.42103C8.36699 1.15145 8.06494 1 7.75 1ZM7.75 8.1875C7.43506 8.1875 7.13301 8.33895 6.91031 8.60853C6.68761 8.87812 6.5625 9.24375 6.5625 9.625C6.5625 10.0062 6.68761 10.3719 6.91031 10.6415C7.13301 10.911 7.43506 11.0625 7.75 11.0625H17.25C17.5649 11.0625 17.867 10.911 18.0897 10.6415C18.3124 10.3719 18.4375 10.0062 18.4375 9.625C18.4375 9.24375 18.3124 8.87812 18.0897 8.60853C17.867 8.33895 17.5649 8.1875 17.25 8.1875H7.75Z" fill="#979797"/>
                                    </svg>
                                    <p className="text-[16px] leading-[24px] font-normal text-[#979797] px-2">
                                        23 Agustus 2025
                                    </p>
                                </div>
                                <div className="flex items-center px-6 pt-2 sm:pl-16">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-6 sm:h-6">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.78266 3.91169C7.56423 2.04737 9.98057 1 12.5001 1C15.0196 1 17.436 2.04737 19.2175 3.91169C20.9991 5.77601 22 8.30457 22 10.9411C22 13.5777 20.9991 16.1062 19.2175 17.9706L12.5001 25L5.78266 17.9706C4.90045 17.0475 4.20064 15.9516 3.72319 14.7455C3.24574 13.5394 3 12.2466 3 10.9411C3 9.63562 3.24574 8.3429 3.72319 7.13678C4.20064 5.93066 4.90045 4.83477 5.78266 3.91169ZM12.5001 13.7813C13.2199 13.7813 13.9103 13.4821 14.4193 12.9494C14.9283 12.4168 15.2142 11.6944 15.2142 10.9411C15.2142 10.1879 14.9283 9.46545 14.4193 8.93282C13.9103 8.40018 13.2199 8.10095 12.5001 8.10095C11.7803 8.10095 11.0899 8.40018 10.5809 8.93282C10.0719 9.46545 9.78598 10.1879 9.78598 10.9411C9.78598 11.6944 10.0719 12.4168 10.5809 12.9494C11.0899 13.4821 11.7803 13.7813 12.5001 13.7813Z" fill="#979797"/>
                                    </svg>
                                    <p className="text-[16px] font-normal text-[#979797] px-2">
                                        Gedung Teknologi Informasi Fakultas Teknik Universitas Udayana
                                    </p>
                                </div>
                                    
                            </div>

                            {/* Icon lingkaran */}
                            <div className="absolute -top-8 -left-6 rounded-[500px] bg-[#285B70] p-4 sm:-left-10 sm:top-8 z-10 ">
                                <div className="absolute inset-0 z-0 h-full w-full animate-ping rounded-full bg-[#285B70]"></div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="39"
                                    height="39"
                                    viewBox="0 0 39 39"
                                    fill="none"
                                    x="26.5"
                                    y="26.5"
                                >
                                    <path
                                        d="M6.09375 36.5625C5.77052 36.5625 5.46052 36.4341 5.23196 36.2055C5.0034 35.977 4.875 35.667 4.875 35.3438V5.18959C4.87509 4.87026 4.95882 4.55653 5.11785 4.27963C5.27688 4.00272 5.50567 3.7723 5.78145 3.61131C6.70313 3.07582 8.5602 2.4375 12.1875 2.4375C15.0219 2.4375 18.1921 3.55799 20.9892 4.54594C23.2416 5.34193 25.369 6.09375 26.8125 6.09375C28.6707 6.08805 30.5091 5.71259 32.2207 4.98926C32.4291 4.90128 32.6561 4.86624 32.8814 4.88727C33.1066 4.9083 33.3232 4.98474 33.5117 5.10978C33.7003 5.23482 33.8549 5.40458 33.9619 5.60391C34.0689 5.80324 34.125 6.02595 34.125 6.25219V22.9613C34.1247 23.2574 34.0381 23.5471 33.8757 23.7948C33.7134 24.0425 33.4824 24.2375 33.2109 24.356C32.5475 24.6462 30.1252 25.5938 26.8125 25.5938C24.9737 25.5938 22.6703 25.0499 20.232 24.4733C17.4913 23.8258 14.6578 23.1562 12.1875 23.1562C9.37904 23.1562 7.94168 23.5813 7.3125 23.8502V35.3438C7.3125 35.667 7.1841 35.977 6.95554 36.2055C6.72698 36.4341 6.41698 36.5625 6.09375 36.5625Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <div className="absolute -top-7 left-0 bg-[#285B70] sm:-left-[6px] h-[250px] sm:h-[250px] w-[5px] rounded-full z-0"></div>
                            <div className="absolute -right-[400px] -bottom-[150px] sm:block hidden">
                                <img src="images/asset25.png" alt="bwabwa"/>
                            </div>
                        </div>
                    </div>
            </section>


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
                <section className="flex flex-col gap-7 justify-center items-center w-full mb-20" id="FaQ">
                    <motion.div
                        whileInView="visible"
                        variants={variantZoom}
                        initial="hidden"
                        animate={controls}
                        className="flex flex-col gap-2 justify-center items-center text-center"
                    >
                        <p className="font-bold text-[20px] tracking-[0.01em] text-[#42A1A4]">
                            Pertanyaan Umum
                        </p>
                        <h1 className="font-bold text-[50px] leading-[50px] text-[#285B70]">
                            Hal Yang Sering Ditanyakan
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
                            <img src="images/faqs-amicos.png" alt="" key={activeCategoryFaq} className="w-full md:w-[481px] md:h-[483px] h-auto animate-bounce-custom" />
                        </motion.div>
                        {activeCategoryFaq === "Guidebook" && (
                            <motion.div
                                whileInView="visible"
                                variants={variantZoom}
                                initial="hidden"
                                animate={controls}
                                className="flex flex-col gap-2 md:w-[636px] w-full dark:text-gray-400"
                            >
                                <Accordion
                                    heading="Apa itu guidebook pelatihan PKM?"
                                    description=""
                                    isOpen={openIndex === 0}
                                    onClick={() => handleAccordionClick(0)}
                                />
                                <Accordion
                                    heading="Di mana saya bisa mendapatkan guidebook pelatihan PKM ini?"
                                    description=""
                                    isOpen={openIndex === 1}
                                    onClick={() => handleAccordionClick(1)}
                                />
                                <Accordion
                                    heading="Apakah guidebook ini wajib dibaca sebelum mengikuti pelatihan?"
                                    description=""
                                    isOpen={openIndex === 2}
                                    onClick={() => handleAccordionClick(2)}
                                />
                                <Accordion
                                    heading="Bagaimana jika ada bagian dari guidebook yang kurang saya pahami?"
                                    description=""
                                    isOpen={openIndex === 3}
                                    onClick={() => handleAccordionClick(3)}
                                />

                            </motion.div>
                        )}
                        {activeCategoryFaq === "Hari H PKM" && (
                            <motion.div
                                whileInView="visible"
                                variants={variantZoom}
                                initial="hidden"
                                animate={controls}
                                className="flex flex-col gap-2 md:w-[636px] w-full dark:text-gray-400"
                            >
                                <Accordion
                                    heading="Apakah ada pembimbing yang akan memberikan masukan terhadap ide dan judul yang diajukan?"
                                    description=""
                                    isOpen={openIndex === 0}
                                    onClick={() => handleAccordionClick(0)}
                                />
                                <Accordion
                                    heading="Bagaimana cara mendaftarkan ide atau judul untuk sesi bedah ide?"
                                    description=""
                                    isOpen={openIndex === 1}
                                    onClick={() => handleAccordionClick(1)}
                                />
                                <Accordion
                                    heading="Kapan dan di mana pelatihan PKM akan dilaksanakan?"
                                    description=""
                                    isOpen={openIndex === 2}
                                    onClick={() => handleAccordionClick(2)}
                                />
                                <Accordion
                                    heading="Apa saja yang akan dibahas dalam pelatihan PKM ini?"
                                    description=""
                                    isOpen={openIndex === 3}
                                    onClick={() => handleAccordionClick(3)}
                                />

                            </motion.div>
                        )}
                        {activeCategoryFaq === "Klinik PKM" && (
                            <motion.div
                                className="flex flex-col gap-2 md:w-[636px] w-full dark:text-gray-400"
                                whileInView="visible"
                                variants={variantZoom}
                                initial="hidden"
                                animate={controls}
                            >

                                <Accordion
                                    heading="Apa itu Klinik PKM dan bagaimana cara mengikutinya?"
                                    description=""
                                    isOpen={openIndex === 0}
                                    onClick={() => handleAccordionClick(0)}
                                />
                                <Accordion
                                    heading="Apa saja yang bisa saya konsultasikan dalam Klinik PKM?"
                                    description=""
                                    isOpen={openIndex === 1}
                                    onClick={() => handleAccordionClick(1)}
                                />
                                <Accordion
                                    heading="Apakah Klinik PKM hanya untuk peserta yang sudah memiliki proposal?"
                                    description=""
                                    isOpen={openIndex === 2}
                                    onClick={() => handleAccordionClick(2)}
                                />
                                <Accordion
                                    heading="Siapa saja yang akan membimbing peserta dalam Klinik PKM?"
                                    description=""
                                    isOpen={openIndex === 3}
                                    onClick={() => handleAccordionClick(3)}
                                />

                            </motion.div>
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
                        <p className="w-4/5 text-base text-center dark:text-gray-400">
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
                        <div className="flex flex-col gap-2 bg-[#285B70] py-4 pl-4 pr-24 rounded-b-2xl border-t-2 border-[#285B70] bg-opacity-20 dark:text-gray-400">
                            <h1 className="font-bold text-xl">Tiksna Apsari</h1>
                            <div className="flex flex-row justify-start gap-4">
                                <IconLine />
                                <a href="https://line.me/R/ti/p/~tiksnaapsr." className="text-base text-[#2A3374] dark:text-white">tiksnaapsr.</a>
                            </div>
                            <div className="flex flex-row justify-start gap-4">
                                <IconWhatsapp />
                                <a href="wa.me/6285739490558" className="text-base text-[#2A3374] dark:text-white">+62 857-3949-0558</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-[#42A1A4] py-4 pl-4 pr-24 rounded-b-2xl border-t-2 border-[#42A1A4] bg-opacity-20 dark:text-gray-400">
                            <h1 className="font-bold text-xl">Dewa Ayu</h1>
                            <div className="flex flex-row justify-start gap-4">
                                <IconLine />
                                <a href="https://line.me/R/ti/p/~dewayu1275" className="text-base text-[#2A3374] dark:text-white">dewayu1275</a>
                            </div>
                            <div className="flex flex-row justify-start gap-4">
                                <IconWhatsapp />
                                <a href="wa.me/6285940899163" className="text-base text-[#2A3374] dark:text-white">+62 859-4089-9163</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 bg-[#285B70] py-4 pl-4 pr-24 rounded-b-2xl border-t-2 border-[#285B70] bg-opacity-20 dark:text-gray-400">
                            <h1 className="font-bold text-xl">Putu Rifki</h1>
                            <div className="flex flex-row justify-start gap-4">
                                <IconLine />
                                <a href="https://line.me/R/ti/p/~puturifki56" className="text-base text-[#2A3374] dark:text-white">puturifki56</a>
                            </div>
                            <div className="flex flex-row justify-start gap-4">
                                <IconWhatsapp />
                                <a href="wa.me/62881038194017" className="text-base text-[#2A3374] dark:text-white">+62 881-0381-94017</a>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView="visible"
                        variants={variantZoom}
                        initial="hidden"
                        animate={controls}
                    >
                        <img src="images/contact-amicos.png" alt="KONTAK-KAMI" className="md:w-[584px] w-full md:h-[540px] h-auto my-2 animate-bounce-custom" />
                    </motion.div>
                </section>
                {/* End Kontak Kami */}
                <ScrollToTop />
            </main>

            {/* Start Footer */}
            <footer className="footer p-12 bg-base-200 text-base-content grid-flow-row sm:grid-cols-2 md:grid-cols-6 gap-x-20 dark:bg-[#191e24]">
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
            <footer className="py-5 px-12 bg-base-300 text-slate-600 dark:bg-[#15191e] dark:text-gray-400 text-center">
                <p>© 2025 PKM TI Udayana </p>
            </footer>
            {/* End Footer */}

        </>
    );
}
