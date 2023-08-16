"use client";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";
import TitleText from "@/components/TitleText";

const Details = ({
  position,
  companyName,
  companyLink,
  time,
  address,
  work,
}) => {
  return (
    <li className="mx-auto flex w-[60%] flex-col items-center justify-between">
      <LiIcon />
      <div>
        <h3 className="text-2xl font-bold capitalize ">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            rel="noreferrer"
            className="text-primary"
          >
            @{companyName}
          </a>
        </h3>
        <span className="font-medium capitalize text-dark/50">
          {time} | {address}
        </span>
        <p className="w-full font-medium">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <section className="yPaddings">
      <TitleText text="Experience" styles="text-center" />
      <div className="interWidth relative mx-auto mb-64 mt-32">
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
          ref={ref}
          className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-primary"
        />
        <ul className="ml-4 flex w-full flex-col items-start justify-between space-y-8">
          <Details
            position="Software Engineer"
            companyName="Google"
            time="2022-Present"
            address="Mountain View, CA"
            companyLink={"https://www.google.com"}
            work={
              "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            }
          />
          <Details
            position="Software Engineer"
            companyName="Google"
            time="2022-Present"
            address="Mountain View, CA"
            companyLink={"https://www.google.com"}
            work={
              "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            }
          />
          <Details
            position="Software Engineer"
            companyName="Google"
            time="2022-Present"
            address="Mountain View, CA"
            companyLink={"https://www.google.com"}
            work={
              "Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
            }
          />
        </ul>
      </div>
    </section>
  );
};

export default Experience;
