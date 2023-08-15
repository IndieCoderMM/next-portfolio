"use client";
import { ProjectProps } from "@/propTypes";
import { slideIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MotionLink = motion(Link);

const ProjectCard = ({ project }) => {
  return (
    <MotionLink
      href={`/projects/${project.slug}`}
      initial="hidden"
      whileHover="show"
      className="group relative flex h-[300px] w-full max-w-[500px] cursor-pointer flex-col overflow-hidden rounded-lg border border-dark bg-white"
    >
      <div className="relative w-full border-b bg-light p-2">
        <div className="absolute left-2 top-1/2 flex -translate-y-1/2 gap-1">
          <span className="h-4 w-4 rounded-full bg-red-500"></span>
          <span className="h-4 w-4 rounded-full bg-yellow-500"></span>
          <span className="h-4 w-4 rounded-full bg-green-500"></span>
        </div>
        <h3 className="text-center font-medium text-dark">{project.name}</h3>
      </div>
      <div className="h-full w-full">
        <Image
          width={500}
          height={300}
          loading="lazy"
          src={project.imageURL}
          alt={project.name}
          className="object-contain"
        />
      </div>

      <motion.div
        variants={slideIn("down", "tween", 0, 0.5)}
        className="absolute bottom-0 left-0 right-0 top-1/3 flex flex-col items-center justify-center bg-dark/75 p-4"
      >
        <h3 className="text-4xl font-bold text-light">{project.name}</h3>
        <p className="text-xl text-light">{project.tagline}</p>
      </motion.div>
    </MotionLink>
  );
};

ProjectCard.propTypes = {
  project: ProjectProps.isRequired,
};

export default ProjectCard;
