"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const allProjects = [
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
    demo: "https://agentia-world-by-mff.vercel.app/"
  },

  {
    title: "Personal Portfolio Website",
    description: "A modern portfolio showcasing my skills, projects, and web development journey",
    image: "/portfolio.png",
    technologies: ["Nextjs", "Tailwind CSS", "Shadcn", "Framer-motion"],
    demo: "https://p-website-by-mff.vercel.app/"
  },
  {
    title: "The Study Matrix",
    description: "Study Matrix – A dynamic educational platform designed to enhance learning with interactive resources and tools",
    image: "/study.png",
    technologies: ["Next.js", "Tailowind CSS", "Framer-motion"],
    demo: "https://the-study-matrix-by-mehdiafatimafaizi.vercel.app/"
  },
  {
    title: "Garden Haven",
    description: "Garden Haven – A serene platform for gardening enthusiasts, offering tips, inspiration, and expert advice for a thriving green space.",
    image: "/garden.png",
    technologies: ["Next.js", "Tailowind CSS", "Framer-motion"],
    demo: "https://garden-web-by-mehdiafatimafaizi.vercel.app/"
  },

];

export default function ProjectsPage() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text">
              All Projects
            </span>
          </h1>
          <p className="mt-4 text-purple-900/80 text-sm md:text-base max-w-2xl mx-auto">
            Explore my complete portfolio of projects, showcasing various technologies and solutions.
          </p>
          <div className="h-1 bg-gradient-to-r from-purple-600 to-purple-400 mt-4 mx-auto w-24" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
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

        <div className="text-center mt-12">
          <Link href="/#project">
            <button className="bg-purple-600 text-white px-5 py-2 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors">
              Back to Featured Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
} 