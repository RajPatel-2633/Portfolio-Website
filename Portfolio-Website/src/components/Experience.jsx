import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Box, Server, Users, TrendingUp } from 'lucide-react';

const STATS = [
  { icon: Box, title: "YOLOv8", desc: "Object Detection" },
  { icon: Server, title: "Backend", desc: "APIs & Services" },
  { icon: Users, title: "Team Lead", desc: "8 Members" },
  { icon: TrendingUp, title: "Impact", desc: "+18% Accuracy" }
];

const TERMINAL_LINES = [
  "Initializing YOLOv8 model... ✓",
  "Training on custom dataset... ✓",
  "Backend APIs deployed... ✓",
  "Inventory system live... ✓",
  "Team performance: Excellent ✓"
];

export default function Experience() {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex items-center space-x-2 mb-12">
          <h2 className="text-xl font-bold text-black">Experience</h2>
          <div className="w-1.5 h-1.5 rounded-full bg-[#4F6F52]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Details */}
          <div className="lg:col-span-4 flex flex-col">
            <h3 className="text-lg font-bold text-black mb-1">ML & Backend Developer Intern</h3>
            <div className="text-[#4F6F52] font-semibold text-sm mb-1">IT-IDOL Technologies</div>
            <div className="text-xs text-gray-400 mb-6">Jan 2026 - May 2026</div>

            <ul className="space-y-3">
              {[
                "Built YOLOv8 based football detection system",
                "Developed Inventory & ticket management system",
                "Designed and deployed RESTful APIs",
                "Led a team of 8 members",
                "Improved detection accuracy by 18%"
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4F6F52] shrink-0 mt-0.5" />
                  <span className="text-xs text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#0f172a] rounded-2xl overflow-hidden shadow-lg border border-gray-800 h-[280px] flex flex-col">
              <div className="bg-[#1e293b] px-4 py-2.5 flex items-center justify-between border-b border-gray-800">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 rounded-full bg-gray-500" />
                  <div className="w-1 h-1 rounded-full bg-gray-500" />
                  <div className="w-1 h-1 rounded-full bg-gray-500" />
                </div>
              </div>
              <div className="p-6 font-mono text-[10px] sm:text-xs text-gray-400 space-y-2.5">
                {TERMINAL_LINES.map((line, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.3 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-gray-500">&gt;</span>
                    <span>{line.replace('✓', '')}</span>
                    <span className="text-green-500">✓</span>
                  </motion.div>
                ))}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: TERMINAL_LINES.length * 0.3 }}
                  className="pt-2 flex items-center space-x-2"
                >
                  <span className="text-[#4F6F52]">root@itidol:~/project$</span>
                  <span className="animate-cursor-blink text-gray-300">█</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Column 3: Stats Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {STATS.map((stat, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0">
                  <stat.icon className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-black">{stat.title}</span>
                  <span className="text-[10px] text-gray-500">{stat.desc}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
