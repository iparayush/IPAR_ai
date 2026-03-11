import React from 'react';
import { PROFILE } from '../constants';
import Antigravity from './Antigravity';
import TextType from './TextType';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decoration with Antigravity */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 flex items-center justify-center">
        {/* Ambient glow effects */}
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        {/* Antigravity central component */}
        <div className="absolute scale-[0.65] md:scale-100 flex items-center justify-center pointer-events-auto" style={{ width: '1080px', height: '1080px' }}>
          <Antigravity
            count={300}
            magnetRadius={10}
            ringRadius={10}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={2}
            lerpSpeed={0.1}
            color="#FF9FFC"
            autoAnimate={false}
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2
          className="text-xl md:text-2xl text-primary font-medium mb-4 animate-fade-in-up opacity-0"
        >
          Hello, I'm
        </h2>
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 animate-fade-in-up opacity-0"
          style={{ animationDelay: '100ms' }}
        >
          {PROFILE.name}
        </h1>
        <div
          className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0"
          style={{ animationDelay: '200ms' }}
        >
          <TextType
            text={[PROFILE.tagline, "Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
          />
        </div>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0"
          style={{ animationDelay: '300ms' }}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-primary/90 hover:bg-primary text-dark font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,159,252,0.4)] hover:shadow-[0_0_30px_rgba(255,159,252,0.6)] backdrop-blur-sm"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-card/40 hover:bg-white/10 text-white border border-white/10 font-semibold rounded-full transition-all duration-300 backdrop-blur-md"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;