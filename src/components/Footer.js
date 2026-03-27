import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black dark:bg-neutral-950 text-white dark:text-neutral-400 py-12 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Harsh
            </h3>
            <p className="text-sm text-neutral-500">Full-stack developer & problem solver</p>
          </div>

          <div className="text-center text-sm text-neutral-500">
            <p>Designed and built with React, Tailwind & Framer Motion</p>
            <p className="mt-2">© {currentYear} Harsh. All rights reserved.</p>
          </div>

          <div className="text-right text-sm">
            <p className="text-white font-medium">Open to opportunities</p>
            <p className="text-neutral-500">Let's build something great</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full h-px bg-neutral-800 mt-8"
        />
      </div>
    </footer>
  );
}
