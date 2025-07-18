import React, { useState } from "react";

const Accordion = ({ heading, description, isOpen, onClick }) => {


    return (
        <div className={`w-full border rounded-[10px] m-2 p-2 shadow-lg ${isOpen ? 'bg-[#285B70]' : ''}`}>
            <button
                className="w-full px-4 py-2 text-left focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                onClick={onClick}
            >
                <div className="flex items-center justify-between">
                    <span className={`text-[15px] md:text-lg font-semibold light:text-gray-900 w-[550px] ${isOpen ? 'text-[#FFFFFF]' : ''}`}>{heading}</span>
                    {/* icon arrow */}
                    <svg
                        className={`w-6 h-6 transition-transform transform duration-300 ease-out flex-shrink-0 ${isOpen ? 'rotate-180 stroke-white' : ''
                            }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className={`px-4 py-2 ${isOpen ? 'text-[#FFFFFF]' : 'text-gray-700'}`}>
                    {description}
                </div>
            )}
        </div>
    );
}

export default Accordion;
