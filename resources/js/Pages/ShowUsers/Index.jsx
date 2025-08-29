import ParticipantLayout from "@/Layouts/ParticipantLayout";
import { usePage } from "@inertiajs/react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import { useEffect } from "react";
import { useState } from "react";

export default function Index({ auth }) {
    const user = auth.user;
    const users_except_lecturer_user = usePage().props.users_except_lecturer_user;

    const [filters, setFilters] = useState(null);
    const [globalFilterValue, setGlobalFilterValue] = useState("");

    const userData = users_except_lecturer_user.map((user, i) => ({
        number: i + 1,
        nim: user.nim,
        name: user.name,
        angkatan: 20 + user.nim.substring(0, 2),
        phone: user.phone,
        line_id: user.line_id,
        email: user.email,
        have_team: user.team_id == null ? 'Belum Punya Tim' : 'Punya Tim',
    }));

    useEffect(() => {
        initFilters();
    }, []);

    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            angkatan: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            have_team: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
            nim: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            phone: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            line_id: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
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

    const AngkatanFilterTemplate = (props) => {
        const angkatanData = [...new Set(users_except_lecturer_user.map((user) => 20 + user.nim.substring(0, 2)))].map(angkatan => ({
            label: angkatan,
            value: angkatan
        }));

        return (
            <Dropdown
                value={props.value}
                options={angkatanData}
                onChange={(e) => props.filterApplyCallback(e.value)}
                placeholder="Filter Angkatan"
                className="p-column-filter"
                showClear
            />
        );
    };

    const TeamFilterTemplate = (props) => {
        const options = [
            { label: 'Punya Tim', value: 'Punya Tim' },
            { label: 'Belum Punya Tim', value: 'Belum Punya Tim' },
        ];

        return (
            <Dropdown
                value={props.value}
                options={options}
                onChange={(e) => props.filterApplyCallback(e.value)}
                placeholder="Filter Tim"
                className="p-column-filter"
                showClear
            />
        );
    };

    const HaveTeamTemplate = (rowData) => {
        if (rowData.have_team == "Belum Punya Tim") {
            return <span className="text-red-500">Belum Punya Tim</span>;
        } else {
            return <span className="text-green-500">Punya Tim</span>;
        }
    }

    const renderHeader = () => {
        return (
            <>
                <div className="flex md:flex-row flex-col md:gap-0 gap-5 justify-between items-center">
                    <div className="flex md:flex-row flex-col gap-2">
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
                </div>
            </>
        );
    };


    return (
        <>
            <ParticipantLayout title={"Cari Anggota Tim"} header={"Cari Anggota"} user={user}>
                <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 mb-6">

                    <header className="mb-5">
                        <h2 className="text-lg font-medium text-gray-900 ">Informasi peserta PKM TI 2025</h2>

                        <p className="mt-1 text-sm text-gray-600">
                            Temukkan anggota tim pada pelatihan PKM TI 2025.
                        </p>
                    </header>

                    <DataTable
                        value={userData}
                        filters={filters}
                        paginator
                        rows={10}
                        header={renderHeader}
                        rowsPerPageOptions={[10, 25, 50, 100, 200]}
                        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                        currentPageReportTemplate="{first} to {last} of {totalRecords}"
                        emptyMessage="Tidak ada data ditemukan."
                        scrollable
                        className="p-datatable-striped whitespace-nowrap overflow-x-auto "
                        tableStyle={{ maxWidth: '50rem' }}
                    >
                        <Column field="number" header="No" sortable />
                        <Column field="have_team" header="Status Tim" filter body={HaveTeamTemplate} sortable filterElement={TeamFilterTemplate} />
                        <Column field="nim" header="NIM" sortable />
                        <Column field="name" header="Nama" sortable />
                        <Column field="angkatan" header="Angkatan" sortable filter filterElement={AngkatanFilterTemplate} />
                        <Column field="email" header="Email" sortable />
                        <Column field="phone" header="Telepon" sortable />
                        <Column field="line_id" header="ID Line" sortable />
                    </DataTable>
                </div>
            </ParticipantLayout>
        </>
    );
}
