import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function ContactTerminal() {
  const text = "Open to collaborations on real world projects and job roles.";
  const words = text.split(" ");

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  };

  const wordAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-32 md:py-48 bg-white relative overflow-hidden flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-4xl text-center flex flex-col items-center">
        
        {/* Elegant Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full mb-12"
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Available</span>
        </motion.div>

        {/* Smooth Staggered Text Reveal */}
        <motion.h2 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-black leading-[1.1] mb-16 max-w-3xl flex flex-wrap justify-center gap-x-3 md:gap-x-4"
        >
          {words.map((word, index) => (
            <motion.span key={index} variants={wordAnim} className="inline-block">
              {word}
            </motion.span>
          ))}
        </motion.h2>

        {/* Elegant Social Links */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8"
        >
          <motion.a 
            variants={iconVariants}
            href="mailto:rajpatel.260303@gmail.com" 
            whileHover={{ scale: 1.05, y: -4 }}
            className="px-6 py-4 rounded-full bg-gray-50 border border-gray-100 flex items-center space-x-3 text-gray-600 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium text-sm md:text-base">rajpatel.260303@gmail.com</span>
          </motion.a>

          <motion.a 
            variants={iconVariants}
            href="https://linkedin.com/in/rajpatel" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -4 }}
            className="px-6 py-4 rounded-full bg-gray-50 border border-gray-100 flex items-center space-x-3 text-gray-600 hover:text-[#0077b5] hover:border-[#0077b5]/30 hover:bg-[#0077b5]/5 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="font-medium text-sm md:text-base">in/rajpatel</span>
          </motion.a>

          <motion.a 
            variants={iconVariants}
            href="https://github.com/rajpatel" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -4 }}
            className="px-6 py-4 rounded-full bg-gray-50 border border-gray-100 flex items-center space-x-3 text-gray-600 hover:text-black hover:border-gray-300 hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <FaGithub className="w-5 h-5" />
            <span className="font-medium text-sm md:text-base">@rajpatel</span>
          </motion.a>

          <motion.a 
            variants={iconVariants}
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer"
            whileHover={{ scale: 1.05, y: -4 }}
            className="px-6 py-4 rounded-full bg-gray-50 border border-gray-100 flex items-center space-x-3 text-gray-600 hover:text-pink-600 hover:border-pink-200 hover:bg-pink-50 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <FaInstagram className="w-5 h-5" />
            <span className="font-medium text-sm md:text-base">@rajpatel</span>
          </motion.a>
        </motion.div>

        {/* Footer Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-32 text-sm text-gray-400 font-medium"
        >
          © {new Date().getFullYear()} Raj Patel. Crafted with precision.
        </motion.div>

      </div>
    </section>
  );
}
