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
      className="flex items-center gap-2 rounded-md border bg-[#333] px-4 py-1 transition hover:brightness-110"
    >
      {children}
    </motion.button>
  );
};

export default StateButton;
