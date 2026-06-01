import { NavLink } from 'react-router-dom'

function Footer() {
  return (
   <footer className="w-full rounded-t-3xl border-t border-gray-200 dark:border-slate-800 flat no shadows bg-slate-50 dark:bg-slate-950 mt-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 py-16 max-w-7xl mx-auto">
      {/* Brand Column */}
      <div className="space-y-4">
        <div className="text-lg font-black text-green-900 dark:text-green-200">
          Kaam Denu Gaushala
        </div>
        <p className="font-['Work_Sans'] text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          Compassionate care for every soul. Providing sanctuary, medical aid, and a life of dignity for
          rescued animals.
        </p>
      </div>
      {/* Quick Links */}
      <div className="space-y-4">
        <h4 className="font-semibold text-green-800 dark:text-green-500 mb-4">Organization</h4>
        <ul className="space-y-2">
          <li><NavLink className="text-slate-500 dark:text-slate-400 hover:text-green-600 font-['Work_Sans'] text-sm leading-relaxed hover:translate-x-1 transition-transform duration-300 inline-block" to="/about">About Us</NavLink></li>
          <li><NavLink className="text-slate-500 dark:text-slate-400 hover:text-green-600 font-['Work_Sans'] text-sm leading-relaxed hover:translate-x-1 transition-transform duration-300 inline-block" to="/impact">Impact Reports</NavLink></li>
          <li><NavLink className="text-slate-500 dark:text-slate-400 hover:text-green-600 font-['Work_Sans'] text-sm leading-relaxed hover:translate-x-1 transition-transform duration-300 inline-block" to="/gallery">Gallery</NavLink></li>
        </ul>
      </div>
      {/* Legal & Contact */}
      <div className="space-y-4">
        <h4 className="font-semibold text-green-800 dark:text-green-500 mb-4">Support</h4>
        <ul className="space-y-2">
          <li><NavLink className="text-slate-500 dark:text-slate-400 hover:text-green-600 font-['Work_Sans'] text-sm leading-relaxed hover:translate-x-1 transition-transform duration-300 inline-block" to="/faq">FAQ</NavLink></li>
          <li><NavLink className="text-slate-500 dark:text-slate-400 hover:text-green-600 font-['Work_Sans'] text-sm leading-relaxed hover:translate-x-1 transition-transform duration-300 inline-block" to="/financial-transparency">Financial Transparency</NavLink></li>
          <li><NavLink className="text-slate-500 dark:text-slate-400 hover:text-green-600 font-['Work_Sans'] text-sm leading-relaxed hover:translate-x-1 transition-transform duration-300 inline-block" to="/contact">Contact Us</NavLink></li>
        </ul>
      </div>
    </div>
    {/* Copyright Banner */}
    <div className="border-t border-gray-200 dark:border-slate-800 py-6 text-center">
      <p className="font-['Work_Sans'] text-sm text-slate-500 dark:text-slate-400">
        © 2024 Kaam Denu Gaushala. Compassionate care for every soul.
      </p>
      <a
        href="https://kushdeveloper.me"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block font-['Work_Sans'] text-sm text-slate-500 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
      >
        Made by Kush Developer
      </a>
    </div>
  </footer>
  )
}

export default Footer