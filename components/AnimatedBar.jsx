"use client";

import { motion } from "framer-motion";

const AnimatedBar = ({ percentage, styles }) => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: `${percentage}%`,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        type: "tween",
      },
    },
  };

  return (
    <div className="h-3 w-full rounded-full bg-gray-300">
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className={`${styles} h-3 rounded-full`}
      />
    </div>
  );
};

export default AnimatedBar;
