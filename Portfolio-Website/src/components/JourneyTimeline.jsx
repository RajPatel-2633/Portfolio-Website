import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { MapPin, Mic, Rocket, Diamond, Handshake, Briefcase, Target } from 'lucide-react';

const MILESTONES = [
  { year: "2022", title: "Started B.E. in Computer Science", subtitle: "at GEC Bharuch", icon: MapPin },
  { year: "2025", title: "Received SSIP Grant of ₹54,000", subtitle: "for my project", icon: Diamond },
  { year: "2024", title: "Research Speaker", subtitle: "at GRAINS 2024, Ahmedabad Univ.", icon: Mic },
  { year: "2025", title: "Wadhwani AI Collaboration", subtitle: "on AI for Agri", icon: Handshake },
  { year: "2025", title: "Qualified for YUKTI Innovation Challenge", subtitle: "(MoE)", icon: Rocket },
  { year: "2026", title: "ML & Backend Intern", subtitle: "at IT-IDOL Technologies", icon: Briefcase },
  { year: "Future", title: "Building AI products that create real impact", subtitle: "The journey continues", icon: Target, isAccent: true }
];

const AVATARS = [
  { emoji: "🚶‍♂️", label: "Walking", flip: true },
  { emoji: "🚲", label: "Bicycle", flip: true },
  { emoji: "🛵", label: "Bike", flip: true },
  { emoji: "🏍️", label: "Sports Bike", flip: true },
  { emoji: "🚗", label: "Car", flip: true },
  { emoji: "🏎️", label: "Sports Car", flip: true },
  { emoji: "🚀", label: "Rocket", flip: false },
];

export default function JourneyTimeline() {
  const targetRef = useRef(null);
  const [stage, setStage] = useState(0);
  const nodesRef = useRef([]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Calculate the exact intersection of the nodes with the avatar
  useEffect(() => {
    const checkIntersections = () => {
      // The avatar is positioned at 30vw on desktop and 25vw on mobile
      const avatarX = window.innerWidth * (window.innerWidth >= 768 ? 0.3 : 0.25);
      let newStage = 0;
      
      nodesRef.current.forEach((node, index) => {
        if (node) {
          const rect = node.getBoundingClientRect();
          const nodeCenterX = rect.left + rect.width / 2;
          
          // If the node's center has scrolled to the left of the avatar, upgrade the vehicle!
          if (nodeCenterX <= avatarX) {
            newStage = index + 1;
          }
        }
      });

      if (newStage > 6) newStage = 6;
      setStage((prev) => (prev !== newStage ? newStage : prev));
    };

    window.addEventListener("scroll", checkIntersections, { passive: true });
    window.addEventListener("resize", checkIntersections, { passive: true });
    
    // Initial check on mount
    checkIntersections();

    return () => {
      window.removeEventListener("scroll", checkIntersections);
      window.removeEventListener("resize", checkIntersections);
    };
  }, []);

  const x = useTransform(scrollYProgress, (v) => {
    if (typeof window === 'undefined') return "0vw";
    const isMobile = window.innerWidth < 768;
    const avatarVw = isMobile ? 25 : 30;
    const paddingLeft = isMobile ? 80 : 60;
    const cardWidth = isMobile ? 100 : 50;
    
    // Position of the final node (index 6) in vw
    const nodeX = paddingLeft + (6 * cardWidth) + (cardWidth / 2);
    
    // Max translation required to place the final node exactly under the avatar
    const maxTranslationVw = nodeX - avatarVw;
    
    return `-${v * maxTranslationVw}vw`;
  });
  
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#FAFAFA]">
      
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* Parallax Background Typography Layer */}
        <motion.div 
          style={{ x: backgroundX }} 
          className="absolute top-1/2 -translate-y-1/2 flex whitespace-nowrap opacity-[0.03] pointer-events-none select-none z-0"
        >
          {MILESTONES.map((m, i) => (
            <span key={`bg-${i}`} className="text-[30vw] font-black mr-[20vw] leading-none text-black">
              {m.year}
            </span>
          ))}
        </motion.div>

        {/* Title overlay fixed in the center top */}
        <div className="absolute top-6 md:top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none flex flex-col items-center w-full text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 md:px-4 md:py-2 bg-green-50 backdrop-blur-md rounded-full mb-4 border border-green-100">
            <div className="w-2 h-2 rounded-full bg-[#4F6F52] animate-pulse" />
            <span className="text-xs md:text-sm font-bold text-[#4F6F52] uppercase tracking-widest">Timeline</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-black uppercase leading-tight">
            My Journey
          </h2>
        </div>

        {/* THE EVOLVING AVATAR (Fixed Camera) */}
        <div className="absolute top-[65%] left-[25vw] md:left-[30vw] -translate-x-1/2 -translate-y-full z-50 pointer-events-none pb-1 md:pb-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={stage}
              initial={{ opacity: 0, y: -40, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, x: 50, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-6xl md:text-8xl drop-shadow-xl flex flex-col items-center justify-end"
            >
              {/* Bouncing animation for driving/walking effect */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: stage === 0 ? 0.4 : 0.2, repeat: Infinity, ease: "easeInOut" }}
                style={{ originX: 0.5, originY: 1 }}
                className={AVATARS[stage].flip ? "scale-x-[-1]" : ""}
              >
                {AVATARS[stage].emoji}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Foreground Horizontal Track */}
        <motion.div style={{ x }} className="flex items-center h-full pl-[80vw] md:pl-[60vw] pr-0 relative z-10">
          
          {/* Dashed Road Line */}
          <div className="absolute top-[65%] left-[25vw] md:left-[30vw] right-[50vw] md:right-[25vw] h-0 border-t-[4px] border-dashed border-gray-300 -translate-y-1/2 z-0" />
          
          {MILESTONES.map((milestone, index) => {
            const isTop = index % 2 === 0;
            
            return (
              <div key={index} className="flex-shrink-0 w-[100vw] md:w-[50vw] relative h-full flex flex-col justify-center items-center">
                
                {/* Connecting vertical branch */}
                <div className={`absolute left-1/2 w-px bg-gray-300 -translate-x-1/2 z-0 ${
                  isTop ? 'bottom-[35%] h-[5vh]' : 'top-[65%] h-[5vh]'
                }`} />

                {/* The Node on the horizontal road */}
                <div 
                  ref={(el) => nodesRef.current[index] = el}
                  className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110 ${
                    milestone.isAccent ? 'bg-[#4F6F52] shadow-[0_0_30px_rgba(79,111,82,0.4)] text-white' : 'bg-white border-[3px] border-gray-300 text-[#4F6F52] shadow-sm'
                  }`}>
                    <milestone.icon className="w-4 h-4 md:w-6 md:h-6" />
                  </div>
                </div>

                {/* The Card */}
                <motion.div 
                  className={`absolute left-1/2 -translate-x-1/2 w-[75vw] md:w-[28vw] z-30 ${
                    isTop ? 'bottom-[calc(35%+5vh)]' : 'top-[calc(65%+5vh)]'
                  }`}
                  whileHover={{ scale: 1.05, y: isTop ? -10 : 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className={`p-6 md:p-8 rounded-3xl backdrop-blur-xl border ${
                    milestone.isAccent 
                      ? 'bg-[#4F6F52] text-white border-[#4F6F52] shadow-xl' 
                      : 'bg-white text-black border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)]'
                  }`}>
                    
                    <div className="flex items-center space-x-3 mb-3 md:mb-4">
                      <span className={`text-xs md:text-sm font-bold tracking-widest px-3 py-1 md:px-4 md:py-1.5 rounded-full ${
                        milestone.isAccent ? 'bg-white text-[#4F6F52]' : 'bg-green-50 text-[#4F6F52]'
                      }`}>
                        {milestone.year}
                      </span>
                    </div>

                    <h3 className={`text-xl md:text-3xl font-black leading-tight mb-2 ${milestone.isAccent ? 'text-white' : 'text-black'}`}>
                      {milestone.title}
                    </h3>
                    
                    <p className={`text-sm md:text-base font-medium ${
                      milestone.isAccent ? 'text-green-50' : 'text-gray-500'
                    }`}>
                      {milestone.subtitle}
                    </p>

                  </div>
                </motion.div>

              </div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}
