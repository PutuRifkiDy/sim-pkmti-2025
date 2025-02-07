import AdminLayout from "@/Layouts/AdminLayout";
import { useState, useEffect, useRef } from "react";
import { Link } from "@inertiajs/react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
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

export default function Dashboard({ auth, proposals, teams, users, proposal_ispending, get_teams }) {
    const [filters, setFilters] = useState(null);
    const [globalFilterValue, setGlobalFilterValue] = useState("");

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

    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(dataParticipants);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array'
            });

            saveAsExcelFile(excelBuffer, 'Peserta Build IT 2024');
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

    const renderHeader = () => {
        return (
            <div className="flex md:flex-row flex-col md:gap-0 gap-10 justify-between items-center">
                <Button type="button" icon="pi pi-filter-slash" label="Bersihkan Filter" outlined onClick={clearFilter} />
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText
                        value={globalFilterValue}
                        onChange={onGlobalFilterChange}
                        placeholder="Cari Data..."
                        className="p-inputtext-sm"
                    />
                </IconField>
                {/*
                <div className="flex align-items-center justify-content-end gap-2">
                    <Button type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
                    <Button type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
                </div> */}
            </div>
        );
    };

    const teamsData = get_teams.map((team) => ({
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
                                        className="font-bold bg-[#E82323] px-3 py-2 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#E82323]/70 dark:text-gray-400 dark:hover:text-white transition-all duration-300 shadow-[0_0_10px_#E82323] tooltip"
                                        method="delete"
                                        href={route("teams.kick", [rowData.id, member.id])}
                                        data-tip="Keluarkan Anggota Ini"
                                    >
                                        <UserMinusIcon className="h-4 w-4" />
                                    </Link>

                                    {member.nim !== rowData.leader_nim && (
                                        <Link
                                            as="button"
                                            className="font-bold bg-[#f5bc42] px-3 py-2 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#f5bc42]/70 dark:text-gray-400 dark:hover:text-white transition-all duration-300 shadow-[0_0_10px_#f5bc42] tooltip"
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
        const lecturers = get_teams.map((team) => ({
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
        const leaders = get_teams.map((team) => ({
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
        const teams = [...new Set(get_teams.map((team) => team.role))].map(team_name => ({
            label: team_name ? team_name : "-",
            value: team_name ? team_name : "-"
        }));

        return (
            <Dropdown
                value={options.value}
                options={teams}
                onChange={(e) => options.filterApplyCallback(e.value)}
                placeholder="Select Team"
                className="p-column-filter"
                showClear
            />
        );
    };

    return (
        <>
            <AdminLayout user={auth.user} title="Admin">
                <div className="flex flex-col md:flex-row justify-between gap-2">
                    <div className="flex flex-row gap-10 border-2 rounded-[14px] p-5 shadow">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-[16px] light:text-[#202224]/70 dark:text-white tracking-[0.03em]">Jumlah Pengguna</p>
                            <p className="font-bold text-[28px] tracking-[1px]">{users}</p>
                        </div>
                        <img src="/images/admin/icon-jumlah-pengguna.png" className="w-[60px] h-[60px]" alt="" />
                    </div>
                    <div className="flex flex-row gap-12 border-2 rounded-[14px] p-5 shadow">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-[16px] light:text-[#202224]/70 dark:text-white tracking-[0.03em]">Jumlah Tim</p>
                            <p className="font-bold text-[28px] tracking-[1px]">{teams}</p>
                        </div>
                        <img src="/images/admin/icon-jumlah-tim.png" className="w-[60px] h-[60px]" alt="" />
                    </div>
                    <div className="flex flex-row gap-12 border-2 rounded-[14px] p-5 shadow">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-[16px] light:text-[#202224]/70 dark:text-white tracking-[0.03em]">Jumlah Proposal</p>
                            <p className="font-bold text-[28px] tracking-[1px]">{proposals}</p>
                        </div>
                        <img src="/images/admin/icon-jumlah-proposal.png" className="w-[60px] h-[60px]" alt="" />
                    </div>
                    <div className="flex flex-row gap-12 border-2 rounded-[14px] p-5 shadow">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-[16px] light:text-[#202224]/70 dark:text-white tracking-[0.03em]">Jumlah Pending</p>
                            <p className="font-bold text-[28px] tracking-[1px]">
                                {proposal_ispending}
                            </p>
                        </div>
                        <img src="/images/admin/icon-pending.png" className="w-[60px] h-[60px]" alt="" />
                    </div>
                </div>

                <div className="border-2 px-8 py-8 rounded-[14px] mt-10 card">
                    <DataTable
                        value={teamsData}
                        paginator
                        showGridlines
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
                        className=""
                    >

                        <Column field="" header="#" body={rowNumberTemplate} filterPlaceholder="Cari Nama Tim" />
                        <Column field="team_name" header="Nama Tim" showFilterMenu={true} filterMenuStyle={{ width: '14rem' }} style={{ minWidth: '12rem' }} filter filterElement={NameTeamFilterTemplate} sortable filterPlaceholder="Cari Nama Tim" />
                        <Column
                            field="leader_name"
                            header="Nama Ketua"
                            showFilterMenu={true}
                            filterMenuStyle={{ width: '14rem' }}
                            style={{ minWidth: '12rem' }}
                            filter
                            filterElement={NameLeaderFilterTemplate}
                            sortable
                            filterPlaceholder="Cari Nama Ketua"
                        />
                        <Column
                            field="leader_nim"
                            header="NIM Ketua"
                            sortable
                            filterPlaceholder="Cari NIM Ketua"
                            style={{ minWidth: '10rem' }}
                        />
                        <Column
                            field="lecturer"
                            showFilterMenu={true}
                            filterMenuStyle={{ width: '14rem' }}
                            style={{ minWidth: '18rem' }}
                            header="Dosen Pembimbing"
                            filter
                            filterElement={statusDosenFilterTemplate}
                            filterPlaceholder="Cari Dosen"
                        />
                        <Column
                            field="token"
                            header="Token Tim"
                            sortable
                            filterPlaceholder="Cari Token"
                            style={{ minWidth: '10rem' }}
                        />
                        <Column field="token" header="Anggota" body={membersDetail} sortable filterPlaceholder="Cari Token" />
                    </DataTable>
                </div>
            </AdminLayout>
        </>
    );
}
