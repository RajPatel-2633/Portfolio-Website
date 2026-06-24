import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

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

const GrantCounterEffect = ({ inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }
    let start = 0;
    const end = 54000;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
        transition={{ type: "spring", damping: 15 }}
        className="bg-white/80 backdrop-blur-md px-8 py-4 rounded-3xl shadow-2xl border border-yellow-200/50"
      >
        <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
          ₹{count.toLocaleString()}
        </span>
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

// --- DATA ---

const ACHIEVEMENTS = [
  {
    id: "speaker",
    title: "Research Speaker",
    event: "GRAINS 2024",
    desc: "Presented research on \"Deep Learning Model for Cotton Crop Disease\" Detection. Shared insights on bridging AI and agriculture with a diverse audience of researchers and industry experts.",
    image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1200&auto=format&fit=crop", 
    color: "#ffffff",
    EffectComponent: SoundWaveEffect
  },
  {
    id: "wadhwani",
    title: "Wadhwani AI Collaboration",
    event: "Research & Data Contribution",
    desc: "Worked closely on AI-driven crop pest and disease detection initiatives. Contributed heavily to creating curated, high-quality datasets to improve the robustness of national-level machine learning models.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
    color: "#f8faf8",
    EffectComponent: NodeNetworkEffect
  },
  {
    id: "ssip",
    title: "SSIP Grant Winner",
    event: "₹54,000 Funding",
    desc: "Successfully secured a prestigious grant of ₹54,000 under the Student Startup & Innovation Policy (SSIP). This funding accelerated the development and deployment of my core AI prototypes.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1200&auto=format&fit=crop",
    color: "#fdf8f5",
    EffectComponent: GrantCounterEffect
  },
  {
    id: "yukti",
    title: "YUKTI Innovation Challenge 2025",
    event: "National Level Qualifier",
    desc: "Qualified for the highly competitive national-level innovation challenge organized by the Ministry of Education (MoE), demonstrating the scalable impact of my tech solutions.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    color: "#f5f8fd",
    EffectComponent: HyperspaceEffect
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
