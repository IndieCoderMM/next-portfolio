"use client";

import { timelineData } from "@/config/content/timeline";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full md:px-10" ref={containerRef}>
      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pt-40"
          >
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="dark:bg-dark absolute left-[14px] flex h-10 w-10 items-center justify-center rounded-full bg-white md:left-[14px]">
                <LiIcon />
              </div>
              <h3 className="hidden text-xl font-bold text-neutral-500 md:block md:pl-20 md:text-5xl dark:text-neutral-200">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pr-4 pl-20 md:pl-4">
              <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-500 md:hidden dark:text-neutral-200">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute top-0 left-8 w-[4px] overflow-hidden bg-white md:left-8 dark:bg-neutral-700"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="bg-primary dark:bg-primaryDark absolute inset-x-0 top-0 w-[4px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

const LiIcon = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  return (
    <figure
      ref={ref}
      className="stroke-primary dark:stroke-primaryDark -translate-y-[19px] rotate-90"
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
          className="stroke-primary dark:stroke-primaryDark fill-none stroke-1"
        />
        <motion.circle
          cx={75}
          cy={50}
          r={20}
          style={{
            pathLength: scrollYProgress,
          }}
          className="fill-light dark:fill-dark stroke-[5px]"
        />
        <circle
          cx={75}
          cy={50}
          r={10}
          className="fill-primary dark:fill-primaryDark animate-pulse stroke-1"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
