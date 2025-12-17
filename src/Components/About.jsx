import { ArrowRight } from 'lucide-react';
import img1 from '../images/me2.jpg';

export default function About() {
  return (
    <section id="about" className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Floating Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 left-1/4 w-72 h-72 bg-blue-300 opacity-30 blur-3xl rounded-full animate-blobs"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300 opacity-20 blur-3xl rounded-full animate-blobs animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-pink-300 opacity-20 blur-3xl rounded-full animate-blobs animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <div className="inline-block mb-4 px-4 py-1 bg-blue-100 dark:bg-blue-900 rounded-full">
              <p className="text-blue-600 dark:text-blue-400 font-medium">ASPIRING FULLSTACK DEVELOPER</p>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Building Digital
              <span className="block text-blue-600 dark:text-blue-400">Experiences</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Hi, I'm Parth Jadav. A passionate web developer with a knack for creating dynamic and user-friendly applications. I specialize in React and have hands-on experience in building clones of popular platforms like YouTube, Spotify, and Urban Company. My projects showcase my ability to bring ideas to life with modern UI/UX design using Tailwind CSS and Figma.
              <br></br>
              I also have a solid foundation in Node.js, Express, and MongoDB, which allows me to build robust and scalable back-end solutions. Currently, I'm diving deep into C++ to expand my programming knowledge and enhance my problem-solving skills.
              <br></br>
              I'm always eager to learn and take on new challenges. Let's build something amazing together!
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="group bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all flex items-center"
              >
                Get in touch
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="group border-2 border-gray-300 dark:border-gray-600 px-6 py-3 rounded-full hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:text-white"
              >
                View Projects
              </a>
              <a
                href="/Parth Jadav Resume.pdf"
                download
                className="group border-2 border-gray-300 dark:border-gray-600 px-6 py-3 rounded-full hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors dark:text-white ml-4"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col items-center space-y-6">
            <div className="relative w-64 h-80">
              <div className="absolute -inset-4 bg-blue-100 dark:bg-blue-900/50 transform rounded-full"></div>
              <img
                src={img1}
                alt="Parth Jadav"
                className="relative w-64 h-80 object-cover rounded-full shadow-xl transform hover:rotate-3 transition-transform duration-300 grayscale"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Parth Jadav</h3>
              <p className="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes blobs {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.1);
          }
        }
        .animate-blobs {
          animation: blobs 10s infinite ease-in-out alternate;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}