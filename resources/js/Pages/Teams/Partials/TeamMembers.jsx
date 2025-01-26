import { useParam } from "@/utils";
import {
    UserMinusIcon,
    ArrowsRightLeftIcon,
    UserIcon,
    TagIcon,
    CodeBracketSquareIcon,
} from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";

function KickMember({ memberId }) {
    return (
        <div className="tooltip" data-tip="Keluarkan Anggota">
            <Link
                as="button"
                method="delete"
                className="btn btn-square btn-error btn-sm"
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
                className="btn btn-square btn-warning btn-sm"
                href={route("teams.changeLeader", [useParam(1), memberId])}
            >
                <ArrowsRightLeftIcon className="h-5 w-5" />
            </Link>
        </div>
    );
}

export default function TeamMembers({ user, team }) {
    const leaderFirst = team.members.sort((a) =>
        a.id === team.leader_id ? -1 : 0
    );

    return (
        <>
            <div>
                <h3 className="font-bold text-xs mb-4">ANGGOTA TIM</h3>
                <div className="flex gap-2 mb-4">
                    <UserIcon className="h-6 w-6" />
                    <span className="font-bold">{team.members.length} / 5</span>
                </div>
                <div className="overflow-x-auto max-w-96">
                    <table className="table table-zebra mb-4 whitespace-nowrap">
                        <thead>
                            <tr>
                                <th></th>
                                <th>NIM</th>
                                <th>Nama</th>
                                <th>Angkatan</th>
                                <th>Jabatan</th>
                                <th>Email</th>
                                <th>Telepon</th>
                                <th>ID Line</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {team.members.map((member, i) => {
                                return (
                                    <tr key={member.id}>
                                        <th>{i + 1}</th>
                                        <td>{member.nim}</td>
                                        <td>{member.name}</td>
                                        <td>20{member.nim.substring(0, 2)}</td>
                                        <td className="flex">
                                            {member.id === user.id && (
                                                <div
                                                    className="tooltip"
                                                    data-tip="Saya"
                                                >
                                                    <TagIcon className="h-5 w-5 me-2" />
                                                </div>
                                            )}
                                            {(team.leader_id === member.id && (
                                                <>
                                                    <div
                                                        className="tooltip"
                                                        data-tip="Ketua"
                                                    >
                                                        <CodeBracketSquareIcon className="h-5 w-5 me-2" />
                                                    </div>
                                                    Ketua
                                                </>
                                            )) ||
                                                "Anggota"}
                                        </td>
                                        <td>{member.email}</td>
                                        <td>{member.phone}</td>
                                        <td>{member.line_id}</td>
                                        <td className="flex gap-1">
                                            {/* Kick member */}
                                            {user.id !== member.id &&
                                                (user.role === "admin" ||
                                                    user.id ===
                                                        team.leader_id) && (
                                                    <>
                                                        <KickMember
                                                            memberId={member.id}
                                                        />
                                                        <ChangeLeader
                                                            memberId={member.id}
                                                        />
                                                    </>
                                                )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
