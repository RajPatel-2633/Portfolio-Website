import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi 👋 I know everything about Raj. Ask me anything." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const SUGGESTIONS = [
    "Explain Kissan-Mitra AI",
    "What is Raj's ML experience?",
    "Why hire Raj?"
  ];

  const handleSend = (text) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setInput('');
    setIsTyping(true);

    // Mock API response delay
    setTimeout(() => {
      let reply = "This is a mocked response. In production, this would query a LangChain RAG pipeline connected to my resume and project docs!";
      
      if (text.toLowerCase().includes("kissan")) {
        reply = "Kissan-Mitra AI is an AI Crop Disease Detection Platform I built using React, FastAPI, TensorFlow, and ResNet50. It achieves 95% accuracy and includes an AI assistant to generate solutions!";
      } else if (text.toLowerCase().includes("experience") || text.toLowerCase().includes("ml")) {
        reply = "I have strong experience in Machine Learning, Deep Learning, and Computer Vision. I've built models using TensorFlow and YOLOv8, and I've integrated them into scalable web apps using FastAPI and React.";
      } else if (text.toLowerCase().includes("hire")) {
        reply = "Raj combines deep AI/ML knowledge with full-stack MERN expertise. This means he doesn't just build models—he deploys them into production-ready, scalable products with excellent user experiences.";
      }

      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-foreground text-background px-6 py-4 rounded-full shadow-2xl flex items-center space-x-2 transition-transform ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <MessageSquare className="w-5 h-5" />
        <span className="font-semibold whitespace-nowrap">Ask Raj AI ✨</span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-[400px] h-[600px] max-h-[80vh] bg-white border border-border rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gray-50 border-b border-border flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  AI
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Raj's AI Assistant</h3>
                  <p className="text-xs text-green-600 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-1 animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors text-muted-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-foreground text-background rounded-br-none' 
                      : 'bg-white border border-border text-foreground rounded-bl-none shadow-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-border rounded-2xl rounded-bl-none p-4 flex space-x-1 shadow-sm">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions */}
            {messages.length === 1 && (
              <div className="p-4 flex flex-col space-y-2">
                {SUGGESTIONS.map((s, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleSend(s)}
                    className="text-left text-sm p-2 rounded-lg bg-gray-50 border border-border hover:bg-gray-100 transition-colors text-muted-foreground"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border bg-white">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                className="flex items-center space-x-2"
              >
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..." 
                  className="flex-1 bg-gray-50 border border-border rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <button 
                  type="submit" 
                  disabled={!input.trim()}
                  className="p-3 bg-primary text-primary-foreground rounded-full disabled:opacity-50 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
