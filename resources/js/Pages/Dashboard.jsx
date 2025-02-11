import Toast from "@/Components/Toast";
import ParticipantLayout from "@/Layouts/ParticipantLayout";
import { useRandomInt } from "@/utils";
import {
    CheckCircleIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import { IconPassed, IconUnduh } from "@/Components/IconAdmin";
import { Link } from "@inertiajs/react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function Dashboard({ auth, infos, flash, get_user }) {
    const { user } = auth;

    console.log("User status:", user.status);

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


    return (
        <ParticipantLayout user={user} title="Beranda">
            {flash.msg && (
                <Toast
                    key={useRandomInt()}
                    content={flash.msg}
                    id="team_information"
                />
            )}
            {
                user.status === "passed" ? (
                    <div className="flex md:flex-row flex-col justify-between md:gap-16 gap-8">
                        <div className="flex flex-col gap-5 md:w-1/2 w-full">
                            <div className="bg-[#4DE45C]/10 border-l-4 border-[#4DE45C] text-[#4DE45C] w-full px-5 py-3 flex flex-row gap-5 items-center rounded-l-[4px]">
                                <p className="flex flex-row justify-center items-center gap-5 font-bold text-[17px] md:leading-[16px] leading-[24px]">
                                    <IconPassed />
                                    Selamat Anda Telah Lulus Dari PKM TI 2025
                                </p>
                            </div>
                            <div className="flex flex-col gap-8 justify-center items-center">
                                <img src="images/passed-icon.png" alt="" className="w-[290px] h-[290px]" />
                                <Link className="flex flex-row justify-center items-center font-bold bg-[#42A1A4] px-8 py-3 text-[18px tracking-[0.03em] gap-5 leading-[26px] rounded-[12px] text-white hover:text-white hover:bg-[#59DFD1] dark:text-gray-200 dark:hover:text-white transition-all duration-300 shadow-[0_0_10px_#42A1A4]">
                                    <IconUnduh />
                                    Unduh Sertifikat
                                </Link>
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
                ) : user.status === "failed" || user.status === null || user.status === "" ? (

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
