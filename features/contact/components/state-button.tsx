"use client";

import { fadeIn } from "@/utils/motion";
import { motion } from "motion/react";
import { PropsWithChildren } from "react";

const StateButton = ({
  children,
  handleClick,
}: PropsWithChildren<{ handleClick: () => void }>) => {
  return (
    <motion.button
      variants={fadeIn({
        direction: "up",
        type: "tween",
        delay: 0,
        duration: 0.5,
      })}
      initial="hidden"
      animate="show"
      type="button"
      onClick={handleClick}
      className="border-light/20 bg-secondary/20 flex items-center gap-0.5 rounded-full border px-2 py-0.5 transition hover:brightness-110"
    >
      {children}
    </motion.button>
  );
};

export default StateButton;
