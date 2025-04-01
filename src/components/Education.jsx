"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import { FaGraduationCap, FaAward } from "react-icons/fa"
import CertificateCard from "./CertificateCard"

const educationEvents = [
  {
    year: 2020,
    title: "Started Bachelor's in Software Engineering",
    description: "Enrolled at University of Technology",
    details:
      "Began my journey in software engineering, focusing on programming fundamentals, data structures, and algorithms.",
  },
  {
    year: 2021,
    title: "Web Development Fundamentals Certificate",
    description: "Completed comprehensive web development course on Coursera",
    details:
      "Learned HTML, CSS, JavaScript, and responsive design principles. Created several projects including a personal portfolio and e-commerce prototype.",
  },
  {
    year: 2022,
    title: "Advanced JavaScript Certificate",
    description: "Mastered advanced JavaScript concepts through Udemy",
    details:
      "Studied modern JavaScript features, asynchronous programming, and frameworks like React. Developed a real-time chat application as the final project.",
  },
  {
    year: 2023,
    title: "React Development Certificate",
    description: "Completed freeCodeCamp's React curriculum",
    details:
      "Gained expertise in React, Redux, and related technologies. Built several single-page applications and contributed to open-source projects.",
  },
]

const achievementEvents = [
  {
    year: 2020,
    title: "Programming Competition Finalist",
    description: "Reached finals in university coding competition",
    details:
      "Competed against 200+ students and reached the top 10 finalists by solving complex algorithmic challenges.",
    isCertificate: false,
  },
  {
    year: 2021,
    title: "Web Development Certification",
    description: "Completed comprehensive web development course",
    details: "Mastered HTML, CSS, JavaScript, and responsive design principles through an intensive 12-week program.",
    isCertificate: true,
    issuer: "Coursera",
    credentialId: "WD-2021-78945",
    credential: "https://coursera.org/verify/WD-2021-78945",
    date: "May 2021",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    year: 2022,
    title: "Software Development Competition Winner",
    description: "First place in university hackathon",
    details:
      "Led a team of four to develop an innovative accessibility app that won first place among 30 competing teams.",
    isCertificate: false,
  },
  {
    year: 2022,
    title: "Advanced JavaScript Certificate",
    description: "Mastered advanced JavaScript concepts",
    details:
      "Completed an intensive course covering modern JavaScript features, asynchronous programming, and frameworks.",
    isCertificate: true,
    issuer: "Udemy",
    credentialId: "JS-ADV-34567",
    credential: "https://udemy.com/certificate/JS-ADV-34567",
    date: "October 2022",
    skills: ["ES6+", "Async/Await", "Promises", "Functional Programming"],
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    year: 2023,
    title: "Academic Excellence Scholarship",
    description: "Awarded merit-based scholarship",
    details:
      "Received a full scholarship for the academic year based on outstanding performance and contribution to the department.",
    isCertificate: false,
  },
  {
    year: 2023,
    title: "React Development Certificate",
    description: "Completed React curriculum with honors",
    details:
      "Built several single-page applications and contributed to open-source projects using React and related technologies.",
    isCertificate: true,
    issuer: "freeCodeCamp",
    credentialId: "REACT-2023-12345",
    credential: "https://freecodecamp.org/certification/REACT-2023-12345",
    date: "December 2023",
    skills: ["React", "Redux", "Hooks", "Context API", "Next.js"],
    image: "/placeholder.svg?height=200&width=300",
  },
]

const TimelineIcon = ({ progress }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    style={{ transform: `scale(${progress})` }}
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 8C12 8 14 10 14 12C14 14 12 16 12 16C12 16 10 14 10 12C10 10 12 8 12 8Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
)

const Education = () => {
  const [view, setView] = useState("education")
  const [expandedEvent, setExpandedEvent] = useState(null)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const progress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, 100])

  const currentEvents = view === "education" ? educationEvents : achievementEvents

  return (
    <section
      className="py-20 min-h-screen flex items-center bg-gray-50 dark:bg-[#2a2826] overflow-hidden transition-colors duration-500"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education & Achievements</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-[#EB2420] mx-auto mt-4 mb-8"
          />

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setView("education")}
              className={`flex items-center px-6 py-2 rounded-full ${
                view === "education"
                  ? "bg-[#EB2420] text-white"
                  : "bg-white dark:bg-[#2a2826] text-gray-700 dark:text-white hover:bg-[#EB2420]/20"
              } transition-colors duration-300`}
            >
              <FaGraduationCap className="mr-2 h-5 w-5" />
              Education
            </button>
            <button
              onClick={() => setView("achievements")}
              className={`flex items-center px-6 py-2 rounded-full ${
                view === "achievements"
                  ? "bg-[#EB2420] text-white"
                  : "bg-white dark:bg-[#2a2826] text-gray-700 dark:text-white hover:bg-[#EB2420]/20"
              } transition-colors duration-300`}
            >
              <FaAward className="mr-2 h-5 w-5" />
              Achievements
            </button>
          </div>
        </motion.div>

        {view === "education" ? (
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line - only for education view */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#EB2420]/20 hidden sm:block"
              style={{ scaleY: scaleX }}
            />
            
            {/* Mobile timeline line */}
            <motion.div
              className="absolute left-4 w-0.5 h-full bg-[#EB2420]/20 sm:hidden"
              style={{ scaleY: scaleX }}
            />

            {/* Timeline icon - only for education view */}
            <motion.div
              className="sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-[#EB2420] hidden sm:block"
              style={{ y: yTransform }}
            >
              <TimelineIcon progress={progress} />
            </motion.div>
            
            {/* Mobile timeline icon */}
            <motion.div
              className="sticky top-1/2 left-4 transform -translate-y-1/2 z-10 text-[#EB2420] sm:hidden"
              style={{ y: yTransform }}
            >
              <TimelineIcon progress={progress} />
            </motion.div>

            {educationEvents.map((event, index) => (
              <TimelineEvent
                key={`education-${index}`}
                event={event}
                index={index}
                isExpanded={expandedEvent === index}
                onToggle={() => setExpandedEvent(expandedEvent === index ? null : index)}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {achievementEvents.map((event, index) =>
              event.isCertificate ? (
                <CertificateCard
                  key={`achievement-${index}`}
                  title={event.title}
                  issuer={event.issuer}
                  date={event.date}
                  image={event.image}
                  credential={event.credential}
                />
              ) : (
                <AchievementCard key={`achievement-${index}`} event={event} />
              ),
            )}
          </div>
        )}
      </div>
    </section>
  )
}

function AchievementCard({ event }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-[#2a2826] rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-[#EB2420]/20 hover:border-[#EB2420]/50 transition-all"
    >
      <div className="p-4 sm:p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#EB2420]/10 text-[#EB2420] mb-2">
              {event.year}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{event.title}</h3>
          </div>
          <div className="bg-[#EB2420]/10 p-2 rounded-full flex-shrink-0">
            <FaAward className="h-5 w-5 sm:h-6 sm:w-6 text-[#EB2420]" />
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{event.details}</p>
      </div>
    </motion.div>
  )
}

function TimelineEvent({ event, index, isExpanded, onToggle }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      className={`mb-16 sm:flex sm:justify-between sm:items-center w-full 
                 ${index % 2 === 0 ? "sm:flex-row-reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      {/* Mobile view */}
      <div className="flex items-start mb-4 sm:hidden">
        <div className="z-20 mr-4 flex-shrink-0">
          <div className="flex items-center justify-center w-8 h-8 bg-[#EB2420] rounded-full">
            <div className="w-3 h-3 bg-white dark:bg-[#2a2826] rounded-full" />
          </div>
        </div>
        <motion.div
          className="w-full cursor-pointer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onToggle}
        >
          <div className="p-4 bg-white dark:bg-[#2a2826] rounded-lg shadow-md border border-gray-200 dark:border-[#EB2420]/20 hover:border-[#EB2420]/50 transition-all">
            <span className="font-bold text-[#EB2420]">{event.year}</span>
            <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{event.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{event.details}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Desktop view */}
      <div className="w-5/12 hidden sm:block" />
      <div className="z-20 hidden sm:block">
        <div className="flex items-center justify-center w-8 h-8 bg-[#EB2420] rounded-full">
          <div className="w-3 h-3 bg-white dark:bg-[#2a2826] rounded-full" />
        </div>
      </div>
      <motion.div
        className="w-5/12 cursor-pointer hidden sm:block"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
      >
        <div className="p-4 bg-white dark:bg-[#2a2826] rounded-lg shadow-md border border-gray-200 dark:border-[#EB2420]/20 hover:border-[#EB2420]/50 transition-all">
          <span className="font-bold text-[#EB2420]">{event.year}</span>
          <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{event.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{event.details}</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Education