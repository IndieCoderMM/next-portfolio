"use client";

import { motion } from "motion/react";
import { PropsWithChildren } from "react";

const ShimmerButton = ({ children }: PropsWithChildren) => {
  return (
    <motion.button
      className="inline-flex items-center justify-center overflow-hidden rounded-lg bg-[linear-gradient(120deg,#6262f9_calc(var(--shimmer-button-x)-25%),#f6f6f6_var(--shimmer-button-x),#6262f9_calc(var(--shimmer-button-x)+25%))] px-4 py-2 [--shimmer-button-x:0%]"
      initial={
        {
          scale: 1,
          "--shimmer-button-x": "-100%",
        } as any
      }
      animate={
        {
          "--shimmer-button-x": "200%",
        } as any
      }
      transition={{
        stiffness: 500,
        damping: 20,
        type: "spring",
        "--shimmer-button-x": {
          duration: 3,
          repeat: Infinity,
          ease: [0.445, 0.05, 0.55, 0.95],
        },
      }}
      whileTap={{
        scale: 0.95,
      }}
      whileHover={{
        scale: 1.05,
      }}
    >
      {children}
    </motion.button>
  );
};

export default ShimmerButton;
