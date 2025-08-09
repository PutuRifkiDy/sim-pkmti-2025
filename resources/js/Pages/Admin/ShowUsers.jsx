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
import { FileUpload } from "primereact/fileupload";
import {
    ArrowPathIcon,
    CheckIcon,
    ExclamationTriangleIcon,
    PencilIcon,
    TrashIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, router, usePage } from "@inertiajs/react";
import { Inertia } from '@inertiajs/inertia';
import Toast from "@/Components/Toast";
import { useIsObjectEmpty, useRandomInt } from "@/utils";

export default function Users({ auth, users, flash, errors, akt21, akt22, akt23, akt24 }) {
    const { user } = auth;
    const { props } = usePage();
    const [visible, setVisible] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const [toastShown, setToastShown] = useState(false);
    const [toastKey, setToastKey] = useState(0);

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
                certificate_path: user.certificate_path,
                have_team: user.team_id == null ? 'Belum Punya Tim' : 'Punya Tim',
            };
        })
    );

    useEffect(() => {
        setSelectedFields(
            props.users.map((user) => {
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
                    certificate_path: user.certificate_path,
                    have_team: user.team_id == null ? 'Belum Punya Tim' : 'Punya Tim',
                };
            })
        );
        initFilters();
    }, [props.users])

    // Search
    const [filters, setFilters] = useState(null);
    const [globalFilterValue, setGlobalFilterValue] = useState("");


    useEffect(() => {
        initFilters();
    }, []);

    useEffect(() => {
        if (flash.msg) {
            setToastKey(prev => prev + 1);
            setToastShown(true);
            const timeout = setTimeout(() => {
                setToastShown(false);
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [flash.msg]);

    const initFilters = () => {
        setFilters({
            global: { value: null, matchMode: FilterMatchMode.CONTAINS },
            role: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            status: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            class_of: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
            have_team: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
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
    const onRowEditComplete = async (e) => {
        let _selectedFields = [...selectedFields];
        let { newData, index } = e;

        const {
            nim,
            name,
            role,
            phone,
            email,
            line_id,
            certificate_path,
        } = newData;

        let formData = new FormData();
        formData.append("nim", nim);
        formData.append("name", name);
        formData.append("role", role);
        formData.append("phone", phone);
        formData.append("email", email);
        formData.append("line_id", line_id);

        if (certificate_path instanceof File) {
            formData.append("certificate_path", certificate_path);
        }

        await router.post(route("users.update", e.data.id), formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        setSelectedFields(_selectedFields);

        setToastKey(prev => prev + 1);
        setToastShown(true);
        setTimeout(() => setToastShown(false), 3000);
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

    const fileEditor = (rowData) => {
        return (
            <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, rowData)}
            />
        );
    };


    const handleFileChange = (e, rowData) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                rowData.editorCallback(file);
            };
            reader.readAsDataURL(file);
        }
    };

    // status badge
    const statusBadge = (rowData) => {
        const status = rowData.status;
        const statuses = {
            passed: { style: "font-bold bg-[#00B69B] px-3 py-1 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white   transition-all duration-300 shadow-[0_0_10px_#00B69B]", content: "Lulus" },
            failed: { style: "font-bold bg-[#F93C65] px-3 py-1 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white   transition-all duration-300 shadow-[0_0_10px_#F93C65]", content: "Gagal" },
        };

        return (
            <div className={`${statuses[status].style}`}>
                {statuses[status].content}
            </div>
        );
    };

    // reset password action
    const resetPasswordAction = (rowData) => {
        const submit = (e) => {
            e.preventDefault();

            router.post(route("users.reset-password", rowData.id));
        }

        return (
            <button
                onClick={submit}
                className="font-bold bg-[#CFD249] px-3 py-3 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white  transition-all duration-300 shadow-[0_0_10px_#CFD249]"
            >
                <ArrowPathIcon className="h-4 w-4" />
            </button>
        );
    }

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

                    <div className="flex flex-row gap-2">
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
                placeholder="Select Status"
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

    const CertificateModal = ({ imageUrl, modalId }) => {
        return (
            <>
                <button
                    className="btn btn-sm text-blue-600"
                    onClick={() => document.getElementById(modalId).showModal()}
                >
                    Lihat Sertifikat
                </button>

                <dialog id={modalId} className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                        </form>

                        <h3 className="font-bold text-lg">Sertifikat</h3>
                        <div className="flex justify-center py-4">
                            <img
                                src={imageUrl}
                                alt="certificate"
                                className="w-full h-auto max-w-xl object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </dialog>
            </>
        );
    };


    const handleDelete = () => {
        if (userToDelete) {
            router.delete(route("users.destroy", userToDelete.id), {
                onSuccess: () => {
                    setSelectedFields((prevData) =>
                        prevData.filter((user) => user.id != userToDelete.id)
                    );
                    setToastKey(prev => prev + 1);
                    setToastShown(true);
                    setTimeout(() => setToastShown(false), 3000);
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
            {flash.msg && toastShown && (
                <Toast
                    content={flash.msg}
                    key={toastKey}
                    id="teams_update_information"
                />
            )}
            <AdminLayout user={user} title="Admin">
                <div className="flex flex-col md:flex-row justify-between gap-2">
                    <div className="flex flex-row justify-between gap-5 bg-white rounded-[14px] p-5 shadow">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-[16px] text-[#202224]/70  tracking-[0.03em]">Jumlah Angkatan 2021</p>
                            <p className="font-bold text-[28px] tracking-[1px] ">{akt21}</p>
                        </div>
                        <img src="/images/admin/icon-jumlah-pengguna.png" className="w-[60px] h-[60px]" alt="" />
                    </div>
                    <div className="flex flex-row justify-between gap-5 bg-white rounded-[14px] p-5 shadow">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-[16px] text-[#202224]/70 tracking-[0.03em] ">Jumlah Angkatan 2022</p>
                            <p className=" font-bold text-[28px] tracking-[1px]">{akt22}</p>
                        </div>
                        <img src="/images/admin/icon-jumlah-pengguna.png" className="w-[60px] h-[60px]" alt="" />
                    </div>
                    <div className="flex flex-row justify-between gap-5 bg-white rounded-[14px] p-5 shadow">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-[16px] text-[#202224]/70 tracking-[0.03em] ">Jumlah Angkatan 2023</p>
                            <p className=" font-bold text-[28px] tracking-[1px]">{akt23}</p>
                        </div>
                        <img src="/images/admin/icon-jumlah-pengguna.png" className="w-[60px] h-[60px]" alt="" />
                    </div>
                    <div className="flex flex-row justify-between gap-5 bg-white rounded-[14px] p-5 shadow">
                        <div className="flex flex-col gap-1">
                            <p className=" font-medium text-[16px] text-[#202224]/70 tracking-[0.03em]">Jumlah Angkatan 2024</p>
                            <p className=" font-bold text-[28px] tracking-[1px]">
                                {akt24}
                            </p>
                        </div>
                        <img src="/images/admin/icon-jumlah-pengguna.png" className="w-[60px] h-[60px]" alt="" />
                    </div>
                </div>
                <div className="bg-white px-8 py-8 rounded-[14px] mt-10 shadow">
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
                            body={rowNumberTemplate}
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
                            key="have_team"
                            field="have_team"
                            header="Status Tim"
                            filter
                            filterElement={TeamFilterTemplate}
                            sortable
                            body={HaveTeamTemplate}
                            style={{ minWidth: '12rem' }}
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
                            editor={(rowData) => textEditor(rowData)}
                            key="line_id"
                            field="line_id"
                            header="ID Line"
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
                        <Column
                            className="min-w-48 text-center"
                            editor={(rowData) => fileEditor(rowData)}
                            key="certificate_path"
                            field="certificate_path"
                            header="Sertifikat"
                            body={(rowData) =>
                                rowData.certificate_path ? (
                                    <CertificateModal
                                        imageUrl={`${window.location.origin}/${rowData.certificate_path}`}
                                        modalId={`modal_${rowData.id}`}
                                    />
                                ) : (
                                    "Belum ada sertifikat"
                                )
                            }
                        />
                        <Column
                            body={resetPasswordAction}
                            key="reset_password"
                            className="min-w-44 text-center"
                            header={<span className="me-2">Reset Password</span>}
                        />
                        <Column rowEditor={true} header={"Edit"}></Column>
                        <Column
                            header={"Hapus"}
                            style={{ textAlign: 'center' }}
                            body={(rowData) => {
                                return (
                                    <Button
                                        unstyled
                                        className="font-bold bg-[#E82323] px-3 py-3 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#E82323]/70   transition-all duration-300 shadow-[0_0_10px_#E82323] text-center"
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
