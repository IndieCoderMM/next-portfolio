"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { ProjectDetailQueryResult, ProjectsQueryResult } from "@/sanity.types";
import {
  IconArchive,
  IconArrowUpRight,
  IconBrandGithub,
  IconCircleDotted,
  IconCode,
  IconWorld,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import LanguageBar from "./language-bar";

type Project = ProjectsQueryResult[number];

const GitHubCard = ({ project }: { project: Project }) => {
  const renderStatusIcon = (
    status: NonNullable<ProjectDetailQueryResult>["status"],
  ) => {
    switch (status) {
      case "live":
        return <IconWorld size={20} className="mr-1 inline-block" />;
      case "archived":
        return <IconArchive size={20} className="mr-1 inline-block" />;
      case "development":
        return <IconCode size={20} className="mr-1 inline-block" />;
      default:
        return <IconCircleDotted size={20} className="mr-1 inline-block" />;
    }
  };

  return (
    <AnimatedTooltip
      tooltip={
        <div className="flex w-full min-w-[200px] flex-col gap-px">
          <div className="mb-1 flex items-center">
            {project.logoImage.url ? (
              <Image
                src={project.logoImage.url}
                width={30}
                height={30}
                alt={project.logoImage.alt ?? ""}
                className="h-8 w-8 rounded-full"
              />
            ) : (
              <div className="bg-secondary-fg/20 flex h-8 w-8 items-center justify-center rounded-full">
                <span className="text-secondary-fg/60 text-sm font-medium">
                  {project.name?.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            <span className="ml-2 text-sm font-medium capitalize">
              {project.name}
            </span>
          </div>
          <span className="text-xs">{project.tagline}</span>
          <div className="text-fg/80 flex items-center self-end text-xs">
            <span className="font-medium">Click to view</span>
            <IconArrowUpRight className="h-3 w-3" />
          </div>
        </div>
      }
    >
      <Link
        href={`/projects/${project.slug}`}
        className="block h-full w-full p-1"
      >
        <div className="bg-secondary/40 hover:bg-secondary relative flex min-h-[150px] w-full flex-col rounded-lg px-4 pt-2 pb-4">
          <div className="mb-1 flex-1">
            <div className="flex w-full justify-between">
              <div>
                <h3 className="text-lg font-medium">{project.slug}</h3>
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
          </div>

          {/*Icons bar*/}
          <div className="mt-auto flex gap-2">
            {project.githubURL && (
              <div className="bg-fg/10 flex items-center gap-1 rounded-lg px-2 py-1 text-xs">
                <IconBrandGithub size={20} className="stroke-[1.5]" />
                <span>Public</span>
              </div>
            )}
            {project.liveURL && (
              <div className="bg-fg/10 flex items-center gap-1 rounded-lg px-2 py-1 text-xs hover:brightness-110">
                <IconWorld size={20} className="stroke-[1.5]" />
                <span>Live</span>
              </div>
            )}
            {project.status && (
              <div className="bg-fg/10 flex items-center gap-1 rounded-lg px-2 py-1 text-xs hover:brightness-110">
                {renderStatusIcon(project.status)}
                <span className="capitalize">{project.status}</span>
              </div>
            )}
          </div>

          {/*Language bar*/}
          <LanguageBar project={project} />
        </div>
      </Link>
    </AnimatedTooltip>
  );
};

export default GitHubCard;
