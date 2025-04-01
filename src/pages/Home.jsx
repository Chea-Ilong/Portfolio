"use client"

import { motion } from "framer-motion/dist/framer-motion"
import Hero from "../components/Hero"
import Education from "../components/Education"
import Skills from "../components/Skills"
import ProjectsPreview from "../components/ProjectsPreview"
import About from "../components/About"
import HomeContact from "../components/HomeContact"

const Home = () => {
  return (
    <main className="pt-16">
      <Hero />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Education />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ProjectsPreview />
        <Skills />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
     
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <HomeContact />
      </motion.div>
    </main>
  )
}

export default Home