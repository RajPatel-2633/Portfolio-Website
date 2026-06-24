import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Lightbulb, Monitor, Server, Cloud, Brain, Globe } from 'lucide-react';

const PIPELINE_STEPS = [
  { 
    icon: Lightbulb, 
    title: "Problem", 
    desc: "Identify real-world problems and architectural bottlenecks.",
    skills: ["Systems Analysis", "Requirements Gathering", "Research"]
  },
  { 
    icon: Monitor, 
    title: "Interface", 
    desc: "Crafting beautiful, intuitive, and highly responsive UI/UX.",
    skills: ["React", "Tailwind CSS", "Framer Motion", "UI/UX Design"]
  },
  { 
    icon: Server, 
    title: "Backend", 
    desc: "Architecting robust, scalable, and secure RESTful APIs.",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
  },
  { 
    icon: Cloud, 
    title: "AI Gateway", 
    desc: "Building high-performance bridges between web clients and AI models.",
    skills: ["FastAPI", "Python", "WebSockets", "Docker"]
  },
  { 
    icon: Brain, 
    title: "Intelligence", 
    desc: "Training, fine-tuning, and deploying advanced machine learning models.",
    skills: ["TensorFlow", "LangChain", "LLMs", "Computer Vision"]
  },
  { 
    icon: Globe, 
    title: "Impact", 
    desc: "Delivering measurable, real-world positive impact at scale.",
    skills: ["Deployment", "CI/CD", "Performance Optimization", "Scaling"]
  }
];

export default function EngineeringPipeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 bg-[#FAFAFA] relative overflow-hidden">
      
      <div className="container mx-auto px-6 max-w-7xl relative">
        {/* Title Area */}
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-green-50 rounded-full mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#4F6F52] animate-pulse" />
            <span className="text-sm font-bold text-[#4F6F52] uppercase tracking-widest">My Architecture</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-black tracking-tighter text-black uppercase"
          >
            The Engineering Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 mt-6 max-w-2xl"
          >
            How I bridge the gap between front-end interfaces, scalable backends, and complex AI models to build cohesive, intelligent systems.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full max-w-5xl mx-auto">
          
          {/* Background Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 rounded-full" />
          
          {/* Animated Glowing Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-[#4F6F52] via-green-400 to-[#4F6F52] -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(79,111,82,0.8)] z-0 origin-top"
          />

          {PIPELINE_STEPS.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex items-center justify-between md:justify-normal w-full mb-20 md:mb-32 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Center Icon Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-16 h-16 rounded-full bg-white border-4 border-[#FAFAFA] shadow-[0_0_30px_rgba(0,0,0,0.1)] flex items-center justify-center relative"
                  >
                    {/* Glowing ring when active */}
                    <motion.div 
                      className="absolute inset-0 rounded-full border-2 border-[#4F6F52]"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    />
                    <step.icon className="w-6 h-6 text-[#4F6F52]" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] pl-8 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}
                >
                  <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                    <h3 className="text-3xl font-black text-black mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-6">{step.desc}</p>
                    
                    {/* Skill Tags */}
                    <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                      {step.skills.map((skill, skillIdx) => (
                        <motion.span 
                          key={skillIdx}
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + (skillIdx * 0.1), type: "spring" }}
                          whileHover={{ scale: 1.05, backgroundColor: "#4F6F52", color: "#ffffff" }}
                          className="px-4 py-2 bg-gray-50 text-gray-700 text-sm font-bold rounded-xl border border-gray-100 cursor-pointer transition-colors duration-300"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
