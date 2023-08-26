"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant } from "@/utils/motion";

const TypingText = ({ text, styles }) => {
  return (
    <motion.p
      variants={textContainer}
      className={styles}
      initial="hidden"
      viewport={{ once: true, amount: 0.25 }}
      whileInView="show"
    >
      {Array.from(text).map((letter, idx) => (
        <motion.span variants={textVariant} key={idx}>
          {letter === " " ? " " : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TypingText;
