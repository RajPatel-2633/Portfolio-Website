import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import AchievementStats from './components/AchievementStats';
import ProjectsSection from './components/ProjectsSection';
import JourneyTimeline from './components/JourneyTimeline';
import Experience from './components/Experience';
import EngineeringPipeline from './components/EngineeringPipeline';
import NeuralNetworkVisualization from './components/NeuralNetworkVisualization';

import AchievementsCards from './components/AchievementsCards';
import ContactTerminal from './components/ContactTerminal';
import AIChatbot from './components/AIChatbot';
import Header from './components/Header';
import ScrollProgress from './components/ScrollProgress';
import MatrixCodeBackground from './components/MatrixCodeBackground';

function App() {
  const [loading, setLoading] = useState(true);
  const [isShattered, setIsShattered] = useState(false);

  useEffect(() => {
    const handleShatter = () => setIsShattered(true);
    document.addEventListener('shatterReality', handleShatter);
    return () => document.removeEventListener('shatterReality', handleShatter);
  }, []);

  return (
    <>
      {isShattered && <MatrixCodeBackground onRestore={() => setIsShattered(false)} />}
      
      <motion.div 
        animate={isShattered ? { scale: 0.5, y: "100vh", rotate: 5, opacity: 0 } : { scale: 1, y: 0, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ pointerEvents: isShattered ? 'none' : 'auto' }}
      >
        <div className="noise-overlay" />
        <ScrollProgress />
        <Header />
        <Layout>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <main className="w-full min-h-screen">
          <div id="home"><Hero /></div>
          <AchievementStats />
          <div id="projects"><ProjectsSection /></div>
          <EngineeringPipeline />
          <JourneyTimeline />
          <div id="experience"><Experience /></div>
          <div id="achievements"><AchievementsCards /></div>
          <div id="contact"><ContactTerminal /></div>
          <AIChatbot />
        </main>
      )}
        </Layout>
      </motion.div>
    </>
  );
}

export default App;
