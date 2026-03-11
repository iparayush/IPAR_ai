import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
import SplashCursor from './components/SplashCursor';
import { PROFILE } from './constants';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark text-slate-200 font-sans selection:bg-primary/30">
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}>
        <SplashCursor
          SIM_RESOLUTION={128}
          DYE_RESOLUTION={1440}
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          COLOR_UPDATE_SPEED={10}
        />
      </div>
      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-white tracking-tight">
            <span className="text-primary">{'<'}</span>
            {PROFILE.name.split(' ')[0]}
            <span className="text-primary">{' />'}</span>
          </a>

          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">About</a>
            <a href="#experience" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="text-sm font-medium text-slate-300 hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative flex flex-col items-center overflow-x-hidden w-full">
        <Hero />
        <TechStack />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* AI Floating Button */}
      <AIChat />
    </div>
  );
};

export default App;