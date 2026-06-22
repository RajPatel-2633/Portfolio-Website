import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LAYER_NODES = [3, 4, 4, 1];

export default function NeuralNetworkVisualization() {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((p) => p + 1);
    }, 4000); // Trigger a full propagation every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="container mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tighter text-foreground mb-4">Currently Exploring</h2>
        <p className="text-muted-foreground">Deep Learning & Neural Architectures</p>
      </div>

      <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-between px-8 md:px-20">
        {/* Draw SVG connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          {LAYER_NODES.map((nodesInThisLayer, layerIndex) => {
            if (layerIndex === LAYER_NODES.length - 1) return null;
            const nodesInNextLayer = LAYER_NODES[layerIndex + 1];
            
            const lines = [];
            for (let i = 0; i < nodesInThisLayer; i++) {
              for (let j = 0; j < nodesInNextLayer; j++) {
                lines.push(
                  <motion.line
                    key={`${layerIndex}-${i}-${j}`}
                    // We'll use relative percentages for x1, y1, x2, y2 based on flex layout
                    // Since it's hard to sync SVG exactly with DOM nodes without refs, 
                    // we'll just draw abstract lines in a purely SVG-based network instead.
                  />
                );
              }
            }
            return lines;
          })}
        </svg>

        {/* Instead of trying to mix DOM and SVG perfectly without complex refs, 
            let's just build the whole network inside an SVG for perfect alignment. */}
        <div className="absolute inset-0 flex items-center justify-center">
           <NetworkSVG pulse={pulse} />
        </div>
      </div>
    </section>
  );
}

function NetworkSVG({ pulse }) {
  const width = 800;
  const height = 400;
  const layers = [3, 5, 5, 1];
  
  const getX = (layerIndex) => 100 + (layerIndex * (600 / (layers.length - 1)));
  const getY = (nodeIndex, totalNodes) => {
    const spacing = 60;
    const offset = (height - (totalNodes - 1) * spacing) / 2;
    return offset + nodeIndex * spacing;
  };

  const connections = [];
  for (let l = 0; l < layers.length - 1; l++) {
    for (let n1 = 0; n1 < layers[l]; n1++) {
      for (let n2 = 0; n2 < layers[l+1]; n2++) {
        connections.push({
          id: `conn-${l}-${n1}-${n2}`,
          x1: getX(l),
          y1: getY(n1, layers[l]),
          x2: getX(l+1),
          y2: getY(n2, layers[l+1]),
          layer: l
        });
      }
    }
  }

  return (
    <div className="relative w-full max-w-3xl overflow-hidden flex flex-col items-center">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* Base Connections */}
        {connections.map(conn => (
          <line key={conn.id} x1={conn.x1} y1={conn.y1} x2={conn.x2} y2={conn.y2} stroke="#e4e4e7" strokeWidth="2" />
        ))}

        {/* Animated Pulses */}
        {connections.map(conn => (
          <motion.circle
            key={`pulse-${conn.id}-${pulse}`}
            r="4"
            fill="#4F6F52"
            initial={{ cx: conn.x1, cy: conn.y1, opacity: 0 }}
            animate={{ 
              cx: [conn.x1, conn.x1, conn.x2], 
              cy: [conn.y1, conn.y1, conn.y2],
              opacity: [0, 1, 1, 0] 
            }}
            transition={{ 
              duration: 1, 
              times: [0, 0.1, 0.9, 1], 
              delay: conn.layer * 0.8, // stagger by layer
              ease: "linear"
            }}
          />
        ))}

        {/* Nodes */}
        {layers.map((nodes, l) => (
          Array.from({ length: nodes }).map((_, n) => (
            <motion.circle
              key={`node-${l}-${n}`}
              cx={getX(l)}
              cy={getY(n, nodes)}
              r="12"
              fill="white"
              stroke="#a1a1aa"
              strokeWidth="3"
              animate={{
                stroke: ["#a1a1aa", "#4F6F52", "#a1a1aa"],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 0.5,
                delay: l * 0.8,
                repeat: Infinity,
                repeatDelay: 3.5 // wait for full propagation before repeating
              }}
            />
          ))
        ))}
      </svg>
      
      {/* Prediction Output */}
      <motion.div
        key={`pred-${pulse}`}
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10], scale: [0.9, 1, 1, 0.9] }}
        transition={{ duration: 2, delay: 2.5, times: [0, 0.2, 0.8, 1] }}
        className="absolute bottom-4 right-10 bg-green-50 text-green-600 px-4 py-2 rounded-full border border-green-200 font-bold shadow-sm"
      >
        Prediction Generated ✓
      </motion.div>
    </div>
  );
}
