import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const timelineItems = [
    {
      year: "2020",
      title: "High School Graduate",
      institution: "SBR Public School, Gulbarga",
      details: "10th: 96.96% | 12th: 94.5%",
      description: "Completed higher secondary education with excellent academic performance, which sparked interest in programming and technology.",
      side: "left"
    },
    {
      year: "2022",
      title: "Information Science Student",
      institution: "JSS Academy of Technical Education",
      details: "CGPA-8.95",
      description: "Currently pursuing Bachelor of Engineering in Information Science. Passionate about web development and exploring dynamic websites while continuously improving problem-solving approach.",
      side: "right"
    },
    {
      year: "NOW",
      title: "Web Developer Intern",
      institution: "Sasken Technologies",
      details: "Working on BrainBox Project",
      description: "Working as a Web Developer Intern at Sasken Technologies, gaining hands-on experience in real-world projects. Actively working on various web development projects, exploring Data Structures and Algorithms, and participating in competitive programming.",
      side: "left"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-16 sm:py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-6xl font-light text-white mb-8">
            My career & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">experience</span>
          </h2>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-purple-500 to-pink-500"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
          
          {/* Timeline items */}
          <motion.div 
            className="space-y-16 sm:space-y-32"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {timelineItems.map((item, index) => (
              <motion.div 
                key={index}
                className="flex flex-col sm:flex-row items-center"
                variants={itemVariants}
              >
                {/* Left content */}
                <div className={`w-full sm:w-1/2 ${item.side === 'left' ? 'sm:pr-16 sm:text-right' : 'sm:pl-16 order-3 sm:order-1'} mb-4 sm:mb-0`}>
                  {item.side === 'left' ? (
                    <>
                      <motion.h3 
                        className="text-xl sm:text-3xl font-light text-white mb-2"
                        whileHover={{ scale: 1.05, color: "#a855f7" }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.title}
                      </motion.h3>
                      <p className="text-purple-300 text-base sm:text-lg">{item.institution}</p>
                      {item.details && <p className="text-gray-500 text-sm mt-2">{item.details}</p>}
                    </>
                  ) : (
                    <motion.p 
                      className="text-gray-400 text-base sm:text-lg leading-relaxed"
                      whileHover={{ color: "#d1d5db" }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.description}
                    </motion.p>
                  )}
                </div>
                
                {/* Timeline dot */}
                <motion.div 
                  className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg sm:text-2xl font-light relative z-10 order-2"
                  whileHover={{ 
                    scale: 1.2, 
                    boxShadow: "0 0 30px rgba(139, 92, 246, 0.8)",
                    rotate: 360 
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {item.year}
                </motion.div>
                
                {/* Right content */}
                <div className={`w-full sm:w-1/2 ${item.side === 'right' ? 'sm:pr-16 sm:text-right order-1 sm:order-3' : 'sm:pl-16 order-3'} mt-4 sm:mt-0`}>
                  {item.side === 'right' ? (
                    <>
                      <motion.h3 
                        className="text-xl sm:text-3xl font-light text-white mb-2"
                        whileHover={{ scale: 1.05, color: "#a855f7" }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.title}
                      </motion.h3>
                      <p className="text-purple-300 text-base sm:text-lg">{item.institution}</p>
                      {item.details && <p className="text-gray-500 text-sm mt-2">{item.details}</p>}
                    </>
                  ) : (
                    <motion.p 
                      className="text-gray-400 text-base sm:text-lg leading-relaxed"
                      whileHover={{ color: "#d1d5db" }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.description}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Timeline end dot */}
          <motion.div 
            className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
      
      {/* Floating orbs */}
      <motion.div 
        className="absolute top-20 right-10 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 sm:left-20 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        animate={{ 
          y: [0, 20, 0],
          x: [0, 10, 0],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
    </section>
  );
};

export default About;