import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import ToastError from "../../Components/ToastError"
import * as AOS from 'aos';
import 'aos/dist/aos.css';

export default function Register() {
    const [toastMessages, setToastMessages] = useState([]);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        nim: "",
        phone: "",
        line_id: "",
        password: "",
        password_confirmation: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    useEffect(() => {
        // Ambil semua pesan error yang ada dan simpan dalam array
        const newMessages = Object.values(errors).flat();
        setToastMessages(newMessages);
    }, [errors]);

    useEffect(() => {
        if (toastMessages.length > 0) {
            const timeout = setTimeout(() => {
                setToastMessages((prevMessages) => prevMessages.slice(1));
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [toastMessages]);


    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };


    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: 'ease-out-cubic',
            offset: 100,
            delay: 0,
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
    }, []);


    return (
        <>
            <Head title="Registrasi" />
            <div className="fixed top-5 right-5 flex flex-col gap-2">
                {toastMessages.map((message, index) => (
                    <ToastError key={index} content={message} />
                ))}
            </div>
            <section className="flex md:flex-row flex-col md:justify-between justify-center items-center md:px-24 px-2 light:bg-[#F4F4F4] w-full md:py-12 py-0">

                {status && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        {status}
                    </div>
                )}
                <div
                    className="md:flex hidden justify-center items-center md:w-7/12 w-full"
                >
                    <img src="images/icon-login.png" className="md:w-[504px] w-full md:h-[504.06px] h-auto" data-aos="zoom-in" data-aos-delay="200" alt="icon-login" />
                </div>
                <div
                    className="border-[1px] shadow-sm-[#000000] border-slate-300 flex flex-col light:bg-[#FFFFFF] rounded-[15px] md:p-10 p-5 md:w-5/12 w-full gap-5"
                >
                    <div className="flex justify-center items-center">
                        <Link href={route("welcome")}>
                            <img src="images/Logo-PKM-TI-2025.png" alt="" className="w-[115px] h-[143px] " />
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <form onSubmit={submit}>
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="fullName" className="text-[18px] font-semibold">Nama Lengkap</label>
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
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-[18px] font-semibold">Email</label>
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


                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="line_id" className="text-[18px] font-semibold ">ID Line</label>
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
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="phone" className="text-[18px] font-semibold">Telepon</label>
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


                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="nim" className="text-[18px] font-semibold">
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


                                </div>

                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="password"
                                        className="text-[18px] font-semibold"
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


                                </div>

                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="password_confirmation"
                                        className="text-[18px] font-semibold"
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

                                </div>
                            </div>




                            {/* <button
                                    className="mt-3 btn text-[18px] bg-[#42A1A4] text-white w-full mb-2 hover:text-white hover:bg-[#59DFD1] dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:shadow-[0_0_10px_#42A1A4]"
                                    onClick={prevStep}
                                    type="button"
                                >
                                    Kembali
                                </button>
                                <button
                                    className="mt-3 btn text-[18px] bg-[#42A1A4] text-white w-full mb-2 hover:text-white hover:bg-[#59DFD1] dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:shadow-[0_0_10px_#42A1A4]"
                                    onClick={nextStep}
                                    type="button"
                                >
                                    Selanjutnya
                                </button> */}
                            <button
                                className="mt-3 btn text-[18px] bg-[#42A1A4] text-white w-full mb-2 hover:text-white hover:bg-[#59DFD1] transition-all duration-300 hover:shadow-[0_0_10px_#42A1A4]"
                                disabled={processing}
                            >
                                Masuk
                            </button>
                            <p className="text-center mt-5 flex flex-row justify-center gap-1 text-[16px] ">
                                Sudah mempunyai akun?
                                <Link
                                    href={route("login")}
                                    className="text-[#42A1A4]"
                                    as="button"
                                >
                                    Login
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>




            {/* <div className="w-full flex justify-center items-center">
                <div className="flex-col border-[1px] border-base-content border-opacity-20 rounded-lg p-8 my-8">
                    <img
                        src="/images/logo.png"
                        alt="Logo PKM TI 2024"
                        className="w-24 mx-auto mb-4"
                    />

                    <form onSubmit={submit}>
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
                                className="input input-bordered dark:bg-[#1d232a]"
                            />

                            <p className="mt-2 text-error">{errors.name}</p>
                        </div>

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
            </div> */}
        </>
    );
}
