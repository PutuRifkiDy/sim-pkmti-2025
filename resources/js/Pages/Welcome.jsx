import { Head, Link } from "@inertiajs/react";
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
import { IconTextHomePage, IconViewDemo, IconTextTopics, IconLine, IconWhatsapp, IconFaq, IconContact } from "@/Components/IconLanding";
import * as AOS from 'aos';
import 'aos/dist/aos.css';

export default function Welcome({ auth }) {
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
        setOpenIndex(openIndex == index ? null : index);
    };

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: 'ease-out-cubic',
            offset: 100,
            delay: 0,
            mirror: false,
            anchorPlacement: 'top-bottom',
        });

        setTimeout(() => {
            AOS.refreshHard();
        }, 500);
    }, []);

    const timeline = [
        {
            "event_title": "Pendaftaran Pembukaan & Sharing Session",
            "event_date": "15 Agustus 2025 – 21 Agustus 2025",
            "place": "Online",
        },
        {
            "event_title": "Pembukaan dan Sharing Session",
            "event_date": "23 Agustus 2025",
            "place": "Online",
        },
        {
            "event_title": "Pendaftaran Tim",
            "event_date": "01 September 2025 – 10 September 2025",
            "place": "Online",
        },
        {
            "event_title": "Pengumpulan Judul Final",
            "event_date": "18 September 2025 – 23 September 2025",
            "place": "Online"
        },
        {
            "event_title": "Pengumuman Tim & Penugasan",
            "event_date": "26 September 2025 – 28 September 2025",
            "place": "Online"
        },
        {
            "event_title": "Pengumpulan Draft Proposal",
            "event_date": "27 Oktober 2025 – 02 November 2025",
            "place": "Online"
        },
        {
            "event_title": "Klinik",
            "event_date": "22 November 2025",
            "place": "Online"
        },
        {
            "event_title": "Pengumpulan Proposal Final",
            "event_date": "24 November 2025 – 30 November 2025",
            "place": "Online"
        },
        {
            "event_title": "Pembentukan Tim oleh Angkatan 23 dan 24 & Pengumpulan Proposal ke Universitas",
            "event_date": "13 Desember 2025 – 19 Desember 2025",
            "place": "Online"
        }
    ]

    const [showAll, setShowAll] = useState(false);

    const displayedEvents = showAll ? timeline : timeline.slice(0, 5);


    const topics = [
        {
            title: "PKM-KC",
            links: "https://drive.google.com/file/d/1mlsmp5160FzV6ZzLpFbSitDcfCPW7Wks/view?usp=sharing",
            description:
                "Program Kreativitas Mahasiswa-Karsa Cipta (PKM-KC) merupakan program penciptaan yang didasari atas karsa dan nalar mahasiswa, bersifat konstruktif serta menghasilkan suatu sistem...",
        },
        {
            title: "PKM-K",
            links: "https://drive.google.com/file/d/1tPbmUJ7Pxd0XDRCzuxEGvmB1cDPdNnmw/view?usp=sharing",
            description:
                "Program Kreativitas Mahasiswa Kewirausahaan (PKM-K) merupakan program kreativitas mahasiswa dalam menciptakan aktivitas usaha. Dalam PKM-K, tim mahasiswa berlatih membuat...",
        },
        {
            title: "PKM-PM",
            links: "https://drive.google.com/file/d/1CnEBlY1elzF2ZmhUnlB-TR6GwL-oJcH-/view?usp=sharing",
            description:
                "PKM-PM adalah program penerapan ilmu pengetahuan, teknologi dan seni yang berorientasi non profit dalam upaya untuk membantu mengatasi permasalahan kemiskinan...",
        },
        {
            title: "PKM-PI",
            links: "https://drive.google.com/file/d/1nJ-RXt7GS28iCAsjHzkUeCKXctAzf466/view?usp=sharing",
            description:
                "Program Kreativitas Mahasiswa Penerapan-IPTEK (PKM-PI) termasuk ke dalam salah satu kelompok PKM 5 bidang yang menerapkan ilmu pengetahuan dan teknologi untuk menjadi...",
        },
        {
            title: "PKM-GFT",
            links: "https://drive.google.com/file/d/1WhCqa9FNejG7wL5TceXQbLDhCIHytbFP/view?usp=sharing",
            description:
                "PKM Gagasan Futuristik Tertulis (PKM-GFT) merupakan gagasan kreatif yang futuristik sebagai respons intelektual atas persoalan aktual yang dihadapi bangsa. Gagasan tersebut tidak terkait...",
        },
        {
            title: "PKM-VGK",
            links: "https://drive.google.com/file/d/1GlSGwYLzaqKbeGzArmx_i9cD5dRdhoBa/view?usp=sharing",
            description:
                "PKM Video Gagasan Konstruktif (PKM-VGK) merupakan program yang mendorong mahasiswa untuk menyampaikan solusi terhadap permasalahan nyata di masyarakat dalam bentuk video kreatif. Melalui pendekatan visual...",
        }

    ];

    return (
        <>
            <Head title="Welcome" />

            {/* Start Navbar */}
            <NavBar auth={auth} />
            {/* End Navbar */}
            <img
                src="images/elements/element_banner_home_section.png"
                alt="banner"
                className="absolute z-0 w-screen object-center rounded-none h-[800px] object-cover hidden md:block top-0 dark:hidden opacity-50"
            />
            {/* Start HomePage */}
            <section className="md:px-12 px-2 light:bg-[#F7F7F7] dark:bg-[#1d232a] flex md:flex-row flex-col-reverse max-w-full justify-between md:pb-60 pb-24 pt-36">

                {/* Home Page Bagian Kiri */}
                <div
                    className="flex flex-col gap-7 justify-center items-start w-full relative"
                >
                    <div className="absolute left-0 -bottom-48 sm:block hidden scale-x-[-1] w-24" data-aos="zoom-in" data-aos-delay="600">
                        <img src="images/asset25.png" alt="bwabwa" />
                    </div>
                    <div className="relative md:w-[581px] max-w-full md:h-[210px] h-auto text-center md:text-start">
                        <p className="font-bold md:text-[64px] text-[36px] text-[#111E41] dark:text-[#42A1A4] leading-[1.1em] z-20" data-aos="fade-up" data-aos-delay="100">Sistem Informasi Pelatihan PKM TI Udayana</p>
                    </div>
                    <div>
                        <p className="text-[18px] leading-[1.6em] light:text-[#0F172A] md:w-[581px] max-w-full font-normal text-center md:text-start dark:text-gray-400 z-50" data-aos="fade-up" data-aos-delay="200">
                            Pelatihan PKM TI 2025 merupakan bagian dari program kerja Himpunan Mahasiswa Teknologi Informasi Universitas Udayana periode 2025, yang bertujuan membimbing mahasiswa dalam merancang Program Kreativitas Mahasiswa (PKM) yang inovatif dan kreatif di bidang Teknologi Informasi.
                        </p>
                    </div>
                    <div className="flex md:flex-row flex-col md:gap-5 gap-1 md:justify-start justify-center md:w-[581px] w-full" data-aos="fade-up" data-aos-delay="400">

                        {/* <Link
                            as="button"
                            href={route("register")}
                            className="font-bold bg-[#42A1A4] px-12 py-3 rounded-md text-white hover:text-white hover:bg-[#59DFD1] dark:hover:text-white transition-all duration-300 shadow-[0_0_10px_#42A1A4] z-50"
                        >
                            Sign Up Now
                        </Link> */}
                        {/* <a href="" className="font-bold bg-[#42A1A4] px-12 py-3 rounded-md text-white hover:text-white hover:bg-[#59DFD1] dark:hover:text-white transition-all duration-300 shadow-[0_0_10px_#42A1A4] z-50">
                            Guidebook
                        </a> */}
                        <details className="dropdown">
                            <summary className="btn font-bold bg-[#42A1A4] px-12 py-3 rounded-md text-white hover:text-white hover:bg-[#59DFD1] dark:hover:text-white transition-all duration-300 shadow-[0_0_10px_#42A1A4] z-50 border-none text-[18px]">
                                Guidebook
                            </summary>
                            <ul className="menu dropdown-content bg-base-100 rounded-md z-1 w-max p-2 shadow-sm">
                                <li>
                                    <a href="https://docs.google.com/document/d/1IiPt4fwXxcEtM3zykOxGxDptC3VsGJLM/edit?usp=sharing&ouid=112988973086027762490&rtpof=true&sd=true" className="font-medium" target="_blank">
                                        Guidebook Angkatan 24
                                    </a>
                                </li>
                                <li>
                                    <a href="https://docs.google.com/document/d/1OidG8QoRDvZLOK9x5JKFvxxbAtQt7Qi3/edit?usp=sharing&ouid=112988973086027762490&rtpof=true&sd=true" className="font-medium" target="_blank">
                                        Guidebook Angkatan 23, 22, 21
                                    </a>
                                </li>
                            </ul>
                        </details>
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="font-bold border-[1px] border-slate-300 px-6 py-2 rounded-md text-[#59DFD1] hover:text-white hover:bg-[#42A1A4] dark:text-gray-400 dark:hover:text-white transition-all duration-300 flex flex-row gap-2 justify-center items-center hover:shadow-[0_0_10px_#42A1A4] z-50 text-[18px]" onClick={() => document.getElementById('my_modal_3').showModal()}>View Demo</button>
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


                    </div>
                </div>

                <div className="w-full flex justify-center md:pb-0 pb-64">
                    <div className="relative">
                        <div className="absolute right-28 -top-4 sm:block hidden w-32" data-aos="zoom-in" data-aos-delay="600">
                            <img src="images/asset28.png" alt="bwabwa" />
                        </div>
                        {/* Home Page Bagian Kanan */}
                        <div className="md:w-[270px] w-[200px] md:h-[340px] h-auto absolute md:-right-80 top-0 ">
                            <img src="/images/elements/element_home_section_1.png" alt="" className=" " />
                        </div>
                        <div className="md:w-[270px] w-[200px] md:h-[340px] h-auto absolute md:-left-52 -left-44 md:-bottom-12">
                            <img src="/images/elements/element_home_section_2.png" className="" alt="" />
                        </div>

                        <div className="md:w-[247.18px] w-[150px] md:h-[178.26px] h-auto absolute md:top-8 top-0 md:-left-56 -left-40" data-aos="fade-up" data-aos-delay="100">
                            <img src="/images/elements/element_home_section_3.png" className="" alt="" />
                        </div>

                        <div className="md:w-[332.31px] w-[200px] md:h-[239.94px] h-auto absolute md:left-0 -left-5 md:top-8 top-0 z-20" data-aos="zoom-in" data-aos-delay="300">
                            <img src="/images/elements/element_home_section_4.png" className="" alt="" />
                        </div>

                        <div className="md:w-[332.31px] w-[200px] md:h-[239.94px] h-auto absolute md:-right-24 -right-8 md:top-48 top-24 z-0" data-aos="zoom-in" data-aos-delay="300">
                            <img src="/images/elements/element_home_section_5.png" className="" alt="" />
                        </div>
                        <div className="md:w-[247.18px] w-[150px] md:h-[178.26px] h-auto absolute md:-right-80 -right-40 md:-bottom-4 top-36 md:top-64 z-10" data-aos="fade-up" data-aos-delay="200">
                            <img src="/images/elements/element_home_section_6.png" className="" alt="" />
                        </div>
                        <div className="absolute left-36 -bottom-[90px] sm:block hidden w-32 z-0" data-aos="zoom-in" data-aos-delay="600">
                            <img src="images/asset25.png" alt="bwabwa" />
                        </div>
                    </div>
                </div>
            </section>

            {/* End HomePage */}

            {/* Start Tentang PKM-TI */}
            <section className="light:bg-[#F7F7F7] dark:bg-[#1d232a] flex md:flex-row flex-col max-w-full justify-around relative overflow-hidden" id="about-us">
                <img src="images/elements/element_about_section_2.png" alt="" className="absolute bottom-0 left-0 md:w-[468px] w-[250px] h-auto md:h-[470px] z-10" />
                <img src="images/elements/element_about_section_1.png" alt="" className="absolute top-0 right-0 md:w-[468px] md:h-[470px] w-[250px] h-auto z-10" />
                <img src="images/elements/element_about_section_8.png" alt="" className="absolute object-cover opacity-40 z-0 md:block hidden dark:opacity-10" />
                <div className="relative md:w-[521px] md:h-[541px]">
                    {/* Tentang PKM Bagian kiri */}
                    {/* <img src="images/image-tentangpkmti2025.png" alt="" className="md:w-[521px] max-w-full md:h-[479px] h-auto animate-bounce-custom" /> */}
                    <img src="images/elements/element_about_section_3.png" alt="" className="absolute bottom-4 md:w-[541px] md:h-[541px] z-20" data-aos="zoom-in" data-aos-delay="100" />
                    <img src="images/elements/element_about_section_4.png" alt="" className="absolute md:w-[232px] md:h-[190px] bottom-8 right-0 z-20" data-aos="fade-up" data-aos-delay="100" />
                    <img src="images/elements/element_about_section_5.png" alt="" className="absolute md:w-[304px] md:h-[190px] bottom-8 left-0 z-20" data-aos="fade-up" data-aos-delay="200" />
                    <img src="images/elements/element_about_section_7.png" alt="" className="absolute md:w-[277px] md:h-[286px] bottom-48 left-0 z-20" data-aos="fade-up" data-aos-delay="300" />
                    <img src="images/elements/element_about_section_6.png" alt="" className="absolute md:w-[186px] md:h-[158px] bottom-[13rem] right-20 z-20" data-aos="fade-up" data-aos-delay="300" />
                </div>
                <div className=" flex flex-row justify-center items-center mb-5 mt-5">
                    <img src="images/Logo-PKM-TI-2025.svg" alt="" className="md:hidden w-[120px] h-auto top-0 z-20" data-aos="fade-up" data-aos-delay="300" />
                </div>
                <div
                    className="flex flex-col justify-center md:w-[687px] max-w-full gap-10"
                >
                    <div className="relative text-center md:text-start">
                        {/* <div className="md:absolute md:block hidden md:left-72 left-12 top-14">
                            <IconTextHomePage />
                        </div> */}
                        <p className="font-bold md:text-[56px] text-[36px] text-[#111E41] leading-[1.1em] dark:text-[#42A1A4] z-40 md:px-0 px-5" data-aos="fade-up" data-aos-delay="100">Tentang PKM TI 2025</p>
                    </div>
                    <div className="flex flex-col gap-3 text-justify md:text-start md:px-0 px-5">
                        <p className="text-[24px] leading-[1.8em] text-[#111E41] dark:text-[#42A1A4] font-bold" data-aos="fade-up" data-aos-delay="200">
                            Apa itu PKM TI 2025?
                        </p>
                        <p className="text-[17px] leading-[1.8em] text-[#111E41] dark:text-gray-400 z-50" data-aos="fade-up" data-aos-delay="300">
                            Pelatihan PKM Teknologi Informasi 2025 oleh HMTI bertujuan memberikan platform bagi mahasiswa untuk memperluas pengetahuan tentang Program Kreativitas Mahasiswa (PKM). Mengusung tema “Mengasah Kreativitas Mahasiswa untuk Menghasilkan
                            Karya Inovatif Melalui PKM” pelatihan ini diharapkan memotivasi mahasiswa Teknologi Informasi untuk mengembangkan kreativitas visioner dan mengikuti tren masa depan. Kegiatan ini juga bertujuan meningkatkan pemahaman mahasiswa terkait pengembangan judul, penyesuaian format pedoman, teknik penelitian, dan keterampilan teknis.
                        </p>
                        <a
                            href="#pkm-topik"
                            className="flex mt-4 text-[17px] text-slate-500 cursor-pointer md:mb-0 mb-24" data-aos="fade-up" data-aos-delay="400"
                        >
                            <ArrowLongDownIcon className="w-6 h-6 mr-3 animate-bounce" />
                            Jelajahi Bidang PKM TI 2025
                        </a>
                    </div>
                </div>

            </section>
            {/* End Tentang PKM-TI */}


            {/* Start Ekspolari PKM-TI */}
            <div
                className="md:px-12 px-2 light:bg-[#F7F7F7] dark:bg-[#1d232a] flex flex-col pt-36 pb-36 justify-center items-center text-white relative"
                id="pkm-topik"
            >
                <div className="absolute left-0 top-16 sm:block hidden w-34 z-0" data-aos="fade-up" data-aos-delay="400">
                    <img src="images/doubleAsset.png" alt="bwabwa" />
                </div>
                <div className="z-10">

                    <div className="flex flex-row bg-white gap-2 md:py-5 py-4 px-3 rounded-t-2xl w-full shadow-2xl border-[1px] border-slate-200">
                        <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-[#E11D48]"></div>
                        <div className="md:w-3 md:h-3 w-2 h-2 bg-[#FBBF24] rounded-full"></div>
                        <div className="md:w-3 md:h-3 w-2 h-2 bg-[#22C55E] rounded-full"></div>
                    </div>
                    <div className="flex flex-col bg-gradient-to-r from-[#285B70] via-[#42A1A4] to-[#285B70] max-w-full h-auto rounded-b-2xl shadow-2xl">
                        <div
                            className="flex flex-col relative items-center text-center m-8 md:m-16 md:gap-2 gap-1"
                        >
                            <h2 className="md:text-xl text-lg font-bold uppercase" data-aos="fade-up" data-aos-delay="100">Eksplorasi Topik PKM</h2>
                            <h1 className="font-bold md:text-[48px] text-[36px] leading-9 z-10" data-aos="fade-up" data-aos-delay="200">Kembangkan Ide Cemerlang Anda</h1>
                            {/* <div className="md:absolute md:block hidden md:left-[740px] left-12 top-20 z-0">
                                <IconTextTopics />
                            </div> */}
                            <p className="text-[16px] leading-[1.5em] font-normal md:mx-[70px] mt-2 md:mt-6" data-aos="fade-up" data-aos-delay="300">
                                PKM ini mencakup berbagai kategori, seperti PKM-Gagasan futuristik tertulis (PKM-GFT), PKM-Pengabdian kepada Masyarakat (PKM-PM), PKM-Penerapan Inovasi (PKM-PI), PKM Karsa Cipta (PKM-KC), PKM-Video Gagasan Konstruktif (PKM VGK), PKM-Kewirausahaan (PKM-K). Setiap subtopik dirancang untuk mengakomodasi beragam ide dan pendekatan sesuai minat peserta.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mx-8 mb-12">
                            {topics.map((topic, index) => (
                                <div
                                    key={index} className="flex flex-col justify-between items-center bg-white text-black m-2 px-4 py-6 rounded-lg text-center gap-2 hover:shadow-[0_0_10px_#285B70]"
                                    id="pkm-topik"
                                    data-aos="fade-up" data-aos-delay={(index + 1) * 100}
                                >
                                    <h1 className="font-semibold text-[24px] text-[#111E41] leading-[1.1em]">{topic.title}</h1>
                                    <p className="text-[17px] text-[#475569] leading-[1.4em]">{topic.description}</p>
                                    <a href={topic.links} target="_blank" className="border-[2px] w-full border-[#285B70] p-2 rounded-lg mt-1 text-[#285B70] text-[17px] leading-[24px] tracking-[0.5px] hover:bg-[#285B70] hover:text-white hover:shadow-[0_0_10px_#285B70] transition-all duration-500 ease-in-250">
                                        Selengkapnya
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Ekspolari PKM-TI */}


            {/* Start Pembicara */}
            <section className="md:px-12 px-2 light:bg-[#F7F7F7] dark:bg-[#1d232a] flex flex-col-reverse lg:flex-row items-center max-w-full gap-6">
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

                <div
                    className="flex flex-col max-w-full lg:w-1/2"
                >
                    <span className="uppercase text-[20px] font-semibold sm:text-base text-[#42A1A4] mb-1" data-aos="fade-up" data-aos-delay="100">
                        Pembicara
                    </span>
                    <h3 className="capitalize text-3xl md:text-[48px] lg:text-5xl font-bold text-[#285B70] leading-12 md:leading-16" data-aos="fade-up" data-aos-delay="200">
                        Bertemu dengan para profesional di bidangnya
                    </h3>
                    <p className="text-[18px] leading-[1.5em] font-normal light:text-[#111E41] mt-3 dark:text-gray-400" data-aos="fade-up" data-aos-delay="300">
                        Pada acara Sharing Session PKM TI 2025, kami akan menghadirkan narasumber berpengalaman yang akan membagikan pengetahuan dan pengalaman mereka.
                    </p>
                </div>
            </section>
            {/* End Pembicara */}


            <section className="md:px-12 px-2 light:bg-[#F7F7F7] dark:bg-[#1d232a] relative mx-auto pt-20 w-full flex-shrink-0 sm:px-8 pb-36">
                <div className="absolute left-0 sm:block hidden">
                    <img src="images/asset25.png" alt="bwabwa" />
                </div>
                <h1
                    className="font-sans text-center text-[47px] font-bold uppercase dark:text-white sm:text-4xl text-[#285B70]"
                    data-aos="fade-up" data-aos-delay="100"
                >
                    TIMELINE PKM TI 2025
                </h1>
                <p
                    className="mx-auto max-w-[653px] text-center font-regular text-[16px] dark:text-gray-500 text-[#5E5E5E]"
                    data-aos="fade-up" data-aos-delay="200"
                >
                    Dapatkan gambaran lengkap tentang rangkaian acara, melalui timeline di bawah ini
                </p>
                <div className="h-16" />
                <div className="relative mt-12 flex min-h-fit flex-col items-center max-w-[1200]" style={{ gap: '96px' }}>

                    {/* Timeline items */}
                    {timeline.map((event, index) => (

                        <div
                            className="relative z-10 flex w-full max-w-[900px] items-center "
                            data-aos="fade-up" data-aos-delay="100"
                        >
                            <div className="font-sans relative h-max flex-1 flex-shrink-0 rounded-[20px] shadow-xl border border-[#E8E8E8] bg-white md:px-none px-10 py-4 dark:bg-[#285B70]">
                                {/* Status Label */}
                                <div className={`absolute right-3 top-3 flex items-center gap-2 rounded-[10px] px-3 py-1 shadow-sm bg-[#23e858]/20 text-[#23e858]`}>
                                    <div className={`h-3 w-3 rounded-full bg-[#23e858]`} />
                                    <span className={`font-sans text-[10px] font-medium text-[#23e858]`}>
                                        Timeline tersedia
                                    </span>
                                </div>

                                {/* Title */}
                                <div className='flex items-start mb-1'>
                                    <p className="xs:text-sm text-2xl font-bold pl-8 pt-4  sm:pt-1 capitalize text-[#141619] dark:text-white sm:text-lg md:text-3xl lg:text-[#30px] md:w-[600px] max-w-none sm:pl-16 sm:text-[30px] lg:mt-1">
                                        {event.event_title}
                                    </p>
                                </div>
                                {/* Date */}
                                <div className="flex items-center px-6 pt-2 sm:pl-16">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-6 sm:h-6 shrink-0">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 1C7.43506 1 7.13301 1.15145 6.91031 1.42103C6.68761 1.69062 6.5625 2.05625 6.5625 2.4375V3.875H5.375C4.74511 3.875 4.14102 4.1779 3.69562 4.71707C3.25022 5.25624 3 5.9875 3 6.75V21.125C3 21.8875 3.25022 22.6188 3.69562 23.1579C4.14102 23.6971 4.74511 24 5.375 24H19.625C20.2549 24 20.859 23.6971 21.3044 23.1579C21.7498 22.6188 22 21.8875 22 21.125V6.75C22 5.9875 21.7498 5.25624 21.3044 4.71707C20.859 4.1779 20.2549 3.875 19.625 3.875H18.4375V2.4375C18.4375 2.05625 18.3124 1.69062 18.0897 1.42103C17.867 1.15145 17.5649 1 17.25 1C16.9351 1 16.633 1.15145 16.4103 1.42103C16.1876 1.69062 16.0625 2.05625 16.0625 2.4375V3.875H8.9375V2.4375C8.9375 2.05625 8.81239 1.69062 8.58969 1.42103C8.36699 1.15145 8.06494 1 7.75 1ZM7.75 8.1875C7.43506 8.1875 7.13301 8.33895 6.91031 8.60853C6.68761 8.87812 6.5625 9.24375 6.5625 9.625C6.5625 10.0062 6.68761 10.3719 6.91031 10.6415C7.13301 10.911 7.43506 11.0625 7.75 11.0625H17.25C17.5649 11.0625 17.867 10.911 18.0897 10.6415C18.3124 10.3719 18.4375 10.0062 18.4375 9.625C18.4375 9.24375 18.3124 8.87812 18.0897 8.60853C17.867 8.33895 17.5649 8.1875 17.25 8.1875H7.75Z" fill="#979797" />
                                    </svg>
                                    <p className="text-[16px] leading-[24px] font-normal text-[#979797] px-2">
                                        {event.event_date}
                                    </p>
                                </div>
                                <div className="flex items-center px-6 pt-2 sm:pl-16">
                                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-6 sm:h-6 shrink-0">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.78266 3.91169C7.56423 2.04737 9.98057 1 12.5001 1C15.0196 1 17.436 2.04737 19.2175 3.91169C20.9991 5.77601 22 8.30457 22 10.9411C22 13.5777 20.9991 16.1062 19.2175 17.9706L12.5001 25L5.78266 17.9706C4.90045 17.0475 4.20064 15.9516 3.72319 14.7455C3.24574 13.5394 3 12.2466 3 10.9411C3 9.63562 3.24574 8.3429 3.72319 7.13678C4.20064 5.93066 4.90045 4.83477 5.78266 3.91169ZM12.5001 13.7813C13.2199 13.7813 13.9103 13.4821 14.4193 12.9494C14.9283 12.4168 15.2142 11.6944 15.2142 10.9411C15.2142 10.1879 14.9283 9.46545 14.4193 8.93282C13.9103 8.40018 13.2199 8.10095 12.5001 8.10095C11.7803 8.10095 11.0899 8.40018 10.5809 8.93282C10.0719 9.46545 9.78598 10.1879 9.78598 10.9411C9.78598 11.6944 10.0719 12.4168 10.5809 12.9494C11.0899 13.4821 11.7803 13.7813 12.5001 13.7813Z" fill="#979797" />
                                    </svg>
                                    <p className="text-[16px] font-normal text-[#979797] px-2">
                                        {event.place}
                                    </p>
                                </div>

                            </div>

                            {/* Icon lingkaran */}
                            <div className="absolute -top-8 -left-2 rounded-[500px] bg-[#285B70] p-4 sm:-left-8 sm:top-8 z-10 dark:border dark:border-white">
                                <div className="absolute inset-0 z-0 h-full w-full animate-ping rounded-full bg-[#285B70] dark:border dark:border-white"></div>
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
                            <div className="absolute -top-7 left-6 bg-[#285B70] sm:-left-[6px] h-[400px] sm:h-[300px] w-[5px] rounded-full z-0"></div>
                        </div>
                    ))}

                </div>
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-0">
                    <img src="images/Logo-PKM-TI-2025.png" alt="Background Icon" className="w-[500px] opacity-30 animate-bounce-custom" />
                </div>
                <div className={`absolute right-0 -bottom-12 sm:block w-24 ${showAll ? "hidden" : "block"}`} data-aos="zoom-in" data-aos-delay="600">
                    <img src="images/asset25.png" alt="bwabwa" />
                </div>
                <div className={`absolute right-20 -bottom-0 sm:block w-24 ${showAll ? "hidden" : "block"}`} data-aos="zoom-in" data-aos-delay="600">
                    <img src="images/asset25.png" alt="bwabwa" />
                </div>
            </section>


            {/* Start News Letter */}
            <section className="md:px-12 px-2 light:bg-[#F7F7F7] dark:bg-[#1d232a] flex flex-col max-w-full py-4 sm:px-12 pb-36">
                <div className="relative z-[1] h-fit pb-28 sm:pb-40 max-w-full rounded-2xl sm:rounded-3xl overflow-hidden p-10 bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:block bg-gradient-to-r from-[#285B70] via-[#42A1A4] to-[#285B70] before:-z-[1]">
                    <img src="images/elements/element_about_section_2.png" alt="" className="absolute top-0 left-0 md:w-[468px] w-[250px] h-auto md:h-[470px] z-10 transform rotate-90" />
                    <img src="images/elements/element_about_section_1.png" alt="" className="absolute top-0 right-0 md:w-[468px] md:h-[470px] w-[250px] h-auto z-10" />
                    <div
                        className="flex flex-col justify-start items-center"
                    >
                        <div className="flex items-center space-x-2 mb-2">
                            <p className="uppercase font-bold text-sm sm:text-xl text-center text-white px-6"
                                data-aos="fade-up" data-aos-delay="100"
                            >
                                PENDAPAT MEREKA TENTANG PKM TI
                            </p>
                        </div>
                        <div className="relative flex">
                            <h2 className="capitalize text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-2 z-10"
                                data-aos="fade-up" data-aos-delay="200">
                                Jadilah Bagian Dari Mereka
                            </h2>
                            {/* <div className="md:absolute md:block hidden top-[65px] z-0">
                                <IconTextTopics />
                            </div> */}
                        </div>
                        {/* <p className="text-slate-200 text-center text-sm sm:text-base mt-6 mx-0 md:mx-12"
                            data-aos="fade-up" data-aos-delay="300">
                            Jelajahi berbagai subtopik PKM yang tersedia dan temukan bidang yang sesuai dengan minat Anda.
                        </p> */}
                    </div>
                </div>

                <div className="relative -mt-24 sm:-mt-32 z-[5] flex justify-center items-center" data-aos="zoom-in" data-aos-delay="400">
                    <CustomCarousel className="flex justify-center items-center text-center space-x-4" >
                        <div className="relative flex justify-center items-center pb-5">
                            <div className="flex flex-col items-center w-11/12 md:max-w-[50rem] p-6 bg-white backdrop-brightness-150 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="flex justify-center items-center mb-4 max-w-[12rem] max-h-[12rem] rounded-full overflow-hidden border-2 border-[#285b70]">
                                    <img
                                        src="images/foto-rifki.jpg"
                                        className="object-contain object-center bg-no-repeat hover:scale-110"
                                        alt="Bayu"
                                    />
                                </div>
                                <p className="text-center text-slate-600 mb-2">
                                    “Program Kreativitas Mahasiswa-Karsa Cipta (PKM-KC) merupakan program penciptaan yang didasari atas karsa dan nalar mahasiswa, bersifat konstruktif serta menghasilkan suatu sistem, desain, model/barang atau prototipe dan sejenisnya.“
                                </p>
                                <h3 className="capitalize text-xl text-[#285b70] font-bold mb-2">
                                    Dirkayuda
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
                                    “Banyak insight dan pandangan baru yang saya dapat berkat tips and trick dari Pelatihan PKM TI. Saya merasa lebih siap dan percaya diri untuk eksplorasi ide menjadi hasil yang inovatif.”
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
            <section className="md:px-12 px-2 light:bg-[#F7F7F7] dark:bg-[#1d232a] flex flex-col gap-7 justify-center items-center w-full pb-36 relative" id="FaQ">
                <div className="absolute right-28 -top-4 sm:block hidden w-32" data-aos="zoom-in" data-aos-delay="600">
                    <img src="images/asset28.png" alt="bwabwa" />
                </div>
                <div
                    className="flex flex-col gap-2 justify-center items-center text-center"
                >
                    <h1 className="font-bold text-[50px] leading-[50px] text-[#285B70]"
                        data-aos="fade-up" data-aos-delay="200">
                        Hal Yang Sering Ditanyakan
                    </h1>
                    <p className="font-normal text-[16px] tracking-[0.01em] text-slate-500 max-w-[653px]"
                        data-aos="fade-up" data-aos-delay="300">
                        Pertanyaan umum yang sering ditanyakan terkait PKM TI 2025. Jika masih ada yang ingin ditanyakan lebih lanjut, kalian bisa hubungi narahubung dibawah ini.
                    </p>
                </div>
                <div className="absolute left-0 top-16 sm:block hidden w-34 z-0" data-aos="fade-up" data-aos-delay="400">
                    <img src="images/doubleAsset.png" alt="bwabwa" />
                </div>
                {/* Buttons */}
                <div
                    className="flex md:flex-row flex-col justify-center items-center gap-5 w-full"
                    data-aos="fade-up" data-aos-delay="100"
                >
                    <div
                        onClick={() => setActiveCategoryFaq("Guidebook")}
                        className={`${activeCategoryFaq == "Guidebook" ? "bg-[#59DFD1] shadow-[0_0_20px_#59DFD1] text-white" : ""
                            } hover:bg-[#59DFD1] hover:shadow-[0_0_10px_#59DFD1] hover:text-white md:w-[196px] w-full md:h-[50px] h-[60px] flex justify-center items-center rounded-[50px] border-[1px] border-slate-200 text-[#42A1A4] font-bold text-[20px] transition-all duration-300 ease-in-out cursor-pointer`}
                    >
                        Guidebook
                    </div>
                    <div
                        onClick={() => setActiveCategoryFaq("Hari H PKM")}
                        className={`${activeCategoryFaq == "Hari H PKM" ? "bg-[#59DFD1] text-white shadow-[0_0_20px_#59DFD1]" : ""
                            } hover:bg-[#59DFD1] hover:shadow-[0_0_10px_#59DFD1] hover:text-white md:w-[196px] w-full md:h-[50px] h-[60px] flex justify-center items-center rounded-[50px] border-[1px] border-slate-200 text-[#42A1A4] font-bold text-[20px] transition-all duration-300 ease-in-out cursor-pointer`}
                    >
                        Hari H PKM
                    </div>
                    <div
                        onClick={() => setActiveCategoryFaq("Klinik PKM")}
                        className={`${activeCategoryFaq == "Klinik PKM" ? "bg-[#59DFD1] text-white shadow-[0_0_20px_#59DFD1]" : ""
                            } hover:bg-[#59DFD1] hover:shadow-[0_0_10px_#59DFD1] hover:text-white md:w-[196px] w-full md:h-[50px] h-[60px] flex justify-center items-center rounded-[50px] border-[1px] border-slate-200 text-[#42A1A4] font-bold text-[20px] transition-all duration-300 ease-in-out cursor-pointer`}
                    >
                        Klinik PKM
                    </div>
                </div>
                <div className="flex md:flex-row flex-col-reverse justify-evenly items-center w-full relative">
                    <div
                    >
                        <div className="w-full" data-aos="zoom-in" data-aos-delay="300">
                            <IconFaq />
                        </div>
                    </div>
                    {activeCategoryFaq == "Guidebook" && (
                        <div
                            className="flex flex-col gap-2 md:w-[636px] w-full dark:text-gray-400"

                        >
                            <Accordion
                                heading="Apa fungsi guidebook PKM TI 2025?"
                                description="Guidebook berfungsi sebagai panduan resmi yang memuat seluruh informasi penting terkait alur pelaksanaan pelatihan PKM TI 2025."
                                isOpen={openIndex == 0}
                                onClick={() => handleAccordionClick(0)}
                            />
                            <Accordion
                                heading="Bagaimana jika terdapat bagian dalam guidebook yang tidak dipahami peserta?"
                                description="Peserta dapat menanyakan langsung kepada narahubung (contact person) yang tertera pada halaman web."
                                isOpen={openIndex == 1}
                                onClick={() => handleAccordionClick(1)}
                            />
                            <Accordion
                                heading="Apakah ketentuan tim dan proposal dijelaskan di Guidebook?"
                                description="Ya, guidebook mencantumkan ketentuan terkait pembentukan tim, mekanisme pelatihan, dan struktur penyusunan proposal yang harus diikuti peserta."
                                isOpen={openIndex == 2}
                                onClick={() => handleAccordionClick(2)}
                            />
                            <Accordion
                                heading="Apakah isi guidebook mencakup contoh proposal PKM dan format proposal PKM?"
                                description="Ya, guidebook menyertakan contoh proposal serta format penulisan proposal PKM sesuai pedoman yang berlaku agar memudahkan peserta dalam penulisan."
                                isOpen={openIndex == 3}
                                onClick={() => handleAccordionClick(3)}
                            />

                        </div>
                    )}
                    {activeCategoryFaq == "Hari H PKM" && (
                        <div
                            className="flex flex-col gap-2 md:w-[636px] w-full dark:text-gray-400"

                        >
                            <Accordion
                                heading="Kapan dan di mana Hari H Pelatihan PKM TI akan dilaksanakan?"
                                description="Hari H pelatihan PKM TI akan dilaksanakan pada Sabtu, 23 Agustus 2025 melalui zoom. Informasi lengkap mengenai tanggal dan platform pelaksanaan akan diumumkan melalui media resmi panitia."
                                isOpen={openIndex == 0}
                                onClick={() => handleAccordionClick(0)}
                            />
                            <Accordion
                                heading="Apa saja topik yang akan dibahas dalam kegiatan pelatihan?"
                                description="Topik yang dibahas meliputi pengenalan PKM dan membedah judul proposal yang lolos pendanaan."
                                isOpen={openIndex == 1}
                                onClick={() => handleAccordionClick(1)}
                            />
                            <Accordion
                                heading="Apakah ada sesi tanya jawab langsung dengan pembicara pada Hari H?"
                                description="Ya, sesi tanya jawab langsung disediakan agar peserta dapat berinteraksi dan memperdalam pemahaman terhadap materi yang disampaikan oleh narasumber."
                                isOpen={openIndex == 2}
                                onClick={() => handleAccordionClick(2)}
                            />
                            <Accordion
                                heading="Bagaimana jika saya berhalangan hadir pada Hari H PKM?"
                                description="Kehadiran pada Hari H sangat dianjurkan karena berkaitan dengan absensi dan sertifikat. Peserta diperbolehkan tidak menghadiri kegiatan dengan syarat dan ketentuan berlaku."
                                isOpen={openIndex == 3}
                                onClick={() => handleAccordionClick(3)}
                            />

                        </div>
                    )}
                    {activeCategoryFaq == "Klinik PKM" && (
                        <div
                            className="flex flex-col gap-2 md:w-[636px] w-full dark:text-gray-400"
                        >
                            <Accordion
                                heading="Apakah Klinik PKM TI wajib diikuti oleh seluruh peserta pelatihan?"
                                description="Ya, seluruh peserta pelatihan PKM TI wajib mengikuti Klinik PKM TI."
                                isOpen={openIndex == 0}
                                onClick={() => handleAccordionClick(0)}
                            />
                            <Accordion
                                heading="Apakah draft proposal akan dievaluasi dalam Klinik PKM TI?"
                                description="Draft proposal akan dievaluasi pada Klinik PKM TI, selanjutnya proposal yang dievaluasi harus diperbaiki oleh tim terkait."
                                isOpen={openIndex == 1}
                                onClick={() => handleAccordionClick(1)}
                            />
                            <Accordion
                                heading="Di mana saya harus mengunggah proposal hasil revisi setelah Klinik PKM?"
                                description="Proposal hasil revisi wajib diunggah kembali pada platform resmi pelatihan yaitu di menu Proposal PKM di laman pkm.hmtiudayana.id, sesuai dengan batas waktu yang ditentukan."
                                isOpen={openIndex == 2}
                                onClick={() => handleAccordionClick(2)}
                            />
                            <Accordion
                                heading="Apakah peserta harus menyalakan kamera selama mengikuti Klinik PKM?"
                                description="Ya, peserta wajib menghidupkan kamera selama Klinik PKM berlangsung sebagai bukti kehadiran. Kehadiran hanya akan dicatat jika kamera aktif dan peserta tidak menggunakan virtual background dengan foto."
                                isOpen={openIndex == 3}
                                onClick={() => handleAccordionClick(3)}
                            />

                        </div>
                    )}
                    <div className="absolute left-[400px] -bottom-24 sm:block hidden w-32" data-aos="zoom-in" data-aos-delay="600">
                        <img src="images/asset28.png" alt="bwabwa" />
                    </div>
                </div>
            </section>
            {/* End FAQ */}

            {/* Start Kontak Kami */}
            <section className="md:px-12 px-2 light:bg-[#F7F7F7] dark:bg-[#1d232a] flex flex-col justify-center items-center w-full" id="contact-us">
                <div
                    className="flex flex-col justify-center items-center relative"
                >
                    <div className="absolute -left-[400px] -bottom-[500px] sm:block hidden w-34 z-0" data-aos="fade-up" data-aos-delay="400">
                        <img src="images/doubleAsset.png" alt="bwabwa" />
                    </div>
                    <div className="absolute -left-64 -top-4 sm:block hidden w-32" data-aos="zoom-in" data-aos-delay="600">
                        <img src="images/asset28.png" alt="bwabwa" />
                    </div>
                    <h1 className="font-bold text-[48px] text-[#285B70]" data-aos="fade-up" data-aos-delay="100">
                        Kontak Kami
                    </h1>
                    <p className="w-4/5 text-base text-center dark:text-gray-400" data-aos="fade-up" data-aos-delay="200">
                        Jika Anda memiliki pertanyaan lebih lanjut, jangan ragu untuk menghubungi narahubung yang tertera di bawah ini.
                    </p>
                </div>
                <div
                    className="grid grid-cols-1 md:grid-cols-3 justify-between my-8 gap-16 relative"
                >
                    <div className="absolute -right-28 -bottom-48 sm:block hidden w-24" data-aos="zoom-in" data-aos-delay="600">
                        <img src="images/asset25.png" alt="bwabwa" />
                    </div>
                    <div className="flex flex-col gap-2 bg-[#285B70] py-4 pl-4 pr-24 rounded-b-2xl border-t-2 border-[#285B70] bg-opacity-20 dark:text-gray-400" data-aos="fade-up" data-aos-duration="200">
                        <h1 className="font-bold text-xl">Tiksna Apsari</h1>
                        <div className="flex flex-row justify-start gap-4">
                            <IconLine />
                            <a href="https://line.me/R/ti/p/~tiksnaapsr." className="text-base text-[#2A3374] dark:text-white">tiksnaapsr.</a>
                        </div>
                        <div className="flex flex-row justify-start gap-4">
                            <IconWhatsapp />
                            <a href="https://wa.me/6285739490558" target="_blank" className="text-base text-[#2A3374] dark:text-white">+62 857-3949-0558</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 bg-[#42A1A4] py-4 pl-4 pr-24 rounded-b-2xl border-t-2 border-[#42A1A4] bg-opacity-20 dark:text-gray-400" data-aos="fade-up" data-aos-duration="400">
                        <h1 className="font-bold text-xl">Dewa Ayu</h1>
                        <div className="flex flex-row justify-start gap-4">
                            <IconLine />
                            <a href="https://line.me/R/ti/p/~dewayu1275" className="text-base text-[#2A3374] dark:text-white">dewayu1275</a>
                        </div>
                        <div className="flex flex-row justify-start gap-4">
                            <IconWhatsapp />
                            <a href="https://wa.me/6281214633420" target="_blank" className="text-base text-[#2A3374] dark:text-white">+62 812-1463-3420</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 bg-[#285B70] py-4 pl-4 pr-24 rounded-b-2xl border-t-2 border-[#285B70] bg-opacity-20 dark:text-gray-400" data-aos="fade-up" data-aos-duration="600">
                        <h1 className="font-bold text-xl">Putu Rifki</h1>
                        <div className="flex flex-row justify-start gap-4">
                            <IconLine />
                            <a href="https://line.me/R/ti/p/~puturifki56" className="text-base text-[#2A3374] dark:text-white">puturifki56</a>
                        </div>
                        <div className="flex flex-row justify-start gap-4">
                            <IconWhatsapp />
                            <a href="https://wa.me/62881038194017" target="_blank" className="text-base text-[#2A3374] dark:text-white">+62 881-0381-94017</a>
                        </div>
                    </div>
                </div>
                <div
                >
                    <div className="my-2" data-aos="zoom-in" data-aos-delay="200">
                        <IconContact />
                    </div>
                </div>
            </section>
            {/* End Kontak Kami */}
            <ScrollToTop />

            {/* Start Footer */}
            <footer className="footer p-12 bg-base-200 text-base-content grid-flow-row sm:grid-cols-2 md:grid-cols-6 gap-x-20 dark:bg-[#191e24]">
                <aside className="col-span-2 w-4/5 md:max-w-full">
                    <img
                        src="images/Logo-PKM-TI-2025.png"
                        className="w-32"
                        alt="PKM TI Logo"
                    />
                    <p className="capitalize text-lg font-semibold dark:text-gray-400">
                        program studi sarjana teknologi informasi fakultas
                        teknik universitas udayana
                    </p>
                </aside>
                <nav className="col-span-1 md:col-span-2">
                    <h6 className="footer-title mb-0 dark:text-gray-100">Alamat</h6>
                    <a className="link link-hover mb-4 dark:text-gray-400" href="https://maps.app.goo.gl/BxpnRYfHvLDrVYmZ8" target="_blank" rel="noopener noreferrer">
                        Jl. Kampus Udayana Bukit Jimbaran, Jimbaran, Kuta
                        Selatan, Kabupaten Badung, Bali 80361
                    </a>

                    <h6 className="footer-title mb-0 dark:text-gray-100">Telepon</h6>
                    <a className="link link-hover mb-4 dark:text-gray-400" href="tel:0361701806">(0361) 701806</a>

                    <h6 className="footer-title mb-0 dark:text-gray-100">Email</h6>
                    <a className="link link-hover mb-4 dark:text-gray-400" href="mailto:hmti@unud.ac.id">hmti@unud.ac.id</a>
                </nav>
                <nav className="col-span-1 md:col-span-2">
                    <h6 className="footer-title mb-0 dark:text-gray-100">Terkait</h6>
                    <a className="link link-hover mb-2 dark:text-gray-400">
                        UNUD | Teknologi Informasi
                    </a>

                    <a className="link link-hover mb-2 dark:text-gray-400">BEM PM Udayna</a>

                    <a className="link link-hover mb-2 dark:text-gray-400">SMFT Udayana</a>
                </nav>
            </footer>
            <footer className="py-5 px-12 bg-base-300 text-slate-600 dark:bg-[#15191e] dark:text-gray-400 text-center">
                <p>© 2025 PKM TI Udayana </p>
            </footer>
            {/* End Footer */}

        </>
    );
}
