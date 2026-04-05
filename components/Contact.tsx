"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/nikhil-yadav-b84a0b3" },
  { label: "GitHub", href: "https://github.com/Nick9110" },
  { label: "+91 8218304905", href: "tel:+918218304905" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative px-8 md:px-16 py-32 border-t border-border text-center overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-20 -translate-x-1/2 w-[70vw] h-[40vw] max-w-[900px] rounded-full"
        animate={{ scale: [1, 1.08, 0.98, 1], opacity: [0.22, 0.36, 0.24, 0.22] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle, rgba(0,255,135,0.2), transparent 66%)", filter: "blur(45px)" }}
      />

      <div ref={ref} className="relative z-10 max-w-2xl mx-auto depth-surface py-12 px-8 bg-card/35 backdrop-blur-sm border border-border/80">
        <SectionHeader label="// let's connect" title="Get In Touch" />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-muted text-sm leading-relaxed mb-12"
        >
          Open to full-stack development roles, freelance projects, and exciting collaborations.
          Let us build something great together.
        </motion.p>

        <motion.a
          href="mailto:nikhilyadav9110y@gmail.com"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="inline-block font-syne font-bold text-accent border-b-2 border-accent pb-1 hover:opacity-70 transition-opacity duration-200 mb-12 break-all"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.6rem)" }}
        >
          nikhilyadav9110y@gmail.com
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="flex justify-center gap-10 flex-wrap"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-muted text-[0.7rem] tracking-[0.12em] uppercase hover:text-accent transition-colors duration-200"
            >
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
