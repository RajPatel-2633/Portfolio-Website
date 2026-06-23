import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [dots, setDots] = useState('.');
  const [phase, setPhase] = useState('typing'); // typing, particles, done

  useEffect(() => {
    if (phase !== 'typing') return;

    let count = 1;
    const interval = setInterval(() => {
      count++;
      if (count > 3) {
        clearInterval(interval);
        setTimeout(() => setPhase('particles'), 500);
      } else {
        setDots('.'.repeat(count));
      }
    }, 600);

    return () => clearInterval(interval);
  }, [phase]);

  useEffect(() => {
    if (phase === 'particles') {
      setTimeout(() => {
        setPhase('done');
        onComplete();
      }, 1500); // give time for particles animation
    }
  }, [phase, onComplete]);

  // Generate some random particles
  const particles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    x: (Math.random() - 0.5) * window.innerWidth,
    y: (Math.random() - 0.5) * window.innerHeight,
    scale: Math.random() * 1.5 + 0.5,
  }));

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <div className="relative flex items-center">
            <span className="text-4xl font-bold tracking-tighter text-foreground">
              RP26
            </span>
            {phase === 'typing' && (
              <span className="text-4xl font-bold tracking-tighter text-foreground">
                {dots}
                <span className="animate-cursor-blink">|</span>
              </span>
            )}

            {phase === 'particles' && (
              <>
                <motion.span
                  className="text-4xl font-bold tracking-tighter text-foreground"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  ...
                </motion.span>
                {particles.map((p) => (
                  <motion.div
                    key={p.id}
                    className="absolute right-0 top-1/2 w-1.5 h-1.5 bg-primary rounded-full"
                    initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                    animate={{ 
                      x: p.x, 
                      y: p.y, 
                      opacity: 0,
                      scale: p.scale 
                    }}
                    transition={{
                      duration: 1 + Math.random(),
                      ease: "easeOut",
                    }}
                  />
                ))}
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
