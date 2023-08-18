"use client";

import { fadeIn } from "@/utils/motion";
import { AnimatePresence, motion } from "framer-motion";

const StateButton = ({ children, handleClick }) => {
  return (
    <AnimatePresence>
      <motion.button
        variants={fadeIn("up", "tween", 0, 0.5)}
        initial="hidden"
        animate="show"
        exit="exit"
        type="button"
        onClick={handleClick}
        className="flex items-center gap-2 rounded-sm bg-dark/10 px-4 py-1 transition hover:brightness-110 dark:bg-[#333]"
      >
        {children}
      </motion.button>
    </AnimatePresence>
  );
};

export default StateButton;
