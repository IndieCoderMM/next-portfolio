"use client";

import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { projectPage } from "@/config/content/pages";
import { ProjectsQueryResult } from "@/sanity.types";
import { cn } from "@/utils/cn";
import {
  IconCoffee,
  IconFolderSearch,
  IconSortAscending,
} from "@tabler/icons-react";
import { useRef } from "react";
import GitHubCard from "../components/github-card";
import { useProjectSearch } from "../hooks/use-project-search";

const ProjectRepos = ({ projects }: { projects: ProjectsQueryResult }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    activeTags,
    activeProjects,
    tags,
    clearTags,
    resetSearch,
    handleSearch,
    handleTagChange,
    handleSortChange,
  } = useProjectSearch(projects);

  return (
    <SectionContainer className="">
      <div className="my-8 px-4 md:mt-16 md:mb-16">
        <div className="section-badge">
          <IconCoffee />
          <span className="ml-2">Personal Projects</span>
        </div>
        <Heading as="h3" className="mb-4 lg:mb-8">
          {projectPage.personalHeading}
        </Heading>
        <p className="description">{projectPage.personalDesc}</p>
      </div>
      <div className="w-full gap-2 overflow-x-hidden p-2">
        <div className="mb-px flex w-full items-center justify-between gap-4">
          <div className="hidden flex-1 sm:block">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search projects..."
              onChange={handleSearch}
              className="border-secondary-fg/20 bg-secondary/20 focus:ring-primary w-full rounded-md border px-4 py-2 text-sm focus:ring-2 focus:outline-none md:text-lg lg:text-xl"
            />
          </div>
          <div className="border-secondary-fg/20 bg-secondary flex h-full min-w-[120px] items-center justify-center rounded-md border px-4 py-2">
            <IconSortAscending className="text-secondary-fg h-6 w-6 cursor-pointer" />
            <select
              onChange={handleSortChange}
              defaultValue="recent"
              id="sort-select"
              name="sort-select"
              aria-label="Sort Projects"
              required
              autoComplete="off"
              className="bg-secondary text-secondary-fg rounded-md text-sm focus:outline-none md:text-base lg:text-lg"
            >
              <option value="recent" className="text-secondary-fg">
                Sort By Recent
              </option>
              <option value="alphabetical" className="text-secondary-fg">
                Sort By Name
              </option>
            </select>
          </div>
        </div>
        <div className="my-2 flex gap-2">
          <span className="text-secondary-fg/60 text-sm lg:text-base">
            Filter by Tags:
          </span>
          <ul className="flex flex-1 flex-wrap items-center gap-1">
            {tags.map((tag) => (
              <li>
                <button
                  key={tag}
                  onClick={() => handleTagChange(tag.toLowerCase())}
                  className={cn(
                    "border-border/40 hover:bg-secondary-fg/30 text-secondary-fg cursor-pointer rounded-full border px-2 py-px text-xs lg:text-sm",
                    {
                      "bg-secondary-fg/30": activeTags.includes(
                        tag.toLowerCase(),
                      ),
                    },
                  )}
                >
                  {tag}
                </button>
              </li>
            ))}
            {activeTags.length > 0 && (
              <li>
                <button
                  onClick={clearTags}
                  className="text-secondary-fg/60 hover:text-secondary-fg cursor-pointer px-2 py-px text-xs underline lg:text-sm"
                >
                  Clear Tags
                </button>
              </li>
            )}
          </ul>
        </div>

        <div className="relative grid w-full grid-cols-1 gap-2 md:grid-cols-3 lg:my-18 lg:gap-4">
          {activeProjects.map((product) => (
            <GitHubCard key={product._id} project={product} />
          ))}
          {activeProjects.length === 0 && (
            <div className="text-secondary-fg col-span-1 flex h-[300px] flex-col gap-2 text-center md:col-span-3">
              <IconFolderSearch className="text-secondary-fg/60 mx-auto mb-4 h-16 w-16" />
              <span className="text-lg tracking-tight md:text-xl">
                No projects found.
              </span>
              <button
                onClick={() => {
                  if (inputRef.current) {
                    inputRef.current.value = "";
                  }
                  resetSearch();
                }}
                className="bg-secondary-fg/20 hover:bg-secondary-fg/30 mt-4 w-fit self-center rounded-md px-4 py-2 text-sm md:text-base lg:text-lg"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProjectRepos;
