import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Front-end Developer',
    company: 'Cipher Craft™ Pvt. Ltd',
    period: 'July 2024 - Dec 2024 ',
    description: 'Focused on developing scalable, responsive web applications using modern front-end technologies.',
    achievements: [
      'Proficient in React.js, JavaScript, Redux, and IndexedDB.',
      'Built dynamic UI components with HTML, CSS, JavaScript and CSS frameworks.',
      'Gained hands-on experience in Git and GitHub for version control.',
      'Working multiple React.js projects, implementing best coding practices.',
    ],
  },
  // {
  //   title: 'Full Stack Developer',
  //   company: 'Digital Innovations',
  //   period: '2018 - 2020',
  //   description: 'Developed and maintained multiple client projects using React, Node.js, and PostgreSQL.',
  //   achievements: [
  //     'Delivered 20+ successful projects',
  //     'Reduced bug reports by 60%',
  //     'Improved code coverage to 90%',
  //   ],
  // },
  // {
  //   title: 'Frontend Developer',
  //   company: 'Creative Agency',
  //   period: '2016 - 2018',
  //   description: 'Created responsive and interactive web applications for various clients.',
  //   achievements: [
  //     'Built 30+ responsive websites',
  //     'Implemented modern UI/UX practices',
  //     'Optimized website load times',
  //   ],
  // },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          {/* <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2> */}
          <h2 className="bg-clip-text bg-gradient-to-r font-bold from-indigo-600 mb-4 text-4xl text-transparent to-purple-600">Work Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A timeline of my professional journey and key achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                    <Briefcase size={16} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                        <p className="text-indigo-600">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-500">{exp.period}</span>
                    </div>
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;