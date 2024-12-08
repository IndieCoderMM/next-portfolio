import { ProductsQueryResult } from "@/sanity.types";
import { IconArchive, IconBrandGithub, IconGlobe } from "@tabler/icons-react";
import Image from "next/image";

type Project = ProductsQueryResult[number];

const GitHubCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex min-h-[180px] w-full min-w-[300px] max-w-[500px] flex-col rounded-lg bg-white px-6 py-4 dark:border dark:border-neutral-700 dark:bg-dark">
      <div className="flex flex-1 justify-between">
        <div>
          {project?.githubURL ? (
            <a
              href={project.githubURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-lg font-semibold hover:underline">
                {project.slug}
              </h3>
            </a>
          ) : (
            <h3 className="text-lg font-semibold">{project.slug}</h3>
          )}
          <p>{project.tagline}</p>
        </div>
        {project.logoImage.url && (
          <Image
            src={project.logoImage.url}
            width={60}
            height={60}
            alt={project.logoImage.alt ?? ""}
            className="h-[60px] w-[60px] dark:rounded-md dark:bg-white"
          />
        )}
      </div>
      {/*Icons bar*/}
      <div className="mt-auto flex gap-2">
        {project.githubURL && (
          <a
            href={project.githubURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-lg bg-gray-200 px-2 py-1 dark:bg-dark"
          >
            <IconBrandGithub size={20} />
            <span>Public</span>
          </a>
        )}
        {project.liveURL && (
          <a
            href={project.liveURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-lg bg-gray-200 px-2 py-1 dark:bg-dark"
          >
            <IconGlobe size={20} />
            <span>Live</span>
          </a>
        )}
        {project.status === "archive" && (
          <div className="flex items-center gap-1 rounded-lg bg-gray-200 px-2 py-1 dark:bg-dark">
            <IconArchive size={20} />
            <span>Archived</span>
          </div>
        )}
      </div>

      {/*Language bar*/}
      <div className="mt-4 flex flex-wrap gap-2 bg-gray-400">
        {project.languages?.map((lang) => (
          <div
            key={lang.language}
            className="dark:bg-dark-400 rounded-lg bg-gray-200 px-2 py-1"
            style={{ width: `${lang.percent}%` }}
          >
            {lang.language}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubCard;
