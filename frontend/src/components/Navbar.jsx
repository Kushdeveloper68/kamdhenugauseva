import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Facilities", to: "/facilities" },
  { label: "Gallery", to: "/gallery" },
  { label: "Team", to: "/team" },
  { label: "Support", to: "/support-us" },
  {
    label: "More",
    dropdown: [
      { label: "Impact & Achievements", to: "/impact" },
      { label: "Volunteer / Join Us", to: "/volunteer" },
      // ✅ Fixed: was "financial-transparency" (missing leading slash)
      { label: "Transparency / Reports", to: "/financial-transparency" },
      { label: "Emergency Help", to: "/emergency" },
      { label: "FAQ", to: "/faq" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const isActive = (to) => location.pathname === to;

  // ✅ Fixed: Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close both menus on route change
  useEffect(() => {
    setDropdownOpen(false);
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-white shadow-md px-6 md:px-10 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-700 tracking-tight">
          Gau Sala
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1 font-medium">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-green-50 hover:text-green-700 transition"
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {dropdownOpen && (
                  <ul className="absolute right-0 mt-2 w-52 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50">
                    {link.dropdown.map((item) => (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          onClick={() => setDropdownOpen(false)}
                          className={`block px-4 py-2 text-sm hover:bg-green-50 hover:text-green-700 transition ${
                            isActive(item.to)
                              ? "text-green-700 font-semibold bg-green-50"
                              : "text-gray-700"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`px-3 py-2 rounded-md transition block hover:bg-green-50 hover:text-green-700 ${
                    isActive(link.to)
                      ? "text-green-700 font-semibold bg-green-50"
                      : "text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Donate + Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* ✅ Fixed: was /donation — now correctly routes to the Donation page */}
          <Link
            to="/donation"
            className="hidden md:block bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition font-semibold text-sm"
          >
            Donate 💚
          </Link>
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-1 pb-2">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label}>
                <p className="text-xs font-semibold uppercase text-gray-400 px-3 pt-3 pb-1 tracking-widest">
                  More Pages
                </p>
                {link.dropdown.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-2 rounded-md text-sm hover:bg-green-50 hover:text-green-700 transition ${
                      isActive(item.to)
                        ? "text-green-700 font-semibold bg-green-50"
                        : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2 rounded-md hover:bg-green-50 hover:text-green-700 transition ${
                  isActive(link.to)
                    ? "text-green-700 font-semibold bg-green-50"
                    : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/donation"
            onClick={() => setOpen(false)}
            className="mt-2 bg-green-700 text-white text-center px-5 py-2 rounded-full hover:bg-green-800 transition font-semibold"
          >
            Donate 💚
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;