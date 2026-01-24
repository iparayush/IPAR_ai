import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-transparent backdrop-blur supports-[backdrop-filter]:bg-transparent/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between px-8 md:px-20">
        <Link href="/" className="text-xl font-semibold text-blue-400">
          Ayush Ipar
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link href="#about" className="text-slate-300 transition-colors hover:text-blue-400">About</Link>
          <Link href="#skills" className="text-slate-300 transition-colors hover:text-blue-400">Skills</Link>
          <Link href="#experience" className="text-slate-300 transition-colors hover:text-blue-400">Experience</Link>
          <Link href="#projects" className="text-slate-300 transition-colors hover:text-blue-400">Projects</Link>
          <Link href="#ask-ai" className="text-slate-300 transition-colors hover:text-blue-400">Ask AI</Link>
          <Link href="#contact" className="text-slate-300 transition-colors hover:text-blue-400">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
