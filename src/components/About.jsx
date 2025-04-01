"use client"
import { motion } from "framer-motion"
import { FaCode, FaLaptopCode, FaServer, FaMobileAlt } from "react-icons/fa"

const About = () => {
  const skills = [
    {
      name: "Frontend Development",
      icon: <FaCode className="w-8 h-8" />,
      description: "Building responsive and interactive user interfaces with modern frameworks.",
    },
    {
      name: "Backend Development",
      icon: <FaServer className="w-8 h-8" />,
      description: "Creating robust server-side applications and APIs.",
    },
    {
      name: "Full Stack Development",
      icon: <FaLaptopCode className="w-8 h-8" />,
      description: "End-to-end application development from database to user interface.",
    },
    {
      name: "Mobile Development",
      icon: <FaMobileAlt className="w-8 h-8" />,
      description: "Developing cross-platform mobile applications.",
    },
  ]

  return (
    <section className="py-20 min-h-screen flex items-center bg-white dark:bg-[#1F1D1B] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-[#EB2420] mx-auto mt-4"
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-2/5"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#EB2420]/30 rounded-tl-xl" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-[#EB2420]/30 rounded-br-xl" />

              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://via.placeholder.com/400x500?text=Chea+Ilong"
                  alt="Chea Ilong"
                  className="w-full h-auto rounded-xl"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-100/60 dark:from-[#1F1D1B]/60 via-transparent to-transparent" />

                {/* Decorative dots pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
                  <div className="grid grid-cols-6 gap-1">
                    {[...Array(36)].map((_, i) => (
                      <div key={i} className="w-1 h-1 rounded-full bg-gray-900 dark:bg-white"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#EB2420]">Who I Am</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                I'm Chea Ilong, a passionate software engineering student with a focus on creating innovative and
                user-friendly applications. My journey in technology began with a curiosity about how digital solutions
                can solve real-world problems.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Currently pursuing my degree in Software Engineering, I combine academic knowledge with practical
                experience through personal projects and collaborative work. I believe in continuous learning and
                staying updated with the latest technologies and industry trends.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or engaging in tech communities to share knowledge and experiences.
              </p>

              <div className="pt-4">
                <motion.a
                  href="/contact"
                  className="inline-flex items-center text-[#EB2420] font-medium hover:underline"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95, color: "#EB2420" }}
                >
                  <span>Get in touch</span>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </motion.svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">What I Do</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-[#2a2826] p-8 rounded-xl shadow-xl border border-gray-200 dark:border-gray-800 hover:border-[#EB2420]/30 transition-all group"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    className="text-[#EB2420] mr-4"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9, rotate: -5 }}
                    animate={{
                      scale: [1, 1.05, 1],
                      transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

