import { useParam } from "@/utils";
import { DocumentArrowUpIcon } from "@heroicons/react/24/outline";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { useForm } from "@inertiajs/react";

export default function CreateProposalForm({ user }) {
    const { data, setData, post, processing, errors, recentlySuccessful } =
        useForm({
            title: "",
            scheme: "",
        });

    const submit = (e) => {
        e.preventDefault();

        post(route("proposals.create", useParam(1)));
    };

    const schemes = ["PKM-GFT", "PKM-K", "PKM-KC", "PKM-PI", "PKM-PM"];

    return (
        <div className="lg:w-1/2">
            <DocumentIcon className="h-10 w-10 mb-4" />
            <h3 className="font-bold text-xs mb-4">PROPOSAL</h3>
            <form onSubmit={submit}>
                {/* Input Title */}
                <div className="form-control my-2">
                    <label htmlFor="title" className="font-bold mb-2">
                        Judul
                    </label>
                    <textarea
                        id="title"
                        name="title"
                        value={data.title}
                        rows={2}
                        autoComplete="title"
                        isfocused="true"
                        onChange={(e) => setData("title", e.target.value)}
                        className="textarea textarea-bordered"
                    ></textarea>

                    <p className="mt-2 text-error">{errors.title}</p>
                </div>

                {/* Select PKM Scheme */}
                <div className="form-control my-2">
                    <label htmlFor="title" className="font-bold mb-2">
                        Skema
                    </label>
                    <select
                        id="scheme"
                        name="scheme"
                        className="select select-bordered w-full text-base"
                        value={data.scheme}
                        onChange={(e) => setData("scheme", e.target.value)}
                    >
                        <option value="" disabled>
                            Pilih skema PKM
                        </option>
                        {schemes.map((scheme, i) => (
                            <option key={i} value={scheme}>
                                {scheme}
                            </option>
                        ))}
                    </select>

                    <p className="mt-2 text-error">{errors.scheme}</p>
                </div>

                <button
                    className="btn btn-warning mb-2 w-full"
                    disabled={processing}
                    type="submit"
                >
                    <DocumentArrowUpIcon className="h-6 w-6" />
                    Simpan Proposal
                </button>
            </form>
        </div>
    );
}
