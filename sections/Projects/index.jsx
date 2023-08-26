"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const FilterTag = ({ tag, active, changeActive }) => (
  <li
    onClick={changeActive}
    className={`${
      active
        ? "bg-primary text-white dark:bg-primaryDark dark:text-dark"
        : "bg-light text-dark"
    } btn font-medium capitalize`}
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
    <section className="yPaddings w-full">
      <ul className="mb-8 hidden flex-wrap justify-center gap-2 md:flex">
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
    </section>
  );
};

export default Projects;
