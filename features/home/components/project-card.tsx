"use client";

import { ProjectsQueryResult } from "@/sanity.types";
import { IconArrowUpRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProjectCard = ({ project }: { project: ProjectsQueryResult[number] }) => {
  const [hover, setHover] = useState(false);

  const mouseEnter = () => {
    setHover(true);
  };
  const mouseLeave = () => {
    setHover(false);
  };

  return (
    <motion.div
      layout
      className="bg-secondary/50 relative aspect-3/2 overflow-hidden rounded-xl md:rounded-3xl md:px-4"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div className="absolute top-2 right-2 flex h-full w-full justify-end md:hidden">
        <div className="grid size-8 place-items-center rounded-full bg-white text-black">
          <IconArrowUpRight />
        </div>
      </div>
      <div className="relative md:py-8">
        <motion.div
          animate={{ y: hover ? -20 : 0 }}
          className="flex items-center justify-between max-md:hidden"
        >
          <p className="text-sm font-semibold max-md:opacity-0 md:text-xl">
            {project.name}
          </p>
          <Link
            href={`/projects/${project.slug}`}
            className="group flex items-center justify-center gap-2 max-md:px-4"
          >
            Visit
            <span className="group-hover:bg-primary group-hover:text-bg rounded-full bg-black p-1 text-white/80 transition group-hover:scale-120">
              <IconArrowUpRight />
            </span>
          </Link>
        </motion.div>
        <div className="overflow-hidden max-md:hidden">
          <motion.p
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: hover ? -20 : 0, opacity: hover ? 1 : 0 }}
            className="absolute text-white/50"
          >
            {project?.tagline}
          </motion.p>
        </div>
      </div>
      {project.screenshots?.[0].url ? (
        <Image
          src={project.screenshots?.[0].url}
          width={500}
          height={500}
          alt={`screenshot-${project.name}`}
          className="h-full w-full rounded-xl object-cover object-center md:rounded-t-3xl"
        />
      ) : (
        <div className="bg-secondary flex h-full w-full items-center justify-center rounded-xl">
          <p className="text-gray-500">No screenshot available</p>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
