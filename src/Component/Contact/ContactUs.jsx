import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const bgUrl =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80";

const fadeIn = (direction = "up", delay = 0) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.8, delay },
    },
  };
  return variants;
};

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover relative px-2 py-8"
      style={{
        backgroundImage: `linear-gradient(rgba(30,41,59,0.7),rgba(30,41,59,0.7)),url('${bgUrl}')`,
      }}
      initial="hidden"
      animate="visible"
      variants={fadeIn("up", 0)}
    >
      {/* Glassmorphism Card */}
      <motion.div
        className="backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl rounded-3xl p-4 sm:p-6 md:p-12 max-w-5xl w-full mx-0 sm:mx-4 flex flex-col md:flex-row gap-6 md:gap-10"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left: Info & Socials */}
        <motion.div
          className="flex-1 flex flex-col justify-between"
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="visible"
        >
          <motion.div>
            <motion.h1
              className="text-2xl sm:text-3xl md:text-5xl font-black text-white drop-shadow-lg mb-2 sm:mb-4 tracking-tight"
              variants={fadeIn("up", 0.3)}
            >
              Let's Connect
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg text-slate-200 mb-4 sm:mb-8"
              variants={fadeIn("up", 0.4)}
            >
              We’d love to hear from you! Reach out for collaborations, support,
              or just to say hi.
            </motion.p>
            <div className="space-y-2 sm:space-y-4 text-slate-100 text-sm sm:text-base">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="bg-orange-500/80 p-2 rounded-full">
                  {/* ... */}
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 5.75A2.75 2.75 0 015.75 3h12.5A2.75 2.75 0 0121 5.75v12.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75z" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </span>
                <span>info@powertech.com</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="bg-orange-500/80 p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 5.75A2.75 2.75 0 015.75 3h12.5A2.75 2.75 0 0121 5.75v12.5A2.75 2.75 0 0118.25 21H5.75A2.75 2.75 0 013 18.25V5.75z" />
                    <path d="M8 10h.01M16 10h.01M12 14h.01" />
                  </svg>
                </span>
                <span>123-456-7890</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="bg-orange-500/80 p-2 rounded-full">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span>456 Innovation Drive, Tech City, TX 75001</span>
              </div>
            </div>
          </motion.div>
          {/* Socials */}
          <motion.div
            className="flex gap-3 sm:gap-4 mt-6 sm:mt-10"
            variants={fadeIn("up", 0.5)}
          >
            <a href="#" className="hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-white hover:text-orange-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04A4.28 4.28 0 0016.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 8.98 4.07 7.13 1.64 4.16c-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.78 1.89 3.54-.7-.02-1.36-.21-1.94-.53v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.91 3.97 2.94A8.6 8.6 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.7 8.7 0 0024 4.59a8.5 8.5 0 01-2.54.7z" />
              </svg>
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-white hover:text-orange-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.07 8.24 8.93v-6.32h-2.48v-2.61h2.48v-2c0-2.45 1.49-3.8 3.68-3.8 1.07 0 2.19.19 2.19.19v2.41h-1.23c-1.21 0-1.59.75-1.59 1.52v1.68h2.7l-.43 2.61h-2.27v6.32c4.64-.86 8.24-4.52 8.24-8.93 0-5.5-4.46-9.96-9.96-9.96z" />
              </svg>
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-white hover:text-orange-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21.35 11.1c0-5.05-4.1-9.15-9.15-9.15S3.05 6.05 3.05 11.1c0 4.55 3.3 8.32 7.62 9.06v-6.41h-2.3v-2.65h2.3V9.41c0-2.27 1.36-3.53 3.44-3.53.99 0 2.03.18 2.03.18v2.23h-1.14c-1.13 0-1.48.7-1.48 1.42v1.7h2.52l-.4 2.65h-2.12v6.41c4.32-.74 7.62-4.51 7.62-9.06z" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          className="flex-1"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="visible"
        >
          <motion.form
            className="bg-white/90 rounded-2xl shadow-xl p-4 sm:p-8 flex flex-col gap-4 sm:gap-6"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              setTimeout(() => setSubmitted(false), 2500);
            }}
          >
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 p-3 sm:p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white/80 shadow text-sm sm:text-base"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 p-3 sm:p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white/80 shadow text-sm sm:text-base"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 sm:p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white/80 shadow text-sm sm:text-base"
              required
            />
            <input
              type="tel"
              placeholder="Phone (optional)"
              className="w-full p-3 sm:p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white/80 shadow text-sm sm:text-base"
            />
            <textarea
              placeholder="Type your message..."
              className="w-full p-3 sm:p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white/80 shadow resize-none h-24 sm:h-32 text-sm sm:text-base"
              required
            />
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 sm:py-3 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:from-pink-500 hover:to-orange-500 transition-all duration-300"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px 0 rgba(255, 107, 53, 0.2)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              {submitted ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  Sent!
                </span>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
      {/* Floating animated shapes */}
      <motion.div
        className="hidden xs:block absolute top-2 left-2 w-16 h-16 sm:w-24 sm:h-24 bg-orange-400/30 rounded-full blur-2xl animate-pulse"
        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />

      <motion.div
        className="hidden xs:block absolute bottom-2 right-4 w-20 h-20 sm:w-32 sm:h-32 bg-pink-400/30 rounded-full blur-2xl animate-pulse"
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default ContactUs;
