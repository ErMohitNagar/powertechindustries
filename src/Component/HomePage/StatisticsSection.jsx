import React, { useState, useEffect } from "react";

const StatisticItem = ({ value, label, delay }) => (
  <div
    className={`flex flex-col items-center bg-gradient-to-br from-blue-900/60 to-blue-700/60 rounded-2xl shadow-xl p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <h2 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 drop-shadow-lg animate-bounce-slow">
      {value}+
    </h2>
    <p className="text-lg font-semibold text-gray-100 mt-4 tracking-wide uppercase animate-slide-up">
      {label}
    </p>
  </div>
);

const targetStats = {
  transformersInstalled: 250,
  projects: 150,
  locations: 50,
  clients: 200,
};

const statsLabels = [
  "Transformers Installed",
  "Projects",
  "Locations",
  "Clients",
];

const StatsSection = () => {
  const [stats, setStats] = useState({
    transformersInstalled: 0,
    projects: 0,
    locations: 0,
    clients: 0,
  });

  useEffect(() => {
    let frame;
    let start;
    const duration = 1800;

    function animateStats(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);

      setStats({
        transformersInstalled: Math.floor(
          targetStats.transformersInstalled * progress
        ),
        projects: Math.floor(targetStats.projects * progress),
        locations: Math.floor(targetStats.locations * progress),
        clients: Math.floor(targetStats.clients * progress),
      });

      if (progress < 1) {
        frame = requestAnimationFrame(animateStats);
      } else {
        setStats(targetStats);
      }
    }

    frame = requestAnimationFrame(animateStats);
    return () => cancelAnimationFrame(frame);
  }, []);

  const statsData = [
    { value: stats.transformersInstalled, label: statsLabels[0], delay: 0 },
    { value: stats.projects, label: statsLabels[1], delay: 100 },
    { value: stats.locations, label: statsLabels[2], delay: 200 },
    { value: stats.clients, label: statsLabels[3], delay: 300 },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-gray-800 text-white py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://media.istockphoto.com/id/1340413200/photo/aerial-view-of-a-high-voltage-substation.jpg?s=612x612&w=0&k=20&c=Nat7fUcivRPMID1-CowPHC7o-D_2R3E-8Tb2K9qf_14="
          alt="Background"
          className="w-full h-full object-cover opacity-30 blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-transparent to-gray-900/90" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>
      <div className="relative container mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 mb-12 drop-shadow-lg animate-fade-in">
          Our Achievements
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 px-4">
          {statsData.map((stat, index) => (
            <StatisticItem
              key={index}
              value={stat.value}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
