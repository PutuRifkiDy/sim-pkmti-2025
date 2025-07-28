import Toast from "@/Components/Toast";
import ParticipantLayout from "@/Layouts/ParticipantLayout";
import { useRandomInt } from "@/utils";
import {
    CalendarDaysIcon,
    CheckCircleIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    MapIcon,
    MapPinIcon,
} from "@heroicons/react/24/solid";
import { IconPassed, IconUnduh } from "@/Components/IconAdmin";
import { Link, usePage } from "@inertiajs/react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import { IconLine, IconWhatsapp } from "@/Components/IconLanding";

export default function Dashboard({ auth, infos, flash, get_user, certificate }) {
    const { user } = auth;
    const [certPath, setCertPath] = useState(null);
    const date_now = usePage().props.date_now;

    let dateActive = null;
    let titleActive = "";
    let isCoachingPKMEvent = false;
    let isSharingSessionEvent = false;

    const date_coaching_pkm = usePage().props.date_coaching_pkm;
    const date_sharing_session = usePage().props.date_sharing_session;
    // console.log("date_coaching_pkm", date_coaching_pkm);
    // console.log("date_sharing_session", date_sharing_session);

    if (date_now < date_sharing_session) {
        dateActive = date_sharing_session.date;
        titleActive = date_sharing_session.title;
        isSharingSessionEvent = true;
    } else if (date_now < date_coaching_pkm && date_sharing_session == null) {
        dateActive = date_coaching_pkm.date;
        titleActive = date_coaching_pkm.title;
        isCoachingPKMEvent = true;
    }

    console.log("cek isi", date_sharing_session);
    console.log("cek isi", date_coaching_pkm);
    console.log("ini adalaah isCoachingPKMEvent", isCoachingPKMEvent);
    console.log("ini adalaah isSharingSessionEvent", isSharingSessionEvent);
    console.log("ini adalaah dateActive", dateActive);

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const startTime = new Date(date_now).getTime();
        const endTime = new Date(dateActive).getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = endTime - now;

            if (distance <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, [date_now, dateActive]);

    useEffect(() => {
        if (certificate) {
            setCertPath(certificate);
        }
    }, [certificate]);


    const displayedInfos = {
        hasTeam: {
            true: {
                text: "Sudah memiliki tim",
                mode: "success",
            },
            false: {
                text: "Belum memiliki tim, segera gabung tim dan ajukan proposal",
                mode: "error",
            },
        },
        hasEnoughTeamMembers: {
            true: {
                text: "Jumlah tim cukup (≥ 3)",
                mode: "success",
            },
            false: {
                text: "Jumlah tim kurang, segera penuhi kekurangan anggota",
                mode: "error",
            },
        },
        hasProposal: {
            true: {
                text: "Sudah mengajukan proposal",
                mode: "success",
            },
            false: {
                text: "Mohon segera ajukan proposal",
                mode: "error",
            },
        },
        proposalStatus: {
            unsubmitted: {
                text: "Mohon segera ajukan proposal",
                mode: "warning",
            },
            approved: {
                text: "Proposal disetujui",
                mode: "success",
            },
            rejected: {
                text: "Proposal ditolak, segera perbaiki",
                mode: "error",
            },
            pending: {
                text: "Proposal sedang dinilai",
                mode: "warning",
            },
        },
        hasEnoughAssistanceProofs: {
            true: {
                text: "Jumlah asistensi cukup (≥ 3)",
                mode: "success",
            },
            false: {
                text: "Jumlah asistensi kurang",
                mode: "error",
            },
        },
        hasNotUploadFinalProposal: {
            false: {
                text: "Anda sudah upload proposal final",
                mode: "success",
            },
            true: {
                text: "Anda belum upload proposal final",
                mode: "error",
            },
        },
    };

    const InfoElement = ({ text, mode }) => {
        const icon = {
            success: <CheckCircleIcon className="h-6 w-6 fill-[#4DE45C]" />,
            error: <ExclamationTriangleIcon className="h-6 w-6 fill-[#FA3434]" />,
            warning: <ExclamationCircleIcon className="h-6 w-6 fill-[#CFD249]" />,
        };

        return (
            <div className={`w-full px-5 py-3.5 flex flex-row gap-5 items-center ${mode === "error" ? "bg-[#FA3434]/10 border-l-4 rounded-l-[4px] border-[#FA3434]" : " "} ${mode === "warning" ? "bg-[#CFD249]/10 border-l-4 rounded-l-[4px] border-[#CFD249]" : " "} ${mode === "success" ? "bg-[#4DE45C]/10 border-l-4 rounded-l-[4px] border-[#4DE45C]" : " "} mb-2`}>
                {icon[mode]}
                <div>
                    <div className={`font-bold text-[14px] leading-[16px] ${mode === "error" ? "text-[#FA3434]" : " "} ${mode === "warning" ? "text-[#CFD249]" : " "} ${mode === "success" ? "text-[#4DE45C]" : " "}`} >{text}</div>
                </div>
            </div>
        );
    };

    console.log(`${window.location.origin}/${user.certificate_path}`);
    const downloadCertificate = () => {
        if (user.certificate_path) {
            const doc = new jsPDF({
                orientation: "landscape",
                unit: "mm",
                format: "a4"
            });
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            doc.addImage(`${window.location.origin}/${user.certificate_path}`, "PNG", 10, 10, pageWidth - 20, pageHeight - 20);
            doc.autoPrint();
            doc.save("Sertifikat.pdf");
        } else {
            alert('Sertifikat tidak ditemukan');
        }
    };

    return (
        <ParticipantLayout user={user} title="Beranda" date_coaching_pkm={date_coaching_pkm} date_sharing_session={date_sharing_session}>
            {flash.msg && (
                <Toast
                    key={useRandomInt()}
                    content={flash.msg}
                    id="team_information"
                />
            )}
            {isSharingSessionEvent ? (
                <div className="w-full flex md:flex-row flex-col-reverse gap-5">
                    {/* card yang di kiri */}
                    <div className="flex flex-col relative rounded-[10px] overflow-y-hidden min-h-max w-full md:w-[58%]">
                        <img src="images/elements/element_dashboard_section_1.png" className="absolute md:h-[200vh] w-screen h-[200vh] z-0" alt="" />
                        <img src="images/elements/element_dashboard_section_2.png" className="absolute left-0 top-0 w-[250px] h-auto" alt="" />
                        <img src="images/elements/element_dashboard_section_3.png" className="absolute right-0 bottom-0 w-[250px] h-auto" alt="" />
                        <div className="p-10">
                            <div className="flex justify-center items-center">
                                <p className="font-bold md:text-[28px] text-[24px] text-[#202224] text-center md:w-[500px] z-20">
                                    {titleActive}
                                </p>
                            </div>
                            <div className="flex flex-col">
                                {/* pembicara ke-1 */}
                                <div className="flex flex-col justify-center items-center relative pb-10">
                                    <img src="images/pembicara-1.png" alt="Pembicara 1" className="w-[177px] h-[195px]" />
                                    <div className="bg-gradient-to-r from-[#285B70] via-[#42A1A4] to-[#285B70] absolute bottom-0 rounded-[15px] p-4">
                                        <p className="font-bold text-white text-[13px] leading-[110%]">
                                            Anak Agung Ngurah Hary Susila, S.TI., M.MT.
                                        </p>
                                        <p className="max-w-[177px] text-center text-[17px] leading-[110%] font-bold absolute top-16 left-12">
                                            Akademisi TI
                                            Universitas Udayana
                                        </p>
                                    </div>
                                </div>

                                {/* pembicara ke-2 dan ke-3 */}
                                <div className="flex md:flex-row flex-col justify-around md:mt-5 mt-20 pb-10">
                                    <div className="flex flex-col justify-center items-center relative">
                                        <img src="images/pembicara-1.png" alt="Pembicara 1" className="w-[177px] h-[195px]" />
                                        <div className="bg-gradient-to-r from-[#285B70] via-[#42A1A4] to-[#285B70] absolute bottom-0 rounded-[15px] p-4">
                                            <p className="font-bold text-white text-[13px] leading-[110%]">
                                                Anak Agung Ngurah Hary Susila, S.TI., M.MT.
                                            </p>
                                            <p className="max-w-[177px] text-center text-[17px] leading-[110%] font-bold absolute top-16 md:left-0 left-12">
                                                Akademisi TI
                                                Universitas Udayana
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center items-center relative md:mt-10 mt-16 md:mb-0 pb-10">
                                        <img src="images/pembicara-1.png" alt="Pembicara 1" className="w-[177px] h-[195px]" />
                                        <div className="bg-gradient-to-r from-[#285B70] via-[#42A1A4] to-[#285B70] rounded-[15px] absolute bottom-0 p-4">
                                            <p className="font-bold text-white text-[13px] leading-[110%]">
                                                Anak Agung Ngurah Hary Susila, S.TI., M.MT.
                                            </p>
                                            <p className="max-w-[177px] text-center text-[17px] leading-[110%] font-bold absolute top-16 md:left-0 left-12">
                                                Akademisi TI
                                                Universitas Udayana
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card yang di kanan */}
                    <div className={`flex flex-col gap-5 md:w-[42%] w-full ${isCoachingPKMEvent ? "md:w-[100%]" : ""}`}>
                        <div className="flex flex-col relative rounded-[10px] overflow-hidden object cover min-h-max">

                            <img src="images/elements/element_dashboard_section_1.png" className="absolute md:h-[200vh] w-screen h-[200vh] z-0" alt="" />
                            <img src="images/elements/element_dashboard_section_2.png" className="absolute left-0 top-0 w-[200px] h-auto" alt="" />
                            <img src="images/elements/element_dashboard_section_3.png" className="absolute right-0 bottom-0 w-[200px] h-auto" alt="" />
                            <div className="p-10">
                                <div className="flex flex-row gap-4">
                                    <div className="flex flex-row gap-1 w-full items-center justify-end">
                                        <CalendarDaysIcon className="h-6 w-6 text-[#111E41] flex-shrink-0" />
                                        <p className="text-[10px] z-10 text-[#111E41]">Kamis, 23 Agustus 2025</p>
                                    </div>
                                    <div className="w-[1px] h-8 bg-[#111E41]"></div>
                                    <div className="flex flex-row gap-1 w-full">
                                        <MapPinIcon className="h-6 w-6 text-[#111E41] flex-shrink-0" />
                                        <p className="text-[10px] z-10 text-[#111E41]">Gedung Teknologi Informasi Fakultas Teknik Universitas Udayana</p>
                                    </div>
                                </div>

                                <div className="flex flex-col justify-center items-center mt-5">
                                    <p className="text-[30px] leading-[110%] text-[#111E41] z-20 font-bold">COUNTDOWN</p>
                                </div>
                                <div className="flex flex-row gap-3 justify-center items-center mt-5">
                                    <div className="flex flex-col gap-1">
                                        <p className="font-bold text-[24px] md:text-[50px] text-[#285B70] leading-[110%] z-20">
                                            {timeLeft.days.toString().padStart(2, "0")}
                                        </p>
                                        <p className="text-[#141619] text-[15px] leading-[110%] z-20 text-center">
                                            Days
                                        </p>
                                    </div>
                                    <p className="text-[50px] leading-[110%] text-[#000000] z-20">:</p>
                                    <div className="flex flex-col gap-1">
                                        <p className="font-bold text-[24px] md:text-[50px] text-[#357F8B] leading-[110%] z-20">
                                            {timeLeft.hours.toString().padStart(2, "0")}
                                        </p>
                                        <p className="text-[#141619] text-[15px] leading-[110%] z-20 text-center">
                                            Hours
                                        </p>
                                    </div>
                                    <p className="text-[50px] leading-[110%] text-[#000000] z-20">:</p>
                                    <div className="flex flex-col gap-1">
                                        <p className="font-bold text-[24px] md:text-[50px] text-[#42A1A4] leading-[110%] z-20">
                                            {timeLeft.minutes.toString().padStart(2, "0")}
                                        </p>
                                        <p className="text-[#141619] text-[15px] leading-[110%] z-20 text-center">
                                            Minutes
                                        </p>
                                    </div>
                                    <p className="text-[50px] leading-[110%] text-[#000000] z-20">:</p>
                                    <div className="flex flex-col gap-1">
                                        <p className="font-bold text-[24px] md:text-[50px] text-[#59DFD1] leading-[110%] z-20">
                                            {timeLeft.seconds.toString().padStart(2, "0")}
                                        </p>
                                        <p className="text-[#141619] text-[15px] leading-[110%] z-20 text-center">
                                            Seconds
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col relative rounded-[10px] overflow-hidden object cover min-h-max">

                            <img src="images/elements/element_dashboard_section_1.png" className="absolute md:h-[200vh] w-screen h-[200vh] z-0" alt="" />
                            <img src="images/elements/element_dashboard_section_2.png" className="absolute left-0 top-0 w-[200px] h-auto z-0" alt="" />
                            <img src="images/elements/element_dashboard_section_3.png" className="absolute right-0 bottom-0 w-[200px] h-auto z-0" alt="" />
                            <div className="p-8">
                                <div className="flex flex-row gap-1 justify-center items-center">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[27px] leading-[110%] text-[#000000] z-20">Don’t Forget to join our official  LINE group</p>
                                        <a href="https://line.me/R/ti/g/uzvemAzAVdrt" className="text-[16px] leading-[110%] text-indigo-800 z-20 cursor-pointer" target="_blank" >
                                            https://line.me/R/ti/g/uzvemAzAVdrt
                                        </a>
                                    </div>

                                    <img src="/images/elements/element_dashboard_line_qr.png" className="w-[129px] h-[129px] z-10" alt="" />
                                </div>

                                <div className="flex flex-col justify-center items-center mt-5">
                                    <p className="text-[24px] leading-[110%] text-[#111E41] z-20 font-bold text-center">Any Questions? Contact the following contact</p>
                                </div>
                                <div className="flex flex-wrap gap-5 justify-center items-center mt-5">
                                    <div className="flex flex-col gap-2">
                                        <p className="font-bold text-[13px] text-[#3A3A3A] leading-[110%] z-20">
                                            Contact Person 1
                                        </p>
                                        <div className="flex flex-row mt-3 gap-2">
                                            <IconWhatsapp />
                                            <a href="wa.me/6285739490558" className="text-base text-[#2A3374] dark:text-white text-[12px] z-20">+62 857-3949-0558</a>
                                        </div>
                                        <div className="flex flex-row gap-2">
                                            <IconLine />
                                            <a href="https://line.me/R/ti/p/~tiksnaapsr." className="text-base text-[#2A3374] dark:text-white text-[12px] z-20">tiksnaapsr.</a>
                                        </div>

                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <p className="font-bold text-[13px] text-[#3A3A3A] leading-[110%] z-20">
                                            Contact Person 2
                                        </p>
                                        <div className="flex flex-row mt-3 gap-2">
                                            <IconWhatsapp />
                                            <a href="wa.me/6285940899163" className="text-base text-[#2A3374] dark:text-white text-[12px] z-20">+62 859-4089-9163</a>
                                        </div>
                                        <div className="flex flex-row gap-2">
                                            <IconLine />
                                            <a href="https://line.me/R/ti/p/~dewayu1275" className="text-base text-[#2A3374] dark:text-white text-[12px] z-20">dewayu1275</a>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <p className="font-bold text-[13px] text-[#3A3A3A] leading-[110%] z-20">
                                            Contact Person 3
                                        </p>
                                        <div className="flex flex-row mt-3 gap-2">
                                            <IconWhatsapp />
                                            <a href="wa.me/62881038194017" className="text-base text-[#2A3374] dark:text-white text-[12px] z-20">+62 881-0381-94017</a>
                                        </div>
                                        <div className="flex flex-row gap-2">
                                            <IconLine />
                                            <a href="https://line.me/R/ti/p/~puturifki56" className="text-base text-[#2A3374] dark:text-white text-[12px] z-20">puturifki56</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            ) : (
                <div className={`flex flex-col gap-5 md:w-[42%] w-full ${isCoachingPKMEvent ? "md:w-[100%]" : ""}`}>
                    <div className="flex flex-col relative rounded-[10px] overflow-hidden object cover min-h-max">

                        <img src="images/elements/element_dashboard_section_1.png" className="absolute md:h-[200vh] w-screen h-[200vh] z-0" alt="" />
                        <img src="images/elements/element_dashboard_section_2.png" className="absolute left-0 top-0 w-[200px] h-auto" alt="" />
                        <img src="images/elements/element_dashboard_section_3.png" className="absolute right-0 bottom-0 w-[200px] h-auto" alt="" />
                        <div className="p-10">

                            <div className="flex flex-row gap-10 items-center">
                                <div className="flex flex-row gap-1 w-full items-center justify-end">
                                    <CalendarDaysIcon className="h-6 w-6 text-[#111E41] flex-shrink-0" />
                                    <p className="text-[15px] z-10 text-[#111E41]">Kamis, 23 Agustus 2025</p>
                                </div>
                                <div className="w-[4px] h-8 bg-[#111E41]"></div>
                                <div className="flex flex-row gap-1 w-full items-center">
                                    <MapPinIcon className="h-6 w-6 text-[#111E41] flex-shrink-0" />
                                    <p className="text-[15px] z-10 text-[#111E41]">Online Via Zoom Meeting</p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-center mt-5">
                                <p className="text-[30px] leading-[110%] text-[#111E41] z-20 font-bold">{isCoachingPKMEvent ? titleActive : "COUNTDOWN"}</p>
                            </div>
                            <div className="flex flex-row gap-3 justify-center items-center mt-5">
                                <div className="flex flex-col gap-1">
                                    <p className="font-bold text-[24px] md:text-[50px] text-[#285B70] leading-[110%] z-20">
                                        {timeLeft.days.toString().padStart(2, "0")}
                                    </p>
                                    <p className="text-[#141619] text-[15px] leading-[110%] z-20 text-center">
                                        Days
                                    </p>
                                </div>
                                <p className="text-[50px] leading-[110%] text-[#000000] z-20">:</p>
                                <div className="flex flex-col gap-1">
                                    <p className="font-bold text-[24px] md:text-[50px] text-[#357F8B] leading-[110%] z-20">
                                        {timeLeft.hours.toString().padStart(2, "0")}
                                    </p>
                                    <p className="text-[#141619] text-[15px] leading-[110%] z-20 text-center">
                                        Hours
                                    </p>
                                </div>
                                <p className="text-[50px] leading-[110%] text-[#000000] z-20">:</p>
                                <div className="flex flex-col gap-1">
                                    <p className="font-bold text-[24px] md:text-[50px] text-[#42A1A4] leading-[110%] z-20">
                                        {timeLeft.minutes.toString().padStart(2, "0")}
                                    </p>
                                    <p className="text-[#141619] text-[15px] leading-[110%] z-20 text-center">
                                        Minutes
                                    </p>
                                </div>
                                <p className="text-[50px] leading-[110%] text-[#000000] z-20">:</p>
                                <div className="flex flex-col gap-1">
                                    <p className="font-bold text-[24px] md:text-[50px] text-[#59DFD1] leading-[110%] z-20">
                                        {timeLeft.seconds.toString().padStart(2, "0")}
                                    </p>
                                    <p className="text-[#141619] text-[15px] leading-[110%] z-20 text-center">
                                        Seconds
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`flex flex-col relative rounded-[10px] overflow-hidden object cover min-h-max`}>

                        <img src="images/elements/element_dashboard_section_1.png" className="absolute md:h-[200vh] w-screen h-[200vh] z-0" alt="" />
                        <img src="images/elements/element_dashboard_section_2.png" className="absolute left-0 top-0 w-[200px] h-auto z-0" alt="" />
                        <img src="images/elements/element_dashboard_section_3.png" className="absolute right-0 bottom-0 w-[200px] h-auto z-0" alt="" />
                        <div className="p-8">
                            <div className="flex flex-row gap-10 justify-center items-center">

                                <div className="flex flex-col gap-1">
                                    <p className="text-[27px] leading-[110%] text-[#000000] z-20">Don’t Forget to join our official  LINE group</p>
                                    <a href="https://line.me/R/ti/g/uzvemAzAVdrt" className="text-[16px] leading-[110%] text-indigo-800 z-30" target="_blank" >
                                        https://line.me/R/ti/g/uzvemAzAVdrt
                                    </a>
                                </div>

                                <img src="/images/elements/element_dashboard_line_qr.png" className="w-[129px] h-[129px] z-10" alt="" />
                            </div>

                            <div className="flex flex-col justify-center items-center mt-5">
                                <p className="text-[24px] leading-[110%] text-[#111E41] z-20 font-bold text-center">Any Questions? Contact the following contact</p>
                            </div>
                            <div className="flex flex-wrap gap-5 justify-center items-center mt-5">
                                <div className="flex flex-col gap-2">
                                    <p className="font-bold text-[13px] text-[#3A3A3A] leading-[110%] z-20">
                                        Contact Person 1
                                    </p>
                                    <div className="flex flex-row mt-3 gap-2">
                                        <IconWhatsapp />
                                        <a href="https://wa.me//6285739490558" className="text-base text-[#2A3374] dark:text-white text-[12px] z-20">+62 857-3949-0558</a>
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <IconLine />
                                        <a href="https://line.me/R/ti/p/~tiksnaapsr." className="text-base text-[#2A3374] dark:text-white text-[12px] z-20">tiksnaapsr.</a>
                                    </div>

                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="font-bold text-[13px] text-[#3A3A3A] leading-[110%] z-20">
                                        Contact Person 2
                                    </p>
                                    <div className="flex flex-row mt-3 gap-2">
                                        <IconWhatsapp />
                                        <a href="https://wa.me//6285940899163" className="text-base text-[#2A3374] dark:text-white text-[12px] z-20">+62 859-4089-9163</a>
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <IconLine />
                                        <a href="https://line.me/R/ti/p/~dewayu1275" className="text-base text-[#2A3374] dark:text-white text-[12px] z-20">dewayu1275</a>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="font-bold text-[13px] text-[#3A3A3A] leading-[110%] z-20">
                                        Contact Person 3
                                    </p>
                                    <div className="flex flex-row mt-3 gap-2">
                                        <IconWhatsapp />
                                        <a href="https://wa.me//62881038194017" className="text-base text-[#2A3374] dark:text-white text-[12px] z-20">+62 881-0381-94017</a>
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <IconLine />
                                        <a href="https://line.me/R/ti/p/~puturifki56" className="text-base text-[#2A3374] dark:text-white text-[12px] z-20">puturifki56</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )}

            {user.status == "passed" ? (
                <div className="flex md:flex-row flex-col justify-between md:gap-16 gap-8">
                    <div className="flex flex-col gap-5 md:w-1/2 w-full">
                        <div className="bg-[#4DE45C]/10 border-l-4 border-[#4DE45C] text-[#4DE45C] w-full px-5 py-3 flex flex-row gap-5 items-center rounded-l-[4px]">
                            <p className="flex flex-row justify-center items-center gap-5 font-bold text-[17px] md:leading-[16px] leading-[24px]">
                                <IconPassed />
                                Selamat Anda Telah Lulus Dari PKM TI 2025
                            </p>
                        </div>
                        <div className="flex flex-col mt-8 justify-center items-center">
                            <img src="images/passed-icon.png" alt="" className="w-[290px] h-[290px]" />
                        </div>
                    </div>

                    <div className="flex flex-col bg-white rounded-[12px] shadow-xl p-10 gap-10 md:w-1/2 w-full">
                        <p className="font-bold text-[36px] leading-[24px] text-[#131523]/80 tracking-[0.03em]">Identitas</p>
                        <div className="flex flex-col gap-5 w-full">
                            <div className="flex flex-col gap-1">
                                <label className="relative  flex items-center gap-2 font-normal leading-[20px] text-[#5A607F]">
                                    Nama
                                </label>
                                <p className="flex items-center input input-bordered rounded-[4px] tracking-[0.03em]">{get_user.name}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="relative  flex items-center gap-2 font-normal leading-[20px] text-[#5A607F]">
                                    NIM
                                </label>
                                <p className="flex items-center input input-bordered rounded-[4px] tracking-[0.03em]">{get_user.nim}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="relative  flex items-center gap-2 font-normal leading-[20px] text-[#5A607F]">
                                    Angkatan
                                </label>
                                <p className="flex items-center input input-bordered rounded-[4px] tracking-[0.03em]">{20 + get_user.nim.substring(0, 2)}</p>
                            </div>
                            <p className="font-bold tracking-[0.03em] flex justify-center items-center bg-[#C4F8E2] rounded-[12px] py-2 px-3 text-[#06A561] md:w-[130px] w-full">
                                {get_user.status && "Completed"}
                            </p>
                        </div>
                    </div>

                </div>
            ) : (user.status == "failed" || user.status == null || user.status == "") && isSharingSessionEvent != true && isCoachingPKMEvent != true ? (

                <div className="flex flex-col gap-3 w-full items-start">

                    {Object.keys(infos).map((key, i) => {
                        const text =
                            displayedInfos[key][infos[key].toString()].text;
                        const mode =
                            displayedInfos[key][infos[key].toString()].mode;
                        return <InfoElement text={text} mode={mode} key={i} />;
                    })}
                </div>
            ) : null
            }
        </ParticipantLayout>
    );
}
