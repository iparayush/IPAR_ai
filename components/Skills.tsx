import React from 'react';
import { motion } from 'motion/react';
import { 
  SiReact, 
  SiJavascript, 
  SiHtml5, 
  SiCss, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiPython, 
  SiCplusplus,
  SiC,
  SiR,
  SiPostgresql,
} from 'react-icons/si';
import { TbDatabase, TbCloud, TbBrain, TbRobot, TbChartPie, TbBrandAzure, TbMathSymbols } from 'react-icons/tb';
import { SKILLS } from '../constants';

const getIcon = (name: string) => {
  switch (name) {
    case "React": return <SiReact />;
    case "JavaScript": return <SiJavascript />;
    case "HTML": return <SiHtml5 />;
    case "CSS": return <SiCss />;
    case "TypeScript": return <SiTypescript />;
    case "Tailwind CSS": return <SiTailwindcss />;
    case "Node.js": return <SiNodedotjs />;
    case "Python": return <SiPython />;
    case "C++": return <SiCplusplus />;
    case "C": return <SiC />;
    case "R": return <SiR />;
    case "MATLAB": return <TbMathSymbols />;
    case "AWS": return <TbCloud />;
    case "SQL": return <SiPostgresql />;
    case "Azure": return <TbBrandAzure />;
    case "Machine Learning": return <TbBrain />;
    case "Artificial Intelligence": return <TbRobot />;
    case "Cloud Computing": return <TbCloud />;
    case "Data Analysis": return <TbChartPie />;
    case "Database Design": return <TbDatabase />;
    default: return <TbDatabase />;
  }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Technical Proficiency</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A quantitative overview of my expertise across the full stack development ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all hover:bg-zinc-800/60 hover:border-primary/30"
            >
              <div className={`text-4xl mb-4 transition-colors duration-300 ${
                skill.category === 'Frontend' ? 'text-blue-400 group-hover:text-blue-300' : 
                skill.category === 'Backend' ? 'text-purple-400 group-hover:text-purple-300' : 
                skill.category === 'Cloud' ? 'text-cyan-400 group-hover:text-cyan-300' :
                'text-emerald-400 group-hover:text-emerald-300'
              }`}>
                {getIcon(skill.name)}
              </div>
              
              <h3 className="text-white font-medium mb-1 text-sm md:text-base">{skill.name}</h3>
              
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{skill.category}</span>
                <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                <span className="text-primary font-bold text-sm">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 border-t border-zinc-800 pt-10">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
            <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">Frontend</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
            <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">Backend</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
            <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">Cloud</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">AI / Data</span>
          </div>
        </div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Skills;
