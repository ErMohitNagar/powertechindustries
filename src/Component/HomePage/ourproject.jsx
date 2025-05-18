import React, { useState } from "react";

const projects = [
  {
    title: "Transformer Installation",
    description:
      "Efficient and high-quality transformer installation services across India.",
    image:
      "https://t3.ftcdn.net/jpg/04/33/02/78/360_F_433027896_PoQOnWcXtmgmuvIfA3ye5zrSzDyxDzHS.jpg",
  },
  {
    title: "Panel Fabrication",
    description:
      "Customized control panel manufacturing with precision engineering.",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/053/626/306/small/a-transformer-at-an-electrical-substation-transmission-of-electricity-photo.jpeg",
  },
  {
    title: "Solar Power Integration",
    description: "Reliable solar energy solutions for commercial applications.",
    image:
      "https://www.shutterstock.com/image-photo/115kv-three-single-phase-power-600w-2613671655.jpg",
  },
];

const OurProjects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="container mx-auto py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 animate-fade-in-down">
        Our Projects
      </h2>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative group bg-white shadow-2xl rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-blue-300 hover:scale-105 hover:-translate-y-2 cursor-pointer animate-fade-in-up`}
            style={{ animationDelay: `${index * 150}ms` }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
            <div className="p-7 relative z-10">
              <h3 className="text-2xl font-bold text-blue-700 mb-2 transition-colors duration-300 group-hover:text-purple-600">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2 mb-4 transition-opacity duration-300 group-hover:opacity-80">
                {project.description}
              </p>
              <span
                className={`inline-block px-4 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow-md transition-all duration-300 ${
                  hovered === index ? "scale-110" : "scale-100"
                }`}
              >
                Learn More
              </span>
            </div>
            {/* Animated overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-400/10 pointer-events-none transition-opacity duration-500 ${
                hovered === index ? "opacity-100" : "opacity-0"
              }`}
            ></div>
          </div>
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
    </div>
  );
};

export default OurProjects;
