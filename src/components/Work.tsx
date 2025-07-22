import React from 'react';
import { motion } from 'framer-motion';

const Work = () => {
  const projects = [
    {
      id: '01',
      title: 'CarbonWise',
      category: 'Environmental Web App',
      description: 'Website that helps calculate carbon footprint, suggests emission reduction ways, and helps purchase carbon credits for a greener future.',
      tools: ['MongoDB','Express.js','React.js','Node.js'],
      image: 'https://balancedearth.org/wp-content/webp-express/webp-images/uploads/2022/11/Reduce-Carbon-Footprint.jpg.webp'
    },
    {
      id: '02',
      title: 'BACKENDCONTACT',
      category: 'Backend API Development',
      description: 'Backend application for managing contacts, providing comprehensive APIs to create, read, update, and delete contact information.',
      tools: ['Node.js', 'Express.js', 'MongoDB', 'API Design'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8-dy25hJq8TrwnltWnQbYRUGdf2YKVy8YKw&s'
    },
    {
      id: '03',
      title: 'SKINCURE',
      category: 'Healthcare & AI',
      description: 'Advanced website for skin disease recognition with customized chatbot for friendly conversation and providing medical solutions.',
      tools: ['Machine Learning', 'Chatbot', 'Healthcare', 'Recognition APIs'],
      image: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/derm_-_hero_image_2_1.width-1600.format-webp.webp'
    },
    {
      id: '04',
      title: 'PAWSIE',
      category: 'Social Impact Platform',
      description: 'Comprehensive website focused on rescuing stray and abandoned dogs, offering rehabilitation services and facilitating adoption.',
      tools: ['HTML', 'CSS','Bootstrap'],
      image: 'https://t3.ftcdn.net/jpg/05/74/10/42/240_F_574104298_h1KToZ3sdIuMhaFHvyChHDdODMy1YB27.jpg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="work" className="py-16 sm:py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="mb-12 sm:mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-6xl font-light text-white mb-8">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Work</span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="group relative"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* 3D Card Container */}
              <div className="relative perspective-1000">
                {/* Project Image with 3D effect */}
                <motion.div 
                  className="relative overflow-hidden rounded-2xl mb-6 sm:mb-8 aspect-video shadow-2xl"
                  whileHover={{ 
                    rotateX: 5,
                    rotateY: 5,
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Gradient overlay with animation */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                    whileHover={{ background: "linear-gradient(to top, rgba(139, 92, 246, 0.6), transparent, transparent)" }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Floating project number with glow */}
                  <motion.div 
                    className="absolute top-4 sm:top-6 left-4 sm:left-6 text-4xl sm:text-6xl font-light text-white/30"
                    whileHover={{ 
                      color: "rgba(139, 92, 246, 0.8)",
                      scale: 1.1,
                      textShadow: "0 0 20px rgba(139, 92, 246, 0.8)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.id}
                  </motion.div>
                  
                  {/* Animated border glow */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl border-2 border-transparent"
                    whileHover={{ borderColor: "rgba(139, 92, 246, 0.5)" }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Floating particles on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400 rounded-full"
                        style={{
                          top: `${20 + i * 15}%`,
                          right: `${10 + i * 5}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
                
                {/* Project Info with 3D lift effect */}
                <motion.div 
                  className="space-y-4"
                  whileHover={{ z: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <motion.h3 
                      className="text-2xl sm:text-3xl font-light text-white mb-2"
                      whileHover={{ color: "#c084fc" }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p 
                      className="text-purple-300 text-base sm:text-lg"
                      whileHover={{ color: "#f9a8d4" }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.category}
                    </motion.p>
                  </div>
                  
                  <motion.p 
                    className="text-gray-400 text-base sm:text-lg leading-relaxed"
                    whileHover={{ color: "#d1d5db" }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  {/* Animated tech stack tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool, toolIndex) => (
                      <motion.span 
                        key={toolIndex} 
                        className="px-3 sm:px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-xs sm:text-sm border border-gray-700"
                        whileHover={{ 
                          backgroundColor: "rgba(139, 92, 246, 0.3)",
                          borderColor: "rgba(139, 92, 246, 0.5)",
                          color: "#ffffff",
                          scale: 1.05
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.3,
                          delay: toolIndex * 0.1
                        }}
                        viewport={{ once: true }}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              {/* Glowing background effect */}
              <motion.div 
                className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl blur-xl scale-110"
                whileHover={{ 
                  opacity: 1,
                  scale: 1.15,
                  background: "radial-gradient(circle, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))"
                }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Enhanced floating elements with 3D movement */}
      <motion.div 
        className="absolute top-1/4 right-5 sm:right-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-5 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        animate={{ 
          y: [0, 20, 0],
          x: [0, -15, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-lg"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </section>
  );
};

export default Work;