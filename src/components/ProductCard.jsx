export default function ProductCard({ product, onAdd }) {
  if (!product) return null;
  const { title, price, image, badge } = product;
  return (
    <div className="group rounded-2xl border border-gray-200 overflow-hidden bg-white hover:shadow-xl transition-shadow">
      <div className="relative aspect-square overflow-hidden">
        {badge && (
          <span className="absolute left-3 top-3 z-10 inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur border border-gray-200">
            {badge}
          </span>
        )}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 line-clamp-1">{title}</h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-bold text-indigo-600">${price.toFixed(2)}</p>
          <button
            onClick={() => onAdd?.(product)}
            className="px-3 py-1.5 rounded-full text-sm font-semibold bg-gray-900 text-white hover:bg-gray-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
