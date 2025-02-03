import ParticipantLayout from "@/Layouts/ParticipantLayout";
import TeamInformation from "./Partials/TeamInformation";
import TeamMembers from "./Partials/TeamMembers";
import Toast from "@/Components/Toast";
import { useRandomInt } from "@/utils";

export default function Show({ auth, team, lecturers, flash }) {
    const { user } = auth;

    return (
        <ParticipantLayout user={user} title="Tim">
            {flash.msg && (
                <Toast
                    key={useRandomInt()}
                    content={flash.msg}
                    id="team_information"
                />
            )}
            <div className="bg-white flex gap-5 flex-col px-10 py-10 rounded-[14px]">
                <div role="tablist" className="tabs tabs-bordered">
                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab leading-[28px] tracking-[0.03em] "
                        aria-label="Informasi Tim"
                        defaultChecked
                    />
                    <div role="tabpanel" className="tab-content py-5">
                        <TeamInformation
                            user={user}
                            team={team}
                            lecturers={lecturers}
                        />
                    </div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab leading-[28px] tracking-[0.03em] "
                        aria-label="Anggota Tim"
                    />
                    <div role="tabpanel" className="tab-content py-5">
                        <TeamMembers user={user} team={team} />
                    </div>
                </div>
            </div>
        </ParticipantLayout>
    );
}
