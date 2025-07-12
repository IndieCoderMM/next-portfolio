"use client";

import { ProjectsQueryResult } from "@/sanity.types";
import {
  IconArchive,
  IconBrandGithub,
  IconHash,
  IconRocket,
} from "@tabler/icons-react";
import Image from "next/image";
import LanguageBar from "./language-bar";

type Project = ProjectsQueryResult[number];

const GitHubCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-secondary/40 relative flex min-h-[150px] w-full max-w-[500px] min-w-[300px] flex-col rounded-lg px-4 pt-2 pb-4">
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
            <p className="text-secondary-fg text-xs">{project.tagline}</p>
          </div>
          {project.logoImage.url && (
            <Image
              src={project.logoImage.url}
              width={40}
              height={40}
              alt={project.logoImage.alt ?? ""}
              className="h-[40px] w-[40px]"
            />
          )}
        </div>
        {/*Tags bar*/}
        <div className="mt-1 flex flex-wrap gap-1">
          {project.tags?.map((tag) => (
            <div
              key={tag}
              className="text-secondary-fg border-fg/10 flex items-center rounded-full border px-1 py-0.5 text-xs"
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
            className="bg-fg/10 flex items-center gap-1 rounded-lg px-2 py-1 text-xs"
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
            className="bg-fg/10 flex items-center gap-1 rounded-lg px-2 py-1 text-xs"
          >
            <IconRocket size={20} className="stroke-[1.5]" />
            <span>Live</span>
          </a>
        )}
        {project.status === "archive" && (
          <div className="bg-fg/10 flex items-center gap-1 rounded-lg px-2 py-1 text-xs">
            <IconArchive size={20} className="stroke-[1.5]" />
            <span>Archived</span>
          </div>
        )}
      </div>

      {/*Language bar*/}
      <LanguageBar project={project} />
    </div>
  );
};

export default GitHubCard;
