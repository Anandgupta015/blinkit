import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/NavBar";
import CategoryList from "./components/CategoryList";
import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import OffersStrip from "./components/OffersStrip";
import CategoryIcons from "./components/CategoryIcons";
import TrendingSlider from "./components/TrendingSlider";
import LoginModal from "./components/LoginModal";
import LocationModal from "./components/LocationModal";
import ProductDetailModal from "./components/ProductDetailModal";
import products from "./data/products";

const LOCATION_KEY = "blinkit_location";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [userPhone, setUserPhone] = useState("");
  const [location, setLocation] = useState(null);
  const [activeProduct, setActiveProduct] = useState(null);

  // Load saved location on first render
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCATION_KEY);
      if (saved) {
        setLocation(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (selectedCategory !== "all") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchTerm.trim()) {
      const q = searchTerm.trim().toLowerCase();
      result = result.filter((p) =>
        p.name.toLowerCase().includes(q)
      );
    }

    return result;
  }, [selectedCategory, searchTerm]);

  const handleLocationSave = (loc) => {
    setLocation(loc);
    try {
      localStorage.setItem(LOCATION_KEY, JSON.stringify(loc));
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        onCartClick={() => setShowCart(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onLoginClick={() => setShowLogin(true)}
        onLocationClick={() => setShowLocation(true)}
        userPhone={userPhone}
        location={location}
      />

      <CategoryList
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-4">
        <HeroSlider />
        <OffersStrip />
        <CategoryIcons
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <TrendingSlider />

        <section className="mt-4">
          <div className="mb-2 text-xs font-semibold text-gray-700">
            All Products
          </div>
          <ProductGrid
            products={filteredProducts}
            searchTerm={searchTerm}
            onProductClick={setActiveProduct}
          />
        </section>
      </main>

      <Footer />

      <CartDrawer open={showCart} onClose={() => setShowCart(false)} />

      <LoginModal
        open={showLogin}
        onClose={() => setShowLogin(false)}
        onLoginSuccess={(phone) => setUserPhone(phone)}
      />

      <LocationModal
        open={showLocation}
        onClose={() => setShowLocation(false)}
        onSave={handleLocationSave}
      />

      <ProductDetailModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </div>
  );
}

export default App;
