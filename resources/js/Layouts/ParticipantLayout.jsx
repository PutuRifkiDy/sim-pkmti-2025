import { IconBerandaSideBar, IconBuktiProposal, IconGabungTim, IconProfileSideBar, IconProposal } from "@/Components/iconAdmin";
import Sidebar from "@/Components/Sidebar";
import { useParam } from "@/utils";
import {
    CameraIcon,
    DocumentTextIcon,
    HomeIcon,
    UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Head, usePage } from "@inertiajs/react";

export default function ParticipantLayout({ user, title, children, date_coaching_pkm, date_sharing_session }) {
    const date_now = usePage().props.date_now;

    let dateActive = null;
    let titleActive = "";
    let isCoachingPKMEvent = false;
    let isSharingSessionEvent = false;

    if (date_now < date_sharing_session) {
        dateActive = date_sharing_session.date;
        titleActive = date_sharing_session.title;
        isSharingSessionEvent = true;
    } else if (date_now < date_coaching_pkm && date_sharing_session == null) {
        dateActive = date_coaching_pkm.date;
        titleActive = date_coaching_pkm.title;
        isCoachingPKMEvent = true;
    }

    const navigations = [
        ...(isSharingSessionEvent || isCoachingPKMEvent  ? [
            {
                icon: <IconBerandaSideBar />,
                text: "Dashboard",
                link: route("dashboard"),
            }
        ] : [
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
        ]),
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
                icon: <IconBuktiProposal />,
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
