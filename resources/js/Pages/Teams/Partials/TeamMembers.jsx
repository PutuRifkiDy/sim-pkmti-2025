import { useParam } from "@/utils";
import {
    UserMinusIcon,
    ArrowsRightLeftIcon,
    UserIcon,
    TagIcon,
    CodeBracketSquareIcon,
} from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";
import { IconGabungTim } from "@/Components/IconAdmin";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";

function KickMember({ memberId }) {
    return (
        <div className="tooltip" data-tip="Keluarkan Anggota">
            <Link
                as="button"
                method="delete"
                className="font-bold bg-[#E82323] px-3 py-2 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#E82323]/70  transition-all duration-300 shadow-[0_0_10px_#E82323]"
                href={route("teams.kick", [useParam(1), memberId])}
            >
                <UserMinusIcon className="h-5 w-5" />
            </Link>
        </div>
    );
}

function ChangeLeader({ memberId }) {
    return (
        <div className="tooltip" data-tip="Ganti Ketua">
            <Link
                as="button"
                method="patch"
                className="font-bold bg-[#f5bc42] px-3 py-2 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#f5bc42]/70  transition-all duration-300 shadow-[0_0_10px_#f5bc42]"
                href={route("teams.changeLeader", [useParam(1), memberId])}
            >
                <ArrowsRightLeftIcon className="h-5 w-5" />
            </Link>
        </div>
    );
}

export default function TeamMembers({ user, team }) {
    const leaderFirst = team.members.sort((a) => (a.id === team.leader_id ? -1 : 0));

    const teamsData = team.members.map((member, i) => ({
        number: i + 1,
        nim: member.nim,
        name: member.name,
        angkatan: `20${member.nim.substring(0, 2)}`,
        role: member.id === user.id ? 'Saya' : 'Anggota',
        role_is_leader: team.leader_id === member.id ? 'Ketua' : '',
        email: member.email,
        phone: member.phone,
        line_id: member.line_id,
        id: member.id,
    }));

    return (
        <>
            <div className="flex flex-row items-center gap-4 mt-4 mb-4">
                <IconGabungTim />
                <span className="font-bold">{team.members.length} / {user.nim.includes('24') ? 3 : 5}</span>
            </div>
            <div className="card">
            <DataTable
                value={teamsData}
                paginator
                showGridlines
                rows={5}
                scrollable
                className="p-datatable-striped whitespace-nowrap overflow-x-auto "
                tableStyle={{ maxWidth: '50rem' }}
                >

                <Column field="nim" header="NIM" sortable />
                <Column field="name" header="Nama" sortable />
                <Column field="angkatan" header="Angkatan" sortable />
                <Column
                    field="role"
                    header="Jabatan"
                    sortable
                    body={(rowData) => (
                        <div className="flex flex-row items-center">
                            {rowData.role == 'Saya' && (
                                <div className="tooltip tooltip-bottom flex flex-row" data-tip="Saya">
                                    <TagIcon className="h-5 w-5 text-green-500 me-2" />
                                </div>
                            )}
                            {rowData.role == 'Saya' && rowData.role_is_leader != 'Ketua' && "Anggota"}
                            {rowData.role_is_leader == 'Ketua' && (
                                <div className="tooltip tooltip-bottom flex" data-tip="Ketua">
                                    <CodeBracketSquareIcon className="h-5 w-5 text-blue-500 me-2" />
                                    <p>Ketua</p>
                                </div>
                            )}
                            {rowData.role == "Anggota" && rowData.role_is_leader != 'Ketua' && "Anggota"}
                        </div>
                    )}
                />
                <Column field="email" header="Email" sortable />
                <Column field="phone" header="Telepon" sortable />
                <Column field="line_id" header="ID Line" sortable />

                <Column
                    header="Aksi"
                    body={(rowData) => (
                        <div className="flex gap-1">
                            {(user.id != rowData.id && user.id == team.leader_id) && (
                                <>
                                    <KickMember memberId={rowData.id} />
                                    <ChangeLeader memberId={rowData.id} />
                                </>
                            )}
                        </div>
                    )}
                />
            </DataTable>
        </div>
            {/* </div> */}
        </>
    );
}
