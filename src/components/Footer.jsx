export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-neutral-600">
              <li><a href="#" className="hover:text-neutral-900">All Products</a></li>
              <li><a href="#" className="hover:text-neutral-900">New Arrivals</a></li>
              <li><a href="#" className="hover:text-neutral-900">Best Sellers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-neutral-600">
              <li><a href="#" className="hover:text-neutral-900">About</a></li>
              <li><a href="#" className="hover:text-neutral-900">Careers</a></li>
              <li><a href="#" className="hover:text-neutral-900">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-neutral-600">
              <li><a href="#" className="hover:text-neutral-900">Help Center</a></li>
              <li><a href="#" className="hover:text-neutral-900">Contact</a></li>
              <li><a href="#" className="hover:text-neutral-900">Shipping</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-neutral-600">
              <li><a href="#" className="hover:text-neutral-900">Privacy</a></li>
              <li><a href="#" className="hover:text-neutral-900">Terms</a></li>
              <li><a href="#" className="hover:text-neutral-900">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} VibeShop. All rights reserved.</p>
          <p>Design system: minimal • modern • tactile</p>
        </div>
      </div>
    </footer>
  );
}
