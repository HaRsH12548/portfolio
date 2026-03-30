import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

export default function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      title: 'Privacy and Security in Online Social Media',
      issuer: 'NPTEL',
      date: 'Apr 2025',
      description: 'Explored the nuances of data privacy, security threats, and protective measures within modern social media architectures.',
      image: '/images/cert2.png',
    },
    {
      title: 'Data Structures And Algorithm Training',
      issuer: 'Cipher Schools',
      date: 'Aug 2025',
      description: 'Comprehensive training covering core data structures, advanced algorithms, and problem-solving techniques to optimize code performance.',
      image: '/images/cert3.png',
    },
    
    {
      title: 'Python Programming',
      issuer: 'CSE Pathsala',
      date: 'Mar 2024',
      description: 'Gained strong foundational knowledge in Python, focusing on versatile scripting, data handling, and practical application development.',
      image: '/images/cert1.png',
    },
    {
      title: 'Introduction to Hardware and Operating Systems',
      issuer: 'Coursera',
      date: 'Sept 2024',
      description: 'Studied the fundamental interplay between computer hardware components and operating system administration, covering system architecture basics.',
      image: '/images/cert4.png',
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
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-black dark:bg-white"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group flex flex-col bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              {/* Certification Image */}
              <div className="relative h-40 sm:h-48 bg-neutral-200 dark:bg-neutral-800 overflow-hidden flex items-center justify-center">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://via.placeholder.com/600x400?text=Upload+Certificate";
                  }}
                />
                
                {/* Overlay with Button */}
                <div className="absolute inset-0 bg-white/70 dark:bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(cert.image)}
                    className="px-5 py-2.5 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 text-sm transition-all duration-300 shadow-xl"
                  >
                    View Certificate
                    <FiExternalLink size={14} />
                  </motion.button>
                </div>
              </div>

              {/* Certification Content */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex flex-col mb-3 gap-2">
                  <h3 className="text-lg font-bold text-black dark:text-white leading-tight">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-md text-[10px] sm:text-xs font-semibold">
                      {cert.date}
                    </span>
                    <span className="text-[10px] sm:text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-1 line-clamp-3">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-neutral-300 transition-colors p-2"
                aria-label="Close"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <img 
                src={selectedImage} 
                alt="Full Size Certificate" 
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://via.placeholder.com/1200x800?text=Upload+Certificate";
                }}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
