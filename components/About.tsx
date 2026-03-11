import React from 'react';
import { PROFILE, PROJECTS, EXPERIENCES } from '../constants';

const About: React.FC = () => {
  // Calculate stats dynamically
  const projectCount = PROJECTS.length;
  // Filter experiences that are explicitly labeled as "GenAI" or "Certification" if we wanted, 
  // but for now we can just count specific certifications or just use length of total items
  const certificationsCount = EXPERIENCES.filter(e => e.role.includes("Simulation") || e.role.includes("Certification")).length;

  return (
    <section id="about" className="py-20 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-primary pl-4">About Me</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed">
              {PROFILE.about}
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-primary/30 transition-colors">
              <span className="block text-3xl font-bold text-primary">BCA</span>
              <span className="text-sm text-slate-400">Student</span>
            </div>
            <div className="text-center p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-secondary/30 transition-colors">
              <span className="block text-3xl font-bold text-secondary">{projectCount}+</span>
              <span className="text-sm text-slate-400">Projects</span>
            </div>
            <div className="text-center p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-primary/30 transition-colors">
              <span className="block text-3xl font-bold text-primary">{certificationsCount}</span>
              <span className="text-sm text-slate-400">Certification</span>
            </div>
            <div className="text-center p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-secondary/30 transition-colors">
              <span className="block text-3xl font-bold text-secondary">100%</span>
              <span className="text-sm text-slate-400">Commitment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;