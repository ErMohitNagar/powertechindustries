import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <motion.div
            className="bg-gray-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.header
                className="relative bg-gradient-to-r from-blue-500 to-blue-700 h-96 flex items-center justify-center text-center"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0">
                    <img
                        src="https://www.windfarmbop.com/wp-content/uploads/2012/08/MV-HV-wind-farm-substation-transformer.jpg"
                        alt="Background"
                        className="w-full h-full object-cover opacity-40"
                    />
                </div>
                <div className="relative z-10">
                    <motion.h1
                        className="text-5xl font-extrabold text-white drop-shadow-lg"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        About Power Tech Industries
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg text-gray-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Leading the way in reliable transformer services since 2016.
                    </motion.p>
                </div>
            </motion.header>

            {/* Company Overview */}
            <motion.section
                className="container mx-auto p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Who We Are</h2>
                <p className="text-gray-700 text-lg text-center max-w-4xl mx-auto leading-relaxed">
                    Established in 2016, Power Tech Industries has been a trusted name in transformer repairs, manufacturing, oil filtration, and electrical services. With a commitment to quality and innovation, we continue to serve clients across India.
                </p>
            </motion.section>

            {/* Our Values */}
            <motion.section
                className="bg-gray-100 py-15"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-6 animate-fade-in-up">Our Core Values</h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            { title: "Reliability", description: "We prioritize excellence and consistent service quality." },
                            { title: "Innovation", description: "Our experts ensure cutting-edge solutions in every project." },
                            { title: "Customer Satisfaction", description: "Building long-term partnerships through superior service." },
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                            >
                                <h3 className="text-2xl font-bold text-gray-800">{value.title}</h3>
                                <p className="text-gray-600 mt-2">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Why Choose Us */}
            <motion.section
                className="container mx-auto my-12 p-8 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Why Choose Us?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        { title: "Expert Team", description: "Our engineers bring years of experience in electrical solutions." },
                        { title: "Certified Quality", description: "We adhere to industry standards for reliable performance." },
                        { title: "Nationwide Service", description: "Operating across India to serve your electrical needs." },
                        { title: "Affordable Pricing", description: "Competitive rates without compromising quality." },
                    ].map((reason, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 shadow-lg rounded-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                        >
                            <h3 className="text-2xl font-bold text-gray-800">{reason.title}</h3>
                            <p className="text-gray-600 mt-2">{reason.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Our Team */}
            <motion.section
                className="container mx-auto my-12 p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Meet Our Team</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {[
                        { name: "John Doe", role: "CEO", image: "https://via.placeholder.com/150" },
                        { name: "Jane Smith", role: "CTO", image: "https://via.placeholder.com/150" },
                        { name: "Mike Johnson", role: "Lead Engineer", image: "https://via.placeholder.com/150" },
                    ].map((member, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 text-center"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-24 h-24 mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </motion.div>
    );
};

export default AboutUs;
