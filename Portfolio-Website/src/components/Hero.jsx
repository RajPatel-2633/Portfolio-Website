import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThreeDBrain from './ThreeDBrain';
import { ArrowRight, Download, Brain, Eye, Cpu, Code2, Zap, Link } from 'lucide-react';

const TAGS_LEFT = [
  { icon: Brain, text: "Machine Learning", top: "10%", delay: 0.2 },
  { icon: Eye, text: "Computer Vision", top: "50%", delay: 0.4 },
  { icon: Cpu, text: "Deep Learning", top: "90%", delay: 0.6 }
];

const TAGS_RIGHT = [
  { icon: Code2, text: "</> MERN Stack", top: "10%", delay: 0.3 },
  { icon: Zap, text: "FastAPI", top: "50%", delay: 0.5 },
  { icon: Link, text: "LangChain", top: "90%", delay: 0.7 }
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center relative z-10 max-w-7xl">
        
        {/* Left Content */}
        <div className="flex flex-col items-start space-y-6 lg:col-span-6 z-20">
          
          <div className="flex flex-col">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="flex items-center space-x-2 text-lg text-gray-500 mb-2"
            >
              <span>Hi, I'm</span>
              <span>👋</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold tracking-tighter text-black mb-4 flex flex-wrap leading-tight"
            >
              Raj <span className="text-[#4F6F52] ml-4">Patel<span className="animate-pulse inline-block">.</span></span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl font-medium text-gray-600 mb-2"
            >
              AI/ML Engineer <span className="text-gray-300 mx-2">|</span> MERN Stack Developer <span className="text-gray-300 mx-2">|</span>
            </motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gray-500 max-w-lg leading-relaxed pt-2"
          >
            Building intelligent systems that combine AI, machine learning and scalable web technologies to solve real-world problems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-6"
          >
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center space-x-2 bg-[#4F6F52] text-white px-8 py-3.5 rounded-full hover:bg-[#3d5740] transition-colors shadow-lg shadow-[#4F6F52]/20 font-medium"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center space-x-2 border border-gray-200 bg-white text-black px-8 py-3.5 rounded-full hover:bg-gray-50 transition-colors font-medium"
            >
              <span>Download Resume</span>
              <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform text-gray-500" />
            </motion.button>
          </motion.div>
        </div>

        {/* Right Content - 3D Brain & Tags */}
        <div className="w-full flex items-center justify-center lg:col-span-6 relative z-10 h-[500px]">
          
          {/* Subtle Radial Glow Behind Brain */}
          <div className="absolute inset-0 bg-[#4F6F52] opacity-10 blur-3xl rounded-full scale-75 -z-10" />

          {/* Left Tags */}
          {TAGS_LEFT.map((tag, i) => (
            <motion.div 
              key={`left-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              transition={{ 
                opacity: { delay: tag.delay, duration: 1 },
                scale: { delay: tag.delay, duration: 1 },
                y: { duration: 8 + i * 1.5, repeat: Infinity, ease: "easeInOut", delay: tag.delay }
              }}
              className="absolute hidden md:flex items-center space-x-1.5 bg-white border border-gray-200 shadow-[0_4px_24px_rgba(0,0,0,0.06)] rounded-full px-3 py-1.5 text-[10px] sm:text-[11px] font-medium text-gray-600 whitespace-nowrap z-20"
              style={{ left: "15%", top: tag.top }}
            >
              <tag.icon className="w-3 h-3 text-gray-400" strokeWidth={2} />
              <span>{tag.text}</span>
            </motion.div>
          ))}

          {/* Right Tags */}
          {TAGS_RIGHT.map((tag, i) => (
            <motion.div 
              key={`right-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              transition={{ 
                opacity: { delay: tag.delay, duration: 1 },
                scale: { delay: tag.delay, duration: 1 },
                y: { duration: 9 + i * 1.5, repeat: Infinity, ease: "easeInOut", delay: tag.delay }
              }}
              className="absolute hidden md:flex items-center space-x-1.5 bg-white border border-gray-200 shadow-[0_4px_24px_rgba(0,0,0,0.06)] rounded-full px-3 py-1.5 text-[10px] sm:text-[11px] font-medium text-gray-600 whitespace-nowrap z-20"
              style={{ right: "15%", top: tag.top }}
            >
              <tag.icon className="w-3 h-3 text-gray-400" strokeWidth={2} />
              <span>{tag.text}</span>
            </motion.div>
          ))}

          <div className="h-full w-full max-w-[400px] relative transform scale-100 origin-center z-10">
            <ThreeDBrain />
          </div>

        </div>

      </div>
    </section>
  );
}
