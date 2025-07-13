"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Portal } from "../layout/portal";

interface AnimatedTooltip {
  children: React.ReactNode;
  tooltip: React.ReactNode;
}

export const AnimatedTooltip = ({ children, tooltip }: AnimatedTooltip) => {
  const [hovered, setHovered] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;

    setPos({ x, y });
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {children}

      <Portal>
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1.2 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="pointer-events-none fixed z-50 -translate-x-1/2 rounded-md bg-black px-3 py-1 text-sm text-white shadow-md"
              style={{
                top: pos.y - 80,
                left: pos.x,
              }}
            >
              {tooltip}
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    </div>
  );
};
