"use client";

const Services = () => {
  return (
    <section id="service" className="py-16 bg-purple-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-800 to-purple-900 opacity-80"></div>
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              Services
            </span>
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto opacity-90 mt-2">
            Specialized services tailored to meet your web development needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {services.map(({ title, icon, description, features }) => (
            <div
              key={title}
              className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-md transform transition-all duration-300 hover:scale-105 hover:bg-white/20 animate-fadeInUp delay-200"
            >
              <div className="text-4xl mb-4 text-white animate-bounce">{icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
              <p className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text mb-4">{description}</p>
              <ul className="text-white/70 text-sm space-y-2">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-yellow-400 mr-2">✦</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "Frontend Development",
    icon: "💻",
    description: "Creating responsive and interactive web applications",
    features: ["Custom website development", "Responsive design", "Interactive UI", "Performance optimization"],
  },
  {
    title: "UI/UX Design",
    icon: "🎨",
    description: "Designing intuitive and engaging user interfaces",
    features: ["User interface design", "Responsive layouts", "Interactive prototypes", "Design systems"],
  },
  {
    title: "Web Optimization",
    icon: "⚡",
    description: "Optimizing websites for better performance",
    features: ["SEO implementation", "Code optimization", "Loading speed improvement", "Performance tuning"],
  },
];

export default Services;