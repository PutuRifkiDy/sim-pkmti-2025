import { useState, Children } from "react";
import { Carousel } from "react-responsive-carousel";
import {
    ArrowLongLeftIcon,
    ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CustomCarousel({ children }) {
    const totalItems = Children.count(children);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handlePrevClick = () => {
        setSelectedIndex(
            selectedIndex === 0 ? totalItems - 1 : selectedIndex - 1
        );
    };

    const handleNextClick = () => {
        setSelectedIndex(
            selectedIndex === totalItems - 1 ? 0 : selectedIndex + 1
        );
    };

    return (
        <div className="relative justify-center items-center">
            <Carousel
                className="items-center"
                selectedItem={selectedIndex}
                showArrows={false}
                showIndicators={false}
                centerMode={true}
                centerSlidePercentage={100}
                showThumbs={false}
                showStatus={false}
                emulateTouch={true}
            >
                {children}
            </Carousel>

            <div className="flex flex-row gap-4 flex-shrink-0 mt-5 items-center justify-center">
                <button
                    className="btn btn-sm shadow-2xl rounded-lg"
                    onClick={handlePrevClick}
                    disabled={selectedIndex === 0}
                >
                    <ArrowLongLeftIcon className="w-6 h-6 font-black" />
                </button>
                <button
                    className="btn btn-sm shadow-2xl rounded-lg"
                    onClick={handleNextClick}
                    disabled={selectedIndex === totalItems - 1}
                >
                    <ArrowLongRightIcon className="w-6 h-6 font-black" />
                </button>
            </div>
        </div>
    );
}

export default CustomCarousel;
