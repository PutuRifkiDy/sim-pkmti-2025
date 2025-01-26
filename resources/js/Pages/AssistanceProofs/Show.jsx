import ParticipantLayout from "@/Layouts/ParticipantLayout";
import {
    ArrowUturnRightIcon,
    CameraIcon,
    InformationCircleIcon,
    PhotoIcon,
} from "@heroicons/react/24/solid";
import AddProofForm from "./Partials/AddProofForm";
import { useRandomInt } from "@/utils";
import Toast from "@/Components/Toast";
import Proof from "./Partials/Proof";

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

            <ParticipantLayout title="Bukti Asistensi" user={user}>
                <div className="lg:w-1/2">
                    <CameraIcon className="h-10 w-10 mb-4" />
                    <h3 className="font-bold text-xs mb-4">BUKTI ASISTENSI</h3>

                    <div className="flex gap-4">
                        <PhotoIcon className="h-6 w-6 mb-4" />
                        <span className="font-bold">
                            {`${proofs.length} / 3`} Bukti
                        </span>
                    </div>

                    {proofs.length < 3 && (
                        <div className="alert alert-info mb-4" role="alert">
                            <InformationCircleIcon className="h-6 w-6" />
                            <div>
                                <h3 className="font-bold">Catatan</h3>
                                <div className="text-xs">
                                    Asistensi masih kurang, lakukan
                                    minimal&nbsp;
                                    {3 - proofs.length} kali lagi.
                                </div>
                            </div>
                        </div>
                    )}

                    <AddProofForm />

                    {proofs &&
                        proofs.map((proof, i) => {
                            return (
                                <Proof key={i} order={i + 1} proof={proof} />
                            );
                        })}
                </div>
            </ParticipantLayout>
        </>
    );
}
