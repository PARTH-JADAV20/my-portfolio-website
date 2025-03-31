import { Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Skills() {
    const skills = [
      "React", "Node.js", "JavaScript", "HTML",
      "CSS", "C++", "C-Language", "MongoDB",
      "Git & GitHub", "API Handling", "TailwindCSS", "Figma"
    ];

    return (
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Cpu className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Tools and technologies I work with</p>
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
                whileHover={{ rotate: 3, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="text-gray-800 dark:text-gray-200 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
}
