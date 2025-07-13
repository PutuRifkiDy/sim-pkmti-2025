import AdminLayout from "@/Layouts/AdminLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ExportXLSXButton from "@/Components/ExportXLSXButton";
import { useState, useEffect } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from 'primereact/dropdown';
import { ConfirmDialog } from "primereact/confirmdialog";
import { Tooltip } from 'primereact/tooltip';
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
import { Link, router, useForm, usePage } from "@inertiajs/react";
import Toast from "@/Components/Toast";
import { useIsObjectEmpty, useRandomInt, useTruncatedString } from "@/utils";

export default function ShowProposals({ auth, proposals, flash, errors, total_proposal, total_pending, total_accept, total_reject }) {
    const { user } = auth;
    const { props } = usePage();
    const [filters, setFilters] = useState(null);
    const [globalFilterValue, setGlobalFilterValue] = useState("");
    const [visible, setVisible] = useState(false);
    const [proposalToDelete, setProposalToDelete] = useState(null);

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

    useEffect(() => {
        setSelectedFields(
            props.proposals.map((proposal) => {
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
        initFilters(); // Inisialisasi filter saat data berubah
    }, [props.proposals]);

    useEffect(() => {
        initFilters();
    }, []);


    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            scheme: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            status: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        });
        setGlobalFilterValue("");
    };


    const clearFilter = () => {
        initFilters();
    };


    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters["global"].value = value;

        setFilters(_filters);
        setGlobalFilterValue(value);
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
            approved: { style: "font-bold bg-[#4DE45C] px-3 py-1 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white  transition-all duration-300 shadow-[0_0_10px_#4DE45C]", content: "Diterima" },
            rejected: { style: "font-bold bg-[#F93C65] px-3 py-1 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white  transition-all duration-300 shadow-[0_0_10px_#F93C65]", content: "Ditolak" },
            pending: { style: "font-bold bg-[#CFD249] px-3 py-1 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white  transition-all duration-300 shadow-[0_0_10px_#CFD249]", content: "Diperiksa" },
        };

        return (
            <div className={`${statuses[status].style}`}>
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

            patch(route("proposals.reject", rowData.id), {
                onSuccess: () => {
                    // Ini akan memicu useEffect yang memperbarui selectedFields
                    // karena props.proposals akan direfresh oleh Inertia.
                }
            });
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
                    className="font-bold bg-[#E82323] px-3 py-3 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white  transition-all duration-300 shadow-[0_0_10px_#E82323]"
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


    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(selectedFields);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array'
            });

            saveAsExcelFile(excelBuffer, 'Peserta PKM TI 2025');
        });
    };



    const saveAsExcelFile = (buffer, fileName) => {
        import('file-saver').then((module) => {
            if (module && module.default) {
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], { type: EXCEL_TYPE });

                module.default.saveAs(data, fileName + '_export_' + new Date().toLocaleDateString() + EXCEL_EXTENSION);
            }
        });
    };


    const exportPdf = () => {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default();

                const columns = Object.keys(selectedFields[0]).map(key => ({ title: key, dataKey: key }));
                const rows = selectedFields.map(item => Object.values(item));

                doc.autoTable({
                    head: [columns.map(col => col.title)], // Header
                    body: rows, // Isi tabel
                });

                doc.save('Peserta_PKM_TI_2025.pdf');
            });
        });
    };


    const rowNumberTemplate = (rowData, column) => column.rowIndex + 1;


    const SkemaPKMFilterTemplate = (options) => {
        const scheme_proposal = [...new Set(proposals.map((proposal) => proposal.scheme))].map(scheme => ({
            label: scheme ? scheme : "-",
            value: scheme ? scheme : "-"
        }));

        return (
            <Dropdown
                value={options.value}
                options={scheme_proposal}
                onChange={(e) => options.filterApplyCallback(e.value)}
                placeholder="Select Skema"
                className="p-column-filter"
                showClear
            />
        );
    };


    const StatusFilterTemplate = (options) => {
        const status_proposal = [...new Set(proposals.map((proposal) => proposal.status))].map(status => ({
            label: status ? status : "-",
            value: status ? status : "-"
        }));

        return (
            <Dropdown
                value={options.value}
                options={status_proposal}
                onChange={(e) => options.filterApplyCallback(e.value)}
                placeholder="Select Status"
                className="p-column-filter"
                showClear
            />
        );
    };


    const renderHeader = () => {
        return (
            <>
                <Tooltip target=".export-button" />
                <div className="flex md:flex-row flex-col md:gap-0 gap-5 justify-between items-center">
                    <div className="flex flex-row gap-2">
                        <IconField iconPosition="left">
                            <InputIcon className="pi pi-search" />
                            <InputText
                                value={globalFilterValue}
                                onChange={onGlobalFilterChange}
                                placeholder="Cari Data..."
                                className=""
                            />
                        </IconField>
                        <Button type="button" icon="pi pi-filter-slash" label="Bersihkan Filter" outlined onClick={clearFilter} />
                    </div>

                    <div className="flex flex-row gap-2">
                        <Button type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="Export Sebagai PDF File" data-pr-position="top" className="export-button" />
                        <Button type="button" className="export-button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="Export Sebagai CSV File" data-pr-position="top" />
                        <Button type="button" className="export-button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="Export Sebagai Excel File" data-pr-position="top" />
                    </div>
                </div>
            </>
        );
    };


    const handleDelete = () => {
        if (proposalToDelete) {
            router.delete(route("proposals.destroy", proposalToDelete.team_id), {
                onSuccess: () => {
                    setSelectedFields((prevData) =>
                        prevData.filter((proposals) => proposals.id !== proposalToDelete.id)
                    );
                },
                onError: () => {
                    alert("Penghapusan gagal.");
                }
            });
        }
        setVisible(false);
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
                <div className="flex flex-col md:flex-row justify-between gap-2 mt-5">
                    <div className="flex flex-row gap-10 rounded-[14px] p-5 bg-white  shadow">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-[16px] light:text-[#202224]/70  tracking-[0.03em]">Jumlah Proposal</p>
                            <p className=" font-bold text-[28px] tracking-[1px]">{total_proposal}</p>
                        </div>
                        <img src="/images/admin/icon-jumlah-pengguna.png" className="w-[60px] h-[60px]" alt="" />
                    </div>
                    <div className="flex flex-row gap-12 rounded-[14px] p-5 bg-white  shadow">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-[16px] light:text-[#202224]/70  tracking-[0.03em]">Jumlah Diterima</p>
                            <p className=" font-bold text-[28px] tracking-[1px]">{total_accept}</p>
                        </div>
                        <img src="/images/admin/icon-jumlah-tim.png" className="w-[60px] h-[60px]" alt="" />
                    </div>
                    <div className="flex flex-row gap-12 rounded-[14px] p-5 bg-white  shadow">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-[16px] light:text-[#202224]/70  tracking-[0.03em]">Jumlah Diperiksa</p>
                            <p className=" font-bold text-[28px] tracking-[1px]">{total_pending}</p>
                        </div>
                        <img src="/images/admin/icon-jumlah-proposal.png" className="w-[60px] h-[60px]" alt="" />
                    </div>
                    <div className="flex flex-row gap-12 rounded-[14px] p-5 bg-white  shadow">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-[16px] light:text-[#202224]/70  tracking-[0.03em]">Jumlah Ditolak</p>
                            <p className="font-bold text-[28px] tracking-[1px] ">
                                {total_reject}
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
                <div className="px-8 py-8 rounded-[14px] bg-white  mt-10 shadow">
                    <DataTable
                        paginator
                        showGridlines
                        value={selectedFields}
                        selectionMode="single"
                        dataKey="id"
                        rows={10}
                        rowsPerPageOptions={[10, 25, 50, 100, 200]}
                        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                        currentPageReportTemplate="{first} to {last} of {totalRecords}"
                        filters={filters}
                        globalFilterFields={["team_name", "leader_name", "leader_nim", "lecturer", "token"]}
                        header={renderHeader()}
                        emptyMessage="Tidak ada data ditemukan."
                        onFilter={(e) => setFilters(e.filters)}
                        tableStyle={{ minWidth: '50rem' }}
                        editMode="row"
                        onRowEditComplete={onRowEditComplete}
                        rowEditorInitIcon={
                            <div className=" bg-yellow-400 btn-sm text-center flex justify-center items-center mx-1">
                                <PencilIcon className="h-4 w-4 fill-white" />
                            </div>
                        }
                        rowEditorSaveIcon={
                            <div className="bg-green-400 btn-sm text-center flex justify-center items-center mx-1">
                                <CheckIcon className="h-4 w-4 fill-white" />
                            </div>
                        }
                        rowEditorCancelIcon={
                            <div className="bg-red-600 btn-sm text-center flex justify-center items-center mx-1">
                                <XMarkIcon className="h-4 w-4 fill-white" />
                            </div>
                        }
                    >
                        <Column
                            key="nomor"
                            field="nomor"
                            className="text-center"
                            body={rowNumberTemplate}
                            header={<span className="me-2">#</span>}
                        />
                        <Column
                            editor={(rowData) => textEditor(rowData)}
                            key="title"
                            field="title"
                            className="min-w-64 text-justify"
                            header={<span className="me-2">Judul</span>}
                            sortable
                        />
                        <Column
                            editor={(rowData) => textEditor(rowData)}
                            key="description"
                            field="description"
                            className="min-w-96 text-justify"
                            header={
                                <span className="me-2">Gambaran Umum</span>
                            }
                            body={(rowData) =>
                                rowData.description &&
                                useTruncatedString(rowData.description, 150)
                            }
                        />
                        <Column
                            key="lecturer"
                            field="lecturer"
                            className="min-w-64"
                            header={
                                <span className="me-2">
                                    Dosen Pembimbing
                                </span>
                            }
                        />
                        <Column
                            key="team_name"
                            field="team_name"
                            className="min-w-48"
                            header={<span className="me-2">Nama Tim</span>}
                            sortable
                        />
                        <Column
                            editor={(rowData) => textEditor(rowData)}
                            key="scheme"
                            field="scheme"
                            className="min-w-48"
                            header={<span className="me-2">Skema PKM</span>}
                            sortable
                            filter
                            filterElement={SkemaPKMFilterTemplate}
                        />
                        <Column
                            editor={(rowData) => textEditor(rowData)}
                            key="draft_proposal_url"
                            field="draft_proposal_url"
                            header="Proposal Draf"
                            className="text-center min-w-44"
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
                            className="text-center min-w-44"
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
                            className="min-w-96 text-justify"
                        />
                        <Column
                            key="assistance_proofs"
                            field="assistance_proofs"
                            body={displayAssistanceProofs}
                            header="Bukti Asistensi"
                            className="text-center min-w-44"
                        />
                        <Column
                            body={statusBadge}
                            key="status"
                            field="status"
                            className="min-w-44 text-center"
                            header={<span className="me-2">Status</span>}
                            sortable
                            filter
                            filterElement={StatusFilterTemplate}
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
                                        className="font-bold bg-[#4DE45C] px-3 py-3 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white  transition-all duration-300 shadow-[0_0_10px_#4DE45C]"
                                        onSuccess={() => {
                                            // Saat permintaan berhasil, perbarui status di state lokal
                                            setSelectedFields((prevFields) =>
                                                prevFields.map((proposal) =>
                                                    proposal.id === rowData.id
                                                        ? { ...proposal, status: 'approved' }
                                                        : proposal
                                                )
                                            );
                                        }}
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
                            className="text-center"
                            unstyled
                        />
                        <Column
                            header={"Hapus"}
                            style={{ textAlign: 'center' }}
                            body={(rowData) => {
                                return (
                                    <Button
                                        unstyled
                                        className="font-bold bg-[#E82323] px-3 py-3 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#E82323]/70  transition-all duration-300 shadow-[0_0_10px_#E82323] text-center"
                                        onClick={() => {
                                            setProposalToDelete(rowData);
                                            setVisible(true);
                                        }}
                                    ><TrashIcon className="w-4 h-4" /></Button>
                                );
                            }}
                        ></Column>
                    </DataTable>
                </div>
            </AdminLayout>
            <ConfirmDialog
                visible={visible}
                onHide={() => setVisible(false)}
                message="Apakah Anda yakin ingin menghapus proposal ini?"
                header="Konfirmasi Hapus"
                icon="pi pi-exclamation-triangle"
                accept={handleDelete}
                reject={() => setVisible(false)}
            />
        </>
    );
}
