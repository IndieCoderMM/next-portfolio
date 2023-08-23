import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const LiIcon = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center center"],
  });
  return (
    <figure
      ref={ref}
      className="dark:stroke-primaryDark absolute -left-4 -translate-y-8 rotate-90 stroke-dark md:left-11"
    >
      <svg
        width={75}
        height={75}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <circle
          cx={75}
          cy={50}
          r={20}
          className="dark:stroke-primaryDark fill-none stroke-primary stroke-1"
        />
        <motion.circle
          cx={75}
          cy={50}
          r={20}
          style={{
            pathLength: scrollYProgress,
          }}
          className="fill-light stroke-[5px] dark:fill-dark"
        />
        <circle
          cx={75}
          cy={50}
          r={10}
          className="dark:fill-primaryDark animate-pulse fill-primary stroke-1"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
