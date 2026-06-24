import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Mic, Rocket, Diamond, Handshake, Briefcase, Target } from 'lucide-react';

const MILESTONES = [
  { year: "2022", title: "Started B.E. in Computer Science", subtitle: "at GEC Bharuch", icon: MapPin },
  { year: "2024", title: "Research Speaker", subtitle: "at GRAINS 2024, Ahmedabad Univ.", icon: Mic },
  { year: "2025", title: "Qualified for YUKTI Innovation Challenge", subtitle: "(MoE)", icon: Rocket },
  { year: "2025", title: "Received SSIP Grant of ₹54,000", subtitle: "for my project", icon: Diamond },
  { year: "2025", title: "Wadhwani AI Collaboration", subtitle: "on AI for Agri", icon: Handshake },
  { year: "2026", title: "ML & Backend Intern", subtitle: "at IT-IDOL Technologies", icon: Briefcase },
  { year: "Future", title: "Building AI products that create real impact", subtitle: "The journey continues", icon: Target, isAccent: true }
];

export default function JourneyTimeline() {
  const targetRef = useRef(null);

  // We track the scroll progress of the large 300vh container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Transform scroll progress to horizontal translation
  // The content translates horizontally as the user scrolls vertically.
  // 100% means the entire length, we want to translate enough to show the last card.
  // We use vw units for easy calculation. If we have 7 cards, each taking ~50vw, total is ~350vw.
  // We translate from 0 to -80% of the total width to ensure the last card is visible.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
  
  // A slower parallax layer for the background typography
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    // The massive height container that allows vertical scrolling
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      
      {/* The sticky container that holds the viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* Parallax Background Typography Layer */}
        <motion.div 
          style={{ x: backgroundX }} 
          className="absolute top-1/2 -translate-y-1/2 flex whitespace-nowrap opacity-[0.03] pointer-events-none select-none z-0"
        >
          {MILESTONES.map((m, i) => (
            <span key={`bg-${i}`} className="text-[30vw] font-black mr-[20vw] leading-none">
              {m.year}
            </span>
          ))}
        </motion.div>

        {/* Title overlay fixed on the left */}
        <div className="absolute top-12 left-12 md:top-24 md:left-24 z-50 pointer-events-none">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-sm font-bold text-white uppercase tracking-widest">Timeline</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">
            My Journey
          </h2>
        </div>

        {/* Foreground Horizontal Track */}
        <motion.div style={{ x }} className="flex items-center h-full pl-[10vw] md:pl-[30vw] pr-[30vw] relative z-10">
          
          {/* Continuous Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 z-0" />
          
          {MILESTONES.map((milestone, index) => {
            // Alternate positioning above and below the line
            const isTop = index % 2 === 0;
            
            return (
              <div key={index} className="flex-shrink-0 w-[80vw] md:w-[40vw] relative h-full flex flex-col justify-center items-center">
                
                {/* Connecting vertical line to the card */}
                <div className={`absolute left-1/2 w-px bg-white/20 -translate-x-1/2 z-0 ${
                  isTop ? 'top-1/2 h-[15vh]' : 'bottom-1/2 h-[15vh]'
                }`} />

                {/* The Node on the horizontal line */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-transform hover:scale-110 ${
                    milestone.isAccent ? 'bg-white shadow-[0_0_30px_rgba(255,255,255,0.5)] text-black' : 'bg-black border-4 border-white text-white'
                  }`}>
                    <milestone.icon className="w-5 h-5 md:w-8 md:h-8" />
                  </div>
                </div>

                {/* The Card */}
                <motion.div 
                  className={`absolute left-1/2 -translate-x-1/2 w-[70vw] md:w-[30vw] z-30 ${
                    isTop ? 'bottom-[calc(50%+15vh)]' : 'top-[calc(50%+15vh)]'
                  }`}
                  whileHover={{ scale: 1.05, y: isTop ? -10 : 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className={`p-8 rounded-3xl backdrop-blur-xl border ${
                    milestone.isAccent 
                      ? 'bg-white text-black border-white shadow-[0_20px_50px_-10px_rgba(255,255,255,0.2)]' 
                      : 'bg-white/5 text-white border-white/20 shadow-2xl'
                  }`}>
                    
                    <div className="flex items-center space-x-3 mb-4">
                      <span className={`text-sm font-bold tracking-widest px-3 py-1 rounded-full ${
                        milestone.isAccent ? 'bg-black text-white' : 'bg-white/20'
                      }`}>
                        {milestone.year}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black leading-tight mb-2">
                      {milestone.title}
                    </h3>
                    
                    <p className={`text-base font-medium ${
                      milestone.isAccent ? 'text-gray-800' : 'text-gray-400'
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
