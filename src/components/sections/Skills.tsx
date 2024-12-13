import { Code, Database, GitBranch, Layout, Box } from 'lucide-react';

const skills = [
  { name: 'React JS', icon: <Code className="text-indigo-600" size={32} /> },
  { name: 'JavaScript', icon: <Code className="text-green-600" size={32} /> }, // JavaScript typically uses yellow/golden tones
  { name: 'Redux', icon: <Box className="text-purple-600" size={32} /> },
  { name: 'Redux toolkit', icon: <Box className="text-purple-700" size={32} /> }, // Use purple for Redux Toolkit
  { name: 'IndexedDB', icon: <Database className="text-black" size={32} /> }, // IndexedDB uses database icon, change color to black
  { name: 'JQuery', icon: <Code className="text-blue-600" size={32} /> }, // jQuery commonly uses blue tones
  { name: 'Git', icon: <GitBranch className="text-gray-600" size={32} /> }, // Git typically uses a neutral/gray tone
  { name: 'HTML', icon: <Layout className="text-orange-600" size={32} /> },
  { name: 'CSS', icon: <Layout className="text-blue-500" size={32} /> }, // Blue is a standard for CSS
  { name: 'Bootstrap', icon: <Layout className="text-primary" size={32} /> }, // Bootstrap's primary color is often red
  { name: 'Tailwind CSS', icon: <Layout className="text-blue-500" size={32} /> }, // Tailwind is often associated with teal/turquoise
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;