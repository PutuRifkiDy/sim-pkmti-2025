import { CancelUpdateProfile, IconEditForDashboard } from "@/Components/IconLanding";
import Toast from "@/Components/Toast";
import { useRandomInt } from "@/utils";
import { UserIcon } from "@heroicons/react/24/solid";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function UpdateProfileForm({ user }) {
    const { data, setData, patch, processing, errors, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            nim: user.nim,
            phone: user.phone,
            line_id: user.line_id,
        });

    const [updateProfileInformation, setUpdateProfileInformation] = useState(false);



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

            <div className='flex flex-row justify-between w-full mb-8'>
                <header>
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-200">Informasi Profil</h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Perbarui informasi profil akun Anda.
                    </p>
                </header>
                {updateProfileInformation == false && (
                    <button className='bg-[#42A1A4] hover:bg-[#42A1A4]/80 text-white dark:bg-[#42A1A4] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none min-w-max py-2 px-5' onClick={() => setUpdateProfileInformation(true)}>
                        <IconEditForDashboard />
                        Edit
                    </button>
                )}
                {updateProfileInformation == true && (
                    <button className='border-[#42A1A4] border-2 text-[#42A1A4] dark:border-[#42A1A4] dark:text-white p-3 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none min-w-max py-2 px-5' onClick={() => setUpdateProfileInformation(false)}>
                        <CancelUpdateProfile />
                        Cancel
                    </button>
                )}
            </div>

            {updateProfileInformation == true && (
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
                        className="flex flex-row justify-center items-center font-bold bg-[#42A1A4] px-10 py-2 text-[18px tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#59DFD1]  transition-all duration-300 shadow-[0_0_10px_#42A1A4]"
                        disabled={processing}
                        type="submit"
                    >
                        {/* <UserIcon className="h-6 w-6" /> */}
                        Simpan
                    </button>

                </form>
            )}

            {updateProfileInformation == false && (
                <div className='mt-10 grid md:grid-cols-2 grid-cols-1 gap-5'>
                    <div>
                        <label htmlFor="name" value="Name" className='text-[12px] text-[#676767] dark:text-gray-400 block text-sm font-medium leading-relaxed' >Nama</label>
                        <p>{data.name}</p>
                    </div>
                    <div>
                        <label htmlFor="name" value="Name" className='text-[12px] text-[#676767] dark:text-gray-400 block text-sm font-medium leading-relaxed' >NIM</label>
                        <p>{data.nim}</p>
                    </div>
                    <div>
                        <label htmlFor="name" value="Name" className='text-[12px] text-[#676767] dark:text-gray-400 block text-sm font-medium leading-relaxed' >Email</label>
                        <p>{data.email}</p>
                    </div>
                    <div>
                        <label htmlFor="name" value="Nomor" className='text-[12px] text-[#676767] dark:text-gray-400 block text-sm font-medium leading-relaxed' >Nomor Telepon</label>
                        <p>{data.phone}</p>
                    </div>
                    <div>
                        <label htmlFor="name" value="Nomor" className='text-[12px] text-[#676767] dark:text-gray-400 block text-sm font-medium leading-relaxed' >ID Line</label>
                        <p>{data.line_id}</p>
                    </div>
                </div>
            )}

        </>
    );
}
