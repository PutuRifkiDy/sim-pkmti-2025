import { useParam } from "@/utils";
import { DocumentArrowUpIcon } from "@heroicons/react/24/outline";
import { DocumentIcon } from "@heroicons/react/24/solid";
import { useForm } from "@inertiajs/react";
import {
    CheckCircleIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";

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

    const schemes = ["PKM-GFT", "PKM-K", "PKM-KC", "PKM-PI", "PKM-PM", "PKM-VGK"];

    return (
        <div className="flex gap-5 flex-col md:px-10 px-3 py-10 rounded-[14px] bg-white">
            {/* <DocumentIcon className="h-10 w-10 mb-4" /> */}
            <form onSubmit={submit}>
                {/* Input Title */}
                <div className="grid grid-cols-1 gap-2">


                    {/* Select PKM Scheme */}
                    <div className="form-control my-2">
                        <div className={`w-full px-5 py-3.5 flex flex-row gap-5 items-center bg-[#357F8B]/10 border-l-4 border-[#357F8B] rounded-l-[4px] mb-10`}>
                            <ExclamationCircleIcon className="h-6 w-6 fill-[#357F8B]" />
                            <p className="font-bold text-[14px] leading-[16px] text-[#357F8B]">
                                Masukan Skema dan Judul Proposal Pada Form Di bawah ini
                            </p>
                        </div>
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
                            <option value="" disabled c>
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
                </div>
                    <button
                        className="flex flex-row justify-center items-center font-bold bg-[#42A1A4] px-10 py-2 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#59DFD1] transition-all duration-300 shadow-[0_0_10px_#42A1A4]"
                        disabled={processing}
                        type="submit"
                    >
                        Simpan Proposal
                    </button>
            </form>
        </div>
    );
}
