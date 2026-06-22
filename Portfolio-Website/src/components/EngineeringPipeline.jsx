import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Monitor, Server, Cloud, Brain, Globe, ArrowRight } from 'lucide-react';

const PIPELINE_STEPS = [
  { icon: Lightbulb, title: "Problem", desc: "Identify real-world problems" },
  { icon: Monitor, title: "Interface", desc: "React\nBeautiful UI/UX" },
  { icon: Server, title: "Backend", desc: "Node.js / Express\nRESTful APIs" },
  { icon: Cloud, title: "AI Gateway", desc: "FastAPI\nHigh performance" },
  { icon: Brain, title: "Intelligence", desc: "TensorFlow\nLangChain\nAI/ML Models" },
  { icon: Globe, title: "Impact", desc: "Real world\npositive impact" }
];

export default function EngineeringPipeline() {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center space-x-2 mb-16">
          <h2 className="text-xl font-bold text-black">How I Build Intelligent Systems</h2>
          <div className="w-1.5 h-1.5 rounded-full bg-[#4F6F52]" />
        </div>

        <div className="relative w-full overflow-x-auto pb-8 hide-scrollbar">
          <div className="min-w-[1000px] flex items-start justify-between relative px-8">
            
            {/* Continuous background line */}
            <div className="absolute top-[32px] left-16 right-16 h-[2px] bg-gray-100 -z-10" />
            {/* Animated green line */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "calc(100% - 8rem)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-[32px] left-16 h-[2px] bg-[#4F6F52]/30 -z-10"
            />

            {PIPELINE_STEPS.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center relative w-40">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, type: "spring", stiffness: 200, damping: 20 }}
                  className="w-16 h-16 bg-white border-2 border-gray-100 rounded-2xl flex items-center justify-center mb-4 z-10 shadow-sm"
                >
                  <step.icon className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 + 0.2 }}
                  className="text-center"
                >
                  <h3 className="text-sm font-bold text-black mb-1">{step.title}</h3>
                  <p className="text-[10px] text-gray-500 whitespace-pre-line leading-tight">{step.desc}</p>
                </motion.div>

                {/* Optional Right Arrow for the line, placed absolutely */}
                {idx < PIPELINE_STEPS.length - 1 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 + 0.3 }}
                    className="absolute top-[26px] -right-4 bg-white px-1 z-10"
                  >
                    <ArrowRight className="w-3 h-3 text-[#4F6F52]" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
