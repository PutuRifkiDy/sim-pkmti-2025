import ParticipantLayout from "@/Layouts/ParticipantLayout";
import UpdateProfileForm from "./Partials/UpdateProfileForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";

export default function EditProfile({ auth }) {
    const user = auth.user;
    return (
        <ParticipantLayout user={user} title="Beranda" header={"Profil Saya"}>

            <div className="mx-auto w-full mt-5">
                <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8 mb-6">

                    <UpdateProfileForm
                        user={user}
                        className="w-full"
                    />
                </div>

                <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                    <UpdatePasswordForm className="w-full" />
                </div>

                {/* <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <DeleteUserForm className="max-w-xl" />
                    </div> */}
            </div>
        </ParticipantLayout>
    );
}
