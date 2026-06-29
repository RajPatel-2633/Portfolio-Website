import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { MapPin, Mic, Rocket, Diamond, Handshake, Briefcase, Target } from 'lucide-react';

const MILESTONES = [
  { year: "2022", title: "Started B.E. in Computer Science", subtitle: "at GEC Bharuch", icon: MapPin },
  { year: "2024", title: "Research Speaker", subtitle: "at GRAINS 2024, Ahmedabad Univ.", icon: Mic },
  { year: "2025", title: "Received SSIP Grant of ₹54,000", subtitle: "for my project", icon: Diamond },
  { year: "2025", title: "Wadhwani AI Collaboration", subtitle: "on AI for Agri", icon: Handshake },
  { year: "2025", title: "Qualified for YUKTI Innovation Challenge", subtitle: "(MoE)", icon: Rocket },
  { year: "2026", title: "ML & Backend Intern", subtitle: "at IT-IDOL Technologies", icon: Briefcase },
  { year: "Future", title: "Building AI products that create impact", subtitle: "The journey continues", icon: Target, isAccent: true }
];

const AVATARS = [
  { emoji: "🚶‍♂️", flip: true },
  { emoji: "🚲", flip: true },
  { emoji: "🛵", flip: true },
  { emoji: "🏍️", flip: true },
  { emoji: "🚗", flip: true },
  { emoji: "🏎️", flip: true },
  { emoji: "🚀", flip: false },
];

export default function JourneyTimeline() {
  const targetRef = useRef(null);
  const [stage, setStage] = useState(0);
  const nodesRef = useRef([]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Calculate intersections to evolve the avatar
  useEffect(() => {
    const checkIntersections = () => {
      // The avatar is placed closer to the left edge now (15vw)
      const avatarX = window.innerWidth * 0.15;
      let newStage = 0;
      
      nodesRef.current.forEach((node, index) => {
        if (node) {
          const rect = node.getBoundingClientRect();
          const nodeCenterX = rect.left + rect.width / 2;
          
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
    
    checkIntersections();

    return () => {
      window.removeEventListener("scroll", checkIntersections);
      window.removeEventListener("resize", checkIntersections);
    };
  }, []);

  const x = useTransform(scrollYProgress, (v) => {
    if (typeof window === 'undefined') return "0vw";
    // Avatar is now fixed in the center (50vw)
    const avatarVw = 50;
    const isMobile = window.innerWidth < 768;
    // Padding to push the first node to the right of the center initially
    const paddingLeft = 70; 
    const cardWidth = isMobile ? 80 : 40; 
    
    // Position of the final node (center of its cell)
    const nodeX = paddingLeft + (6 * cardWidth) + (cardWidth / 2);
    
    // Max translation required so final node ends up exactly at the avatar's center position
    const maxTranslationVw = nodeX - avatarVw;
    
    return `-${v * maxTranslationVw}vw`;
  });

  return (
    <section ref={targetRef} className="relative h-[1200vh] bg-[#FAFAFA]">
      
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* Title exactly matching mockup */}
        <div className="absolute top-28 md:top-32 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-full text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-black uppercase">
            My Journey
          </h2>
        </div>

        {/* THE EVOLVING AVATAR - Now centered */}
        <div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-full z-50 pointer-events-none pb-1 md:pb-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={stage}
              initial={{ opacity: 0, y: -40, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, x: 50, scale: 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="text-6xl md:text-7xl drop-shadow-xl flex flex-col items-center justify-end"
            >
              {/* Bouncing animation */}
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

        {/* Horizontal Track */}
        <motion.div style={{ x }} className="flex items-center h-full pl-[70vw] pr-[50vw] relative z-10">
          
          {MILESTONES.map((milestone, index) => {
            const isTop = index % 2 === 0;
            
            return (
              <div key={index} className="flex-shrink-0 w-[80vw] md:w-[40vw] relative h-full flex flex-col justify-center items-center">
                
                {/* --- SEGMENTED DASHED ROAD --- */}
                {/* Line from far left to first node */}
                {index === 0 && (
                  <div className="absolute top-[65%] right-[50%] w-[1000vw] border-t-[3px] border-dashed border-gray-300 -translate-y-1/2 z-0" />
                )}
                
                {/* Line from previous node to this node's center */}
                {index > 0 && (
                  <div className="absolute top-[65%] left-0 w-[50%] border-t-[3px] border-dashed border-gray-300 -translate-y-1/2 z-0" />
                )}

                {/* Line from this node's center to the next node */}
                {index < MILESTONES.length - 1 && (
                  <div className="absolute top-[65%] left-[50%] w-[50%] border-t-[3px] border-dashed border-gray-300 -translate-y-1/2 z-0" />
                )}
                {/* ----------------------------- */}

                {/* Thin vertical connecting branch */}
                <div className={`absolute left-1/2 w-[2px] bg-gray-200 -translate-x-1/2 z-0 ${
                  isTop ? 'bottom-[35%] h-[6vh]' : 'top-[65%] h-[6vh]'
                }`} />

                {/* The Node matching mockup */}
                <div 
                  ref={(el) => nodesRef.current[index] = el}
                  className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#FAFAFA] border-2 border-gray-300">
                    <milestone.icon className="w-4 h-4 text-gray-500" />
                  </div>
                </div>

                {/* The Card matching mockup */}
                <motion.div 
                  className={`absolute left-1/2 -translate-x-1/2 w-[70vw] md:w-[24vw] z-30 ${
                    isTop ? 'bottom-[calc(35%+6vh)]' : 'top-[calc(65%+6vh)]'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`p-6 md:p-8 rounded-[1.5rem] bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)]`}>
                    
                    <div className="flex items-center mb-3">
                      <span className="text-xs font-bold tracking-widest px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">
                        {milestone.year}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-black leading-snug mb-2 text-black tracking-tight">
                      {milestone.title}
                    </h3>
                    
                    <p className="text-sm font-medium text-gray-500">
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
