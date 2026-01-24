"use client";

import { personalData } from "@/lib/data";
import Link from "next/link";
import { Button } from "./ui/button";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function HeroSection() {
  const avatar = PlaceHolderImages.find(p => p.id === 'ayush-ipar-avatar');

  return (
    <section id="home" className="w-full">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-12 px-8 md:px-20 py-24 min-h-[85vh]">
        <div className="max-w-2xl text-center md:text-left">
          <h4 className="text-blue-400 font-medium mb-2">Hi, I'm {personalData.name}</h4>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-5">
            Developer of{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              <Typewriter
                words={personalData.typewriterWords || ["Mode", "AI", "Cloud", "Future"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1200}
              />
            </span>
          </h1>
          <p className="text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
            {personalData.summary}
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Button asChild size="lg" className="rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-[0_4px_20px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-transform">
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-lg border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-slate-100 transition-colors">
              <Link href="#ask-ai">Chat with AI →</Link>
            </Button>
          </div>
        </div>

        <div className="relative hidden md:block">
            {avatar ? (
                <Image
                    src={avatar.imageUrl}
                    alt={avatar.description}
                    width={300}
                    height={380}
                    className="rounded-2xl object-cover border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.15)]"
                    data-ai-hint={avatar.imageHint}
                    priority
                />
            ) : (
                <div className="w-[300px] h-[380px] bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md flex items-center justify-center text-blue-400 text-xl shadow-[0_0_40px_rgba(59,130,246,0.15)]">
                    Ayush Ipar
                </div>
            )}
        </div>
      </div>
    </section>
  );
}
