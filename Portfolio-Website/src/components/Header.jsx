import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const LINKS = ['Home', 'About', 'Projects', 'Experience', 'Achievements', 'Skills', 'Contact'];

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="font-black text-2xl tracking-tighter text-black flex items-baseline">
        RP26<span className="text-[#4F6F52]">.</span>
      </div>

      <nav className="hidden lg:flex items-center space-x-8">
        {LINKS.map(link => (
          <a 
            key={link} 
            href={`#${link.toLowerCase()}`}
            className={`text-sm font-medium transition-colors hover:text-[#4F6F52] ${link === 'Home' ? 'text-black' : 'text-gray-500'}`}
          >
            {link}
          </a>
        ))}
      </nav>

      <button className="hidden md:flex items-center space-x-2 border border-gray-200 bg-white text-black px-5 py-2 rounded-full hover:bg-gray-50 transition-all text-sm font-medium">
        <span>Let's Connect</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      {/* Mobile Menu Button - simple placeholder for now */}
      <button className="lg:hidden text-black">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </button>
    </motion.header>
  );
}
