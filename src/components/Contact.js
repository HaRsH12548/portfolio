import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:harshpachauri005@gmail.com?subject=${subject}&body=${body}`;
    
    // Open in user's default email client
    window.location.href = mailtoUrl;
    
    // Clear form
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/HaRsH12548',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/harsh-pachauri',
      color: '#0A66C2',
    },
    {
      name: 'X',
      icon: FaXTwitter,
      url: 'https://x.com/Pachauri__HaRsh',
    },
  ];

  const contactMethods = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'harshpachauri005@gmail.com',
      link: 'mailto:harshpachauri005@gmail.com',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+91 7300606071',
      link: 'tel:+917300606071',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'India',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
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
            Let's Connect
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Have an exciting project or opportunity? I'd love to hear from you. Let's create something amazing together.
          </p>
          <div className="w-20 h-1 bg-black dark:bg-white rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-black dark:text-white mb-8">Get in Touch</h3>

            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.a
                  key={method.title}
                  href={method.link}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  className="group flex items-start gap-5 p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 transition-all cursor-pointer"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-black dark:text-white shadow-sm group-hover:shadow-md transition-shadow">
                    <IconComponent className="text-2xl" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wide">
                      {method.title}
                    </p>
                    <p className="text-lg font-bold text-black dark:text-white mt-1 break-all transition-all">
                      {method.value}
                    </p>
                  </div>


                </motion.a>
              );
            })}

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-6">
              <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-4">
                Follow Me
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -6, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-black dark:text-white shadow-sm hover:shadow-md transition-shadow"
                      title={social.name}
                    >
                      <IconComponent className="text-xl" style={social.color ? { color: social.color } : {}} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-2xl blur-3xl -z-10"></div>

            <div className="p-8 sm:p-10 bg-white dark:bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg">
              <h3 className="text-2xl font-bold mb-8 text-black dark:text-white">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-black dark:text-white">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border-2 rounded-lg transition-all text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none ${
                      focusedField === 'name'
                        ? 'border-black dark:border-white shadow-lg'
                        : 'border-neutral-200 dark:border-neutral-700'
                    }`}
                    placeholder="Harsh Pachauri"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-black dark:text-white">
                    Your Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border-2 rounded-lg transition-all text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none ${
                      focusedField === 'email'
                        ? 'border-black dark:border-white shadow-lg'
                        : 'border-neutral-200 dark:border-neutral-700'
                    }`}
                    placeholder="you@example.com"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-black dark:text-white">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows="5"
                    className={`w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800 border-2 rounded-lg transition-all text-black dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none resize-none ${
                      focusedField === 'message'
                        ? 'border-black dark:border-white shadow-lg'
                        : 'border-neutral-200 dark:border-neutral-700'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 bg-black dark:bg-white text-white dark:text-black font-bold rounded-lg hover:shadow-lg transition-all duration-300 mt-8"
                >
                  Send Message
                </motion.button>

                <p className="text-xs text-neutral-600 dark:text-neutral-400 text-center mt-4">
                  I'll get back to you as soon as possible.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
