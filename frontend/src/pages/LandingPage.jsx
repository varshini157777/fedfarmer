const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 via-white to-white">
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 mb-4">
            Supporting Farmers • Enabling Value-Added Products
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Supporting Farmers to Produce
            <span className="block text-green-600">Value-Added Agricultural Products</span>
          </h1>
          <p className="text-gray-600 mb-6 max-w-xl">
            Lessons, insights, and a digital marketplace that helps farmers transform raw produce
            into branded, packaged, and premium value-added products.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="/register"
              className="rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-green-600"
            >
              Get Started
            </a>
            <a
              href="#learn"
              className="rounded-full border border-green-500 px-6 py-3 text-sm font-semibold text-green-700 hover:bg-green-50"
            >
              Learn More
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4 text-xs text-gray-600">
            <div>
              <p className="font-semibold text-gray-900 text-base">+2k</p>
              <p>Farmers trained</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-base">+500</p>
              <p>Value-added SKUs</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-base">+30%</p>
              <p>Average income uplift</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-green-100/60 blur-2xl" aria-hidden="true" />
          <div className="relative rounded-3xl bg-white shadow-xl border border-green-100 p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-800">Farmer Production Snapshot</span>
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs text-green-700">Live</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="rounded-xl bg-green-50 p-4">
                <p className="text-[11px] text-gray-500 mb-1">Today&apos;s Value-Added Output</p>
                <p className="text-lg font-bold text-gray-900">312 kg</p>
                <p className="text-[11px] text-green-700 mt-2">+18% vs last week</p>
              </div>
              <div className="rounded-xl bg-emerald-50 p-4">
                <p className="text-[11px] text-gray-500 mb-1">Confirmed Orders</p>
                <p className="text-lg font-bold text-gray-900">48</p>
                <p className="text-[11px] text-emerald-700 mt-2">Packaged &amp; ready to ship</p>
              </div>
            </div>
            <div className="rounded-xl border border-dashed border-green-200 p-4 text-[11px] text-gray-600">
              <p className="font-semibold text-gray-800 mb-1">Value-Added Categories</p>
              <p>Pickles • Jams • Cold-pressed Oils • Spices • Dehydrated Fruits &amp; Vegetables</p>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <p className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wide">Trusted by</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-green-100" />
              <span>AgriCo Distributors</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-green-100" />
              <span>OrganicMart</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-green-100" />
              <span>Fresh Basket</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-green-100" />
              <span>FarmerCollective</span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-gradient-to-r from-green-50 to-emerald-50 border-t border-green-100">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Features</h2>
          <div className="grid md:grid-cols-4 gap-6 text-sm">
            <div className="rounded-2xl bg-white p-5 shadow-sm border border-green-100">
              <p className="text-xs font-semibold text-green-600 mb-1">Training</p>
              <h3 className="font-semibold mb-2">Value-Added Product Training</h3>
              <p className="text-gray-600 text-xs">
                Expert-led modules on processing, packaging, and shelf-life extension tailored for smallholders.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm border border-green-100">
              <p className="text-xs font-semibold text-green-600 mb-1">Market</p>
              <h3 className="font-semibold mb-2">Smart Market Access</h3>
              <p className="text-gray-600 text-xs">
                Connect directly with buyers, distributors, and retailers looking for premium agro-products.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm border border-green-100">
              <p className="text-xs font-semibold text-green-600 mb-1">Tracking</p>
              <h3 className="font-semibold mb-2">Farmer Success Tracking</h3>
              <p className="text-gray-600 text-xs">
                Monitor revenue, orders, and repeat buyers with a simple dashboard view.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm border border-green-100">
              <p className="text-xs font-semibold text-green-600 mb-1">Insights</p>
              <h3 className="font-semibold mb-2">Production &amp; Packaging Analytics</h3>
              <p className="text-gray-600 text-xs">
                Visualize product performance, top SKUs, and demand trends across seasons.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" className="bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-[1.3fr_1fr] gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Lessons &amp; Insights for Every Farmer</h2>
            <p className="text-sm text-gray-600 mb-4">
              Short, vernacular video lessons and best-practice playbooks designed for real-world farm
              conditions.
            </p>
            <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
              <li>How to design value-added products for your local market.</li>
              <li>Packaging that protects quality and attracts premium buyers.</li>
              <li>Basics of food safety, shelf life, and labeling.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-dashed border-green-200 p-5 text-xs text-gray-600 bg-green-50/40">
            <p className="font-semibold text-gray-800 mb-2">Farmer Story</p>
            <p>
              "Within 6 months, we moved from selling raw chillies in bulk to branded spice mixes with
              transparent packaging. Our average realization per kg increased by 42%."
            </p>
            <p className="mt-3 text-[11px] text-gray-500">– Kavitha, Smallholder Farmer, Andhra Pradesh</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
