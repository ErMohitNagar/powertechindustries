import React, { useState, useEffect } from "react";

const StatisticItem = ({ value, label }) => (
    <div className="flex flex-col items-center">
        <h2 className="text-5xl font-extrabold text-blue-400">{value}+</h2>
        <p className="text-lg font-medium text-gray-300 mt-2">{label}</p>
    </div>
);

const StatsSection = () => {
    const [stats, setStats] = useState({
        transformersInstalled: 0,
        projects: 0,
        locations: 0,
        clients: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            const data = await new Promise((resolve) =>
                setTimeout(
                    () =>
                        resolve({
                            transformersInstalled: 250,
                            projects: 150,
                            locations: 50,
                            clients: 200,
                        }),
                    1000
                )
            );

            const incrementStats = (targetStats) => {
                const interval = setInterval(() => {
                    setStats((prevStats) => {
                        const updatedStats = { ...prevStats };
                        let allReached = true;

                        for (const key in targetStats) {
                            if (prevStats[key] < targetStats[key]) {
                                updatedStats[key] = Math.min(
                                    prevStats[key] + Math.ceil(targetStats[key] / 50),
                                    targetStats[key]
                                );
                                allReached = false;
                            }
                        }

                        if (allReached) {
                            clearInterval(interval);
                        }

                        return updatedStats;
                    });
                }, 50);
            };

            incrementStats(data);
        };

        fetchData();
    }, []);

    const statsData = [
        { value: stats.transformersInstalled, label: "Transformers Installed" },
        { value: stats.projects, label: "Projects" },
        { value: stats.locations, label: "Locations" },
        { value: stats.clients, label: "Clients" },
    ];

    return (
        <section className="relative bg-gray-900 text-white py-16">
            <div className="absolute inset-0">
                <img
                    src="https://media.istockphoto.com/id/1340413200/photo/aerial-view-of-a-high-voltage-substation.jpg?s=612x612&w=0&k=20&c=Nat7fUcivRPMID1-CowPHC7o-D_2R3E-8Tb2K9qf_14="
                    alt="Background"
                    className="w-full h-full object-cover opacity-20"
                />
            </div>
            <div className="relative container mx-auto text-center">
                <h1 className="text-4xl font-bold text-blue-400 mb-8">
                    Our Achievements
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {statsData.map((stat, index) => (
                        <StatisticItem
                            key={index}
                            value={stat.value}
                            label={stat.label}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
