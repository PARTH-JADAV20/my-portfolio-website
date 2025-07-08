import { Moon, Sun, Menu, X, User, Mail, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <User className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Let's discuss your next project</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
          <a
            href="https://github.com/PARTH-JADAV20"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center px-6 py-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 w-full sm:w-auto"
          >
            <Github className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jadav-parth/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center px-6 py-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 w-full sm:w-auto"
          >
            <Linkedin className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">LinkedIn</span>
          </a>
          <a
            href="mailto:parthjadav.cg@gmail.com"
            title='parthjadav.cg@gmail.com'
            className="group flex items-center px-6 py-3 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 w-full sm:w-auto"
          >
            <Mail className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
            <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Email Me</span>
          </a>
        </div>
      </div>
    </section>
  );
}
