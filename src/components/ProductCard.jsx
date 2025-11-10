import { motion } from 'framer-motion';

export default function ProductCard({ image, title, price, badge }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      {badge && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-neutral-900 text-white text-xs font-medium px-2 py-1">
          {badge}
        </span>
      )}
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-neutral-900 line-clamp-1">{title}</h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm text-neutral-700">${price}</p>
          <button className="rounded-full bg-neutral-900 text-white text-xs px-3 py-1.5 hover:bg-neutral-800">Add to cart</button>
        </div>
      </div>
    </motion.article>
  );
}
