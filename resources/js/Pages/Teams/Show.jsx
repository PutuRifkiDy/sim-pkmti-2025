import ParticipantLayout from "@/Layouts/ParticipantLayout";
import TeamInformation from "./Partials/TeamInformation";
import TeamMembers from "./Partials/TeamMembers";
import Toast from "@/Components/Toast";
import { useRandomInt } from "@/utils";

export default function Show({ auth, team, lecturers, flash }) {
    const { user } = auth;

    return (
        <ParticipantLayout user={user} title="Tim" header={"Tim Saya"}>
            {flash.msg && (
                <Toast
                    key={useRandomInt()}
                    content={flash.msg}
                    id="team_information"
                />
            )}
            <div className="mx-auto w-full mt-5">
                <div className="bg-white dark:bg-[#040529] p-4 shadow sm:rounded-lg sm:p-8 mb-6">

                    <TeamInformation
                        user={user}
                        team={team}
                        lecturers={lecturers}
                    />
                </div>

                <div className="bg-white dark:bg-[#040529] p-4 shadow sm:rounded-lg sm:p-8 overflow-x-auto">
                    <TeamMembers user={user} team={team} />
                </div>
            </div>
        </ParticipantLayout>
    );
}
