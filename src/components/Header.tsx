import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'ABOUT', href: '#about' },
    { name: 'WORK', href: '#work' },
    { name: 'CONTACT', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Left side - Social icons */}
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.a 
              href="https://github.com/prateekshawali" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={18} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/prateekshawali19/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={18} />
            </motion.a>
          </motion.div>
          
          {/* Center - Email */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a 
              href="mailto:pratikshawali89@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              pratikshawali89@gmail.com
            </motion.a>
          </motion.div>
          
          {/* Right side - Navigation */}
          <motion.nav 
            className="hidden md:flex space-x-8 sm:space-x-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {navigation.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-300 hover:text-white transition-colors text-xs sm:text-sm font-light tracking-wider"
                whileHover={{ 
                  scale: 1.1,
                  color: "#a855f7"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + index * 0.1 
                }}
              >
                {item.name}
              </motion.button>
            ))}
          </motion.nav>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="text-gray-400 hover:text-white"
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <motion.div 
                  className="w-6 h-0.5 bg-current"
                  animate={{ scaleX: [1, 0.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="w-6 h-0.5 bg-current"
                  animate={{ scaleX: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <motion.div 
                  className="w-6 h-0.5 bg-current"
                  animate={{ scaleX: [1, 0.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;