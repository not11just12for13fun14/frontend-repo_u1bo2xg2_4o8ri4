export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-indigo-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-pink-100 blur-3xl opacity-60" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 mb-4">
            New Season • Up to 40% off
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Discover products you’ll love
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Curated fashion, gadgets, and home essentials from top brands. Fast
            delivery and easy returns.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#products" className="px-5 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors">
              Shop now
            </a>
            <a href="#trending" className="px-5 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
              Explore deals
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1200&auto=format&fit=crop" alt="Lifestyle" className="rounded-2xl h-56 sm:h-72 w-full object-cover shadow-md" />
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop" alt="Sneakers" className="rounded-2xl h-56 sm:h-72 w-full object-cover shadow-md mt-8" />
          <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop" alt="Headphones" className="rounded-2xl h-56 sm:h-72 w-full object-cover shadow-md" />
          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop" alt="Home" className="rounded-2xl h-56 sm:h-72 w-full object-cover shadow-md mt-8" />
        </div>
      </div>
    </section>
  );
}
