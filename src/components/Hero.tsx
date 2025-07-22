import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const lines = [
    "I’m a computer science student at JSS Academy of Technical Education, Bengaluru.",
    "Driven by curiosity, I always try to explore and learn new skills.",
     "I enjoy solving real-world problems through efficient code",
    "Building innovative solutions through modern web technologies."
  ];

  useEffect(() => {
    const currentText = lines[currentLine];
    let index = 0;
    setDisplayText('');
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (index < currentText.length) {
        setDisplayText(currentText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
        
        // Move to next line after a pause
        setTimeout(() => {
          setCurrentLine((prev) => (prev + 1) % lines.length);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentLine]);

  // Scroll handler for line changes
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const newLine = Math.floor(scrollY / (windowHeight * 0.3)) % lines.length;
      if (newLine !== currentLine) {
        setCurrentLine(newLine);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentLine]);

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-black overflow-hidden">
      {/* Animated background particles */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Floating 3D Female Character */}
      <motion.div 
        className="absolute left-1/4 top-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:left-1/4 md:left-1/3 sm:left-1/2"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        <div className="relative">
          {/* Main character sphere */}
          <motion.div 
            className="w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-purple-400 via-pink-300 to-orange-300 relative overflow-hidden shadow-2xl"
            animate={{ 
              y: [0, -10, 0],
              rotateY: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Face elements */}
            <motion.div 
              className="absolute top-1/3 left-1/2 transform -translate-x-1/2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* Eyes */}
              <div className="flex space-x-6 sm:space-x-8 mb-4">
                <motion.div 
                  className="w-6 h-2 sm:w-8 sm:h-3 bg-black rounded-full"
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div 
                  className="w-6 h-2 sm:w-8 sm:h-3 bg-black rounded-full"
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.1 }}
                />
              </div>
              {/* Smile */}
              <motion.div 
                className="w-12 h-6 sm:w-16 sm:h-8 border-b-4 border-black rounded-full mx-auto"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            
            {/* Hair/Cap */}
            <motion.div 
              className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 w-24 h-12 sm:w-32 sm:h-16 bg-gradient-to-r from-gray-300 to-pink-200 rounded-full"
              animate={{ rotateZ: [0, 2, 0, -2, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Laptop */}
            <motion.div 
              className="absolute bottom-12 sm:bottom-16 left-1/2 transform -translate-x-1/2"
              animate={{ rotateX: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-18 h-12 sm:w-24 sm:h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg relative">
                {/* Screen */}
                <motion.div 
                  className="w-16 h-9 sm:w-20 sm:h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-sm mx-auto mt-1"
                  animate={{ opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                {/* Keyboard */}
                <div className="w-16 h-1.5 sm:w-20 sm:h-2 bg-gray-400 rounded-sm mx-auto mt-1"></div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Glow effect */}
          <motion.div 
            className="absolute inset-0 w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center sm:text-right max-w-2xl ml-auto mr-4 sm:mr-32 px-4"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="mb-8">
          <motion.h2 
            className="text-xl sm:text-2xl font-light text-purple-300 mb-4 tracking-wider"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            ABOUT ME
          </motion.h2>
          
          <div className="text-2xl sm:text-5xl font-light leading-tight mb-8 min-h-[120px] sm:min-h-[200px]">
            <motion.span
              key={currentLine}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
            >
              {displayText}
            </motion.span>
            <motion.span
              animate={{ opacity: isTyping ? [1, 0, 1] : 0 }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-purple-400"
            >
              |
            </motion.span>
          </div>
        </div>
        
        {/* Resume button */}
        <motion.div 
          className="flex justify-center sm:justify-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button 
            className="flex items-center space-x-2 text-white border border-gray-600 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm tracking-wider">RESUME</span>
            <motion.div 
              className="w-2 h-2 bg-purple-400 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Floating orb */}
      <motion.div 
        className="absolute bottom-16 sm:bottom-32 right-16 sm:right-32 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-sm opacity-60"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero;