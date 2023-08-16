"use client";

import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";

const FilterTag = ({ tag, active, changeActive }) => (
  <li
    onClick={changeActive}
    className={`${
      active
        ? "bg-primary text-white"
        : "bg-white text-dark dark:bg-dark dark:text-light"
    } cursor-pointer rounded-md border border-primary p-1 capitalize transition-colors hover:bg-primary hover:text-white dark:hover:bg-primary md:px-4 md:py-2`}
  >
    {tag}
  </li>
);

const Projects = ({ projects, tags }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeProjects, setActiveProjects] = useState(projects);

  useEffect(() => {
    if (activeFilter === "all") {
      setActiveProjects(projects);
      return;
    }
    const filteredProjects = projects.filter((project) =>
      project.tags.includes(activeFilter),
    );

    setActiveProjects(filteredProjects);
  }, [activeFilter]);

  return (
    <>
      <ul className="mb-8 flex flex-wrap justify-center gap-2">
        <FilterTag
          tag="all"
          active={activeFilter === "all"}
          changeActive={() => setActiveFilter("all")}
        />
        {tags.map((tag) => (
          <FilterTag
            key={tag}
            tag={tag}
            active={activeFilter === tag}
            changeActive={() => setActiveFilter(tag)}
          />
        ))}
      </ul>
      <section className="flex w-full flex-wrap justify-center gap-4">
        {activeProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </>
  );
};

export default Projects;
