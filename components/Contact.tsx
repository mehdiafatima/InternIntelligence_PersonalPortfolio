"use client";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

interface FormStatus {
  type: 'idle' | 'sending' | 'sent' | 'error';
  message?: string;
}

const Contact = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: 'idle' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ type: 'sending' });
    setTimeout(() => {
      setFormStatus({ type: 'sent' });
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setFormStatus({ type: 'idle' }), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-purple-700">Get In Touch</h2>
          <p className="text-purple-900/70 max-w-xl mx-auto text-sm md:text-base">
            Have a project in mind? Let&apos;s work together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-purple-900 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-3 py-2 rounded-md border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-purple-900 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-3 py-2 rounded-md border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  placeholder="yourname@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-purple-900 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-3 py-2 rounded-md border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={formStatus.type === 'sending' || formStatus.type === 'sent'}
                className={`w-full py-2 rounded-md text-white text-sm font-medium transition-all 
                  ${formStatus.type === 'sent' 
                    ? 'bg-green-500' 
                    : formStatus.type === 'error'
                    ? 'bg-red-500'
                    : 'bg-purple-600 hover:bg-purple-700'}
                `}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {formStatus.type === 'sending' ? 'Sending...' 
                  : formStatus.type === 'sent' ? 'Message Sent!'
                  : formStatus.type === 'error' ? 'Error! Try Again'
                  : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg md:text-xl font-semibold text-purple-900 mb-4">Contact Information</h3>
            <p className="flex items-center gap-2 text-purple-900 text-sm">
              <FaEnvelope className="text-purple-600" /> mehefaizi@gmail.com
            </p>
            <div className="pt-4 border-t border-purple-100 mt-4">
              <h4 className="text-lg font-semibold text-purple-900 mb-3">Follow Me</h4>
              <div className="flex gap-3">
                <motion.a
                  href="https://www.linkedin.com/in/mehdia-f-884506289/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-purple-600 hover:text-purple-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="https://github.com/mehdiafatima"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-purple-600 hover:text-purple-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <FaGithub />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
