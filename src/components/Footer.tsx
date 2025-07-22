import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Prateeksha Wali</h3>
            <p className="text-gray-400 mb-4">
              Information Science Student passionate about web development 
              and creating innovative solutions through technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/prateekshawali" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/prateeksha-wali-7b1b7a2a0" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:prateekshawali8@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#work" className="text-gray-400 hover:text-white transition-colors">Work</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Skills</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Java & JavaScript</span></li>
              <li><span className="text-gray-400">HTML, CSS & React</span></li>
              <li><span className="text-gray-400">Node.js & Express.js</span></li>
              <li><span className="text-gray-400">Data Structures & Algorithms</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> by Prateeksha Wali
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025  Prateeksha Wali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;