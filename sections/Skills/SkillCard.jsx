"use client";

import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Image from "next/image";

import { fadeIn, sphereVariant } from "@/utils/motion";
import { SkillGroupProps } from "@/propTypes";

const SkillCard = ({ skill, index, isActive, handleClick }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      onClick={handleClick}
      className={`relative ${
        isActive ? "flex-[6] lg:flex-[3.5]" : "flex-[2] lg:flex-[1.5]"
      } flex h-auto min-w-[170px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-dark bg-light text-dark shadow-400 transition-[flex] duration-700 ease-out lg:h-[500px]`}
    >
      <img
        src={skill.imageURL}
        alt=""
        className="absolute hidden h-full w-full rounded-[24px] object-cover lg:block"
      />
      {!isActive ? (
        <div className="glassBackground relative z-0 h-full w-full dark:bg-black/50">
          <h3 className="absolute left-0 top-0 z-10 whitespace-nowrap rounded-sm font-bold text-dark dark:text-light lg:bottom-10 lg:left-10 lg:origin-left lg:rotate-[-90deg] lg:text-4xl">
            {skill?.title}
          </h3>
          <ul className="bottom-0 right-0 top-4 flex flex-wrap gap-1 p-2 md:left-1/2 lg:absolute lg:flex-col-reverse lg:items-end">
            {skill?.list.map((item, index) => (
              <motion.li
                variants={sphereVariant("right", index * 0.3, 1)}
                initial="hidden"
                animate="show"
                key={index}
              >
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-dark/10 dark:bg-light/50">
                  <Image
                    src={item.logoURL}
                    width={30}
                    height={30}
                    alt={item.name}
                  />
                </div>
                <p className="sr-only">{item.name}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      ) : (
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 0.5)}
          initial="hidden"
          animate="show"
          className="absolute bottom-0 left-0 right-0 flex h-full w-full flex-col justify-start gap-8 bg-dark/60 p-4 lg:h-auto"
        >
          <h3 className="text-3xl font-bold text-light">{skill?.title}</h3>
          <ul className="flex flex-wrap items-start justify-center gap-4">
            {skill?.list.map((item, idx) => (
              <motion.li
                variants={sphereVariant("left", idx * 0.3, 1.5)}
                key={idx}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full lg:h-[80px] lg:w-[80px] lg:bg-light">
                  <Image
                    src={item.logoURL}
                    width={50}
                    height={50}
                    alt={item.name}
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-light">{item.name}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

SkillCard.propTypes = {
  skill: SkillGroupProps.isRequired,
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SkillCard;