import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';
import projectsData from '../data/projects.json';
import { Project } from '../types';

const categories = ['All', 'Backend', 'Full-Stack', 'Tools'];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [projects] = useState<Project[]>(projectsData);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => 
        project.role.toLowerCase().includes(
          selectedCategory.toLowerCase()
        )
      );

  return (
    <div >
      <Section 
        title="My Projects" 
        subtitle="A showcase of my work, from simple websites to complex web applications."
        className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800"
      >
        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="h-4 w-4 inline-block mr-2" />
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <Card className="h-full overflow-hidden group">
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="flex space-x-2">
                        {project.githubUrl && (
                          <Button
                            variant="ghost"
                            size="sm"
                            icon={Github}
                            href={project.githubUrl}
                            target="_blank"
                            className="bg-white/20 text-white hover:bg-white/30"
                          />
                        )}
                        {project.liveUrl && (
                          <Button
                            variant="ghost"
                            size="sm"
                            icon={ExternalLink}
                            href={project.liveUrl}
                            target="_blank"
                            className="bg-white/20 text-white hover:bg-white/30"
                          />
                        )}
                      </div>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-3 pt-4">
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          icon={Github}
                          href={project.githubUrl}
                          target="_blank"
                        >
                          Code
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          icon={ExternalLink}
                          href={project.liveUrl}
                          target="_blank"
                        >
                          Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </Section>
    </div>
  );
};