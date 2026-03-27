import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';

export default function About() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black dark:text-white leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="block"
                >
                  Harsh Pachauri
                </motion.span>
              </h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-1 bg-black dark:bg-white rounded-full"
              ></motion.div>
            </div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
                I'm a Computer Science student passionate about building full-stack web applications. I transform ideas into functional, beautiful digital experiences using modern technologies.
              </p>

              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Specializing in React, Node.js, and everything in between. I believe in writing clean code, solving complex problems, and creating products that truly matter.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow"
              >
                View My Work
                <HiArrowRight />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-lg font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-neutral-200 dark:border-neutral-800 shadow-2xl">
                <img
                  src="/images/dp2.png"
                  alt="Harsh Pachauri"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ delay: 0.6 }}
                className="absolute -z-10 w-80 h-80 sm:w-96 sm:h-96 lg:w-full lg:h-full bg-gradient-to-br from-black to-neutral-900 dark:from-white dark:to-neutral-100 rounded-full -bottom-4 -right-4"
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        {!hasScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
            className="flex justify-center mt-20"
          >
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Scroll to explore more</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
