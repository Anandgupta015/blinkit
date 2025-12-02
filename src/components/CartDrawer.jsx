import { useCart } from "../context/CartContext";

function CartDrawer({ open, onClose }) {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart } =
    useCart();

  const deliveryFee = totalItems ? 15 : 0;
  const discount = totalPrice >= 500 ? Math.round(totalPrice * 0.1) : 0;
  const grandTotal = totalPrice + deliveryFee - discount;

  return (
    <div
      className={`fixed inset-0 z-30 ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/30 transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        className={`absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div>
            <div className="text-sm font-semibold">My Cart</div>
            <div className="text-xs text-gray-500">
              {totalItems} items • ₹{totalPrice}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3">
          {items.length === 0 ? (
            <div className="py-10 text-center text-sm text-gray-500">
              Your cart is empty. Add some items 🛒
            </div>
          ) : (
            <ul className="space-y-3 text-sm">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-2"
                >
                  <div className="flex-1">
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-xs text-gray-500">
                      ₹{item.price} each
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className="h-7 w-7 rounded border text-center text-sm"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="h-7 w-7 rounded border text-center text-sm"
                    >
                      +
                    </button>
                  </div>
                  <div className="w-16 text-right text-sm font-semibold">
                    ₹{item.price * item.quantity}
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs text-red-500"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Price summary */}
        <div className="border-t px-4 py-3 text-xs">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-gray-600">Items total</span>
            <span className="font-semibold">₹{totalPrice}</span>
          </div>
          <div className="mb-1 flex items-center justify-between">
            <span className="text-gray-600">Delivery fee</span>
            <span className="font-semibold">
              {deliveryFee ? `₹${deliveryFee}` : "Free"}
            </span>
          </div>
          <div className="mb-1 flex items-center justify-between">
            <span className="text-gray-600">Discount</span>
            <span className="font-semibold text-green-600">
              -₹{discount}
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between border-t pt-2 text-sm font-semibold">
            <span>To pay</span>
            <span>₹{grandTotal}</span>
          </div>
          <button
            disabled={!items.length}
            className="mt-3 w-full rounded-md bg-green-500 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartDrawer;
