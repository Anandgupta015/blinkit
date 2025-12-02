import products from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetailModal({ product, onClose }) {
  const { addToCart } = useCart();

  if (!product) return null;

  const recommendations = products
    .filter(
      (p) => p.category === product.category && p.id !== product.id
    )
    .slice(0, 4);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
      <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white shadow-xl">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="h-52 w-full rounded-t-2xl object-cover"
          />
          <button
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full bg-black/60 px-2 py-1 text-xs text-white"
          >
            ✕
          </button>
        </div>

        <div className="p-4">
          <div className="text-[11px] font-semibold text-gray-500">
            {product.deliveryTime}
          </div>
          <h2 className="mt-1 text-sm font-semibold text-gray-900">
            {product.name}
          </h2>

          <div className="mt-2 flex items-center justify-between">
            <div>
              <div className="text-lg font-bold">₹{product.price}</div>
              <div className="text-[11px] text-gray-500">
                Inclusive of all taxes
              </div>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600"
            >
              Add to cart
            </button>
          </div>

          <div className="mt-4 rounded-xl bg-gray-50 p-3 text-[11px] text-gray-600">
            <div className="mb-1 font-semibold text-gray-800">
              Product details
            </div>
            <p>
              This is a demo description. In a real app, details like
              weight, brand, ingredients and expiry date will appear here.
            </p>
          </div>

          {recommendations.length > 0 && (
            <div className="mt-4">
              <div className="mb-2 text-xs font-semibold text-gray-700">
                You may also like
              </div>
              <div className="grid grid-cols-2 gap-2">
                {recommendations.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-lg border border-gray-100 bg-white p-2"
                  >
                    <div className="h-16 overflow-hidden rounded-md bg-gray-50">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="mt-1 line-clamp-2 text-[11px] font-semibold text-gray-800">
                      {item.name}
                    </div>
                    <div className="mt-0.5 flex items-center justify-between">
                      <span className="text-xs font-bold">
                        ₹{item.price}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="rounded-md border border-green-500 px-2 py-0.5 text-[10px] font-semibold text-green-600"
                      >
                        ADD
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailModal;
