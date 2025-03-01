"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section id="about" className="py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-purple-50 to-purple-100/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Skills */}
          <div className="space-y-6 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl sm:text-3xl font-bold text-purple-800"
            >
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text">
                Skills & Technologies
              </span>
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-3 sm:p-5 rounded-lg shadow-lg hover:shadow-purple-200/50 transition-all border border-purple-100 flex flex-col items-center"
                >
                  <div className="text-purple-600 text-xl sm:text-2xl mb-1 sm:mb-2">{skill.icon}</div>
                  <h3 className="font-semibold text-purple-900 text-xs sm:text-sm">{skill.name}</h3>
                  <p className="text-xs text-purple-600/80">{skill.level}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - About Me */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white p-5 sm:p-6 rounded-lg shadow-lg border border-purple-100"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text">
              About Me
            </h2>
            <div className="space-y-3 text-purple-900 text-xs sm:text-sm md:text-base">
              <p>
                Hello! I&apos;m Mehdia Fatima Faizi, a passionate Frontend Developer. I specialize in creating responsive and user-friendly web applications using modern technologies.
              </p>
              <p>
                With a strong foundation in React, Next.js, and TypeScript, I focus on writing clean, efficient code that delivers exceptional user experiences.
              </p>
              <p>
                When I&apos;m not coding, I enjoy reading about technology, writing blog posts, and participating in coding challenges. I also love a good cup of tea while brainstorming creative ideas.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="text-lg sm:text-xl font-semibold text-purple-800 mb-3">Education</h3>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                className="flex items-center space-x-3 group"
              >
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full group-hover:scale-125 transition-transform duration-300" />
                <p className="text-purple-900 text-xs sm:text-sm">ADC PART II - Premier Govt. Girls College (2024)</p>
              </motion.div>
              <div className="space-y-2 mt-2">
             
                <div className="flex items-center space-x-3 group">
                  <div className="w-2.5 h-2.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full group-hover:scale-125 transition-transform duration-300" />
                  <p className="text-purple-900 text-xs sm:text-sm">Learning and exploring Agentic AI to build smarter solutions (2025)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const skills = [
  { name: "React.js", level: "Advanced", icon: "⚛️" },
  { name: "Next.js", level: "Advanced", icon: "▲" },
  { name: "TypeScript", level: "Intermediate", icon: "📘" },
  { name: "Tailwind CSS", level: "Advanced", icon: "🎨" },
  { name: "HTML/CSS", level: "Advanced", icon: "🎯" },
  { name: "Git", level: "Advanced", icon: "🔄" },
  { name: "UI/UX", level: "Intermediate", icon: "✨" },
  { name: "Responsive", level: "Advanced", icon: "📱" },
];

export default About;
