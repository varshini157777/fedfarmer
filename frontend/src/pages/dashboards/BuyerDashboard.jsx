import DashboardSidebar from '../../components/DashboardSidebar.jsx';
import ProductCard from '../../components/ProductCard.jsx';

const mockProducts = [
  {
    id: 1,
    name: 'Sun-Dried Tomato Pickle',
    category: 'pickles',
    price: 220,
    location: 'Nashik, MH',
    organic: true,
  },
  {
    id: 2,
    name: 'Cold-Pressed Groundnut Oil',
    category: 'cold-pressed oils',
    price: 380,
    location: 'Erode, TN',
    organic: true,
  },
  {
    id: 3,
    name: 'Dehydrated Banana Chips',
    category: 'dehydrated foods',
    price: 120,
    location: 'Kollam, KL',
    organic: false,
  },
];

const BuyerDashboard = () => {
  return (
    <div className="max-w-6xl mx-auto mt-4 px-4 pb-8 flex gap-4">
      <DashboardSidebar role="buyer" />
      <section className="flex-1">
        <header className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Marketplace</h1>
            <p className="text-xs text-gray-500">
              Discover certified value-added products directly from farmer groups.
            </p>
          </div>
          <button className="rounded-full border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50">
            Saved wishlist
          </button>
        </header>

        <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm mb-4 text-xs">
          <p className="font-semibold text-gray-900 mb-2">Filters</p>
          <div className="grid md:grid-cols-4 gap-3">
            <input
              placeholder="Search by product name"
              className="rounded-lg border border-gray-200 px-3 py-2 text-[11px] focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <select className="rounded-lg border border-gray-200 px-3 py-2 text-[11px] focus:outline-none focus:ring-1 focus:ring-green-500">
              <option>All categories</option>
              <option>Pickles</option>
              <option>Jams</option>
              <option>Cold-pressed oils</option>
              <option>Spices</option>
              <option>Dehydrated foods</option>
            </select>
            <select className="rounded-lg border border-gray-200 px-3 py-2 text-[11px] focus:outline-none focus:ring-1 focus:ring-green-500">
              <option>Any location</option>
              <option>Maharashtra</option>
              <option>Tamil Nadu</option>
              <option>Kerala</option>
            </select>
            <label className="flex items-center gap-2 text-[11px] text-gray-700">
              <input type="checkbox" className="h-3 w-3 rounded border-gray-300" />
              Organic certified only
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-[2fr_1fr] gap-4 text-xs">
          <div className="grid md:grid-cols-3 gap-4">
            {mockProducts.map((p) => (
              <ProductCard
                key={p.id}
                name={p.name}
                category={p.category}
                price={p.price}
                location={p.location}
                organic={p.organic}
              />
            ))}
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm flex flex-col gap-3">
            <p className="font-semibold text-gray-900">Active cart / inquiries</p>
            <p className="text-[11px] text-gray-600">
              Shortlist SKUs and share a single consolidated inquiry with multiple farmer groups. Ideal for
              buyers and distributors consolidating volumes.
            </p>
            <div className="space-y-2 text-[11px]">
              <div className="flex items-center justify-between rounded-xl border border-gray-100 px-3 py-2">
                <div>
                  <p className="font-medium text-gray-800">Cold-Pressed Groundnut Oil</p>
                  <p className="text-gray-500">4 x 5L tins</p>
                </div>
                <button className="rounded-full border border-gray-200 px-3 py-1 text-[10px] font-semibold text-gray-700 hover:bg-gray-50">
                  Edit
                </button>
              </div>
            </div>
            <button className="self-end rounded-full bg-green-500 px-4 py-2 text-[11px] font-semibold text-white hover:bg-green-600">
              Send inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyerDashboard;
