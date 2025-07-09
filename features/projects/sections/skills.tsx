"use client";

import { staggerContainer } from "@/utils/motion";
import { motion } from "motion/react";
import { useState } from "react";
import SkillCard from "../components/skill-card";

const SkillSection = ({ skillGroups }: { skillGroups: SkillGroup[] }) => {
  const [active, setActive] = useState(0);

  return (
    <section className="xPaddings bg-primary">
      <motion.div
        variants={staggerContainer({})}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="innerWidth mx-auto flex w-full flex-col gap-8"
      >
        <h1 className="text-center text-4xl font-bold text-white md:text-6xl">
          Skills
        </h1>
        <p className="mb-4 text-center font-medium text-white md:text-xl">
          These are the technologies I&apos;ve worked with. I&apos;m always open
          to learning new things.
        </p>
        <div className="flex min-h-screen w-full flex-col gap-4 lg:min-h-[60vh] lg:flex-row lg:items-center">
          {skillGroups?.map((group, index) => (
            <SkillCard
              key={group.id}
              index={index}
              skillGroup={group}
              isActive={active === index}
              handleClick={() => setActive(index)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillSection;
