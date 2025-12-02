import ProductCard from './ProductCard'

function ProductGrid({ products }) {
  if (!products.length) {
    return (
      <div className="py-10 text-center text-sm text-gray-500">
        No products found in this category.
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-3 py-4 sm:grid-cols-3 md:grid-cols-4">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}

export default ProductGrid
