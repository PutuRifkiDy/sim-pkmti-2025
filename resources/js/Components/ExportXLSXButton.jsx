import { DocumentArrowUpIcon } from "@heroicons/react/24/solid";

export default function ExportXLSXButton({ exportedData }) {
    const exportExcel = () => {
        import("xlsx")
            .then((xlsx) => {
                const worksheet = xlsx.utils.json_to_sheet(exportedData);
                const workbook = {
                    Sheets: { data: worksheet },
                    SheetNames: ["data"],
                };
                const excelBuffer = xlsx.write(workbook, {
                    bookType: "xlsx",
                    type: "array",
                });

                saveAsExcelFile(excelBuffer, "data");
            })
            .then(setIsSuccessfull(true));
    };

    const saveAsExcelFile = (buffer, fileName) => {
        import("file-saver").then((module) => {
            if (module && module.default) {
                let EXCEL_TYPE =
                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
                let EXCEL_EXTENSION = ".xlsx";
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE,
                });

                module.default.saveAs(
                    data,
                    fileName +
                        "_export_" +
                        new Date().getTime() +
                        EXCEL_EXTENSION
                );
            }
        });
    };

    return (
        <>
            <button
                className="btn btn-success mb-4"
                onClick={exportExcel}
                data-pr-tooltip="XLS"
            >
                <DocumentArrowUpIcon className="h-6 w-6" />
                Ekspor
            </button>
        </>
    );
}
