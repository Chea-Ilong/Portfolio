"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link" // Changed from react-router-dom
import { FaArrowRight } from "react-icons/fa"
import ProjectCard from "./ProjectCard"

const ProjectsPreview = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/placeholder.svg",
      tags: ["Vue.js", "Firebase", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
      image: "/placeholder.svg",
      tags: ["JavaScript", "Weather API", "Chart.js"],
      github: "#",
      demo: "#",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section className="py-24 min-h-screen flex items-center bg-gray-50 dark:bg-[#2a2826] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-[#EB2420]/10 text-[#EB2420] text-sm font-medium mb-4"
          >
            My Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-[#EB2420] mx-auto mt-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Check out some of my recent work. These projects showcase my skills and passion for creating innovative
            solutions.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onHover={() => setHoveredProject(project.id)}
              onLeave={() => setHoveredProject(null)}
              isHovered={hoveredProject === project.id}
            />
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Link
            href="/projects" // Changed from "to" to "href"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#EB2420] to-[#EB2420]/80 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#EB2420]/20 transition-all"
          >
            <motion.div
              className="flex items-center"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95, x: 0 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span>View All Projects</span>
              <motion.div whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400 }}>
                <FaArrowRight className="ml-2" />
              </motion.div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsPreview