import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Code2, Heart, Coffee, Award, Users, Lightbulb, Target } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Section } from '../components/ui/Section';

const stats = [
  { label: 'Years of Experience', value: '2+', icon: Calendar, color: 'from-blue-500 to-cyan-500' },
  { label: 'Projects Completed', value: '5+', icon: Code2, color: 'from-green-500 to-emerald-500' },
  { label: 'Happy Clients', value: '5+', icon: Heart, color: 'from-red-500 to-pink-500' },
  { label: 'Cups of Coffee', value: '200+', icon: Coffee, color: 'from-yellow-500 to-orange-500' },
];

const timeline = [
  {
    year: '2025 - Present',
    title: 'Back-End Developer',
    company: 'PT Humma Teknologi Indonesia',
    description: 'Leading development of cutting-edge web applications using React, TypeScript, and Node.js. Mentoring junior developers and implementing best practices for scalable, maintainable code architecture.',
    achievements: ['']
  },
  {
    year: '2025 - Present',
    title: 'Front-End & Back-End Developer',
    company: 'Coding Camp 2025 Powered by DBS Foundation',
    description: 'Belajar mengembangkan aplikasi web dengan JavaScript. Mendapatkan pengalaman praktis dalam pengembangan full-stack dan memahami konsep dasar pengembangan web.',
    achievements: ['']
  },
  {
    year: '2022 - Present',
    title: 'Software Engineer',
    company: 'Politeknik Negeri Banyuwangi',
    description: 'Started my professional journey building modern, responsive websites and learning advanced web development practices. Focused on creating pixel-perfect user interfaces and smooth user experiences.',
    achievements: ['']
  },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Always exploring new technologies and creative solutions to complex problems.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Believing in the power of teamwork and open communication to achieve great results.',
    color: 'from-blue-400 to-purple-500'
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'Committed to delivering high-quality code and exceptional user experiences.',
    color: 'from-green-400 to-teal-500'
  },
  {
    icon: Award,
    title: 'Growth',
    description: 'Continuously learning and improving skills to stay at the forefront of technology.',
    color: 'from-purple-400 to-pink-500'
  },
];

export const About: React.FC = () => {
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

  return (
    <div >
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Me</span>
            </motion.h1>
            
            <motion.div 
              className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              <p>
                I'm <span className="font-semibold text-primary-600 dark:text-primary-400">Paundra Afif Zamroni</span>, 
                a passionate full-stack developer with over 2 years of experience crafting digital experiences 
                that make a difference. My journey in web development started with curiosity and has evolved 
                into a deep love for creating solutions that are both beautiful and functional.
              </p>
              
              <p>
                I specialize in modern web technologies including React, TypeScript, Node.js and Laravel, with a strong 
                focus on performance, accessibility, and user experience. Every project I work on is an opportunity 
                to push boundaries and create something exceptional.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source 
                projects, or enjoying a perfect cup of coffee while planning my next innovative solution.
              </p>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-6 mt-8 mb-10"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                <span className="font-medium">Banyuwangi, Indonesia</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <Coffee className="h-5 w-5 text-secondary-600 dark:text-secondary-400" />
                <span className="font-medium">Coffee Enthusiast</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <a href="/paundra-afif-resume.pdf" target="_blank">
              <Button 
                icon={Download} 
                size="lg"
                className="group"
                aria-label="Download Paundra Afif Zamroni's resume"
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

          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl opacity-20 blur-2xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <motion.img
                src="images/about.jpg"
                alt="Paundra Afif Zamroni - Full-Stack Developer"
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl border-4 border-white dark:border-gray-700"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-700 shadow-xl"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity }
                }}
              >
                <Code2 className="h-16 w-16 text-primary-600 dark:text-primary-400" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-white dark:bg-gray-800">
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
            >
              <Card className="text-center group" hover={true}>
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -10, 10, 0] 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <motion.div 
                  className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: index * 0.1 + 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Values Section */}
      <Section 
        title="Core Values" 
        subtitle="The principles that guide my work and drive my passion for creating exceptional digital experiences."
        className="bg-gray-50 dark:bg-gray-900"
      >
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
            >
              <Card className="text-center h-full group" hover={true}>
                <motion.div
                  className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <value.icon className="h-10 w-10 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Experience Timeline */}
      <Section 
        title="Professional Journey" 
        subtitle="My career progression and key milestones in web development, showcasing growth and achievements."
        className="bg-white dark:bg-gray-800"
      >
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <motion.div 
              className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 via-secondary-200 to-accent-200 dark:from-primary-800 dark:via-secondary-800 dark:to-accent-800 rounded-full"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex items-start space-x-8"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.3,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg border-4 border-white dark:border-gray-800"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      delay: index * 0.3 + 0.5,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                  >
                    {item.year.split(' ')[0]}
                  </motion.div>
                  
                  {/* Content */}
                  <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Card className="group" padding="lg" hover={true}>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                            {item.company}
                          </p>
                          <p className="text-gray-500 dark:text-gray-400 font-medium">
                            {item.year}
                          </p>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                          {item.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900 dark:text-white">Key Achievements:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {item.achievements.map((achievement, achIndex) => (
                              <motion.div
                                key={achIndex}
                                className="flex items-center space-x-2 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-3 rounded-lg border border-primary-200 dark:border-primary-700"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ 
                                  delay: index * 0.3 + 0.6 + achIndex * 0.1,
                                  type: "spring",
                                  stiffness: 200
                                }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                              >
                                <Award className="h-4 w-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                  {achievement}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};