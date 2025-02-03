import Toast from "@/Components/Toast";
import { useRandomInt } from "@/utils";
import { UserIcon } from "@heroicons/react/24/solid";
import { useForm } from "@inertiajs/react";

export default function UpdateProfileForm({ user }) {
    const { data, setData, patch, processing, errors, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            nim: user.nim,
            phone: user.phone,
            line_id: user.line_id,
        });

    const updateProfile = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    return (
        <>
            {recentlySuccessful && (
                <Toast
                    key={useRandomInt()}
                    id="update_password_success"
                    content="Perubahan profil berhasil disimpan."
                />
            )}

            <form onSubmit={updateProfile}>
                {/* Input name */}
                <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
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
                            onChange={(e) => setData("name", e.target.value)}
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
                            onChange={(e) => setData("email", e.target.value)}
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
                            onChange={(e) => setData("phone", e.target.value)}
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
                            onChange={(e) => setData("line_id", e.target.value)}
                            className="input input-bordered"
                        />

                        <p className="mt-2 text-error">{errors.line_id}</p>
                    </div>

                </div>


                <button
                    className="flex flex-row justify-center items-center font-bold bg-[#42A1A4] px-10 py-2 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#59DFD1] dark:text-gray-400 dark:hover:text-white transition-all duration-300 shadow-[0_0_10px_#42A1A4]"
                    disabled={processing}
                    type="submit"
                >
                    {/* <UserIcon className="h-6 w-6" /> */}
                    Simpan
                </button>

            </form>
        </>
    );
}
