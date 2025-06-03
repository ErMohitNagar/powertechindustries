import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Analytics",
    description: "Gain insights with our advanced analytics tools.",
    icon: "📊",
    bgColor: "bg-gradient-to-tr from-blue-100 via-blue-200 to-blue-50",
    textColor: "text-blue-700",
    shadow: "shadow-blue-200",
  },
  {
    title: "Design",
    description: "Create stunning visuals with our design services.",
    icon: "🎨",
    bgColor: "bg-gradient-to-tr from-green-100 via-green-200 to-green-50",
    textColor: "text-green-700",
    shadow: "shadow-green-200",
  },
  {
    title: "Development",
    description: "Build robust applications with our development team.",
    icon: "💻",
    bgColor: "bg-gradient-to-tr from-yellow-100 via-yellow-200 to-yellow-50",
    textColor: "text-yellow-700",
    shadow: "shadow-yellow-200",
  },
  {
    title: "Support",
    description: "Get 24/7 support for all your technical needs.",
    icon: "🛠️",
    bgColor: "bg-gradient-to-tr from-red-100 via-red-200 to-red-50",
    textColor: "text-red-700",
    shadow: "shadow-red-200",
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
            to="/contact"
            key={index}
            className={`
                            group relative p-8 rounded-3xl overflow-hidden
                            ${service.bgColor} ${service.shadow}
                            shadow-xl transition-all duration-500
                            hover:scale-105 hover:shadow-2xl
                            hover:-translate-y-2
                            animate-fade-in-up
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
      {/* Tailwind custom keyframes for fade-in */}
      <style>
        {`
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s both;
                }
                .animate-fade-in-down {
                    animation: fadeInDown 1s both;
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-40px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                `}
      </style>
    </section>
  );
};

export default Service;
