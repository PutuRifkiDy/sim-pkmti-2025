import { IconBerandaSideBar, IconBuktiProposal, IconGabungTim, IconProfileSideBar, IconProposal } from "@/Components/iconAdmin";
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
            icon: <IconBerandaSideBar />,
            text: "Beranda",
            link: route("dashboard"),
        },

        ...(!user.team_id ? [{
            icon: <IconGabungTim />,
            text: "Gabung Tim",
            link: route("teams.join_or_create"),
        }] : []),
        {
            icon: <IconProfileSideBar />,
            text: "Profile",
            link: route("profile.edit"),
        },
    ];

    if (user.team_id) {
        navigations.push(
            {
                icon: <IconGabungTim />,
                text: "Tim Saya",
                link: route("teams.show", user.team_id),
            },
            {
                icon: <IconProposal />,
                text: "Proposal PKM",
                link: route("proposals.show", user.team_id),
            },
            {
                icon: <IconBuktiProposal/>,
                text: "Asistensi",
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
