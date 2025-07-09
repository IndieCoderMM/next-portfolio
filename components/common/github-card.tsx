"use client";

import { ProjectsQueryResult } from "@/sanity.types";
import { cn } from "@/utils/cn";
import {
  IconArchive,
  IconBrandGithub,
  IconHash,
  IconRocket,
} from "@tabler/icons-react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";

type Project = ProjectsQueryResult[number];

const languageColors = {
  javascript: "#f1e05a",
  typescript: "#2b7489",
  python: "#3572A5",
  css: "#563d7c",
  html: "#e34c26",
  ruby: "#701516",
};

const getLanguageColor = (language: string) => {
  const lang = language.toLowerCase();
  if (Object.keys(languageColors).includes(lang)) {
    return languageColors[lang as keyof typeof languageColors];
  }
  return "#333";
};

const GitHubCard = ({ project }: { project: Project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;

    const tooltipWidth = 0;
    const tooltipHeight = 0;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    //+12 is added to give a spice between cursor and tooltip
    let tooltipX = clientX + 12;
    let tooltipY = clientY + 12;

    // Check if tooltip exceeds the right side of the viewport
    if (tooltipX + tooltipWidth > viewportWidth) {
      tooltipX = clientX - tooltipWidth - 10;
    }

    // Check if tooltip exceeds the bottom of the viewport
    if (tooltipY + tooltipHeight > viewportHeight) {
      tooltipY = viewportHeight - tooltipHeight - 10;
    }

    x.set(tooltipX);
    y.set(tooltipY);
  };

  return (
    <div className="dark:bg-dark relative flex min-h-[150px] w-full max-w-[500px] min-w-[300px] flex-col rounded-lg border bg-white px-2 pt-2 pb-4 dark:border dark:border-neutral-700">
      <div className="mb-1 flex-1">
        <div className="flex w-full justify-between">
          <div>
            {project?.githubURL ? (
              <a
                href={project.githubURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-lg font-medium hover:underline">
                  {project.slug}
                </h3>
              </a>
            ) : (
              <h3 className="text-lg font-medium hover:underline">
                {project.slug}
              </h3>
            )}
            <p className="text-text-secondary text-xs">{project.tagline}</p>
          </div>
          {project.logoImage.url && (
            <Image
              src={project.logoImage.url}
              width={40}
              height={40}
              alt={project.logoImage.alt ?? ""}
              className="h-[40px] w-[40px] dark:rounded-md dark:bg-white"
            />
          )}
        </div>
        {/*Tags bar*/}
        <div className="mt-1 flex flex-wrap gap-1">
          {project.tags?.map((tag) => (
            <div
              key={tag}
              className="text-text-secondary flex items-center rounded-full border border-neutral-400 px-1 py-0.5 text-xs dark:border-neutral-300"
            >
              <IconHash size={14} />
              <span>{tag}</span>
            </div>
          ))}
        </div>
      </div>

      {/*Icons bar*/}
      <div className="mt-auto flex gap-2">
        {project.githubURL && (
          <a
            href={project.githubURL}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:bg-dark flex items-center gap-1 rounded-lg bg-gray-100 px-2 py-1 text-xs"
          >
            <IconBrandGithub size={20} className="stroke-[1.5]" />
            <span>Public</span>
          </a>
        )}
        {project.liveURL && project.status === "live" && (
          <a
            href={project.liveURL}
            target="_blank"
            rel="noopener noreferrer"
            className="dark:bg-dark flex items-center gap-1 rounded-lg bg-gray-100 px-2 py-1 text-xs"
          >
            <IconRocket size={20} className="stroke-[1.5]" />
            <span>Live</span>
          </a>
        )}
        {project.status === "archive" && (
          <div className="dark:bg-dark flex items-center gap-1 rounded-lg bg-gray-100 px-2 py-1 text-xs">
            <IconArchive size={20} className="stroke-[1.5]" />
            <span>Archived</span>
          </div>
        )}
      </div>

      {/*Language bar*/}
      <div
        onMouseMove={handleMouseMove}
        className="absolute inset-x-0 bottom-0 mt-4 flex h-2 overflow-hidden rounded-b-lg bg-gray-400"
      >
        {project.languages?.filter(Boolean)?.map((lang) => (
          <div
            key={lang.language}
            className={`group relative h-2 bg-gray-200`}
            style={{
              width: `${lang.percent}%`,
              backgroundColor: getLanguageColor(lang.language ?? ""),
            }}
          >
            <motion.div
              style={{
                pointerEvents: "none",
                left: x,
                top: y,
              }}
              className={cn(`fixed z-50 opacity-0 group-hover:opacity-100`)}
            >
              <div className="dark:bg-dark rounded-lg bg-white p-1 text-xs">
                <span>{lang.language}</span>
                <span> {lang.percent}%</span>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubCard;
