import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiTrophy, HiSparkles, HiChartBar } from 'react-icons/hi2';

export default function Experience() {
  const experiences = [
    {
      type: 'Education',
      title: 'B.Tech Computer Science',
      period: '2023 - ongoing',
      description: 'Pursuing a degree with focus on data structures, algorithms, web development, and databases. Building practical skills alongside theoretical knowledge.',
      icon: HiAcademicCap,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      type: 'Focus',
      title: 'Data Structures & Algorithms',
      period: 'Ongoing',
      description: 'Strong foundation in DSA using C++. Regular problem-solving to build better programming fundamentals and optimization skills.',
      icon: HiChartBar,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
    },
    
    {
      type: 'Development',
      title: 'Full-Stack Development',
      period: 'Ongoing',
      description: 'Built multiple production-ready applications using React, Node.js, and various databases. Learned by doing, from frontend to backend architecture.',
      icon: HiSparkles,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
      type: 'Skills',
      title: 'Soft Skills',
      period: 'Ongoing',
      description: 'Fast, Intutive learner and team player with a strong problem-solving mindset. Proven ability to collaborate actively, adapt quickly, and lead initiatives.',
      icon: HiTrophy,
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            Experience & Growth
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
            My journey as a developer, student, and learner. Building skills through education, achievements, and hands-on development.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-6"></div>
        </motion.div>

        {/* Experience Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {experiences.map((exp) => {
            const IconComponent = exp.icon;
            return (
              <motion.div
                key={exp.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 ${exp.bgColor}`}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative p-6 sm:p-8">
                  {/* Top Section - Icon and Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <IconComponent className="text-2xl" />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                      className="px-3 py-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-full text-xs font-semibold text-neutral-700 dark:text-neutral-300"
                    >
                      {exp.period}
                    </motion.div>
                  </div>

                  {/* Title Section */}
                  <div className="mb-4">
                    <div className="inline-block mb-2">
                      <span className={`px-3 py-1 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent text-s font-bold uppercase tracking-wider`}>
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    
                  </div>

                  {/* Description */}
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-s">
                    {exp.description}
                  </p>
                </div>

                {/* Bottom gradient line */}
                <motion.div
                  variants={{
                    hidden: { scaleX: 0 },
                    visible: { 
                      scaleX: 1, 
                      transition: { delay: 0.4, duration: 0.6 } 
                    }
                  }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color} origin-left`}
                />
              </motion.div>
            );
          })}
        </motion.div>


      </div>
    </section>
  );
}
