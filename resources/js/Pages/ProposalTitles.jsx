import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import NavBar from '@/Components/NavBar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function ProposalTitles({ auth }) {
    const rowNumberTemplate = (rowData, column) => column.rowIndex + 1;

    const proposalTitles = [
        {
            id: 1,
            judul_proposal: 'Pengembangan Aplikasi Mobile untuk Manajemen Kesehatan',
            jenis_pkm: 'PKM-KC',
            instansi: 'Universitas Teknologi Indonesia'
        },
        {
            id: 2,
            judul_proposal: 'Inovasi Teknologi Hijau untuk Pengelolaan Sampah',
            jenis_pkm: 'PKM-GT',
            instansi: 'Institut Sains dan Teknologi Nasional'
        },
        {
            id: 3,
            judul_proposal: 'Penerapan AI dalam Sistem Keamanan Jaringan',
            jenis_pkm: 'PKM-K',
            instansi: 'Politeknik Informatika Indonesia'
        },
        {
            id: 4,
            judul_proposal: 'Riset dan Pengembangan Teknologi Energi Terbarukan',
            jenis_pkm: 'PKM-PM',
            instansi: 'Universitas Energi Terbarukan'
        },
        {
            id: 5,
            judul_proposal: 'Pengembangan Sistem Informasi untuk Manajemen Pendidikan',
            jenis_pkm: 'PKM-PI',
            instansi: 'Sekolah Tinggi Teknologi Pendidikan'
        },
        {
            id: 6,
            judul_proposal: 'Inovasi Teknologi Pertanian Berkelanjutan',
            jenis_pkm: 'PKM-VGK',
            instansi: 'Universitas Pertanian Indonesia'
        }
    ];

    // Tambahkan state untuk jenis PKM yang dipilih
    const [selectedType, setSelectedType] = useState(null);

    // Filter data berdasarkan jenis PKM
    const filteredData = selectedType
        ? proposalTitles
              .filter(proposal => proposal.jenis_pkm === selectedType)
              .map(proposal => ({
                  id: proposal.id,
                  title: proposal.judul_proposal,
                  type_pkm: proposal.jenis_pkm,
                  institution: proposal.instansi
              }))
        : proposalTitles.map(proposal => ({
              id: proposal.id,
              title: proposal.judul_proposal,
              type_pkm: proposal.jenis_pkm,
              institution: proposal.instansi
          }));

    return (
        <>
        <Head title="Judul Proposal" />
        <NavBar auth={auth} />
        <div className='flex flex-col px-12 py-24 light:bg-[#F7F7F7] dark:bg-[#1d232a]'>
            <div className='flex flex-col items-start mt-4 gap-2 '>
                <h1 className='font-bold text-5xl leading-[1.1] text-[#111E41] dark:text-gray-400 md:w-2/3 w-full '>Daftar Judul Lolos Pendanaan Tingkat Nasional</h1> 
                <p className='md:w-3/4 w-full text-justify dark:text-gray-300'>Lorem ipsum dolor sit amet consectetur. Ut elementum enim ultricies quam accumsan. Malesuada amet est vel id mattis pulvinar. Nulla fames ut turpis diam eget morbi venenatis. Gravida dictum mauris ac ac sem risus felis.</p>
            </div>
            <div className='flex flex-wrap gap-3 my-4'>
                {['PKM-KC', 'PKM-K', 'PKM-PM', 'PKM-PI', 'PKM-GT', 'PKM-VGK'].map((type) => (
                    <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`border px-16 py-4 md:min-w-fit min-w-full rounded-xl shadow-xl font-bold ${
                            selectedType === type ? 'bg-[#42A1A4] text-white' : 'border-gray-300 text-black dark:text-gray-400 '
                        }`}
                    >
                        {type}
                    </button>
                ))}
                <button
                    onClick={() => setSelectedType(null)}
                    className={`border px-16 py-4 rounded-xl shadow-xl font-bold ${
                        selectedType === null ? 'bg-[#42A1A4] text-white' : 'border-gray-300 text-black dark:text-gray-400 '
                    }`}
                >
                    Semua
                </button>
            </div>
            <DataTable
                paginator
                paginatorClassName='dark:bg-[#191e24] dark:text-gray-400 dark:border-none'
                selectionMode="single"
                value={filteredData}
                dataKey="id"
                rows={10}
                rowsPerPageOptions={[10, 25]}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}"
                emptyMessage="Tidak ada data ditemukan."
                tableStyle={{ minWidth: '50rem' }}
                className="mt-8 rounded-xl overflow-hidden shadow-lg"
                pt={{
                    table: { className: 'rounded-[20px] overflow-hidden' },
                    column: { headerCell: { className: 'bg-[#42A1A4] text-white' } },
                    paginatorDropdown: {
                        root: {
                            className: 'dark:bg-[#191e24] dark:text-gray-300 dark:border-none'
                        },
                        panel: {
                            className: 'dark:bg-[#191e24] dark:text-gray-300'
                        },
                        item: {
                            className: 'dark:hover:bg-gray-700 dark:hover:text-white'
                        }
                    }
                }}
                rowClassName={() => 'hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200 dark:text-gray-400'}
            >
                <Column
                    key="nomor"
                    field="nomor"
                    className="text-center"
                    body={rowNumberTemplate}
                    header={<span className="me-2">No.</span>}
                />
                <Column
                    key="judul_proposal"
                    field="judul_proposal"
                    className="text-start"
                    body={rowData => rowData.title}
                    header={<span className="me-2">Judul Proposal</span>}
                />
                <Column
                    key="jenis_pkm"
                    field="jenis_pkm"
                    className="text-center"
                    body={rowData => rowData.type_pkm}
                    header={<span className="me-2">Jenis PKM</span>}
                />
                <Column
                    key="instansi"
                    field="instansi"
                    className="text-center"
                    body={rowData => rowData.institution}
                    header={<span className="me-2">Instansi</span>}
                />
            </DataTable>
        </div>
        {/* Start Footer */}
        <footer className="footer p-12 bg-base-200 text-base-content grid-flow-row sm:grid-cols-2 md:grid-cols-6 gap-x-20 dark:bg-[#191e24]">
            <aside className="col-span-2 w-4/5 md:max-w-full">
                <img
                    src="images/Logo-PKM-TI-2025.png"
                    className="w-32"
                    alt="PKM TI Logo"
                />
                <p className="capitalize text-lg font-semibold dark:text-gray-400">
                    program studi sarjana teknologi informasi fakultas
                    teknik universitas udayana
                </p>
            </aside>
            <nav className="col-span-1 md:col-span-2">
                <h6 className="footer-title mb-0 dark:text-gray-100">Alamat</h6>
                <a className="link link-hover mb-4 dark:text-gray-400" href="https://maps.app.goo.gl/BxpnRYfHvLDrVYmZ8" target="_blank" rel="noopener noreferrer">
                    Jl. Kampus Udayana Bukit Jimbaran, Jimbaran, Kuta
                    Selatan, Kabupaten Badung, Bali 80361
                </a>

                <h6 className="footer-title mb-0 dark:text-gray-100">Telepon</h6>
                <a className="link link-hover mb-4 dark:text-gray-400" href="tel:0361701806">(0361) 701806</a>

                <h6 className="footer-title mb-0 dark:text-gray-100">Email</h6>
                <a className="link link-hover mb-4 dark:text-gray-400" href="mailto:hmti@unud.ac.id">hmti@unud.ac.id</a>
            </nav>
            <nav className="col-span-1 md:col-span-2">
                <h6 className="footer-title mb-0 dark:text-gray-100">Terkait</h6>
                <a className="link link-hover mb-2 dark:text-gray-400">
                    UNUD | Teknologi Informasi
                </a>

                <a className="link link-hover mb-2 dark:text-gray-400">BEM PM Udayna</a>

                <a className="link link-hover mb-2 dark:text-gray-400">SMFT Udayana</a>
            </nav>
        </footer>
        <footer className="py-5 px-12 bg-base-300 text-slate-600 dark:bg-[#15191e] dark:text-gray-400 text-center">
            <p>© 2025 PKM TI Udayana </p>
        </footer>
    </>
    
    );
}
