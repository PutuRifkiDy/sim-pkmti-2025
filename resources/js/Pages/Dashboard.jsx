import Toast from "@/Components/Toast";
import ParticipantLayout from "@/Layouts/ParticipantLayout";
import { useRandomInt } from "@/utils";
import {
    CheckCircleIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";

export default function Dashboard({ auth, infos, flash }) {
    const { user } = auth;

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
                mode: "warning",
            },
        },
        hasProposal: {
            true: {
                text: "Sudah mengajukan proposal",
                mode: "success",
            },
            false: {
                text: "Mohon segera ajukan proposal",
                mode: "warning",
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
                mode: "warning",
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
                    {/* <h3 className={`font-bold text-[18px] ${mode === "error" ? "text-[#FA3434]" : " "} ${mode === "warning" ? "text-[#CFD249]" : " "} ${mode === "success" ? "text-[#4DE45C]" : " "}`}>
                        {mode === "success" && "Selesai"}
                        {mode === "warning" && "Peringatan"}
                        {mode === "error" && "Bahaya"}
                    </h3> */}
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
            <div className="flex flex-col gap-3 w-full items-start">
                {Object.keys(infos).map((key, i) => {
                    const text =
                        displayedInfos[key][infos[key].toString()].text;
                    const mode =
                        displayedInfos[key][infos[key].toString()].mode;
                    return <InfoElement text={text} mode={mode} key={i} />;
                })}
            </div>
        </ParticipantLayout>
    );
}
