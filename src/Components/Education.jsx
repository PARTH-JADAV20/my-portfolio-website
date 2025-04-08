import { GraduationCap } from 'lucide-react';


export default function Education() {
  const education = [
      {
        institution: "Rai University Ahmedabad",
        degree: "Bachelor of Technology in Computer Science and Engineering",
        year: "Current CGPA :- 9.81",
        description: "Relevant coursework: Web Development.",
      },
      {
        institution: "Kendriya Vidyalaya Dhrangadhra",
        degree: "Higher Secondary Education",
        year: "2021 - 2023",
        description: "Focus on Science and Mathematics. With Some Coding experience in Python.",
      },
    ];

  
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <GraduationCap className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">My academic journey</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{edu.institution}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.degree}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{edu.year}</p>
              <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}