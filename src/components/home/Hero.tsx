import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, Code, Zap } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      role="banner"
      aria-label="Hero section introducing the developer"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20" aria-hidden="true">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-300 to-primary-300 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-secondary-300 to-accent-300 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-20 left-20 text-primary-400 dark:text-primary-300"
          variants={floatingVariants}
          animate="animate"
        >
          <Code className="h-8 w-8 opacity-60" />
        </motion.div>
        <motion.div
          className="absolute top-32 right-32 text-secondary-400 dark:text-secondary-300"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        >
          <Sparkles className="h-6 w-6 opacity-60" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-32 text-accent-400 dark:text-accent-300"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        >
          <Zap className="h-7 w-7 opacity-60" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }}
            >
              <span className="block">Crafting Digital</span>
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent block">
                Experiences
              </span>
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.p
              className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              I'm <span className="font-semibold text-primary-600 dark:text-primary-400">Paundra Afif Zamroni</span>, 
              a passionate full-stack developer who transforms ideas into 
              <span className="font-semibold text-secondary-600 dark:text-secondary-400"> beautiful</span>, 
              <span className="font-semibold text-accent-600 dark:text-accent-400"> functional</span>, 
              and <span className="font-semibold text-primary-600 dark:text-primary-400">accessible</span> web experiences.
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button 
                onClick={scrollToProjects} 
                size="lg"
                className="group relative overflow-hidden"
                aria-label="View my portfolio projects"
              >
                <span className="relative z-10">Explore My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-700 to-secondary-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
              <a href="/paundra-afif-resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                size="lg" 
                icon={Download}
                className="group"
                aria-label="Download my resume"
              >
                <span>Download Resume</span>
                <motion.div
                  className="ml-2"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Download className="h-5 w-5" />
                </motion.div>
              </Button>
                  </a>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.div
              className="flex items-center justify-center space-x-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {[
                { 
                  icon: Github, 
                  href: 'https://github.com/Pafaz', 
                  label: 'GitHub Profile',
                  color: 'hover:bg-gray-800 hover:text-white'
                },
                { 
                  icon: Linkedin, 
                  href: 'https://linkedin.com/in/paundra-afif-zamroni-8603b4341', 
                  label: 'LinkedIn Profile',
                  color: 'hover:bg-blue-600 hover:text-white'
                },
                { 
                  icon: Mail, 
                  href: 'mailto:paundra.afif@gmail.com', 
                  label: 'Send Email',
                  color: 'hover:bg-red-500 hover:text-white'
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-gray-600 dark:text-gray-300 transition-all duration-300 ${social.color} focus:outline-none focus:ring-4 focus:ring-primary-500 focus:ring-opacity-50`}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -8,
                    rotate: [0, -5, 5, 0]
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.4 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="h-7 w-7" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-3/4 ml-72 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <motion.button
          onClick={scrollToProjects}
          className="p-3 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus:ring-4 focus:ring-primary-500 focus:ring-opacity-50 rounded-full"
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          aria-label="Scroll down to view projects"
        >
          <ArrowDown className="h-8 w-8" />
        </motion.button>
        <motion.p
          className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-medium"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </section>
  );
};