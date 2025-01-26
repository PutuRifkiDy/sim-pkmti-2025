import Toast from "@/Components/Toast";
import { useRandomInt } from "@/utils";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function JoinTeam() {
    const [isTokenEmpty, setIsTokenEmpty] = useState(false);

    const { data, setData, get } = useForm({
        token: "",
    });

    const submit = (e) => {
        e.preventDefault();

        if (data.token) get(route("teams.join", data.token));
        else setIsTokenEmpty(true);
    };

    return (
        <>
            {isTokenEmpty && (
                <Toast
                    key={useRandomInt()}
                    id="input-token-information"
                    content="Mohon masukkan token."
                />
            )}

            <form onSubmit={submit}>
                <UserGroupIcon className="h-10 w-10 mb-4" />
                <h3 className="font-bold text-xs">GABUNG TIM</h3>
                <div className="form-control my-4">
                    <label htmlFor="token" className="font-bold mb-2">
                        Token Tim
                    </label>
                    <div className="join">
                        <input
                            id="token"
                            type="text"
                            name="token"
                            value={data.token}
                            autoComplete="token"
                            isfocused="true"
                            onChange={(e) => setData("token", e.target.value)}
                            className="input input-bordered join-item z-[1] w-full"
                        />
                    </div>
                </div>
                <button className="btn btn-primary w-full mb-2">
                    Gabung Tim
                </button>
            </form>
        </>
    );
}
