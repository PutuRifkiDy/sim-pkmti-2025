import { useRandomTeamName } from "@/utils";
import { ArrowPathIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { useForm, Link } from "@inertiajs/react";
import { useEffect } from "react";
import ParticipantLayout from "@/Layouts/ParticipantLayout";
import { IconJoinOrCreate } from "@/Components/IconAdmin";

export default function CreateTeam({ auth }) {
    const { user } = auth;

    const { data, setData, post, processing, errors, reset } = useForm({
        team_name: "",
    });

    useEffect(() => {
        return () => {
            reset("team_name");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("teams.create"));
    };

    return (
        <>
            <ParticipantLayout user={user} title="Buat Tim">
                <div className="bg-white dark:bg-[#181d23] flex gap-5 flex-col justify-center items-center py-10 rounded-[14px]">
                    <form onSubmit={submit}>
                        <div className="flex flex-col gap-2 justify-center items-center">
                            <IconJoinOrCreate />
                            <h3 className="font-semibold text-[24px] text-[#42A1A4]"><span className="text-[#285B70]">PKM</span> TI 2025</h3>
                            <label htmlFor="team_name" className="text-[16px] leading-[28px]">
                                Masukan Nama Tim
                            </label>
                        </div>
                        <div className="form-control my-4 flex flex-col gap-10 justify-center items-center w-[500px]">
                            <div className="join w-full">
                                <input
                                    id="team_name"
                                    type="text"
                                    name="team_name"
                                    placeholder="Masukan nama tim"
                                    value={data.team_name}
                                    autoComplete="team_name"
                                    isfocused="true"
                                    onChange={(e) =>
                                        setData("team_name", e.target.value)
                                    }
                                    className="input input-bordered text-start join-item z-[1] w-full"
                                />
                                <div className="tooltip" data-tip="Generate nama tim">
                                    <label
                                        className="btn btn-square join-item"
                                        onClick={() =>
                                            setData("team_name", useRandomTeamName())
                                        }
                                    >
                                        <ArrowPathIcon className="h-6 w-6" />
                                    </label>
                                </div>
                            </div>

                            {errors.team_name && (
                                <p className="mt-2 text-error">{errors.team_name}</p>
                            )}
                            <div className="flex flex-row w-full gap-5">
                                <Link
                                    as="button"
                                    href={route("teams.join_or_create")}
                                    className="font-bold border-2 border-[#59DFD1] tracking-[0.03em] leading-[26px] text-[20px] w-[250px] py-2 rounded-md text-[#59DFD1] hover:text-white hover:bg-[#42A1A4] hover:border-[#42A1A4] dark:text-gray-100 dark:hover:text-white transition-all duration-300 flex flex-row justify-center items-center hover:shadow-[0_0_10px_#42A1A4]"
                                >
                                    Kembali
                                </Link>
                                <button
                                    className="font-bold bg-[#42A1A4] w-[250px] py-2 text-[20px] tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#59DFD1] dark:text-gray-100 dark:hover:text-white transition-all duration-300 shadow-[0_0_10px_#42A1A4]"
                                    disabled={processing}
                                >
                                    Buat Tim
                                </button>
                            </div>
                        </div>
                            <p className="text-[14px] leading-[28px] text-start">*Hanya ketua tim yang membuat tim</p>
                    </form>
                </div>

            </ParticipantLayout>
        </>
    );
}
