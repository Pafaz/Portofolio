import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Code2, ArrowUp, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  { 
    name: 'GitHub', 
    href: 'https://github.com/Pafaz', 
    icon: Github,
    color: 'hover:bg-gray-800 hover:text-white',
    description: 'View my code repositories'
  },
  { 
    name: 'LinkedIn', 
    href: 'https://linkedin.com/in/paundra-afif-zamroni-8603b4341', 
    icon: Linkedin,
    color: 'hover:bg-blue-600 hover:text-white',
    description: 'Connect with me professionally'
  },
  { 
    name: 'Email', 
    href: 'mailto:paundra.afif@gmail.com', 
    icon: Mail,
    color: 'hover:bg-red-500 hover:text-white',
    description: 'Send me an email'
  },
];

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Banyuwangi, Indonesia'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+62 859-5436-3688'
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'paundra.afif@gmail.com'
  }
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
    <footer 
      className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Brand Section */}
          <motion.div className="lg:col-span-2 space-y-6" variants={itemVariants}>
            <div className="flex items-center space-x-4">
              <motion.div
                className="p-3 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl shadow-lg"
                whileHover={{ 
                  scale: 1.05, 
                  rotate: [0, -5, 5, 0],
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <Code2 className="h-8 w-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Paundra Afif Zamroni
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  Full-Stack Developer
                </p>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-md">
              Passionate about creating exceptional digital experiences through clean code, 
              innovative design, and user-centered development. Let's build something amazing together.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex items-center space-x-3 text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  <info.icon className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                  <span className="text-sm">{info.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <nav className="space-y-3" aria-label="Footer navigation">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm font-medium group"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <span className="relative">
                    {link.name}
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"
                    />
                  </span>
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
              Let's Connect
            </h4>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-md text-gray-600 dark:text-gray-300 transition-all duration-300 group ${social.color} focus:outline-none focus:ring-4 focus:ring-primary-500 focus:ring-opacity-50`}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -2,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  aria-label={social.description}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <div className="font-medium text-sm">{social.name}</div>
                    <div className="text-xs opacity-75">{social.description}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              className="text-gray-600 dark:text-gray-300 text-sm flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              Made with <Heart className="h-4 w-4 text-red-500 mx-2 animate-pulse" /> 
              using React, TypeScript & Tailwind CSS
            </motion.p>
            
            <div className="flex items-center space-x-4">
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                © {new Date().getFullYear()} Paundra Afif Zamroni. All rights reserved.
              </p>
              
              <motion.button
                onClick={scrollToTop}
                className="p-2 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-500 focus:ring-opacity-50"
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                  rotate: -90
                }}
                whileTap={{ scale: 0.9 }}
                aria-label="Scroll to top of page"
              >
                <ArrowUp className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};