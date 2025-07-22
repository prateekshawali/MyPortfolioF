import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Git', 'Java', 
    'Object-Oriented Programming', 'SQL', 'Computer Networks', 
    'Node.js', 'Express.js'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 sm:py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-6xl font-light text-white mb-12 sm:mb-20">
            MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">TECH STACK</span>
          </h2>
          
          {/* Skills Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(139, 92, 246, 0.5)",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-white font-medium text-center text-xs sm:text-sm leading-tight"
                  whileHover={{ color: "#c084fc" }}
                  transition={{ duration: 0.3 }}
                >
                  {tech}
                </motion.div>
                
                {/* Hover glow effect */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-400/20 to-pink-400/20 opacity-0 blur-xl -z-10"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Floating particles on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-purple-400 rounded-full"
                      style={{
                        top: `${20 + i * 20}%`,
                        left: `${20 + i * 30}%`,
                      }}
                      animate={{
                        y: [0, -5, 0],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Central animated element */}
          <motion.div 
            className="mt-12 sm:mt-16 flex justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center relative z-10"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
            >
              <motion.div 
                className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-full"
                animate={{ 
                  y: [0, -5, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background floating elements */}
      <motion.div 
        className="absolute top-20 left-10 sm:left-20 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"
        animate={{ 
          y: [0, -40, 0],
          x: [0, 20, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"
        animate={{ 
          y: [0, 30, 0],
          x: [0, -15, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      />
      <motion.div 
        className="absolute top-1/2 left-5 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-xl"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 360]
        }}
        transition={{ 
          y: { duration: 3, repeat: Infinity },
          rotate: { duration: 8, repeat: Infinity, ease: "linear" }
        }}
      />
    </section>
  );
};

export default TechStack;