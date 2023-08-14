"use client";

import { textContainer, textVariant } from "@/utils/motion";
import { motion } from "framer-motion";

const TypingText = ({ text, styles }) => {
  return (
    <motion.p
      variants={textContainer}
      className={styles}
      initial="hidden"
      whileInView="show"
    >
      {Array.from(text).map((letter, idx) => (
        <motion.span variants={textVariant} key={idx}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TypingText;
