import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        nim: "",
        phone: "",
        line_id: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <>
            <Head title="Registrasi" />

            <div className="w-full flex justify-center items-center">
                <div className="flex-col border-[1px] border-base-content border-opacity-20 rounded-lg p-8 my-8">
                    <img
                        src="/images/logo.png"
                        alt="Logo PKM TI 2024"
                        className="w-24 mx-auto mb-4"
                    />

                    <form onSubmit={submit}>
                        {/* Input name */}
                        <div className="form-control my-2">
                            <label htmlFor="name" className="font-bold mb-2">
                                Nama Lengkap
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                autoComplete="name"
                                isfocused="true"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="input input-bordered"
                            />

                            <p className="mt-2 text-error">{errors.name}</p>
                        </div>

                        {/* Input NIM */}
                        <div className="form-control my-2">
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

                        {/* Input email */}
                        <div className="form-control my-2">
                            <label htmlFor="email" className="font-bold mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                autoComplete="email"
                                isfocused="true"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="input input-bordered"
                            />

                            <p className="mt-2 text-error">{errors.email}</p>
                        </div>

                        {/* Input phone */}
                        <div className="form-control my-2">
                            <label htmlFor="phone" className="font-bold mb-2">
                                Telepon
                            </label>
                            <input
                                id="phone"
                                type="text"
                                name="phone"
                                value={data.phone}
                                autoComplete="phone"
                                isfocused="true"
                                onChange={(e) =>
                                    setData("phone", e.target.value)
                                }
                                className="input input-bordered"
                            />

                            <p className="mt-2 text-error">{errors.phone}</p>
                        </div>

                        {/* Input Line ID */}
                        <div className="form-control my-2">
                            <label htmlFor="line_id" className="font-bold mb-2">
                                ID Line
                            </label>
                            <input
                                id="line_id"
                                type="text"
                                name="line_id"
                                value={data.line_id}
                                autoComplete="line_id"
                                isfocused="true"
                                onChange={(e) =>
                                    setData("line_id", e.target.value)
                                }
                                className="input input-bordered"
                            />

                            <p className="mt-2 text-error">{errors.line_id}</p>
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
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
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

                        <button
                            className="btn btn-primary w-full mb-2"
                            disabled={processing}
                        >
                            Buat akun
                        </button>
                    </form>

                    <Link
                        href={route("login")}
                        className="link link-hover flex justify-center"
                        as="span"
                    >
                        Sudah punya akun?
                    </Link>
                </div>
            </div>
        </>
    );
}
