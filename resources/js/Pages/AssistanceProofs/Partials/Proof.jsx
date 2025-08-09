import { IconWarning } from "@/Components/IconLanding";
import { useParam } from "@/utils";
import {
    ArrowUturnRightIcon,
    PencilIcon,
    TrashIcon,
} from "@heroicons/react/24/solid";
import { Link, router, useForm } from "@inertiajs/react";

export default function Proof({ proof, order, key }) {
    const { data, setData, patch, processing, errors } = useForm({
        proof_url: proof.proof_url,
        assistance_date: proof.assistance_date,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route("assistance-proofs.update", [useParam(1), proof.id]));

    };

    return (
        <>
            <form onSubmit={submit}>
                <h3 className="font-bold text-[20px] text-[#5A607F]">Bukti {order}</h3>
                {/* Input Proof URL */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                    <div className="form-control my-2">
                        <label htmlFor="proof_url" className="font-bold mb-2">
                            Link Bukti Asistensi
                        </label>

                        <div className="join">
                            <input
                                id="proof_url"
                                type="text"
                                name="proof_url"
                                value={data.proof_url}
                                autoComplete="proof_url"
                                onChange={(e) =>
                                    setData("proof_url", e.target.value)
                                }
                                className="input input-bordered join-item z-[1] w-full"
                            />
                            <div
                                className="tooltip join-item"
                                data-tip="Kunjungi tautan"
                            >
                                <a
                                    href={proof.proof_url}
                                    className="btn btn-square"
                                >
                                    <ArrowUturnRightIcon className="h-6 w-6" />
                                </a>
                            </div>
                        </div>

                        <p className="mt-2 text-error">{errors.proof_url}</p>
                    </div>

                    {/* Input Assistance Date */}
                    <div className="form-control my-2">
                        <label htmlFor="assistance_date" className="font-bold mb-2">
                            Tanggal Asistensi
                        </label>
                        <input
                            id="assistance_date"
                            type="date"
                            name="assistance_date"
                            value={data.assistance_date}
                            onChange={(e) =>
                                setData("assistance_date", e.target.value)
                            }
                            className="input input-bordered"
                        />

                        <p className="mt-2 text-error">{errors.assistance_date}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <button className="w-full mb-2 flex flex-row justify-center items-center gap-2 font-bold bg-[#42A1A4] py-2 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#59DFD1]  transition-all duration-300 shadow-[0_0_10px_#42A1A4]">
                        Edit
                    </button>
                    {/* <Link
                        as="button"
                        href={route("assistance-proofs.destroy", [
                            useParam(1),
                            proof.id,
                        ])}
                        method="delete"
                        className="w-full flex flex-row justify-center items-center gap-2 font-bold bg-[#E82323] py-2 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#E82323]/70 transition-all duration-300 shadow-[0_0_10px_#E82323]"
                    >
                        Hapus
                    </Link> */}
                    <button type="button" className="w-full mb-2 flex flex-row justify-center items-center gap-2 font-bold bg-[#E82323] py-2 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#E82323]/70 transition-all duration-300 shadow-[0_0_10px_#E82323]" onClick={() => document.getElementById("delete-asistance-confirmation").showModal()}>
                        Hapus Bukti
                    </button>
                    <dialog id="delete-asistance-confirmation" className="modal">
                        <div className="modal-box">
                            <div className="flex flex-row justify-start items-center gap-3">
                                <IconWarning />
                                <h3 className="font-bold text-lg">Hapus</h3>
                            </div>
                            <p className="py-4">Apakah Anda yakin untuk hapus bukti asistensi ini?</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button
                                        type="button"
                                        className="btn bg-red-500 text-white"
                                        onClick={() => {
                                            router.delete(
                                                route("assistance-proofs.destroy", [
                                                    useParam(1),
                                                    proof.id,
                                                ]),
                                                {
                                                    onSuccess: () => {
                                                        document
                                                            .getElementById(
                                                                "delete-asistance-confirmation"
                                                            )
                                                            .close();
                                                    },
                                                }
                                            );
                                        }}
                                    >
                                        Hapus
                                    </button>
                                    <button className="btn ms-1">Batal</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </form>
        </>
    );
}
