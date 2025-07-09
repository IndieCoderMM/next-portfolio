import { AnimationGeneratorType, Variants } from "motion";

export const textContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.05 },
  }),
};

export const textVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

type StaggerContainerProps = {
  staggerChildren?: number;
  delayChildren?: number;
};

export const staggerContainer = ({
  staggerChildren,
  delayChildren,
}: StaggerContainerProps): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

type SlideInProps = {
  direction: "left" | "right" | "up" | "down";
  type: AnimationGeneratorType;
  delay: number;
  duration: number;
};

export const slideIn = ({
  direction,
  type,
  delay,
  duration,
}: SlideInProps): Variants => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

type FadeInProps = {
  direction: "left" | "right" | "up" | "down";
  type: AnimationGeneratorType;
  delay: number;
  duration: number;
};

export const fadeIn = ({
  direction,
  type,
  delay,
  duration,
}: FadeInProps): Variants => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeIn",
    },
  },
});

type SphereVariantProps = {
  direction: "left" | "right";
  delay: number;
  duration: number;
};

export const sphereVariant = ({
  direction,
  delay,
  duration,
}: SphereVariantProps): Variants => ({
  hidden: {
    x: direction === "left" ? -300 : 300,
    rotate: 120,
    opacity: 0,
  },
  show: {
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay,
      duration,
      ease: "easeIn",
    },
  },
});
