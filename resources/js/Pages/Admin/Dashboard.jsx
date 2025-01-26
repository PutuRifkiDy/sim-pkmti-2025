import AdminLayout from "@/Layouts/AdminLayout";

export default function Dashboard({ auth }) {
    return (
        <>
            <AdminLayout user={auth.user} title="Admin">
                <h1 className="text-4xl font-black mb-8">Halo, Admin!</h1>
            </AdminLayout>
        </>
    );
}
