import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const Accordion = ({ title, answer }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <>
            <div
                className={`px-4 rounded-xl items-center border border-slate-200 ${
                    accordionOpen
                        ? "bg-[#285B70] py-5"
                        : "bg-white shadow-md py-5"
                }`}
            >
                <button
                    className="flex justify-between w-full "
                    onClick={() => setAccordionOpen(!accordionOpen)}
                >
                    {accordionOpen ? (
                        <div className="w-11/12 text-base text-white font-semibold text-start">
                            {title}
                        </div>
                    ) : (
                        <div className="w-11/12 text-base text-slate-800 font-semibold text-start">
                            {title}
                        </div>
                    )}

                    {accordionOpen ? (
                        <ChevronUpIcon className="text-white w-5 h-5" />
                    ) : (
                        <ChevronDownIcon className="text-slate-900 cw-5 h-5" />
                    )}
                </button>

                <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white text-base ${
                        accordionOpen
                            ? "grid-rows-[1fr] opacity-100 mt-4"
                            : "grid-rows-[0] opacity-0"
                    }`}
                >
                    <p className="overflow-hidden text-base">{answer}</p>
                </div>
            </div>
        </>
    );
};

export default Accordion;
