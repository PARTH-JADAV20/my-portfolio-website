import React from 'react';
import Header from './Components/Header.jsx';
import About from './Components/About.jsx';
import Projects from './Components/Projects.jsx';
import Skills from './Components/Skills.jsx';
import Education from './Components/Education.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
import Certificates from './Components/Certificates.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
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
