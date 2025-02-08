import AdminLayout from "@/Layouts/AdminLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ExportXLSXButton from "@/Components/ExportXLSXButton";
import { useState } from "react";
import { FilterMatchMode } from "primereact/api";
import {
    ArrowPathIcon,
    CheckIcon,
    EllipsisHorizontalIcon,
    ExclamationTriangleIcon,
    PaperClipIcon,
    PencilIcon,
    PhotoIcon,
    TrashIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, router, useForm } from "@inertiajs/react";
import Toast from "@/Components/Toast";
import { useIsObjectEmpty, useRandomInt, useTruncatedString } from "@/utils";

export default function ShowProposals({ auth, proposals, flash, errors }) {
    const { user } = auth;

    // Select field that want to display
    const [selectedFields, setSelectedFields] = useState(
        proposals.map((proposal) => {
            return {
                id: proposal.id,
                title: proposal.title,
                description: proposal.description,
                team_id: proposal.team.id,
                team_name: proposal.team.team_name,
                lecturer: proposal.team.lecturer
                    ? proposal.team.lecturer.name
                    : "",
                scheme: proposal.scheme,
                draft_proposal_url: proposal.draft_proposal_url,
                final_proposal_url: proposal.final_proposal_url,
                note: proposal.note,
                assistance_proofs: proposal.team.assistance_proofs,
                status: proposal.status,
            };
        })
    );

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
        const {
            team_id,
            title,
            scheme,
            draft_proposal_url,
            final_proposal_url,
            note,
        } = newData;
        const patchData = {
            title,
            scheme,
            draft_proposal_url,
            final_proposal_url,
            note,
        };
        router.patch(route("proposals.update", e.data.team_id), patchData);

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

    // status badge
    const statusBadge = (rowData) => {
        const status = rowData.status;
        const statuses = {
            approved: { style: "badge-success", content: "Diterima" },
            rejected: { style: "badge-error", content: "Ditolak" },
            pending: { style: "badge-warning", content: "Diperiksa" },
        };

        return (
            <div className={`badge p-3 ${statuses[status].style}`}>
                {statuses[status].content}
            </div>
        );
    };

    const rejectAction = (rowData) => {
        const { data, setData, patch, errors } = useForm({
            note: rowData.note,
        });

        const submit = (e) => {
            e.preventDefault();

            patch(route("proposals.reject", rowData.id));
            document
                .getElementById("reject_proposal_modal" + rowData.id)
                .close();
        };

        return (
            <>
                <button
                    onClick={() =>
                        document
                            .getElementById(
                                "reject_proposal_modal" + rowData.id
                            )
                            .showModal()
                    }
                    className="btn btn-error btn-square btn-sm mx-1"
                >
                    <XMarkIcon className="h-4 w-4" />
                </button>
                <dialog
                    id={"reject_proposal_modal" + rowData.id}
                    className="modal"
                >
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Catatan</h3>
                        <form
                            onSubmit={submit}
                            id={"reject_proposal_form" + rowData.id}
                        >
                            <div className="form-control my-4">
                                <p className="py-4">
                                    Mohon berikan catatan kesalahan!
                                </p>

                                <textarea
                                    id="note"
                                    type="text"
                                    name="note"
                                    rows="3"
                                    value={data.note}
                                    onChange={(e) =>
                                        setData("note", e.target.value)
                                    }
                                    className="textarea textarea-bordered"
                                ></textarea>

                                {errors.note && (
                                    <p className="mt-2 text-error">
                                        {errors.note}
                                    </p>
                                )}
                            </div>
                        </form>
                        <div className="modal-action">
                            <form method="dialog">
                                <button
                                    className="btn btn-error me-2"
                                    form={"reject_proposal_form" + rowData.id}
                                >
                                    Tolak Proposal
                                </button>
                                <button className="btn">Batal</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </>
        );
    };

    const displayAssistanceProofs = (rowData) => {
        return (
            <>
                <button
                    onClick={() =>
                        document
                            .getElementById("proofs_modal" + rowData.id)
                            .showModal()
                    }
                    className="btn btn-square btn-sm mx-1"
                >
                    <EllipsisHorizontalIcon className="h-4 w-4" />
                </button>
                <dialog id={"proofs_modal" + rowData.id} className="modal">
                    <div className="modal-box text-left">
                        <h3 className="font-bold text-lg mb-2">
                            Bukti Asistensi
                        </h3>
                        <p className="mb-4">
                            Daftar bukti asistensi {rowData.team_name}
                        </p>

                        {rowData.assistance_proofs &&
                            rowData.assistance_proofs.map((proof, i) => {
                                return (
                                    <div
                                        key={proof.id}
                                        className="flex items-center mb-4 justify-between mx-1"
                                    >
                                        <div>
                                            <p className="font-bold text-xs mb-1">
                                                BUKTI {i + 1}
                                            </p>
                                            <p className="font-bold text-sm">
                                                Tanggal :&nbsp;
                                                {proof.assistance_date}
                                            </p>
                                            <a
                                                href={proof.proof_url}
                                                className="font-bold text-sm"
                                            >
                                                URL :&nbsp;
                                                {useTruncatedString(
                                                    proof.proof_url,
                                                    15
                                                )}
                                            </a>
                                        </div>
                                        <div
                                            className="tooltip"
                                            data-tip="Kunjungi URL"
                                        >
                                            <a
                                                href={proof.proof_url}
                                                className="btn btn-square "
                                            >
                                                <PhotoIcon className="h-6 w-6" />
                                            </a>
                                        </div>
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
                    id="proposals_update_information"
                />
            )}

            <AdminLayout user={user} title="Admin">
                <div className="w-full justify-start">
                    {/* <div className="w-full flex lg:gap-4 flex-col-reverse lg:flex-row justify-end lg:text-right mb-4">
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
                    </div> */}
                    <div className="flex flex-col md:flex-row justify-between gap-2">
                        <div className="flex flex-row gap-10 rounded-[14px] p-5 bg-white shadow">
                            <div className="flex flex-col gap-1">
                                <p className="font-medium text-[16px] light:text-[#202224]/70 dark:text-white tracking-[0.03em]">Jumlah Proposal</p>
                                <p className="font-bold text-[28px] tracking-[1px]">{users}</p>
                            </div>
                            <img src="/images/admin/icon-jumlah-pengguna.png" className="w-[60px] h-[60px]" alt="" />
                        </div>
                        <div className="flex flex-row gap-12 rounded-[14px] p-5 bg-white shadow">
                            <div className="flex flex-col gap-1">
                                <p className="font-medium text-[16px] light:text-[#202224]/70 dark:text-white tracking-[0.03em]">Jumlah Diterima</p>
                                <p className="font-bold text-[28px] tracking-[1px]">{teams}</p>
                            </div>
                            <img src="/images/admin/icon-jumlah-tim.png" className="w-[60px] h-[60px]" alt="" />
                        </div>
                        <div className="flex flex-row gap-12 rounded-[14px] p-5 bg-white shadow">
                            <div className="flex flex-col gap-1">
                                <p className="font-medium text-[16px] light:text-[#202224]/70 dark:text-white tracking-[0.03em]">Jumlah Diperiksa</p>
                                <p className="font-bold text-[28px] tracking-[1px]">{proposals}</p>
                            </div>
                            <img src="/images/admin/icon-jumlah-proposal.png" className="w-[60px] h-[60px]" alt="" />
                        </div>
                        <div className="flex flex-row gap-12 rounded-[14px] p-5 bg-white shadow">
                            <div className="flex flex-col gap-1">
                                <p className="font-medium text-[16px] light:text-[#202224]/70 dark:text-white tracking-[0.03em]">Jumlah Ditolak</p>
                                <p className="font-bold text-[28px] tracking-[1px]">
                                    {proposal_ispending}
                                </p>
                            </div>
                            <img src="/images/admin/icon-pending.png" className="w-[60px] h-[60px]" alt="" />
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
                                key="title"
                                field="title"
                                className="min-w-64"
                                header={<span className="me-2">Judul</span>}
                                sortable
                            />
                            <Column
                                editor={(rowData) => textEditor(rowData)}
                                key="description"
                                field="description"
                                className="min-w-64"
                                header={
                                    <span className="me-2">Gambaran Umum</span>
                                }
                                body={(rowData) =>
                                    rowData.description &&
                                    useTruncatedString(rowData.description, 150)
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
                                key="team_name"
                                field="team_name"
                                header={<span className="me-2">Nama Tim</span>}
                                sortable
                            />
                            <Column
                                editor={(rowData) => textEditor(rowData)}
                                key="scheme"
                                field="scheme"
                                header={<span className="me-2">Skema PKM</span>}
                                sortable
                            />
                            <Column
                                editor={(rowData) => textEditor(rowData)}
                                key="draft_proposal_url"
                                field="draft_proposal_url"
                                header="Proposal Draf"
                                className="text-center"
                                body={(rowData) => {
                                    return (
                                        rowData.draft_proposal_url && (
                                            <a
                                                href={
                                                    rowData.draft_proposal_url
                                                }
                                                className="btn btn-sm btn-square"
                                            >
                                                <PaperClipIcon className="h-4 w-4" />
                                            </a>
                                        )
                                    );
                                }}
                            />
                            <Column
                                editor={(rowData) => textEditor(rowData)}
                                key="final_proposal_url"
                                field="final_proposal_url"
                                header="Proposal Final"
                                className="text-center"
                                body={(rowData) => {
                                    return (
                                        rowData.final_proposal_url && (
                                            <a
                                                href={
                                                    rowData.final_proposal_url
                                                }
                                                className="btn btn-sm btn-square"
                                            >
                                                <PaperClipIcon className="h-4 w-4" />
                                            </a>
                                        )
                                    );
                                }}
                            />
                            <Column
                                editor={(rowData) => textEditor(rowData)}
                                key="note"
                                field="note"
                                header={<span className="me-2">Catatan</span>}
                                sortable
                            />
                            <Column
                                key="assistance_proofs"
                                field="assistance_proofs"
                                body={displayAssistanceProofs}
                                header="Bukti Asistensi"
                                className="text-center"
                            />
                            <Column
                                body={statusBadge}
                                key="status"
                                field="status"
                                header={<span className="me-2">Status</span>}
                                sortable
                            />
                            <Column
                                header={"Setuju"}
                                key="accept"
                                body={(rowData) => {
                                    return (
                                        <Link
                                            as="button"
                                            method="patch"
                                            href={route(
                                                "proposals.accept",
                                                rowData.id
                                            )}
                                            className="btn btn-success btn-square btn-sm mx-1"
                                        >
                                            <CheckIcon className="h-4 w-4" />
                                        </Link>
                                    );
                                }}
                            />
                            <Column
                                key="reject"
                                header={"Tolak"}
                                body={rejectAction}
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
                                                "proposals.destroy",
                                                rowData.team_id
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
