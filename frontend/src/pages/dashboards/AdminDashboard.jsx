import DashboardSidebar from '../../components/DashboardSidebar.jsx';

const AdminDashboard = () => {
  const stats = {
    farmers: 128,
    buyers: 54,
    products: 312,
    monthlySales: '₹ 4,85,000',
  };

  return (
    <div className="max-w-6xl mx-auto mt-4 px-4 pb-8 flex gap-4">
      <DashboardSidebar role="admin" />
      <section className="flex-1">
        <header className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Admin Analytics</h1>
            <p className="text-xs text-gray-500">
              Monitor adoption, approve listings, and manage platform content.
            </p>
          </div>
        </header>

        <div className="grid md:grid-cols-4 gap-4 mb-5 text-xs">
          <div className="rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
            <p className="text-[11px] text-gray-500 mb-1">Total farmers</p>
            <p className="text-xl font-bold text-gray-900">{stats.farmers}</p>
          </div>
          <div className="rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
            <p className="text-[11px] text-gray-500 mb-1">Total buyers</p>
            <p className="text-xl font-bold text-gray-900">{stats.buyers}</p>
          </div>
          <div className="rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
            <p className="text-[11px] text-gray-500 mb-1">Approved products</p>
            <p className="text-xl font-bold text-gray-900">{stats.products}</p>
          </div>
          <div className="rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
            <p className="text-[11px] text-gray-500 mb-1">Monthly GMV</p>
            <p className="text-xl font-bold text-gray-900">{stats.monthlySales}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-4 text-xs">
          <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold text-gray-900">Farmer approvals</p>
              <button className="text-[11px] text-green-600 font-medium">View all</button>
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl border border-gray-100 px-3 py-2"
                >
                  <div>
                    <p className="font-medium text-gray-800">Farmer Collective #{200 + i}</p>
                    <p className="text-[11px] text-gray-500">Awaiting KYC &amp; account approval</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="rounded-full border border-gray-200 px-3 py-1 text-[10px] font-semibold text-gray-700 hover:bg-gray-50">
                      Reject
                    </button>
                    <button className="rounded-full bg-green-500 px-3 py-1 text-[10px] font-semibold text-white hover:bg-green-600">
                      Approve
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm flex flex-col gap-3">
            <p className="font-semibold text-gray-900">Training modules</p>
            <p className="text-[11px] text-gray-600">
              Curate structured content for farmers: videos, PDFs, and best-practice guides.
            </p>
            <button className="self-start rounded-full bg-green-500 px-4 py-2 text-[11px] font-semibold text-white hover:bg-green-600">
              + New module
            </button>
            <ul className="mt-2 space-y-2 text-[11px] text-gray-700 list-disc list-inside">
              <li>Intro to cold-pressed oil units (Video)</li>
              <li>Pickle HACCP checklist (PDF)</li>
              <li>Spice blend standardization 101 (Article)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
