import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-7 py-12 sm:px-10 lg:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-semibold text-white">Rohit Nigam</h2>
            <p className="mt-4 max-w-sm text-slate-400">
              Crafting professional solutions with clean interfaces, modern design, and fast performance.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:col-span-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Quick links</h3>
              <ul className="mt-5 space-y-3 text-slate-300">
                <li><a href="#" className="transition-colors hover:text-white">Home</a></li>
                <li><a href="#" className="transition-colors hover:text-white">About Us</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Services</a></li>
                <li><a href="#" className="transition-colors hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</h3>
              <ul className="mt-5 space-y-3 text-slate-300">
                <li>Email: <a href="mailto:hello@example.com" className="hover:text-white">hello@example.com</a></li>
                <li>Phone: <a href="tel:+1234567890" className="hover:text-white">+1 234 567 890</a></li>
                <li>Location: <span className="text-slate-400">India</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-sm text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Rohit Nigam. All rights reserved.</p>
          <div className="mt-4 flex flex-wrap gap-4 sm:mt-0 sm:justify-end">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
