"use client";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";

const TitleText = ({ text, styles = "" }) => {
  return (
    <motion.h1
      variants={textVariant}
      initial="hidden"
      whileInView="show"
      className={`text-lg font-bold text-dark md:text-7xl ${styles}`}
    >
      {text}
    </motion.h1>
  );
};

export default TitleText;
