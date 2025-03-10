import React, { useState, useEffect, useCallback } from 'react';
import Header from './Components/Header.jsx'
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
import Skills from './Components/Skills.jsx';
import Education from './Components/Education.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';



function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <About />
      <Projects />
      <Skills  />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;