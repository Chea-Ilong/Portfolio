"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiPython,
  SiMongodb,
  SiGit,
  SiDocker,
  SiAmazon,
  SiC,
  SiCplusplus,
  SiMysql,
} from "react-icons/si"
import { GiProcessor } from "react-icons/gi"


const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null)
  const isMobile = useMediaQuery("(max-width: 640px)")
  const isTablet = useMediaQuery("(max-width: 1024px)")

  const techLogos = [
    {
      icon: <SiJavascript className="w-full h-full" />,
      name: "JavaScript",
      color: "#F7DF1E",
    },
    {
      icon: <SiTypescript className="w-full h-full" />,
      name: "TypeScript",
      color: "#3178C6",
    },
    {
      icon: <SiReact className="w-full h-full" />,
      name: "React",
      color: "#61DAFB",
    },
    {
      icon: <SiNodedotjs className="w-full h-full" />,
      name: "Node.js",
      color: "#339933",
    },
    {
      icon: <SiC className="w-full h-full" />,
      name: "C",
      color: "#A8B9CC",
    },
    {
      icon: <SiCplusplus className="w-full h-full" />,
      name: "C++",
      color: "#00599C",
    },
    {
      icon: <SiMysql className="w-full h-full" />,
      name: "SQL",
      color: "#4479A1",
    },
    {
      icon: <GiProcessor className="w-full h-full" />,
      name: "Assembly",
      color: "#6E4C13",
    },
    {
      icon: <SiHtml5 className="w-full h-full" />,
      name: "HTML5",
      color: "#E34F26",
    },
    {
      icon: <SiCss3 className="w-full h-full" />,
      name: "CSS3",
      color: "#1572B6",
    },
    {
      icon: <SiPython className="w-full h-full" />,
      name: "Python",
      color: "#3776AB",
    },
  
    {
      icon: <SiGit className="w-full h-full" />,
      name: "Git",
      color: "#F05032",
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const logoVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.15,
      rotate: [0, -10, 10, -5, 5, 0],
      transition: {
        scale: { duration: 0.3 },
        rotate: { duration: 0.5, ease: "easeInOut" },
      },
    },
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 min-h-screen flex items-center bg-white dark:bg-[#1F1D1B] transition-colors duration-500 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10 sm:mb-16 md:mb-20">
          <p className="text-[#EB2420] text-lg sm:text-xl md:text-2xl mb-2 font-medium tracking-wider">EXPERTISE</p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
          >
            Technical Skills
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 w-16 sm:w-20 bg-[#EB2420] mx-auto mt-3 sm:mt-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-4 sm:mt-6 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-base sm:text-lg"
          ></motion.p>
        </div>

        <div className="relative h-16 sm:h-20 md:h-24 mb-8 sm:mb-12 md:mb-16 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 z-10 bg-gradient-to-r from-white dark:from-[#1F1D1B] to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 z-10 bg-gradient-to-l from-white dark:from-[#1F1D1B] to-transparent"></div>

          <InfiniteScrollingLogos
            logos={techLogos}
            direction="right"
            speed={isMobile ? 30 : isTablet ? 35 : 40}
            size={isMobile ? "w-12 h-12" : "w-16 h-16"}
          />
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-12 mx-auto max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {techLogos.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="flex flex-col items-center p-4 sm:p-5 bg-white dark:bg-[#2a2826] rounded-lg shadow-md border border-gray-200 dark:border-gray-800 transition-all"
              onMouseEnter={() => setActiveSkill(tech.name)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <motion.div
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-3"
                style={{ color: tech.color }}
                variants={logoVariants}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
              >
                {tech.icon}
              </motion.div>
              <span className="text-xs sm:text-sm md:text-base text-gray-900 dark:text-white font-medium text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const InfiniteScrollingLogos = ({ logos, direction = "right", speed = 40, size = "w-16 h-16" }) => {
  const doubledLogos = [...logos, ...logos]

  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <div className="flex animate-none">
        <motion.div
          className="flex space-x-6 sm:space-x-8 md:space-x-12 items-center"
          animate={{
            x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: speed,
              ease: "linear",
            },
          }}
        >
          {doubledLogos.map((tech, index) => (
            <motion.div
              key={index}
              className={`${size} flex-shrink-0`}
              style={{ color: tech.color }}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              {tech.icon}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Skills