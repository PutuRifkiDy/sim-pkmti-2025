import AdminLayout from "@/Layouts/AdminLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ExportXLSXButton from "@/Components/ExportXLSXButton";
import { useState } from "react";
import { FilterMatchMode } from "primereact/api";
import {
    ArrowPathIcon,
    ArrowsRightLeftIcon,
    CheckIcon,
    EllipsisHorizontalIcon,
    ExclamationTriangleIcon,
    PencilIcon,
    TrashIcon,
    UserMinusIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, router } from "@inertiajs/react";
import Toast from "@/Components/Toast";
import { useIsObjectEmpty, useRandomInt } from "@/utils";

export default function ShowTeams({ auth, teams, flash, errors }) {
    const { user } = auth;

    // Select field that want to display
    const [selectedFields, setSelectedFields] = useState(
        teams.map((team) => {
            return {
                id: team.id,
                team_name: team.team_name,
                leader_name: team.leader ? team.leader.name : "",
                leader_nim: team.leader ? team.leader.nim : "",
                lecturer: team.lecturer ? team.lecturer.name : "",
                members: team.members,
                token: team.token,
            };
        })
    );

    console.log(selectedFields);

    // Search
    const [filter, setFilter] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });

    const onSearch = (e) => {
        const value = e.target.value;

        setFilter((prevFilter) => ({
            ...prevFilter,
            global: { value, matchMode: FilterMatchMode.CONTAINS },
        }));
    };

    // Edit
    const onRowEditComplete = (e) => {
        let _selectedFields = [...selectedFields];
        let { newData, index } = e;

        _selectedFields[index] = newData;
        const { id, team_name, token } = newData;
        const patchData = {
            team_name,
            token,
        };
        router.patch(route("teams.update", e.data.id), patchData);

        setSelectedFields(_selectedFields);
    };

    const textEditor = (rowData) => {
        return (
            <input
                type="text"
                className="input input-bordered input-sm"
                value={rowData.value}
                onChange={(e) => rowData.editorCallback(e.target.value)}
            />
        );
    };

    const membersDetail = (rowData) => {
        return (
            <>
                <button
                    className="btn btn-square btn-sm"
                    onClick={() =>
                        document
                            .getElementById(
                                "reject_proposal_modal" + rowData.id
                            )
                            .showModal()
                    }
                >
                    <EllipsisHorizontalIcon className="h-4 w-4" />
                </button>
                <dialog
                    id={"reject_proposal_modal" + rowData.id}
                    className="modal text-left"
                >
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-4">Anggota</h3>

                        {rowData.members.map((member, i) => {
                            return (
                                <div
                                    key={member.id}
                                    className="flex gap-2 mb-2 items-center"
                                >
                                    <span className="font-bold hidden md:inline">
                                        {member.nim}
                                    </span>
                                    <span className="font-bold md:hidden inline">
                                        {member.nim.substring(0, 2)}-
                                        {member.nim.substring(7, 10)}
                                    </span>
                                    <span>{member.name}</span>

                                    <Link
                                        as="button"
                                        className="btn btn-xs btn-square btn-error"
                                        method="delete"
                                        href={route("teams.kick", [
                                            rowData.id,
                                            member.id,
                                        ])}
                                    >
                                        <UserMinusIcon className="h-4 w-4" />
                                    </Link>
                                    {member.nim !== rowData.leader_nim && (
                                        <Link
                                            as="button"
                                            className="btn btn-xs btn-square btn-warning"
                                            method="patch"
                                            href={route("teams.changeLeader", [
                                                rowData.id,
                                                member.id,
                                            ])}
                                        >
                                            <ArrowsRightLeftIcon className="h-4 w-4" />
                                        </Link>
                                    )}
                                </div>
                            );
                        })}

                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Tutup</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </>
        );
    };

    return (
        <>
            {flash.msg && (
                <Toast
                    content={flash.msg}
                    key={useRandomInt()}
                    id="teams_update_information"
                />
            )}

            <AdminLayout user={user} title="Admin">
                <div className="w-full justify-start">
                    <div className="w-full flex lg:gap-4 flex-col-reverse lg:flex-row justify-end lg:text-right mb-4">
                        <div className="lg:text-right">
                            <input
                                autoComplete="search"
                                type="text"
                                className="input input-bordered join-item"
                                value={filter.global.value || ""}
                                onChange={onSearch}
                                placeholder="Cari"
                            />
                        </div>
                        <div className="flex gap-4">
                            <ExportXLSXButton exportedData={selectedFields} />
                            <button
                                className="btn btn-success btn-square"
                                onClick={() => window.location.reload()}
                            >
                                <ArrowPathIcon className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                    {!useIsObjectEmpty(errors) && (
                        <div className="alert alert-error mb-4" role="alert">
                            <ExclamationTriangleIcon className="h-6 w-6" />
                            <div>
                                <h3 className="font-bold">Kesalahan</h3>
                                {Object.keys(errors).map((key) => {
                                    return (
                                        <div className="text-xs" key={key}>
                                            {errors[key]}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    <div className="overflow-x-auto border-2 px-8 py-8 rounded-[14px] card">
                        <DataTable
                            value={selectedFields}
                            className="table table-zebra"
                            filters={filter}
                            editMode="row"
                            dataKey="id"
                            onRowEditComplete={onRowEditComplete}
                            rowEditorInitIcon={
                                <div className="btn btn-warning btn-square btn-sm mx-1">
                                    <PencilIcon className="h-4 w-4" />
                                </div>
                            }
                            rowEditorSaveIcon={
                                <div className="btn btn-warning btn-square btn-sm mx-1">
                                    <CheckIcon className="h-4 w-4" />
                                </div>
                            }
                            rowEditorCancelIcon={
                                <div className="btn btn-square btn-sm mx-1">
                                    <XMarkIcon className="h-4 w-4" />
                                </div>
                            }
                        >
                            <Column
                                editor={(rowData) => textEditor(rowData)}
                                key="team_name"
                                field="team_name"
                                header={<span className="me-2">Nama Tim</span>}
                                sortable
                            />
                            <Column
                                key="leader_nim"
                                field="leader_nim"
                                header={<span className="me-2">NIM Ketua</span>}
                                sortable
                            />
                            <Column
                                key="leader_name"
                                field="leader_name"
                                header={
                                    <span className="me-2">Nama Ketua</span>
                                }
                                sortable
                            />
                            <Column
                                key="lecturer"
                                field="lecturer"
                                header={
                                    <span className="me-2">
                                        Dosen Pembimbing
                                    </span>
                                }
                                sortable
                            />
                            <Column
                                key="members"
                                field="members"
                                body={membersDetail}
                                className="text-center"
                                header={<span className="me-2">Anggota</span>}
                            />
                            <Column
                                editor={(rowData) => textEditor(rowData)}
                                key="token"
                                field="token"
                                header={<span className="me-2">Token</span>}
                            />
                            <Column
                                rowEditor={true}
                                header={"Edit"}
                                className="whitespace-nowrap"
                                unstyled
                            />
                            <Column
                                header={"Hapus"}
                                body={(rowData) => {
                                    return (
                                        <Link
                                            as="button"
                                            method="delete"
                                            href={route(
                                                "teams.destroy",
                                                rowData.id
                                            )}
                                            className="btn btn-error btn-square btn-sm mx-1"
                                        >
                                            <TrashIcon className="h-4 w-4" />
                                        </Link>
                                    );
                                }}
                            />
                        </DataTable>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
