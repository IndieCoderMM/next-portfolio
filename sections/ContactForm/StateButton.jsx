"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const StateButton = ({ children, handleClick }) => {
  return (
    <motion.button
      variants={fadeIn("up", "tween", 0, 0.5)}
      initial="hidden"
      animate="show"
      type="button"
      onClick={handleClick}
      className="flex items-center gap-2 rounded-md border bg-gray-100 px-4 py-1 transition hover:brightness-110 dark:bg-[#333]"
    >
      {children}
    </motion.button>
  );
};

export default StateButton;
