import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, Leaf, Mic, Sparkles, Code2, Database, BrainCircuit, ExternalLink, Search, MessageSquare } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const KissanVisual = () => {
  // Determine if we are on desktop to apply the horizontal shift
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;
  const initialX = isDesktop ? 250 : 0;
  
  const [key, setKey] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    let interval;
    if (inView) {
      interval = setInterval(() => setKey(prev => prev + 1), 9000);
    }
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <motion.div 
      viewport={{ amount: 0.5 }}
      onViewportEnter={() => { setInView(true); setKey(prev => prev + 1); }}
      onViewportLeave={() => setInView(false)}
      className="w-full h-full"
    >
      <div key={key} className="w-full h-full bg-[#f8faf8] rounded-3xl border border-gray-200 flex items-center justify-center relative overflow-hidden shadow-[inset_0_4px_40px_rgba(0,0,0,0.02)]">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlMmU4ZTIiLz48L3N2Zz4=')] opacity-50" />
      
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full max-w-5xl px-4 md:px-8 z-10 gap-4">
        
        {/* Phase 1 & 2 & 3: The Leaf & Scanning Area */}
        <motion.div 
          initial={{ x: initialX }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2.8, duration: 1, type: "spring", bounce: 0.2 }}
          className="relative w-48 h-48 md:w-64 md:h-64 bg-white rounded-3xl shadow-xl flex items-center justify-center border border-gray-100 shrink-0 z-10"
        >
          <Leaf className="w-20 h-20 md:w-24 md:h-24 text-green-600" strokeWidth={1.5} />
          
          {/* Phase 2: Magnifying Glass Scanner */}
          <motion.div
            initial={{ x: -150, y: -50, opacity: 0 }}
            whileInView={{ 
              x: [-150, -20, 30, -30, 0], 
              y: [-50, -30, 30, 30, 0],
              opacity: [0, 1, 1, 1, 0]
            }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, times: [0, 0.2, 0.5, 0.8, 1], ease: "easeInOut" }}
            className="absolute z-20 pointer-events-none"
          >
            <div className="relative">
              {/* Glass Lens */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-blue-400 bg-blue-400/20 backdrop-blur-[2px] shadow-[0_0_20px_rgba(59,130,246,0.3)]" />
              {/* Glass Handle */}
              <div className="w-3 h-12 bg-blue-500 absolute top-[3.5rem] md:top-[4.5rem] left-[3.5rem] md:left-[4.5rem] origin-top-left -rotate-45 rounded-full shadow-lg" />
              
              {/* Scanning Laser Line */}
              <motion.div 
                animate={{ top: ["15%", "85%", "15%"] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-blue-400 shadow-[0_0_10px_#60a5fa]"
              />
            </div>
          </motion.div>

          {/* Phase 3: Bounding Box & Disease Identified */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2.5, type: "spring", bounce: 0.5 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            {/* The Bounding Box on the Leaf */}
            <div className="w-16 h-16 md:w-20 md:h-20 border-[3px] border-red-500 bg-red-500/10 rounded-lg absolute ml-6 mt-6 shadow-[0_0_15px_rgba(239,68,68,0.3)]" />
            
            {/* The Identification Tag */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7 }}
              className="absolute -bottom-4 right-[-20px] md:right-[-40px] bg-red-50 border border-red-200 px-3 py-1.5 rounded-lg shadow-xl flex flex-col"
            >
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-wider">Detected</span>
              <span className="text-xs font-mono text-gray-800">Early Blight (98%)</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* --- NEW: Data Pipeline Connection to bridge the gap --- */}
        <div className="hidden md:flex flex-1 items-center justify-center relative px-2 z-0">
          <div className="w-full h-1 bg-gray-200/50 relative overflow-hidden rounded-full">
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "400%" }}
              viewport={{ once: true }}
              transition={{ delay: 3.8, duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-transparent via-[#4F6F52] to-transparent"
            />
          </div>
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 3.8, type: "spring", bounce: 0.5 }}
            className="absolute left-1/2 -translate-x-1/2 bg-white border border-[#4F6F52]/20 px-3 py-1.5 rounded-xl shadow-sm flex items-center space-x-2"
          >
            <Database className="w-3 h-3 text-[#4F6F52]" />
            <span className="text-[9px] font-bold text-[#4F6F52] uppercase tracking-wider">RAG</span>
          </motion.div>
        </div>
        {/* ----------------------------------- */}

        {/* Phase 4: Chat Remedy Interface */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 4.0, type: "spring", damping: 20 }}
          className="w-full max-w-[320px] md:w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden shrink-0 z-10"
        >
          {/* Header */}
          <div className="bg-[#4F6F52] px-4 py-3 flex items-center space-x-3 text-white">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold">Kissan AI</div>
              <div className="text-[10px] opacity-80">RAG Pipeline Active</div>
            </div>
          </div>
          
          {/* Chat Body */}
          <div className="p-4 flex flex-col space-y-4 bg-gray-50 flex-1">
            
            {/* User Message (Typing Effect) */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 4.3 }}
              className="self-end bg-[#4F6F52]/10 text-gray-800 px-3 py-2 rounded-2xl rounded-tr-sm text-xs max-w-[80%] border border-[#4F6F52]/20 overflow-hidden"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 4.4, duration: 1.2, ease: "linear" }}
                className="whitespace-nowrap overflow-hidden"
              >
                Analyze this crop image.
              </motion.div>
            </motion.div>
            
            {/* AI Remedy Message (Streaming Effect) */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 5.8 }}
              className="self-start bg-white border border-gray-200 text-gray-800 px-4 py-3 rounded-2xl rounded-tl-sm text-xs max-w-[95%] shadow-sm space-y-3"
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 6.0 }}
              >
                I detected <strong className="text-red-600">Early Blight</strong>.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                whileInView={{ opacity: 1, height: "auto" }}
                viewport={{ once: true }}
                transition={{ delay: 6.2 }}
                className="bg-green-50 p-3 rounded-xl border border-green-100 overflow-hidden"
              >
                <strong className="text-green-800 block mb-2 border-b border-green-200/50 pb-1">Recommended Remedy:</strong>
                <ul className="list-disc pl-4 text-green-700 space-y-1.5 marker:text-green-400">
                  <li>Apply Copper-based fungicide.</li>
                  <li>Ensure proper plant spacing.</li>
                  <li>Reduce overhead watering.</li>
                </ul>
              </motion.div>
            </motion.div>
            
          </div>
        </motion.div>

      </div>
      </div>
    </motion.div>
  );
};

const MockMindVisual = () => {
  const [key, setKey] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    let interval;
    if (inView) {
      interval = setInterval(() => setKey(prev => prev + 1), 12000);
    }
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <motion.div 
      viewport={{ amount: 0.5 }}
      onViewportEnter={() => { setInView(true); setKey(prev => prev + 1); }}
      onViewportLeave={() => setInView(false)}
      className="w-full h-full"
    >
      <div key={key} className="w-full h-full bg-zinc-950 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden shadow-2xl group border border-white/5">
      
      {/* 1. Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute inset-0 bg-zinc-950 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,transparent_20%,black_100%)]"></div>
      </div>

      {/* 2. Moving Glowing Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-2xl px-6 flex flex-col items-center h-full justify-center space-y-12">
        
        {/* Phase 1: The Question with Animated Glowing Border */}
        <motion.div
          initial={{ y: -50, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="relative w-full max-w-lg mx-auto p-[1px] rounded-2xl overflow-hidden group/card"
        >
          {/* Animated Border Gradient */}
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#f97316_0%,#09090b_50%,#f97316_100%)] opacity-50" />
          
          <div className="relative bg-zinc-950/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl flex items-center h-full w-full">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 2, ease: "linear" }}
              className="whitespace-nowrap overflow-hidden text-orange-50 font-mono text-[10px] md:text-sm border-r-2 border-orange-500 w-full"
            >
              <span className="text-orange-500 font-bold mr-2 opacity-80">System:</span>
              <span className="text-zinc-300 tracking-wide">Tell me about a time you optimized a complex algorithm.</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Phase 2 & 3: Recording & Analyzing Container */}
        <div className="h-48 flex items-center justify-center relative w-full perspective-[1000px]">
          
          {/* Phase 2: Recording Waveform & Ripples */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
            whileInView={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.5], rotateX: [20, 0, 0, -20] }}
            viewport={{ once: true }}
            transition={{ duration: 4.5, times: [0, 0.1, 0.9, 1] }}
            className="absolute flex flex-col items-center"
          >
            {/* Concentric Ripples */}
            <div className="relative mb-8">
              <motion.div 
                animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-orange-500/30"
              />
              <motion.div 
                animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-orange-500/20"
              />
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.5)] z-10">
                <Mic className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Audio Waveform with Reflection */}
            <div className="relative">
              <div className="flex items-end space-x-1.5 h-16 border-b border-orange-500/20 pb-1">
                {[12, 24, 16, 32, 20, 40, 18, 28, 14, 22].map((h, i) => (
                  <motion.div 
                    key={i} 
                    className="w-1.5 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-sm shadow-[0_0_8px_rgba(249,115,22,0.6)]" 
                    animate={{ height: [h, h*2.5, h] }} 
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.05, ease: "easeInOut" }} 
                  />
                ))}
              </div>
              {/* Reflection */}
              <div className="flex items-start space-x-1.5 h-10 pt-1 opacity-20 blur-[1px] scale-y-[-1]">
                {[12, 24, 16, 32, 20, 40, 18, 28, 14, 22].map((h, i) => (
                  <motion.div 
                    key={`ref-${i}`} 
                    className="w-1.5 bg-gradient-to-t from-orange-600 to-orange-400 rounded-b-sm" 
                    animate={{ height: [h, h*2.5, h] }} 
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.05, ease: "easeInOut" }} 
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Phase 3: Analyzing Spinner - Geometric AI Core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateZ: -90 }}
            whileInView={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1, 1, 1.5], rotateZ: [-90, -90, 0, 0, 90] }}
            viewport={{ once: true }}
            transition={{ duration: 6, times: [0, 0.75, 0.8, 0.95, 1], ease: "easeInOut" }}
            className="absolute flex flex-col items-center"
          >
            <div className="relative w-32 h-32 flex items-center justify-center mb-6">
              {/* Outer dashed ring */}
              <motion.svg animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-0 w-full h-full text-orange-500/40" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
              </motion.svg>
              {/* Inner fast ring */}
              <motion.svg animate={{ rotate: -360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute inset-0 w-full h-full text-orange-500" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="50 150" strokeLinecap="round" className="shadow-[0_0_15px_#f97316]" />
              </motion.svg>
              {/* Core pulse */}
              <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity }} className="w-12 h-12 bg-orange-500 rounded-full blur-md" />
              <BrainCircuit className="w-6 h-6 text-white absolute z-10" />
            </div>
            
            <div className="flex space-x-1 items-center">
              <span className="text-orange-400 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase">Synthesizing</span>
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} className="w-1 h-1 bg-orange-400 rounded-full" />
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="w-1 h-1 bg-orange-400 rounded-full" />
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className="w-1 h-1 bg-orange-400 rounded-full" />
            </div>
          </motion.div>

          {/* Phase 4: Result Hurrah (High Energy Explode) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 6.0 }}
            className="absolute flex flex-col items-center w-full"
          >
            <div className="relative">
              {/* Massive background glow flare */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: [0, 3, 1.5], opacity: [0, 1, 0.5] }}
                transition={{ delay: 6.1, duration: 1, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-500 rounded-full blur-[60px] z-0"
              />

              {/* Checkmark Icon with 3D Pop */}
              <motion.div 
                initial={{ scale: 0, rotateZ: -180 }}
                whileInView={{ scale: 1, rotateZ: 0 }}
                transition={{ delay: 6.1, type: "spring", bounce: 0.7, duration: 1 }}
                className="w-24 h-24 bg-gradient-to-tr from-orange-600 to-orange-400 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(249,115,22,0.8)] border-4 border-zinc-950 mb-8 z-10 relative"
              >
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ delay: 6.5, duration: 0.5, ease: "easeOut" }}
                    strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" 
                  />
                </svg>
              </motion.div>

              {/* Confetti Explosion (Multiple Rings) */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={`confetti-${i}`}
                  initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                  whileInView={{ 
                    scale: [0, Math.random() * 1.5 + 0.5, 0],
                    x: Math.cos(i * 30 * Math.PI / 180) * (Math.random() * 150 + 50),
                    y: Math.sin(i * 30 * Math.PI / 180) * (Math.random() * 150 + 50),
                    rotate: Math.random() * 360
                  }}
                  viewport={{ once: true }}
                  transition={{ delay: 6.1, duration: Math.random() * 1 + 1, ease: "easeOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  {i % 2 === 0 ? (
                    <Sparkles className="w-6 h-6 text-orange-400" />
                  ) : (
                    <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Glowing Text Banner */}
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 6.6, type: "spring", bounce: 0.5 }}
              className="relative overflow-hidden group/banner z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent translate-x-[-100%] group-hover/banner:translate-x-[100%] transition-transform duration-1000" />
              <div className="bg-zinc-900/80 border border-orange-500/40 px-6 py-4 md:px-8 md:py-4 rounded-2xl backdrop-blur-md shadow-[0_0_30px_rgba(249,115,22,0.2)]">
                <span className="text-white font-bold text-xs md:text-lg flex items-center space-x-2">
                  <span className="text-xl md:text-2xl">🎉</span>
                  <span className="bg-gradient-to-r from-orange-200 to-orange-500 bg-clip-text text-transparent">
                    Hurrah! You seem ready for your interview.
                  </span>
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>

      </div>
      </div>
    </motion.div>
  );
};

const AstroVisual = () => {
  const zodiacs = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
  const planets = ["Su", "Mo", "Ma", "Me", "Ju", "Ve", "Sa", "Ra", "Ke"];
  
  // Approximate positions for the 12 houses in a Vedic diamond chart
  const planetPositions = [
    { top: '25%', left: '50%' }, // House 1
    { top: '15%', left: '25%' }, // House 2
    { top: '25%', left: '15%' }, // House 3
    { top: '50%', left: '25%' }, // House 4
    { top: '75%', left: '15%' }, // House 5
    { top: '85%', left: '25%' }, // House 6
    { top: '75%', left: '50%' }, // House 7
    { top: '85%', left: '75%' }, // House 8
    { top: '75%', left: '85%' }, // House 9
    { top: '50%', left: '75%' }, // House 10
    { top: '25%', left: '85%' }, // House 11
    { top: '15%', left: '75%' }, // House 12
  ];

  const [key, setKey] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    let interval;
    if (inView) {
      interval = setInterval(() => setKey(prev => prev + 1), 12000);
    }
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <motion.div 
      viewport={{ amount: 0.5 }}
      onViewportEnter={() => { setInView(true); setKey(prev => prev + 1); }}
      onViewportLeave={() => setInView(false)}
      className="w-full h-full"
    >
      <div key={key} className="w-full h-full bg-[#dda15e] rounded-3xl border border-[#c2823a] flex items-center justify-center relative overflow-hidden shadow-2xl">
      
      {/* Background Texture (subtle noise/parchment feel) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz4KPC9zdmc+')] mix-blend-multiply" />
      
      {/* Soft central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#f4a261]/40 rounded-full blur-[80px]" />

      {/* Main Animation Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Phase 1: Zodiac Loader (0 - 3s) */}
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: [1, 1, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 3.5, times: [0, 0.8, 1], ease: "easeInOut" }}
          className="absolute flex items-center justify-center w-64 h-64"
        >
          {/* Central Sun/Mandala */}
          <motion.div 
            animate={{ rotate: 360, scale: [1, 1.1, 1] }} 
            transition={{ rotate: { duration: 8, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
            className="absolute w-16 h-16 bg-[#8B4513] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(139,69,19,0.5)]"
          >
             <div className="w-12 h-12 border border-[#dda15e]/50 rounded-full flex items-center justify-center border-dashed animate-[spin_4s_linear_infinite]">
                <div className="w-3 h-3 bg-[#dda15e] rounded-full" />
             </div>
          </motion.div>

          {/* Rotating Zodiac Signs */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-full"
          >
            {zodiacs.map((sign, i) => {
              const angle = (i * 30 * Math.PI) / 180;
              const radius = 100;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              return (
                <div 
                  key={i} 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[#8B4513] text-xl drop-shadow-sm"
                  style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${i * 30 + 90}deg)` }}
                >
                  {sign}
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Phase 2: Vedic Chart Drawing (3.5s - 7.5s) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: [0, 0, 1, 1, 0] }}
          viewport={{ once: true }}
          transition={{ duration: 8.5, times: [0, 0.35, 0.4, 0.9, 1], ease: "easeInOut" }}
          className="absolute w-[240px] h-[240px] md:w-[300px] md:h-[300px]"
        >
          <svg className="w-full h-full drop-shadow-xl" viewBox="0 0 300 300">
            {/* Outer Box */}
            <motion.path 
              d="M 10 10 L 290 10 L 290 290 L 10 290 Z" 
              fill="rgba(139, 69, 19, 0.02)" 
              stroke="#8B4513" 
              strokeWidth="3"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 3.2, duration: 1.5, ease: "easeInOut" }}
            />
            {/* Diagonals */}
            <motion.path 
              d="M 10 10 L 290 290 M 290 10 L 10 290" 
              fill="none" 
              stroke="#8B4513" 
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 4.7, duration: 1.0, ease: "easeInOut" }}
            />
            {/* Inner Diamond */}
            <motion.path 
              d="M 150 10 L 290 150 L 150 290 L 10 150 Z" 
              fill="rgba(139, 69, 19, 0.05)" 
              stroke="#8B4513" 
              strokeWidth="3"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 5.7, duration: 1.5, ease: "easeInOut" }}
            />
          </svg>

          {/* Random Planets in Houses */}
          {planets.map((planet, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 6.5 + (i * 0.15), type: "spring", bounce: 0.6 }}
              className="absolute -translate-x-1/2 -translate-y-1/2 font-bold text-[#8B4513] text-xs md:text-sm bg-[#dda15e]/80 backdrop-blur-sm px-1.5 py-0.5 rounded shadow-sm border border-[#8B4513]/20"
              style={{ top: planetPositions[i].top, left: planetPositions[i].left }}
            >
              {planet}
            </motion.div>
          ))}
        </motion.div>

        {/* Phase 3: Final Text Reveal (8.5s+) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ delay: 8.5, duration: 1.5, ease: "easeOut" }}
          className="absolute flex flex-col items-center justify-center text-center px-6 w-full"
        >
          <motion.div 
            initial={{ rotate: -180, scale: 0 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 8.8, type: "spring", bounce: 0.5 }}
            className="w-16 h-16 mb-6 rounded-full border border-[#8B4513]/30 flex items-center justify-center p-2 bg-[#8B4513]/5 backdrop-blur-md shadow-[0_0_30px_rgba(139,69,19,0.2)]"
          >
            <Sparkles className="w-8 h-8 text-[#8B4513]" />
          </motion.div>
          
          <h3 className="text-2xl md:text-4xl font-serif font-bold text-[#8B4513] tracking-wide leading-tight drop-shadow-sm">
            Know your <br/> <span className="italic opacity-90">astrological chart</span> now
          </h3>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ delay: 9.5, duration: 1.2, ease: "easeOut" }}
            className="h-1 bg-gradient-to-r from-transparent via-[#8B4513] to-transparent mt-8 rounded-full opacity-50"
          />
        </motion.div>

      </div>
      </div>
    </motion.div>
  );
};

const LeetSpaceVisual = () => {
  const codeLines = [
    { text: <><span className="text-[#ffa759]">class</span> <span className="text-[#ffd580]">Solution</span> {'{'}</>, delay: 0.2, duration: 0.3 },
    { text: <>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ffa759]">public:</span></>, delay: 0.5, duration: 0.2 },
    { text: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#5ccfe6]">vector</span>&lt;<span className="text-[#5ccfe6]">int</span>&gt; <span className="text-[#ffd580]">twoSum</span>(<span className="text-[#5ccfe6]">vector</span>&lt;<span className="text-[#5ccfe6]">int</span>&gt;&amp; nums, <span className="text-[#5ccfe6]">int</span> target) {'{'}</>, delay: 0.7, duration: 0.6 },
    { text: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#5ccfe6]">unordered_map</span>&lt;<span className="text-[#5ccfe6]">int</span>, <span className="text-[#5ccfe6]">int</span>&gt; numMap;</>, delay: 1.3, duration: 0.5 },
    { text: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ffa759]">for</span> (<span className="text-[#5ccfe6]">int</span> i = <span className="text-[#d4bfff]">0</span>; i &lt; nums.size(); i++) {'{'}</>, delay: 1.8, duration: 0.5 },
    { text: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#5ccfe6]">int</span> complement = target - nums[i];</>, delay: 2.3, duration: 0.4 },
    { text: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ffa759]">if</span> (numMap.count(complement)) {'{'}</>, delay: 2.7, duration: 0.4 },
    { text: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ffa759]">return</span> {'{'}numMap[complement], i{'}'};</>, delay: 3.1, duration: 0.4 },
    { text: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</>, delay: 3.5, duration: 0.1 },
    { text: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numMap[nums[i]] = i;</>, delay: 3.6, duration: 0.3 },
    { text: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</>, delay: 3.9, duration: 0.1 },
    { text: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#ffa759]">return</span> {'{}'};</>, delay: 4.0, duration: 0.2 },
    { text: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</>, delay: 4.2, duration: 0.1 },
    { text: <>&nbsp;&nbsp;&nbsp;&nbsp;{'}'};</>, delay: 4.3, duration: 0.1 },
  ];

  const [key, setKey] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    let interval;
    if (inView) {
      interval = setInterval(() => setKey(prev => prev + 1), 9000);
    }
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <motion.div 
      viewport={{ amount: 0.5 }}
      onViewportEnter={() => { setInView(true); setKey(prev => prev + 1); }}
      onViewportLeave={() => setInView(false)}
      className="w-full h-full"
    >
      <div key={key} className="w-full h-full bg-[#1f2430] rounded-3xl border border-gray-800 flex flex-col overflow-hidden shadow-2xl relative font-mono text-sm text-[#cbccc6]">
      
      {/* Top Bar */}
      <div className="h-12 border-b border-gray-800 flex items-center px-4 space-x-2 bg-[#1f2430] z-10 shrink-0">
        <div className="flex space-x-1.5 mr-4">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-xs text-gray-400 bg-[#242b38] px-3 py-1.5 rounded-t-md flex items-center space-x-2 border-t border-x border-gray-700/50 mt-2">
          <Code2 className="w-3 h-3 text-[#5ccfe6]" />
          <span>Solution.cpp</span>
        </div>
      </div>
      
      {/* Editor Area */}
      <div className="flex-1 flex relative overflow-hidden bg-[#1f2430]">
        {/* Line Numbers */}
        <div className="w-10 border-r border-gray-800/80 flex flex-col items-end pr-2 pt-4 space-y-1 text-gray-600/60 text-xs shrink-0 select-none">
          {[...Array(14)].map((_, i) => <span key={i}>{i+1}</span>)}
        </div>
        
        {/* Code Content */}
        <div className="flex-1 p-4 overflow-hidden relative">
          <div className="space-y-1 flex flex-col items-start w-full text-[10px] md:text-xs">
            {codeLines.map((line, i) => (
              <motion.div 
                key={i}
                initial={{ width: 0, opacity: 1 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: line.delay, duration: line.duration, ease: "linear" }}
                className="overflow-hidden whitespace-nowrap border-r-2 border-transparent"
              >
                {line.text}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Terminal / Judge Side (Slides up at 4.6s) */}
      <motion.div 
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "1000px" }}
        transition={{ delay: 4.6, type: "spring", bounce: 0.2, duration: 0.8 }}
        className="h-[45%] bg-[#1f2430]/95 border-t border-gray-800 flex flex-col shrink-0 absolute bottom-0 w-full z-20 backdrop-blur-md"
      >
        <div className="h-10 border-b border-gray-800 flex items-center px-4 bg-[#1f2430] text-xs font-mono text-gray-400 space-x-4 shrink-0">
          <span className="text-gray-300 font-bold border-b-2 border-green-500 h-full flex items-center">Console</span>
          <span>Testcase</span>
          <span>Result</span>
        </div>
        
        <div className="p-4 flex-1 flex flex-col relative overflow-hidden text-xs sm:text-sm">
          
          {/* Compiling State (visible 5.2 to 5.9) */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1, 1, 0] }}
            viewport={{ once: true, margin: "1000px" }}
            transition={{ delay: 5.2, duration: 0.7, times: [0, 0.1, 0.9, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center space-y-3 bg-[#1f2430] z-10"
          >
            <div className="w-6 h-6 border-2 border-green-500/30 border-t-green-500 rounded-full animate-spin" />
            <span className="text-gray-400 font-mono">Compiling & Running...</span>
          </motion.div>

          {/* Testcases & Success (visible after 5.9) */}
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true, margin: "1000px" }}
             transition={{ delay: 5.9 }}
             className="flex flex-col h-full space-y-3"
          >
            <div className="flex space-x-2">
              {[1, 2, 3].map(i => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "1000px" }}
                  transition={{ delay: 5.9 + (i * 0.15) }}
                  className="px-2 py-1 bg-gray-800 rounded-md text-gray-300 flex items-center space-x-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[10px] md:text-xs">Case {i}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "1000px" }}
              transition={{ delay: 6.55, type: "spring", bounce: 0.6 }}
              className="mt-2 bg-green-500/10 border border-green-500/30 p-3 rounded-lg flex flex-col"
            >
              <div className="text-green-400 font-bold text-sm md:text-lg mb-1 flex items-center space-x-2">
                <span>Correct Answer</span>
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex space-x-4 md:space-x-6 text-gray-400 text-[10px] md:text-xs">
                <div>Runtime: <span className="text-white font-bold">4 ms</span> <span className="text-green-500">Beats 98.4%</span></div>
                <div>Memory: <span className="text-white font-bold">10.2 MB</span> <span className="text-green-500">Beats 82.1%</span></div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </motion.div>
      </div>
    </motion.div>
  );
};

const PROJECTS = [
  {
    id: 'kissan',
    title: "Kissan-Mitra AI",
    desc: "A powerful agricultural assistant that detects crop diseases using ResNet50 and provides real-time, multi-lingual remedies via a RAG pipeline. It bridges the gap between complex Deep Learning models and accessible user interfaces for farmers.",
    stack: ["React", "FastAPI", "TensorFlow", "RAG Pipeline"],
    link: "#",
    github: "#",
    Visual: KissanVisual
  },
  {
    id: 'mockmind',
    title: "MockMind AI",
    desc: "An intelligent voice interview platform powered by LangGraph. It orchestrates multiple specialized AI agents (Questioner, Evaluator, Feedback) to conduct real-time, dynamic technical interviews with zero latency.",
    stack: ["React", "LangGraph", "LangChain", "Groq API"],
    link: "#",
    github: "#",
    Visual: MockMindVisual
  },
  {
    id: 'astro',
    title: "Astro AI",
    desc: "A conversational platform blending ancient astrology with modern LLMs. It generates personalized, context-aware cosmic insights and guidance through a beautifully animated, highly interactive interface.",
    stack: ["React", "Custom LLM", "Node.js", "MySQL"],
    link: "#",
    github: "#",
    Visual: AstroVisual
  },
  {
    id: 'leetspace',
    title: "LeetSpace",
    desc: "A full-stack code execution environment resembling LeetCode. Features a real-time code editor, secure sandboxed execution via Judge0, and a competitive leaderboard architecture.",
    stack: ["MERN Stack", "Judge0", "Docker", "Tailwind"],
    link: "#",
    github: "#",
    Visual: LeetSpaceVisual
  }
];

export default function ProjectsSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // 4 projects -> 4 full widths. Slide from 0 to -75% to show all 4.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[400vh] bg-[#FAFAFA]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        <div className="absolute top-6 md:top-8 lg:top-10 left-6 md:left-12 z-50 flex items-center space-x-3">
          <h2 className="text-3xl font-black tracking-tighter text-black uppercase">Selected Works</h2>
          <div className="w-2 h-2 rounded-full bg-[#4F6F52] animate-pulse" />
        </div>

        <motion.div style={{ x }} className="flex h-full w-[400vw]">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className="w-screen h-full flex items-center justify-center p-6 md:p-12 lg:px-24 lg:pb-24 lg:pt-40 pt-32">
              
              <div className="w-full max-w-7xl h-[75vh] md:h-[80vh] min-h-[500px] bg-white rounded-[2rem] shadow-[0_20px_80px_-20px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col lg:flex-row overflow-hidden relative">
                
                {/* Project Info Side */}
                <div className="w-full lg:w-[35%] p-10 lg:p-16 flex flex-col justify-center relative z-10 bg-white">
                  <div className="text-[#4F6F52] font-mono text-sm font-bold mb-6 tracking-widest uppercase">Project 0{idx + 1}</div>
                  <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-black mb-6 leading-none">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-500 leading-relaxed mb-10">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-12">
                    {project.stack.map((tech, i) => (
                      <span key={i} className="text-xs font-semibold border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full bg-gray-50">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 mt-auto">
                    <button className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium">
                      <span>View Live</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="flex items-center space-x-2 border border-gray-200 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-50 transition-colors font-medium">
                      <span>Source</span>
                      <FaGithub className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Project Visual Side */}
                <div className="hidden lg:block w-full lg:w-[65%] h-full p-4 pl-0">
                  <project.Visual />
                </div>
                
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Scroll Progress Indicator for Section */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#4F6F52]"
            style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
          />
        </div>
        
      </div>
    </section>
  );
}
