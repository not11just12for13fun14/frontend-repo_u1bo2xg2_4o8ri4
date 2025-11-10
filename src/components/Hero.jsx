import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white" />
      <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-indigo-200/40 blur-3xl" aria-hidden />
      <div className="absolute -bottom-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-pink-200/40 blur-3xl" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 ring-1 ring-indigo-200/60 shadow-sm"
          >
            New Season • Up to 40% off
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight"
          >
            Discover products you’ll love
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-600 text-lg max-w-xl"
          >
            Curated fashion, gadgets, and home essentials from top brands. Fast delivery and easy returns.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <a
              href="#products"
              className="px-5 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors shadow-sm"
            >
              Shop now
            </a>
            <a
              href="#trending"
              className="px-5 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
            >
              Explore deals
            </a>
          </motion.div>
        </div>

        {/* Right: Spline scene */}
        <div className="relative h-[440px] sm:h-[520px] lg:h-[560px]">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
          {/* Decorative gradient rings that don't block interaction */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-6 top-8 w-24 h-24 rounded-full bg-indigo-500/10 blur-xl" />
            <div className="absolute left-10 bottom-10 w-32 h-32 rounded-full bg-pink-500/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
