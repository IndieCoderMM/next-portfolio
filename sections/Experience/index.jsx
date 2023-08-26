"use client";

import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import PropTypes from "prop-types";

import { ExperienceProps } from "@/propTypes";

import TitleText from "@/components/TitleText";
import Details from "./Details";

const Experience = ({ experiences }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <section className="yPaddings">
      <TitleText text="Experience" styles="text-center mb-8 md:mb-10" />
      <p className="mb-4 text-center font-medium md:text-xl">
        My professional experience so far. I&apos;m excited to see what the
        future holds.
      </p>
      <div className="interWidth relative mx-auto my-20 lg:my-32">
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          ref={ref}
          className="absolute left-5 top-0 h-full w-[4px] origin-top bg-dark dark:bg-primaryDark md:left-20"
        />
        <ul className=" ml-4 flex w-full flex-col items-start justify-between space-y-8">
          {experiences.map((experience, index) => (
            <Details key={index} {...experience} />
          ))}
        </ul>
      </div>
    </section>
  );
};

Experience.propTypes = {
  experiences: PropTypes.arrayOf(PropTypes.shape(ExperienceProps)),
};

export default Experience;
