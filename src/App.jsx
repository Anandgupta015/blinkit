import { useState, useMemo } from 'react'
import Navbar from "./components/NavBar";

import CategoryList from './components/CategoryList'
import ProductGrid from './components/ProductGrid'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import products from './data/products'
import { color } from 'framer-motion';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showCart, setShowCart] = useState(false)

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return products
    return products.filter(p => p.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-gray-50">
       
      <Navbar onCartClick={() => setShowCart(true)} />
      <CategoryList
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-4">
        {/* Banner */}
        <section className="mb-4 rounded-xl bg-gradient-to-r from-green-500 to-lime-400 px-4 py-5 text-white">
          <div className="text-sm font-semibold">
            Grocery delivery in minutes
          </div>
          <div className="mt-1 text-xs text-green-50">
            Order daily essentials, snacks, drinks and more at best prices.
          </div>
        </section>

        {/* Products */}
        <ProductGrid products={filteredProducts} />
      </main>

      <Footer />

      <CartDrawer open={showCart} onClose={() => setShowCart(false)} />
    </div>
  )
}

export default App
