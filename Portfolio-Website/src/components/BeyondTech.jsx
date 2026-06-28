import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Dumbbell, PenTool, Plane, MoonStar, Quote } from 'lucide-react';

const BeyondTech = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const inView = useInView(containerRef, { once: false, margin: "-10% 0px" });

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#FAFAFA] relative overflow-hidden flex flex-col items-center">
      
      {/* Light Ambient Aurora Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-orange-100/50 blur-[100px] rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-blue-100/50 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[30%] w-[400px] h-[400px] bg-emerald-100/40 blur-[100px] rounded-full" 
        />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="w-full max-w-7xl mx-auto px-6 relative z-10"
      >
        {/* Header and Quote */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/50 backdrop-blur-md rounded-full mb-6 border border-gray-200 shadow-sm">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Beyond The Screen</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black mb-8">
              MY EXTRA CURRICULARS
            </h2>
            
            {/* Embedded Quote */}
            <div className="relative max-w-2xl mx-auto px-8 py-6">
              <Quote className="absolute top-0 left-0 text-gray-200" size={48} />
              <p className="text-xl md:text-2xl font-light text-gray-600 italic leading-relaxed relative z-10">
                "Writing code builds the future, but understanding human nature, exploring the world, and pushing physical limits builds the character."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 md:grid-rows-2 gap-6 h-auto md:h-[650px]">
          
          {/* Card 1: Gym (Tall) - THE ENERGY CORE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover="hover"
            className="md:col-span-1 md:row-span-2 group relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white p-8 flex flex-col justify-end min-h-[350px] md:min-h-0 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-15px_rgba(239,68,68,0.25)] transition-all duration-500"
          >
            {/* Abstract Power/Energy SVG Animation */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none flex items-center justify-center overflow-hidden">
               {/* Glowing Background Core */}
               <motion.div 
                 variants={{ hover: { scale: [1, 2, 1.5], opacity: [0, 0.2, 0.1] } }}
                 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute w-40 h-40 bg-red-500 rounded-full blur-[50px]"
               />
               
               <svg viewBox="0 0 200 400" className="w-full h-full absolute inset-0 mix-blend-multiply opacity-50">
                  {/* Concentric Energy Rings */}
                  {[...Array(5)].map((_, i) => (
                    <motion.ellipse
                      key={`ring-${i}`}
                      cx="100" cy="200"
                      rx={30 + i * 20} ry={80 + i * 40}
                      fill="none"
                      stroke="url(#redGradient)"
                      strokeWidth={1 + (i % 2)}
                      variants={{
                        hover: {
                          scale: [1, 1.2, 1],
                          rotateX: [0, 180, 360],
                          rotateY: [0, 90, 360],
                          opacity: [0.1, 0.5, 0.1]
                        }
                      }}
                      transition={{ duration: 4 + i, repeat: Infinity, ease: "linear" }}
                    />
                  ))}
                  {/* Jagged Energy Lines */}
                  <motion.path
                    d="M 50 0 L 80 150 L 30 200 L 120 280 L 100 400"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="3"
                    variants={{
                      hover: { pathLength: [0, 1, 0], opacity: [0, 1, 0], pathOffset: [0, 1, 0] }
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.path
                    d="M 150 0 L 120 120 L 180 220 L 80 300 L 150 400"
                    fill="none"
                    stroke="#f87171"
                    strokeWidth="2"
                    variants={{
                      hover: { pathLength: [0, 1, 0], opacity: [0, 0.8, 0], pathOffset: [1, 0, 1] }
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="100%" stopColor="#b91c1c" />
                    </linearGradient>
                  </defs>
               </svg>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 border border-red-100 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500 shadow-sm relative overflow-hidden">
                <motion.div 
                   variants={{ hover: { scale: [1, 1.5, 1], opacity: [0, 0.3, 0] } }}
                   transition={{ duration: 1, repeat: Infinity }}
                   className="absolute inset-0 bg-red-400 rounded-2xl blur-md"
                />
                <Dumbbell className="text-red-500 relative z-10" size={28} />
              </div>
              <h3 className="text-2xl font-black text-gray-800 mb-3 tracking-wide uppercase group-hover:text-red-600 transition-colors">Iron & Discipline</h3>
              <p className="text-gray-500 leading-relaxed font-medium">Hitting the gym consistently. It's not just about physical strength, but building the mental resilience required to tackle tough engineering problems.</p>
            </div>
          </motion.div>

          {/* Card 2: Graphology (Wide) - THE CALLIGRAPHY */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover="hover"
            className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white p-8 flex flex-col justify-center min-h-[280px] md:min-h-0 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-15px_rgba(99,102,241,0.25)] transition-all duration-500"
          >
            {/* Lined Paper & Intricate Calligraphy Animation */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 39px, #6366f1 39px, #6366f1 40px)', backgroundSize: '100% 40px' }} />
            
            <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.15] transition-opacity duration-1000 pointer-events-none overflow-hidden flex items-center justify-end pr-10">
              <svg viewBox="0 0 600 200" className="w-[120%] h-[120%] stroke-indigo-900 fill-none" strokeLinecap="round" strokeLinejoin="round">
                {/* Complex overlapping signatures */}
                <motion.path
                  d="M 50 150 C 70 50, 100 20, 120 100 C 140 180, 160 120, 180 80 C 200 40, 220 80, 240 140 C 260 200, 280 60, 300 40 C 320 20, 340 100, 360 160 C 380 220, 400 80, 420 50 C 440 20, 460 140, 480 120 C 500 100, 520 60, 550 80"
                  strokeWidth="3"
                  variants={{ hover: { pathLength: [0, 1] } }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 70 120 C 90 20, 120 -10, 140 70 C 160 150, 180 90, 200 50 C 220 10, 240 50, 260 110 C 280 170, 300 30, 320 10 C 340 -10, 360 70, 380 130 C 400 190, 420 50, 440 20 C 460 -10, 480 110, 500 90 C 520 70, 540 30, 570 50"
                  strokeWidth="1.5"
                  opacity="0.6"
                  variants={{ hover: { pathLength: [0, 1] } }}
                  transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.path
                  d="M 30 180 C 50 80, 80 50, 100 130 C 120 210, 140 150, 160 110 C 180 70, 200 110, 220 170 C 240 230, 260 90, 280 70 C 300 50, 320 130, 340 190 C 360 250, 380 110, 400 80 C 420 50, 440 170, 460 150 C 480 130, 500 90, 530 110"
                  strokeWidth="0.5"
                  opacity="0.3"
                  variants={{ hover: { pathLength: [0, 1] } }}
                  transition={{ duration: 5, ease: "easeInOut", delay: 1 }}
                />
                
                {/* Floating Ink Droplets */}
                {[...Array(8)].map((_, i) => (
                  <motion.circle
                    key={`ink-${i}`}
                    cx={100 + i * 60 + Math.random() * 40}
                    cy={50 + Math.random() * 100}
                    r={Math.random() * 4 + 1}
                    fill="#4338ca"
                    stroke="none"
                    variants={{
                      hover: { 
                        scale: [0, 1.5, 1], 
                        opacity: [0, 1, 0],
                        y: [0, -20, 20]
                      }
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
                  />
                ))}
              </svg>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 max-w-xl">
              <div className="w-16 h-16 shrink-0 bg-indigo-50 rounded-2xl flex items-center justify-center border border-indigo-100 group-hover:rotate-12 transition-transform duration-500 shadow-sm">
                <PenTool className="text-indigo-500" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-800 mb-3 tracking-wide uppercase group-hover:text-indigo-600 transition-colors">Graphology</h3>
                <p className="text-gray-500 leading-relaxed font-medium">The study of handwriting. I analyze strokes, pressure, and spacing to understand personality traits and human behavior beyond what is spoken.</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Astrological Charts - THE ASTROLABE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover="hover"
            className="md:col-span-1 md:row-span-1 group relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white p-6 md:p-8 flex flex-col min-h-[280px] md:min-h-0 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-15px_rgba(217,70,239,0.25)] transition-all duration-500"
          >
            {/* Highly Complex Rotating Astrolabe SVG */}
            <div className="absolute -right-32 -top-32 w-[350px] h-[350px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none mix-blend-multiply">
              
              {/* Outer Ring */}
              <motion.svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full"
                variants={{ hover: { rotate: 360 } }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <circle cx="100" cy="100" r="90" fill="none" stroke="#f0abfc" strokeWidth="2" strokeDasharray="2 6" />
                <circle cx="100" cy="100" r="95" fill="none" stroke="#d946ef" strokeWidth="0.5" />
                <circle cx="100" cy="100" r="85" fill="none" stroke="#d946ef" strokeWidth="0.5" />
                {/* Zodiac Markers */}
                {[...Array(12)].map((_, i) => (
                  <line key={`tick-${i}`} x1="100" y1="5" x2="100" y2="15" stroke="#c026d3" strokeWidth="2" transform={`rotate(${i * 30} 100 100)`} />
                ))}
              </motion.svg>

              {/* Inner Geometric Ring */}
              <motion.svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full"
                variants={{ hover: { rotate: -360 } }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <polygon points="100,20 169,60 169,140 100,180 31,140 31,60" fill="none" stroke="#e879f9" strokeWidth="1.5" />
                <polygon points="100,20 169,60 169,140 100,180 31,140 31,60" fill="none" stroke="#c026d3" strokeWidth="0.5" transform="rotate(30 100 100)" />
              </motion.svg>

              {/* Core Constellation Web */}
              <motion.svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full"
                variants={{ hover: { rotate: 180, scale: [1, 1.05, 1] } }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.path 
                  d="M100 40 L130 80 L160 70 L140 120 L100 160 L60 130 L40 90 L80 60 Z" 
                  fill="none" 
                  stroke="#d946ef" 
                  strokeWidth="1"
                  variants={{ hover: { opacity: [0.3, 0.8, 0.3] } }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <circle cx="100" cy="40" r="3" fill="#c026d3" />
                <circle cx="130" cy="80" r="4" fill="#e879f9" />
                <circle cx="160" cy="70" r="2" fill="#c026d3" />
                <circle cx="140" cy="120" r="5" fill="#f0abfc" />
                <circle cx="100" cy="160" r="3" fill="#c026d3" />
                <circle cx="60" cy="130" r="4" fill="#e879f9" />
                <circle cx="40" cy="90" r="2" fill="#c026d3" />
                <circle cx="80" cy="60" r="5" fill="#f0abfc" />
              </motion.svg>

            </div>
            
            <div className="mt-auto relative z-10">
              <div className="w-12 h-12 bg-fuchsia-50 rounded-xl flex items-center justify-center mb-4 border border-fuchsia-100 group-hover:-translate-y-2 group-hover:rotate-12 transition-transform duration-500 shadow-sm relative overflow-hidden">
                <motion.div 
                   variants={{ hover: { opacity: [0, 0.5, 0] } }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="absolute inset-0 bg-fuchsia-200 blur-lg"
                />
                <MoonStar className="text-fuchsia-500 relative z-10" size={24} />
              </div>
              <h3 className="text-xl font-black text-gray-800 mb-2 uppercase group-hover:text-fuchsia-600 transition-colors">Astrological Charts</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">Recently started exploring cosmic blueprints. Decoding the alignments of stars and planets.</p>
            </div>
          </motion.div>

          {/* Card 4: Travel - THE GLOBAL NETWORK */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover="hover"
            className="md:col-span-1 md:row-span-1 group relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white p-6 md:p-8 flex flex-col min-h-[280px] md:min-h-0 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-15px_rgba(16,185,129,0.25)] transition-all duration-500"
          >
             {/* Complex Flight Map Animation */}
             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none overflow-hidden mix-blend-multiply">
               <svg viewBox="0 0 300 300" className="w-[150%] h-[150%] absolute -top-10 -left-10">
                  {/* Grid / Lat-Long Lines */}
                  <g opacity="0.1" stroke="#059669" strokeWidth="1">
                    {[...Array(10)].map((_, i) => <line key={`h-${i}`} x1="0" y1={i * 30} x2="300" y2={i * 30} />)}
                    {[...Array(10)].map((_, i) => <line key={`v-${i}`} x1={i * 30} y1="0" x2={i * 30} y2="300" />)}
                  </g>
                  
                  {/* Flight Paths */}
                  <motion.path 
                    d="M 50 250 Q 150 100 250 50" 
                    fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="5 5"
                    variants={{ hover: { strokeDashoffset: [100, 0] } }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.path 
                    d="M 30 150 Q 150 250 280 180" 
                    fill="none" stroke="#34d399" strokeWidth="1.5"
                    variants={{ hover: { pathLength: [0, 1, 0] } }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.path 
                    d="M 150 50 Q 200 150 100 280" 
                    fill="none" stroke="#059669" strokeWidth="3" opacity="0.4"
                    variants={{ hover: { pathLength: [0, 1, 0] } }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />

                  {/* Pulsing Nodes */}
                  <motion.circle cx="50" cy="250" r="4" fill="#10b981" variants={{ hover: { scale: [1, 2, 1], opacity: [1, 0.5, 1] } }} transition={{ duration: 2, repeat: Infinity }} />
                  <motion.circle cx="250" cy="50" r="4" fill="#10b981" variants={{ hover: { scale: [1, 2, 1], opacity: [1, 0.5, 1] } }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
                  <motion.circle cx="30" cy="150" r="3" fill="#34d399" />
                  <motion.circle cx="280" cy="180" r="3" fill="#34d399" />
                  <motion.circle cx="150" cy="50" r="5" fill="#059669" />
                  <motion.circle cx="100" cy="280" r="5" fill="#059669" />
               </svg>
             </div>
            
            <div className="mt-auto relative z-10">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 border border-emerald-100 group-hover:translate-x-2 transition-transform duration-500 shadow-sm relative overflow-hidden">
                <motion.div 
                   variants={{ hover: { x: [-50, 50] } }}
                   transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 bg-emerald-200/50 skew-x-12"
                />
                <Plane className="text-emerald-500 relative z-10" size={24} />
              </div>
              <h3 className="text-xl font-black text-gray-800 mb-2 uppercase group-hover:text-emerald-600 transition-colors">Wanderlust</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">Traveling to new places, experiencing different cultures, and finding inspiration in the unknown.</p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default BeyondTech;
