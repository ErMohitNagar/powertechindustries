import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Services = () => {
  const services = [
    {
      title: "DP Transformer Installation",
      description:
        "Expert installation for Distribution Pole (DP) transformers, seamlessly integrating with your power systems for reliable energy distribution.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4t03WoCAu2EevWnyX8tNcZkqSGZ53jav1ZQ&s",
      color: "from-blue-500 to-blue-400",
      shadow: "shadow-blue-200",
    },
    {
      title: "Maintenance & Repairs",
      description:
        "Comprehensive maintenance and repair services for DP transformers, ensuring optimal performance and minimal downtime.",
      img: "https://img.freepik.com/premium-vector/efficiency-production-growth-line-icon-vector_227744-1159.jpg",
      color: "from-green-500 to-green-400",
      shadow: "shadow-green-200",
    },
    {
      title: "Inspection & Testing",
      description:
        "Professional inspection and testing to ensure your DP transformers meet safety and performance standards.",
      img: "https://www.digitalsignage.com/_images/installation-image.png",
      color: "from-purple-500 to-purple-400",
      shadow: "shadow-purple-200",
    },
    {
      title: "Transformer Upgrades",
      description:
        "Upgrade your existing DP transformers to the latest technology for improved efficiency and reliability.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      color: "from-yellow-500 to-yellow-400",
      shadow: "shadow-yellow-200",
    },
    {
      title: "Emergency Response",
      description:
        "Rapid emergency response services to address transformer failures and restore power quickly.",
      img: "https://cdn-icons-png.flaticon.com/512/1828/1828843.png",
      color: "from-red-500 to-red-400",
      shadow: "shadow-red-200",
    },
    {
      title: "Consultation & Design",
      description:
        "Expert consultation and custom design services for new power distribution projects and transformer installations.",
      img: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
      color: "from-indigo-500 to-indigo-400",
      shadow: "shadow-indigo-200",
    },
  ];

  const reasons = [
    {
      title: "Expert Team",
      description:
        "Highly skilled professionals with years of experience in the power distribution industry.",
      icon: "👷‍♂️",
    },
    {
      title: "Quality Assurance",
      description:
        "We prioritize quality in every service, ensuring long-lasting and reliable solutions.",
      icon: "✅",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Committed to delivering exceptional customer service and exceeding your expectations.",
      icon: "🤝",
    },
    {
      title: "Affordable Pricing",
      description:
        "Competitively priced services to provide the best value for your investment.",
      icon: "💸",
    },
  ];

  const team = [
    {
      name: "John Doe",
      role: "Lead Engineer",
      img: "https://via.placeholder.com/150",
      bio: "Over 10 years of experience in power distribution and transformer systems.",
    },
    {
      name: "Jane Smith",
      role: "Project Manager",
      img: "https://via.placeholder.com/150",
      bio: "Specializes in managing large-scale projects with a focus on efficiency and quality.",
    },
    {
      name: "Mike Johnson",
      role: "Technician",
      img: "https://via.placeholder.com/150",
      bio: "Expert in transformer maintenance and repair, ensuring optimal performance.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100 min-h-screen py-10 sm:py-16">
      <motion.div
        className="container mx-auto px-3 sm:px-4"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Header */}
        <motion.div
          className="mb-10 sm:mb-20 flex flex-col items-center"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-3xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 mb-4 sm:mb-6 drop-shadow-2xl tracking-tight text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-base sm:text-2xl text-gray-700 max-w-3xl text-center font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            At PowerTech, we deliver innovative, reliable, and efficient power
            distribution solutions. Our expert team ensures every project is
            handled with precision and care.
          </motion.p>
        </motion.div>

        {/* Services Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12 mb-16 sm:mb-28"
          variants={stagger}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{
                scale: 1.07,
                boxShadow: "0 12px 40px 0 rgba(59, 130, 246, 0.18)",
                rotate: 1,
              }}
              whileTap={{ scale: 0.97 }}
              className={`relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-2xl ${service.shadow} overflow-hidden group transition-all duration-300 border-t-4 border-b-4 border-transparent hover:border-blue-400`}
            >
              <motion.div
                className={`absolute -top-10 sm:-top-12 -right-10 sm:-right-12 w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br ${service.color} opacity-25 group-hover:scale-110 transition-transform duration-300`}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.25 }}
                transition={{
                  delay: 0.2 + idx * 0.1,
                  duration: 0.7,
                  type: "spring",
                }}
              />
              <motion.img
                src={service.img}
                alt={service.title}
                className="w-20 h-20 sm:w-28 sm:h-28 mx-auto mb-6 sm:mb-8 rounded-full border-4 border-white shadow-lg group-hover:rotate-6 transition-transform duration-300 bg-gray-50 object-cover"
                whileHover={{ rotate: 10, scale: 1.13 }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.3 + idx * 0.1,
                  duration: 0.6,
                  type: "spring",
                }}
              />
              <motion.h3
                className="text-lg sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4 group-hover:text-blue-600 transition-colors duration-200"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 mb-4 sm:mb-8 text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
              >
                {service.description}
              </motion.p>
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-full font-semibold shadow-lg hover:from-purple-500 hover:to-blue-600 transition-all duration-200 text-base sm:text-lg"
                whileHover={{
                  scale: 1.09,
                  boxShadow: "0 6px 28px 0 rgba(124, 58, 237, 0.18)",
                }}
                whileTap={{ scale: 0.97 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + idx * 0.1, duration: 0.4 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          className="bg-gradient-to-br from-blue-100 via-white to-purple-100 rounded-2xl sm:rounded-3xl shadow-2xl py-10 sm:py-20 px-4 sm:px-10 mb-16 sm:mb-28"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            className="text-2xl sm:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 mb-8 sm:mb-14"
            variants={scaleIn}
          >
            Why Choose Us?
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 max-w-4xl mx-auto"
            variants={stagger}
          >
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                className="flex items-start space-x-4 sm:space-x-6 bg-white/80 rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-200 border-l-4 border-blue-400"
                variants={scaleIn}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  boxShadow: "0 12px 40px 0 rgba(59, 130, 246, 0.13)",
                }}
              >
                <motion.div
                  className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-lg"
                  initial={{ rotate: -20, scale: 0.7, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.2 + idx * 0.1,
                    duration: 0.5,
                    type: "spring",
                  }}
                >
                  {reason.icon}
                </motion.div>
                <div>
                  <h4 className="text-base sm:text-xl font-semibold text-gray-800 mb-1 sm:mb-2">
                    {reason.title}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div className="mb-8 sm:mb-10" variants={fadeInUp}>
          <motion.h3
            className="text-2xl sm:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 mb-8 sm:mb-14"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "backOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Our Team Members
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12"
            variants={stagger}
          >
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 text-center group hover:shadow-3xl transition-shadow duration-300 border-t-4 border-b-4 border-transparent hover:border-purple-400"
                variants={scaleIn}
                whileHover={{
                  scale: 1.09,
                  y: -6,
                  boxShadow: "0 12px 40px 0 rgba(139, 92, 246, 0.13)",
                }}
              >
                <motion.img
                  src={member.img}
                  alt={member.name}
                  className="w-20 h-20 sm:w-28 sm:h-28 mx-auto mb-4 sm:mb-6 rounded-full border-4 border-blue-200 shadow-lg group-hover:scale-110 transition-transform duration-300 object-cover"
                  whileHover={{ rotate: -8, scale: 1.18 }}
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.2 + idx * 0.1,
                    duration: 0.5,
                    type: "spring",
                  }}
                />
                <motion.h4
                  className="text-lg sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2 group-hover:text-purple-600 transition-colors duration-200"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
                >
                  {member.name}
                </motion.h4>
                <motion.p
                  className="text-blue-500 font-semibold mb-1 sm:mb-2 text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.4 }}
                >
                  {member.role}
                </motion.p>
                <motion.p
                  className="text-gray-600 text-xs sm:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
                >
                  {member.bio}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
