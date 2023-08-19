"use client";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import TitleText from "@/components/TitleText";
import PropTypes from "prop-types";
import { ExperienceProps } from "@/propTypes";
import Details from "./Details";

const Experience = ({ experiences }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <section className="yPaddings">
      <TitleText text="Experience" styles="text-center" />
      <div className="interWidth relative mx-auto my-20 lg:mb-64 lg:mt-32">
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          ref={ref}
          className="absolute left-5 top-0 h-full w-[4px] origin-top bg-dark dark:bg-primary md:left-20"
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
