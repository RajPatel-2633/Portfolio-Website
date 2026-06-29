import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Hexagon, Code2, Database } from 'lucide-react';

const ACHIEVEMENTS = [
  "Engineered a highly accurate football detection system utilizing state-of-the-art YOLOv8 neural networks, increasing overall detection precision by 18%.",
  "Designed, developed, and deployed robust RESTful APIs to power a comprehensive, real-time inventory and ticket management ecosystem.",
  "Successfully guided and mentored a dedicated technical team of 8 members, ensuring agile delivery pipelines and optimal system performance."
];

export default function Experience() {
  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full mb-6 w-max shadow-sm"
          >
            <div className="w-2 h-2 rounded-full bg-[#4F6F52] animate-pulse" />
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Experience</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tighter text-black"
          >
            WHERE I'VE WORKED
          </motion.h2>
        </div>

        {/* The Single Premium Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full bg-white rounded-[2rem] md:rounded-[3rem] border border-gray-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden group hover:shadow-[0_40px_80px_-15px_rgba(79,111,82,0.15)] transition-all duration-500"
        >
          <div className="flex flex-col md:flex-row">
            
            {/* Left Side: Abstract Geometric Logo */}
            <div className="w-full md:w-1/3 bg-gray-50 p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 relative overflow-hidden">
              
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#4F6F52 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              
              {/* The Abstract Logo Construction */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative w-40 h-40 flex items-center justify-center z-10"
              >
                <div className="absolute inset-0 bg-emerald-100/50 rounded-[2rem] rotate-45 scale-90 group-hover:rotate-90 transition-transform duration-700 ease-in-out" />
                <div className="absolute inset-0 bg-[#4F6F52]/10 rounded-full scale-110 group-hover:scale-100 transition-transform duration-500" />
                <Hexagon size={120} className="text-[#4F6F52] absolute stroke-[1.5]" />
                <div className="flex space-x-2 relative z-10 text-[#4F6F52]">
                   <Code2 size={24} />
                   <Database size={24} />
                </div>
              </motion.div>
            </div>

            {/* Right Side: Details & Achievements */}
            <div className="w-full md:w-2/3 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                 <div>
                   <h3 className="text-3xl md:text-4xl font-black text-black tracking-tight mb-2">
                     ML & Backend Developer
                   </h3>
                   <h4 className="text-xl md:text-2xl font-bold text-[#4F6F52]">
                     IT-IDOL Technologies
                   </h4>
                 </div>
                 
                 {/* Pill Badge */}
                 <div className="shrink-0 inline-flex items-center px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-semibold whitespace-nowrap self-start">
                   Jan 2026 — May 2026
                 </div>
              </div>
              
              <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 font-medium text-sm rounded-md mb-8 w-max border border-emerald-100">
                 Internship
              </div>

              {/* Bullet Points */}
              <ul className="space-y-5">
                {ACHIEVEMENTS.map((desc, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex items-start"
                  >
                    <span className="shrink-0 mt-1 mr-4 flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50 text-[#4F6F52]">
                      <CheckCircle2 size={16} className="stroke-[3]" />
                    </span>
                    <p className="text-gray-600 text-lg leading-relaxed font-medium">
                      {desc}
                    </p>
                  </motion.li>
                ))}
              </ul>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
