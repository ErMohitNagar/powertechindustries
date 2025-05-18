import React from "react";

const values = [
  {
    title: "Reliability",
    description: "We prioritize excellence and consistent service quality.",
    icon: (
      <svg
        className="w-16 h-16 text-cyan-500 mx-auto mb-6 drop-shadow-xl"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description: "Our experts ensure cutting-edge solutions in every project.",
    icon: (
      <svg
        className="w-16 h-16 text-cyan-500 mx-auto mb-6 drop-shadow-xl"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          d="M13 16h-1v-4h-1m4 4v-4a4 4 0 10-8 0v4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Customer Satisfaction",
    description: "Building long-term partnerships through superior service.",
    icon: (
      <svg
        className="w-16 h-16 text-cyan-500 mx-auto mb-6 drop-shadow-xl"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          d="M20 21v-2a4 4 0 00-3-3.87M4 21v-2a4 4 0 013-3.87m9-7a4 4 0 11-8 0 4 4 0 018 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const reasons = [
  {
    title: "Expert Team",
    description:
      "Our engineers bring years of experience in electrical solutions.",
    icon: (
      <svg
        className="w-14 h-14 text-cyan-400 mb-4 drop-shadow"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a7.5 7.5 0 0113 0" />
      </svg>
    ),
  },
  {
    title: "Certified Quality",
    description: "We adhere to industry standards for reliable performance.",
    icon: (
      <svg
        className="w-14 h-14 text-cyan-400 mb-4 drop-shadow"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 17l-5 3 1.9-5.6L4 10.5l5.7-.4L12 5l2.3 5.1 5.7.4-4.9 3.9L17 20z" />
      </svg>
    ),
  },
  {
    title: "Nationwide Service",
    description: "Operating across India to serve your electrical needs.",
    icon: (
      <svg
        className="w-14 h-14 text-cyan-400 mb-4 drop-shadow"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M21 12.79A9 9 0 1111.21 3h.01" />
        <path d="M22 2l-10 10" />
      </svg>
    ),
  },
  {
    title: "Affordable Pricing",
    description: "Competitive rates without compromising quality.",
    icon: (
      <svg
        className="w-14 h-14 text-cyan-400 mb-4 drop-shadow"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4" />
        <path d="M12 2v2m0 16v2m8-10h2M2 12H4" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "John Doe",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mike Johnson",
    role: "Lead Engineer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-cyan-50 via-white to-cyan-100 min-h-screen font-sans overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative h-[32rem] flex items-center justify-center overflow-hidden rounded-b-[3rem] shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-110 blur-[1.5px]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/90 via-cyan-700/70 to-cyan-400/60" />
        <div className="relative z-10 text-center animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl tracking-tight animate-hero-glow">
            Power Tech
            <span className="block text-cyan-200 animate-gradient-x bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-300 bg-clip-text ">
              Industries
            </span>
          </h1>
          <p className="mt-8 text-2xl md:text-3xl text-cyan-100 font-semibold animate-fade-in">
            Empowering India with Reliable Innovation
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <span className="inline-block px-12 py-4 rounded-full bg-white/70 text-cyan-900 font-bold shadow-2xl backdrop-blur-lg animate-bounce border-2 border-cyan-200 hover:scale-110 transition-transform duration-300">
              Since 2016
            </span>
          </div>
        </div>
        {/* Decorative Circles */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-200/40 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-cyan-400/30 rounded-full blur-3xl animate-float-slower" />
      </header>

      {/* Company Overview */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-cyan-800 mb-8 animate-fade-in-up">
            Who We Are
          </h2>
          <p className="text-gray-700 text-2xl leading-relaxed animate-fade-in">
            <span className="font-bold text-cyan-600">
              Power Tech Industries
            </span>{" "}
            is a leader in transformer repairs, manufacturing, oil filtration,
            and electrical services across India. Our commitment to quality and
            innovation drives us to deliver exceptional results for every
            client.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative py-24 bg-gradient-to-r from-cyan-100 via-white to-cyan-200 rounded-[2.5rem] mx-4 shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] bg-cyan-300/30 rounded-full blur-3xl animate-float-slower pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-extrabold text-center text-cyan-800 mb-16 animate-fade-in-up">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 justify-center">
            {values.map((value, idx) => (
              <div
                key={value.title}
                className="group p-14 bg-white/95 rounded-3xl shadow-2xl border-b-4 border-cyan-400 hover:scale-105 hover:shadow-cyan-200/70 hover:border-cyan-600 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.18 + 0.1}s` }}
              >
                <div className="mb-8 group-hover:animate-wiggle">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-cyan-700 mb-3 group-hover:text-cyan-900 transition-colors duration-200">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-extrabold text-center text-cyan-800 mb-16 animate-fade-in-up">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-center">
          {reasons.map((reason, idx) => (
            <div
              key={reason.title}
              className="bg-white/95 p-12 rounded-3xl shadow-2xl border-l-4 border-cyan-300 hover:scale-105 hover:shadow-cyan-200/70 hover:border-cyan-600 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.13 + 0.1}s` }}
            >
              <div className="mb-6 animate-spin-slow hover:animate-none">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold text-cyan-700 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-lg">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-extrabold text-center text-cyan-800 mb-16 animate-fade-in-up">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-14">
          {team.map((member, idx) => (
            <div
              key={member.name}
              className="w-80 bg-white/95 p-12 rounded-3xl shadow-2xl flex flex-col items-center hover:scale-105 hover:shadow-cyan-200/70 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.18 + 0.1}s` }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full border-4 border-cyan-200 shadow-lg mb-7 object-cover hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-2xl font-bold text-cyan-700">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Animations */}
      <style>
        {`
                    .animate-fade-in-up {
                        opacity: 0;
                        transform: translateY(40px);
                        animation: fadeInUp 0.9s cubic-bezier(.23,1.02,.57,1.01) forwards;
                    }
                    .animate-fade-in {
                        opacity: 0;
                        animation: fadeIn 1.3s cubic-bezier(.23,1.02,.57,1.01) forwards;
                    }
                    @keyframes fadeInUp {
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    @keyframes fadeIn {
                        to {
                            opacity: 1;
                        }
                    }
                    .animate-bounce {
                        animation: bounce 1.5s infinite alternate;
                    }
                    @keyframes bounce {
                        0% { transform: translateY(0);}
                        100% { transform: translateY(-12px);}
                    }
                    .animate-hero-glow {
                        animation: heroGlow 2.5s ease-in-out infinite alternate;
                    }
                    @keyframes heroGlow {
                        0% { text-shadow: 0 0 32px #22d3ee44, 0 0 8px #fff; }
                        100% { text-shadow: 0 0 64px #06b6d444, 0 0 16px #fff; }
                    }
                    .animate-gradient-x {
                        background-size: 200% 100%;
                        animation: gradientX 3s linear infinite alternate;
                    }
                    @keyframes gradientX {
                        0% { background-position: 0% 50%; }
                        100% { background-position: 100% 50%; }
                    }
                    .animate-float-slow {
                        animation: floatSlow 7s ease-in-out infinite alternate;
                    }
                    .animate-float-slower {
                        animation: floatSlower 11s ease-in-out infinite alternate;
                    }
                    @keyframes floatSlow {
                        0% { transform: translateY(0) scale(1);}
                        100% { transform: translateY(30px) scale(1.08);}
                    }
                    @keyframes floatSlower {
                        0% { transform: translateY(0) scale(1);}
                        100% { transform: translateY(-40px) scale(1.12);}
                    }
                    .animate-spin-slow {
                        animation: spinSlow 7s linear infinite;
                    }
                    @keyframes spinSlow {
                        100% { transform: rotate(360deg);}
                    }
                    .group:hover .group-hover\\:animate-wiggle {
                        animation: wiggle 0.5s;
                    }
                    @keyframes wiggle {
                        0% { transform: rotate(-4deg);}
                        25% { transform: rotate(4deg);}
                        50% { transform: rotate(-2deg);}
                        75% { transform: rotate(2deg);}
                        100% { transform: rotate(0);}
                    }
                `}
      </style>
    </div>
  );
};

export default AboutUs;
