"use client";

import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

const TitleText = ({ text, styles = "" }) => {
  return (
    <motion.h2
      variants={textVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className={`text-3xl font-bold leading-normal text-dark dark:text-light md:text-5xl lg:text-6xl ${styles}`}
    >
      {text}
    </motion.h2>
  );
};

export default TitleText;
