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
                    <div className="flex justify-between items-center">
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
                      </motion.div>
                    </div>
                    
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

    </Section>
  );
};