import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/service", label: "Service" },
  { to: "/contact", label: "Contact" },
  { to: "/blog", label: "Blog" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-black to-gray-900 text-white shadow-2xl p-4 md:p-6 relative overflow-visible">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="text-4xl animate-bounce transition-transform duration-500 group-hover:rotate-12">
            <span className="text-yellow-400 drop-shadow-lg">⚡</span>
          </div>
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent transition-all duration-500 group-hover:scale-105">
            Power <span className="text-yellow-400">Tech</span>
            <br className="hidden md:block" /> Industries
          </span>
        </div>

        {/* Toggle Button for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-yellow-400 transition duration-300 ease-in-out focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className={`w-8 h-8 transform transition-transform duration-300 ${
                isMenuOpen ? "rotate-90 scale-110 text-yellow-400" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex md:space-x-8 font-semibold text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-2 py-1 transition-all duration-300
                                ${
                                  location.pathname === link.to
                                    ? "text-yellow-400"
                                    : "hover:text-yellow-400"
                                }
                                after:content-[''] after:block after:h-0.5 after:bg-yellow-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left
                            `}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Animated Dropdown Menu for Mobile */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-black bg-opacity-60 transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={`md:hidden fixed top-0 right-0 w-3/4 max-w-xs h-full bg-gradient-to-b from-blue-900 via-black to-gray-900 shadow-2xl z-50 transform transition-transform duration-500 ease-in-out
                    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
                `}
      >
        <div className="flex flex-col h-full py-10 px-6 space-y-8 animate-fade-in">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="self-end mb-4 text-2xl text-yellow-400 hover:text-white transition"
            aria-label="Close menu"
          >
            &times;
          </button>
          {navLinks.map((link, idx) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className={`text-xl font-bold py-2 px-3 rounded-lg transition-all duration-300
                                ${
                                  location.pathname === link.to
                                    ? "bg-yellow-400 text-black shadow-lg scale-105"
                                    : "hover:bg-yellow-400 hover:text-black hover:scale-105"
                                }
                                delay-[${idx * 75}ms]
                            `}
              style={{ transitionDelay: `${idx * 75}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex-1" />
          <div className="text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Power Tech Industries
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
