import AdminLayout from "@/Layouts/AdminLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ExportXLSXButton from "@/Components/ExportXLSXButton";
import { useState } from "react";
import { FilterMatchMode } from "primereact/api";
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

export default function Users({ auth, users, flash, errors }) {
    const { user } = auth;

    // Select field that want to display
    const [selectedFields, setSelectedFields] = useState(
        users.map((user) => {
            return {
                id: user.id,
                nim: user.nim,
                name: user.name,
                class_of: 20 + user.nim.substring(0, 2),
                phone: user.phone,
                line_id: user.line_id,
                email: user.email,
                status: user.status,
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
        console.log(filter);
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
            passed: { style: "badge-success", content: "Lulus" },
            failed: { style: "badge-error", content: "Gagal" },
        };

        return (
            <div className={`badge p-3 ${statuses[status].style}`}>
                {statuses[status].content}
            </div>
        );
    };

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
                    <div className="overflow-x-auto">
                        <DataTable
                            value={selectedFields}
                            className="table table-zebra whitespace-nowrap"
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
                                key="nim"
                                field="nim"
                                header={<span className="me-2">NIM</span>}
                                sortable
                            />
                            <Column
                                editor={(rowData) => textEditor(rowData)}
                                key="name"
                                field="name"
                                header={<span className="me-2">Nama</span>}
                                sortable
                            />
                            <Column
                                key="class_of"
                                field="class_of"
                                header={<span className="me-2">Angkatan</span>}
                                sortable
                            />
                            <Column
                                editor={(rowData) => textEditor(rowData)}
                                key="phone"
                                field="phone"
                                header={<span className="me-2">Telepon</span>}
                                sortable
                            />
                            <Column
                                editor={(rowData) => textEditor(rowData)}
                                key="email"
                                field="email"
                                header={<span className="me-2">Email</span>}
                                sortable
                            />
                            <Column
                                key="status"
                                field="status"
                                body={statusBadge}
                                header={<span className="me-2">Status</span>}
                                sortable
                            ></Column>
                            <Column rowEditor={true} header={"Edit"}></Column>
                            <Column
                                header={"Hapus"}
                                body={(rowData) => {
                                    return (
                                        <Link
                                            as="button"
                                            method="delete"
                                            href={route(
                                                "users.destroy",
                                                rowData.id
                                            )}
                                            className="btn btn-error btn-square btn-sm mx-1"
                                        >
                                            <TrashIcon className="h-4 w-4" />
                                        </Link>
                                    );
                                }}
                            ></Column>
                        </DataTable>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
