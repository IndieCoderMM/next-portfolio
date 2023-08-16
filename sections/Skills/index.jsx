"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PropTypes from "prop-types";

import { staggerContainer } from "@/utils/motion";
import TitleText from "../../components/TitleText";
import SkillCard from "./SkillCard";
import { SkillGroupProps } from "@/propTypes";

const Skills = ({ skills }) => {
  const [active, setActive] = useState(0);

  return (
    <section className="innerWidth yPaddings mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex w-full flex-col gap-8"
      >
        <TitleText text="Skills" styles="text-center mb-4" />
        <div className="flex min-h-[60vh] w-full flex-col gap-4 lg:flex-row lg:items-center">
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
