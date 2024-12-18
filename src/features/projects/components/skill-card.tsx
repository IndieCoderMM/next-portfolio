"use client";
import { fadeIn, sphereVariant } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";

type SkillCardProps = {
  skillGroup: SkillGroup;
  index: number;
  isActive: boolean;
  handleClick: () => void;
};

const SkillCard = ({
  skillGroup,
  index,
  isActive,
  handleClick,
}: SkillCardProps) => {
  return (
    <motion.div
      variants={fadeIn({
        direction: "right",
        type: "spring",
        delay: index * 0.5,
        duration: 0.75,
      })}
      onClick={handleClick}
      className={`relative ${
        isActive ? "flex-1 lg:flex-[3.5]" : "lg:flex-[1.5]"
      } flex min-w-[170px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-dark bg-light text-dark transition-[flex] duration-700 ease-out lg:h-[500px]`}
    >
      <Image
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        src={skillGroup.imageURL}
        alt=""
        className="absolute object-cover"
      />
      {!isActive ? (
        <div className="relative z-20 w-full self-stretch bg-light/70 backdrop-blur-sm dark:bg-dark/50">
          <h3 className="left-0 whitespace-nowrap rounded-sm text-center text-2xl font-bold text-dark dark:text-light lg:absolute lg:bottom-10 lg:left-10 lg:origin-left lg:rotate-[-90deg] lg:text-4xl">
            {skillGroup?.title}
          </h3>
          <ul className="bottom-0 right-0 top-4 flex flex-wrap gap-1 p-2 md:left-1/2 lg:absolute lg:flex-col-reverse lg:items-end">
            {skillGroup?.list.map((item, index) => (
              <motion.li
                variants={sphereVariant({
                  direction: "right",
                  delay: index * 0.3,
                  duration: 1,
                })}
                initial="hidden"
                animate="show"
                key={index}
              >
                <div className="flex h-[30px] w-[30px] items-center justify-center overflow-hidden rounded-full bg-dark/10 p-1 dark:bg-light/50 md:h-[50px] md:w-[50px]">
                  <Image
                    src={item.logoURL}
                    width={30}
                    height={30}
                    alt={item.name}
                    className="h-auto w-full object-contain"
                  />
                </div>
                <p className="sr-only">{item.name}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      ) : (
        <motion.div
          variants={fadeIn({
            direction: "up",
            type: "tween",
            delay: 0.5,
            duration: 0.5,
          })}
          initial="hidden"
          animate="show"
          className="absolute bottom-0 left-0 right-0 flex h-full w-full flex-col justify-start gap-8 bg-dark/75 p-4 dark:bg-dark/90 lg:h-auto"
        >
          <h3 className="text-lg font-bold text-light md:text-3xl">
            {skillGroup?.title}
          </h3>
          <ul className="flex flex-wrap items-start justify-center gap-2 md:gap-4">
            {skillGroup?.list.map((item, idx) => (
              <motion.li
                variants={sphereVariant({
                  direction: "left",
                  delay: idx * 0.3,
                  duration: 1.5,
                })}
                key={idx}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-full bg-light p-1 md:h-[80px] md:w-[80px]">
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

export default SkillCard;
