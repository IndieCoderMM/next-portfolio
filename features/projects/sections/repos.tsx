"use client";

import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { projectPage } from "@/config/content/pages";
import { ProjectsQueryResult } from "@/sanity.types";
import { IconCoffee, IconSortAscending } from "@tabler/icons-react";
import { Variants } from "motion/react";
import { useEffect, useState } from "react";
import GitHubCard from "../components/github-card";

const variants: Variants = {
  hidden: {
    y: 1000,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

const ProjectRepos = ({ projects }: { projects: ProjectsQueryResult }) => {
  const [filtered, setFiltered] = useState<ProjectsQueryResult>([]);
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  useEffect(() => {
    // Initial filter to show all projects
    setFiltered(projects);
  }, [projects]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();

    if (searchTerm.trim() === "") {
      setFiltered(projects);
      return;
    }

    setDebouncedSearch(searchTerm);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = event.target.value;
    let sortedProjects = [...filtered];

    if (sortValue === "recent") {
      sortedProjects.sort(
        (a, b) =>
          new Date(b.developedAt ?? "").getTime() -
          new Date(a.developedAt ?? "").getTime(),
      );
    } else if (sortValue === "alphabetical") {
      sortedProjects.sort((a, b) => a.name?.localeCompare(b.name || "") || 0);
    }

    setFiltered(sortedProjects);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (debouncedSearch.trim() === "") {
        setFiltered(projects);
      } else {
        const filteredProjects = projects.filter(
          (p) =>
            p.name?.toLowerCase().includes(debouncedSearch) ||
            p.tagline?.toLowerCase().includes(debouncedSearch) ||
            p.tags?.some((tag) =>
              tag.toLowerCase().includes(debouncedSearch),
            ) ||
            p.languages?.some((l) =>
              l.language?.toLowerCase().includes(debouncedSearch),
            ),
        );
        setFiltered(filteredProjects);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [debouncedSearch]);

  return (
    <SectionContainer className="">
      <div className="my-8 px-4 sm:mt-16 sm:mb-16">
        <div className="section-badge">
          <IconCoffee />
          <span className="ml-2">Personal Projects</span>
        </div>
        <Heading as="h3" className="mb-4 lg:mb-8">
          {projectPage.personalHeading}
        </Heading>
        <p className="description">{projectPage.personalDesc}</p>
      </div>
      <div className="w-full gap-2 overflow-x-hidden">
        <div className="mb-2 flex w-full items-center justify-between gap-4">
          <div className="hidden flex-1 sm:block">
            <input
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
              className="bg-secondary text-secondary-fg rounded-md text-sm focus:outline-none md:text-lg lg:text-xl"
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

        <div className="relative grid w-full grid-cols-1 gap-2 md:grid-cols-3 lg:my-18 lg:gap-4">
          {filtered.map((product) => (
            <GitHubCard key={product._id} project={product} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ProjectRepos;
