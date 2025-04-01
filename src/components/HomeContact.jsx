"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const HomeContact = () => {
  const [activeIcon, setActiveIcon] = useState(null)

  const contactInfo = [
    {
      id: "location",
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: "Location",
      content: "Phnom Penh, Cambodia",
    },
    {
      id: "phone",
      icon: <FaPhone className="w-5 h-5" />,
      title: "Phone",
      content: "+855 12 345 678",
    },
    {
      id: "email",
      icon: <FaEnvelope className="w-5 h-5" />,
      title: "Email",
      content: "chea.ilong@example.com",
    },
  ]

  const socialLinks = [
    { id: "github", icon: <FaGithub className="w-6 h-6" />, href: "#" },
    { id: "linkedin", icon: <FaLinkedin className="w-6 h-6" />, href: "#" },
    { id: "twitter", icon: <FaTwitter className="w-6 h-6" />, href: "#" },
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

  return (
    <section className="py-16 bg-white dark:bg-[#1F1D1B] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact Information</h2>
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
            className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Feel free to reach out if you have any questions or would like to collaborate on a project.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="bg-gray-50 dark:bg-[#2a2826] p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-[#EB2420]">Get In Touch</h3>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <motion.div key={item.id} className="flex items-start" whileHover={{ x: 5 }}>
                  <motion.div
                    className={`flex-shrink-0 mt-1 bg-white dark:bg-[#1F1D1B] p-3 rounded-full ${
                      activeIcon === item.id ? "text-white bg-[#EB2420]" : "text-[#EB2420]"
                    }`}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#EB2420",
                      color: "#ffffff",
                    }}
                    whileTap={{ scale: 0.9 }}
                    onMouseEnter={() => setActiveIcon(item.id)}
                    onMouseLeave={() => setActiveIcon(null)}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    className={`bg-white dark:bg-[#1F1D1B] p-3 rounded-full ${
                      activeIcon === `social-${link.id}` ? "bg-[#EB2420] text-white" : "text-gray-600 dark:text-white"
                    } transition-colors duration-300`}
                    whileHover={{ scale: 1.1, backgroundColor: "#EB2420", color: "#ffffff" }}
                    whileTap={{ scale: 0.9 }}
                    onMouseEnter={() => setActiveIcon(`social-${link.id}`)}
                    onMouseLeave={() => setActiveIcon(null)}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-50 dark:bg-[#2a2826] rounded-xl overflow-hidden shadow-lg"
          >
            <div className="h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125412.55246759568!2d104.8145921762612!3d11.579659765573383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                className="w-full h-full min-h-[300px]"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map - Phnom Penh, Cambodia"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-[#EB2420] text-white font-medium rounded-lg hover:bg-[#EB2420]/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Me a Message
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default HomeContact

