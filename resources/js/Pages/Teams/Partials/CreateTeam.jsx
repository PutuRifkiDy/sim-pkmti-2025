import { useRandomTeamName } from "@/utils";
import { ArrowPathIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function CreateTeam() {
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
            <form onSubmit={submit}>
                <UserPlusIcon className="h-10 w-10 mb-4" />
                <h3 className="font-bold text-xs">BUAT TIM</h3>
                <div className="form-control my-4">
                    <label htmlFor="team_name" className="font-bold mb-2">
                        Nama Tim
                    </label>
                    <div className="join">
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
                            className="input input-bordered join-item z-[1]"
                        />
                        <div className="tooltip" data-tip="Buat nama tim">
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
                </div>
                <button
                    className="btn btn-primary w-full mb-2"
                    disabled={processing}
                >
                    Buat Tim
                </button>
            </form>
        </>
    );
}
