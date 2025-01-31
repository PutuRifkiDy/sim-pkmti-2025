import {
    AcademicCapIcon,
    ArrowLeftEndOnRectangleIcon,
    Bars3Icon,
    MoonIcon,
    ShieldExclamationIcon,
    SunIcon,
    UserIcon,
} from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { IconDashboard, IconDropdown, IconHome, IconLogout, IconLogoutSideBar, IconProfile, IconSideBar } from "./IconAdmin";
import DarkMode from "./DarkMode";

export default function Sidebar({ user, navigations, children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const currentRoute = route().current();
    console.log(currentRoute);

    return (
        <>
            <div className="flex flex-row justify-between">
                {/* Sidebar */}
                <aside className={`flex flex-col gap-6 justify-start items-center transition-all duration-200 ease-in-out border-r-2 border-slate-200 ${isSidebarOpen ? "w-[242px]" : "w-16"} min-h-screen fixed`}>
                    <div className="py-6 w-full flex flex-row gap-1 justify-center items-center font-semibold text-[24px] text-[#285B70] border-b-2 border-slate-200">
                        PKM<span className={`${isSidebarOpen ? "flex flex-row text-[#42A1A4]" : "hidden"}`}>TI 2025</span>
                    </div>
                    <img src="images/Logo-PKM-TI-2025.png" alt="Profile" className={`${isSidebarOpen ? "w-[90px] h-[111px]" : "w-[37px] h-[46px]"}`} />
                    <nav className={`mt-1 w-full ${isSidebarOpen ? "px-5" : " "}  text-center`}>

                        <ul className="font-bold">
                            {navigations.map((navigation, i) => (

                                <li
                                    key={i}
                                    className={`py-4 ${isSidebarOpen ? "px-8 rounded-[6px] relative" : "items-center"} flex flex-col justify-center  ${currentRoute.startsWith(navigation.link) ? "bg-[#42A1A4] text-white stroke-white" : "hover:bg-[#42A1A4]/20 transition-all duration-200 ease-in-out"}`}
                                >
                                    {/* Garis warna di samping */}
                                    {currentRoute.startsWith(navigation.link) && isSidebarOpen && (
                                        <div className="absolute left-0 top-0 h-full w-[8px] bg-[#285B70] rounded-r-md"></div>
                                    )}
                                    <Link href={route(navigation.link)} as="button" className={`font-semibold text-[14px] tracking-[0.3px] flex flex-row gap-5 items-center `}>
                                        {navigation.icon} {isSidebarOpen && navigation.text}
                                    </Link>
                                </li>
                            ))}
                            <li className={`py-4 ${isSidebarOpen ? "px-8" : "items-center"} flex flex-col justify-center cursor-pointer`}>
                                <a
                                    onClick={() =>
                                        document
                                            .getElementById(
                                                "logout-confirmation"
                                            )
                                            .showModal()
                                    }
                                    className="font-semibold text-[14px] tracking-[0.3px] flex flex-row gap-5 items-center text-[#FF0000]"
                                >
                                    <IconLogoutSideBar />
                                    {isSidebarOpen && "Keluar"}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <div className={`flex-1 ${isSidebarOpen ? "ml-[242px]" : "ml-16"} transition-all`}>
                    <header className="py-4 flex items-center justify-between px-5 border-b-2 border-slate-200">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-xl">
                            <IconSideBar />
                        </button>
                        <div className="flex flex-row justify-center items-center gap-5">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="flex flex-row gap-5 justify-center items-center cursor-pointer">
                                    <div className="flex flex-row gap-3">
                                        <div className="rounded-full overflow-hidden w-[50px] h-[52px]">
                                            <img src="images/admin/icon-profile.png" alt="" />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="font-bold text-[16px] text-[#404040]">{user.name}</p>
                                            <p className="font-medium text-[14px] text-[#565656]">{user.role}</p>
                                        </div>
                                    </div>
                                    <IconDropdown className="w-9 h-9" />
                                </div>
                                <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <li className="border-b-2 border-slate-200">
                                        <Link href={route("welcome")} as="button" className="flex flex-row gap-2 justify-start items-center font-medium text-[14px] text-[#404040] tracking-[0.11em]">
                                            <IconHome />
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <a
                                            onClick={() =>
                                                document
                                                    .getElementById(
                                                        "logout-confirmation"
                                                    )
                                                    .showModal()
                                            }
                                            className="flex flex-row gap-2 justify-start items-center font-medium text-[14px] text-[#404040] tracking-[0.11em]"
                                        >
                                            <IconLogout />
                                            Keluar
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="">

                            </div>
                            <DarkMode />
                        </div>
                    </header>
                    <div className="flex flex-col gap-3 p-5 bg-[#F5F6FA] min-h-screen">
                        {navigations.map((navigation, i) => (
                            <h1
                                key={i}
                                className={`text-4xl font-semibold`}
                            >
                                {currentRoute.startsWith(navigation.link) && navigation.text}
                            </h1>
                        ))}

                            {children}
                    </div>
                </div>
            </div>


            {/* <div className="drawer lg:drawer-open">
                <input id="sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <div className="w-full flex justify-end">
                        <label
                            htmlFor="sidebar"
                            className="btn btn-square m-4 z-50 fixed drawer-button lg:hidden"
                        >
                            <Bars3Icon className="h-6 w-6" />
                        </label>
                    </div>
                    <div className="container flex justify-center p-10">
                        {children}
                    </div>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="sidebar"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <div className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
                        <Link href={route("welcome")} as="button">
                            <img
                                src="/images/logo.png"
                                className="h-32 w-32 mx-auto my-4"
                            />
                        </Link>

                        <ul className="font-bold">
                            {navigations.map((navigation, i) => (
                                <li key={i} className="my-2">
                                    <Link href={navigation.link} as="button">
                                        {navigation.icon} {navigation.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="divider"></div>

                        <ul className="font-bold">
                            <li className="my-2">
                                <Link href={route("profile.edit")} as="button">
                                    <UserIcon className="h-6 w-6" />
                                    {user.nim}
                                </Link>
                            </li>

                            <li className="my-2">
                                <label className="swap swap-rotate justify-start">
                                    <input
                                        type="checkbox"
                                        onChange={handleTheme}
                                        className="hidden"
                                        checked={
                                            theme === "light" ? false : true
                                        }
                                    />
                                    <SunIcon className="swap-on h-6 w-6" />
                                    <MoonIcon className="swap-off h-6 w-6" />
                                    {theme === "light"
                                        ? "Mode Gelap"
                                        : "Mode Terang"}
                                </label>
                            </li>

                            {user.role === "admin" &&
                                (location.pathname.search(/admin/) === -1 ? (
                                    <li className="my-2">
                                        <Link
                                            href={route("admin.dashboard")}
                                            as="button"
                                        >
                                            <ShieldExclamationIcon className="h-6 w-6" />
                                            Menu Admin
                                        </Link>
                                    </li>
                                ) : (
                                    <li className="my-2">
                                        <Link
                                            href={route("dashboard")}
                                            as="button"
                                        >
                                            <AcademicCapIcon className="h-6 w-6" />
                                            Menu Utama
                                        </Link>
                                    </li>
                                ))}

                            <li className="my-2">
                                <a
                                    onClick={() =>
                                        document
                                            .getElementById(
                                                "logout-confirmation"
                                            )
                                            .showModal()
                                    }
                                >
                                    <ArrowLeftEndOnRectangleIcon className="h-6 w-6" />
                                    Keluar
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}

            {/* Logout confirmation */}
            <dialog id="logout-confirmation" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Keluar</h3>
                    <p className="py-4">Apakah Anda yakin untuk keluar?</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <Link
                                as="button"
                                className="btn btn-error me-1"
                                method="post"
                                href={route("logout")}
                            >
                                Keluar
                            </Link>
                            <button className="btn ms-1">Batal</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
}
