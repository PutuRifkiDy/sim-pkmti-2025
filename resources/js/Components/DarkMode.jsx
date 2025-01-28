import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function DarkMode({}) {
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
            <div className="toggle-theme cursor-pointer">
                <label className="swap swap-rotate bg-[#42A1A4] p-2 rounded-full shadow-[0_0_10px_#59DFD1]">
                    <input
                        type="checkbox"
                        onChange={handleTheme}
                        className="hidden"
                        checked={theme === "light" ? false : true}
                    />

                    <SunIcon className="swap-on dark:text-yellow-400 text-white fill-current w-5 h-5 " />

                    <MoonIcon className="swap-off text-white fill-current w-5 h-5" />
                </label>
            </div>
        </>
    );
}
