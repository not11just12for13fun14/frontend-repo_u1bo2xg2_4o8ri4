import { useState } from 'react';
import { Menu, ShoppingCart, Search } from 'lucide-react';

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              aria-label="Open menu"
              className="p-2 rounded-md hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              <Menu className="h-5 w-5" />
            </button>
            <a href="#" className="font-semibold text-lg tracking-tight">VibeShop</a>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
            <a href="#" className="hover:text-black">Home</a>
            <a href="#" className="hover:text-black">Products</a>
            <a href="#" className="hover:text-black">About</a>
            <a href="#" className="hover:text-black">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <form onSubmit={submit} className="hidden sm:flex items-center gap-2 bg-neutral-100 rounded-full px-3 py-1.5">
              <Search className="h-4 w-4 text-neutral-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className="bg-transparent outline-none text-sm placeholder:text-neutral-500"
              />
            </form>
            <button className="relative p-2 rounded-md hover:bg-neutral-100" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-black text-white rounded-full px-1.5 py-0.5">2</span>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden py-3 border-t border-neutral-200">
            <form onSubmit={submit} className="flex items-center gap-2 bg-neutral-100 rounded-full px-3 py-2 mb-3">
              <Search className="h-4 w-4 text-neutral-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products"
                className="bg-transparent outline-none text-sm flex-1"
              />
            </form>
            <nav className="grid gap-2 text-sm">
              <a href="#" className="py-2">Home</a>
              <a href="#" className="py-2">Products</a>
              <a href="#" className="py-2">About</a>
              <a href="#" className="py-2">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
