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
    <section id="education" className="py-20 bg-muted-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <GraduationCap className="w-12 h-12 text-muted-purple-600 mx-auto mb-4" />
          <h2 className="text-4xl font-semibold text-text-gray-dark mb-4">Education</h2>
          <p className="text-lg text-text-gray">My academic journey</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group bg-white rounded-flat-lg p-6 border-2 border-muted-purple-200 hover:border-muted-purple-400 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold text-text-gray-dark mb-2">{edu.institution}</h3>
              <p className="text-text-gray mb-2">{edu.degree}</p>
              <p className="text-muted-purple-600 text-sm mb-4 font-medium">{edu.year}</p>
              <p className="text-text-gray">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}