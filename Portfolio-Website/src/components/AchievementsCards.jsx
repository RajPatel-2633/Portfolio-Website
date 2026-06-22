import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Handshake, IndianRupee, Rocket, Briefcase } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    icon: Mic,
    title: "Research Speaker",
    event: "GRAINS 2024",
    desc: "Presented research on \"Deep Learning Model for Cotton Crop Disease\" Detection.",
  },
  {
    icon: Handshake,
    title: "Wadhwani AI Collaboration",
    event: "",
    desc: "Worked on AI driven crop pest & disease detection and contributed curated datasets.",
  },
  {
    icon: IndianRupee,
    title: "SSIP Grant",
    event: "₹54,000",
    desc: "Received a grant of ₹54,000 under Student Startup & Innovation Policy (SSIP).",
  },
  {
    icon: Rocket,
    title: "YUKTI Innovation Challenge 2025",
    event: "",
    desc: "Qualified for national level innovation challenge by Ministry of Education (MoE).",
  },
  {
    icon: Briefcase,
    title: "IT-IDOL Technologies Intern",
    event: "",
    desc: "ML & Backend Developer Intern. Led a team & built inventory and ticket management system.",
  }
];

export default function AchievementsCards() {
  return (
    <section className="py-20 bg-[#fafafa] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((achievement, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex items-start space-x-4 p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center shrink-0">
                <achievement.icon className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold text-black leading-tight mb-1">{achievement.title}</h3>
                {achievement.event && (
                  <span className="text-[11px] font-semibold text-gray-700 mb-2">{achievement.event}</span>
                )}
                {!achievement.event && <div className="h-2"></div>}
                <p className="text-[11px] text-gray-500 leading-relaxed">{achievement.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
