import { useParam, useRandomString } from "@/utils";
import {
    ArrowLeftEndOnRectangleIcon,
    ArrowPathIcon,
    ClipboardDocumentIcon,
    PencilIcon,
    PowerIcon,
    UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Link, useForm } from "@inertiajs/react";
import { useState } from "react";

export default function TeamInformation({ user, team, lecturers }) {
    const [wasCopied, setWasCopied] = useState(false);

    const { data, setData, patch, processing, errors } = useForm({
        team_name: team.team_name,
        token: team.token,
        lecturer_id: team.lecturer_id,
    });

    const updateTeam = (e) => {
        e.preventDefault();

        patch(route("teams.update", useParam(1)));
    };
    return (
        <>
            <form onSubmit={updateTeam}>
                {/* Team name */}
                {user.id == team.leader_id || user.role == "admin" ? (

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                        <div className="form-control my-2">
                            <label htmlFor="team_name" className="font-bold mb-2">
                                Nama Tim
                            </label>
                            <input
                                id="team_name"
                                type="text"
                                name="team_name"
                                value={data.team_name}
                                autoComplete="team_name"
                                isfocused="true"
                                onChange={(e) =>
                                    setData("team_name", e.target.value)
                                }
                                className="input input-bordered w-full"
                            />

                            <p className="mt-2 text-error">{errors.team_name}</p>
                        </div>

                        <div className="form-control my-2">
                            <label htmlFor="title" className="font-bold mb-2">
                                Dosen Pembimbing
                            </label>
                            <select
                                id="lecturer_id"
                                name="lecturer_id"
                                className="select select-bordered w-full text-base"
                                value={data.lecturer_id || ""}
                                onChange={(e) =>
                                    setData("lecturer_id", e.target.value)
                                }
                            >
                                <option value="">Belum ada</option>
                                {lecturers.map((lecturer, i) => (
                                    <option key={i} value={lecturer.id}>
                                        {lecturer.name}
                                    </option>
                                ))}
                            </select>

                            <p className="mt-2 text-error">{errors.lecturer}</p>
                        </div>

                        {/* Copy link */}
                        <div className="form-control my-2">
                            <label
                                htmlFor="invitation_link"
                                className="font-bold mb-2"
                            >
                                Token
                            </label>
                            <div className="join">
                                <input
                                    id="invitation_link"
                                    type="text"
                                    name="invitation_link"
                                    value={data.token}
                                    className="input input-bordered join-item z-[1] w-full"
                                    readOnly
                                />
                                <div
                                    className="tooltip"
                                    data-tip={
                                        !wasCopied ? "Salin tautan" : "Tersalin"
                                    }
                                >
                                    <label
                                        className="btn btn-square join-item"
                                        onClick={() => {
                                            navigator.clipboard.writeText(
                                                location.origin +
                                                "/teams/" +
                                                data.token +
                                                "/join"
                                            );
                                            setWasCopied(true);
                                            setTimeout(
                                                () => setWasCopied(false),
                                                1000
                                            );
                                        }}
                                    >
                                        <ClipboardDocumentIcon className="h-6 w-6" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                        <div className="form-control my-2">
                            <label htmlFor="team_name" className="font-bold mb-2">
                                Nama Tim
                            </label>
                            <input
                                id="team_name"
                                type="text"
                                name="team_name"
                                value={data.team_name}
                                autoComplete="team_name"
                                isfocused="true"
                                onChange={(e) =>
                                    setData("team_name", e.target.value)
                                }
                                readOnly
                                className="input input-bordered w-full"
                            />

                            <p className="mt-2 text-error">{errors.team_name}</p>
                        </div>

                        <div className="form-control my-2">
                            <label htmlFor="title" className="font-bold mb-2">
                                Dosen Pembimbing
                            </label>
                            <select
                                id="lecturer_id"
                                name="lecturer_id"
                                className="select select-bordered w-full text-base"
                                value={data.lecturer_id || ""}
                                onChange={(e) =>
                                    setData("lecturer_id", e.target.value)
                                }

                            >
                                <option value="" disabled>Belum ada</option>
                                {lecturers.map((lecturer, i) => (
                                    <option key={i} value={lecturer.id} disabled>
                                        {lecturer.name}
                                    </option>
                                ))}
                            </select>

                            <p className="mt-2 text-error">{errors.lecturer}</p>
                        </div>

                        {/* Copy link */}
                        <div className="form-control my-2">
                            <label
                                htmlFor="invitation_link"
                                className="font-bold mb-2"
                            >
                                Token
                            </label>
                            <div className="join">
                                <input
                                    id="invitation_link"
                                    type="text"
                                    name="invitation_link"
                                    value={data.token}
                                    className="input input-bordered join-item z-[1] w-full"
                                    readOnly
                                />
                                <div
                                    className="tooltip"
                                    data-tip={
                                        !wasCopied ? "Salin tautan" : "Tersalin"
                                    }
                                >
                                    <label
                                        className="btn btn-square join-item"
                                        onClick={() => {
                                            navigator.clipboard.writeText(
                                                location.origin +
                                                "/teams/" +
                                                data.token +
                                                "/join"
                                            );
                                            setWasCopied(true);
                                            setTimeout(
                                                () => setWasCopied(false),
                                                1000
                                            );
                                        }}
                                    >
                                        <ClipboardDocumentIcon className="h-6 w-6" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                )}

                {(user.id == team.leader_id || user.role == "admin") && (
                    <>
                        <div className="grid md:grid-cols-2 grid-cols-1 md:w-1/2 w-full gap-2 mt-5">
                            <button
                                className="w-full mb-2 flex flex-row justify-center items-center gap-2 font-bold bg-[#42A1A4] px-10 py-2 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#59DFD1]   transition-all duration-300 shadow-[0_0_10px_#42A1A4]"
                                disabled={processing}
                                type="submit"
                            >
                                {/* <PencilIcon className="h-6 w-6" /> */}
                                Simpan Perubahan
                            </button>
                            <button
                                className="w-full mb-2 flex flex-row justify-center items-center gap-2 font-bold bg-[#42A1A4] px-10 py-2 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#59DFD1]   transition-all duration-300 shadow-[0_0_10px_#42A1A4]"
                                disabled={processing}
                                onClick={() =>
                                    setData("token", useRandomString(8))
                                }
                                type="submit"
                            >
                                {/* <ArrowPathIcon className="h-6 w-6" /> */}
                                Buat Token Baru
                            </button>
                        </div>
                    </>
                )}
            </form>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2 md:w-1/2 w-full">
                <Link
                    as="button"
                    method="delete"
                    className="w-full mb-2 flex flex-row justify-center items-center gap-2 font-bold bg-[#E82323] py-2 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#E82323]/70   transition-all duration-300 shadow-[0_0_10px_#E82323]"
                    href={route("teams.leave", useParam(1))}
                >
                    {/* <ArrowLeftEndOnRectangleIcon className="h-6 w-6" />  */}
                    Keluar
                    Tim
                </Link>

                {(user.id == team.leader_id || user.role == "admin") && (
                    <Link
                        as="button"
                        method="delete"
                        className="w-full mb-2 flex flex-row justify-center items-center gap-2 font-bold bg-[#E82323] py-2 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#E82323]/70   transition-all duration-300 shadow-[0_0_10px_#E82323]"
                        href={route("teams.destroy", useParam(1))}
                    >
                        {/* <PowerIcon className="h-6 w-6" />  */}
                        Bubarkan Tim
                    </Link>
                )}
            </div>

        </>
    );
}
