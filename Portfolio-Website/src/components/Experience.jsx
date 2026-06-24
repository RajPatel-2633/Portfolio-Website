import React from 'react';
import { motion } from 'framer-motion';

const TERMINAL_LINES = [
  "Initializing YOLOv8 model... ✓",
  "Loading custom football dataset... ✓",
  "Training neural network... 100%",
  "Deploying RESTful APIs... ✓",
  "Inventory system live on port 8080",
  "Team performance metrics: Optimal",
];

const ACHIEVEMENTS = [
  {
    title: "Object Detection Architecture",
    desc: "Engineered a highly accurate football detection system utilizing state-of-the-art YOLOv8 neural networks, successfully increasing overall detection precision by 18%."
  },
  {
    title: "Backend Infrastructure",
    desc: "Designed, developed, and deployed robust RESTful APIs to power a comprehensive, real-time inventory and ticket management ecosystem."
  },
  {
    title: "Technical Leadership",
    desc: "Successfully guided and mentored a dedicated technical team of 8 members, ensuring agile delivery pipelines and optimal system performance."
  }
];

export default function Experience() {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="flex flex-col mb-24">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full mb-6 w-max">
            <div className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span className="text-sm font-bold text-black uppercase tracking-widest">Experience</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
          
          {/* Left Column: Sticky Meta Data */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-[#4F6F52] font-black tracking-widest text-sm mb-4 uppercase">IT-IDOL Technologies</h2>
                <h3 className="text-5xl md:text-6xl font-black leading-[1.1] text-black mb-8 tracking-tighter">
                  ML & Backend Developer.
                </h3>
                <div className="flex items-center space-x-4 text-gray-500 font-medium">
                  <span>Jan 2026 — May 2026</span>
                  <span className="w-12 h-px bg-gray-200" />
                  <span>Internship</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Scrolling Details */}
          <div className="lg:col-span-7 flex flex-col pt-8 lg:pt-0">
            <div className="space-y-32">
              {ACHIEVEMENTS.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-col"
                >
                  <div className="text-gray-300 font-mono text-sm font-bold mb-4">
                    0{i + 1} //
                  </div>
                  <h4 className="text-3xl font-black text-black mb-4 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xl text-gray-500 leading-relaxed max-w-2xl font-light">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Terminal Section at the bottom */}
        <div className="mt-40 w-full max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#0f172a] rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
          >
            {/* Mac-style Header */}
            <div className="bg-[#1e293b] px-4 py-3 flex items-center justify-between border-b border-gray-800">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-xs text-gray-500 font-mono">bash - root@itidol</div>
              <div className="w-10" /> {/* Spacer for symmetry */}
            </div>
            {/* Terminal Content */}
            <div className="p-8 md:p-12 font-mono text-sm md:text-base text-gray-400 space-y-4">
              {TERMINAL_LINES.map((line, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.3) }}
                  className="flex items-start space-x-4"
                >
                  <span className="text-[#4F6F52] shrink-0">~</span>
                  <span className="text-gray-300">{line}</span>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (TERMINAL_LINES.length * 0.3) }}
                className="pt-4 flex items-center space-x-3"
              >
                <span className="text-[#4F6F52]">root@itidol:~/project$</span>
                <span className="animate-cursor-blink text-white">█</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
