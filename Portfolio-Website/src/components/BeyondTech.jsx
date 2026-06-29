import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Dumbbell, PenTool, Plane, MoonStar } from 'lucide-react';

const CARDS = [
  {
    title: "Iron & Discipline",
    subtitle: "Building mental resilience for tough engineering problems.",
    icon: Dumbbell,
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    title: "Graphology",
    subtitle: "Analyzing strokes and pressure to understand human behavior.",
    icon: PenTool,
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
  },
  {
    title: "Astrological Charts",
    subtitle: "Exploring cosmic blueprints and alignments of stars.",
    icon: MoonStar,
    color: "text-fuchsia-500",
    bg: "bg-fuchsia-50",
    border: "border-fuchsia-100",
  },
  {
    title: "Wanderlust",
    subtitle: "Experiencing cultures and finding inspiration in the unknown.",
    icon: Plane,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  }
];

const BeyondTech = () => {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#FAFAFA]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row bg-[#FAFAFA]">
        
        {/* Left Side: Sticky Title Context */}
        <div className="w-full md:w-[45%] h-[30vh] md:h-screen flex flex-col justify-center items-center md:items-start px-8 md:pl-16 lg:pl-24 z-20 shrink-0">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white backdrop-blur-md rounded-full mb-6 border border-gray-200 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-[#4F6F52] animate-pulse" />
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Beyond The Screen</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter text-black leading-[0.9] text-center md:text-left">
            LIFE BEYOND<br/><span className="text-gray-300">CODE.</span>
          </h2>
          <p className="mt-6 text-gray-500 text-lg md:text-xl font-medium max-w-sm text-center md:text-left">
            Keep scrolling to distribute the deck and see what drives me outside of software engineering.
          </p>
        </div>

        {/* Right Side: The Card Dealer */}
        <div className="w-full md:w-[55%] h-[70vh] md:h-screen relative flex items-center justify-center perspective-[1000px]">
          
          {CARDS.map((card, index) => {
             // Total of 4 cards. We want them to distribute vertically into a list.
             // Target Y positions relative to the center (0):
             // index 0: -210px
             // index 1: -70px
             // index 2: 70px
             // index 3: 210px
             const finalY = (index - 1.5) * 140; 
             
             // Starting positions for the "deck" look
             const startY = index * 4; 
             const startRotate = (index % 2 === 0 ? 1 : -1) * (index * 3); // alternating slight rotation

             // Define the sequential scrolling phase for this specific card
             // We have 4 cards, so each gets 25% of the scroll timeline to move into place.
             const startPhase = index * 0.25;
             const endPhase = startPhase + 0.25;

             // Map the scroll progress manually so the value clamps correctly before and after its phase
             const dynamicY = useTransform(scrollYProgress, (v) => {
                if (v <= startPhase) return startY;
                if (v >= endPhase) return finalY;
                const progress = (v - startPhase) / (endPhase - startPhase);
                // Ease out calculation for smoother sliding
                const easeOut = 1 - Math.pow(1 - progress, 3);
                return startY + (finalY - startY) * easeOut;
             });

             const dynamicRotate = useTransform(scrollYProgress, (v) => {
                if (v <= startPhase) return startRotate;
                if (v >= endPhase) return 0;
                const progress = (v - startPhase) / (endPhase - startPhase);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                return startRotate + (0 - startRotate) * easeOut;
             });

             // We also fade them in slightly as they deal out for a premium touch, or keep opacity 1. 
             // Let's keep opacity 1 so it literally looks like a physical deck.

             return (
               <motion.div
                 key={index}
                 style={{ 
                   y: dynamicY, 
                   rotate: dynamicRotate, 
                   zIndex: 10 - index // Card 0 is on top of the deck
                 }}
                 className="absolute w-[85%] md:w-[75%] max-w-md bg-white rounded-3xl border border-gray-100 p-6 flex flex-row items-center gap-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] hover:scale-[1.02] transition-all duration-300 cursor-default group"
               >
                 <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center border ${card.bg} ${card.border} group-hover:rotate-12 transition-transform duration-500`}>
                    <card.icon className={card.color} size={28} />
                 </div>
                 <div>
                    <h3 className="text-xl font-black text-gray-800 uppercase tracking-tight mb-1">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">
                      {card.subtitle}
                    </p>
                 </div>
               </motion.div>
             )
          })}
        </div>

      </div>
    </section>
  );
};

export default BeyondTech;
