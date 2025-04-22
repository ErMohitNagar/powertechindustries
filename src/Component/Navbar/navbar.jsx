import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white shadow-lg p-6 relative">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section for image and name */}
                <div className="text-3xl font-bold tracking-tight flex items-center space-x-2">
                    <div className="text-blue-500 animate-pulse">⚡</div>
                    <span>
                        <span className="text-blue-500">Power</span> Tech <br /> Industries
                    </span>
                </div>

                {/* Toggle Button for Mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white hover:text-blue-400 transition duration-300 ease-in-out"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
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
                <div className="hidden md:flex md:flex-row md:space-x-6 font-medium text-lg">
                    <Link
                        to="/"
                        className="hover:text-blue-400 transition duration-300 ease-in-out"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="hover:text-blue-400 transition duration-300 ease-in-out"
                    >
                        About
                    </Link>
                    <Link
                        to="/service"
                        className="hover:text-blue-400 transition duration-300 ease-in-out"
                    >
                        Service
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-blue-400 transition duration-300 ease-in-out"
                    >
                        Contact
                    </Link>
                    <Link
                        to="/blog"
                        className="hover:text-blue-400 transition duration-300 ease-in-out"
                    >
                        Blog
                    </Link>
                </div>
            </div>

            {/* Dropdown Menu for Mobile */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg flex flex-col space-y-4 p-4 font-medium text-lg z-50">
                    <Link
                        to="/"
                        className="hover:text-blue-400 transition duration-300 ease-in-out"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="hover:text-blue-400 transition duration-300 ease-in-out"
                    >
                        About
                    </Link>
                    <Link
                        to="/service"
                        className="hover:text-blue-400 transition duration-300 ease-in-out"
                    >
                        Service
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-blue-400 transition duration-300 ease-in-out"
                    >
                        Contact
                    </Link>
                    <Link
                        to="/blog"
                        className="hover:text-blue-400 transition duration-300 ease-in-out"
                    >
                        Blog
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
