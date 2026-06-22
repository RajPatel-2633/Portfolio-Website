import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Mic, Sparkles, Code2 } from 'lucide-react';

const KissanVisual = () => (
  <div className="w-full h-40 bg-white border-b border-gray-100 flex items-center justify-center p-4 relative">
    <div className="flex items-center justify-between w-full max-w-[280px]">
      <div className="flex flex-col items-center">
        <Leaf className="w-8 h-8 text-[#4F6F52] mb-1" />
      </div>
      <ArrowRight className="w-3 h-3 text-gray-300" />
      <div className="flex flex-col space-y-2">
        <div className="border border-gray-200 rounded p-1 text-[8px] font-mono flex items-center justify-center bg-gray-50 h-8 w-12">CNN</div>
        <div className="border border-gray-200 rounded p-1 text-[8px] font-mono flex items-center justify-center bg-gray-50 h-8 w-12">ResNet50</div>
      </div>
      <ArrowRight className="w-3 h-3 text-gray-300" />
      <div className="flex flex-col items-center">
        <div className="text-[8px] text-gray-400 mb-1">Prediction</div>
        <div className="bg-[#e8f5e9] text-[#4F6F52] font-bold text-xs px-2 py-1 rounded">95.8%</div>
      </div>
    </div>
  </div>
);

const MockMindVisual = () => (
  <div className="w-full h-40 bg-white border-b border-gray-100 flex items-center justify-center p-4">
    <div className="flex items-center justify-between w-full max-w-[280px]">
      <div className="flex items-center space-x-0.5">
        {[2, 4, 3, 5, 2, 6, 3, 4, 2].map((h, i) => (
          <motion.div key={i} className="w-1 bg-gray-300 rounded-full" animate={{ height: [h*4, h*8, h*4] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }} />
        ))}
      </div>
      <ArrowRight className="w-3 h-3 text-gray-300" />
      <div className="flex flex-col space-y-1 relative">
        <div className="border border-gray-200 rounded p-1 text-[8px] text-center w-20">Question Agent</div>
        <div className="border border-gray-200 rounded p-1 text-[8px] text-center w-20">Evaluation Agent</div>
        <div className="border border-gray-200 rounded p-1 text-[8px] text-center w-20">Feedback Agent</div>
        {/* Connection line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -z-10" />
      </div>
    </div>
  </div>
);

const AstroVisual = () => (
  <div className="w-full h-40 bg-black border-b border-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] mix-blend-screen" />
    <div className="flex items-center justify-between w-full max-w-[280px] z-10">
      <div className="relative w-16 h-16">
        {/* Simple constellation drawing */}
        <div className="absolute w-1.5 h-1.5 bg-yellow-200 rounded-full top-2 left-2 shadow-[0_0_8px_#fef08a]" />
        <div className="absolute w-1.5 h-1.5 bg-yellow-200 rounded-full top-10 left-12 shadow-[0_0_8px_#fef08a]" />
        <div className="absolute w-1.5 h-1.5 bg-yellow-200 rounded-full bottom-2 left-6 shadow-[0_0_8px_#fef08a]" />
        <svg className="absolute inset-0 w-full h-full"><line x1="12" y1="12" x2="50" y2="42" stroke="rgba(254,240,138,0.4)" strokeWidth="1"/><line x1="50" y1="42" x2="28" y2="60" stroke="rgba(254,240,138,0.4)" strokeWidth="1"/></svg>
      </div>
      <div className="w-8 h-px bg-gray-700" />
      <div className="border border-gray-700 bg-gray-900 rounded p-1.5 text-[8px] text-gray-300">LLM</div>
      <div className="w-8 h-px bg-gray-700" />
      <div className="border border-gray-700 bg-gray-900 rounded p-1.5 text-[8px] text-gray-300 text-center">Response<br/>Generated</div>
    </div>
  </div>
);

const LeetSpaceVisual = () => (
  <div className="w-full h-40 bg-[#0f172a] border-b border-gray-900 flex items-center p-4">
    <div className="flex w-full space-x-4">
      {/* Code Editor Side */}
      <div className="flex-1 font-mono text-[8px] text-gray-400">
        <div className="text-gray-500 mb-1">class Solution {'{'}</div>
        <div className="pl-2">solve() {'{'}</div>
        <div className="pl-4 text-green-400">// code</div>
        <div className="pl-2">{'}'}</div>
        <div>{'}'}</div>
      </div>
      {/* Output Side */}
      <div className="w-24 bg-black/50 rounded border border-gray-800 p-2 font-mono text-[7px] flex flex-col space-y-1">
        <div className="text-gray-500 border-b border-gray-800 pb-1 mb-1">Running Testcases...</div>
        <div className="text-gray-300">Test 1 <span className="text-green-500">✓</span></div>
        <div className="text-gray-300">Test 2 <span className="text-green-500">✓</span></div>
        <div className="text-gray-300">Test 3 <span className="text-green-500">✓</span></div>
        <div className="text-green-500 font-bold mt-1">Accepted</div>
        <div className="text-gray-500">Runtime: 32ms</div>
      </div>
    </div>
  </div>
);

const PROJECTS = [
  {
    id: 'kissan',
    title: "Kissan-Mitra AI 🌿",
    desc: "AI powered crop disease detection using ResNet50 and RAG based assistant with multi-language support.",
    stack: ["React", "FastAPI", "TensorFlow", "RAG"],
    Visual: KissanVisual
  },
  {
    id: 'mockmind',
    title: "MockMind AI 🎙️",
    desc: "AI powered voice interview platform using LangGraph for real-time evaluation and feedback.",
    stack: ["React", "LangGraph", "LangChain", "Groq"],
    Visual: MockMindVisual
  },
  {
    id: 'astro',
    title: "Astro AI ✨",
    desc: "AI conversation platform that blends astrology with LLMs to deliver personalized insights and guidance.",
    stack: ["React", "LLM", "Node.js", "MySQL"],
    Visual: AstroVisual
  },
  {
    id: 'leetspace',
    title: "LeetSpace ⚡",
    desc: "LeetCode clone with online code editor, judge system and leaderboard.",
    stack: ["MERN Stack", "Judge0", "MySQL"],
    Visual: LeetSpaceVisual
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-bold text-black">Featured Projects</h2>
            <div className="w-1.5 h-1.5 rounded-full bg-[#4F6F52]" />
          </div>
          <a href="#projects" className="text-sm text-gray-500 hover:text-black flex items-center space-x-1">
            <span>View all projects</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              key={project.id}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer flex flex-col"
            >
              <project.Visual />
              
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-sm font-bold text-black mb-2">{project.title}</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed mb-4 flex-1">{project.desc}</p>
                
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="text-[9px] font-medium border border-gray-200 text-gray-600 px-1.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-1 text-xs font-semibold text-black group-hover:text-[#4F6F52] transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
