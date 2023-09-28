"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const ServiceCard = ({ index, title, description, icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.2 * index, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="serviceCard relative w-[90%] text-dark lg:w-[350px]"
    >
      {/* Front Card */}
      <div className="ease flex w-full flex-col items-center justify-center gap-4 rounded-md bg-white p-8">
        <div className="flex items-center justify-center rounded-full bg-indigo-200 p-1">
          <Image width={100} height={100} src={icon} alt={title} />
        </div>
        <h2 className="text-center text-xl font-semibold">{title}</h2>
      </div>
      {/* Back Card */}
      <div className="absolute left-0 top-0 flex w-full items-center justify-center rounded-md bg-white p-4 text-center font-medium leading-loose text-dark sm:py-10 sm:text-lg">
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
