"use client";
import { LinkArrow } from "@/components/Icons";
import { ProjectProps } from "@/propTypes";
import { slideIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative flex w-full max-w-[500px] flex-col overflow-hidden rounded-lg bg-white shadow-md md:h-[300px]">
      <Link
        href={`/projects/${project.slug}`}
        className="absolute bottom-0 left-0 right-0 top-0 z-[99] md:hidden"
      >
        <span className="sr-only">View project {project.name} details</span>
      </Link>
      <div className="relative w-full bg-gray-300/70 p-2 dark:bg-gray-700">
        <div className="absolute left-2 top-1/2 flex -translate-y-1/2 gap-1">
          <span className="h-4 w-4 rounded-full bg-red-500"></span>
          <span className="h-4 w-4 rounded-full bg-yellow-500"></span>
          <span className="h-4 w-4 rounded-full bg-green-500"></span>
        </div>
        <h3 className="text-center font-medium text-dark dark:text-light">
          {project.name}
        </h3>
      </div>
      <motion.div
        initial="hidden"
        whileHover="show"
        className="relative h-full w-full overflow-hidden"
      >
        <Image
          priority
          quality={100}
          placeholder="blur"
          className="h-auto w-full object-top"
          src={project.imageURL}
          blurDataURL={project.placeholderURL}
          alt={project.name}
          width={project.width}
          height={project.height}
        />
        <motion.div
          variants={slideIn("up", "tween", 0, 0.5)}
          className="absolute bottom-0 left-0 right-0 top-0 hidden w-full flex-col items-center justify-center gap-4 overflow-hidden bg-primary/90 p-2 md:flex"
        >
          <p className="text-center font-semibold text-light md:text-lg">
            {project.tagline}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2">
            {project.tags.map(
              (tag, index) =>
                tag.length > 0 && (
                  <li
                    key={index}
                    className="rounded-full bg-dark/50 px-2 py-1 text-sm text-light"
                  >
                    #{tag}
                  </li>
                ),
            )}
          </ul>
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full border-2 border-light px-8 py-2 text-center text-sm font-semibold text-light transition-colors hover:bg-light hover:text-primary md:text-lg"
          >
            View project &#8594;
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: ProjectProps.isRequired,
};

export default ProjectCard;
