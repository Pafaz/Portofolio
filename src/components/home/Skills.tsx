import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/Section';
import { Code, Database, Palette, Wrench, Zap, Target } from 'lucide-react';
import skillsData from '../../data/skills.json';
import { Skill } from '../../types';

const categoryConfig = {
  frontend: {
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500',
    icon: Code,
    title: 'Frontend Development',
    description: 'Creating beautiful, responsive user interfaces'
  },
  backend: {
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500',
    icon: Database,
    title: 'Backend Development',
    description: 'Building robust server-side applications'
  },
  tools: {
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-500',
    icon: Wrench,
    title: 'Tools & DevOps',
    description: 'Streamlining development workflows'
  },
  design: {
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500',
    icon: Palette,
    title: 'Design & UX',
    description: 'Crafting intuitive user experiences'
  },
};

export const Skills: React.FC = () => {
  const groupedSkills = skillsData.reduce((acc: Record<string, Skill[]>, skill: Skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

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

  const categoryVariants = {
    hidden: { y: 60, opacity: 0 },
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

  const skillVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200
      }
    }
  };

  return (
    <Section 
      title="Skills & Expertise" 
      subtitle="Mastering the art of modern web development with cutting-edge technologies and best practices. Every skill represents countless hours of learning and real-world application."
      className="bg-gray-50 dark:bg-gray-900"
    >
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {Object.entries(groupedSkills).map(([category, skills], categoryIndex) => {
          const config = categoryConfig[category as keyof typeof categoryConfig];
          const IconComponent = config.icon;
          
          return (
            <motion.div
              key={category}
              className="space-y-6"
              variants={categoryVariants}
            >
              {/* Category Header */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${config.color} flex items-center justify-center mb-4 mx-auto`}
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">
                    {config.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    {config.description}
                  </p>
                </div>
              </motion.div>

              {/* Skills List */}
              <div className="space-y-4">
                {skills.map((skill: Skill, skillIndex: number) => (
                  <motion.div
                    key={skill.name}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
                    variants={skillVariants}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                      <motion.div
                        className="flex items-center space-x-1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: (categoryIndex * 0.2) + (skillIndex * 0.05) + 0.3,
                          duration: 0.3
                        }}
                        viewport={{ once: true }}
                      >
                        <Target className="h-3 w-3 text-gray-500" />
                        <span className="text-xs font-bold text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </motion.div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-3 rounded-full bg-gradient-to-r ${config.color} relative overflow-hidden`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.2, 
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.05) + 0.5,
                            ease: "easeOut"
                          }}
                          viewport={{ once: true }}
                        >
                          {/* Shimmer Effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                              delay: (categoryIndex * 0.2) + (skillIndex * 0.05) + 1.5
                            }}
                          />
                        </motion.div>
                      </div>
                      
                      {/* Skill Level Indicator */}
                      <motion.div
                        className="absolute -top-8 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 px-2 py-1 rounded text-xs font-bold"
                        style={{ left: `${Math.max(0, Math.min(skill.level - 5, 90))}%` }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: (categoryIndex * 0.2) + (skillIndex * 0.05) + 1.2,
                          duration: 0.3
                        }}
                        viewport={{ once: true }}
                      >
                        {skill.level}%
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-800 dark:border-t-gray-200"></div>
                      </motion.div>
                    </div>

                    {/* Proficiency Label */}
                    <motion.div
                      className="mt-2 text-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ 
                        delay: (categoryIndex * 0.2) + (skillIndex * 0.05) + 1.5,
                        duration: 0.3
                      }}
                      viewport={{ once: true }}
                    >
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        skill.level >= 90 ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                        skill.level >= 75 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                        skill.level >= 60 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                      }`}>
                        {skill.level >= 90 ? 'Expert' :
                         skill.level >= 75 ? 'Advanced' :
                         skill.level >= 60 ? 'Intermediate' :
                         'Learning'}
                      </span>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Skills Summary */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 border border-primary-200 dark:border-gray-600">
          <motion.div
            className="flex items-center justify-center mb-4"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Zap className="h-8 w-8 text-primary-600 dark:text-primary-400" />
          </motion.div>
          
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Continuous Learning & Growth
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Technology evolves rapidly, and so do I. I'm committed to staying at the forefront of web development, 
            constantly learning new technologies and refining my craft to deliver exceptional results.
          </p>
        </div>
      </motion.div>
    </Section>
  );
};