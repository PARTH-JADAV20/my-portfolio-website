import React, { useState, useEffect } from 'react';
import Header from './Components/Header.jsx';
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
import Skills from './Components/Skills.jsx';
import Education from './Components/Education.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import Certificates from './Components/Certificates.jsx';

function App() {
  // Load dark mode preference from localStorage (default: true)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "light" ? false : true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <About />
      <Projects />
      <Certificates />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
