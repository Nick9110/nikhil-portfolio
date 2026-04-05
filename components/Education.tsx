"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";

const education = [
  {
    date: "Expected June 2026",
    title: "B.Tech — IMS Engineering College",
    sub: "Ghaziabad · 70.8%",
  },
  {
    date: "June 2021",
    title: "Intermediate — John Milton Public School",
    sub: "Agra · 86%",
  },
  {
    date: "May 2019",
    title: "High School — Young Scholar's Academy",
    sub: "Shikohabad · 88.6%",
  },
];

const certifications = [
  { date: "Jan 2026", title: "AI Fundamentals", sub: "IBM" },
  { date: "Jan 2026", title: "Job Application Essentials", sub: "IBM" },
  {
    date: "Sep 2025 – Jan 2026",
    title: "Foundations of Cybersecurity",
    sub: "Nasscom",
  },
  {
    date: "Apr – Jun 2025",
    title: "Oracle Cloud Infrastructure AI Foundations",
    sub: "Oracle — Associate Certified",
  },
  {
    date: "Jan – Jun 2023",
    title: "Web Development Using React JS",
    sub: "CETPA Infotech",
  },
];

function TimelineItem({
  item,
  index,
  inView,
}: {
  item: { date: string; title: string; sub: string };
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ rotateX: -4, rotateY: 5, y: -5 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-accent" />
      {/* Connector line */}
      {index !== 0 && (
        <div className="absolute left-[3px] -top-full bottom-0 w-px bg-gradient-to-b from-transparent via-border to-border" />
      )}
      <div className="bg-card/70 border border-border/80 px-5 py-4 depth-surface tilt-card">
        <div className="text-accent text-[0.62rem] tracking-[0.12em] mb-1">{item.date}</div>
        <div className="font-syne font-bold text-[0.95rem] mb-1 depth-z-18">{item.title}</div>
        <div className="text-muted text-[0.75rem]">{item.sub}</div>
      </div>
    </motion.div>
  );
}

function TimelineSection({
  title,
  items,
}: {
  title: string;
  items: { date: string; title: string; sub: string }[];
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref}>
      <div className="text-[0.62rem] tracking-[0.2em] uppercase text-accent mb-6 pb-3 border-b border-border">
        {title}
      </div>
      <div className="relative timeline-line pl-0">
        <div className="absolute left-[3px] top-0 bottom-0 w-px bg-gradient-to-b from-accent to-transparent" />
        <div className="pl-0">
          {items.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="px-8 md:px-16 py-24 border-t border-border">
      <SectionHeader label="// background" title="Education & Certs" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <TimelineSection title="Academic" items={education} />
        <TimelineSection title="Certifications" items={certifications} />
      </div>
    </section>
  );
}
