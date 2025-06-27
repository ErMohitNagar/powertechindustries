import React, { useEffect } from "react";

const TransformersRepair = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const reasons = [
    {
      title: "Expert Technicians",
      description:
        "Certified professionals with hands-on experience in transformer diagnostics and repairs.",
      icon: <span className="text-4xl text-cyan-600">👨‍🔧</span>,
    },
    {
      title: "Quick Turnaround",
      description:
        "Streamlined repair workflows and in-house resources ensure fast yet reliable service.",
      icon: <span className="text-4xl text-cyan-600">⏱️</span>,
    },
    {
      title: "On-Site & In-House Options",
      description:
        "We offer flexible service models to minimize equipment downtime and logistics costs.",
      icon: <span className="text-4xl text-cyan-600">🚚</span>,
    },
    {
      title: "Quality & Safety First",
      description:
        "Adherence to industry standards with detailed testing protocols and quality audits.",
      icon: <span className="text-4xl text-cyan-600">🛡️</span>,
    },
  ];

  return (
    <section className="container mx-auto px-6 py-20">
      {/* Page Heading */}
      <div className="animate-fade-in-down mb-16 text-center px-2">
        <h1 className="leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-green-600 to-yellow-600">
          Transformers Repair
        </h1>
        <p className="mt-4 text-base sm:text-lg text-blue-700 max-w-2xl mx-auto">
          Expert transformer repair services designed for efficiency, safety,
          and long-term performance.
        </p>
      </div>

      {/* Description Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up">
        {/* Text Block */}
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-blue-100 hover:shadow-2xl transition duration-500">
          <h3 className="text-3xl font-semibold text-blue-800 mb-4">
            Reliable & Efficient Repairs
          </h3>
          <p className="text-blue-700 opacity-90 mb-6 leading-relaxed">
            We specialize in repairing power and distribution transformers,
            ensuring extended lifespan and optimal performance. Our team uses
            industry-certified diagnostic tools and techniques to identify
            issues at their root and provide durable solutions.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-blue-700 opacity-90">
            <li>Comprehensive testing and fault analysis</li>
            <li>Oil filtration and dehydration service</li>
            <li>Winding replacement and insulation enhancement</li>
            <li>Bushing, gasket, and connector replacements</li>
            <li>On-site and in-house repair options</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <div className="w-full md:w-[500px] h-[300px] rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 transform hover:scale-[1.02]">
            <img
              src="https://spectrum.ieee.org/media-library/less-than-p-greater-than-at-a-solar-facility-in-georgia-silicon-ranch-stores-substation-transformers-it-expects-to-deploy-in-the-region-in-one-to-two-years-less-than-p-greater-than.jpg?id=55156566"
              alt="Transformer Repair"
              className="w-full h-full object-cover"
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

export default TransformersRepair;
