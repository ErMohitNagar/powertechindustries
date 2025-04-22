import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
    return (
        <motion.div
            className="p-8 font-sans bg-gray-100 min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed shadow-inner"
            style={{
                backgroundImage: "url('https://images.picxy.com/cache/2019/3/17/d5c7f5e642aabbcddf6344cc5dfc6876.jpg')",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backgroundBlendMode: "overlay",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="bg-white bg-opacity-95 shadow-2xl rounded-2xl p-10 max-w-4xl w-full border border-gray-300"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <motion.h1
                    className="text-4xl font-extrabold text-gray-900 mb-6 text-center tracking-wide"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Contact Us
                </motion.h1>
                <motion.p
                    className="text-gray-700 mb-8 text-center text-lg leading-relaxed"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Feel free to use the form or drop us an email. Old-fashioned phone calls work too.
                </motion.p>
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    {/* Contact Information */}
                    <motion.div
                        className="text-gray-800 space-y-6"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <p className="flex items-center gap-2">
                            <strong className="font-semibold">Phone:</strong>
                            <span className="text-gray-600">123-456-7890</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <strong className="font-semibold">Email:</strong>
                            <span className="text-gray-600">info@powertech.com</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <strong className="font-semibold">Address:</strong>
                            <span className="text-gray-600">
                                456 Innovation Drive, Tech City, TX 75001
                            </span>
                        </p>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        className="bg-white bg-opacity-100 shadow-lg rounded-xl p-8 w-full max-w-md border border-gray-300"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                    >
                        <div className="flex gap-4 mb-6">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="flex-1 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="flex-1 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="email"
                                placeholder="example@email.com"
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="tel"
                                placeholder="Phone (optional)"
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
                            />
                        </div>
                        <div className="mb-6">
                            <textarea
                                placeholder="Type your message..."
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none h-32 shadow-sm"
                            ></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition duration-300 font-semibold text-lg shadow-md"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Submit
                        </motion.button>
                    </motion.form>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ContactUs;
