import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-400">Feel free to reach out for collaborations or just a friendly hello</p>
            <div className="flex space-x-4 mt-4">
              <a
                className="hover:text-indigo-400 transition-colors"
                onClick={() => {
                  window.open('https://github.com/DishKhant', '_blank');
                }}
              >
                <Github size={20} />
              </a>
              <a
                className="hover:text-indigo-400 transition-colors"
                onClick={() => {
                  window.open('https://www.linkedin.com/in/dish-khant-218335245/', '_blank');
                }}
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to stay updated with my latest projects and articles</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-grow"
              />
              <button className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dish khant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;