import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: 'Pehnava',
      description: 'An e-commerce store with modern UX. Features product filtering, cart management, wishlist functionality, and a smooth checkout experience.',
      tech: ['React.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '/images/pehnava.png',
      features: ['Product filtering', 'Cart system', 'Order tracking'],
      github: 'https://github.com/HaRsH12548/Pehnava',
      live: 'https://pehnava-lyart.vercel.app/',
    },
    {
      title: 'Get-Together',
      description: 'A booking system that handles real-time availability, payment processing, and user authentication. Built to handle concurrent bookings with a reliable backend.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/images/get_together.png',
      features: ['Real-time availability', 'Secure payments', 'Email notifications'],
      github: 'https://github.com/HaRsH12548/gettogether',
      live: 'https://get-together.tech/',
    },
     
    {
      title: 'Class-Connect',
      description: 'An educational platform that provides study materials, tracks progress, and enables peer collaboration. Focused on improving the learning experience for students.',
      tech: ['React.js', 'Express', 'Firebase', 'Tailwind'],
      image: '/images/class_connect.png',
      features: ['Resource library', 'Progress tracking', 'Peer collaboration'],
      github: 'https://github.com/HaRsH12548/Class-Connect',
    },
   
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-black dark:bg-white"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group flex flex-col bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              {/* Project Image */}
              <div className="relative h-40 bg-neutral-200 dark:bg-neutral-800 overflow-hidden flex items-center justify-center">
                {project.image.startsWith('http') || project.image.startsWith('/') ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-500">{project.image}</div>
                )}
              </div>

              {/* Project Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2 flex-1">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2 uppercase tracking-wider">
                    Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white mt-1 flex-shrink-0"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-md text-xs font-medium border border-neutral-300 dark:border-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto pt-4 border-t border-neutral-200 dark:border-neutral-800">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
                  >
                    <FiGithub size={16} />
                    GitHub
                  </motion.a>

                  {project.live && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-black dark:border-white text-black dark:text-white rounded-lg font-medium text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                    >
                      <FiExternalLink size={16} />
                      Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
