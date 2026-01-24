import { SiteHeader } from '@/components/site-header';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { AskAiSection } from '@/components/ask-ai-section';
import { ContactSection } from '@/components/contact-section';
import { SiteFooter } from '@/components/site-footer';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AskAiSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
