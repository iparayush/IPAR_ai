import { technologies } from "@/lib/data";
import { TechIcon } from "./tech-icon";

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-6 max-w-5xl mx-auto">
          {technologies.map(tech => (
            <div key={tech} className="group flex flex-col items-center justify-center gap-3 p-4 rounded-lg bg-card border shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary">
              <TechIcon name={tech} />
              <span className="text-sm font-medium text-center">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
