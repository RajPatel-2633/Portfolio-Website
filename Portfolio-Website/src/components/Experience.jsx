import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Code2, Database, Server, Users, Network, Target, Terminal as TerminalIcon, Ticket, Package, Activity, Star, User, CheckCircle2 } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    title: "Object Detection Architecture",
    desc: "Engineered a highly accurate football detection system utilizing state-of-the-art YOLOv8 neural networks, successfully increasing overall detection precision by 18%."
  },
  {
    title: "Backend Infrastructure",
    desc: "Designed, developed, and deployed robust RESTful APIs to power a comprehensive, real-time inventory and ticket management ecosystem."
  },
  {
    title: "Technical Leadership",
    desc: "Successfully guided and mentored a dedicated technical team of 8 members, ensuring agile delivery pipelines and optimal system performance."
  }
];

const ObjectDetectionVisual = () => (
  <motion.div 
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
    className="absolute inset-0 flex items-center justify-center bg-black overflow-hidden"
    style={{ perspective: 1000 }}
  >
    {/* CRT Noise Overlay */}
    <div className="absolute inset-0 z-50 pointer-events-none mix-blend-overlay opacity-30" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
    
    {/* Deep Space Background */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#064e3b_0%,#000000_100%)] opacity-50"></div>

    {/* 3D Isometric Plane */}
    <motion.div 
      initial={{ rotateX: 60, rotateZ: 45 }}
      animate={{ rotateZ: 360 + 45 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      className="relative w-[600px] h-[600px] border border-emerald-500/20"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* 3D Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98133_1px,transparent_1px),linear-gradient(to_bottom,#10b98133_1px,transparent_1px)] bg-[size:40px_40px] shadow-[inset_0_0_100px_rgba(0,0,0,1)]"></div>
      
      {/* Scanning Radar Surface */}
      <motion.div
        animate={{ rotateZ: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(16,185,129,0.3)_90deg,transparent_90deg)] rounded-full mix-blend-screen"
      />

      {/* Floating 3D Target 1 */}
      <motion.div
        animate={{ x: [100, 300, 100], y: [100, 400, 100], z: [50, 100, 50] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-16 h-16"
        style={{ transformStyle: 'preserve-3d' }}
      >
         {/* The Object (A glowing sphere projection) */}
         <div className="w-full h-full rounded-full bg-emerald-400/20 shadow-[0_0_30px_#10b981]"></div>
         
         {/* Holographic Bounding Box hovering above */}
         <div className="absolute -inset-4 border-2 border-emerald-400/80 bg-emerald-500/10 backdrop-blur-sm flex flex-col justify-between p-1" style={{ transform: "translateZ(80px) rotateX(-60deg)", transformStyle: 'preserve-3d' }}>
            {/* Box Corners */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-emerald-300"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-emerald-300"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-emerald-300"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-emerald-300"></div>
            
            <div className="text-[12px] font-mono text-emerald-100 bg-emerald-900/80 w-max px-1 border border-emerald-500/50 shadow-lg">TARGET_A [99.8%]</div>
            <div className="text-[10px] font-mono text-emerald-400 font-bold bg-black/50 px-1 w-max">X: 14.2 Y: 8.9 Z: 4.1</div>
         </div>
      </motion.div>

      {/* Floating 3D Target 2 */}
      <motion.div
        animate={{ x: [400, 100, 400], y: [400, 100, 400], z: [30, 80, 30] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-10 h-10"
        style={{ transformStyle: 'preserve-3d' }}
      >
         <div className="w-full h-full rounded-full bg-cyan-400/20 shadow-[0_0_20px_#22d3ee]"></div>
         
         <div className="absolute -inset-2 border-2 border-cyan-400/80 bg-cyan-500/10 flex flex-col justify-between p-1" style={{ transform: "translateZ(60px) rotateX(-60deg)", transformStyle: 'preserve-3d' }}>
            <div className="text-[10px] font-mono text-cyan-100 bg-cyan-900/80 w-max px-1 border border-cyan-500/50 shadow-lg">TARGET_B [87.2%]</div>
         </div>
      </motion.div>
    </motion.div>

    {/* HUD Elements Overlay (Flat on screen) */}
    <div className="absolute inset-0 pointer-events-none z-40 scale-75 md:scale-100">
       <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-emerald-500/50" />
       <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-emerald-500/50" />
       
       {/* Targeting Reticle in Center */}
       <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-emerald-500/50 rounded-full border-dashed shadow-[0_0_15px_#10b981]" />
       <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-emerald-500/20 rounded-full border-dotted" />
       
       {/* Matrix Data Stream */}
       <div className="absolute bottom-12 left-12 text-emerald-500 font-mono text-xs md:text-sm leading-relaxed opacity-90 drop-shadow-[0_0_5px_#10b981]">
          <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 0.1, repeat: Infinity }}>
            SYS.OP.01... OK<br/>
            COORD.TRACK... ACTIVE<br/>
            TGT_LOCK... [ENGAGED]
          </motion.div>
       </div>
    </div>
  </motion.div>
);

const BackendVisual = () => (
  <motion.div 
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
    className="absolute inset-0 flex items-center justify-center bg-zinc-950 overflow-hidden"
    style={{ perspective: 1000 }}
  >
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e1b4b_0%,#09090b_100%)]"></div>

     {/* Holographic Isometric Scene */}
     <div className="relative w-full max-w-2xl h-full flex items-center justify-center scale-[0.6] sm:scale-75 md:scale-100" style={{ transformStyle: 'preserve-3d' }}>
        
        {/* Left: Ticket Emission Hub */}
        <div className="absolute left-[10%] top-1/2 -translate-y-1/2 flex flex-col items-center z-10" style={{ transform: "rotateY(20deg) rotateX(10deg)" }}>
           <div className="w-24 h-32 bg-blue-950/80 border-2 border-blue-500 rounded-xl shadow-[0_0_40px_rgba(59,130,246,0.4)] backdrop-blur-md flex flex-col items-center p-4 relative overflow-hidden">
              <div className="absolute top-0 w-full h-1 bg-blue-400 animate-pulse" />
              <Ticket className="text-blue-300 w-10 h-10 mb-4" />
              <div className="text-xs font-mono text-blue-200 text-center font-bold">CLIENT<br/>TERMINAL</div>
              
              {/* Ejecting Tickets */}
              {[0, 1, 2].map(i => (
                <motion.div
                  key={`ticket-${i}`}
                  animate={{ y: [0, -150], x: [0, 150], scale: [1, 0.5], opacity: [1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5, ease: "easeIn" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-4 bg-blue-400/80 rounded flex items-center justify-center shadow-[0_0_15px_#60a5fa]"
                >
                  <Ticket className="w-3 h-3 text-white" />
                </motion.div>
              ))}
           </div>
           
           {/* Ground projection */}
           <div className="w-32 h-8 bg-blue-500/20 rounded-full blur-xl absolute -bottom-10" style={{ transform: "rotateX(70deg)" }} />
        </div>
        
        {/* Center: Massive Reactor Core (API Gateway) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20" style={{ transformStyle: 'preserve-3d' }}>
           {/* Spinning Rings */}
           <motion.div animate={{ rotateX: 75, rotateZ: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-emerald-500/30 rounded-full" style={{ transformStyle: 'preserve-3d' }} />
           <motion.div animate={{ rotateX: 75, rotateZ: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-emerald-400/20 rounded-full border-dashed" style={{ transformStyle: 'preserve-3d' }} />
           
           {/* Core Pillar */}
           <motion.div 
             animate={{ height: [120, 140, 120] }} 
             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             className="w-24 bg-gradient-to-t from-emerald-900 to-emerald-400 border-2 border-emerald-300 rounded-3xl shadow-[0_0_60px_rgba(16,185,129,0.8)] flex items-center justify-center absolute bottom-0 left-1/2 -translate-x-1/2"
           >
              <Server className="text-white w-12 h-12" />
           </motion.div>
           
           {/* Hologram Text */}
           <div className="absolute -top-32 left-1/2 -translate-x-1/2 text-emerald-400 font-mono font-bold tracking-[0.3em] text-sm whitespace-nowrap drop-shadow-[0_0_10px_#10b981]">
              GATEWAY_CORE
           </div>
        </div>

        {/* Right: Isometric 3D Inventory Block */}
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 flex flex-col items-center z-10" style={{ transform: "rotateY(-20deg) rotateX(10deg)", transformStyle: 'preserve-3d' }}>
           
           {/* Isometric Grid Base */}
           <div className="w-40 h-40 bg-purple-950/80 border-2 border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.4)] backdrop-blur-md relative" style={{ transform: "rotateX(60deg) rotateZ(45deg)", transformStyle: "preserve-3d" }}>
              
              {/* Data hits translating into holographic tiles rising */}
              {[
                { x: 10, y: 10, z: 40, delay: 0 },
                { x: 60, y: 10, z: 80, delay: 0.3 },
                { x: 110, y: 10, z: 60, delay: 0.6 },
                { x: 10, y: 60, z: 100, delay: 0.9 },
                { x: 60, y: 60, z: 30, delay: 1.2 },
                { x: 110, y: 60, z: 70, delay: 1.5 },
                { x: 60, y: 110, z: 90, delay: 1.8 }
              ].map((bar, i) => (
                 <motion.div
                   key={`bar-${i}`}
                   animate={{ z: [10, bar.z, 10] }}
                   transition={{ duration: 2, repeat: Infinity, delay: bar.delay, ease: "easeInOut" }}
                   className="absolute w-8 h-8 bg-purple-400/80 border border-purple-200 shadow-[0_0_20px_#a855f7] flex items-center justify-center backdrop-blur-md"
                   style={{ left: bar.x, top: bar.y, transformStyle: 'preserve-3d' }}
                 >
                    <Package className="w-4 h-4 text-white opacity-70" style={{ transform: "rotateX(-90deg) rotateY(0deg) rotateZ(45deg) translateZ(10px)" }} />
                 </motion.div>
              ))}

           </div>

           <div className="text-xs font-mono text-purple-300 text-center font-bold mt-12 bg-purple-900/50 px-3 py-1 rounded-md border border-purple-500/50 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              INVENTORY_DB
           </div>
        </div>
        
     </div>
  </motion.div>
);

const LeadershipVisual = () => (
  <motion.div 
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
    className="absolute inset-0 flex flex-col items-center justify-end bg-[#050505] overflow-hidden"
    style={{ perspective: 1000 }}
  >
     {/* Hyper-speed Tunnel Background */}
     <div className="absolute inset-0 z-0 opacity-40">
       {[...Array(30)].map((_, i) => (
         <motion.div
           key={`star-${i}`}
           initial={{ x: '100vw', y: `${Math.random() * 100}vh`, width: Math.random() * 100 + 50 }}
           animate={{ x: '-20vw' }}
           transition={{ duration: Math.random() * 0.5 + 0.2, repeat: Infinity, ease: "linear" }}
           className="absolute h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_10px_#fbbf24]"
         />
       ))}
     </div>

     {/* 3D Orbital Scene */}
     <div className="absolute inset-0 flex items-center justify-center z-10 scale-[0.5] sm:scale-[0.65] md:scale-90" style={{ transformStyle: 'preserve-3d' }}>
        
        {/* Central Leader Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" style={{ transformStyle: 'preserve-3d' }}>
           {/* Burning Sun Aura */}
           <motion.div animate={{ scale: [1, 1.2, 1], rotateZ: 180 }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(249,115,22,0.5)_90deg,transparent_180deg)] rounded-full blur-xl mix-blend-screen" />
           <motion.div animate={{ scale: [1.2, 1, 1.2], rotateZ: -180 }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(225,29,72,0.5)_90deg,transparent_180deg)] rounded-full blur-xl mix-blend-screen" />
           
           {/* Solid Core */}
           <motion.div 
             animate={{ boxShadow: ["0 0 50px rgba(251,191,36,0.6)", "0 0 100px rgba(251,191,36,1)", "0 0 50px rgba(251,191,36,0.6)"] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="w-24 h-24 bg-gradient-to-br from-amber-300 via-orange-500 to-rose-700 rounded-full flex items-center justify-center border-4 border-white/20 relative z-30 shadow-2xl"
           >
              <Star className="text-white w-10 h-10 fill-white" />
           </motion.div>
        </div>

        {/* 3D Orbiting Team Members */}
        <motion.div 
          animate={{ rotateZ: 360 }} 
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2"
          style={{ transformStyle: 'preserve-3d', transform: 'rotateX(75deg)' }}
        >
          {/* Orbital Ring Line */}
          <div className="absolute inset-0 border border-orange-500/20 rounded-full" />
          
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
             <div 
               key={i} 
               className="absolute top-1/2 left-1/2 w-14 h-14 -translate-x-1/2 -translate-y-1/2"
               style={{ transform: `rotateZ(${angle}deg) translateY(-200px)`, transformStyle: 'preserve-3d' }}
             >
               {/* Counter rotation so nodes always face camera and stay upright */}
               <motion.div 
                 animate={{ rotateZ: -360 }}
                 transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                 className="w-full h-full bg-slate-950/90 border-2 border-orange-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.8)] backdrop-blur-md relative"
                 style={{ transform: "rotateX(-75deg)", transformStyle: 'preserve-3d' }}
               >
                 <User className="text-orange-300 w-6 h-6" />
                 
                 {/* Connection beam to center (simulated with a pseudo-element pointing down relative to the node) */}
                 <motion.div 
                   animate={{ height: [0, 50, 0], opacity: [0, 1, 0] }}
                   transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                   className="absolute top-full left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-orange-400 to-transparent"
                 />
               </motion.div>
             </div>
          ))}
        </motion.div>

     </div>
     
     {/* Agile Delivery Pipeline Stream (Foreground 3D layer) */}
     <div className="relative w-full max-w-3xl h-24 mb-12 z-30" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(30deg)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-900/90 to-transparent border-y-2 border-emerald-500/50 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.2)]">
           
           <div className="text-[10px] md:text-sm font-bold text-emerald-400 font-mono tracking-[0.5em] mb-3 drop-shadow-[0_0_10px_#34d399] z-10">AGILE_DELIVERY_PIPELINE</div>
           
           <div className="w-[80%] h-4 relative bg-black/50 rounded-full overflow-hidden border border-emerald-900/50">
             {/* Streaming Packages */}
             {[...Array(6)].map((_, i) => (
               <motion.div
                 key={`pkg-${i}`}
                 animate={{ x: ["-100vw", "100vw"] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
                 className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_20px_#10b981]"
               />
             ))}
           </div>
        </div>
     </div>
  </motion.div>
);

const StackedCard = ({ item, index, setActiveIndex }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"]
  });

  useTransform(scrollYProgress, (pos) => {
    if (pos > 0.3 && pos < 0.7) {
      setActiveIndex(index);
    }
  });

  return (
    <div ref={targetRef} className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-0">
      <motion.div
        className="w-full bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] flex flex-col relative overflow-hidden"
        style={{ 
          top: `calc(15vh + ${index * 1.5}rem)`, 
          position: 'sticky',
          boxShadow: "0 -20px 40px -15px rgba(0, 0, 0, 0.05)"
        }}
      >
        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#4F6F52]" />
        
        <div className="text-gray-300 font-mono text-sm font-bold mb-6 flex items-center space-x-2">
          <span>0{index + 1}</span>
          <span className="text-gray-200">//</span>
        </div>
        
        <h4 className="text-3xl md:text-5xl font-black text-black mb-6 tracking-tight leading-[1.1]">
          {item.title}
        </h4>
        
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-light">
          {item.desc}
        </p>
      </motion.div>
    </div>
  );
};

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white relative">
      {/* Intro Header */}
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full mb-6 w-max shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#4F6F52] animate-pulse" />
              <span className="text-sm font-bold text-black uppercase tracking-widest">Experience</span>
            </div>
            
            <h2 className="text-[#4F6F52] font-black tracking-widest text-sm mb-4 uppercase">IT-IDOL Technologies</h2>
            <h3 className="text-5xl md:text-7xl font-black leading-[1.1] text-black mb-8 tracking-tighter max-w-2xl">
              ML & Backend Developer.
            </h3>
            <div className="flex items-center space-x-4 text-gray-500 font-medium text-lg">
              <span>Jan 2026 — May 2026</span>
              <span className="w-12 h-px bg-gray-200" />
              <span>Internship</span>
            </div>
          </div>
        </div>
      </div>

      {/* Split Pane: Visualizer & Stacking Cards */}
      <div className="container mx-auto px-0 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-24 relative items-start">
          
          {/* Left: Sticky Context-Aware Visualizer */}
          <div className="lg:sticky lg:top-32 h-[350px] lg:h-[600px] md:rounded-[2.5rem] overflow-hidden border-y md:border border-gray-200 shadow-2xl relative z-20 bg-gray-50">
             <AnimatePresence mode="wait">
               {activeIndex === 0 && <ObjectDetectionVisual key="0" />}
               {activeIndex === 1 && <BackendVisual key="1" />}
               {activeIndex === 2 && <LeadershipVisual key="2" />}
             </AnimatePresence>
          </div>

          {/* Right: Stacking Cards */}
          <div className="relative pb-32">
            {ACHIEVEMENTS.map((item, i) => (
              <StackedCard 
                key={i} 
                item={item} 
                index={i} 
                setActiveIndex={setActiveIndex} 
              />
            ))}
          </div>

        </div>
      </div>



    </section>
  );
}
