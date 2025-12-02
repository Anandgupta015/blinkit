import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="flex flex-col rounded-xl border border-gray-100 bg-white p-3 shadow-sm hover:shadow-md transition-shadow">
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
        {product.name}
      </div>
      <div className="mt-1 flex items-center justify-between">
        <div className="text-sm font-bold">₹{product.price}</div>
        <button
          onClick={() => addToCart(product)}
          className="rounded-md border border-green-500 px-3 py-1 text-xs font-semibold text-green-600 hover:bg-green-50"
        >
          ADD
        </button>
      </div>
    </div>
  )
}

export default ProductCard
