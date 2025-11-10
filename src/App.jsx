import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    title: "Wireless Noise-Canceling Headphones",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1518449007433-6f7f1c1f3cfc?q=80&w=1200&auto=format&fit=crop",
    badge: "Hot",
    tags: ["audio", "electronics"],
  },
  {
    id: 2,
    title: "Minimalist Sneakers",
    price: 89.0,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    badge: "New",
    tags: ["fashion", "shoes"],
  },
  {
    id: 3,
    title: "Smart Home Speaker",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1518441902117-fcf7f3a02f3b?q=80&w=1200&auto=format&fit=crop",
    badge: "-20%",
    tags: ["home", "electronics"],
  },
  {
    id: 4,
    title: "Classic Denim Jacket",
    price: 119.5,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop",
    tags: ["fashion"],
  },
  {
    id: 5,
    title: "Ergonomic Office Chair",
    price: 229.0,
    image:
      "https://images.unsplash.com/photo-1582582494700-6d4d2b3c6804?q=80&w=1200&auto=format&fit=crop",
    tags: ["home", "furniture"],
  },
  {
    id: 6,
    title: "Fitness Smartwatch",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?q=80&w=1200&auto=format&fit=crop",
    badge: "Trending",
    tags: ["fitness", "electronics"],
  },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("all");

  const tags = useMemo(() => {
    const t = new Set(["all"]);
    SAMPLE_PRODUCTS.forEach((p) => p.tags?.forEach((tag) => t.add(tag)));
    return Array.from(t);
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return SAMPLE_PRODUCTS.filter((p) => {
      const matchesQuery = p.title.toLowerCase().includes(q);
      const matchesTag = activeTag === "all" || p.tags?.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [search, activeTag]);

  const addToCart = (product) => {
    setCart((c) => {
      if (c.find((i) => i.id === product.id)) return c;
      return [...c, product];
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar cartCount={cart.length} onSearch={setSearch} />
      <main className="flex-1">
        <Hero />

        <section id="trending" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Trending now</h2>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`px-4 py-1.5 rounded-full border text-sm ${
                  activeTag === t
                    ? "bg-gray-900 text-white border-gray-900"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                {t[0].toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          <div id="products" className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onAdd={addToCart} />
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="rounded-2xl bg-gray-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Sign up for exclusive offers</h3>
              <p className="mt-1 text-white/80">Join our newsletter to get updates and special deals.</p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full sm:w-auto flex gap-2"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 sm:flex-none w-full sm:w-72 px-4 py-2 rounded-full text-gray-900"
              />
              <button className="px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 font-semibold">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
