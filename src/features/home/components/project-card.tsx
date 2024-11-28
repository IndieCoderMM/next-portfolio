import { ProductsQueryResult } from "@/sanity.types";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";

const ProjectCard = ({ project }: { project: ProductsQueryResult[number] }) => {
  return (
    <div className="flex w-full min-w-[350px] max-w-[600px] flex-col items-center gap-8 overflow-hidden rounded-xl border border-light bg-white p-8 shadow-sm dark:border-neutral-700 dark:bg-dark lg:min-h-[200px]">
      <header className="flex items-center gap-2">
        <Image
          src={project.logoImage.url ?? ""}
          width={60}
          height={60}
          alt={project.logoImage.alt ?? ""}
        />
        <h3 className="text-xl font-bold text-black dark:text-white md:text-xl lg:text-2xl">
          {project.name}
        </h3>
      </header>
      <p className="text-center text-neutral-700 dark:text-neutral-200">
        {project.tagline}
      </p>
      <a
        href={project.liveURL ?? undefined}
        className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-blue-100/50 p-2 text-blue-500 hover:brightness-105 dark:border dark:border-blue-500 dark:bg-dark"
      >
        <IconExternalLink className="text-blue-500" />
        Visit Website
      </a>
    </div>
  );
};

export default ProjectCard;
