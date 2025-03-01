"use client";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-b from-purple-800 to-purple-700 text-white overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-xl md:text-3xl font-bold mb-3">
            <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              Client Testimonials
            </span>
            <div className="h-1 bg-white mt-1 mx-auto w-16" />
          </h2>
          <p className="text-sm md:text-base max-w-xl mx-auto opacity-90">
            What my clients say about my work and collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-purple-800 p-6 rounded-xl shadow-lg border border-purple-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-sm opacity-80">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-sm opacity-90 italic">{testimonial.content}</p>
              <div className="mt-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-purple-600 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-500 rounded-full opacity-30 animate-bounce"></div>
    </section>
  );
};

const testimonials = [
  {
    name: "Sarah Jack",
    role: "CEO at TechStart",
    avatar: "/sara.png",
    content:
      "Working with Mehdia was an absolute pleasure. Her attention to detail and creative approach resulted in a website that exceeded our expectations.",
  },
  {
    name: "Mustafa Chen",
    role: "Product Manager",
    avatar: "/mustafa.png",
    content:
      "Mehdia's expertise in frontend development is impressive. She delivered our project on time and was always responsive to our feedback.",
  },
  {
    name: "Emily Brown",
    role: "Marketing Director",
    avatar: "/emily.png",
    content:
      "The website Mehdia built for us is not only beautiful but also performs exceptionally well. Her understanding of user experience is remarkable.",
  },
];

export default Testimonials;
