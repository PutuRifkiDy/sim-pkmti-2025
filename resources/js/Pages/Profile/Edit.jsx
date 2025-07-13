import ParticipantLayout from "@/Layouts/ParticipantLayout";
import UpdateProfileForm from "./Partials/UpdateProfileForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";

export default function EditProfile({ auth }) {
    const user = auth.user;
    return (
        <ParticipantLayout user={user} title="Beranda">
            <div className="shadow flex md:justify-start justify-center gap-5 flex-col px-10 py-10 rounded-[14px] bg-white ">
                <div role="tablist" className="tabs tabs-bordered">
                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab leading-[28px] tracking-[0.03em] "
                        aria-label="Ubah Profile"
                        defaultChecked
                    />
                    <div role="tabpanel" className="tab-content py-5">
                        <UpdateProfileForm user={user} />
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab leading-[28px] tracking-[0.03em] "
                        aria-label="Ubah Password"
                    />
                    <div role="tabpanel" className="tab-content py-5">
                        <UpdatePasswordForm />
                    </div>
                </div>
                <div className="mb-12 lg:hidden"></div>
            </div>
        </ParticipantLayout>
    );
}
