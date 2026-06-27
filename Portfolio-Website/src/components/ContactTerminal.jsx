import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

// Decryption Text Component
const DecryptText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let iteration = 0;
    
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            // Preserve spaces
            if (letter === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 2;
    }, 30);
    
    return () => clearInterval(interval);
  }, [isInView, text]);

  return <span ref={ref} className={className}>{displayText || text.replace(/[^\s]/g, '_')}</span>;
};

export default function ContactTerminal() {
  return (
    <section className="py-32 md:py-48 bg-[#050505] relative overflow-hidden flex items-center justify-center border-t border-gray-900/50">
      
      {/* Dark Tech Background & SVG Gradients */}
      <div className="absolute inset-0 z-0">
        <svg width="0" height="0" className="absolute" style={{ position: 'absolute', width: 0, height: 0 }}>
          <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="25%" stopColor="#e6683c" />
            <stop offset="50%" stopColor="#dc2743" />
            <stop offset="75%" stopColor="#cc2366" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#10b98115_0%,#050505_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl text-center flex flex-col items-center relative z-10">
        
        {/* Connection Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-3 px-5 py-2.5 bg-emerald-950/40 border border-emerald-500/30 rounded-full mb-12 shadow-[0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-md"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
          <span className="text-xs font-mono font-bold text-emerald-400 tracking-[0.2em]">UPLINK_SECURE</span>
        </motion.div>

        {/* Decryption Header */}
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tight text-white leading-[1.2] mb-20 max-w-4xl font-mono relative">
          <DecryptText text="Open to collaborations on real world projects & job roles." />
        </h2>

        {/* Connection Nodes (Social Links) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
          
          <ContactNode 
            icon={<Mail className="w-6 h-6" />}
            label="EMAIL_PROTOCOL"
            value="rajpatel.260303@gmail.com"
            href="mailto:rajpatel.260303@gmail.com"
            color="red"
            delay={0.1}
          />

          <ContactNode 
            icon={<FaLinkedin className="w-6 h-6" />}
            label="LINKEDIN_NODE"
            value="in/rajpatel"
            href="https://linkedin.com/in/rajpatel"
            color="blue"
            delay={0.2}
          />

          <ContactNode 
            icon={<FaGithub className="w-6 h-6" />}
            label="GITHUB_REPO"
            value="@rajpatel"
            href="https://github.com/rajpatel"
            color="gray"
            delay={0.3}
          />

          <ContactNode 
            icon={<FaInstagram className="w-6 h-6" style={{ fill: "url(#ig-gradient)" }} />}
            label="INSTAGRAM_FEED"
            value="@rajpatel"
            href="https://instagram.com"
            color="instagram"
            delay={0.4}
          />

        </div>

        {/* Terminal Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-32 flex flex-col items-center w-full"
        >
          <div className="text-xs md:text-sm text-gray-500 font-mono flex items-center space-x-2 bg-gray-950/80 px-6 py-4 rounded-lg border border-gray-800/50 shadow-2xl backdrop-blur-md w-full max-w-2xl justify-start overflow-hidden">
            <span className="text-emerald-500 font-bold shrink-0">root@raj-patel:~/system/contact$</span>
            <span className="animate-cursor-blink w-2 h-4 bg-gray-400 inline-block shrink-0" />
            
            {/* Background fading logs */}
            <div className="absolute right-4 text-[10px] text-gray-800 select-none pointer-events-none hidden md:block">
              [TLS_HANDSHAKE_OK] PORT_8080:LISTENING
            </div>
          </div>
          <div className="mt-8 text-[10px] text-gray-600 font-mono tracking-widest uppercase">
            © {new Date().getFullYear()} RAJ PATEL. SYSTEM OPERATIONAL.
          </div>
        </motion.div>

      </div>
    </section>
  );
}

const ContactNode = ({ icon, label, value, href, color, delay }) => {
  const themeStyles = {
    red: {
      wrapper: "hover:bg-red-500/10 hover:border-red-500 hover:text-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]",
      icon: "text-red-500"
    },
    blue: {
      wrapper: "hover:bg-[#0077b5]/10 hover:border-[#0077b5] hover:text-[#0077b5] hover:shadow-[0_0_20px_rgba(0,119,181,0.2)]",
      icon: "text-[#0077b5]"
    },
    gray: {
      wrapper: "hover:bg-white/10 hover:border-white hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
      icon: "text-gray-300"
    },
    instagram: {
      wrapper: "hover:bg-pink-500/10 hover:border-pink-500 hover:text-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]",
      icon: "" // Gradient handled by style prop
    }
  };

  const theme = themeStyles[color];

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`group flex items-center p-4 md:p-5 rounded-2xl border border-gray-800 bg-gray-900/40 text-gray-400 transition-all duration-300 backdrop-blur-sm cursor-pointer ${theme.wrapper}`}
    >
      <div className={`text-2xl mr-4 transition-transform duration-300 group-hover:scale-110 ${theme.icon}`}>
        {icon}
      </div>
      <div className="flex flex-col text-left overflow-hidden">
        <span className="text-[10px] text-gray-500 font-mono mb-0.5 tracking-widest uppercase">{label}</span>
        <span className="font-mono text-sm md:text-base text-gray-200 group-hover:text-inherit transition-colors truncate">
          {value}
        </span>
      </div>
    </motion.a>
  );
};
