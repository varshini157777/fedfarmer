import DashboardSidebar from '../../components/DashboardSidebar.jsx';

const FarmerDashboard = () => {
  const sampleStats = {
    revenue: '₹ 1,24,500',
    orders: 38,
    products: 12,
  };

  return (
    <div className="max-w-6xl mx-auto mt-4 px-4 pb-8 flex gap-4">
      <DashboardSidebar role="farmer" />
      <section className="flex-1">
        <header className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Farmer Dashboard</h1>
            <p className="text-xs text-gray-500">
              Track your value-added production, orders, and training.
            </p>
          </div>
          <button className="rounded-full bg-green-500 px-4 py-2 text-xs font-semibold text-white hover:bg-green-600">
            + Add Product
          </button>
        </header>

        <div className="grid md:grid-cols-3 gap-4 mb-5 text-xs">
          <div className="rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
            <p className="text-[11px] text-gray-500 mb-1">Total revenue</p>
            <p className="text-xl font-bold text-gray-900">{sampleStats.revenue}</p>
            <p className="text-[11px] text-green-700 mt-1">+14% vs last month</p>
          </div>
          <div className="rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
            <p className="text-[11px] text-gray-500 mb-1">Active orders</p>
            <p className="text-xl font-bold text-gray-900">{sampleStats.orders}</p>
            <p className="text-[11px] text-emerald-700 mt-1">In processing &amp; packaging</p>
          </div>
          <div className="rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
            <p className="text-[11px] text-gray-500 mb-1">Value-added SKUs</p>
            <p className="text-xl font-bold text-gray-900">{sampleStats.products}</p>
            <p className="text-[11px] text-gray-500 mt-1">Pickles • Jams • Oils • Spices • Dried foods</p>
          </div>
        </div>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-4 text-xs">
          <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold text-gray-900">Recent orders</p>
              <button className="text-[11px] text-green-600 font-medium">View all</button>
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map((o) => (
                <div
                  key={o}
                  className="flex items-center justify-between rounded-xl border border-gray-100 px-3 py-2"
                >
                  <div>
                    <p className="font-medium text-gray-800">Order #{1200 + o}</p>
                    <p className="text-[11px] text-gray-500">OrganicMart • 24 jars of mango pickle</p>
                  </div>
                  <div className="text-right text-[11px]">
                    <p className="font-semibold text-gray-900">₹ 18,400</p>
                    <p className="text-emerald-600">Packing</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm flex flex-col gap-3">
            <p className="font-semibold text-gray-900">Ask an Expert</p>
            <p className="text-[11px] text-gray-600">
              Stuck with a packaging, labeling, or pricing question? Drop a quick note for the value-addition
              experts.
            </p>
            <textarea
              rows={3}
              placeholder="Type your question here..."
              className="w-full rounded-xl border border-gray-200 px-3 py-2 text-[11px] focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <button className="self-end rounded-full bg-green-500 px-4 py-2 text-[11px] font-semibold text-white hover:bg-green-600">
              Send question
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FarmerDashboard;
