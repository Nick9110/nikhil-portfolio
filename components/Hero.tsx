"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { num: "3+", label: "Projects Built" },
  { num: "2×", label: "Hackathon Winner" },
  { num: "5+", label: "Certifications" },
];

function TypedText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [text]);
  return (
    <span>
      {displayed}
      <span className="blink text-accent">|</span>
    </span>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-8 md:px-16 pt-28 pb-16 overflow-hidden"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      <motion.div
        aria-hidden
        className="absolute top-24 right-[15%] hidden lg:block w-40 h-40 rounded-[2rem] border border-accent/30 hero-orbital-cube"
        animate={{ rotateX: [0, 18, -8, 0], rotateY: [0, -20, 10, 0], y: [0, -18, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent2/[0.04] blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full depth-stage">
        {/* Tag */}
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 border border-accent text-accent text-[0.65rem] tracking-[0.15em] uppercase px-4 py-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.1)}
          className="font-syne font-black leading-[0.92] tracking-tight mb-6 hero-title-size"
        >
          <div className="depth-z-24">NIKHIL</div>
          <div className="text-accent depth-z-32">YADAV</div>
          <div
            className="text-transparent hero-outline depth-z-12"
          >
            DEVELOPER
          </div>
        </motion.h1>

        {/* Description */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-muted text-sm leading-relaxed max-w-lg mb-10"
        >
          <TypedText text="Full Stack Developer building scalable web & mobile apps with MERN Stack, React Native, and AI. Clean code. Real impact." />
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 depth-z-28">
          <a
            href="#projects"
            className="inline-block px-8 py-3.5 bg-accent text-black font-mono font-semibold text-[0.75rem] tracking-[0.1em] uppercase hover:bg-accent/90 transition-all hover:-translate-y-0.5 depth-surface"
          >
            View Projects
          </a>
          <a
            href="mailto:nikhilyadav9110y@gmail.com"
            className="inline-block px-8 py-3.5 border border-border text-[#e8f0f8] font-mono text-[0.75rem] tracking-[0.1em] uppercase hover:border-accent hover:text-accent transition-all hover:-translate-y-0.5 depth-surface"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="hidden lg:flex absolute right-16 bottom-16 flex-col gap-8"
      >
        {stats.map((s) => (
          <div key={s.label} className="text-right">
            <div className="font-syne font-black text-accent text-4xl leading-none">
              {s.num}
            </div>
            <div className="text-muted text-[0.6rem] tracking-[0.12em] uppercase mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-[0.6rem] tracking-[0.15em] uppercase"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
}
