import Toast from "@/Components/Toast";
import ParticipantLayout from "@/Layouts/ParticipantLayout";
import CreateProposalForm from "./Partials/CreateProposalForm";
import { useParam, useRandomInt } from "@/utils";
import UpdateProposalForm from "./Partials/UpdateProposalForm";

export default function Show({ auth, proposal, flash }) {
    const { user } = auth;

    return (
        <ParticipantLayout title="Proposal" user={user} header={"Proposal PKM"}>
            {flash.msg && (
                <Toast
                    key={useRandomInt()}
                    id="update_password_success"
                    content={flash.msg}
                />
            )}
            <div className="mt-5">
                {proposal ? (
                    <UpdateProposalForm user={user} proposal={proposal} />
                ) : (
                    <CreateProposalForm />
                )}
            </div>

        </ParticipantLayout>
    );
}
