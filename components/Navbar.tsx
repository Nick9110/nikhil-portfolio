"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 border-b border-border transition-all duration-300 ${
        scrolled ? "bg-bg/70 backdrop-blur-xl depth-surface" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a href="#" className="font-syne font-black text-xl tracking-tight">
        NY<span className="text-accent">.</span>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-muted text-[0.7rem] tracking-[0.12em] uppercase hover:text-accent transition-colors duration-200"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] cursor-none"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Menu"
      >
        <span className={`block h-px w-6 bg-accent transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
        <span className={`block h-px w-6 bg-accent transition-all ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block h-px w-6 bg-accent transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-surface border-b border-border py-6 flex flex-col items-center gap-6"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-muted text-sm tracking-[0.12em] uppercase hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
