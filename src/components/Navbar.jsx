"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { FaMoon, FaSun } from "react-icons/fa"

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeIcon, setActiveIcon] = useState(null)
  const location = useLocation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  }

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 dark:bg-[#1F1D1B]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <motion.span
                className="text-[#EB2420] font-bold text-2xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                CI
              </motion.span>
              <span className="sr-only">Chea Ilong</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <NavLink to="/" text="Home" currentPath={location.pathname} />
              <NavLink to="/projects" text="Projects" currentPath={location.pathname} />
              <NavLink to="/contact" text="Contact" currentPath={location.pathname} />
            </div>

            <div className="pl-6 border-l border-gray-300 dark:border-gray-700">
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-[#EB2420] transition-colors"
                aria-label="Toggle dark mode"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: darkMode ? "rgba(235, 36, 32, 0.1)" : "rgba(235, 36, 32, 0.1)",
                }}
                whileTap={{ scale: 0.9, backgroundColor: "#EB2420", color: "#ffffff" }}
                onMouseEnter={() => setActiveIcon("theme")}
                onMouseLeave={() => setActiveIcon(null)}
              >
                {darkMode ? (
                  <FaSun className={`h-4 w-4 ${activeIcon === "theme" ? "text-[#EB2420]" : ""}`} />
                ) : (
                  <FaMoon className={`h-4 w-4 ${activeIcon === "theme" ? "text-[#EB2420]" : ""}`} />
                )}
              </motion.button>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              aria-label="Toggle dark mode"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(235, 36, 32, 0.1)" }}
              whileTap={{ scale: 0.9, backgroundColor: "#EB2420", color: "#ffffff" }}
            >
              {darkMode ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
            </motion.button>
            <motion.button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-200 hover:text-white hover:bg-[#EB2420] focus:outline-none transition-colors"
              aria-expanded={isOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-[#1F1D1B] shadow-lg border-t border-gray-200 dark:border-gray-800">
              <MobileNavLink to="/" text="Home" currentPath={location.pathname} />
              <MobileNavLink to="/projects" text="Projects" currentPath={location.pathname} />
              <MobileNavLink to="/contact" text="Contact" currentPath={location.pathname} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

const NavLink = ({ to, text, currentPath }) => {
  const isActive = currentPath === to
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      to={to}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        className={`px-3 py-2 rounded-md text-sm font-medium ${
          isActive
            ? "text-gray-900 dark:text-white"
            : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {text}
      </motion.span>
      {isActive ? (
        <motion.div
          layoutId="navbar-indicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EB2420]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      ) : (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EB2420]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ originX: 0 }}
        />
      )}
    </Link>
  )
}

const MobileNavLink = ({ to, text, currentPath }) => {
  const isActive = currentPath === to

  return (
    <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
      <Link
        to={to}
        className={`block px-3 py-2 rounded-md text-base font-medium ${
          isActive
            ? "bg-gradient-to-r from-[#EB2420]/20 to-transparent border-l-2 border-[#EB2420] text-gray-900 dark:text-white"
            : "text-gray-600 dark:text-gray-300 hover:bg-[#EB2420]/10 hover:text-gray-900 dark:hover:text-white"
        }`}
      >
        {text}
      </Link>
    </motion.div>
  )
}

export default Navbar

