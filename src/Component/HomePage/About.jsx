import React from "react";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    href: "#",
    label: "Facebook",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.17 8.44 9.93v-7.03H7.9v-2.9h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.03C18.34 21.24 22 17.09 22 12.07z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Twitter",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 11.1 9.03c0 .34.04.67.1.99C7.72 9.85 4.8 8.13 2.92 5.7c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.95 3.62-.72-.02-1.4-.22-2-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.12 2.9 3.99 2.93A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.72 8.72 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "Instagram",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z" />
      </svg>
    ),
  },
];

const About = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-20 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200 rounded-full opacity-30 blur-3xl -z-10 animate-pulse animate-spin-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl -z-10 animate-pulse animate-bounce-slow"></div>
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 gap-12">
        {/* Image Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <div className="relative group">
            <img
              src="https://media.licdn.com/dms/image/D4D12AQE05JngxJk0lw/article-cover_image-shrink_720_1280/0/1685451447429?e=2147483647&v=beta&t=z-8uTuFlgRqfj02VNMQ7vVemOTdc7n-KYDHeeDWru3c"
              alt="About Us"
              className="rounded-3xl shadow-2xl border-8 border-white group-hover:scale-105 transition-transform duration-500 group-hover:rotate-3"
            />
            <div className="absolute -bottom-6 -right-6 bg-indigo-500 text-white px-4 py-2 rounded-xl shadow-lg text-lg font-semibold opacity-90 group-hover:scale-110 transition-transform duration-500 animate-fade-in-up">
              10+ Years Experience
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 text-center md:text-left animate-fade-in">
          <h1 className="text-5xl font-extrabold text-indigo-800 mb-6 tracking-tight drop-shadow-lg animate-slide-in-down">
            ABOUT US
          </h1>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed transition-opacity duration-700 hover:opacity-80">
            <span className="font-semibold text-indigo-600">
              Powertech Industries
            </span>{" "}
            is a leading provider of innovative power solutions, serving
            industries across the globe. Founded with a vision to deliver
            reliable and efficient energy systems, we have grown into a trusted
            partner for businesses seeking excellence in power technology.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed transition-opacity duration-700 hover:opacity-80">
            Our expertise spans{" "}
            <span className="font-semibold text-indigo-600">
              industrial automation
            </span>
            ,{" "}
            <span className="font-semibold text-indigo-600">
              renewable energy
            </span>
            , and{" "}
            <span className="font-semibold text-indigo-600">
              custom power systems
            </span>
            . At Powertech Industries, we are committed to quality, innovation,
            and customer satisfaction—empowering our clients to achieve their
            goals with cutting-edge solutions and dedicated support.
          </p>
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            {socialLinks.map(({ href, label, icon }, idx) => (
              <Link
                key={label}
                to={href}
                aria-label={label}
                className={`text-indigo-400 hover:text-indigo-700 transition-colors duration-300 bg-white rounded-full shadow-md p-3 hover:scale-110
                  animate-fade-in-up`}
                style={{ animationDelay: `${idx * 0.15 + 0.2}s` }}
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Custom Animations */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes slide-in-down {
            from { opacity: 0; transform: translateY(-40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes spin-slow {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(-30px);}
          }
          .animate-fade-in { animation: fade-in 1s ease-out both;}
          .animate-fade-in-up { animation: fade-in-up 1s ease-out both;}
          .animate-slide-in-down { animation: slide-in-down 1s 0.2s cubic-bezier(.4,0,.2,1) both;}
          .animate-spin-slow { animation: spin-slow 12s linear infinite;}
          .animate-bounce-slow { animation: bounce-slow 6s ease-in-out infinite;}
        `}
      </style>
    </section>
  );
};

export default About;
