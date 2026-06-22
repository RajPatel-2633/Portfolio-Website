import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Mic, IndianRupee, Rocket, Briefcase } from 'lucide-react';

const STATS = [
  { icon: Brain, title: "4+", desc: "AI/ML Projects", sub: "Built & Deployed" },
  { icon: Mic, title: "Research Speaker", desc: "GRAINS 2024", sub: "Ahmedabad University" },
  { icon: IndianRupee, title: "₹54,000", desc: "SSIP Grant", sub: "Student Startup" },
  { icon: Rocket, title: "YUKTI 2025", desc: "Innovation Challenge", sub: "MoE, Govt. of India" },
  { icon: Briefcase, title: "1+", desc: "Industry Internship", sub: "ML & Backend" }
];

export default function AchievementStats() {
  return (
    <section className="w-full bg-white relative z-10 py-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
          {STATS.map((stat, i) => (
            <React.Fragment key={i}>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start space-x-4 w-full md:w-auto my-4 md:my-0"
              >
                <div className="mt-1">
                  <stat.icon className="w-6 h-6 text-gray-500" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-black">{stat.title}</span>
                  <span className="text-xs text-gray-600 mt-1">{stat.desc}</span>
                  <span className="text-[10px] text-gray-400 mt-0.5">{stat.sub}</span>
                </div>
              </motion.div>
              
              {/* Divider */}
              {i < STATS.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-gray-100 mx-4" />
              )}
              {i < STATS.length - 1 && (
                <div className="block md:hidden w-full h-px bg-gray-100 my-4" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
