import { IconTextHomePage } from "@/Components/IconLanding";
import { Link } from "@inertiajs/react";

function HomeSection({ auth }) {
    return (
        <>
            <img
                src="images/elements/element_banner_home_section.png"
                alt="banner"
                className="absolute z-0 w-screen object-center rounded-none h-[800px] object-cover hidden md:block top-0 dark:hidden"
            />
            <section className="px-4 md:px-8 lg:px-16 pt-28 md:pt-32 pb-16 md:pb-40">
                <div className="flex flex-row justify-center md:justify-between">
                    {/* side left */}
                    <div className="flex flex-col gap-7 items-start">
                        <div className="relative md:w-[581px] max-w-full md:h-[210px] h-[148px] text-center md:text-start">
                            <div className="md:absolute md:block hidden md:left-2 left-12 top-14 ">
                                <IconTextHomePage />
                            </div>
                            <p className="font-bold md:text-[64px] text-[36px] text-[#111E41] dark:text-[#42A1A4] leading-[1.1em] z-50">Sistem Informasi Pelatihan PKM TI Udayana</p>
                        </div>
                    </div>


                    {/* side right */}
                </div>
            </section>
        </>
    )
}

export default HomeSection;

