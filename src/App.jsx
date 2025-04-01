"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
function App() {
  const location = useLocation();
  
  // Force reload CSS when route changes in production
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // This helps CSS reload correctly between route changes
      const links = document.querySelectorAll('link[rel="stylesheet"]');
      links.forEach(link => {
        const newHref = link.href.split('?')[0] + '?v=' + Date.now();
        link.href = newHref;
      });
    }
  }, [location]);
  
}
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Get saved theme from localStorage or use system preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      return savedTheme === "dark"
    }
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  // Apply theme when component mounts and when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-[#1F1D1B] text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

