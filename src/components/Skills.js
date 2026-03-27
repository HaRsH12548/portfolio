import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiCplusplus, SiTailwindcss, SiMongodb, SiExpress, SiJavascript, SiGit, SiFramer } from 'react-icons/si';
import { FiRefreshCw, FiMonitor } from 'react-icons/fi';

export default function Skills() {
  const allSkills = [
     {
      name: 'C++',
      icon: SiCplusplus,
      color: '#00599C',
      description: 'Data structures, algorithms, and competitive programming',
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
      color: '#F7DF1E',
      description: 'Core language for web development',
    },
    {
      name: 'React',
      icon: SiReact,
      color: '#61DAFB',
      description: 'Building interactive interfaces with hooks and state management',
    },
    {
      name: 'Node.js',
      icon: SiNodedotjs,
      color: '#339933',
      description: 'Server-side development with Express and REST APIs',
    },
    {
      name: 'Express',
      icon: SiExpress,
      color: '#ffffff',
      description: 'Minimal and flexible web framework for Node.js',
    },
   {
      name: 'MongoDB',
      icon: SiMongodb,
      color: '#47A248',
      description: 'NoSQL database for flexible data storage',
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: '#06B6D4',
      description: 'Modern styling for responsive designs',
    },
    
    
    
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            Skills & Tech
          </h2>
          <div className="w-20 h-1 bg-black dark:bg-white"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {allSkills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-4 bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors"
              >
                <div className="mb-4">
                  {IconComponent && <IconComponent className="text-3xl" style={{ color: skill.color }} />}
                </div>

                <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">{skill.name}</h3>
                <p className="text-s text-neutral-600 dark:text-neutral-400">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
