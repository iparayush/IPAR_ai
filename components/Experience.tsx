import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-16 text-center">Professional Journey</h2>

        <div className="relative">
          {/* Timeline central line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-zinc-800 h-full rounded-full"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center w-full`}>

                {/* Spacer for the other side */}
                <div className="flex-1 w-full md:w-1/2"></div>

                {/* Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-black z-10"></div>

                {/* Content Card */}
                <div className="flex-1 w-full md:w-1/2 pl-8 md:pl-0 md:px-8">
                  <div className="bg-card p-6 rounded-xl border border-zinc-800 hover:border-primary/50 transition-colors shadow-lg">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <h4 className="text-lg text-slate-400 mb-4">{exp.company}</h4>
                    <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;