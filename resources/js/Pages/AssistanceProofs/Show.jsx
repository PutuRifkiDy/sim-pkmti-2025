import ParticipantLayout from "@/Layouts/ParticipantLayout";
import {
    ArrowUturnRightIcon,
    CameraIcon,
    InformationCircleIcon,
    PhotoIcon,
    ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import AddProofForm from "./Partials/AddProofForm";
import { useRandomInt } from "@/utils";
import Toast from "@/Components/Toast";
import Proof from "./Partials/Proof";
import { useState } from "react";
import { useEffect } from "react";

export default function Show({ auth, proofs, flash }) {
    const { user } = auth;
    console.log(proofs);
    return (
        <>
            {flash.msg && (
                <Toast
                    key={useRandomInt()}
                    id="assistance_proofs_flash"
                    content={flash.msg}
                />
            )}

            <ParticipantLayout title="Bukti Asistensi" user={user} header={"Bukti Asistensi"}>
                <div className="flex gap-5 flex-col px-10 py-10 rounded-[14px] bg-white mt-5">



                    <div className="flex gap-4">
                        <PhotoIcon className="h-6 w-6 mb-4" />
                        <span className="font-bold">
                            {`${proofs.length} / 3`} Bukti
                        </span>
                    </div>

                    {proofs.length < 3 && (
                        <div className="w-full px-5 py-3.5 flex flex-row gap-5 items-center bg-[#357F8B]/10 border-l-4 border-[#357F8B] rounded-l-[4px] mb-10" role="alert">
                            <InformationCircleIcon className="h-6 w-6" />
                            <div className="flex flex-col gap-2">
                                <h3 className="font-bold text-[18px] leading-[16px] text-[]">Catatan</h3>
                                <div className="font-bold text-[14px] leading-[16px] text-[#357F8B]">
                                    Asistensi masih kurang, lakukan
                                    minimal&nbsp;
                                    {3 - proofs.length} kali lagi.
                                </div>
                            </div>
                        </div>
                    )}

                    <AddProofForm />
                </div>
                <div className="flex gap-5 flex-col px-10 py-10 rounded-[14px] bg-white mt-5">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
                        {proofs && proofs.length > 0 ?
                            (proofs.map((proof, i) => {
                                return (
                                    <Proof key={i} order={i + 1} proof={proof} />
                                );
                            }))
                            :
                            (
                                <div className={`w-full px-5 py-3.5 flex flex-row gap-5 items-center rounded-l-[4px] bg-[#E82323]/10 border-l-4 border-[#E82323] text-[#E82323]`}>
                                    <ExclamationTriangleIcon className="h-6 w-6 fill-[#FA3434]" />
                                    <p className="font-bold text-[14px] leading-[16px]">
                                        Anda Belum Mengisi Bukti Asistensi
                                    </p>
                                </div>
                            )
                        }
                        <div />
                    </div>
                </div>
            </ParticipantLayout>
        </>
    );
}
