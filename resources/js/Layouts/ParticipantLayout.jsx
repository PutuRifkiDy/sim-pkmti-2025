import Sidebar from "@/Components/Sidebar";
import { useParam } from "@/utils";
import {
    CameraIcon,
    DocumentTextIcon,
    HomeIcon,
    UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Head } from "@inertiajs/react";

export default function ParticipantLayout({ user, title, children }) {
    const navigations = [
        {
            icon: <HomeIcon className="h-6 w-6" />,
            text: "Beranda",
            link: route("dashboard"),
        },
        {
            icon: <UserGroupIcon className="h-6 w-6" />,
            text: "Gabung Tim",
            link: route("teams.not-teamed"),
        },
    ];

    if (user.team_id) {
        navigations.pop();
        navigations.push(
            {
                icon: <UserGroupIcon className="h-6 w-6" />,
                text: "Tim Saya",
                link: route("teams.show", user.team_id),
            },
            {
                icon: <DocumentTextIcon className="h-6 w-6" />,
                text: "Proposal PKM",
                link: route("proposals.show", user.team_id),
            },
            {
                icon: <CameraIcon className="h-6 w-6" />,
                text: "Bukti Asistensi",
                link: route("assistance-proofs.show", user.team_id),
            }
        );
    }

    return (
        <>
            <Head title={title} />
            <Sidebar user={user} navigations={navigations}>
                {children}
            </Sidebar>
        </>
    );
}
