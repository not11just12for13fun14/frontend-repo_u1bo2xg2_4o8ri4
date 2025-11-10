import { ShoppingCart, Search, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar({ cartCount = 0, onSearch }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(query.trim());
  };

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle Menu"
              onClick={() => setOpen(!open)}
            >
              <Menu className="w-5 h-5" />
            </button>
            <a href="#" className="text-xl font-bold tracking-tight">
              shoppe
              <span className="text-indigo-600">.</span>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="hidden md:flex items-center flex-1 max-w-lg mx-6">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                className="w-full pl-9 pr-4 py-2 rounded-full border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="ml-3 px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
            >
              Search
            </button>
          </form>

          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full hover:bg-gray-100" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <form onSubmit={handleSubmit} className="mt-2">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  className="w-full pl-9 pr-4 py-2 rounded-full border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
                  placeholder="Search products..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
