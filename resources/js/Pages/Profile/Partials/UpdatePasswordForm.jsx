import Toast from "@/Components/Toast";
import { useRandomInt } from "@/utils";
import {
    EyeIcon,
    EyeSlashIcon,
    InformationCircleIcon,
    KeyIcon,
} from "@heroicons/react/24/solid";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function UpdatePasswordForm() {
    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("current_password", "password", "password_confirmation");
        };
    }, []);

    const updatePassword = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current.focus();
                }
            },
        });
    };
    return (
        <>
            {recentlySuccessful && (
                <Toast
                    key={useRandomInt()}
                    id="update_password_information"
                    content="Password berhasil diganti."
                />
            )}

            <form onSubmit={updatePassword}>
                {/* Input current password */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
                    <div className="form-control my-2">
                        <label
                            htmlFor="current_password"
                            className="font-bold mb-2"
                        >
                            Password Lama
                        </label>
                        <div className="join">
                            <input
                                id="current_password"
                                type="password"
                                name="current_password"
                                value={data.current_password}
                                onChange={(e) =>
                                    setData("current_password", e.target.value)
                                }
                                className="input input-bordered w-full join-item z-[1]"
                            />
                            <label className="btn btn-square join-item swap">
                                <input
                                    type="checkbox"
                                    onClick={() => {
                                        let x =
                                            document.getElementById(
                                                "current_password"
                                            );
                                        x.type =
                                            x.type === "password"
                                                ? "text"
                                                : "password";
                                    }}
                                />
                                <EyeSlashIcon className="h-6 w-6 swap-on" />
                                <EyeIcon className="h-6 w-6 swap-off" />
                            </label>
                        </div>

                        <p className="mt-2 text-error">{errors.current_password}</p>
                    </div>

                    {/* Input password */}
                    <div className="form-control my-2">
                        <label htmlFor="password" className="font-bold mb-2">
                            Password Baru
                        </label>
                        <div className="join">
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="input input-bordered w-full join-item z-[1]"
                            />
                            <label className="btn btn-square join-item swap">
                                <input
                                    type="checkbox"
                                    onClick={() => {
                                        let x = document.getElementById("password");
                                        x.type =
                                            x.type === "password"
                                                ? "text"
                                                : "password";
                                    }}
                                />
                                <EyeSlashIcon className="h-6 w-6 swap-on" />
                                <EyeIcon className="h-6 w-6 swap-off" />
                            </label>
                        </div>

                        <p className="mt-2 text-error">{errors.password}</p>
                    </div>

                    {/* Input confirmation password */}
                    <div className="form-control my-2">
                        <label
                            htmlFor="password_confirmation"
                            className="font-bold mb-2"
                        >
                            Konfirmasi Password
                        </label>
                        <div className="join">
                            <input
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData("password_confirmation", e.target.value)
                                }
                                className="input input-bordered w-full join-item z-[1]"
                            />
                            <label className="btn btn-square join-item swap">
                                <input
                                    type="checkbox"
                                    onClick={() => {
                                        let x = document.getElementById(
                                            "password_confirmation"
                                        );
                                        x.type =
                                            x.type === "password"
                                                ? "text"
                                                : "password";
                                    }}
                                />
                                <EyeSlashIcon className="h-6 w-6 swap-on" />
                                <EyeIcon className="h-6 w-6 swap-off" />
                            </label>
                        </div>

                        <p className="mt-2 text-error">
                            {errors.password_confirmation}
                        </p>
                    </div>
                </div>

                <button
                    className="flex flex-row justify-center items-center font-bold bg-[#42A1A4] px-10 py-2 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#59DFD1] dark:text-gray-200 dark:hover:text-white transition-all duration-300 shadow-[0_0_10px_#42A1A4]"
                    disabled={processing}
                    type="submit"
                >
                    {/* <KeyIcon className="h-6 w-6" /> */}
                    Ganti password
                </button>
            </form>
        </>
    );
}
