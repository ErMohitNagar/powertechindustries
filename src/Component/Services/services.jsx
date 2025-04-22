import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const staggerContainer = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <div className="bg-gray-50 py-16">
            <motion.div
                className="container mx-auto px-6"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.h2
                    className="text-5xl font-extrabold text-center text-gray-800 mb-10"
                    variants={fadeIn}
                >
                    Our Services
                </motion.h2>
                <motion.p
                    className="text-center text-lg text-gray-600 mb-14 leading-relaxed"
                    variants={fadeIn}
                >
                    At PowerTech, we provide top-notch services to meet all your power distribution needs. 
                    Our team of experts ensures quality, reliability, and efficiency in every project we undertake.
                </motion.p>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-10"
                    variants={staggerContainer}
                >
                    {[
                        {
                            title: "DP Transformer Installation",
                            description: "We provide expert installation services for Distribution Pole (DP) transformers, ensuring seamless integration with your power systems for reliable energy distribution.",
                            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4t03WoCAu2EevWnyX8tNcZkqSGZ53jav1ZQ&s",
                            buttonColor: "bg-blue-500 hover:bg-blue-600",
                        },
                        {
                            title: "Maintenance & Repairs",
                            description: "Our team offers comprehensive maintenance and repair services for DP transformers, ensuring optimal performance and minimizing downtime.",
                            img: "https://img.freepik.com/premium-vector/efficiency-production-growth-line-icon-vector_227744-1159.jpg",
                            buttonColor: "bg-green-500 hover:bg-green-600",
                        },
                        {
                            title: "Inspection & Testing",
                            description: "We offer professional inspection and testing services to ensure your DP transformers meet safety and performance standards, preventing potential issues.",
                            img: "https://www.digitalsignage.com/_images/installation-image.png",
                            buttonColor: "bg-purple-500 hover:bg-purple-600",
                        },
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-8 text-center transform transition hover:scale-105"
                            variants={fadeIn}
                            whileHover={{ scale: 1.1 }}
                        >
                            <motion.img 
                                src={service.img} 
                                alt={service.title} 
                                className="w-28 h-28 mx-auto mb-6 rounded-full border-4 border-gray-200"
                                whileHover={{ rotate: 10 }}
                            />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                            <motion.button
                                className={`${service.buttonColor} text-white px-6 py-3 rounded-lg shadow-md transition`}
                                whileHover={{ scale: 1.05 }}
                            >
                                Learn More
                            </motion.button>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    className="mt-20 bg-blue-50 py-16 px-8 rounded-lg shadow-lg"
                    variants={fadeIn}
                >
                    <h3 className="text-4xl font-extrabold text-center text-blue-600 mb-10">Why Choose Us?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            {
                                title: "Expert Team",
                                description: "Our team consists of highly skilled professionals with years of experience in the power distribution industry.",
                            },
                            {
                                title: "Quality Assurance",
                                description: "We prioritize quality in every service we provide, ensuring long-lasting and reliable solutions.",
                            },
                            {
                                title: "Customer Satisfaction",
                                description: "We are committed to delivering exceptional customer service and exceeding your expectations.",
                            },
                            {
                                title: "Affordable Pricing",
                                description: "Our services are competitively priced to provide the best value for your investment.",
                            },
                        ].map((reason, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start space-x-4"
                                variants={fadeIn}
                            >
                                <div className="w-12 h-12 flex-shrink-0 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                                    {index + 1}
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{reason.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Team Section */}
                <motion.div className="mt-20" variants={fadeIn}>
                    <h3 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Our Team Members</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                name: "John Doe",
                                role: "Lead Engineer",
                                img: "https://via.placeholder.com/150",
                                bio: "John has over 10 years of experience in power distribution and transformer systems.",
                            },
                            {
                                name: "Jane Smith",
                                role: "Project Manager",
                                img: "https://via.placeholder.com/150",
                                bio: "Jane specializes in managing large-scale projects with a focus on efficiency and quality.",
                            },
                            {
                                name: "Mike Johnson",
                                role: "Technician",
                                img: "https://via.placeholder.com/150",
                                bio: "Mike is an expert in transformer maintenance and repair, ensuring optimal performance.",
                            },
                        ].map((member, index) => (
                            <motion.div
                                key={index}
                                className="bg-white shadow-lg rounded-lg p-8 text-center transform transition hover:scale-105"
                                variants={fadeIn}
                                whileHover={{ scale: 1.1 }}
                            >
                                <img 
                                    src={member.img} 
                                    alt={member.name} 
                                    className="w-28 h-28 mx-auto mb-6 rounded-full border-4 border-gray-200"
                                />
                                <h4 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h4>
                                <p className="text-gray-600 mb-2">{member.role}</p>
                                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Services;
