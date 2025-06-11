import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/notes", name: "Notes" },
    { path: "/notes/uploaded", name: "All Notes" },
    { path: "/docs", name: "Docs" },
    { path: "/blog", name: "Blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full ${scrolled ? "shadow-sm" : ""}`}>
      {/* Primary Navigation Bar */}
      <div className={`relative bg-white border-b ${scrolled ? "border-gray-200" : "border-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left side */}
            <div className="flex-shrink-0 flex items-center">
              <Link 
                to="/" 
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
              >
                EduNotes
              </Link>
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex flex-1 justify-center mx-8">
              <ul className="flex space-x-6">
                {navItems.map((item) => (
                  <li key={item.path} className="relative">
                    <Link
                      to={item.path}
                      className={`px-1 py-2 text-sm font-medium transition-colors ${
                        location.pathname === item.path
                          ? "text-blue-600"
                          : "text-gray-600 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                      {location.pathname === item.path && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right side - Could add CTA or search */}
            <div className="hidden md:block flex-shrink-0 w-32">
              {/* Placeholder for future elements */}
            </div>

            {/* Mobile menu button - Right side */}
            <div className="md:hidden flex items-center">
              <button 
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Active indicator line - desktop only */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 h-px bg-gray-200/50"></div>
      </div>

      {/* Mobile Menu - Full width with bottom line */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;