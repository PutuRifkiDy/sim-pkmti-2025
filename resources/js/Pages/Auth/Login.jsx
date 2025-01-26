import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nim: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <>
            <Head title="Masuk" />

            <div className="w-full h-screen flex justify-center items-center">
                {status && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        {status}
                    </div>
                )}
                <div className="flex-col border-[1px] border-base-content border-opacity-20 rounded-lg p-8 mb-8">
                    <img
                        src="/images/logo.png"
                        alt="Logo PKM TI 2024"
                        className="w-24 mx-auto mb-4"
                    />
                    <form onSubmit={submit}>
                        <div className="form-control my-4">
                            <label htmlFor="nim" className="font-bold mb-2">
                                NIM
                            </label>
                            <input
                                id="nim"
                                type="text"
                                name="nim"
                                value={data.nim}
                                autoComplete="nim"
                                isfocused="true"
                                onChange={(e) => setData("nim", e.target.value)}
                                className="input input-bordered"
                            />

                            <p className="mt-2 text-error">{errors.nim}</p>
                        </div>

                        {/* Input password */}
                        <div className="form-control my-2">
                            <label
                                htmlFor="password"
                                className="font-bold mb-2"
                            >
                                Password
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
                                            let x =
                                                document.getElementById(
                                                    "password"
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

                            <p className="mt-2 text-error">{errors.password}</p>
                        </div>

                        <div className="form-control mb-2">
                            <label className="label cursor-pointer justify-normal">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    name="remember"
                                    checked={data.remember}
                                    className="checkbox inline"
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="label-text ms-2">
                                    Ingat saya
                                </span>
                            </label>
                        </div>

                        <button
                            className="btn btn-primary w-full mb-2"
                            disabled={processing}
                        >
                            Masuk
                        </button>
                    </form>

                    <Link
                        href={route("register")}
                        className="btn btn-outline btn-primary w-full mb-4"
                        as="button"
                    >
                        Buat akun
                    </Link>

                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="link link-hover flex justify-center"
                            as="span"
                        >
                            Lupa password?
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
}
