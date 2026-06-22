import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import GlowCard from './GlowCard';

const SKILLS = [
  { name: "Python", usages: ["YOLO Football Detection", "ResNet50 Model", "RAG Systems", "Data Pipelines"] },
  { name: "TensorFlow", usages: ["Kissan-Mitra AI", "CNN Architectures", "Custom Model Training"] },
  { name: "React", usages: ["Portfolio Website", "LeetSpace", "MockMind AI", "Astro AI"] },
  { name: "Node.js", usages: ["MockMind AI", "Astro AI Backend", "REST APIs"] },
  { name: "Express.js", usages: ["Auth Services", "Routing", "Middlewares"] },
  { name: "MongoDB", usages: ["User Data", "Chat Histories", "LeetSpace Submissions"] },
  { name: "FastAPI", usages: ["Kissan-Mitra AI Backend", "AI Microservices", "Async Endpoints"] },
  { name: "LangChain", usages: ["MockMind AI", "Agentic Workflows", "RAG Pipeline"] },
];

function MagneticCard({ skill }) {
  const ref = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  // Magnetic Effect State
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Add spring for smooth magnetic return
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Magnetic pull strength
    x.set(distanceX * 0.2);
    y.set(distanceY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: smoothX, y: smoothY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsFlipped(!isFlipped)}
      className="relative w-full h-40 perspective-1000 cursor-pointer"
    >
      <motion.div>
        <GlowCard className="w-full h-full preserve-3d">
          <div className="relative w-full h-full preserve-3d transition-transform duration-500" style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
            {/* Front */}
            <div className="absolute inset-0 backface-hidden bg-white border border-border hover:border-primary/50 hover:shadow-lg transition-all rounded-2xl flex items-center justify-center p-6">
              <span className="text-xl font-bold text-foreground">{skill.name}</span>
            </div>

            {/* Back */}
            <div className="absolute inset-0 backface-hidden bg-primary text-primary-foreground border border-primary rounded-2xl p-4 flex flex-col justify-center items-start shadow-lg transform rotate-y-180 text-white">
              <span className="text-xs font-bold uppercase tracking-wider mb-2 opacity-80 text-white">Used In:</span>
              <ul className="text-sm space-y-1 w-full text-white">
                {skill.usages.slice(0, 3).map((usage, i) => (
                  <li key={i} className="flex items-start space-x-2 w-full overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="text-green-300">✓</span>
                    <span>{usage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GlowCard>
      </motion.div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold tracking-tighter text-foreground mb-4">Tech I Work With</h2>
          <p className="text-muted-foreground">Click to reveal where I've applied these technologies.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <MagneticCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
