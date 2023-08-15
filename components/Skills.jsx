"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { useState } from "react";
import Image from "next/image";
import TitleText from "./TitleText";

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
        <TitleText text="Skills" styles="text-center mb-8" />
        <div className="flex min-h-[60vh] w-full flex-col gap-4 lg:flex-row">
          {skills?.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeIn("right", "spring", index * 0.5, 0.75)}
              onClick={() => setActive(index)}
              className={`relative ${
                active === index
                  ? "flex-[10] lg:flex-[3.5]"
                  : "flex-[2] lg:flex-[1.5]"
              } flex h-[450px] min-w-[170px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-dark bg-light text-dark transition-[flex] duration-700 ease-out`}
            >
              {active !== index ? (
                <>
                  <h3 className="absolute left-20 z-0 text-sm font-semibold lg:bottom-10 lg:origin-bottom-left lg:rotate-[-90deg] lg:text-3xl">
                    {skill?.title}
                  </h3>
                </>
              ) : (
                <div className="absolute bottom-0 flex w-full flex-col justify-start gap-8 bg-dark/40 p-8">
                  <h3 className="text-2xl font-semibold text-light">
                    {skill?.title}
                  </h3>
                  <ul className="flex flex-wrap items-center gap-4">
                    {skill?.list.map((item, index) => (
                      <li
                        key={index}
                        className="flex flex-col items-center justify-center"
                      >
                        <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-light">
                          <Image
                            src={item.logo}
                            width={50}
                            height={50}
                            alt={item.name}
                          />
                        </div>
                        <p className="text-sm text-light">{item.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
