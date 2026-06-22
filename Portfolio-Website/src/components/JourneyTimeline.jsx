import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mic, Rocket, Diamond, Handshake, Briefcase, Target } from 'lucide-react';

const MILESTONES = [
  { year: "2022", title: "Started B.E. in\nComputer Science\nat GEC Bharuch", icon: MapPin },
  { year: "2024", title: "Research Speaker\nat GRAINS 2024,\nAhmedabad Univ.", icon: Mic },
  { year: "2025", title: "Qualified for YUKTI\nInnovation Challenge\n(MoE)", icon: Rocket },
  { year: "2025", title: "Received SSIP Grant\nof ₹54,000 for\nmy project", icon: Diamond },
  { year: "2025", title: "Wadhwani AI\nCollaboration\non AI for Agri", icon: Handshake },
  { year: "2026", title: "ML & Backend Intern\nat IT-IDOL\nTechnologies", icon: Briefcase },
  { year: "Future", title: "Building AI products\nthat create real\nimpact", icon: Target, isAccent: true }
];

export default function JourneyTimeline() {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center space-x-2 mb-16">
          <h2 className="text-xl font-bold text-black">My Journey</h2>
          <div className="w-1.5 h-1.5 rounded-full bg-[#4F6F52]" />
        </div>

        <div className="relative w-full overflow-x-auto pb-8 hide-scrollbar">
          <div className="min-w-[1200px] flex items-start justify-between relative px-8">
            
            {/* Continuous background line */}
            <div className="absolute top-[48px] left-16 right-16 h-px bg-gray-200 -z-10" />
            
            {MILESTONES.map((milestone, idx) => (
              <div key={idx} className="flex flex-col items-center relative w-32">
                {/* Year above the node */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-xs font-bold text-black mb-4"
                >
                  {milestone.year}
                </motion.div>
                
                {/* Icon Node */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 z-10 ${
                    milestone.isAccent ? 'border-2 border-[#4F6F52] bg-white' : 'border border-gray-200 bg-white'
                  }`}
                >
                  <milestone.icon className={`w-4 h-4 ${milestone.isAccent ? 'text-[#4F6F52]' : 'text-gray-500'}`} strokeWidth={1.5} />
                  {milestone.isAccent && (
                    <motion.div 
                      className="absolute inset-1 rounded-full border border-[#4F6F52]"
                      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
                
                {/* Title Below */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                  className="text-center"
                >
                  <p className={`text-[10px] whitespace-pre-line leading-tight ${milestone.isAccent ? 'text-black font-semibold' : 'text-gray-600'}`}>
                    {milestone.title}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
