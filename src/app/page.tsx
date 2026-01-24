import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { HeroSection } from '@/components/hero-section';
import { ExperienceSection } from '@/components/experience-section';
import { SkillsSection } from '@/components/skills-section';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
