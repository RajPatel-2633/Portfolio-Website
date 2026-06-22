import React, { useState, useEffect, useRef } from 'react';
import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';

const SKILL_DATA = [
  {
    base: "Machine Learning",
    alt: "Scikit-Learn",
    project: "Used In: Data Pipelines",
    detail: "Predictive Modeling",
    metric: "High Accuracy"
  },
  {
    base: "Computer Vision",
    alt: "YOLOv8",
    project: "Used In: Football Detection",
    detail: "Real-time Tracking",
    metric: "30+ FPS"
  },
  {
    base: "Deep Learning",
    alt: "TensorFlow",
    project: "Used In: Kissan-Mitra AI",
    detail: "ResNet50 Model",
    metric: "95% Accuracy"
  },
  {
    base: "MERN Stack",
    alt: "React & Node.js",
    project: "Used In: LeetSpace",
    detail: "Fullstack Architecture",
    metric: "Scalable"
  },
  {
    base: "FastAPI",
    alt: "Python Backend",
    project: "Used In: AI Microservices",
    detail: "Async Endpoints",
    metric: "Low Latency"
  },
  {
    base: "LangChain",
    alt: "AI Agents",
    project: "Used In: MockMind AI",
    detail: "RAG System",
    metric: "Intelligent"
  }
];

function SkillNode({ data, index, total }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showAlt, setShowAlt] = useState(false);
  const groupRef = useRef();

  // Angle and radius for orbit
  const angle = (index / total) * Math.PI * 2;
  const radius = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAlt(prev => !prev);
    }, 3000 + index * 500); // stagger changes
    return () => clearInterval(interval);
  }, [index]);

  useFrame((state) => {
    if (groupRef.current) {
      const time = performance.now() / 1000;
      const scrollY = window.scrollY;
      
      // Orbiting logic
      groupRef.current.position.x = Math.cos(angle + time * 0.2) * radius;
      groupRef.current.position.z = Math.sin(angle + time * 0.2) * radius;
      // Gentle floating up and down with scroll parallax
      groupRef.current.position.y = Math.sin(time * 2 + angle) * 0.5 + (scrollY * 0.002);
      
      groupRef.current.rotation.y = -time * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <Html transform distanceFactor={10} zIndexRange={[100, 0]}>
        <motion.div
          className="relative bg-white/80 backdrop-blur-md border border-border rounded-xl shadow-lg cursor-pointer flex flex-col items-center justify-center p-3 transition-all"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{
            width: isHovered ? 200 : 140,
            height: isHovered ? 120 : 50,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={showAlt ? 'alt' : 'base'}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-sm font-semibold whitespace-nowrap text-foreground text-center"
            >
              {showAlt ? data.alt : data.base}
            </motion.div>
          </AnimatePresence>

          {isHovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="text-xs text-muted-foreground mt-2 text-center w-full"
            >
              <div className="font-medium text-primary">{data.project}</div>
              <div className="mt-1">{data.detail}</div>
              <div className="font-bold">{data.metric}</div>
            </motion.div>
          )}
        </motion.div>
      </Html>
    </group>
  );
}

export default function FloatingSkills() {
  return (
    <>
      {SKILL_DATA.map((skill, i) => (
        <SkillNode key={i} data={skill} index={i} total={SKILL_DATA.length} />
      ))}
    </>
  );
}
