import AdminLayout from "@/Layouts/AdminLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import ExportXLSXButton from "@/Components/ExportXLSXButton";
import { useState, useEffect, useRef } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Dropdown } from 'primereact/dropdown';
import { Tooltip } from 'primereact/tooltip';
import { ConfirmDialog } from "primereact/confirmdialog";
import {
    ArrowPathIcon,
    CheckIcon,
    ExclamationTriangleIcon,
    PencilIcon,
    TrashIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, router } from "@inertiajs/react";
import Toast from "@/Components/Toast";
import { useIsObjectEmpty, useRandomInt } from "@/utils";

export default function Users({ auth, users, flash, errors, akt21, akt22, akt23, akt24 }) {
    const { user } = auth;
    const [visible, setVisible] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    const [selectedFields, setSelectedFields] = useState(
        users.map((user) => {
            return {
                id: user.id,
                nim: user.nim,
                name: user.name,
                role: user.role,
                class_of: 20 + user.nim.substring(0, 2),
                phone: user.phone,
                line_id: user.line_id,
                email: user.email,
                status: user.status,
            };
        })
    );

    // Search
    const [filters, setFilters] = useState(null);
    const [globalFilterValue, setGlobalFilterValue] = useState("");


    useEffect(() => {
        initFilters();
    }, []);

    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            role: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            status: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            class_of: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
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
        router.patch(route("users.update", e.data.id), newData);

        setSelectedFields(_selectedFields);
    };

    const textEditor = (rowData) => {
        return (
            <input
                type="text"
                className="input input-bordered"
                value={rowData.value}
                onChange={(e) => rowData.editorCallback(e.target.value)}
            />
        );
    };

    const selectEditor = (rowData) => {
        return (
            <select id="" value={rowData.value} onChange={(e) => rowData.editorCallback(e.target.value)} className="input input-bordered">
                <option value="participant">Participant</option>
                <option value="admin">Admin</option>
                <option value="lecturer">Dosen</option>
            </select>
        );
    }

    // status badge
    const statusBadge = (rowData) => {
        const status = rowData.status;
        const statuses = {
            passed: { style: "font-bold bg-[#00B69B] px-3 py-1 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white dark:text-gray-400 dark:hover:text-white transition-all duration-300 shadow-[0_0_10px_#00B69B]", content: "Lulus" },
            failed: { style: "font-bold bg-[#F93C65] px-3 py-1 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white dark:text-gray-400 dark:hover:text-white transition-all duration-300 shadow-[0_0_10px_#F93C65]", content: "Gagal" },
        };

        return (
            <div className={`${statuses[status].style}`}>
                {statuses[status].content}
            </div>
        );
    };

    const dt = useRef(null);

    const exportCSV = (selectionOnly) => {
        dt.current.exportCSV({ selectionOnly });
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

    const RoleFilterTemplate = (props) => {
        const user_data = [...new Set(users.map((user) => user.role))].map(role => ({
            label: role ? role : "-",
            value: role ? role : "-"
        }));


        return (
            <Dropdown
                value={props.value}
                options={user_data}
                onChange={(e) => props.filterApplyCallback(e.value)}
                placeholder="Select Role"
                className="p-column-filter"
                showClear
            />
        );
    };

    const AngkatanFilterTemplate = (props) => {
        const angkatanData = [...new Set(users.map((user) => 20 + user.nim.substring(0, 2)))].map(angkatan => ({
            label: angkatan,
            value: angkatan
        }));

        return (
            <Dropdown
                value={props.value}
                options={angkatanData}  // Menyaring data agar tidak duplikat
                onChange={(e) => props.filterApplyCallback(e.value)}
                placeholder="Select Angkatan"
                className="p-column-filter"
                showClear
            />
        );
    };


    const StatusFilterTemplate = (props) => {
        const user_data = [...new Set(users.map((user) => user.status))].map(status => ({
            label: status ? status : "-",
            value: status ? status : "-"
        }));


        return (
            <Dropdown
                value={props.value}
                options={user_data}
                onChange={(e) => props.filterApplyCallback(e.value)}
                placeholder="Select Role"
                className="p-column-filter"
                showClear
            />
        );
    };


    // Fungsi untuk menangani penghapusan
    const handleDelete = () => {
        if (userToDelete) {
            router.delete(route("users.destroy", userToDelete.id), {
                onSuccess: () => {
                    setSelectedFields((prevData) =>
                        prevData.filter((user) => user.id !== userToDelete.id)
                    );
                },
                onError: () => {
                    alert("Penghapusan gagal.");
                }
            });
        }
        setVisible(false);
    };

    const rowNumberTemplate = (rowData, column) => column.rowIndex + 1;

    return (
        <>
            {flash.msg && (
                <Toast
                    content={flash.msg}
                    key={useRandomInt()}
                    id="users_update_information"
                />
            )}
            <AdminLayout user={user} title="Admin">
                <div className="flex flex-col md:flex-row justify-between gap-2">
                    <div className="flex flex-row gap-5 bg-white rounded-[14px] p-5 shadow">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-[16px] text-[#202224]/70 tracking-[0.03em]">Jumlah Angkatan 2021</p>
                            <p className="font-bold text-[28px] tracking-[1px]">{akt21}</p>
                        </div>
                        <img src="/images/admin/icon-jumlah-pengguna.png" className="w-[60px] h-[60px]" alt="" />
                    </div>
                    <div className="flex flex-row gap-5 bg-white rounded-[14px] p-5 shadow">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-[16px] text-[#202224]/70 tracking-[0.03em]">Jumlah Angkatan 2022</p>
                            <p className="font-bold text-[28px] tracking-[1px]">{akt22}</p>
                        </div>
                        <img src="/images/admin/icon-jumlah-tim.png" className="w-[60px] h-[60px]" alt="" />
                    </div>
                    <div className="flex flex-row gap-5 bg-white rounded-[14px] p-5 shadow">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-[16px] text-[#202224]/70 tracking-[0.03em]">Jumlah Angkatan 2023</p>
                            <p className="font-bold text-[28px] tracking-[1px]">{akt23}</p>
                        </div>
                        <img src="/images/admin/icon-jumlah-proposal.png" className="w-[60px] h-[60px]" alt="" />
                    </div>
                    <div className="flex flex-row gap-5 bg-white rounded-[14px] p-5 shadow">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-[16px] text-[#202224]/70 tracking-[0.03em]">Jumlah Angkatan 2024</p>
                            <p className="font-bold text-[28px] tracking-[1px]">
                                {akt24}
                            </p>
                        </div>
                        <img src="/images/admin/icon-pending.png" className="w-[60px] h-[60px]" alt="" />
                    </div>
                </div>
                <div className="bg-white px-8 py-8 rounded-[14px] mt-10">
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
                    <div className="">
                        <DataTable
                            ref={dt}
                            paginator
                            showGridlines
                            value={selectedFields}
                            className=""
                            filters={filters}
                            header={renderHeader}
                            editMode="row"
                            dataKey="id"
                            rows={10}
                            rowsPerPageOptions={[10, 25, 50, 100, 200]}
                            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                            currentPageReportTemplate="{first} to {last} of {totalRecords}"
                            emptyMessage="Tidak ada data ditemukan."
                            onFilter={(e) => setFilters(e.filters)}
                            tableStyle={{ minWidth: '50rem' }}
                            onRowEditComplete={onRowEditComplete}
                            rowEditorInitIcon={
                                <div className="btn btn-warning btn-square btn-sm">
                                    <PencilIcon className="h-4 w-4" />
                                </div>
                            }
                            rowEditorSaveIcon={
                                <div className="btn btn-warning btn-square btn-sm">
                                    <CheckIcon className="h-4 w-4" />
                                </div>
                            }
                            rowEditorCancelIcon={
                                <div className="btn btn-square btn-sm">
                                    <XMarkIcon className="h-4 w-4" />
                                </div>
                            }
                        >
                            <Column
                                key="nomor"
                                field="nomor"
                                header="#"
                                body={rowNumberTemplate}
                                sortable
                                style={{ textAlign: 'center' }}
                            />
                            <Column
                                editor={(rowData) => textEditor(rowData)}
                                key="nim"
                                field="nim"
                                header="NIM"
                                sortable
                                style={{ textAlign: 'center' }}
                            />
                            <Column
                                editor={(rowData) => textEditor(rowData)}
                                key="name"
                                field="name"
                                header="Nama"
                                style={{ minWidth: '14rem' }}
                            />
                            <Column
                                editor={(rowData) => selectEditor(rowData)}
                                key="role"
                                field="role"
                                header="Role"
                                sortable
                                showFilterMenu={true}
                                filterMenuStyle={{ width: '14rem' }}
                                style={{ minWidth: '10rem' }}
                                filter
                                filterElement={RoleFilterTemplate}
                            />
                            <Column
                                key="class_of"
                                field="class_of"
                                header="Angkatan"
                                sortable
                                style={{ textAlign: 'center' }}
                                filter
                                filterElement={AngkatanFilterTemplate}
                            />
                            <Column
                                editor={(rowData) => textEditor(rowData)}
                                key="phone"
                                field="phone"
                                header="Telepon"
                            />
                            <Column
                                editor={(rowData) => textEditor(rowData)}
                                key="email"
                                field="email"
                                header="Email"
                            />
                            <Column
                                key="status"
                                field="status"
                                body={statusBadge}
                                header="Status"
                                style={{ textAlign: 'center' }}
                                filter
                                filterElement={StatusFilterTemplate}
                                sortable
                            ></Column>
                            <Column rowEditor={true} header={"Edit"}></Column>
                            <Column
                                header={"Hapus"}
                                style={{ textAlign: 'center' }}
                                body={(rowData) => {
                                    return (
                                        <Button
                                            unstyled
                                            className="font-bold bg-[#E82323] px-3 py-3 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#E82323]/70 dark:text-gray-400 dark:hover:text-white transition-all duration-300 shadow-[0_0_10px_#E82323] text-center"
                                            onClick={() => {
                                                setUserToDelete(rowData);
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
                message="Apakah Anda yakin ingin menghapus pengguna ini?"
                header="Konfirmasi Hapus"
                icon="pi pi-exclamation-triangle"
                accept={handleDelete}
                reject={() => setVisible(false)}
            />
        </>
    );
}
