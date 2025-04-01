"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Hero = () => {
  const [activeIcon, setActiveIcon] = useState(null)

  return (
    <section className="relative min-h-screen flex items-center bg-white dark:bg-[#1F1D1B] transition-colors duration-500">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-[#1F1D1B]" />
        <div className="absolute inset-0">
          {/* Animated gradient blobs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#EB2420]/10 dark:bg-[#EB2420]/20 rounded-full filter blur-[120px] animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-700/5 dark:bg-purple-700/10 rounded-full filter blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-yellow-700/5 dark:bg-yellow-700/10 rounded-full filter blur-[120px] animate-blob animation-delay-4000" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-[#EB2420]/10 border border-[#EB2420]/20"
              >
                <span className="w-2 h-2 rounded-full bg-[#EB2420] mr-2 animate-pulse"></span>
                <span className="text-sm font-medium text-[#EB2420]">Available for freelance work</span>
              </motion.div>

              <div className="space-y-2">
                <h2 className="text-xl font-medium text-[#EB2420]">Hello, I'm</h2>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Chea <span className="text-[#EB2420]">Ilong</span>
                </h1>
                <h3 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light">
                  Software Engineering Student
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md leading-relaxed">
                Passionate about building innovative solutions and learning new technologies. Currently focusing on web
                development and software architecture.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-[#EB2420] to-[#EB2420]/80 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[#EB2420]/20 transition-all"
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-[#EB2420]/30 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-[#EB2420]/10 transition-all"
                >
                  Contact Me
                </motion.a>
              </div>

              <div className="pt-6">
                <p className="text-gray-500 dark:text-gray-500 mb-3 text-sm">Find me on</p>
                <div className="flex space-x-4">
                  {[
                    { id: "github", icon: <FaGithub className="h-6 w-6" />, href: "#" },
                    { id: "linkedin", icon: <FaLinkedin className="h-6 w-6" />, href: "#" },
                    { id: "twitter", icon: <FaTwitter className="h-6 w-6" />, href: "#" },
                  ].map((social) => (
                    <motion.a
                      key={social.id}
                      href={social.href}
                      className={`text-gray-500 dark:text-gray-400 hover:text-[#EB2420] transition-colors ${activeIcon === social.id ? "text-[#EB2420]" : ""}`}
                      whileHover={{ scale: 1.2, color: "#EB2420" }}
                      whileTap={{ scale: 0.9, color: "#EB2420" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.001 * social.id.length }}
                      onMouseEnter={() => setActiveIcon(social.id)}
                      onMouseLeave={() => setActiveIcon(null)}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-[#EB2420]/30 rounded-tl-xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-[#EB2420]/30 rounded-br-xl" />

              {/* Profile image with gradient border */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl bg-gradient-to-br from-[#EB2420] via-[#EB2420]/50 to-purple-600/30 p-1 shadow-2xl">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-[#2a2826]">
                  {/* Replace with actual image */}
                  <img
                    src="https://via.placeholder.com/400x500?text=Chea+Ilong"
                    alt="Chea Ilong"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 bg-white dark:bg-[#2a2826] px-6 py-3 rounded-lg shadow-xl border border-[#EB2420]/20">
                  <span className="text-[#EB2420] font-medium">Developer</span>
                </div>

                {/* Experience badge */}
                <div className="absolute -top-5 -left-5 bg-white dark:bg-[#2a2826] p-3 rounded-lg shadow-xl border border-[#EB2420]/20">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">2+</span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400">Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

