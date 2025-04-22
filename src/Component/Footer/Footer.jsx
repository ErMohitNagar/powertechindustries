import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest, FaYoutube, FaSkype, FaRss } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                
                <div>
                    <h2 className="text-2xl font-semibold text-white">Power Tech.</h2>
                    <p className="mt-4 text-sm">
                        Simply #1 tech. company
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-white">Quick Links</h2>
                    <ul className="mt-4 space-y-2 text-sm">
                        <li><a href="#" className="hover:text-blue-500 transition-colors">Home</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors">List Layout</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-white">Contact Us</h2>
                    <ul className="mt-4 space-y-4 text-sm">
                        <li className="flex items-center">
                            <MdLocationOn className="mr-3 text-blue-500 text-xl" />
                            <span>3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345</span>
                        </li>
                        <li className="flex items-center">
                            <MdPhone className="mr-3 text-blue-500 text-xl" />
                            <span>+123-456-789</span>
                        </li>
                        <li className="flex items-center">
                            <MdEmail className="mr-3 text-blue-500 text-xl" />
                            <span>sales@example.com</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-white">Remain Updated</h2>
                    <form className="mt-4">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full px-4 py-2 bg-gray-800 text-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Sign up
                        </button>
                    </form>
                </div>
            </div>

            <div className="mt-12 border-t border-gray-700 pt-6 text-center">
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><FaFacebookF /></a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors"><FaTwitter /></a>
                    <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><FaLinkedinIn /></a>
                    <a href="#" className="text-gray-400 hover:text-red-500 transition-colors"><FaPinterest /></a>
                    <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><FaYoutube /></a>
                    <a href="#" className="text-gray-400 hover:text-blue-300 transition-colors"><FaSkype /></a>
                    <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors"><FaRss /></a>
                </div>
                <span className="text-gray-500 text-sm">&copy; 2023. All rights reserved. </span>
                <span className="text-gray-500 text-sm">Designed by Inspiry Themes</span>
            </div>
        </footer>
    );
};

export default Footer;
