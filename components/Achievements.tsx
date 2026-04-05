"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";

const achievements = [
  {
    rank: "TOP 6",
    name: "Hackdata",
    org: "Shiv Nadar University",
    detail: "250+ participants",
    icon: "🏆",
  },
  {
    rank: "TOP 5",
    name: "Manthan",
    org: "COER University, Roorkee",
    detail: "100 teams",
    icon: "🥈",
  },
  {
    rank: "2ND",
    name: "Logo Design — VIBGYOR",
    org: "IMS Engineering College",
    detail: "Design competition",
    icon: "🎨",
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="px-8 md:px-16 py-24 border-t border-border bg-surface">
      <SectionHeader label="// wins" title="Hackathons & Awards" />

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
        {achievements.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.15 }}
            whileHover={{ rotateX: -7, rotateY: i % 2 === 0 ? 7 : -7, y: -8 }}
            className="group bg-card px-8 py-10 text-center card-hover depth-surface tilt-card relative overflow-hidden"
          >
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 achievement-corner-accent" />

            <div className="text-4xl mb-4 depth-z-22">{a.icon}</div>

            <div className="font-syne font-black text-accent leading-none mb-3 achievement-rank-size depth-z-32">
              {a.rank}
            </div>

            <div className="font-syne font-bold text-lg mb-2 group-hover:text-accent transition-colors duration-200">
              {a.name}
            </div>

            <div className="text-muted text-[0.72rem] mb-1">{a.org}</div>
            <div className="text-muted text-[0.65rem] tracking-wider uppercase">{a.detail}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
