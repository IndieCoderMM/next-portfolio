"use client";

import { ProductsQueryResult } from "@/sanity.types";
import { cn } from "@/utils/cn";
import {
  IconArchive,
  IconBrandGithub,
  IconHash,
  IconRocket,
} from "@tabler/icons-react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";

type Project = ProductsQueryResult[number];

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
    <div className="relative flex min-h-[180px] w-full min-w-[300px] max-w-[500px] flex-col rounded-lg bg-white px-6 py-4 dark:border dark:border-neutral-700 dark:bg-dark">
      <div className="mb-2 flex-1">
        <div className="flex justify-between">
          <div>
            {project?.githubURL ? (
              <a
                href={project.githubURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-lg font-semibold hover:underline sm:text-xl">
                  {project.slug}
                </h3>
              </a>
            ) : (
              <h3 className="text-lg font-semibold sm:text-xl">
                {project.slug}
              </h3>
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
        {/*Tags bar*/}
        <div className="mt-1 flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <div
              key={tag}
              className="flex items-center rounded-full border border-neutral-600 px-2 py-1 text-xs text-neutral-600 dark:border-neutral-300 dark:text-neutral-200"
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
            className="flex items-center gap-1 rounded-lg bg-gray-100 px-2 py-1 text-xs dark:bg-dark"
          >
            <IconBrandGithub size={20} />
            <span>Public</span>
          </a>
        )}
        {project.liveURL && project.status === "live" && (
          <a
            href={project.liveURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-lg bg-gray-100 px-2 py-1 text-xs dark:bg-dark"
          >
            <IconRocket size={20} className="" />
            <span>Live</span>
          </a>
        )}
        {project.status === "archive" && (
          <div className="flex items-center gap-1 rounded-lg bg-gray-100 px-2 py-1 text-xs dark:bg-dark">
            <IconArchive size={20} />
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
              <div className="rounded-lg bg-white p-1 text-xs dark:bg-dark">
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
