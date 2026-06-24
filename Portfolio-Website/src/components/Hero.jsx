import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThreeDBrain from './ThreeDBrain';
import { ArrowRight, Download, Brain, Eye, Cpu, Code2, Zap, Link } from 'lucide-react';

const ORBIT_TAGS = [
  { icon: Brain, text: "Machine Learning", delay: 0.2 },
  { icon: Code2, text: "</> MERN Stack", delay: 0.3 },
  { icon: Eye, text: "Computer Vision", delay: 0.4 },
  { icon: Zap, text: "FastAPI", delay: 0.5 },
  { icon: Cpu, text: "Deep Learning", delay: 0.6 },
  { icon: Link, text: "LangChain", delay: 0.7 }
];

const TypewriterText = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    let isMounted = true;
    
    const sequence = async () => {
      const wait = (ms) => new Promise(r => setTimeout(r, ms));
      
      // 1. Write "MERN Stack Developer"
      const str1 = "MERN Stack Developer";
      for (let i = 1; i <= str1.length; i++) {
        if (!isMounted) return;
        setText(str1.slice(0, i));
        await wait(60);
      }
      
      await wait(1200); // pause
      
      // 2. Erase it
      for (let i = str1.length; i >= 0; i--) {
        if (!isMounted) return;
        setText(str1.slice(0, i));
        await wait(40);
      }
      
      await wait(400); // pause
      
      // 3. Write "AI/ML Engineer"
      const str2 = "AI/ML Engineer";
      for (let i = 1; i <= str2.length; i++) {
        if (!isMounted) return;
        setText(str2.slice(0, i));
        await wait(60);
      }
      
      await wait(600); // pause
      
      // 4. Write " | MERN Stack Developer"
      const str3 = " | MERN Stack Developer";
      for (let i = 1; i <= str3.length; i++) {
        if (!isMounted) return;
        setText(str2 + str3.slice(0, i));
        await wait(60);
      }
    };
    
    sequence();
    
    return () => { isMounted = false; };
  }, []);

  return (
    <span className="inline-block min-h-[32px]">
      {text}<span className="animate-cursor-blink ml-[2px] text-[#4F6F52] font-light">|</span>
    </span>
  );
};

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
              className="text-xl md:text-2xl font-medium text-gray-600 mb-2 h-[32px] md:h-[40px] flex items-center"
            >
              <TypewriterText />
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

          {/* Orbiting Tags Wrapper */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute hidden md:flex w-[480px] h-[480px] items-center justify-center z-20 pointer-events-none"
          >
            {ORBIT_TAGS.map((tag, i) => {
              const angle = (i / ORBIT_TAGS.length) * 360;
              const radius = 240;
              
              return (
                <div
                  key={i}
                  className="absolute w-full h-full flex items-center justify-center"
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  {/* Pushed to the edge */}
                  <div className="absolute" style={{ transform: `translateX(${radius}px)` }}>
                    {/* Counter rotation for animation */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                    >
                      {/* The actual card */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: tag.delay, duration: 0.8 }}
                        className="flex items-center space-x-2.5 bg-white/90 backdrop-blur-md border border-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap pointer-events-auto"
                        style={{ transform: `rotate(-${angle}deg)` }} // Initial offset counter-rotation
                      >
                        <tag.icon className="w-4 h-4 text-gray-500" strokeWidth={2} />
                        <span>{tag.text}</span>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          <div className="h-full w-full max-w-[400px] relative transform scale-100 origin-center z-10">
            <ThreeDBrain />
          </div>

        </div>

      </div>
    </section>
  );
}
