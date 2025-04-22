import React from "react";

const OurProjects = () => {
    const projects = [
        {
            title: "Transformer Installation",
            description: "Efficient and high-quality transformer installation services across India.",
            image: "https://t3.ftcdn.net/jpg/04/33/02/78/360_F_433027896_PoQOnWcXtmgmuvIfA3ye5zrSzDyxDzHS.jpg",
        },
        {
            title: "Panel Fabrication",
            description: "Customized control panel manufacturing with precision engineering.",
            image: "https://static.vecteezy.com/system/resources/thumbnails/053/626/306/small/a-transformer-at-an-electrical-substation-transmission-of-electricity-photo.jpeg",
        },
        {
            title: "Solar Power Integration",
            description: "Reliable solar energy solutions for commercial applications.",
            image: "https://www.shutterstock.com/image-photo/115kv-three-single-phase-power-600w-2613671655.jpg",
        },
    ];

    return (
        <div className="container mx-auto py-12 px-4">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-500">
                Our Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-gray-800">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 mt-4">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurProjects;
