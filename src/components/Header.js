import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2';
import { FiDownload } from 'react-icons/fi';

export default function Header({ isDark, setIsDark }) {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If section is near the top of viewport, mark it as active
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className="fixed top-0 w-full backdrop-blur-sm bg-white/90 dark:bg-neutral-950/90 z-50 border-b border-neutral-200 dark:border-neutral-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-black dark:text-white"
        >
          Welcome
        </motion.div>

        <div className="flex items-center gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex gap-6 items-center"
          >
            <motion.a
              href="/pachauri_harsh_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 text-lg font-medium text-black dark:text-white bg-white dark:bg-neutral-950  "
            >
              <FiDownload className="text-lg" />
              CV
            </motion.a>
            {['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-lg transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'font-bold text-black dark:text-white'
                    : 'font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
            </motion.div>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 20 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            {isDark ? (
              <HiOutlineSun className="text-2xl text-neutral-700" />
            ) : (
              <HiOutlineMoon className="text-2xl text-neutral-600" />
            )}
          </motion.button>
        </div>
      </nav>
    </header>
  );
}
