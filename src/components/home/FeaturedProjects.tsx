import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, TrendingUp, Award } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import projectsData from '../../data/projects.json';
import { Project } from '../../types';

export const FeaturedProjects: React.FC = () => {
  const featuredProjects = projectsData.filter((project: Project) => project.featured);

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
    <Section 
      id="projects"
      title="Featured Projects" 
      subtitle="Discover my latest work where creativity meets functionality. Each project represents a unique challenge solved with modern technologies and thoughtful design."
      className="bg-white dark:bg-gray-800 pt-28"
    >
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {featuredProjects.map((project: Project, index: number) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="group"
          >
            <Card className="h-full overflow-hidden relative">
              {/* Featured Badge */}
              <motion.div
                className="absolute top-4 left-4 z-20 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: index * 0.2 + 0.5,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
              >
                <Star className="h-4 w-4 inline-block mr-1" />
                Featured
              </motion.div>

              {/* Project Image with Enhanced Hover Effects */}
              <div className="relative overflow-hidden rounded-lg mb-6 group-hover:shadow-2xl transition-shadow duration-500">
                <motion.div
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img
                    src={project.image}
                    alt={`Screenshot of ${project.title} project showing the main interface`}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Action Buttons Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.githubUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        icon={Github}
                        href={project.githubUrl}
                        target="_blank"
                        className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        icon={ExternalLink}
                        href={project.liveUrl}
                        target="_blank"
                        className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30"
                        aria-label={`View ${project.title} live demo`}
                      >
                        Live Demo
                      </Button>
                    )}
                  </motion.div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="space-y-6 p-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </motion.div>

                {/* Technology Stack */}
                <motion.div
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {project.technologies.map((tech: string, techIndex: number) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium border border-primary-200 dark:border-primary-700 hover:shadow-md transition-shadow duration-200"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: index * 0.1 + 0.5 + techIndex * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex space-x-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                >
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="md"
                      icon={Github}
                      href={project.githubUrl}
                      target="_blank"
                      className="group/btn"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <span>View Code</span>
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Github className="h-4 w-4" />
                      </motion.div>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      size="md"
                      icon={ExternalLink}
                      href={project.liveUrl}
                      target="_blank"
                      className="group/btn relative overflow-hidden"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <span className="relative z-10">Live Demo</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary-700 to-secondary-700"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="ml-2 relative z-10"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </motion.div>
                    </Button>
                  )}
                </motion.div>

                {/* Project Stats */}
                <motion.div
                  className="flex items-center space-x-6 pt-4 border-t border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">High Performance</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Award className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium">Best Practices</span>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Call to Action */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            variant="outline" 
            size="lg" 
            href="/projects"
            className="group relative overflow-hidden border-2 border-primary-600 hover:border-primary-700"
            aria-label="View all projects in portfolio"
          >
            <span className="relative z-10 font-semibold">Explore All Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="ml-3 relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <ExternalLink className="h-5 w-5" />
            </motion.div>
          </Button>
        </motion.div>
        
        <motion.p
          className="mt-4 text-gray-600 dark:text-gray-300 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          Discover more innovative solutions and creative implementations
        </motion.p>
      </motion.div>
    </Section>
  );
};