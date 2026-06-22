import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactTerminal() {
  return (
    <section className="py-20 bg-white relative border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Text & Info */}
          <div className="lg:col-span-4 flex flex-col">
            <h2 className="text-3xl font-bold tracking-tighter text-black mb-4">
              Let's build something<br />amazing together.
            </h2>
            <p className="text-sm text-gray-500 mb-8 max-w-xs">
              Open to opportunities in AI/ML, Full Stack Development and Research Collaborations.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-sm">+91 7600683190</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-sm">rajpatel.260303@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm">Bharuch, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col">
              <div className="bg-gray-50 px-4 py-2 flex items-center justify-between border-b border-gray-100">
                <div className="text-xs font-semibold text-gray-700">root@rajpatel:~$</div>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 rounded-full bg-gray-400" />
                  <div className="w-1 h-1 rounded-full bg-gray-400" />
                  <div className="w-1 h-1 rounded-full bg-gray-400" />
                </div>
              </div>
              <div className="p-6 font-mono text-[10px] sm:text-xs text-gray-600 space-y-2.5">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                  <span className="text-gray-400">&gt;</span> Checking availability...
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                  <span className="text-gray-400">&gt;</span> AI Engineer: <span className="text-[#4F6F52] font-semibold">TRUE</span>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.0 }}>
                  <span className="text-gray-400">&gt;</span> MERN Developer: <span className="text-[#4F6F52] font-semibold">TRUE</span>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.5 }}>
                  <span className="text-gray-400">&gt;</span> Research Enthusiast: <span className="text-[#4F6F52] font-semibold">TRUE</span>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 2.0 }}>
                  <span className="text-gray-400">&gt;</span> Status: <span className="bg-green-100 text-green-700 px-1 py-0.5 rounded flex-inline items-center space-x-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse"></span><span>Available for opportunities</span></span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Column 3: Socials */}
          <div className="lg:col-span-3 flex flex-col lg:items-end">
            <h3 className="text-sm font-bold text-black mb-4">Connect with me</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-black hover:bg-gray-50 transition-colors">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-black hover:bg-gray-50 transition-colors">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href="mailto:rajpatel.260303@gmail.com" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-black hover:bg-gray-50 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
