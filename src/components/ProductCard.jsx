import { useCart } from "../context/CartContext";

function highlightMatch(text, query) {
  if (!query?.trim()) return text;
  const q = query.trim().toLowerCase();
  const lower = text.toLowerCase();
  const index = lower.indexOf(q);
  if (index === -1) return text;

  const before = text.slice(0, index);
  const match = text.slice(index, index + q.length);
  const after = text.slice(index + q.length);

  return (
    <>
      {before}
      <span className="bg-yellow-200">{match}</span>
      {after}
    </>
  );
}

function ProductCard({ product, searchTerm, onClick }) {
  const { addToCart } = useCart();

  const handleAdd = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer flex-col rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative mb-2 flex h-28 items-center justify-center overflow-hidden rounded-lg bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
        <span className="absolute left-2 top-2 rounded bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-gray-700">
          {product.tag}
        </span>
      </div>
      <div className="text-[10px] font-semibold text-gray-500">
        {product.deliveryTime}
      </div>
      <div className="mt-1 line-clamp-2 text-xs font-semibold text-gray-800">
        {highlightMatch(product.name, searchTerm)}
      </div>
      <div className="mt-1 flex items-center justify-between">
        <div className="text-sm font-bold">₹{product.price}</div>
        <button
          onClick={handleAdd}
          className="rounded-md border border-green-500 px-3 py-1 text-xs font-semibold text-green-600 hover:bg-green-50"
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
