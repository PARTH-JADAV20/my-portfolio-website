import { useState, useRef } from 'react';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Placeholder images (replace with actual certificate image imports)
import cert1 from '../images/Certificates/hackerrank_css(basic).png';
import cert2 from '../images/Certificates/hackerrank_js(basic).png';
import cert3 from '../images/Certificates/hackerrank_js(inetrm).png';
import cert4 from '../images/Certificates/hackerrank_react(basic).png';
import cert5 from '../images/Certificates/hackerrank_FD(react).png';
import cert6 from '../images/Certificates/githubcopilot.png';
import cert7 from '../images/Certificates/RUxAzure.png';
import cert8 from '../images/Certificates/RUxPowerBi.png';
import cert9 from '../images/Certificates/odooXgujvidya.jpg';
import cert10 from '../images/Certificates/node_basic.png';
import cert11 from '../images/Certificates/node_inter.png';
import cert12 from '../images/Certificates/Aws docdb simplilearn.png';
import cert13 from '../images/Certificates/azure basic simplilearn.png';
import cert14 from '../images/Certificates/azure fundamental simplilearn.png';
import cert15 from '../images/Certificates/container security simplilearn.png';
import cert16 from '../images/Certificates/full satck infosys.png';
import cert17 from '../images/Certificates/gateway loadbalancer simplilearn.png';
import cert18 from '../images/Certificates/genai backend coursera.png';
import cert19 from '../images/Certificates/restapi_hackerrank.png';

export default function Certificates() {
  const certificates = [
    {
      title: "node.js(Basic) Certification",
      image: cert10,
      description: "certified Node.js Developer from HackerRank"
    },
    {
      title: "node.js(Intermediate) Certification",
      image: cert11,
      description: "certified Node.js Developer from HackerRank"
    },
    {
      title: "React(Basic) Certification",
      image: cert4,
      description: "Certified React Developer from HackerRank"
    },
    {
      title: "Frontend Developer with React",
      image: cert5,
      description: "Certified Frontend Developer with React from HackerRank"
    },
    {
      title: "JavaScript(Basic) Certification",
      image: cert2,
      description: "JavaScript Certified from HackerRank"
    },
    {
      title: "JavaScript(Intermediate) Certification",
      image: cert3,
      description: "Certified JavaScript Developer from HackerRank"
    },
    {
      title: "GitHub Copilot",
      image: cert6,
      description: "Completed GitHub Copilot Course from simplilearn | skillup"
    },
    {
      title: "Rest API Certification",
      image: cert19,
      description: "Certified Rest API Developer from HackerRank"
    },
    {
      title: "AWS DocumentDB",
      image: cert12,
      description: "Completed AWS DocumentDB Course from Simplilearn|Skillup"
    },
    {
      title: "Azure basic",
      image: cert13,
      description: "Completed Azure Basic Course from Simplilearn|Skillup"
    },
    {
      title: "Azure fundamental",
      image: cert14,
      description: "Completed Azure Fundamental Course from Simplilearn|Skillup"
    },
    {
      title: "Container Security AWS",
      image: cert15,
      description: "Completed Container Security Course from Simplilearn|Skillup AWS"
    },
    {
      title: "Full Stack Developer",
      image: cert16,
      description: "Completed Full Stack Developer Course from Infosys Springboard"
    },
    {
      title: "Gateway load balancer AWS",
      image: cert17,
      description: "Completed Gateway Load Balancer Course from Simplilearn|Skillup AWS"
    },
    {
      title: "GenAI for Backend Developers",
      image: cert18,
      description: "Completed GenAI for Backend Developers Course from Coursera"
    },
    {
      title: "CSS(Basic) Certification",
      image: cert1,
      description: "CSS Certified from HackerRank"
    },
    {
      title: "Odoo X Gujarat vidyapith Hackathon 2025",
      image: cert9,
      description: "Participated in Odoo X Gujarat vidyapith Hackathon 2025 as selected in top 50 teams"
    }, 
    {
      title: "Microsoft Azure Fundamentals",
      image: cert7,
      description: "Took part in Microsoft Azure Fundamentals Seminar In Rai University, Gujarat"
    },
    {
      title: "Microsoft Power BI Fundamentals",
      image: cert8,
      description: "Took part in Microsoft Power BI Fundamentals Seminar In Rai University, Gujarat"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // Track slide direction: 1 for next, -1 for prev
  const [isZoomed, setIsZoomed] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
    setIsZoomed(false); // Reset zoom on slide
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
    setIsZoomed(false); // Reset zoom on slide
  };

  // Handle hover with 2-second delay
  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsZoomed(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeoutRef.current);
    setIsZoomed(false);
  };

  // Get indices for left, center, and right certificates
  const prevIndex = currentIndex === 0 ? certificates.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === certificates.length - 1 ? 0 : currentIndex + 1;

  // Animation variants for sliding
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Award className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">My professional credentials and achievements</p>
        </div>

        <div className="relative">
          {/* Certificate Counter */}
          <div className="text-center mb-6">
            <span className="text-gray-600 dark:text-gray-300 text-lg font-medium">
              {currentIndex + 1} / {certificates.length}
            </span>
          </div>

          {/* Slider */}
          <div className="flex items-center justify-center gap-4">
            {/* Previous Certificate (Left) - Hidden on mobile */}
            <motion.div
              className="hidden sm:block w-1/4 sm:w-1/5 md:w-1/4 opacity-60 scale-75"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 0.6, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
                <img
                  src={certificates[prevIndex].image}
                  alt={certificates[prevIndex].title}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white text-center">
                    {certificates[prevIndex].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 text-center">
                    {certificates[prevIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Current Certificate (Center) */}
            <motion.div
              className="w-full sm:w-3/5 md:w-2/4"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-none border-2 border-gray-200 dark:border-none overflow-visible">
                <div
                  className="relative w-full h-48 sm:h-56 md:h-64 transition-transform duration-300"
                  style={{ transform: isZoomed ? 'scale(1.5)' : 'scale(1)', transformOrigin: 'center' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={certificates[currentIndex].image}
                    alt={certificates[currentIndex].title}
                    className={`w-full h-full ${isZoomed ? 'object-contain' : 'object-cover'} cursor-pointer`}
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white text-center">
                    {certificates[currentIndex].title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center">
                    {certificates[currentIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Next Certificate (Right) - Hidden on mobile */}
            <motion.div
              className="hidden sm:block w-1/4 sm:w-1/5 md:w-1/4 opacity-60 scale-75"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 0.6, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
                <img
                  src={certificates[nextIndex].image}
                  alt={certificates[nextIndex].title}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white text-center">
                    {certificates[nextIndex].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 text-center">
                    {certificates[nextIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              aria-label="Next certificate"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}