"use client";
import { ProjectProps } from "@/propTypes";
import { slideIn } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MotionLink = motion(Link);

// width and height of ratio 16:9
// const width = 500
// const height =

const ProjectCard = ({ project }) => {
  return (
    <div className="flex w-full max-w-[500px] cursor-pointer flex-col overflow-hidden rounded-lg border border-dark bg-white md:h-[300px]">
      <div className="relative w-full border-b bg-light p-2">
        <div className="absolute left-2 top-1/2 flex -translate-y-1/2 gap-1">
          <span className="h-4 w-4 rounded-full bg-red-500"></span>
          <span className="h-4 w-4 rounded-full bg-yellow-500"></span>
          <span className="h-4 w-4 rounded-full bg-green-500"></span>
        </div>
        <h3 className="text-center font-medium text-dark">{project.name}</h3>
      </div>
      <motion.div
        initial="hidden"
        whileHover="show"
        className="relative h-full w-full overflow-hidden"
      >
        <Image
          width={500}
          height={280}
          loading="lazy"
          src={project.imageURL}
          alt={project.name}
          className="h-full w-full object-cover object-top"
        />
        <motion.div
          variants={slideIn("up", "tween", 0, 0.5)}
          className="absolute bottom-0 left-0 right-0 top-0 hidden w-full flex-col items-center justify-center gap-4 overflow-hidden bg-dark/75 p-2 md:flex"
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
                    className="rounded-full bg-light/10 px-2 py-1 text-sm text-light"
                  >
                    #{tag}
                  </li>
                ),
            )}
          </ul>
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full border-2 border-primary px-8 py-2 text-center text-sm font-medium text-light transition-colors hover:bg-primary hover:text-light md:text-lg"
          >
            View project &gt;
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
