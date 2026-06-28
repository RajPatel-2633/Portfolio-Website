import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Handshake, Landmark, Lightbulb, BrainCircuit, Sprout, Cpu, Network, Zap, Sparkles, ScanFace, Users, BadgeCheck } from 'lucide-react';

// --- UNIQUE EFFECT COMPONENTS ---

const SoundWaveEffect = ({ inView }) => {
  return (
    <div className="absolute inset-0 flex items-end justify-center pb-10 pointer-events-none z-20">
      <div className="flex items-center space-x-1 h-32">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ height: 10, opacity: 0 }}
            animate={inView ? { 
              height: [10, Math.random() * 100 + 20, 10], 
              opacity: [0.5, 1, 0.5] 
            } : { height: 10, opacity: 0 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
            className="w-2 bg-[#4F6F52] rounded-full shadow-[0_0_15px_#4F6F52]"
          />
        ))}
      </div>
    </div>
  );
};

const NodeNetworkEffect = ({ inView }) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
      <motion.svg 
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="w-full h-full"
      >
        {[...Array(20)].map((_, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={`${Math.random() * 100}%`}
            cy={`${Math.random() * 100}%`}
            r="3"
            fill="rgba(79, 111, 82, 0.8)"
            animate={inView ? {
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20]
            } : {}}
            transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
          />
        ))}
        <motion.line
          x1="20%" y1="20%" x2="80%" y2="80%"
          stroke="rgba(79, 111, 82, 0.3)"
          strokeWidth="2"
          animate={inView ? { strokeDasharray: ["0, 1000", "1000, 0"] } : {}}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.line
          x1="80%" y1="20%" x2="20%" y2="80%"
          stroke="rgba(79, 111, 82, 0.3)"
          strokeWidth="2"
          animate={inView ? { strokeDasharray: ["0, 1000", "1000, 0"] } : {}}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </motion.svg>
    </div>
  );
};

const SSIPAnimation = ({ inView }) => {
  const [count, setCount] = useState(0);

  // Counter logic (starts at 1.5s, ends at 2.5s)
  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }
    
    let interval;
    // Delay start by 1500ms to allow math symbols to process
    const timer = setTimeout(() => {
      let start = 0;
      const end = 54000;
      const duration = 1000; 
      const increment = end / (duration / 16);
      
      interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    }, 1500);

    return () => {
      clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, [inView]);

  return (
    <div className="w-full h-full bg-[#fdf8f5] relative flex flex-col items-center justify-center overflow-hidden pt-10">
      
      {/* Top SSIP Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="absolute top-6 md:top-10 flex flex-col items-center z-30 w-full"
      >
        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-2 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-orange-100">
          <BadgeCheck className="text-orange-500" size={32} />
          <span className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-500 tracking-wider">
            SSIP
          </span>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-4 flex flex-col items-center"
        >
          <span className="text-xs md:text-sm text-gray-500 font-mono tracking-widest uppercase mb-1 drop-shadow-sm">Project</span>
          <span className="text-sm md:text-base font-bold text-gray-800 tracking-wide text-center bg-white/60 backdrop-blur-sm px-4 py-1 rounded-full border border-orange-200 shadow-sm">
            Smart Attendance Management
          </span>
        </motion.div>
      </motion.div>

      {/* Background Smart Attendance Effects */}
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-20 pointer-events-none">
        <motion.div 
          animate={inView ? { rotate: 360 } : {}}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-[120%] h-[120%] absolute border-[1px] border-orange-200 border-dashed rounded-full"
        />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`attendance-${i}`}
            initial={{ opacity: 0, scale: 0.5, x: (Math.random() - 0.5) * 400, y: (Math.random() - 0.5) * 400 }}
            animate={inView ? { opacity: [0, 1, 0], scale: [0.5, 1, 0.5] } : {}}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute"
          >
            {i % 2 === 0 ? <ScanFace size={40} className="text-orange-400" /> : <Users size={40} className="text-blue-400" />}
          </motion.div>
        ))}
      </div>

      {/* Phase 1: Processing Background */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={inView ? { opacity: 0 } : { opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute inset-0 flex flex-wrap items-center justify-center p-4 md:p-8 gap-4 opacity-40 text-orange-600 font-mono text-xl z-10"
      >
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: [0, 1, 0], y: -10 } : {}}
            transition={{ 
              duration: Math.random() * 1 + 0.5, 
              repeat: Infinity, 
              delay: Math.random() * 1 
            }}
          >
            {['[SCAN]', 'VERIFIED', 'ID:492', 'AUTH', 'MATCH', '100%', 'OK', 'USER', 'FACE_ID', 'SUCCESS'][Math.floor(Math.random() * 10)]}
          </motion.span>
        ))}
      </motion.div>

      {/* Phase 2 & 3: The Final Tally and Stamp */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
        transition={{ delay: 1.5, type: "spring", damping: 15 }}
        className="relative z-20 flex flex-col items-center justify-center mt-12"
      >
        {/* Glow behind counter */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute inset-0 bg-yellow-400/30 blur-[40px] rounded-full"
        />

        {/* Counter */}
        <span className="text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-600 relative z-10 mb-4 font-mono tabular-nums">
          ₹{count.toLocaleString()}
        </span>

        {/* Approval Stamp Box */}
        <motion.div
          initial={{ scale: 2, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 2, opacity: 0 }}
          transition={{ delay: 2.8, type: "spring", bounce: 0.5 }}
          className="px-6 py-2 border-4 border-green-500 text-green-600 font-black uppercase tracking-widest text-lg md:text-xl rounded-md transform rotate-[-8deg] backdrop-blur-sm bg-white/90 shadow-2xl"
        >
          Grant Approved
        </motion.div>
      </motion.div>

    </div>
  );
};

const HyperspaceEffect = ({ inView }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 overflow-hidden" style={{ perspective: '1000px' }}>
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ z: -1000, opacity: 0, x: (Math.random() - 0.5) * 500, y: (Math.random() - 0.5) * 500 }}
          animate={inView ? { 
            z: [0, 1000], 
            opacity: [0, 1, 0],
          } : {}}
          transition={{
            duration: Math.random() * 1.5 + 0.5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2
          }}
          className="absolute w-1 h-16 bg-blue-400/60 rounded-full"
          style={{ transformOrigin: 'center' }}
        />
      ))}
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }}
        transition={{ type: "spring", bounce: 0.5, delay: 0.5 }}
        className="w-32 h-32 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full blur-3xl opacity-40 absolute bottom-10"
      />
    </div>
  );
};

const YuktiAnimation = ({ inView }) => {
  return (
    <div className="w-full h-full bg-[#0a0f1c] relative flex items-center justify-center overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-[#0a0f1c] to-[#0a0f1c]"></div>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100%", x: (Math.random() - 0.5) * 400, opacity: 0 }}
            animate={inView ? { y: "-100%", opacity: [0, 1, 0] } : {}}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2,
            }}
            className="absolute left-1/2 w-1 h-16 bg-gradient-to-t from-transparent via-blue-400 to-transparent blur-[1px]"
          />
        ))}
      </div>

      <div className="flex w-full h-full relative z-10" style={{ perspective: '1000px' }}>
        {/* Left Side: Ministry of Education */}
        <motion.div
          initial={{ rotateY: -30, x: -100, opacity: 0 }}
          animate={inView ? { rotateY: 0, x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, type: "spring", bounce: 0.4, delay: 0.2 }}
          className="w-1/2 h-full flex flex-col items-center justify-center relative bg-gradient-to-br from-orange-500/10 to-transparent border-r border-orange-500/20 backdrop-blur-md"
        >
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_2s_infinite]"></div>
          
          <motion.div 
            animate={inView ? { y: [0, -10, 0] } : {}} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-20 h-20 md:w-28 md:h-28 rounded-3xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(249,115,22,0.4)] border border-orange-300/50 p-4 md:p-6 relative group"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl"></div>
            <Landmark size={50} className="text-white drop-shadow-lg" />
          </motion.div>
          
          <span className="text-xs md:text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-400 tracking-[0.1em] md:tracking-[0.2em] text-center px-4 uppercase drop-shadow-md">
            Ministry of <br/> Education
          </span>
          <span className="text-[10px] md:text-xs text-orange-200/60 mt-3 font-mono tracking-widest uppercase text-center">Government of India</span>
        </motion.div>

        {/* Right Side: Yukti Innovation */}
        <motion.div
          initial={{ rotateY: 30, x: 100, opacity: 0 }}
          animate={inView ? { rotateY: 0, x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, type: "spring", bounce: 0.4, delay: 0.4 }}
          className="w-1/2 h-full flex flex-col items-center justify-center relative bg-gradient-to-bl from-blue-500/10 to-transparent border-l border-blue-500/20 backdrop-blur-md"
        >
          <motion.div 
            animate={inView ? { y: [0, -10, 0] } : {}} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="w-20 h-20 md:w-28 md:h-28 rounded-3xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(59,130,246,0.4)] border border-blue-300/50 p-4 md:p-6 relative group"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl"></div>
            <Lightbulb size={50} className="text-white drop-shadow-lg" />
          </motion.div>
          
          <span className="text-xs md:text-sm font-black text-transparent bg-clip-text bg-gradient-to-l from-blue-200 to-blue-400 tracking-[0.1em] md:tracking-[0.2em] text-center px-4 uppercase drop-shadow-md">
            Yukti Innovation <br/> Challenge
          </span>
          <span className="text-[10px] md:text-xs text-blue-300 mt-3 font-mono tracking-widest bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30 font-bold shadow-[0_0_15px_rgba(59,130,246,0.5)]">2025</span>
        </motion.div>
      </div>

      {/* Central Spark */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={inView ? { scale: 1, rotate: 0 } : {}}
        transition={{ delay: 1.2, duration: 1, type: "spring", bounce: 0.6 }}
        className="absolute z-20 flex items-center justify-center pointer-events-none"
      >
        <div className="relative flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full border-t-2 border-r-2 border-orange-400/80"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute w-16 h-16 md:w-20 md:h-20 rounded-full border-b-2 border-l-2 border-blue-400/80"
          />
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0a0f1c] rounded-full flex items-center justify-center border border-gray-700 shadow-[0_0_30px_rgba(255,255,255,0.1)] relative overflow-hidden backdrop-blur-xl">
             <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-blue-500/20"></div>
             <Sparkles size={24} className="text-yellow-300 drop-shadow-[0_0_10px_rgba(253,224,71,0.8)] relative z-10 md:w-8 md:h-8" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const WadhwaniAnimation = ({ inView }) => {
  return (
    <div className="w-full h-full bg-[#051008] relative flex items-center justify-center overflow-hidden">
      
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ 
        backgroundImage: `linear-gradient(rgba(79,111,82,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(79,111,82,0.3) 1px, transparent 1px)`, 
        backgroundSize: '40px 40px',
        backgroundPosition: 'center center'
      }}>
        <motion.div 
           animate={inView ? { y: [0, -40], opacity: [0.5, 1, 0.5] } : {}} 
           transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
           className="w-full h-full bg-gradient-to-b from-transparent via-[#4F6F52]/10 to-transparent" 
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            initial={{ opacity: 0, scale: 0, x: (Math.random() - 0.5) * 300, y: (Math.random() - 0.5) * 300 }}
            animate={inView ? { opacity: [0, 0.8, 0], scale: [0, 1, 0], y: "-=50" } : {}}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute left-1/2 top-1/2 text-[#4F6F52]"
          >
            {i % 3 === 0 ? <Sprout size={16} /> : i % 3 === 1 ? <Cpu size={16} /> : <Network size={16} />}
          </motion.div>
        ))}
      </div>

      {/* Redo Connections using divs for better centering */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={inView ? { width: "60%", opacity: 1 } : {}}
          transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
          className="h-1 bg-gradient-to-r from-blue-500 via-[#4F6F52] to-green-500 absolute rounded-full shadow-[0_0_15px_#4F6F52] overflow-hidden"
        >
          <motion.div 
            animate={{ x: ["-100%", "400%"] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-1/4 h-full bg-white opacity-80 blur-[2px]"
          />
        </motion.div>
      </div>

      {/* Center Neural Core */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1, type: "spring", bounce: 0.5, delay: 0.5 }}
        className="absolute z-30 flex flex-col items-center justify-center pointer-events-none"
      >
        <div className="relative flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-4 rounded-full border border-[#4F6F52]/50 border-dashed"
          />
          <motion.div 
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-8 md:-inset-10 rounded-full border border-[#4F6F52]/30"
          />
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#1a2f20] to-[#0a140d] border-2 border-[#4F6F52] flex items-center justify-center shadow-[0_0_40px_rgba(79,111,82,0.6)] backdrop-blur-xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#4F6F52]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <BrainCircuit size={40} className="text-[#86efac] drop-shadow-[0_0_15px_rgba(134,239,172,0.8)] md:w-12 md:h-12" />
          </div>
        </div>
      </motion.div>

      {/* Left Side: Wadhwani AI */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
        className="absolute left-[5%] md:left-[15%] flex flex-col items-center z-20 group"
      >
        <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-[#0a1a2a] border border-blue-500/40 flex items-center justify-center mb-2 md:mb-4 shadow-[0_0_30px_rgba(59,130,246,0.3)] backdrop-blur-md overflow-hidden relative">
          <div className="absolute w-full h-full bg-blue-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl"></div>
          <span className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-cyan-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]">W</span>
        </div>
        <span className="text-blue-200 font-mono text-[8px] md:text-xs font-bold tracking-[0.1em] md:tracking-[0.2em] text-center uppercase bg-blue-900/40 px-2 py-1 md:px-3 md:py-1 rounded border border-blue-500/30 backdrop-blur-sm">Wadhwani AI</span>
      </motion.div>

      {/* Right Side: Raj Patel */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 1.8, duration: 0.8, type: "spring" }}
        className="absolute right-[5%] md:right-[15%] flex flex-col items-center z-20 group"
      >
        <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-[#0d2a14] border border-green-500/40 flex items-center justify-center mb-2 md:mb-4 shadow-[0_0_30px_rgba(34,197,94,0.3)] backdrop-blur-md overflow-hidden relative">
           <div className="absolute w-full h-full bg-green-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl"></div>
          <span className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-emerald-300 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]">RP</span>
        </div>
        <span className="text-green-200 font-mono text-[8px] md:text-xs font-bold tracking-[0.1em] md:tracking-[0.2em] text-center uppercase bg-green-900/40 px-2 py-1 md:px-3 md:py-1 rounded border border-green-500/30 backdrop-blur-sm">Raj Patel</span>
      </motion.div>

      {/* Bottom Right Text Panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-30"
      >
        <div className="flex flex-col items-end bg-[#051008]/80 backdrop-blur-md p-3 md:p-4 rounded-xl border border-[#4F6F52]/30 shadow-2xl">
          <div className="flex items-center gap-2 mb-1 md:mb-2">
            <Zap size={14} className="text-[#86efac]" />
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-[#86efac]" />
          </div>
          <span className="text-gray-300 font-mono text-[8px] md:text-[10px] text-right leading-relaxed max-w-[120px] md:max-w-[160px] font-bold">
            STEP TOWARDS BETTERMENT OF AGRICULTURE
          </span>
        </div>
      </motion.div>
    </div>
  );
};

// --- DATA ---

const ACHIEVEMENTS = [
  {
    id: "speaker",
    title: "Research Speaker",
    event: "GRAINS 2024",
    desc: "Presented research on \"Deep Learning Model for Cotton Crop Disease\" Detection. Shared insights on bridging AI and agriculture with a diverse audience of researchers and industry experts.",
    image: "/research_speaker.png", 
    color: "#ffffff",
  },
  {
    id: "wadhwani",
    title: "Wadhwani AI Collaboration",
    event: "Research & Data Contribution",
    desc: "Worked closely on AI-driven crop pest and disease detection initiatives. Contributed heavily to creating curated, high-quality datasets to improve the robustness of national-level machine learning models.",
    color: "#f8faf8",
    CustomImageComponent: WadhwaniAnimation
  },
  {
    id: "ssip",
    title: "SSIP Grant Winner",
    event: "₹54,000 Funding",
    desc: "Successfully secured a prestigious grant of ₹54,000 under the Student Startup & Innovation Policy (SSIP). This funding accelerated the development and deployment of my core AI prototypes.",
    color: "#fdf8f5",
    CustomImageComponent: SSIPAnimation
  },
  {
    id: "yukti",
    title: "YUKTI Innovation Challenge 2025",
    event: "National Level Qualifier",
    desc: "Qualified for the highly competitive national-level innovation challenge organized by the Ministry of Education (MoE), demonstrating the scalable impact of my tech solutions.",
    color: "#f5f8fd",
    CustomImageComponent: YuktiAnimation
  }
];

const Card = ({ achievement, i, progress, range, targetScale }) => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  });

  // Trigger animations when the card occupies the viewport
  const inView = useInView(containerRef, { margin: "-30% 0px -30% 0px" });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const Effect = achievement.EffectComponent;

  // Alternate text slide-in direction
  const textVariants = {
    hidden: { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div ref={containerRef} className="h-screen w-full flex items-center justify-center sticky top-0 px-6">
      <motion.div 
        style={{ 
          scale,
          backgroundColor: achievement.color,
          top: `calc(-5vh + ${i * 25}px)`
        }} 
        className="flex flex-col-reverse lg:flex-row relative w-full max-w-6xl h-[80vh] md:h-[75vh] rounded-[2rem] shadow-[0_20px_80px_-20px_rgba(0,0,0,0.15)] origin-top overflow-hidden border border-gray-100/50"
      >
        
        {/* Text Content */}
        <motion.div 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
          className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10"
        >
          <div className="text-[#4F6F52] font-mono text-xs md:text-sm font-bold tracking-widest uppercase mb-4 md:mb-6">
            Achievement 0{i + 1}
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-black mb-3 md:mb-4 leading-tight">
            {achievement.title}
          </h2>
          {achievement.event && (
            <div className="text-lg md:text-xl font-bold text-gray-800 mb-6">
              {achievement.event}
            </div>
          )}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-md">
            {achievement.desc}
          </p>
        </motion.div>
        
        {/* Image Content */}
        <div className="w-full lg:w-1/2 h-48 md:h-64 lg:h-full overflow-hidden relative">
          {achievement.CustomImageComponent ? (
            <achievement.CustomImageComponent inView={inView} />
          ) : (
            <>
              <motion.div style={{ scale: imageScale }} className="w-full h-full origin-center">
                <img 
                  src={achievement.image} 
                  alt={achievement.title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Subtle gradient overlay to ensure image blends nicely */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-l lg:from-black/10 lg:to-black/5 pointer-events-none" />
              
              {/* Render the unique effect overlay */}
              {Effect && <Effect inView={inView} />}
            </>
          )}
        </div>

      </motion.div>
    </div>
  );
};

export default function AchievementsCards() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={containerRef} className="relative w-full bg-[#FAFAFA]" style={{ paddingBottom: '10vh' }}>
      
      {/* Title Area */}
      <div className="w-full flex items-center justify-center pt-24 pb-12 z-10">
        <div className="flex items-center space-x-4">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-black">Key Achievements</h2>
          <div className="w-3 h-3 rounded-full bg-[#4F6F52] animate-pulse mt-2 md:mt-4" />
        </div>
      </div>

      <div className="relative w-full">
        {ACHIEVEMENTS.map((achievement, i) => {
          const targetScale = 1 - ((ACHIEVEMENTS.length - i) * 0.05);
          return (
            <Card 
              key={achievement.id} 
              i={i} 
              achievement={achievement} 
              progress={scrollYProgress} 
              range={[i * 0.25, 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
      
    </section>
  );
}
