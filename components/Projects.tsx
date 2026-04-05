"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    num: "001",
    name: "Excel Analytics Platform",
    desc: "Full-stack web app for Excel dataset analysis featuring 5+ interactive 2D/3D chart types. Includes JWT role-based access control for 3+ user roles with persistent upload history across sessions.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "Three.js", "Multer"],
    github: "https://github.com/Nick9110/excel-analytics",
    accentLineClass: "project-accent-1",
    glowClass: "project-glow-1",
  },
  {
    num: "002",
    name: "Motion List",
    desc: "AI-powered note-taking web app with OpenAI API integration for response generation, DALL·E image generation, and image attachment support. Responsive, cross-device UI with seamless UX.",
    tech: ["Next.js", "TypeScript", "OpenAI API", "DALL·E", "Firebase", "NeonDB"],
    github: "https://github.com/Nick9110/motion-list",
    accentLineClass: "project-accent-2",
    glowClass: "project-glow-2",
  },
  {
    num: "003",
    name: "FocusPlus",
    desc: "Cross-platform digital wellbeing app (Android & iOS) with app usage tracking, time-based blocking, mission-based unlock challenges, focus sessions, sleep tracking, and parental controls.",
    tech: ["React Native", "TypeScript", "Redux Toolkit", "Firebase", "Node.js", "Express.js", "JWT", "Victory Native"],
    github: "https://github.com/Nick9110/focusplus",
    accentLineClass: "project-accent-3",
    glowClass: "project-glow-3",
  },
  {
    num: "004",
    name: "AR Space Shoot",
    desc: "Immersive mobile AR shooter built in Unity with C# where players use camera + gyroscope to scan 360 degrees, detect incoming enemy ships, and survive escalating waves. Repo includes commented scripts and Android APK build; large assets are excluded for repository feasibility.",
    tech: ["C#", "Unity", "Augmented Reality", "Gyroscope", "Android APK", "3D Gameplay"],
    github: "https://github.com/Hackdata-SNIoE/39-ars",
    accentLineClass: "project-accent-4",
    glowClass: "project-glow-4",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ rotateX: -6, rotateY: 6, y: -6 }}
      className="group relative bg-card border border-border p-8 card-hover depth-surface tilt-card overflow-hidden"
    >
      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ${project.accentLineClass}`}
      />

      {/* Glow on hover */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${project.glowClass}`}
      />

      <div className="relative z-10 depth-z-26">
        <div className="text-muted text-[0.65rem] tracking-[0.15em] mb-6">{project.num}</div>

        <h3 className="font-syne font-bold text-2xl tracking-tight mb-4 group-hover:text-white transition-colors">
          {project.name}
        </h3>

        <p className="text-muted text-[0.8rem] leading-relaxed mb-7">{project.desc}</p>

        <div className="flex flex-wrap gap-2 mb-7">
          {project.tech.map((t) => (
            <span
              key={t}
              className="depth-chip text-[0.62rem] tracking-[0.08em] uppercase border border-border text-muted px-2.5 py-1 transition-all duration-200 group-hover:border-accent/40 group-hover:text-accent/80"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[0.7rem] tracking-[0.1em] uppercase text-accent hover:gap-4 transition-all duration-200"
        >
          View on GitHub
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-8 md:px-16 py-24 border-t border-border">
      <SectionHeader label="// selected work" title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-border">
        {projects.map((p, i) => (
          <ProjectCard key={p.num} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
