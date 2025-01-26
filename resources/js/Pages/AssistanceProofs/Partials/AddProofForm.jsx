import { useParam } from "@/utils";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useForm } from "@inertiajs/react";

export default function AddProofForm() {
    const { data, setData, post, processing, reset, errors } = useForm({
        proof_url: "",
        assistance_date: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("assistance-proofs.add", useParam(1)), {
            onSuccess: () => reset("proof_url", "assistance_date"),
        });
    };

    return (
        <form onSubmit={submit}>
            <h3 className="font-bold text-xs mb-4">TAMBAHKAN BUKTI</h3>
            {/* Input Proof URL */}
            <div className="form-control my-2">
                <label htmlFor="proof_url" className="font-bold mb-2">
                    Link Bukti Asistensi
                </label>

                <input
                    id="proof_url"
                    type="text"
                    name="proof_url"
                    value={data.proof_url}
                    autoComplete="proof_url"
                    onChange={(e) => setData("proof_url", e.target.value)}
                    className="input input-bordered z-[1] w-full"
                />

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
                    onChange={(e) => setData("assistance_date", e.target.value)}
                    className="input input-bordered"
                />

                <p className="mt-2 text-error">{errors.assistance_date}</p>
            </div>

            <button
                className="btn btn-success mb-2 w-full"
                disabled={processing}
                type="submit"
            >
                <PlusIcon className="h-6 w-6" />
                Tambahkan Bukti
            </button>
        </form>
    );
}
