import Sidebar from "@/Components/Sidebar";
import {
    DocumentTextIcon,
    HomeIcon,
    UserGroupIcon,
    UserIcon,
} from "@heroicons/react/24/solid";
import { Head } from "@inertiajs/react";

export default function AdminLayout({ user, title, children }) {
    const navigations = [
        {
            icon: <HomeIcon className="h-6 w-6" />,
            text: "Beranda",
            link: route("admin.dashboard"),
        },
        {
            icon: <UserIcon className="h-6 w-6" />,
            text: "Pengguna",
            link: route("admin.users"),
        },
        {
            icon: <UserGroupIcon className="h-6 w-6" />,
            text: "Tim",
            link: route("admin.teams"),
        },
        {
            icon: <DocumentTextIcon className="h-6 w-6" />,
            text: "Proposal PKM",
            link: route("admin.proposals"),
        },
    ];

    return (
        <>
            <Head title={title} />
            <Sidebar user={user} navigations={navigations}>
                {children}
            </Sidebar>
        </>
    );
}
