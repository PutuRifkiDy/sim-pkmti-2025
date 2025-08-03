import AdminLayout from "@/Layouts/AdminLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ExportXLSXButton from "@/Components/ExportXLSXButton";
import { useState, useEffect } from "react";
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
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from 'primereact/dropdown';
import { Link, router } from "@inertiajs/react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import Toast from "@/Components/Toast";
import { Tooltip } from 'primereact/tooltip';
import { useIsObjectEmpty, useRandomInt } from "@/utils";
import { ConfirmDialog } from "primereact/confirmdialog";


export default function ShowTeams({ auth, teams, flash, errors, total_teams }) {
    const { user } = auth;
    const [filters, setFilters] = useState(null);
    const [globalFilterValue, setGlobalFilterValue] = useState("");
    const [visible, setVisible] = useState(false);
    const [teamToDelete, setTeamToDelete] = useState(null);

    const [selectedFields, setSelectedFields] = useState(
        teams.map((team) => ({
            id: team.id,
            team_name: team.team_name,
            leader_name: team.leader ? team.leader.name : "-",
            leader_nim: team.leader ? team.leader.nim : "-",
            lecturer: team.lecturer ? team.lecturer.name : "-",
            token: team.token,
            members: team.members,
        }))
    );


    useEffect(() => {
        initFilters();
    }, []);


    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            team_name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            leader_name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            leader_nim: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            lecturer: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            token: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] }
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


    const teamsData = teams.map((team) => ({
        id: team.id,
        team_name: team.team_name,
        leader_name: team.leader ? team.leader.name : "-",
        leader_nim: team.leader ? team.leader.nim : "-",
        lecturer: team.lecturer ? team.lecturer.name : "-",
        token: team.token,
        members: team.members,
    }));


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
                    <div className="modal-box w-1/2 max-w-5xl">
                        <h3 className="font-bold text-lg mb-4">Anggota</h3>

                        <DataTable value={rowData.members}>
                            <Column field="nim" header="NIM" body={(member) => (
                                <span className="font-bold">
                                    {member.nim}
                                </span>
                            )} />
                            <Column field="name" header="Nama" />
                            <Column header="Aksi" body={(member) => (
                                <div className="flex gap-2">
                                    <Link
                                        as="button"
                                        className="font-bold bg-[#E82323] px-3 py-2 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#E82323]/70  transition-all duration-300 shadow-[0_0_10px_#E82323] tooltip"
                                        method="delete"
                                        href={route("teams.kick", [rowData.id, member.id])}
                                        data-tip="Keluarkan Anggota Ini"
                                    >
                                        <UserMinusIcon className="h-4 w-4" />
                                    </Link>

                                    {member.nim !== rowData.leader_nim && (
                                        <Link
                                            as="button"
                                            className="font-bold bg-[#f5bc42] px-3 py-2 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#f5bc42]/70  transition-all duration-300 shadow-[0_0_10px_#f5bc42] tooltip"
                                            method="patch"
                                            href={route("teams.changeLeader", [rowData.id, member.id])}
                                            data-tip="Ganti Menjadi Ketua Tim"
                                        >
                                            <ArrowsRightLeftIcon className="h-4 w-4" />
                                        </Link>
                                    )}
                                </div>
                            )} />
                        </DataTable>

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


    const rowNumberTemplate = (rowData, column) => column.rowIndex + 1;
    // const DosenFilter = (rowData) => {
    //     return <Tag value={rowData.lecturer} />;
    // };


    // const [lectures] = useState(rowData.lecturer)
    const statusDosenFilterTemplate = (options) => {
        const lecturers = teams.map((team) => ({
            label: team.lecturer ? team.lecturer.name : "-",
            value: team.lecturer ? team.lecturer.name : "-"
        }));

        return (
            <Dropdown
                value={options.value}
                options={lecturers}
                onChange={(e) => options.filterApplyCallback(e.value)}
                placeholder="Select Dosen"
                className="p-column-filter"
                showClear
            />
        );
    };


    const NameLeaderFilterTemplate = (options) => {
        const leaders = teams.map((team) => ({
            label: team.leader ? team.leader.name : "-",
            value: team.leader ? team.leader.name : "-"
        }));

        return (
            <Dropdown
                value={options.value}
                options={leaders}
                onChange={(e) => options.filterApplyCallback(e.value)}
                placeholder="Select Leader"
                className="p-column-filter"
                showClear
            />
        );
    };


    const NameTeamFilterTemplate = (options) => {
        const team_filter = [...new Set(teams.map((team) => team.team_name))].map(team_name => ({
            label: team_name ? team_name : "-",
            value: team_name ? team_name : "-"
        }));

        return (
            <Dropdown
                value={options.value}
                options={team_filter}
                onChange={(e) => options.filterApplyCallback(e.value)}
                placeholder="Select Team"
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
                        <Button type="button" className="export-button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="Export Sebagai CSV File" data-pr-position="top" />
                        <Button type="button" className="export-button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="Export Sebagai Excel File" data-pr-position="top" />
                    </div>
                </div>
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


    const handleDelete = () => {
        if (teamToDelete) {
            router.delete(route("admin.teams.destroy", teamToDelete.id), {
                onSuccess: () => {
                    setSelectedFields((prevData) =>
                        prevData.filter((teams) => teams.id !== teamToDelete.id)
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
                    id="teams_update_information"
                />
            )}

            <AdminLayout user={user} title="Admin">
                <div className="grid md:grid-cols-4 grid-cols-1 gap-2">
                    <div className="flex flex-row justify-between bg-white rounded-[14px] p-5 shadow">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-[16px] text-[#202224]/70 tracking-[0.03em] ">Total Tim PKM</p>
                            <p className="font-bold text-[28px] tracking-[1px] ">{total_teams ? total_teams : 0}</p>
                        </div>
                        <img src="/images/admin/icon-jumlah-pengguna.png" className="w-[60px] h-[60px]" alt="" />
                    </div>
                </div>
                <div className="w-full justify-start">
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
                    <div className="px-8 py-8 rounded-[14px] card bg-white mt-10 shadow">
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
                                header="#"
                                style={{ textAlign: 'center' }}
                                body={rowNumberTemplate}
                            />
                            <Column
                                editor={(rowData) => textEditor(rowData)}
                                key="team_name"
                                field="team_name"
                                header={<span className="me-2">Nama Tim</span>}
                                sortable
                                filter
                                filterElement={NameTeamFilterTemplate}
                                style={{ minWidth: '13rem' }}
                            />
                            <Column
                                key="leader_nim"
                                field="leader_nim"
                                header={<span className="me-2">NIM Ketua</span>}
                                sortable
                                style={{ minWidth: '12rem' }}
                            />
                            <Column
                                key="leader_name"
                                field="leader_name"
                                header={
                                    <span className="me-2">Nama Ketua</span>
                                }
                                sortable
                                filter
                                style={{ minWidth: '15rem' }}
                                filterElement={NameLeaderFilterTemplate}
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
                                filter
                                style={{ minWidth: '15rem' }}
                                filterElement={statusDosenFilterTemplate}
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
                                style={{ textAlign: 'center' }}
                                body={(rowData) => {
                                    return (
                                        <Button
                                            unstyled
                                            className="font-bold bg-[#E82323] px-3 py-3 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#E82323]/70  transition-all duration-300 shadow-[0_0_10px_#E82323] text-center"
                                            onClick={() => {
                                                setTeamToDelete(rowData);
                                                setVisible(true);
                                            }}
                                        ><TrashIcon className="w-4 h-4" /></Button>
                                    );
                                }}
                            ></Column>
                        </DataTable>
                    </div>
                </div>
            </AdminLayout>
            <ConfirmDialog
                visible={visible}
                onHide={() => setVisible(false)}
                message="Apakah Anda yakin ingin menghapus tim ini?"
                header="Konfirmasi Hapus"
                icon="pi pi-exclamation-triangle"
                accept={handleDelete}
                reject={() => setVisible(false)}
            />
        </>
    );
}
