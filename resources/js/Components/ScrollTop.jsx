import React, { useState, useEffect } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        const updateScrollProgress = () => {
            const scrollPx = document.documentElement.scrollTop;
            const winHeightPx =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scrolled = (scrollPx / winHeightPx) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener("scroll", toggleVisibility);
        window.addEventListener("scroll", updateScrollProgress);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
            window.removeEventListener("scroll", updateScrollProgress);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    };

    return (
        <div className="fixed bottom-10 z-40 right-10 transition-all duration-100 ease-in-out flex flex-col items-center space-y-4">
            {isVisible ? (
                <button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={scrollToTop}
                    className={`bg-[#42A1A4] transition-all duration-100 ease-in-out text-white rounded-full p-3 ${
                        isHovered ? "tooltip tooltip-open tooltip-left" : ""
                    }`}
                    {...(isHovered ? { "data-tip": "Click untuk naik" } : {})}
                >
                    <ChevronUpIcon className="h-6 w-6" />
                </button>
            ) : (
                <button
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={scrollToBottom}
                    className={`bg-[#42A1A4] transition-all duration-100 ease-in-out text-white rounded-full p-3 ${
                        isHovered ? "tooltip tooltip-open tooltip-left" : ""
                    }`}
                    {...(isHovered ? { "data-tip": "Click untuk turun" } : {})}
                >
                    <ChevronDownIcon className="h-6 w-6" />
                </button>
            )}
            <div className="h-1 w-full bg-slate-300 rounded-2xl relative">
                <div
                    className="h-full bg-linear-blue absolute rounded-2xl"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>
        </div>
    );
};

export default ScrollToTop;
