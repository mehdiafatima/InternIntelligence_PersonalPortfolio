"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="text-center md:text-left">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold mb-4 text-white hover:text-purple-200 transition-colors"
            >
              Mehdia Fatima Faizi
            </button>
            <p className="text-purple-200">
              Frontend Developer crafting beautiful and functional web experiences
            </p>
          </div>

     
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-purple-200 hover:text-white transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('service')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-purple-200 hover:text-white transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-purple-200 hover:text-white transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-purple-200 hover:text-white transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <motion.a
                href="https://www.linkedin.com/in/mehdia-f-884506289/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-purple-200 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/mehdiafatima"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-purple-200 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="mailto:mehdiafaizi@gmail.com"
                className="text-2xl text-purple-200 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaEnvelope />
              </motion.a>
            </div>
            <p className="text-purple-200">
              mehefaizi@gmail.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-purple-800 text-center">
          <p className="text-purple-200">
            © {new Date().getFullYear()} Mehdia Fatima Faizi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 