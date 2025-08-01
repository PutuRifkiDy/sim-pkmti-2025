import { IconWarning } from "@/Components/IconLanding";
import { useParam } from "@/utils";
import { DocumentArrowUpIcon } from "@heroicons/react/24/outline";
import {
    ArrowUturnRightIcon,
    DocumentIcon,
    InformationCircleIcon,
    TrashIcon,
} from "@heroicons/react/24/solid";
import { Link, useForm } from "@inertiajs/react";

export default function UpdateProposalForm({ user, proposal }) {
    const validSchemes = ["PKM-GFT", "PKM-K", "PKM-KC", "PKM-PI", "PKM-PM", "PKM-VGK"];

    const { data, setData, patch, processing, errors } = useForm({
        title: proposal.title,
        scheme: proposal.scheme,
        description: proposal.description,
        draft_proposal_url: proposal.draft_proposal_url,
        final_proposal_url: proposal.final_proposal_url,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route("proposals.update", useParam(1)));
    };

    function ProposalStatus() {
        const status = proposal.status;
        const statuses = {
            approved: { style: "bg-[#4DE45C]/10 border-l-4 border-[#4DE45C] text-[#4DE45C]", content: "Proposal Diterima" },
            rejected: { style: "bg-[#E82323]/10 border-l-4 border-[#E82323] text-[#E82323]", content: "Proposal Ditolak" },
            pending: { style: "bg-[#CFD249]/10 border-l-4 border-[#CFD249] text-[#CFD249]", content: "Proposal Sedang Diperiksa" },
        };

        return (
            // <div className="tooltip tooltip-right mb-4" data-tip="Status">
            //     <div className={`badge p-3 ${statuses[status].style}`}>
            //         {statuses[status].content}
            //     </div>
            // </div>
            <div className={`w-full px-5 py-3.5 flex flex-row gap-5 items-center rounded-l-[4px] ${statuses[status].style}`}>
                <p className="font-bold text-[14px] leading-[16px]">
                    {statuses[status].content}
                </p>
            </div>
        );
    }

    return (
        <div className="flex gap-5 flex-col md:px-10 px-3 py-10 rounded-[14px] bg-white">
            <ProposalStatus />

            <form onSubmit={submit}>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10">
                    <div className="form-control my-2">
                        <label htmlFor="title" className="font-bold mb-2">
                            Judul
                        </label>
                        <textarea
                            id="title"
                            name="title"
                            value={data.title || ""}
                            rows={2}
                            autoComplete="title"
                            onChange={(e) => setData("title", e.target.value)}
                            className="textarea textarea-bordered lg:resize-none"
                        ></textarea>

                        <p className="mt-2 text-error">{errors.title}</p>
                    </div>
                    {/* Input Description */}
                    <div className="form-control my-2">
                        <label htmlFor="description" className="font-bold mb-2">
                            Gambaran Umum
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={data.description || ""}
                            rows={2}
                            maxLength={255}
                            autoComplete="description"
                            onChange={(e) => setData("description", e.target.value)}
                            className="textarea textarea-bordered"
                        ></textarea>
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
                            {validSchemes.map((scheme, i) => (
                                <option key={i} value={scheme}>
                                    {scheme}
                                </option>
                            ))}
                        </select>

                        <p className="mt-2 text-error">{errors.scheme}</p>
                    </div>


                    {/* Input Draft Proposal Link */}
                    <div className="form-control my-2">
                        <label
                            htmlFor="draft_proposal_url"
                            className="font-bold mb-2"
                        >
                            Link Proposal Draf (.pdf)
                        </label>
                        <div className="join">
                            <input
                                id="draft_proposal_url"
                                type="text"
                                name="draft_proposal_url"
                                value={data.draft_proposal_url}
                                autoComplete="draft_proposal_url"
                                onChange={(e) =>
                                    setData("draft_proposal_url", e.target.value)
                                }
                                className="input input-bordered join-item z-[1] w-full"
                            />

                            <div className="tooltip" data-tip="Kunjungi tautan">
                                <a
                                    href={proposal.draft_proposal_url}
                                    className="join-item btn btn-square"
                                >
                                    <ArrowUturnRightIcon className="h-6 w-6" />
                                </a>
                            </div>
                        </div>

                        <p className="mt-2 text-error">
                            {errors.draft_proposal_url}
                        </p>
                    </div>

                    {/* Input Final Proposal Link */}
                    <div className="form-control my-2">
                        <label
                            htmlFor="final_proposal_url"
                            className="font-bold mb-2"
                        >
                            Link Proposal Final (.pdf)
                        </label>
                        <div className="join flex flex-col gap-5 w-full">
                            <div className="flex flex-row">
                                <input
                                    id="final_proposal_url"
                                    type="text"
                                    name="final_proposal_url"
                                    value={data.final_proposal_url}
                                    autoComplete="final_proposal_url"
                                    disabled={true && !proposal.draft_proposal_url}
                                    onChange={(e) =>
                                        setData("final_proposal_url", e.target.value)
                                    }
                                    className="input input-bordered join-item z-[1] w-full"
                                />
                                <div className="tooltip" data-tip="Kunjungi tautan">
                                    <a
                                        href={proposal.final_proposal_url}
                                        className="join-item btn btn-square"
                                    >
                                        <ArrowUturnRightIcon className="h-6 w-6" />
                                    </a>
                                </div>

                            </div>

                            <div className="flex md:flex-row flex-col gap-2 w-full">
                                <button
                                    className="flex flex-row justify-center items-center font-bold bg-[#42A1A4] w-full py-2 tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#59DFD1]  transition-all duration-300 shadow-[0_0_10px_#42A1A4]"
                                    disabled={processing}
                                    type="submit"
                                >
                                    Simpan Proposal
                                </button>
                                {(user.id === proposal.team.leader_id || user.role === "admin") && (
                                    <div className="w-full">
                                        <button type="button" className="w-full flex flex-row justify-center items-center gap-2 font-bold bg-[#E82323] py-2 tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#E82323]/70transition-all duration-300 shadow-[0_0_10px_#E82323]" onClick={() => document.getElementById("delete-proposal").showModal()}>
                                            Hapus Proposal
                                        </button>
                                        <dialog id="delete-proposal" className="modal">
                                            <div className="modal-box">
                                                <div className="flex flex-row justify-start items-center gap-3">
                                                    <IconWarning />
                                                    <h3 className="font-bold text-lg">Hapus Proposal</h3>
                                                </div>
                                                <p className="py-4">Apakah Anda yakin untuk Menghapus Proposal?</p>
                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        <Link
                                                            as="button"
                                                            className="btn bg-red-500 text-white"
                                                            method="delete"
                                                            href={route("proposals.destroy", useParam(1))}
                                                        >
                                                            Hapus
                                                        </Link>
                                                        <button className="btn ms-1">Batal</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog>
                                    </div>
                                )}
                            </div>
                        </div>

                        <p className="mt-2 text-error">
                            {errors.final_proposal_url}
                        </p>
                    </div>
                    {proposal.note && (
                        <div className="bg-[#FA3434]/20 text-[#FA3434] w-full px-3 py-2.5 flex flex-row gap-5 rounded-[10px] text-justify " role="alert">
                            <div>
                                <div className="flex flex-row gap-2 justify-center items-center">
                                    <IconWarning />
                                    <h3 className="font-bold text-[18px]">Catatan</h3>
                                </div>
                                <div className="text-[12px] tracking-wider">{proposal.note}</div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input Title */}


            </form>

            <div>
                {/* <label
                    htmlFor="final_proposal_url"
                    className="font-bold mb-2"
                >
                    Link Proposal Final (.pdf)
                </label> */}
            </div>
        </div>
    );
}
