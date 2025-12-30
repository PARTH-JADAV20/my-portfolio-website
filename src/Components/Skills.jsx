import { Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills() {
    const skills = [
      "React", "Node.js", "JavaScript", "Next.js",
       "C++", "C-Language", "MongoDB", "SQL",
      "Git & GitHub", "API Handling", "Express.js", "TailwindCSS", 
      "Figma", "CSS", "HTML",  
    ];

    return (
      <section id="skills" className="py-20 bg-muted-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Cpu className="w-12 h-12 text-muted-yellow-600 mx-auto mb-4" />
            <h2 className="text-4xl font-semibold text-text-gray-dark mb-4">Technology Stack</h2>
            <p className="text-lg text-text-gray">Tools and technologies I work with</p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-flat p-6 text-center border-2 border-muted-yellow-200 hover:border-muted-yellow-400 transition-all duration-300"
              >
                <span className="text-text-gray-dark font-medium group-hover:text-muted-yellow-700 transition-colors">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
}
