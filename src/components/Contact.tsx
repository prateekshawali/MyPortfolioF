import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 sm:gap-20 items-start">
          {/* Left side - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl sm:text-6xl font-light text-white mb-12 sm:mb-16"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(139, 92, 246, 0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              CONTACT
            </motion.h2>
            
            <div className="space-y-8 sm:space-y-12">
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-gray-400 text-base sm:text-lg mb-4">Email</h3>
                <motion.a 
                  href="mailto:pratikshawali89@gmail.com" 
                  className="text-white text-lg sm:text-xl hover:text-purple-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  pratikshawali89@gmail.com
                </motion.a>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-gray-400 text-base sm:text-lg mb-4">Location</h3>
                <p className="text-white text-lg sm:text-xl">Bengaluru, Karnataka</p>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-gray-400 text-base sm:text-lg mb-6">Social</h3>
                <div className="space-y-4">
                  <motion.a 
                    href="https://github.com/prateekshawali" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-white hover:text-purple-400 transition-colors text-base sm:text-lg"
                    whileHover={{ x: 5, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    Github <motion.span 
                      className="ml-2"
                      animate={{ rotate: [0, 45, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >↗</motion.span>
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/prateekshawali19/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-white hover:text-purple-400 transition-colors text-base sm:text-lg"
                    whileHover={{ x: 5, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    Linkedin <motion.span 
                      className="ml-2"
                      animate={{ rotate: [0, 45, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >↗</motion.span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right side - Credits */}
          <motion.div 
            className="text-center sm:text-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-400 text-base sm:text-lg mb-2">Designed and Developed</p>
              <p className="text-white text-lg sm:text-xl">by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Prateeksha Wali</span></p>
            </motion.div>
            
            <motion.p 
              className="text-gray-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              © 2025
            </motion.p>
          </motion.div>
        </div>
        
        {/* Central floating orb */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60 blur-sm"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
            rotate: [0, 360]
          }}
          transition={{ 
            scale: { duration: 3, repeat: Infinity },
            opacity: { duration: 2, repeat: Infinity },
            rotate: { duration: 10, repeat: Infinity, ease: "linear" }
          }}
        />
      </div>
      
      {/* Background elements */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-900/10 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      
      {/* Additional floating elements */}
      <motion.div 
        className="absolute top-10 right-10 w-8 h-8 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-sm"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-6 h-6 bg-gradient-to-br from-blue-400/30 to-green-400/30 rounded-full blur-sm"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          y: { duration: 3, repeat: Infinity },
          rotate: { duration: 6, repeat: Infinity, ease: "linear" }
        }}
      />
    </section>
  );
};

export default Contact;