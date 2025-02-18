import { Briefcase, ExternalLink, Github } from 'lucide-react';
import img2 from '../images/ooj.png'
import img3 from '../images/fourapi.png'
import img4 from '../images/yt.png'
import img5 from '../images/uc.png'
import img6 from '../images/re.png'

export default function Projects() {
  const projects = [
      {
        title: "Outfits Of Joy",
        description: "A full-stack Outfit Renting platform that has outfits for rent like sherwani, Tuxedo, lehenga etc. Built with React, Node.js, and MongoDB.",
        postmanDocs: "https://documenter.getpostman.com/view/39190159/2sAYQcEVQx",
        github: "https://github.com/PARTH-JADAV20/outfits_of_joy",
        figma:"https://www.figma.com/design/Ccb55yT6IzEFeFS8JaOTdJ/outfitsofjoy?node-id=0-1&t=EuCTkbeMXNHquqx1-1",
        preview: "https://outfits-of-joy.vercel.app/",
        image: img2
      },
      {
        title: "4 APIS",
        description: "A Website integrated four different APIs for exploring meals, cocktails, harry potter world and bank details",
        github: "https://github.com/PARTH-JADAV20/four-api-project",
        preview: "https://webappjp.netlify.app/",
        image: img3
      },
      {
        title: "Youtube Clone",
        description: "Youtube clone that fetch data from google youtube API it has trending, music and games section shows particular data dynamicaly from API",
        preview: "https://youtube-by-react.onrender.com/",
        github: "https://github.com/PARTH-JADAV20/Youtube-by-react",
        image: img4
      },
      {
        title: "Urban Company Clone",
        description: "This is urban company clone website that has some animation features and image slider made with javascript showcasing my skills in html, css and javascript",
        preview: "https://urbancompanybyparth.netlify.app/",
        github: "https://github.com/PARTH-JADAV20/Urban-Company-Project",
        image: img5
      },
      {
        title: "Royal Enfield Clone",
        description: "Implemented same design as royal enfield website that has image slider and image changer with buttons. made using html, css and javascript",
        github: "https://github.com/PARTH-JADAV20/Royal-Enfield-Project",
        preview: "https://royal-enfield-project.vercel.app/",
        image: img6
      }
    ];
  
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Briefcase className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Transforming ideas into digital reality</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 ">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.preview && (
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> Live Preview
                    </a>
                  )}
                  {project.postmanDocs && (
                    <a
                      href={project.postmanDocs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> Documentation
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" /> GitHub
                    </a>
                  )}
                  {project.figma && (
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" /> Figma
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}