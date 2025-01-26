import ParticipantLayout from "@/Layouts/ParticipantLayout";
import UpdateProfileForm from "./Partials/UpdateProfileForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";

export default function EditProfile({ auth }) {
    const user = auth.user;
    return (
        <ParticipantLayout user={user} title="Beranda">
            <div className="lg:flex lg:gap-10">
                <UpdateProfileForm user={user} />
                <div className="mb-12 lg:hidden"></div>
                <UpdatePasswordForm />
            </div>
        </ParticipantLayout>
    );
}
