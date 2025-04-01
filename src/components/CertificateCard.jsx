"use client"

import { useState } from "react"
import { Award, Eye } from "lucide-react"
import { motion } from "framer-motion"

const CertificateCard = ({ title, issuer, date, image, credential }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isIconActive, setIsIconActive] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

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

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.3,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  }

  const iconVariants = {
    initial: { rotate: -10, opacity: 0.5 },
    animate: {
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.2,
      color: "#EB2420",
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.1 },
    },
  }

  // Handle touch devices
  const handleTouchStart = () => {
    setIsTouchDevice(true)
    setIsHovered(true)
  }

  return (
    <motion.div
      className="relative bg-white dark:bg-[#2a2826] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-[#EB2420]/20 transition-all"
      initial="hidden"
      whileInView="visible"
      whileHover={!isTouchDevice ? "hover" : undefined}
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
      onMouseEnter={() => !isTouchDevice && setIsHovered(true)}
      onMouseLeave={() => {
        if (!isTouchDevice) {
          setIsHovered(false)
          setIsIconActive(false)
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={() => {
        // On touch devices, we don't want to hide overlay immediately
        // It will be hidden when user taps elsewhere
      }}
    >
      <div className="aspect-video w-full overflow-hidden">
        <motion.img
          src={image || "/placeholder.svg?height=200&width=300"}
          alt={title}
          className="w-full h-full object-cover"
          variants={imageVariants}
        />

        {(isHovered || isTouchDevice) && (
          <motion.div
            className="absolute inset-0 bg-white/80 dark:bg-[#1F1D1B]/80 backdrop-blur-sm flex flex-col items-center justify-center gap-4 p-4"
            initial="hidden"
            animate="visible"
            variants={overlayVariants}
          >
            {credential && (
              <motion.a
                href={credential}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 ${
                  isIconActive ? "bg-[#EB2420]/80" : "bg-[#EB2420]"
                } hover:bg-[#EB2420]/90 text-white px-4 py-2 rounded-full transition-colors`}
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.9, backgroundColor: "#EB2420" }}
                onMouseEnter={() => setIsIconActive(true)}
                onMouseLeave={() => setIsIconActive(false)}
                onClick={(e) => {
                  if (isTouchDevice) {
                    e.stopPropagation();
                    // Keep overlay open on touch devices when clicking the button
                  }
                }}
              >
                <Eye size={16} color={isIconActive ? "#ffffff" : "#f8f8f8"} />
                <span>View Certificate</span>
              </motion.a>
            )}
          </motion.div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-lg truncate text-gray-900 dark:text-white max-w-[200px] sm:max-w-full">{title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm truncate max-w-[200px] sm:max-w-full">{issuer}</p>
          </div>
          <motion.div
            variants={iconVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9, color: "#EB2420" }}
            initial="initial"
            animate="animate"
            viewport={{ once: true }}
          >
            <Award className={isIconActive ? "text-[#EB2420]" : "text-[#EB2420]"} size={20} />
          </motion.div>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">{date}</p>
      </div>
    </motion.div>
  )
}

export default CertificateCard