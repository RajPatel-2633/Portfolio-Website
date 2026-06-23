import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Leaf, Mic, Sparkles, Code2, Database, BrainCircuit, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const KissanVisual = () => (
  <div className="w-full h-full bg-gradient-to-br from-[#f8faf8] to-[#edf3ed] rounded-3xl border border-gray-200 flex flex-col items-center justify-center p-8 relative overflow-hidden shadow-[inset_0_4px_40px_rgba(0,0,0,0.02)]">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlMmU4ZTIiLz48L3N2Zz4=')] opacity-50" />
    
    <div className="flex items-center space-x-12 z-10 w-full max-w-2xl">
      <motion.div 
        animate={{ y: [-10, 10, -10] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-48 h-48 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center border border-[#4F6F52]/20 relative"
      >
        <motion.div
          animate={{ height: ["0%", "100%", "0%"], opacity: [0, 0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full bg-[#4F6F52]/10 rounded-2xl"
        />
        <Leaf className="w-20 h-20 text-[#4F6F52]" strokeWidth={1.5} />
        <div className="mt-4 font-mono text-sm text-[#4F6F52] font-semibold tracking-widest uppercase">Input Leaf</div>
      </motion.div>

      <div className="flex-1 flex flex-col space-y-6">
        {[1, 2, 3].map((i) => (
          <motion.div 
            key={i}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="flex items-center space-x-4"
          >
            <div className="h-0.5 flex-1 bg-gradient-to-r from-[#4F6F52]/20 to-[#4F6F52] relative">
              <motion.div 
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-[#4F6F52] rounded-full shadow-[0_0_10px_#4F6F52]"
                animate={{ left: ["0%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
              />
            </div>
            <div className="bg-white border border-[#4F6F52]/30 px-4 py-2 rounded-lg text-xs font-mono text-gray-600 shadow-sm w-32 text-center">
              {i === 1 ? 'CNN Layer' : i === 2 ? 'ResNet50' : 'Feature Ext'}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, type: "spring" }}
        className="w-48 h-48 bg-[#4F6F52] rounded-full shadow-[0_0_40px_rgba(79,111,82,0.3)] flex flex-col items-center justify-center text-white border-4 border-white"
      >
        <div className="text-sm font-medium mb-1 opacity-80">Confidence</div>
        <div className="text-4xl font-bold">98.5%</div>
        <div className="text-xs font-mono mt-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">HEALTHY</div>
      </motion.div>
    </div>
  </div>
);

const MockMindVisual = () => (
  <div className="w-full h-full bg-white rounded-3xl border border-gray-200 flex flex-col items-center justify-center p-8 relative overflow-hidden shadow-[inset_0_4px_40px_rgba(0,0,0,0.02)]">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gray-100 rounded-full" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-100 rounded-full" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gray-100 rounded-full" />
    
    <div className="relative z-10 w-full max-w-3xl flex justify-between items-center">
      
      {/* Voice Input */}
      <div className="flex flex-col items-center">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 40px rgba(0,0,0,0.1)", "0 0 0px rgba(0,0,0,0)"] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-32 h-32 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center mb-6"
        >
          <Mic className="w-10 h-10 text-black" />
        </motion.div>
        <div className="flex items-center space-x-1 h-8">
          {[2, 4, 3, 5, 2, 6, 3, 4, 2, 5, 3].map((h, i) => (
            <motion.div 
              key={i} 
              className="w-1.5 bg-black rounded-full" 
              animate={{ height: [h*4, h*10, h*4] }} 
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }} 
            />
          ))}
        </div>
      </div>

      <div className="flex-1 flex justify-center relative">
        <ArrowRight className="w-8 h-8 text-gray-300 absolute top-1/2 -translate-y-1/2 left-1/4" />
        <ArrowRight className="w-8 h-8 text-gray-300 absolute top-1/2 -translate-y-1/2 right-1/4" />
        
        {/* Central Orchestrator */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-48 h-48 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center relative bg-white"
        >
          <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 bg-white border border-gray-200 px-4 py-2 rounded-full text-xs font-bold text-black shadow-sm flex items-center space-x-2">
            <BrainCircuit className="w-4 h-4 text-black" />
            <span>Question Agent</span>
          </div>
          <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 bg-white border border-gray-200 px-4 py-2 rounded-full text-xs font-bold text-black shadow-sm flex items-center space-x-2">
            <Database className="w-4 h-4 text-black" />
            <span>Eval Agent</span>
          </div>
          
          <div className="w-24 h-24 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg shadow-2xl">
            LangGraph
          </div>
        </motion.div>
      </div>

      {/* Real-time Feedback */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="w-64 bg-white border border-gray-200 shadow-xl rounded-2xl p-6 flex flex-col space-y-4"
      >
        <div className="text-sm font-bold border-b border-gray-100 pb-2">Real-time Feedback</div>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs mb-1"><span className="text-gray-500">Clarity</span><span className="font-bold">92%</span></div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: "92%" }} transition={{ duration: 1 }} className="h-full bg-green-500" /></div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1"><span className="text-gray-500">Technical</span><span className="font-bold">85%</span></div>
            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-black" /></div>
          </div>
        </div>
      </motion.div>

    </div>
  </div>
);

const AstroVisual = () => (
  <div className="w-full h-full bg-[#0a0a0a] rounded-3xl border border-gray-800 flex items-center justify-center p-8 relative overflow-hidden shadow-2xl">
    <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] mix-blend-screen" />
    
    {/* Abstract Constellation */}
    <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
      <motion.svg animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }} width="600" height="600" viewBox="0 0 600 600">
        <motion.path 
          d="M 300 100 L 450 250 L 350 450 L 150 400 L 100 200 Z" 
          fill="none" 
          stroke="rgba(254,240,138,0.3)" 
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        {[ [300, 100], [450, 250], [350, 450], [150, 400], [100, 200] ].map((pos, i) => (
          <circle key={i} cx={pos[0]} cy={pos[1]} r="4" fill="#fef08a" />
        ))}
      </motion.svg>
    </div>

    <div className="z-10 flex flex-col items-center justify-center space-y-10 w-full max-w-lg">
      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(234,179,8,0.15)] backdrop-blur-md"
      >
        <Sparkles className="w-10 h-10 text-yellow-200" />
      </motion.div>
      
      <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
        <div className="flex space-x-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="font-mono text-sm text-gray-300 space-y-2">
          <p><span className="text-blue-400">const</span> <span className="text-yellow-200">alignChart</span> = <span className="text-purple-400">async</span> (user) {'=>'} {'{'}</p>
          <p className="pl-4">await <span className="text-blue-300">LLM.generateInsight</span>(user.birthData);</p>
          <p className="pl-4">return <span className="text-green-300">"Cosmic alignment found."</span>;</p>
          <p>{'}'}</p>
        </div>
      </div>
    </div>
  </div>
);

const LeetSpaceVisual = () => (
  <div className="w-full h-full bg-[#0f172a] rounded-3xl border border-gray-800 flex overflow-hidden shadow-2xl relative">
    {/* Editor Side */}
    <div className="flex-1 border-r border-gray-800 bg-[#0f172a] flex flex-col relative overflow-hidden">
      <div className="h-12 border-b border-gray-800 flex items-center px-4 space-x-4 bg-black/20">
        <div className="text-xs font-mono text-gray-400 bg-[#1e293b] px-3 py-1.5 rounded flex items-center space-x-2">
          <Code2 className="w-3 h-3" />
          <span>Solution.cpp</span>
        </div>
      </div>
      <div className="p-6 font-mono text-sm text-gray-400 flex-1 relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 border-r border-gray-800/50 flex flex-col items-end pr-2 pt-6 space-y-1 text-gray-600 text-xs">
          {[1,2,3,4,5,6,7,8].map(n => <span key={n}>{n}</span>)}
        </div>
        <div className="pl-10 space-y-1">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}><span className="text-blue-400">class</span> <span className="text-yellow-200">Solution</span> {'{'}</motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} className="pl-4"><span className="text-blue-400">public:</span></motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} className="pl-8"><span className="text-green-400">int</span> <span className="text-blue-300">solve</span>(vector&lt;int&gt;& nums) {'{'}</motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} className="pl-12 text-gray-500">// optimized O(n) logic</motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} className="pl-12"><span className="text-purple-400">return</span> <span className="text-orange-300">42</span>;</motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} className="pl-8">{'}'}</motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }}>{'}'};</motion.div>
        </div>
      </div>
    </div>
    
    {/* Terminal / Judge Side */}
    <div className="w-[30%] min-w-[280px] bg-black/40 flex flex-col">
      <div className="h-12 border-b border-gray-800 flex items-center px-4 bg-black/20 text-xs font-mono text-gray-400">
        Execution Terminal
      </div>
      <div className="p-6 font-mono text-xs flex flex-col space-y-4">
        <div className="text-gray-500">Running Judge0 Evaluation...</div>
        <div className="space-y-2">
          {[1,2,3].map(i => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + (i*0.2) }}
              className="flex justify-between items-center bg-gray-900/50 p-2 rounded border border-gray-800"
            >
              <span className="text-gray-300">Testcase {i}</span>
              <span className="text-green-500 font-bold">Passed (2ms)</span>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
          className="mt-4 bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-lg flex flex-col items-center justify-center space-y-1"
        >
          <div className="font-bold text-lg">Accepted</div>
          <div className="text-gray-500 text-[10px]">Beats 98.4% of users</div>
        </motion.div>
      </div>
    </div>
  </div>
);

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
        
        <div className="absolute top-12 left-12 z-50 flex items-center space-x-3">
          <h2 className="text-3xl font-black tracking-tighter text-black uppercase">Selected Works</h2>
          <div className="w-2 h-2 rounded-full bg-[#4F6F52] animate-pulse" />
        </div>

        <motion.div style={{ x }} className="flex h-full w-[400vw]">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className="w-screen h-full flex items-center justify-center p-6 md:p-12 lg:p-24 pt-32">
              
              <div className="w-full max-w-7xl h-[80vh] bg-white rounded-[2rem] shadow-[0_20px_80px_-20px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col lg:flex-row overflow-hidden relative">
                
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
