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
    const validSchemes = ["PKM-GFT", "PKM-K", "PKM-KC", "PKM-PI", "PKM-PM"];

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
            approved: { style: "badge-success", content: "Diterima" },
            rejected: { style: "badge-error", content: "Ditolak" },
            pending: { style: "badge-warning", content: "Diperiksa" },
        };

        return (
            <div className="tooltip tooltip-right mb-4" data-tip="Status">
                <div className={`badge p-3 ${statuses[status].style}`}>
                    {statuses[status].content}
                </div>
            </div>
        );
    }

    return (
        <div className="lg:w-1/2">
            <DocumentIcon className="h-10 w-10 mb-4" />
            <h3 className="font-bold text-xs mb-2">PROPOSAL</h3>
            <ProposalStatus />

            <form onSubmit={submit}>
                {proposal.note && (
                    <div className="alert alert-info" role="alert">
                        <InformationCircleIcon className="h-6 w-6" />
                        <div>
                            <h3 className="font-bold">Catatan</h3>
                            <div className="text-xs">{proposal.note}</div>
                        </div>
                    </div>
                )}

                {/* Input Title */}
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
                    <div className="join">
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

                    <p className="mt-2 text-error">
                        {errors.final_proposal_url}
                    </p>
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

            {(user.id === proposal.team.leader_id || user.role === "admin") && (
                <Link
                    as="button"
                    method="delete"
                    className="btn btn-error mb-2 w-full"
                    href={route("proposals.destroy", useParam(1))}
                >
                    <TrashIcon className="h-6 w-6" /> Hapus Proposal
                </Link>
            )}
        </div>
    );
}
