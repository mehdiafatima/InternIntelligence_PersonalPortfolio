"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="project" className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text">
              Featured Projects
            </span>
          </h2>
          <p className="mt-2 text-sm md:text-base max-w-2xl mx-auto text-purple-900/70">
            Here are some of my recent projects showcasing my skills in web development. Click on the links to explore live demos and GitHub repositories.
          </p>
          <div className="h-1 bg-gradient-to-r from-purple-600 to-purple-400 mt-2 mx-auto w-16 md:w-24" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: index * 0.2 } },
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group transition-transform"
            >
              <div className="relative h-48 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-purple-900/40 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <h3 className="text-lg md:text-xl font-bold text-purple-900 mb-2">{project.title}</h3>
                <p className="text-purple-900/70 mb-3 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-purple-700 transition-colors"
                  >
                    Live Demo
                  </a>
              
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-8">
          <Link href="/projects" className="bg-purple-600 text-white px-5 py-2 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors inline-block">
            View More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "SoulWrites Blog Website",
    description: "SoulWrites – A beautifully crafted blog where words inspire, stories unfold, and ideas come to life.",
    image: "/project1.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://blog-website-by-mff.vercel.app/"
  
  },
  {
    title: "Furniro E-commerce Website",
    description: "Furniro – A sleek and modern e-commerce website offering a seamless shopping experience for stylish and quality furniture",
    image: "/project2.png",
    technologies: ["React", "Node.js", "Tailwind CSS", "Framer Motion"],
    demo: "https://ecomerce-hackathon-by-mff.vercel.app/"

  },
  {
    title: "Agentia World Website",
    description: "Agentia World – A professional and dynamic website designed to showcase services, enhance brand presence, and engage clients effectively.",
    image: "/project3.png",
    technologies: ["Next.js", "Typescript", "Tailwind CSS"],
    demo: "https://agentia-world-by-mff.vercel.app/",

  },
];

export default Projects;