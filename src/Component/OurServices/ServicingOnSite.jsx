import React, { useEffect } from "react";

const ServicingOnSite = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="container mx-auto px-6 py-20">
      {/* Page Heading */}
      <div className="animate-fade-in-down mb-16 text-center px-2">
        <h1 className="leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-orange-500 to-amber-500">
          Servicing On Site
        </h1>
        <p className="mt-4 text-base sm:text-lg text-yellow-700 max-w-2xl mx-auto">
          On-location transformer service built for reliability and speed, whenever and wherever you need it.
        </p>
      </div>

      {/* Description Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up">
        {/* Text Area */}
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-yellow-100 hover:shadow-2xl transition duration-500">
          <h3 className="text-3xl font-semibold text-yellow-800 mb-4">
            Minimize Downtime with On-Site Expertise
          </h3>
          <p className="text-yellow-700 opacity-90 mb-6 leading-relaxed">
            Our field engineers deliver timely and effective on-site servicing
            to keep your transformers operating at peak efficiency. We handle
            everything from scheduled maintenance to urgent breakdowns without
            removing your unit from location.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-yellow-700 opacity-90">
            <li>24/7 service availability</li>
            <li>Preventive maintenance and health assessment</li>
            <li>Diagnostics using portable equipment</li>
            <li>Oil testing, filtration, and top-ups on location</li>
            <li>Minor repairs and adjustments handled instantly</li>
          </ul>
        </div>

        {/* Image Area */}
        <div className="flex justify-center">
          <div className="w-full md:w-[500px] h-[300px] rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 transform hover:scale-[1.02]">
            <img
              src="https://dynamic-assets.hitachienergy.com/is/image/hitachiabbpowergrids/transformer-protection_16_19?wid=1440&hei=810&fmt=png-alpha&fit=crop%2C1"
              alt="On-Site Service"
              className="w-full h-full object-cover scale-105"
            />
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
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

export default ServicingOnSite;
