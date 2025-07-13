import Toast from "@/Components/Toast";
import { useRandomInt } from "@/utils";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import { useForm, Link } from "@inertiajs/react";
import { useState } from "react";
import ParticipantLayout from "@/Layouts/ParticipantLayout";
import { IconJoinOrCreate } from "@/Components/IconAdmin";

export default function JoinTeam({ auth, flash }) {
    const { user } = auth;

    const [isTokenEmpty, setIsTokenEmpty] = useState(false);

    const { data, setData, get, processing } = useForm({
        token: "",
    });

    const submit = (e) => {
        e.preventDefault();

        if (data.token) get(route("teams.join", data.token));
        else setIsTokenEmpty(true);
    };

    return (
        <>
            <ParticipantLayout user={user} title="Gabung Tim">
                <div className="bg-white dark:bg-[#181d23] flex gap-5 flex-col justify-center items-center py-10 rounded-[14px]">
                    {isTokenEmpty && (
                        <Toast
                            key={useRandomInt()}
                            id="input-token-information"
                            content="Mohon masukkan token."
                        />
                    )}

                    {flash.msg && (
                        <Toast
                            key={useRandomInt()}
                            id="join_team_information"
                            content={flash.msg}
                        />
                    )}

                    <form onSubmit={submit}>
                        <div className="flex flex-col gap-2 justify-center items-center">
                            <IconJoinOrCreate />
                            <h3 className="font-semibold text-[24px] text-[#42A1A4]"><span className="text-[#285B70]">PKM</span> TI 2025</h3>
                            <label htmlFor="team_name" className="text-[16px] leading-[28px]">
                                Masukan Token
                            </label>
                        </div>
                        <div className="form-control my-4 flex flex-col gap-10 justify-center items-center w-[500px]">
                            <div className="form-control w-full">
                                <div className="join">
                                    <input
                                        id="token"
                                        type="text"
                                        name="token"
                                        placeholder="Masukan token"
                                        value={data.token}
                                        autoComplete="token"
                                        isfocused="true"
                                        onChange={(e) => setData("token", e.target.value)}
                                        className="input input-bordered join-item z-[1] w-full"
                                    />
                                </div>
                            </div>
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
                                    Gabung Tim
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </ParticipantLayout>
        </>
    );
}
