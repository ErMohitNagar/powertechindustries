import React, { useState, useEffect } from 'react';

const HeroSection = () => {
    const slides = [
        {
            id: 1,
            image: "https://powersystems.technology/images/2024/News_2024/September_news/Navitas_1309_1170550.png",
            title: "Power Tech Industries",
            description: "Delivering Reliable Transformer Repairing and Manufacturing Services Across India",
        },
        {
            id: 2,
            image: "https://s3.eu-west-1.amazonaws.com/camlin-group/Transformer-Monitoring-for-windfarm-owners.jpg",
            title: "Innovative Solutions",
            description: "Providing cutting-edge solutions for all your transformer needs.",
        },
        {
            id: 3,
            image: "https://c8.alamy.com/comp/EAN53C/transformers-in-the-collector-substation-of-a-wind-farm-connected-EAN53C.jpg",
            title: "Trusted by Clients",
            description: "Building trust through quality and reliability.",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); 

        return () => clearInterval(interval); 
    }, [currentSlide]);

    return (
        <div className="relative h-screen overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                        backgroundImage: `url('${slide.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90"></div>

                    {/* Content */}
                    <div
                        className={`relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 transition-transform duration-1000 ${
                            index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight">
                            {slide.title}
                        </h1>
                        <p className="mt-6 text-lg md:text-2xl max-w-3xl drop-shadow-md leading-relaxed">
                            {slide.description}
                        </p>
                        <div className="mt-8 flex space-x-4">
                            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                Contact Us
                            </button>
                            <button className="px-8 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
            >
                &#10095;
            </button>
        </div>
    );
};

export default HeroSection;
