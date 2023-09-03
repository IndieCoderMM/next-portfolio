"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";
import { SkillGroupProps } from "@/propTypes";

import { staggerContainer } from "@/utils/motion";
import TitleText from "../../components/TitleText";
import SkillCard from "./SkillCard";

const Skills = ({ skills }) => {
  const [active, setActive] = useState(0);

  return (
    <section className="xPaddings bg-primary">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="innerWidth mx-auto flex w-full flex-col gap-8"
      >
        <TitleText text="Skills" styles="text-center md:mb-2 text-light" />
        <p className="mb-4 text-center font-medium text-light md:text-xl">
          These are the technologies I&apos;ve worked with. I&apos;m always open
          to learning new things.
        </p>
        <div className="flex min-h-screen w-full flex-col gap-4 lg:min-h-[60vh] lg:flex-row lg:items-center">
          {skills?.map((skill, index) => (
            <SkillCard
              key={skill.id}
              index={index}
              skill={skill}
              isActive={active === index}
              handleClick={() => setActive(index)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(SkillGroupProps).isRequired,
};

export default Skills;
