import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';

const TypewriterTitle = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let isMounted = true;
    const sequence = async () => {
      const wait = (ms) => new Promise(r => setTimeout(r, ms));
      
      const str1 = "Driven by logic.";
      for (let i = 1; i <= str1.length; i++) {
        if (!isMounted) return;
        setText1(str1.slice(0, i));
        await wait(60);
      }
      
      setShowCursor1(false);
      setShowCursor2(true);
      
      const str2 = "Designed for impact.";
      for (let i = 1; i <= str2.length; i++) {
        if (!isMounted) return;
        setText2(str2.slice(0, i));
        await wait(60);
      }
    };
    
    sequence();
    return () => { isMounted = false; };
  }, [isInView]);

  return (
    <h3 ref={ref} className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight min-h-[96px] md:min-h-[110px]">
      <div className="text-black">
        {text1}
        {showCursor1 && <span className="animate-cursor-blink ml-[2px] text-[#4F6F52] font-light">|</span>}
      </div>
      <div className="text-gray-400 mt-1 md:mt-2">
        {text2}
        {showCursor2 && <span className="animate-cursor-blink ml-[2px] text-[#4F6F52] font-light">|</span>}
      </div>
    </h3>
  );
};

export default function AboutSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center max-w-7xl relative z-10">
        
        {/* Left Column: Text */}
        <div className="flex flex-col items-start space-y-8">
          <div className="mb-3">
            <h2 className="text-sm font-bold tracking-widest text-[#4F6F52] uppercase">About Me</h2>
          </div>
          
          <TypewriterTitle />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-gray-600 leading-relaxed"
          >
            <p>
              I am an AI/ML Engineer and MERN Stack Developer who bridges the gap between complex algorithms and beautiful, intuitive user experiences. I believe that powerful technology should never compromise on design.
            </p>
            <p>
              My journey started with a fascination for how data shapes our world. Today, I build scalable web architectures and train machine learning models to solve real-world problems. Whether I'm designing a sleek React interface or optimizing a FastAPI neural network gateway, I obsess over performance and pixel-perfect aesthetics.
            </p>
            <p>
              When I'm not writing code, you can usually find me exploring new design trends, participating in hackathons, or enjoying a good cup of coffee while reading up on the latest AI research.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Image Gallery Placeholders */}
        <div className="relative w-full h-[600px] flex items-center justify-center">
          
          {/* Main Professional Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.3 }}
            className="absolute right-4 md:right-12 top-10 w-64 md:w-80 aspect-[3/4] bg-white rounded-3xl p-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] z-20 transition-transform hover:rotate-0 hover:scale-105 duration-500 cursor-pointer"
          >
            <div className="w-full h-full bg-gray-100 rounded-2xl flex flex-col items-center justify-center text-gray-400 border border-gray-200 overflow-hidden relative group">
              <ImageIcon className="w-10 h-10 mb-3 opacity-50 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium text-center px-4">Insert Professional/Candid Photo Here</span>
            </div>
          </motion.div>

          {/* Secondary Personality Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20, rotate: -4 }}
            whileInView={{ opacity: 1, x: 0, rotate: 4 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.5 }}
            className="absolute left-4 md:left-12 bottom-10 w-56 md:w-72 aspect-square bg-white rounded-3xl p-3 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] z-10 transition-transform hover:rotate-0 hover:scale-105 duration-500 cursor-pointer"
          >
            <div className="w-full h-full bg-gray-100 rounded-2xl flex flex-col items-center justify-center text-gray-400 border border-gray-200 overflow-hidden relative group">
              <ImageIcon className="w-8 h-8 mb-3 opacity-50 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium text-center px-4">Insert Hobby/Lifestyle Photo Here</span>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#4F6F52] opacity-[0.03] blur-3xl rounded-full pointer-events-none" />
          
        </div>
      </div>
    </section>
  );
}
