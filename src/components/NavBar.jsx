import { useCart } from "../context/CartContext";

function Navbar({
  onCartClick,
  searchTerm,
  onSearchChange,
  onLoginClick,
  onLocationClick,
  userPhone,
  location,
}) {
  const { totalItems } = useCart();

  const shortPhone = userPhone
    ? `+91 ••••${userPhone.slice(-4)}`
    : "Login";

  const locationText = location
    ? `${location.area} • ${location.pincode}`
    : "Set your exact location";

  return (
    <header className="sticky top-0 z-20 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        {/* Left: Logo + Location */}
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-green-500 px-3 py-2 text-white text-sm font-bold">
            blinkit
          </div>
          <button
            onClick={onLocationClick}
            className="hidden text-left text-xs sm:block"
          >
            <div className="font-semibold">
              {location ? "Delivering to" : "Delivery in 10 minutes"}
            </div>
            <div className="line-clamp-1 text-[11px] text-gray-500">
              {locationText}
            </div>
          </button>
        </div>

        {/* Middle: Search */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search for atta, cold drinks, chips and more"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-md border border-gray-200 px-3 py-2 text-xs sm:text-sm outline-none focus:border-green-500"
          />
        </div>

        {/* Right: Login + Cart */}
        <div className="flex items-center gap-3">
          <button
            onClick={onLoginClick}
            className="hidden rounded-md px-3 py-1 text-xs font-semibold text-gray-700 hover:bg-gray-50 sm:block"
          >
            {shortPhone}
          </button>
          <button
            onClick={onCartClick}
            className="flex items-center gap-2 rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white hover:bg-green-600"
          >
            <span>Cart</span>
            <span className="rounded bg-white px-2 py-0.5 text-xs font-bold text-green-600">
              {totalItems}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
