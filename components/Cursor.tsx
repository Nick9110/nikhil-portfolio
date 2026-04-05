"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const trailX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const trailY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as Element | null;
      setHovering(Boolean(target?.closest("a, button, [data-hover]")));
    };

    const onOut = (event: MouseEvent) => {
      const related = event.relatedTarget as Element | null;
      if (!related?.closest("a, button, [data-hover]")) {
        setHovering(false);
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [mouseX, mouseY]);

  if (!visible) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference rounded-full bg-accent"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: hovering ? 20 : 10, height: hovering ? 20 : 10 }}
        transition={{ duration: 0.15 }}
      />
      {/* Trail ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border border-accent"
        style={{ x: trailX, y: trailY, translateX: "-50%", translateY: "-50%", opacity: 0.5 }}
        animate={{ width: hovering ? 56 : 36, height: hovering ? 56 : 36, scale: hovering ? 1.08 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
