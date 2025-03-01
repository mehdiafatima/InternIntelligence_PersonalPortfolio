"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 text-center relative overflow-hidden bg-gradient-to-b from-purple-50 to-white w-full">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-16 right-5 w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 bg-purple-200/30 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-5 w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 bg-purple-300/20 blur-3xl"
        />
      </div>

      {/* Hero Content */}
      <div className="max-w-3xl mx-auto mt-16 sm:mt-24 md:mt-32 px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-4 sm:mb-6">
          <span className="px-4 py-2 bg-white rounded-full text-sm sm:text-lg shadow-md">
            Welcome to my portfolio 👋
          </span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
            I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Mehdia Fatima Faizi
            </span>
          </h1>
          <div className="text-base sm:text-2xl md:text-3xl font-bold text-purple-600">
            <TypeAnimation
              sequence={["Frontend Developer", 2000, "Website Developer", 2000, "Exploring World of Agentic AI", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-sm sm:text-lg md:text-xl text-gray-700 leading-snug max-w-lg mx-auto mb-6 sm:mb-8">
          Crafting beautiful and functional web experiences with modern technologies. Turning ideas into reality through clean and efficient code.
        </motion.p>

        {/* Social Media Links */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex justify-center gap-6 sm:gap-8 mb-6 sm:mb-8">
          {[
            { icon: <FaLinkedin className="text-xl sm:text-3xl" />, href: "https://www.linkedin.com/in/mehdia-f-884506289/", label: "LinkedIn" },
            { icon: <FaGithub className="text-xl sm:text-3xl" />, href: "https://github.com/mehdiafatima", label: "GitHub" },
            { icon: <MdEmail className="text-xl sm:text-3xl" />, href: "mailto:mehefaizi@gmail.com", label: "Email" },
          ].map((social) => (
            <motion.a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 text-purple-600 hover:text-purple-800 transition-all"
              whileHover={{ scale: 1.1, y: -3 }}
            >
              {social.icon}
              <span className="text-xs sm:text-sm font-medium">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }} className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-purple-600 text-white rounded-full font-medium shadow-lg hover:bg-purple-700 transition-colors" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Get in Touch
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-white text-purple-600 rounded-full font-medium shadow-lg hover:bg-purple-50 transition-colors" onClick={() => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" })}>
            View Projects
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
