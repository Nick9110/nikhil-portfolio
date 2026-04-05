"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "C++", "JavaScript", "TypeScript", "SQL", "Bash"],
  },
  {
    category: "Frameworks",
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "Redux", "React Native"],
  },
  {
    category: "Tools & Databases",
    skills: ["Docker", "GIT", "PostgreSQL", "MySQL", "Postman", "REST API", "JWT", "Firebase"],
  },
  {
    category: "Platforms",
    skills: ["Linux", "Vercel", "Netlify", "Supabase", "Firebase"],
  },
  {
    category: "Soft Skills",
    skills: ["Leadership", "Event Management", "Writing", "Public Speaking"],
  },
];

function SkillGroup({
  group,
  index,
}: {
  group: (typeof skillGroups)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="mb-10"
    >
      <div className="text-accent text-[0.62rem] tracking-[0.2em] uppercase mb-4 pb-3 border-b border-border">
        {group.category}
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, si) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.1 + si * 0.04 }}
            whileHover={{ rotateX: -8, rotateY: 9, y: -5 }}
            className="group text-[0.75rem] px-4 py-2 bg-card border border-border text-[#e8f0f8] hover:bg-accent/10 hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-200 cursor-none tilt-card depth-surface"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="px-8 md:px-16 py-24 border-t border-border bg-surface">
      <SectionHeader label="// capabilities" title="Skills" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
        <div>
          {skillGroups.slice(0, 3).map((g, i) => (
            <SkillGroup key={g.category} group={g} index={i} />
          ))}
        </div>
        <div>
          {skillGroups.slice(3).map((g, i) => (
            <SkillGroup key={g.category} group={g} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
