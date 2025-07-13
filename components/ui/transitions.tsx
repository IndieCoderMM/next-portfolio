"use client";

import { cn } from "@/utils/cn";
import { HTMLMotionProps, motion } from "motion/react";

interface Props extends HTMLMotionProps<"span"> {}

export const SlideIn = ({
  className,
  initial,
  whileInView,
  transition,
  viewport,
  ...rest
}: Props) => {
  const init = initial ? initial : { opacity: 0, y: "100%" };
  const inView = whileInView ? whileInView : { opacity: 1, y: 0 };
  const trans = transition ? transition : { duration: 0.5, delay: 0.3 };

  return (
    <motion.span
      initial={init}
      whileInView={inView}
      transition={trans}
      viewport={viewport ? viewport : { once: true }}
      className={cn("inline-block overflow-hidden", className)}
      {...rest}
    />
  );
};

interface TransitionProps extends HTMLMotionProps<"div"> {}
export const Transition = ({
  initial,
  whileInView,
  transition,
  ...rest
}: TransitionProps) => {
  const init = initial ? initial : { opacity: 0 };
  const inView = whileInView ? whileInView : { opacity: 1 };
  const trans = transition ? transition : { duration: 0.8, delay: 0.4 };

  return (
    <motion.div
      initial={init}
      whileInView={inView}
      transition={trans}
      {...rest}
    />
  );
};

export const OpacityTransition = ({ children }: { children: string }) => {
  return (
    <div className="overflow-hidden">
      {children.split("").map((char, i) => (
        <motion.span
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 1 }}
          layout
          transition={{ delay: i * 0.03, ease: [0.215, 0.61, 0.355, 1] }}
          exit={{
            y: 0,
            transition: { delay: i * 0.02, ease: [0.215, 0.61, 0.355, 1] },
          }}
          key={i}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};
