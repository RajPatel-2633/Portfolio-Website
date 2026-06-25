import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Handshake, Landmark, Lightbulb } from 'lucide-react';

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
    
    // Delay start by 1500ms to allow math symbols to process
    const timer = setTimeout(() => {
      let start = 0;
      const end = 54000;
      const duration = 1000; 
      const increment = end / (duration / 16);
      
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    }, 1500);

    return () => clearTimeout(timer);
  }, [inView]);

  return (
    <div className="w-full h-full bg-[#fdf8f5] relative flex items-center justify-center overflow-hidden">
      
      {/* Phase 1: Processing Background */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={inView ? { opacity: 0 } : { opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute inset-0 flex flex-wrap items-center justify-center p-4 md:p-8 gap-4 opacity-40 text-[#4F6F52] font-mono text-xl"
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
            {['∑', '∫', 'f(x)', '+', '%', 'Δ', '01', '10', 'μ', 'π', '≈', '≠'][Math.floor(Math.random() * 12)]}
          </motion.span>
        ))}
      </motion.div>

      {/* Phase 2 & 3: The Final Tally and Stamp */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
        transition={{ delay: 1.5, type: "spring", damping: 15 }}
        className="relative z-20 flex flex-col items-center justify-center"
      >
        {/* Glow behind counter */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full"
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
          className="px-6 py-2 border-4 border-green-500 text-green-600 font-black uppercase tracking-widest text-lg md:text-xl rounded-md transform rotate-[-8deg] backdrop-blur-sm bg-white/70 shadow-lg"
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
    <div className="w-full h-full bg-[#f5f8fd] relative flex items-center justify-center overflow-hidden">
      <div className="flex w-full h-full">
        {/* Left Side: Ministry of Education */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-1/2 h-full flex flex-col items-center justify-center border-r border-gray-200/50 bg-white/50 backdrop-blur-sm relative z-0"
        >
          {/* Logo Placeholder - User can replace icon with <img src="/moe-logo.png" className="w-full h-full object-contain" /> */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-orange-50 flex items-center justify-center mb-6 shadow-xl border border-orange-100 overflow-hidden p-4">
            <Landmark size={40} className="text-orange-500" />
          </div>
          <span className="text-xs md:text-sm font-bold text-gray-800 tracking-widest text-center px-2">
            MINISTRY OF <br/> EDUCATION
          </span>
          <span className="text-[10px] md:text-xs text-gray-500 mt-2 font-mono">GOVERNMENT OF INDIA</span>
        </motion.div>

        {/* Right Side: Yukti Innovation */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-1/2 h-full flex flex-col items-center justify-center bg-blue-50/30 backdrop-blur-sm relative z-0"
        >
          {/* Logo Placeholder - User can replace icon with <img src="/yukti-logo.png" className="w-full h-full object-contain" /> */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-xl border border-blue-100 overflow-hidden p-4">
            <Lightbulb size={40} className="text-blue-500" />
          </div>
          <span className="text-xs md:text-sm font-bold text-gray-800 tracking-widest text-center px-2">
            YUKTI INNOVATION <br/> CHALLENGE
          </span>
          <span className="text-[10px] md:text-xs text-blue-500 mt-2 font-mono font-bold">2025</span>
        </motion.div>
      </div>

      {/* Decorative Connection */}
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={inView ? { scale: 1, rotate: 0 } : {}}
        transition={{ delay: 1, type: "spring", bounce: 0.6 }}
        className="absolute w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 z-10"
      >
        <span className="text-gray-300 font-black text-sm md:text-lg">X</span>
      </motion.div>
    </div>
  );
};

const WadhwaniAnimation = ({ inView }) => {
  return (
    <div className="w-full h-full bg-transparent relative flex items-center justify-center overflow-hidden">
      
      {/* Center Handshake */}
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: -10 }}
        animate={inView ? { scale: 1, opacity: 1, rotate: 0 } : {}}
        transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
        className="absolute z-20 flex flex-col items-center justify-center"
      >
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/50 border border-gray-200 flex items-center justify-center backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
          <Handshake size={48} className="text-[#4F6F52]" strokeWidth={1.5} />
        </div>
      </motion.div>

      {/* Connection Lines */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {/* Left Line */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={inView ? { width: "120px", opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-blue-500/50 to-transparent absolute left-1/2 -translate-x-full origin-right"
        />
        {/* Right Line */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={inView ? { width: "120px", opacity: 1 } : {}}
          transition={{ delay: 2.0, duration: 0.6, ease: "easeOut" }}
          className="h-px bg-gradient-to-l from-green-500/50 to-transparent absolute right-1/2 translate-x-full origin-left"
        />
      </div>

      {/* Left Side: Wadhwani AI */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute left-8 md:left-16 flex flex-col items-center z-20"
      >
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-3 shadow-[0_10px_30px_rgba(59,130,246,0.1)]">
          <span className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700">W</span>
        </div>
        <span className="text-gray-800 font-mono text-[10px] md:text-xs font-bold tracking-widest text-center">WADHWANI<br/>AI</span>
      </motion.div>

      {/* Right Side: Raj Patel */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 2.6, duration: 0.8 }}
        className="absolute right-8 md:right-16 flex flex-col items-center z-20"
      >
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center mb-3 shadow-[0_10px_30px_rgba(79,111,82,0.1)]">
          <span className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#4F6F52] to-green-600">RP</span>
        </div>
        <span className="text-gray-800 font-mono text-[10px] md:text-xs font-bold tracking-widest text-center">RAJ<br/>PATEL</span>
      </motion.div>

      {/* Bottom Right Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 3.4, duration: 0.8 }}
        className="absolute bottom-6 md:bottom-10 right-6 md:right-10 z-30"
      >
        <div className="flex flex-col items-end">
          <div className="w-8 h-px bg-[#4F6F52] mb-2" />
          <span className="text-gray-600 font-mono text-[10px] md:text-xs text-right leading-relaxed max-w-[150px] md:max-w-[200px]">
            Step Towards Betterment of Agriculture
          </span>
        </div>
      </motion.div>

      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
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
