import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const CODE_SNIPPETS = [
  "import React, { useState } from 'react';",
  "const [prediction, setPrediction] = useState(null);",
  "const tensor = tf.browser.fromPixels(canvas);",
  "model.predict(inverted);",
  "Composite.add(engine.world, blocks);",
  "export default function App() { return <Matrix /> }",
  "function activateShatter() { setShattered(true); }",
  "tf.tidy(() => { return predictions.dataSync(); })",
  "useFrame((state) => { ref.current.rotation.y += 0.01; })",
  "const Matter = require('matter-js');",
  "<motion.div animate={{ scale: 0 }} />",
  "console.log('Hire Raj Patel');"
];

function CodeLine({ text, position, speed }) {
  const ref = useRef();
  
  useFrame(() => {
    if (!ref.current) return;
    ref.current.position.y -= speed;
    if (ref.current.position.y < -20) {
      ref.current.position.y = 20;
    }
  });

  return (
    <Text 
      ref={ref} 
      position={position} 
      color="#0f0" 
      fontSize={0.6} 
      maxWidth={15} 
      lineHeight={1} 
      letterSpacing={0.02} 
      textAlign="left"
      font="https://fonts.gstatic.com/s/firamono/v14/N0bX2SlFPv1weGeLZDtgJv7S.woff"
    >
      {text}
    </Text>
  );
}

export default function MatrixCodeBackground({ onRestore }) {
  const lines = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
      position: [
        (Math.random() - 0.5) * 40, 
        (Math.random() - 0.5) * 40, 
        (Math.random() - 0.5) * 20 - 5
      ],
      speed: Math.random() * 0.1 + 0.02
    }));
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute top-10 z-10">
        <button 
          onClick={onRestore}
          className="px-8 py-3 bg-green-500/10 border border-green-500 text-green-500 font-mono text-xl hover:bg-green-500 hover:text-black transition-colors shadow-[0_0_15px_rgba(0,255,0,0.5)]"
        >
          RESTORE REALITY
        </button>
      </div>
      <Canvas camera={{ position: [0, 0, 15] }}>
        <ambientLight intensity={1} />
        {lines.map((line, i) => (
          <CodeLine key={i} text={line.text} position={line.position} speed={line.speed} />
        ))}
      </Canvas>
    </div>
  );
}
