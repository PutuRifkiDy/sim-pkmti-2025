import ParticipantLayout from "@/Layouts/ParticipantLayout";
import { IconJoinOrCreate } from "@/Components/iconAdmin";
import { Link } from "@inertiajs/react";
import Toast from "@/Components/Toast";
import { useRandomInt } from "@/utils";

export default function JoinOrCreate({ auth, flash }) {
    const { user } = auth;

    return (
        <ParticipantLayout user={user} title="Buat Atau Gabung Tim">
            {flash.msg && (
                <Toast
                    key={useRandomInt()}
                    id="team_information"
                    content={flash.msg}
                />
            )}
            <div className="bg-white flex gap-5 flex-col justify-center items-center py-10 rounded-[14px]">
                <IconJoinOrCreate />
                <div className="flex flex-col gap-6 justify-center items-center text-center">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <p className="font-bold text-[20px] leading-[28px] tracking-[0.03em]">Pendaftaran</p>
                        <p className="font-normal text-[16px] leading-[24px] text-[#5A607F] md:w-[400px] md:block hidden">Pilih untuk bergabung dengan tim yang sudah ada atau buat tim baru untuk memulai.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link
                            as="button"
                            href={route("teams.create_tim")}
                            className="font-bold bg-[#42A1A4] md:px-48 px-4 py-3 text-[20px] tracking-[0.03em] leading-[26px] rounded-md text-white hover:text-white hover:bg-[#59DFD1] dark:text-gray-400 dark:hover:text-white transition-all duration-300 shadow-[0_0_10px_#42A1A4]"
                        >
                            Buat Tim
                        </Link>
                        <p className="text-[18px] leading-[28px]">atau</p>
                        <div className="flex flex-col gap-1">
                            <Link
                                as="button"
                                href={route("teams.join_tim")}
                                className="font-bold border-2 border-[#59DFD1] tracking-[0.03em] leading-[26px] text-[20px] md:px-48 px-4 py-3 rounded-md text-[#59DFD1] hover:text-white hover:bg-[#42A1A4] hover:border-[#42A1A4] dark:text-gray-400 dark:hover:text-white transition-all duration-300 flex flex-row gap-2 justify-center items-center hover:shadow-[0_0_10px_#42A1A4]"
                            >
                                Gabung Tim
                            </Link>
                            <p className="text-[14px] leading-[28px] text-start">
                                *Hanya ketua tim yang dapat membuat tim
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </ParticipantLayout>
    );
}
