import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

const products = [
  {
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1470&auto=format&fit=crop',
    title: 'Wireless Mechanical Keyboard',
    price: 129,
    badge: 'New',
  },
  {
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1470&auto=format&fit=crop',
    title: 'Noise-cancelling Headphones',
    price: 219,
  },
  {
    image:
      'https://images.unsplash.com/photo-1527443224154-c4f2a9d3b3b0?q=80&w=1470&auto=format&fit=crop',
    title: 'Ergonomic Desk Lamp',
    price: 79,
  },
  {
    image:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1470&auto=format&fit=crop',
    title: 'Minimal Desk Plant',
    price: 24,
    badge: 'Bestseller',
  },
];

export default function App() {
  const handleSearch = (q) => {
    console.log('Searching for', q);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar onSearch={handleSearch} />
      <Hero />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section id="products" className="-mt-12 pb-4">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Featured products</h2>
              <p className="text-sm text-neutral-600 mt-1">Curated picks that fit the minimalist workspace.</p>
            </div>
            <a href="#" className="text-sm font-medium text-neutral-900 hover:opacity-80">View all</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <ProductCard key={i} {...p} />
            ))}
          </div>
        </section>

        <section id="categories" className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-neutral-200 p-6 bg-gradient-to-br from-rose-50 to-white">
              <h3 className="font-semibold mb-2">Workspace</h3>
              <p className="text-sm text-neutral-700">Desks, chairs, and lighting designed for flow.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6 bg-gradient-to-br from-neutral-50 to-white">
              <h3 className="font-semibold mb-2">Audio</h3>
              <p className="text-sm text-neutral-700">Headphones, speakers, and accessories.</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6 bg-gradient-to-br from-rose-50 to-white">
              <h3 className="font-semibold mb-2">Desk Decor</h3>
              <p className="text-sm text-neutral-700">Keep it clean, calm, and inspiring.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
