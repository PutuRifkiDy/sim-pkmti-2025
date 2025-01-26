import { useParam } from "@/utils";
import {
    ArrowUturnRightIcon,
    PencilIcon,
    TrashIcon,
} from "@heroicons/react/24/solid";
import { Link, useForm } from "@inertiajs/react";

export default function Proof({ proof, order }) {
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
            <div className="divider"></div>
            <form onSubmit={submit}>
                <h3 className="font-bold text-xs mb-4">BUKTI {order}</h3>
                {/* Input Proof URL */}
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

                <div className="join join-vertical lg:join-horizontal w-full">
                    <button className="btn btn-warning join-item lg:w-1/2 w-full">
                        <PencilIcon
                            className="h-6 w-6"
                            disabled={processing}
                            type="submit"
                        />
                        Edit
                    </button>
                    <Link
                        as="button"
                        href={route("assistance-proofs.destroy", [
                            useParam(1),
                            proof.id,
                        ])}
                        method="delete"
                        className="btn btn-error join-item lg:w-1/2 w-full"
                    >
                        <TrashIcon className="h-6 w-6" />
                        Hapus
                    </Link>
                </div>
            </form>
        </>
    );
}
