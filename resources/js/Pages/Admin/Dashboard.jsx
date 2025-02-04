import AdminLayout from "@/Layouts/AdminLayout";

export default function Dashboard({ auth, proposals, teams, users, proposal_ispending }) {
    return (
        <>
            <AdminLayout user={auth.user} title="Admin">
                <div className="flex md:flex-row justify-between flex-col gap-5">
                    <div className="flex flex-row gap-16 bg-white rounded-[14px] p-5 shadow">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-[16px] text-[#202224]/60 tracking-[0.03em]">Jumlah Pengguna</p>
                            <p className="font-bold text-[28px] tracking-[1px]">{users}</p>
                        </div>
                        <img src="/images/admin/icon-jumlah-pengguna.png" className="w-[60px] h-[60px]" alt="" />
                    </div>
                    <div className="flex flex-row gap-16 bg-white rounded-[14px] p-5 shadow">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-[16px] text-[#202224]/60 tracking-[0.03em]">Jumlah Tim</p>
                            <p className="font-bold text-[28px] tracking-[1px]">{teams}</p>
                        </div>
                        <img src="/images/admin/icon-jumlah-tim.png" className="w-[60px] h-[60px]" alt="" />
                    </div>
                    <div className="flex flex-row gap-16 bg-white rounded-[14px] p-5 shadow">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-[16px] text-[#202224]/60 tracking-[0.03em]">Jumlah Proposal</p>
                            <p className="font-bold text-[28px] tracking-[1px]">{proposals}</p>
                        </div>
                        <img src="/images/admin/icon-jumlah-proposal.png" className="w-[60px] h-[60px]" alt="" />
                    </div>
                    <div className="flex flex-row gap-16 bg-white rounded-[14px] p-5 shadow">
                        <div className="flex flex-col gap-1">
                            <p className="font-medium text-[16px] text-[#202224]/60 tracking-[0.03em]">Total Pending</p>
                            <p className="font-bold text-[28px] tracking-[1px]">{proposal_ispending}</p>
                        </div>
                        <img src="/images/admin/icon-pending.png" className="w-[60px] h-[60px]" alt="" />
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}
