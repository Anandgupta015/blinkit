import { useCart } from '../context/CartContext'

function Navbar({ onCartClick }) {
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-20 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Left: Logo + Location */}
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-green-500 px-3 py-2 text-white font-bold">
            blinkit
          </div>
          <div className="text-xs sm:text-sm">
            <div className="font-semibold">Delivery in 10 minutes</div>
            <div className="text-gray-500">
              Set your exact location
            </div>
          </div>
        </div>

        {/* Middle: Search */}
        <div className="hidden flex-1 items-center justify-center px-4 md:flex">
          <input
            type="text"
            placeholder="Search for atta, cold drinks, chips and more"
            className="w-full max-w-xl rounded-md border border-gray-200 px-4 py-2 text-sm outline-none focus:border-green-500"
          />
        </div>

        {/* Right: Login + Cart */}
        <div className="flex items-center gap-3">
          <button className="hidden rounded-md px-3 py-1 text-sm font-semibold text-gray-700 hover:bg-gray-50 sm:block">
            Login
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
  )
}

export default Navbar
