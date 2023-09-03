"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { NavbarLinks } from "./NavbarLinks";
import { useState } from "react";

const FixedNavbar = ({ socials, mode, setMode }) => {
  const [scrolling, setScrolling] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latestScrollY) => {
    if (latestScrollY > 500) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  });
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: "-100%",
          x: "-50%",
        },
        show: {
          opacity: 1,
          y: 0,
          x: "-50%",
          transition: {
            duration: 0.75,
            ease: "easeInOut",
            type: "spring",
          },
        },
      }}
      initial="hidden"
      animate={scrolling ? "show" : "hidden"}
      className="fixed left-1/2 right-0 top-4 z-50 hidden w-[90%] -translate-x-1/2 rounded-full bg-white/90 px-8 py-4 shadow-sm backdrop-blur-md dark:bg-dark/70 lg:block 2xl:w-auto"
    >
      <NavbarLinks socials={socials} mode={mode} setMode={setMode} />
    </motion.div>
  );
};

export default FixedNavbar;
