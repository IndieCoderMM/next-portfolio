"use client";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

const TitleText = ({ text, styles = "" }) => {
  return (
    <motion.h2
      variants={textVariant}
      initial="hidden"
      whileInView="show"
      className={`text-3xl font-bold text-dark dark:text-light md:text-5xl lg:text-7xl ${styles}`}
    >
      {text}
    </motion.h2>
  );
};

export default TitleText;
