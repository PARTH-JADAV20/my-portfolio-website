import { ArrowRight } from 'lucide-react';
import img1 from '../images/me3.png';

export default function About({ theme }) {
  const t = theme || {};
  return (
    <section id="about" className={`pt-32 pb-20 ${t.bg || 'bg-muted-orange-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <div className={`inline-block mb-4 px-4 py-1 ${t.pillBg || 'bg-muted-orange-200'} rounded-full border ${t.pillBorder || 'border-muted-orange-300'}`}>
              <p className={`${t.pillText || 'text-muted-orange-700'} font-medium text-sm`}>FULLSTACK DEVELOPER</p>
            </div>
            <h2 className="text-5xl font-semibold text-text-gray-dark mb-6 leading-tight">
              Building Digital
              <span className={`block ${t.accentText || 'text-muted-orange-600'}`}>Experiences</span>
            </h2>
            <p className="text-lg text-text-gray mb-8 leading-relaxed">
              Hi, I'm Parth Jadav. A passionate web developer with a knack for creating dynamic and user-friendly applications. I specialize in React and have hands-on experience in building clones of popular platforms like YouTube, Spotify, and Urban Company. My projects showcase my ability to bring ideas to life with modern UI/UX design using Tailwind CSS and Figma.
              <br></br>
              I also have a solid foundation in Node.js, Express, and MongoDB, which allows me to build robust and scalable back-end solutions. Currently, I'm diving deep into C++ to expand my programming knowledge and enhance my problem-solving skills.
              <br></br>
              I'm always eager to learn and take on new challenges. Let's build something amazing together!
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className={`group ${t.primaryBg || 'bg-muted-orange-500'} text-white px-6 py-3 rounded-full ${t.primaryHover || 'hover:bg-muted-orange-600'} transition-colors flex items-center border ${t.primaryBorder || 'border-muted-orange-600'}`}
              >
                Get in touch
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className={`group border-2 ${t.secondaryBorder || 'border-muted-orange-300'} px-6 py-3 rounded-full ${t.secondaryHoverBorder || 'hover:border-muted-orange-500'} ${t.secondaryHoverText || 'hover:text-muted-orange-600'} ${t.secondaryHoverBg || 'hover:bg-muted-orange-100'} transition-all text-text-gray`}
              >
                View Projects
              </a>
              <a
                href="/Parth Jadav Resume.pdf"
                download
                className="group border-2 border-muted-orange-300 px-6 py-3 rounded-full hover:border-muted-orange-500 hover:text-muted-orange-600 hover:bg-muted-orange-100 transition-all text-text-gray"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col items-center space-y-6">
            <div className="relative w-64 h-80">
              <div className={`absolute -inset-4 ${t.ringBg || 'bg-muted-orange-200'} rounded-full border-2 ${t.ringBorder || 'border-muted-orange-300'}`}></div>
              <img
                src={img1}
                alt="Parth Jadav"
                className={`relative w-64 h-80 object-cover rounded-full border-4 ${t.avatarBorder || 'border-muted-orange-300'} transform hover:-translate-y-1 transition-transform duration-300`}
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-text-gray-dark">Parth Jadav</h3>
              <p className="text-text-gray">Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}