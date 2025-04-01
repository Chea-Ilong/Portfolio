"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProjectCard from "../components/ProjectCard"

const Projects = () => {
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
    {
      id: 4,
      title: "Inventory Management System",
      description: "A desktop application for managing inventory, sales, and generating reports.",
      image: "/placeholder.svg",
      tags: ["Java", "JavaFX", "MySQL"],
      github: "#",
      demo: "#",
    },
    {
      id: 5,
      title: "Fitness Tracker Mobile App",
      description: "A mobile application for tracking workouts, nutrition, and health metrics.",
      image: "/placeholder.svg",
      tags: ["React Native", "Firebase", "Health API"],
      github: "#",
      demo: "#",
    },
    {
      id: 6,
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing and analyzing complex datasets.",
      image: "/placeholder.svg",
      tags: ["D3.js", "React", "Node.js"],
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
    <main className="pt-24 pb-16 bg-white dark:bg-[#1F1D1B] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white"
          >
            My Projects
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-[#EB2420] mx-auto mt-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Explore my portfolio of projects spanning web development, mobile applications, and more. Each project
            represents my passion for creating innovative solutions.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onHover={() => setHoveredProject(project.id)}
              onLeave={() => setHoveredProject(null)}
              isHovered={hoveredProject === project.id}
            />
          ))}
        </motion.div>
      </div>
    </main>
  )
}

export default Projects

