"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const ProjectCard = ({ project, onHover, onLeave, isHovered }) => {
  const [activeIcon, setActiveIcon] = useState(null)

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      borderColor: "rgba(235, 36, 32, 0.5)",
      transition: {
        duration: 0.3,
      },
    },
  }

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.08,
      transition: { duration: 0.4 },
    },
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, transition: { duration: 0.2 } },
    tap: { scale: 0.9, transition: { duration: 0.1 } },
  }

  const tagVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.3,
      },
    }),
  }

  return (
    <motion.div
      className="bg-white dark:bg-[#2a2826] rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-[#EB2420]/20 transition-all group"
      variants={cardVariants}
      whileHover="hover"
      onMouseEnter={() => onHover && onHover()}
      onMouseLeave={() => {
        onLeave && onLeave()
        setActiveIcon(null)
      }}
    >
      <div className="relative overflow-hidden h-48">
        <motion.img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover"
          variants={imageVariants}
          animate={isHovered ? "hover" : "initial"}
        />

        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-white/80 dark:bg-[#2a2826]/80 backdrop-blur-sm flex items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={overlayVariants}
          >
            <div className="flex space-x-6">
              <motion.a
                href={project.github}
                className={`p-3 rounded-full ${activeIcon === "github" ? "bg-[#EB2420] text-white" : "bg-white dark:bg-[#1F1D1B] text-gray-600 dark:text-gray-300"} transition-colors`}
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                whileTap={{ scale: 0.9, backgroundColor: "#EB2420", color: "#ffffff" }}
                onMouseEnter={() => setActiveIcon("github")}
                onMouseLeave={() => setActiveIcon(null)}
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={project.demo}
                className={`p-3 rounded-full ${activeIcon === "demo" ? "bg-[#EB2420] text-white" : "bg-white dark:bg-[#1F1D1B] text-gray-600 dark:text-gray-300"} transition-colors`}
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                whileTap={{ scale: 0.9, backgroundColor: "#EB2420", color: "#ffffff" }}
                onMouseEnter={() => setActiveIcon("demo")}
                onMouseLeave={() => setActiveIcon(null)}
              >
                <FaExternalLinkAlt className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-[#EB2420] transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => (
            <motion.span
              key={i}
              className="px-2 py-1 bg-gray-100 dark:bg-[#1F1D1B] text-gray-600 dark:text-gray-300 rounded-full text-xs border border-gray-200 dark:border-gray-800"
              custom={i}
              variants={tagVariants}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard

