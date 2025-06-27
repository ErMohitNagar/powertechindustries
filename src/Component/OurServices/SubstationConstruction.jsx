import React, { useEffect } from "react";

const SubstationConstruction = () => {
  // Ensure scroll position resets on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="container mx-auto px-6 py-20">
      {/* Heading */}
      <div className="animate-fade-in-down mb-16 text-center px-2">
        <h1 className="leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-pink-500">
          Construction of Substations
        </h1>
        <p className="mt-4 text-base sm:text-lg text-red-700 max-w-2xl mx-auto">
          Turnkey substation solutions tailored to your project’s technical and safety requirements.
        </p>
      </div>

      {/* Description & Image */}
      <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up">
        {/* Text Content */}
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-red-100 hover:shadow-2xl transition duration-500">
          <h3 className="text-3xl font-semibold text-red-800 mb-4">
            From Planning to Power-Up
          </h3>
          <p className="text-red-700 opacity-90 mb-6 leading-relaxed">
            Our team of engineers and project managers oversees complete substation development—from land survey and civil work to equipment installation and commissioning. We ensure safe, efficient, and regulation-compliant builds for utilities, industries, and private clients.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-red-700 opacity-90">
            <li>End-to-end electrical and civil engineering support</li>
            <li>Procurement and integration of transformers, breakers, and panels</li>
            <li>Grounding, cabling, fencing, and lighting setup</li>
            <li>Power flow design and fault protection systems</li>
            <li>Coordination with local authorities and safety inspections</li>
          </ul>
        </div>

        {/* Image Block */}
        <div className="flex justify-center">
          <div className="w-full md:w-[500px] h-[300px] rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 transform hover:scale-[1.02]">
            <img
              src="https://powerline.net.in/wp-content/uploads/2024/05/PL-36.jpg"
              alt="Substation Construction"
              className="w-full h-full object-cover scale-105"
            />
          </div>
        </div>
      </div>

      {/* Animation Styles */}
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

export default SubstationConstruction;
