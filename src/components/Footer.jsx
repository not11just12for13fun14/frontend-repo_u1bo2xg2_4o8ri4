export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-4 text-sm text-gray-600">
        <div>
          <div className="text-xl font-bold text-gray-900">shoppe<span className="text-indigo-600">.</span></div>
          <p className="mt-3">Quality goods, fast delivery, and friendly support. Join thousands of happy shoppers.</p>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Shop</div>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-gray-900">New Arrivals</a></li>
            <li><a href="#" className="hover:text-gray-900">Best Sellers</a></li>
            <li><a href="#" className="hover:text-gray-900">Gift Cards</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Support</div>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-900">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-gray-900">Legal</div>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gray-900">Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100 py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} shoppe. All rights reserved.</div>
    </footer>
  );
}
