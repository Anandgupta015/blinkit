import products from "../data/products";
import { useCart } from "../context/CartContext";

const trending = products.slice(0, 6);

function TrendingSlider() {
  const { addToCart } = useCart();

  return (
    <section className="mb-4">
      <div className="mb-2 flex items-center justify-between text-xs font-semibold text-gray-700">
        <span>Trending near you</span>
        <span className="text-[11px] text-green-600">View all</span>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1">
        {trending.map((item) => (
          <div
            key={item.id}
            className="min-w-[140px] rounded-xl border border-gray-100 bg-white p-3 shadow-sm"
          >
            <div className="mb-2 h-24 overflow-hidden rounded-lg bg-gray-50">
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-[10px] font-semibold text-gray-500">
              {item.deliveryTime}
            </div>
            <div className="mt-1 line-clamp-2 text-xs font-semibold text-gray-800">
              {item.name}
            </div>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-sm font-bold">₹{item.price}</span>
              <button
                onClick={() => addToCart(item)}
                className="rounded-md border border-green-500 px-2 py-1 text-[10px] font-semibold text-green-600 hover:bg-green-50"
              >
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrendingSlider;
