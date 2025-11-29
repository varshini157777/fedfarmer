const ProductCard = ({ name, category, price, location, organic }) => {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm text-xs flex flex-col gap-2">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-[11px] text-gray-500 capitalize">{category}</p>
        </div>
        {organic && (
          <span className="rounded-full bg-green-50 px-2 py-1 text-[10px] font-semibold text-green-700 border border-green-200">
            Organic
          </span>
        )}
      </div>
      <div className="flex items-center justify-between text-[11px] text-gray-600 mt-1">
        <span>₹ {price}/unit</span>
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {location}
        </span>
      </div>
      <button className="mt-2 rounded-full bg-green-500 px-3 py-2 text-[11px] font-semibold text-white hover:bg-green-600">
        View details
      </button>
    </div>
  );
};

export default ProductCard;
