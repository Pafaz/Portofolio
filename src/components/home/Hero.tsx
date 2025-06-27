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
    <section className="h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none">
        <motion.div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-accent-300 to-primary-300 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-secondary-300 to-accent-300 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div className="absolute top-16 left-8 text-primary-400 dark:text-primary-300" variants={floatingVariants} animate="animate">
          <Code className="h-6 w-6 opacity-60" />
        </motion.div>
        <motion.div className="absolute top-28 right-10 text-secondary-400 dark:text-secondary-300" variants={floatingVariants} animate="animate" transition={{ delay: 2 }}>
          <Sparkles className="h-5 w-5 opacity-60" />
        </motion.div>
        <motion.div className="absolute bottom-24 left-10 text-accent-400 dark:text-accent-300" variants={floatingVariants} animate="animate" transition={{ delay: 4 }}>
          <Zap className="h-5 w-5 opacity-60" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">

          {/* Title */}
          <motion.div variants={itemVariants}>
            <motion.h1 className="text-3xl sm:text-5xl pt-6 font-bold text-gray-900 dark:text-white mb-4 leading-snug">
              <span className="block">Crafting Digital</span>
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent block">Experiences</span>
            </motion.h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <motion.p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
              I'm <span className="font-semibold text-primary-600 dark:text-primary-400">Paundra Afif Zamroni</span>, a passionate full-stack developer who transforms ideas into 
              <span className="font-semibold text-secondary-600 dark:text-secondary-400"> beautiful</span>, 
              <span className="font-semibold text-accent-600 dark:text-accent-400"> functional</span>, and 
              <span className="font-semibold text-primary-600 dark:text-primary-400"> accessible</span> web experiences.
            </motion.p>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16">
              <Button onClick={scrollToProjects} size="lg" className="group">
                <span className="relative z-10 text-xs sm:text-xs lg:text-sm md:text-base">Explore My Work</span>
              </Button>
              <a href="/paundra-afif-resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="group px-4 py-2 text-xs sm:text-xs lg:text-sm md:text-base" icon={Download}>
                  <span>Download Resume</span>
                  <motion.div className="ml-2" animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    <Download className="h-4 w-4" />
                  </motion.div>
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="mb-10 sm:mb-16">
            <div className="flex justify-center flex-wrap gap-4 sm:gap-6">
              {[
                { icon: Github, href: 'https://github.com/Pafaz', label: 'GitHub', color: 'hover:bg-gray-800' },
                { icon: Linkedin, href: 'https://linkedin.com/in/paundra-afif-zamroni-8603b4341', label: 'LinkedIn', color: 'hover:bg-blue-600' },
                { icon: Mail, href: 'mailto:paundra.afif@gmail.com', label: 'Email', color: 'hover:bg-red-500' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md text-gray-600 dark:text-gray-300 transition ${social.color} focus:outline-none focus:ring-4 focus:ring-primary-500 focus:ring-opacity-50`}
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div className="flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.6 }}>
            <motion.button
              onClick={scrollToProjects}
              className="p-2 sm:p-3 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6" />
            </motion.button>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Scroll to explore</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
