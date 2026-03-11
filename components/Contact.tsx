import React from 'react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
        <p className="text-slate-400 mb-12 text-lg">
          I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a 
          href={PROFILE.social.email}
          className="inline-block px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-lg transition-all duration-300 mb-16"
        >
          Say Hello
        </a>

        <div className="flex justify-center gap-8 mt-8 border-t border-slate-800 pt-8">
          <a href={PROFILE.social.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
            GitHub
          </a>
          <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href={PROFILE.social.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
            Twitter
          </a>
        </div>
        
        <footer className="mt-20 text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} {PROFILE.name}. Built with React & Tailwind.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;