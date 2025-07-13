import Sidebar from "@/Components/Sidebar";
import {
    DocumentTextIcon,
    HomeIcon,
    UserGroupIcon,
    UserIcon,
} from "@heroicons/react/24/solid";
import { Head } from "@inertiajs/react";
import { IconBerandaSideBar, IconProfileSideBar, IconGabungTim, IconProposal } from "@/Components/IconAdmin";

export default function AdminLayout({ user, title, children }) {
    const navigations = [];
    if(user.role == "admin") {
        navigations.push(
        {
            icon: <IconBerandaSideBar />,
            text: "Beranda",
            link: route("admin.dashboard"),
        },
        {
            icon: <IconProfileSideBar />,
            text: "Pengguna",
            link: route("admin.users"),
        },
        {
            icon: <IconGabungTim />,
            text: "Tim",
            link: route("admin.teams"),
        },
        {
            icon: <IconProposal />,
            text: "Proposal PKM",
            link: route("admin.proposals"),
        })
    }else if(user.role == "lecturer") {
        navigations.push(
        {
            icon: <IconBerandaSideBar />,
            text: "Beranda",
            link: route("admin.dashboard"),
        }, 
        {
            icon: <IconProposal />,
            text: "Proposal PKM",
            link: route("admin.proposals"),
        })
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
