import React from 'react';
import { Code2, Globe, Laptop, Palette } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="bg-clip-text bg-gradient-to-r font-bold from-indigo-600 mb-4 text-4xl text-transparent to-purple-600">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Passionate about crafting seamless user experiences and dynamic applications with React.js
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Hello! I am a React.js developer with 6 months of focused training in building efficient, user-friendly, and visually appealing web applications. I am skilled in modern web technologies including React.js, Redux, and Tailwind CSS. I prioritize clean, reusable code and strive to deliver exceptional user experiences.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My approach to development focuses on creating clean, efficient, and maintainable code
              while ensuring an exceptional user experience. I'm constantly learning and staying
              up-to-date with the latest technologies and best practices in web development.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900">5+</h4>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              {/* <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900">50+</h4>
                <p className="text-gray-600">Happy Clients</p>
              </div> */}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="p-6 bg-indigo-50 rounded-xl">
                <Code2 className="text-indigo-600 mb-4" size={32} />
                <h3 className="font-semibold text-gray-900">Web Development</h3>
                <p className="text-gray-600 text-sm">Building dynamic React.js applications</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-xl">
                <Globe className="text-purple-600 mb-4" size={32} />
                <h3 className="font-semibold text-gray-900">API Integration</h3>
                <p className="text-gray-600 text-sm">Implementing robust APIs</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-pink-50 rounded-xl">
                <Palette className="text-pink-600 mb-4" size={32} />
                <h3 className="font-semibold text-gray-900">Web Design</h3>
                <p className="text-gray-600 text-sm">Crafting visually appealing web interfaces</p>
              </div>
              <div className="p-6 bg-blue-50 rounded-xl">
                <Laptop className="text-blue-600 mb-4" size={32} />
                <h3 className="font-semibold text-gray-900">Mobile-First</h3>
                <p className="text-gray-600 text-sm">Designing responsive web applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;