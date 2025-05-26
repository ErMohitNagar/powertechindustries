import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
  FaYoutube,
  FaSkype,
  FaRss,
} from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const socialLinks = [
  {
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/powertechindustriesdewas/",
    target: "_blank",
    color: "hover:text-blue-500",
  },
  {
    icon: <FaTwitter />,
    href: "#",
    target: "_blank",
    color: "hover:text-blue-400",
  },
  {
    icon: <FaLinkedinIn />,
    href: "#",
    target: "_blank",
    color: "hover:text-blue-600",
  },
  {
    icon: <FaPinterest />,
    href: "https://in.pinterest.com/powertechindustries17/",
    target: "_blank",
    color: "hover:text-red-500",
  },
];

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "Blog", href: "#" },
  { name: "List Layout", href: "#" },
  { name: "Contact", href: "#" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-16 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-700 opacity-20 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-600 opacity-20 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Brand */}
        <div className="flex flex-col items-start group">
          <h2 className="text-3xl font-extrabold text-white tracking-wide flex items-center gap-2 animate-fade-in-down">
            <span className="inline-block animate-bounce">⚡</span> Power Tech.
          </h2>
          <p className="mt-4 text-base text-gray-400 animate-fade-in-up">
            Simply <span className="text-blue-400 font-semibold">#1 tech</span>{" "}
            company
          </p>
          <div className="mt-6 flex space-x-2">
            {socialLinks.slice(0, 3).map((s, i) => (
              <a
                key={i}
                href={s.href}
                target={s.target}
                className={`p-2 rounded-full bg-gray-800 bg-opacity-60 text-gray-400 transition-all duration-300 transform hover:scale-110 ${s.color} shadow-md`}
                aria-label="Social Link"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4 animate-fade-in-down">
            Quick Links
          </h2>
          <ul className="space-y-3 text-base">
            {quickLinks.map((link, i) => (
              <li
                key={i}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
              >
                <a
                  href={link.href}
                  className="relative group transition-colors duration-300 hover:text-blue-400"
                >
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4 animate-fade-in-down">
            Contact Us
          </h2>
          <ul className="space-y-5 text-base">
            <li className="flex items-center gap-3 animate-fade-in-up">
              <MdLocationOn className="text-blue-400 text-2xl animate-bounce" />
              <span>
                108-B, industrial area 01, 107-B, near shanti nagar, near
                mahakali foods and vippy industries, Amona, Dewas, Madhya
                Pradesh 455001
              </span>
            </li>
            <li
              className="flex items-center gap-3 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <MdPhone className="text-blue-400 text-2xl animate-bounce" />
              <span>+91 8839658204</span>
            </li>
            <li
              className="flex items-center gap-3 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <MdEmail className="text-blue-400 text-2xl animate-bounce" />
              <span>powertechindustries17@gmail.com</span>
            </li>
          </ul>
        </div>
        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4 animate-fade-in-down">
            Remain Updated
          </h2>
          <form className="mt-2 animate-fade-in-up" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 shadow-md"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 pointer-events-none animate-pulse">
                <MdEmail />
              </span>
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-lg font-semibold shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              {submitted ? "Thank you!" : "Sign up"}
            </button>
          </form>
        </div>
      </div>
      {/* Divider */}
      <div className="mt-16 border-t border-gray-700 pt-8 text-center relative z-10">
        <div className="flex justify-center space-x-4 mb-6 animate-fade-in-up">
          {socialLinks.map((s, i) => (
            <a
              key={i}
              href={s.href}
              className={`text-gray-400 p-2 rounded-full bg-gray-800 bg-opacity-60 transition-all duration-300 transform hover:scale-125 ${s.color} shadow-md`}
              aria-label="Social Link"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {s.icon}
            </a>
          ))}
        </div>
        <span className="block text-gray-500 text-sm mb-1 animate-fade-in-up">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </span>
      </div>
      {/* Animations */}
      <style>{`
                .animate-fade-in-down {
                    animation: fadeInDown 0.8s cubic-bezier(.39,.575,.565,1) both;
                }
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s cubic-bezier(.39,.575,.565,1) both;
                }
                @keyframes fadeInDown {
                    0% { opacity: 0; transform: translateY(-30px);}
                    100% { opacity: 1; transform: translateY(0);}
                }
                @keyframes fadeInUp {
                    0% { opacity: 0; transform: translateY(30px);}
                    100% { opacity: 1; transform: translateY(0);}
                }
            `}</style>
    </footer>
  );
};

export default Footer;
