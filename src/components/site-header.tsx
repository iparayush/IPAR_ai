import Link from 'next/link';
import { Code } from 'lucide-react';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex flex-1 items-center justify-between">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Code className="h-6 w-6 text-accent" />
            <span className="font-bold font-headline text-lg">Ayush Ipar</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link href="#experience" className="transition-colors hover:text-foreground/80 text-foreground/60">Experience</Link>
            <Link href="#skills" className="transition-colors hover:text-foreground/80 text-foreground/60">Skills</Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
