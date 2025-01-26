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
            success: <CheckCircleIcon className="h-6 w-6" />,
            error: <ExclamationTriangleIcon className="h-6 w-6" />,
            warning: <ExclamationCircleIcon className="h-6 w-6" />,
        };

        return (
            <div className={`alert alert-${mode} mb-2`} role="alert">
                {icon[mode]}
                <div>
                    <h3 className="font-bold">
                        {mode === "success" && "Selesai"}
                        {mode === "warning" && "Peringatan"}
                        {mode === "error" && "Bahaya"}
                    </h3>
                    <div className="text-xs">{text}</div>
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
            <div className="flex flex-col w-full items-start">
                <h1 className="text-4xl font-black mb-8">
                    Halo, {user.name.split(" ")[0]}!
                </h1>
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
