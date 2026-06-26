
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { Lightbulb, Monitor, Server, Cloud, Brain, Globe, Map } from 'lucide-react';

const PIPELINE_STEPS = [
  { 
    icon: Lightbulb, 
    title: "Problem", 
    desc: "Identify real-world problems and architectural bottlenecks.",
    skills: ["Systems Analysis", "Requirements", "Research"]
  },
  { 
    icon: Monitor, 
    title: "Interface", 
    desc: "Crafting beautiful, intuitive, and highly responsive UI/UX.",
    skills: ["React", "Tailwind", "Framer"]
  },
  { 
    icon: Server, 
    title: "Backend", 
    desc: "Architecting robust, scalable, and secure RESTful APIs.",
    skills: ["Node.js", "Express", "PostgreSQL"]
  },
  { 
    icon: Cloud, 
    title: "AI Gateway", 
    desc: "Building high-performance bridges between web clients and AI models.",
    skills: ["FastAPI", "Python", "Docker"]
  },
  { 
    icon: Brain, 
    title: "Intelligence", 
    desc: "Training, fine-tuning, and deploying advanced machine learning models.",
    skills: ["TensorFlow", "LangChain", "LLMs"]
  },
  { 
    icon: Globe, 
    title: "Impact", 
    desc: "Delivering measurable, real-world positive impact at scale.",
    skills: ["Deployment", "CI/CD", "Scaling"]
  }
];

export default function EngineeringPipeline() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Mathematically perfect clipPath mask.
  // It hides the bottom portion of the SVG, revealing it exactly as the user scrolls.
  const clipBottom = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPath = useMotionTemplate`inset(0% 0% ${clipBottom}% 0%)`;

  return (
    <section ref={containerRef} className="py-32 bg-[#FAFAFA] relative overflow-hidden">
      
      {/* --- Abstract Canopy Foliage (Blurred Circles) --- */}
      {/* Center Canopy */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#4F6F52]/5 rounded-full blur-[120px] pointer-events-none z-0" 
      />
      {/* Left Canopy */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        className="absolute top-[25%] -left-[10%] w-[600px] h-[600px] bg-green-200/20 rounded-full blur-[100px] pointer-events-none z-0" 
      />
      {/* Right Canopy */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        className="absolute top-[30%] -right-[10%] w-[600px] h-[600px] bg-emerald-200/20 rounded-full blur-[100px] pointer-events-none z-0" 
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Title Area */}
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-green-50 rounded-full mb-6 border border-green-100"
          >
            <Map className="w-4 h-4 text-[#4F6F52]" />
            <span className="text-sm font-bold text-[#4F6F52] uppercase tracking-widest">The Journey</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black tracking-tighter text-black uppercase"
          >
            Engineering Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 mt-6 max-w-2xl"
          >
            Follow the continuous flow from identifying complex problems all the way to delivering scalable, real-world impact.
          </motion.p>
        </div>

        {/* Journey Layout Container */}
        <div className="relative w-full max-w-5xl mx-auto h-auto md:min-h-[1400px]">
          
          {/* FLAWLESS CURVED S-LINE (Desktop) */}
          <motion.div className="absolute inset-0 hidden md:block pointer-events-none z-0" style={{ clipPath }}>
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path 
                d="M 50 0 
                   C 50 4, 25 4, 25 8.33 
                   C 25 16.66, 75 16.66, 75 25 
                   C 75 33.33, 25 33.33, 25 41.66 
                   C 25 50, 75 50, 75 58.33 
                   C 75 66.66, 25 66.66, 25 75 
                   C 25 83.33, 75 83.33, 75 91.66"
                fill="none" 
                stroke="#4F6F52" 
                strokeWidth="4" 
                vectorEffect="non-scaling-stroke" 
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* SVG Straight Line (Mobile) */}
          <div className="absolute top-0 bottom-0 left-8 md:hidden pointer-events-none z-0">
             <motion.div 
               style={{ scaleY: scrollYProgress }}
               className="w-[4px] h-full bg-[#4F6F52] origin-top rounded-full"
             />
          </div>

          {/* Journey Grid (Desktop) */}
          <div className="hidden md:grid grid-cols-2 w-full z-10 relative" style={{ gridAutoRows: '1fr' }}>
            {PIPELINE_STEPS.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <React.Fragment key={index}>
                  {isLeft ? (
                    <>
                      <div className="flex flex-col items-center justify-center p-8 w-full h-full">
                        <JourneyCard step={step} index={index} />
                      </div>
                      <div /> {/* Empty Right Cell */}
                    </>
                  ) : (
                     <>
                      <div /> {/* Empty Left Cell */}
                      <div className="flex flex-col items-center justify-center p-8 w-full h-full">
                        <JourneyCard step={step} index={index} />
                      </div>
                    </>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Mobile Vertical Layout */}
          <div className="flex md:hidden flex-col w-full z-10 gap-16 pl-16 relative py-12">
            {PIPELINE_STEPS.map((step, index) => (
              <div key={`mob-${index}`} className="relative w-full">
                <JourneyCard step={step} index={index} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function JourneyCard({ step, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: 0.2, duration: 0.6, type: "spring", bounce: 0.2 }}
      className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(79,111,82,0.12)] hover:-translate-y-2 transition-all duration-300 group flex flex-col w-full max-w-sm"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center group-hover:bg-[#4F6F52] transition-colors duration-500">
          <step.icon className="w-6 h-6 text-[#4F6F52] group-hover:text-white transition-colors duration-500" />
        </div>
        <h3 className="text-2xl font-black text-black">{step.title}</h3>
      </div>
      
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{step.desc}</p>
      
      <div className="flex flex-wrap gap-2">
        {step.skills.map((skill, sIdx) => (
          <span 
            key={sIdx}
            className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-bold rounded-lg border border-gray-100 group-hover:border-green-100 group-hover:bg-green-50/50 transition-colors duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
