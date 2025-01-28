import { Link } from "@inertiajs/react";
import DarkMode from "@/Components/DarkMode";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

export default function NavBar({ auth }) {
    const [openNav, setOpenNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    function toggleNav() {
        setOpenNav(!openNav);
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            scroll = window.scrollY;
            if (scroll > 30) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        });
    }, [scrolled]);

    return (
        <nav
            className={`navbar bg-base-100 p-0 lg:px-12 z-10 fixed top-0 flex-col items-start lg:items-center lg:flex-row ${
                scrolled ? "shadow-md" : "shadow-none"
            } duration-300 z-20`}
        >
            <div className="flex justify-between w-full lg:w-1/3 lg:navbar-start px-6 lg:px-0 py-2 sm:px-10 bg-base-100">
                <a href="#" className="cursor-pointer w-14">
                    <img src="/images/Logo-PKM-TI-2025.png" alt="w-full" />
                </a>

                <div className="flex space-x-2 lg:hidden">
                    <DarkMode />
                    <button onClick={toggleNav}>
                        {!openNav ? (
                            <Bars3Icon className="w-10" />
                        ) : (
                            <XMarkIcon className="w-10" />
                        )}
                    </button>
                </div>
            </div>

            <div
                className={`${
                    openNav ? "translate-y-16" : "-translate-y-full"
                } z-[-5] absolute left-0 bg-base-100 w-full flex-col items-start pt-6 pb-10 shadow-md lg:bg-transparent lg:relative lg:translate-y-0 lg:px-0 lg:shadow-none lg:py-0 lg:flex lg:flex-row lg:justify-between lg:items-center ease-out duration-500`}
            >
                <div className="lg:navbar-center flex-col lg:flex">
                    <ul className="menu menu-vertical lg:menu-horizontal gap-5">
                        <li>
                            <a href="#" className="hover:text-[#42A1A4] text-[18px]">Beranda</a>
                        </li>
                        <li>
                            <a href="#about-us" className="hover:text-[#42A1A4] text-[18px]">Tentang PKM TI</a>
                        </li>
                        <li>
                            <a href="#FaQ" className="hover:text-[#42A1A4] text-[18px]">Pertanyaan Umum</a>
                        </li>
                        <li>
                            <a href="#contact-us" className="hover:text-[#42A1A4] text-[18px]">Kontak Kami</a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col space-y-4 lg:w-fit lg:flex-row lg:navbar-end lg:space-y-0 lg:space-x-4 lg:items-center md:pl-0 pl-5">
                    <div className="hidden lg:block">
                        <DarkMode />
                    </div>

                    {auth.user ? (
                        <Link
                            as="button"
                            href={route("dashboard")}
                            className="font-medium bg-[#42A1A4] px-6 py-2 rounded-md text-white hover:text-white hover:bg-[#59DFD1] dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:shadow-[0_0_10px_#42A1A4]"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                as="button"
                                href={route("login")}
                            className="font-medium bg-[#42A1A4] px-6 py-2 rounded-md text-white hover:text-white hover:bg-[#59DFD1] dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:shadow-[0_0_10px_#42A1A4] shadow-[0_0_10px_#42A1A4]"
                            >
                                Log in
                            </Link>

                            {/* <Link
                                as="button"
                                href={route("register")}
                                className="font-medium px-6 py-2 rounded-md text-primary outline outline-primary outline-2 -outline-offset-2 hover:text-white hover:bg-primary dark:text-gray-400 dark:hover:text-white transition-all duration-300"
                            >
                                Register
                            </Link> */}
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
