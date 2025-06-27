import React, { useEffect } from "react";

const TransformersOnRent = () => {
  // Ensure scroll resets to the top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="container mx-auto px-6 py-20">
      {/* Page Heading */}
      <div className="animate-fade-in-down mb-16 text-center px-2">
        <h1 className="leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-blue-600 to-teal-600">
          Transformers On Rent
        </h1>
        <p className="mt-4 text-base sm:text-lg text-green-700 max-w-2xl mx-auto">
          Scalable rental solutions for temporary power demands—delivered fast, installed right, and backed by support.
        </p>
      </div>

      {/* Description & Image */}
      <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up">
        {/* Info Text */}
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-green-100 hover:shadow-2xl transition duration-500">
          <h3 className="text-3xl font-semibold text-green-800 mb-4">
            Reliable & Flexible Rental Solutions
          </h3>
          <p className="text-green-700 opacity-90 mb-6 leading-relaxed">
            Whether it's for emergency power needs, project-based requirements, or temporary
            installations, our rental transformers are ready to bridge the gap. Backed by quality
            assurance and timely deployment, we help you stay up and running.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-green-700 opacity-90">
            <li>High-capacity transformers available short or long term</li>
            <li>Rapid delivery and installation support</li>
            <li>Tailored solutions based on load and site conditions</li>
            <li>Optional on-site technician availability</li>
            <li>Rental agreements with flexible billing</li>
          </ul>
        </div>

        {/* Image Block */}
        <div className="flex justify-center">
          <div className="w-full md:w-[500px] h-[300px] rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 transform hover:scale-[1.02]">
            <img
              src="https://www.sudhirpower.com/wp-content/uploads/2024/09/transformer-abt.jpg"
              alt="Rental Transformer Setup"
              className="w-full h-full object-cover scale-105"
            />
          </div>
        </div>
      </div>

      {/* Custom Animations */}
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

export default TransformersOnRent;
