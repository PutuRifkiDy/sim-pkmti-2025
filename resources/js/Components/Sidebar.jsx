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

export default function Sidebar({ user, navigations, children }) {
    const [theme, setThemes] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const handleTheme = (e) => {
        if (e.target.checked) {
            setThemes("dark");
        } else {
            setThemes("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const deviceTheme = localStorage.getItem("theme");

        document.querySelector("html").setAttribute("data-theme", deviceTheme);
    }, [theme]);

    return (
        <>
            <div className="drawer lg:drawer-open">
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
            </div>

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
