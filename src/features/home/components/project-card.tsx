import { ProductsQueryResult } from "@/sanity.types";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";

const ProjectCard = ({ project }: { project: ProductsQueryResult[number] }) => {
  return (
    <div className="flex w-full max-w-[500px] flex-col items-center gap-8 overflow-hidden rounded-xl border border-light bg-white p-8 shadow-sm dark:border-neutral-700 dark:bg-dark sm:min-w-[300px] lg:min-h-[200px]">
      <header className="flex items-center gap-1">
        <div className="flex h-[40px] w-[40px] items-center">
          <Image
            src={project.logoImage.url ?? ""}
            width={40}
            height={40}
            alt={project.logoImage.alt ?? ""}
            className="h-[40px] w-[40px] dark:rounded-lg dark:bg-white"
          />
        </div>
        <h3 className="text-xl font-bold text-black dark:text-white md:text-xl lg:text-2xl">
          {project.name}
        </h3>
      </header>
      <p className="text-center text-neutral-700 dark:text-neutral-200">
        {project.tagline}
      </p>
      <a
        href={project.liveURL ?? undefined}
        target="_blank"
        rel="noreferer"
        className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-blue-50/20 p-2 text-primary hover:brightness-110 dark:border dark:border-primaryDark dark:bg-dark dark:text-primaryDark"
      >
        <IconExternalLink className="text-primary dark:text-primaryDark" />
        Visit Website
      </a>
    </div>
  );
};

export default ProjectCard;
