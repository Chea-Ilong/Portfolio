"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa"

const Footer = () => {
  const [activeIcon, setActiveIcon] = useState(null)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const socialLinks = [
    { id: "github", icon: <FaGithub className="h-6 w-6" />, href: "#" },
    { id: "linkedin", icon: <FaLinkedin className="h-6 w-6" />, href: "#" },
    { id: "email", icon: <FaEnvelope className="h-6 w-6" />, href: "mailto:contact@example.com" },
  ]

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
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

  return (
    <motion.footer
      className="bg-gray-50 dark:bg-[#1F1D1B] py-12 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            className="mb-8 p-3 rounded-full bg-white dark:bg-[#2a2826] text-gray-600 dark:text-white hover:bg-[#EB2420] hover:text-white transition-colors duration-300 group"
            whileHover={{ scale: 1.1, backgroundColor: "#EB2420", color: "#ffffff" }}
            whileTap={{ scale: 0.9, backgroundColor: "#EB2420", color: "#ffffff" }}
          >
            <FaArrowUp className="h-5 w-5 group-hover:animate-bounce" />
          </motion.button>

          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div className="text-center md:text-left" variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Chea Ilong</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A passionate software engineering student focused on creating innovative solutions.
              </p>
            </motion.div>

            <motion.div className="text-center" variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "Projects", "Contact"].map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-[#EB2420] transition-colors"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="text-center md:text-right" variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Contact</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">chea.ilong@example.com</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">San Francisco, CA</p>
              <div className="flex justify-center md:justify-end space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    className={`${activeIcon === link.id ? "text-[#EB2420]" : "text-gray-500 dark:text-gray-400"} hover:text-[#EB2420] transition-colors`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9, color: "#EB2420" }}
                    onMouseEnter={() => setActiveIcon(link.id)}
                    onMouseLeave={() => setActiveIcon(null)}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="w-full pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center"
            variants={itemVariants}
          >
            <p className="text-gray-500 dark:text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Chea Ilong. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              Designed & Built with{" "}
              <motion.span
                className="text-[#EB2420]"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              >
                ❤
              </motion.span>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

