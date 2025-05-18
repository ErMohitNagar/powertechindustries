import React from "react";

const blogs = [
  {
    id: 1,
    title: "The Future of Industrial Automation",
    author: "Jane Doe",
    date: "2024-06-10",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    excerpt:
      "Discover how PowerTech Industries is revolutionizing automation with cutting-edge robotics and AI-driven solutions.",
  },
  {
    id: 2,
    title: "Sustainable Energy Solutions",
    author: "John Smith",
    date: "2024-05-28",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    excerpt:
      "Learn about our latest advancements in renewable energy and how we’re powering industries sustainably.",
  },
  {
    id: 3,
    title: "Smart Manufacturing Trends 2024",
    author: "Emily Clark",
    date: "2024-05-15",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    excerpt:
      "Explore the top trends in smart manufacturing and how PowerTech Industries stays ahead of the curve.",
  },
  {
    id: 4,
    title: "IoT Integration in Factories",
    author: "Michael Lee",
    date: "2024-04-30",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    excerpt:
      "How IoT devices are transforming factory floors and boosting productivity at PowerTech Industries.",
  },
  {
    id: 5,
    title: "AI-Driven Predictive Maintenance",
    author: "Sophia Turner",
    date: "2024-04-12",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    excerpt:
      "Reducing downtime and costs with AI-powered predictive maintenance solutions.",
  },
  {
    id: 6,
    title: "Workplace Safety Innovations",
    author: "David Kim",
    date: "2024-03-25",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    excerpt:
      "Discover the latest safety technologies implemented at PowerTech Industries to protect our workforce.",
  },
  {
    id: 7,
    title: "Green Manufacturing Initiatives",
    author: "Olivia Brown",
    date: "2024-03-10",
    image:
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=600&q=80",
    excerpt:
      "Our commitment to eco-friendly manufacturing and reducing our carbon footprint.",
  },
  {
    id: 8,
    title: "Digital Twin Technology Explained",
    author: "Lucas White",
    date: "2024-02-28",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    excerpt:
      "How digital twins are optimizing operations and enabling real-time monitoring.",
  },
  {
    id: 9,
    title: "Robotics in Heavy Industry",
    author: "Emma Wilson",
    date: "2024-02-15",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    excerpt:
      "A look at the latest robotic systems deployed in PowerTech’s heavy industry sectors.",
  },
];

const Blog = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-500 to-cyan-400 animate-fade-in-down">
            PowerTech Industries Blog
          </h1>
          <p className="mt-4 text-lg text-gray-600 animate-fade-in-up">
            Insights, trends, and innovations from the world of industrial
            technology.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, idx) => (
            <div
              key={blog.id}
              className="group relative bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110 animate-image-pop"
                  style={{ animationDelay: `${idx * 150 + 200}ms` }}
                />
                <div
                  className="absolute top-4 right-4 bg-blue-700/80 text-white text-xs px-3 py-1 rounded-full shadow-lg animate-fade-in-down"
                  style={{ animationDelay: `${idx * 120 + 300}ms` }}
                >
                  {new Date(blog.date).toLocaleDateString()}
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h2
                  className="text-2xl font-bold mb-2 text-blue-800 group-hover:text-blue-600 transition-colors duration-300 animate-slide-in-right"
                  style={{ animationDelay: `${idx * 120 + 400}ms` }}
                >
                  {blog.title}
                </h2>
                <p
                  className="text-gray-500 text-sm mb-3 flex items-center gap-2 animate-fade-in"
                  style={{ animationDelay: `${idx * 120 + 500}ms` }}
                >
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full animate-pulse-dot"></span>
                  By {blog.author}
                </p>
                <p
                  className="text-gray-700 flex-1 mb-4 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 120 + 600}ms` }}
                >
                  {blog.excerpt}
                </p>
                <button
                  className="mt-auto px-5 py-2 bg-gradient-to-r from-blue-700 to-cyan-500 text-white rounded-full font-semibold shadow-md hover:from-blue-800 hover:to-cyan-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 animate-bounce-in"
                  style={{ animationDelay: `${idx * 120 + 700}ms` }}
                >
                  Read More
                </button>
              </div>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-glow">
                <div className="w-full h-full bg-gradient-to-br from-blue-100/30 to-cyan-100/10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Animations */}
      <style>
        {`
          @keyframes fade-in-down {
            0% { opacity: 0; transform: translateY(-20px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          @keyframes fade-in-up {
            0% { opacity: 0; transform: translateY(20px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          @keyframes fade-in {
            0% { opacity: 0;}
            100% { opacity: 1;}
          }
          @keyframes bounce-in {
            0% { transform: scale(0.9);}
            60% { transform: scale(1.05);}
            100% { transform: scale(1);}
          }
          @keyframes image-pop {
            0% { opacity: 0; transform: scale(1.1);}
            100% { opacity: 1; transform: scale(1);}
          }
          @keyframes slide-in-right {
            0% { opacity: 0; transform: translateX(40px);}
            100% { opacity: 1; transform: translateX(0);}
          }
          @keyframes pulse-dot {
            0%, 100% { transform: scale(1); background: #3b82f6;}
            50% { transform: scale(1.5); background: #06b6d4;}
          }
          @keyframes glow {
            0% { box-shadow: 0 0 0px 0px #38bdf8;}
            100% { box-shadow: 0 0 40px 10px #38bdf8;}
          }
          .animate-fade-in-down { animation: fade-in-down 0.7s both;}
          .animate-fade-in-up { animation: fade-in-up 0.7s both;}
          .animate-fade-in { animation: fade-in 1s both;}
          .animate-bounce-in { animation: bounce-in 0.5s both;}
          .animate-image-pop { animation: image-pop 0.8s both;}
          .animate-slide-in-right { animation: slide-in-right 0.7s both;}
          .animate-pulse-dot { animation: pulse-dot 1.2s infinite;}
          .animate-glow { animation: glow 1.2s both;}
        `}
      </style>
    </div>
  );
};

export default Blog;
