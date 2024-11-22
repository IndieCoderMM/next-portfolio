"use client";
import Heading from "@/components/common/heading";
import { IconRocket } from "@tabler/icons-react";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ProjectsGrid = ({
  projects,
}: {
  projects: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = projects.slice(0, 5);
  const secondRow = projects.slice(5, 10);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );

  return (
    <div
      ref={ref}
      className="relative flex flex-col self-auto overflow-hidden antialiased"
    >
      <div className="max-container pb-20 pt-20">
        <Heading as="h2">Recent Projects</Heading>
        <p className="mt-8 text-center text-base dark:text-neutral-200 md:text-xl">
          A collection of projects I've worked on recently.
        </p>
      </div>
      <motion.div className="mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
        {firstRow.map((product) => (
          <ProductCard
            product={product}
            translate={translateX}
            key={product.title}
          />
        ))}
      </motion.div>
      <motion.div className="mb-20 flex flex-row space-x-20">
        {secondRow.map((product) => (
          <ProductCard
            product={product}
            translate={translateXReverse}
            key={product.title}
          />
        ))}
      </motion.div>

      <button
        type="button"
        className="outline-button my-10 self-center rounded-full"
      >
        <IconRocket />
        <span>See More Projects</span>
      </button>
    </div>
  );
};

const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product relative h-96 w-[30rem] flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="absolute inset-0 h-full w-full object-cover object-top"
          alt={product.title}
        />
      </Link>
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 group-hover/product:opacity-80"></div>
      <h2 className="absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100">
        {product.title}
      </h2>
    </motion.div>
  );
};
