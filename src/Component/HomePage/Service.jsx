import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Transformers Repair",
    description: "Professional repair services to restore transformer efficiency and reliability.",
    icon: "🛠️",
    bgColor: "bg-gradient-to-tr from-blue-100 via-blue-200 to-blue-50",
    textColor: "text-blue-700",
    shadow: "shadow-blue-200",
    link: "/TransformersRepair",
  },
  {
    title: "Transformers On Rent",
    description: "Flexible rental options for high-performance transformers tailored to your needs.",
    icon: "🔌",
    bgColor: "bg-gradient-to-tr from-green-100 via-green-200 to-green-50",
    textColor: "text-green-700",
    shadow: "shadow-green-200",
    link: "/TransformersOnRent",
  },
  {
    title: "Servicing On Site",
    description: "On-site servicing to ensure minimal downtime and continuous operation.",
    icon: "🧰",
    bgColor: "bg-gradient-to-tr from-yellow-100 via-yellow-200 to-yellow-50",
    textColor: "text-yellow-700",
    shadow: "shadow-yellow-200",
    link: "/ServicingOnSite",
  },
  {
    title: "Construction Of Substations",
    description: "Turnkey substation construction solutions with expert planning and execution.",
    icon: "🏗️",
    bgColor: "bg-gradient-to-tr from-red-100 via-red-200 to-red-50",
    textColor: "text-red-700",
    shadow: "shadow-red-200",
    link: "/SubstationConstruction",
  },
];

const Service = () => {
  return (
    <section className="container mx-auto my-20 px-6">
      <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-green-600 to-yellow-600 mb-16 tracking-tight animate-fade-in-down">
        Our Services
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Link
            to={service.link}
            key={index}
            className={`
              group relative p-8 rounded-3xl overflow-hidden
              ${service.bgColor} ${service.shadow}
              shadow-xl transition-all duration-500
              hover:scale-105 hover:shadow-2xl
              hover:-translate-y-2 animate-fade-in-up
            `}
            style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
          >
            <div
              className={`
                flex items-center justify-center mb-6
                h-20 w-20 rounded-full bg-white
                text-5xl shadow-lg mx-auto
                transition-transform duration-500
                group-hover:rotate-[12deg] group-hover:scale-110
                ${service.textColor}
              `}
            >
              {service.icon}
            </div>
            <h3
              className={`text-2xl font-bold mb-3 text-center ${service.textColor} transition-colors duration-300 group-hover:text-black`}
            >
              {service.title}
            </h3>
            <p
              className={`text-base text-center ${service.textColor} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
            >
              {service.description}
            </p>
            <span
              className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-20 blur-2xl ${service.bgColor}`}
            ></span>
          </Link>
        ))}
      </div>

      <style>
        {`
          .animate-fade-in-up {
            animation: fadeInUp 0.8s both;
          }
          .animate-fade-in-down {
            animation: fadeInDown 1s both;
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-40px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
};

export default Service;
