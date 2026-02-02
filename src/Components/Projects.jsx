import { Briefcase, ExternalLink, Github, Figma } from 'lucide-react';
import { useState } from 'react';
import img2 from '../images/ooj.png';
import img3 from '../images/fourapi.png';
import img4 from '../images/yt.png';
import img5 from '../images/uc.png';
import img6 from '../images/re.png';
import img7 from '../images/farmtrust.png';
import img8 from '../images/graspcheck.png';
import img9 from '../images/internship.png';
import img10 from '../images/sip.png';
import img11 from '../images/tictaktoe.png';
import img12 from '../images/ecosetu.png';
import img1 from '../images/Yantracare.png';
import img13 from '../images/leetcode.png';
import img14 from '../images/setulink.png';

export default function Projects({ theme }) {
  const t = theme || {};
  const [showAll, setShowAll] = useState(false);
  
  const projects = [
    {
      title: "Outfits Of Joy",
      description: "A full-stack Outfit Renting platform that has outfits for rent like sherwani, Tuxedo, lehenga etc. Built with React, Node.js, and MongoDB.",
      postmanDocs: "https://documenter.getpostman.com/view/39190159/2sAYQcEVQx",
      github: "https://github.com/PARTH-JADAV20/outfits_of_joy",
      figma: "https://www.figma.com/design/Ccb55yT6IzEFeFS8JaOTdJ/outfitsofjoy?node-id=0-1&t=EuCTkbeMXNHquqx1-1",
      preview: "https://outfits-of-joy.vercel.app/",
      image: img2,
      tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "Tailwind CSS", "Authentication", "PaymentGateway"]
    },
    {
      title: "ECOSetu",
      description: "ECOSetu is a PLM-ERP system built at the Odoo x Adani University Hackathon to optimize manufacturing and product lifecycle workflows.",
      github: "https://github.com/PARTH-JADAV20/ECOSetu",
      preview: "https://eco-setu.vercel.app/",
      image: img12,
      tags: ["Next.js", "PostgreSQL", "Hackathon", "Neon", "Node Mailer", "Role-Based Access Control", "Odoo X Adani University", "Tailwind CSS", "TypeScript"]
    },
    {
      title: "FarmTust",
      description: "A full-stack Certified and Verified Organic farm Product E-commerce website. Built with React, Node.js, and MongoDB.",
      github: "https://github.com/PARTH-JADAV20/FarmTrust-x-Hackathon",
      figma: "https://www.figma.com/design/SNuN8wbnReIue8nUOJhjEG/Untitled?node-id=0-1&p=f&t=tAvB32zrNQdsGZpU-0",
      preview: "https://farmtrust.netlify.app/",
      image: img7,
      tags: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Ai Chatbot", "i18n", "Authentication", "Hackathon"]
    },
    {
      title: "Bussiness Pro",
      description: "A full-stack stock and bill management system for a construction businessman. Built with React, Node.js, and MongoDB.",
      preview: "https://business-pro-app.netlify.app/",
      github: "https://github.com/PARTH-JADAV20/business-pro",
      image: img9,
      tags: ["React", "Node.js", "MongoDB", "Express", "freelancer", "Authentication", "firebase"]
    },
    {
      title: "WealthGrove",
      description: "A full-stack Next.js application for browsing mutual funds, calculating returns, running SIP simulations, and visualizing investment growth.",
      preview: "https://sip-app-ten.vercel.app/",
      github: "https://github.com/PARTH-JADAV20/SIP-APP",
      image: img10,
      tags: ["Next js", "MongoDB", "Material UI", "Recharts", "REST APIs"]
    },
    {
      title: "YantraCare",
      description: "A comprehensive Equipment Maintenance Management System designed to streamline maintenance operations, track equipment lifecycle, and manage maintenance teams efficiently.",
      preview: "https://yantra-care.vercel.app/",
      github: "https://github.com/PARTH-JADAV20/YantraCare",
      image: img1,
      tags: ["Next js", "MongoDB", "Recharts", "Hackathon"]
    },
    {
      title: "LeetCode-Smart-Analysis",
      description: "A Chrome extension that enhances your LeetCode experience by providing AI-powered approach suggestions and complexity analysis directly within the LeetCode interface.",
      github: "https://github.com/PARTH-JADAV20/LeetCode-Smart-Analysis",
      image: img13,
      tags: ["React", "OpenRouter API", "Deepseek AI", "chrome extension"]
    },
    {
      title: "Setulink",
      description: "Setulink acts as a bridge between your local machine and the global Cloudflare network. It leverages the cloudflared engine to create a persistent, encrypted tunnel.",
      preview: "https://www.npmjs.com/package/setulink",
      github: "https://github.com/PARTH-JADAV20/setulink",
      image: img14,
      tags: ["Node Package Manager", "Cloudflare", "Tunnel", "CLI Tool"]
    },
    {
      title: "TicTacToe",
      description: "A modern, multiplayer Tic Tac Toe game with a neon-themed UI, featuring live multiplayer functionality, game history tracking, and a leaderboard system. Created with bolt.new",
      preview: "https://parth-tic-tac-toe.vercel.app/",
      github: "https://github.com/PARTH-JADAV20/Next-tic-tac-toe",
      image: img11,
      tags: ["Next js", "MongoDB", "bolt.new"]
    },
    {
      title: "GraspCheck",
      description: "A chrome extension that helps to check your grasp power after reading a article by generating questions based on the content of the article using Gemini API.",
      github: "https://github.com/PARTH-JADAV20/graspcheck",
      image: img8,
      tags: ["React", "gemini API", "webscraping", "chrome extension"]
    },
    {
      title: "4 APIS",
      description: "A Website integrated four different APIs for exploring meals, cocktails, harry potter world and bank details",
      github: "https://github.com/PARTH-JADAV20/four-api-project",
      preview: "https://webappjp.netlify.app/",
      image: img3,
      tags: ["JavaScript", "HTML5", "CSS3", "API Integration"]
    },
    {
      title: "Youtube Clone",
      description: "Youtube clone that fetch data from google youtube API it has trending, music and games section shows particular data dynamicaly from API",
      preview: "https://youtube-by-react.onrender.com/",
      github: "https://github.com/PARTH-JADAV20/Youtube-by-react",
      image: img4,
      tags: ["React", "YouTube API"]
    },
    {
      title: "Urban Company Clone",
      description: "This is urban company clone website that has some animation features and image slider made with javascript showcasing my skills in html, css and javascript",
      preview: "https://urbancompanybyparth.netlify.app/",
      github: "https://github.com/PARTH-JADAV20/Urban-Company-Project",
      image: img5,
      tags: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Royal Enfield Clone",
      description: "Implemented same design as royal enfield website that has image slider and image changer with buttons. made using html, css and javascript",
      github: "https://github.com/PARTH-JADAV20/Royal-Enfield-Project",
      preview: "https://royal-enfield-project.vercel.app/",
      image: img6,
      tags: ["HTML5", "CSS3", "JavaScript"]
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className={`py-20 ${t.bg || 'bg-muted-green-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Briefcase className={`w-12 h-12 ${t.icon || 'text-muted-green-600'} mx-auto mb-4`} />
          <h2 className="text-4xl font-semibold text-text-gray-dark mb-4">Featured Projects</h2>
          <p className="text-lg text-text-gray">Transforming ideas into digital reality</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div key={index} className={`group relative bg-white rounded-flat-lg overflow-hidden border-2 ${t.cardBorder || 'border-muted-green-200'} ${t.cardHover || 'hover:border-muted-green-400'} transition-all duration-300 hover:-translate-y-1`}>
              <div className={`aspect-video overflow-hidden ${t.mediaBg || 'bg-muted-green-100'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-gray-dark mb-2">{project.title}</h3>
                
                {/* Technology tags placed under title */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className={`text-xs px-2 py-1 ${t.tagBg || 'bg-muted-green-100'} ${t.tagText || 'text-muted-green-700'} rounded-full border ${t.tagBorder || 'border-muted-green-200'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-text-gray mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.preview && (
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-sm ${t.link || 'text-muted-green-600'} ${t.linkHover || 'hover:text-muted-green-700'} transition-colors`}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> Website Link
                    </a>
                  )}
                  {project.postmanDocs && (
                    <a
                      href={project.postmanDocs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-sm ${t.link || 'text-muted-green-600'} ${t.linkHover || 'hover:text-muted-green-700'} transition-colors`}
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> Documentation
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-sm ${t.link || 'text-muted-green-600'} ${t.linkHover || 'hover:text-muted-green-700'} transition-colors`}
                    >
                      <Github className="w-4 h-4 mr-1" /> GitHub
                    </a>
                  )}
                  {project.figma && (
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center text-sm ${t.link || 'text-muted-green-600'} ${t.linkHover || 'hover:text-muted-green-700'} transition-colors`}
                    >
                      <Figma className="w-4 h-4 mr-1" /> Figma
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {!showAll && projects.length > 6 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className={`group px-8 py-3 bg-white border-2 ${t.cardBorder || 'border-muted-green-200'} ${t.cardHover || 'hover:border-muted-green-400'} rounded-full font-medium text-text-gray ${t.linkHover || 'hover:text-muted-green-700'} transition-all hover:-translate-y-1 flex items-center gap-2`}
            >
              Show More Projects
              <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}