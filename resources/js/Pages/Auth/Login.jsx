import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import ToastError from "@/Components/ToastError";
import * as AOS from 'aos';
import 'aos/dist/aos.css';

export default function Login({ status, canResetPassword }) {
    const [toastMessages, setToastMessages] = useState([]);
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


    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
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
            <Head title="Masuk" />
            {toastMessages.map((message, index) => (
                <ToastError key={index} content={message} />
            ))}
            <section className="flex md:flex-row flex-col md:justify-between justify-center items-center md:px-24 px-2 dark:bg-[#1d232a] light:bg-[#F4F4F4] w-full h-[100vh]">
                {status && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        {status}
                    </div>
                )}
                {/* Start Login */}
                <div
                    className="md:flex hidden justify-center items-center md:w-7/12 w-full"
                >
                    <img src="images/icon-login.png" className="md:w-[504px] w-full md:h-[504.06px] h-auto" data-aos="zoom-in" data-aos-delay="200" alt="icon-login" />
                </div>
                <div
                    className="border-[1px] shadow-sm-[#000000] border-slate-300 flex flex-col dark:bg-[#1d232a] light:bg-[#FFFFFF] rounded-[15px] md:p-10 p-5 md:w-5/12 w-full gap-5"
                >
                    <div className="flex justify-center items-center">
                        <Link href={route("welcome")}>
                            <img src="images/Logo-PKM-TI-2025.png" alt="" className="w-[115px] h-[143px] " />
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <form onSubmit={submit} className="flex flex-col gap-2">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="nim" className="text-[18px] font-semibold">NIM</label>
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

                                {/* <p className="mt-2 text-error">{errors.nim}</p> */}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="password" className="text-[18px] font-semibold">Password</label>
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

                                {/* <p className="mt-2 text-error">{errors.password}</p> */}
                            </div>
                            {/* start remember in reset password */}
                            <div className="flex flex-row justify-between items-center">
                                <div className="form-control mb-3 mt-3">
                                    <label className="flex flex-row gap-2">
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
                                        <span className="text-[16px]">
                                            Ingatkan saya
                                        </span>
                                    </label>
                                </div>
                                {/* {canResetPassword && (
                                    <div className="text-sm text-end mt-3">
                                        <Link
                                            href={route('password.request')}
                                            className="font-regular text-[#4880FF] hover:text-[#4880FF]/80 underline hover:no-underline transition-all duration-400 ease-in-out"
                                        >
                                            Forgot your password?
                                        </Link>
                                    </div>
                                )} */}
                            </div>
                            <button
                                className="btn text-[18px] bg-[#42A1A4] text-white w-full mb-2 hover:text-white hover:bg-[#59DFD1] dark:text-gray-400 dark:hover:text-white transition-all duration-300 hover:shadow-[0_0_10px_#42A1A4]"
                                disabled={processing}
                            >
                                Masuk
                            </button>
                            <p className="text-center mt-5 flex flex-row justify-center gap-1 text-[16px]">
                                Belum mempunyai akun?
                                <Link
                                    href={route("register")}
                                    className="text-[#42A1A4]"
                                    as="button"
                                >
                                    Buat akun
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </section>




            {/* <div className="w-full h-screen flex justify-center items-center">
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
            </div> */}
        </>
    );
}
