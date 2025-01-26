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
            <div className="lg:flex lg:gap-10 lg:overflow-x-visible overflow-x-auto">
                <TeamInformation
                    user={user}
                    team={team}
                    lecturers={lecturers}
                />
                <div className="my-8 lg:hidden"></div>
                <TeamMembers user={user} team={team} />
            </div>
        </ParticipantLayout>
    );
}
