"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Ambient3D() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, (value) => `${(value - 0.5) * -10}deg`), {
    stiffness: 70,
    damping: 18,
    mass: 0.7,
  });
  const rotateY = useSpring(useTransform(mouseX, (value) => `${(value - 0.5) * 12}deg`), {
    stiffness: 70,
    damping: 18,
    mass: 0.7,
  });

  const orbAX = useSpring(useTransform(mouseX, (value) => `${(value - 0.5) * 80}px`), {
    stiffness: 60,
    damping: 20,
  });
  const orbAY = useSpring(useTransform(mouseY, (value) => `${(value - 0.5) * 60}px`), {
    stiffness: 60,
    damping: 20,
  });

  const orbBX = useSpring(useTransform(mouseX, (value) => `${(value - 0.5) * -110}px`), {
    stiffness: 55,
    damping: 19,
  });
  const orbBY = useSpring(useTransform(mouseY, (value) => `${(value - 0.5) * -70}px`), {
    stiffness: 55,
    damping: 19,
  });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      mouseX.set(event.clientX / window.innerWidth);
      mouseY.set(event.clientY / window.innerHeight);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden
      className="ambient-3d"
      style={{ rotateX, rotateY }}
    >
      <motion.div className="ambient-grid" />

      <motion.div
        className="ambient-orb ambient-orb-a"
        style={{ x: orbAX, y: orbAY }}
        animate={{ scale: [1, 1.12, 0.96, 1], opacity: [0.55, 0.8, 0.62, 0.55] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      <motion.div
        className="ambient-orb ambient-orb-b"
        style={{ x: orbBX, y: orbBY }}
        animate={{ scale: [1, 0.9, 1.16, 1], opacity: [0.4, 0.55, 0.35, 0.4] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      <motion.div
        className="ambient-orb ambient-orb-c"
        animate={{ y: [0, -30, 8, 0], x: [0, 18, -15, 0], opacity: [0.42, 0.7, 0.5, 0.42] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
