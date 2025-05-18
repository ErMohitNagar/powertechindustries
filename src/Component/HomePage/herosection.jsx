import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://powersystems.technology/images/2024/News_2024/September_news/Navitas_1309_1170550.png",
    title: "Power Tech Industries",
    description:
      "Delivering Reliable Transformer Repairing and Manufacturing Services Across India",
  },
  {
    id: 2,
    image:
      "https://s3.eu-west-1.amazonaws.com/camlin-group/Transformer-Monitoring-for-windfarm-owners.jpg",
    title: "Innovative Solutions",
    description:
      "Providing cutting-edge solutions for all your transformer needs.",
  },
  {
    id: 3,
    image:
      "https://c8.alamy.com/comp/EAN53C/transformers-in-the-collector-substation-of-a-wind-farm-connected-EAN53C.jpg",
    title: "Trusted by Clients",
    description: "Building trust through quality and reliability.",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative min-h-[80vh] h-screen max-h-[900px] w-full overflow-hidden font-sans bg-black">
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            idx === currentSlide
              ? "opacity-100 scale-100 z-20"
              : "opacity-0 scale-110 z-10"
          }`}
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.2)), url('${slide.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Animated Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-blue-900/60"></div>

          {/* Creative Content */}
          <div
            className={`relative z-30 flex flex-col items-center justify-center h-full text-center text-white px-3 sm:px-6 transition-all duration-1000 ${
              idx === currentSlide
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl animate-fade-in-down">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-600 bg-clip-text text-transparent">
                {slide.title}
              </span>
            </h1>
            <p className="mt-4 sm:mt-8 text-base xs:text-lg sm:text-xl md:text-3xl max-w-xs xs:max-w-md sm:max-w-2xl drop-shadow-lg leading-relaxed animate-fade-in-up">
              {slide.description}
            </p>
            <div className="mt-6 sm:mt-10 flex flex-col xs:flex-row flex-wrap gap-4 xs:gap-6 animate-fade-in-up">
              <button className="px-6 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold rounded-full shadow-2xl transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-400/40 text-sm sm:text-base">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12.79A9 9 0 1111.21 3h.01"
                    ></path>
                  </svg>
                  Contact Us
                </span>
              </button>
              <button className="px-6 py-3 sm:px-10 sm:py-4 bg-white/20 hover:bg-white/40 text-white font-bold rounded-full shadow-xl border border-white/60 transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/30 text-sm sm:text-base">
                <span className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01"
                    ></path>
                  </svg>
                  Learn More
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-4 z-40">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 sm:w-5 sm:h-5 rounded-full border-2 border-white transition-all duration-300 ring-2 ring-offset-2 ring-offset-black ${
              idx === currentSlide
                ? "bg-gradient-to-tr from-cyan-400 to-blue-600 scale-125 shadow-xl ring-blue-400"
                : "bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-gradient-to-br from-black/60 via-blue-900/60 to-black/60 hover:from-blue-700 hover:to-cyan-500 text-white text-xl sm:text-3xl p-2 sm:p-4 rounded-full shadow-2xl transition-all z-40 border-2 border-white/30 hover:border-cyan-400/60 backdrop-blur-md"
        aria-label="Previous Slide"
      >
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-gradient-to-bl from-black/60 via-blue-900/60 to-black/60 hover:from-blue-700 hover:to-cyan-500 text-white text-xl sm:text-3xl p-2 sm:p-4 rounded-full shadow-2xl transition-all z-40 border-2 border-white/30 hover:border-cyan-400/60 backdrop-blur-md"
        aria-label="Next Slide"
      >
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>

      {/* Decorative SVG Waves */}
      <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">
        <svg
          viewBox="0 0 1440 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 xs:h-24 sm:h-32 md:h-40"
        >
          <path
            fill="url(#wave-gradient)"
            fillOpacity="1"
            d="M0,80 C480,180 960,0 1440,80 L1440,180 L0,180 Z"
          ></path>
          <defs>
            <linearGradient
              id="wave-gradient"
              x1="0"
              y1="0"
              x2="1440"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#06b6d4" />
              <stop offset="1" stopColor="#2563eb" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
