import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiCloudflare,
  SiGooglecloud,
  SiDocker,
  SiGithub,
  SiPostgresql,
  SiMongodb,
  SiVite,
  SiFramer
} from 'react-icons/si';

const techLogos: { node: React.ReactNode; title: string; href: string }[] = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiCloudflare />, title: "Cloudflare", href: "https://www.cloudflare.com" },
  { node: <SiGooglecloud />, title: "Google Cloud", href: "https://cloud.google.com" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
  { node: <SiFramer />, title: "Framer Motion", href: "https://www.framer.com/motion/" },
];

const TechStack: React.FC = () => {
  return (
    <section className="py-12 bg-transparent border-y border-zinc-800 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest text-center">
          Technologies I Work With
        </h2>
      </div>

      <style>
        {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-250px * 7)); }
            }
            .slider {
              height: 100px;
              margin: auto;
              overflow: hidden;
              position: relative;
              width: 100%;
            }
            .slider::before,
            .slider::after {
              background: linear-gradient(to right, rgba(3,0,5,1) 0%, rgba(255,255,255,0) 100%);
              content: "";
              height: 100px;
              position: absolute;
              width: 200px;
              z-index: 2;
            }
            .slider::after {
              right: 0;
              top: 0;
              transform: rotateZ(180deg);
            }
            .slider::before {
              left: 0;
              top: 0;
            }
            .slide-track {
              animation: scroll 40s linear infinite;
              display: flex;
              width: calc(250px * 14);
            }
            .slide {
              height: 100px;
              width: 250px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 2.5rem;
              color: #a1a1aa;
              transition: color 0.3s ease;
            }
            .slide:hover {
              color: #FF9FFC;
            }
          `}
      </style>
      <div className="slider">
        <div className="slide-track">
          {/* Double the array for smooth infinite scroll */}
          {[...techLogos, ...techLogos].map((tech, index) => (
            <a
              key={index}
              href={tech.href}
              target="_blank"
              rel="noreferrer"
              className="slide"
              title={tech.title}
            >
              {tech.node}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
