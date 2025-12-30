import { User, Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <User className="w-12 h-12 text-muted-red-600 mx-auto mb-4" />
          <h2 className="text-4xl font-semibold text-text-gray-dark mb-4">Get in Touch</h2>
          <p className="text-lg text-text-gray">Let's discuss your next project</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="https://github.com/PARTH-JADAV20"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center px-6 py-3 bg-white rounded-full border-2 border-muted-red-200 hover:border-muted-red-400 hover:bg-muted-red-100 transition-all hover:-translate-y-1 w-full sm:w-auto"
          >
            <Github className="w-6 h-6 mr-3 text-muted-red-600" />
            <span className="text-text-gray group-hover:text-muted-red-700 transition-colors font-medium">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jadav-parth/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center px-6 py-3 bg-white rounded-full border-2 border-muted-red-200 hover:border-muted-red-400 hover:bg-muted-red-100 transition-all hover:-translate-y-1 w-full sm:w-auto"
          >
            <Linkedin className="w-6 h-6 mr-3 text-muted-red-600" />
            <span className="text-text-gray group-hover:text-muted-red-700 transition-colors font-medium">LinkedIn</span>
          </a>
          <a
            href="mailto:parthjadav.cg@gmail.com"
            title='parthjadav.cg@gmail.com'
            className="group flex items-center px-6 py-3 bg-white rounded-full border-2 border-muted-red-200 hover:border-muted-red-400 hover:bg-muted-red-100 transition-all hover:-translate-y-1 w-full sm:w-auto"
          >
            <Mail className="w-6 h-6 mr-3 text-muted-red-600" />
            <span className="text-text-gray group-hover:text-muted-red-700 transition-colors font-medium">Email Me</span>
          </a>
        </div>
      </div>
    </section>
  );
}
