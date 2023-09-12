"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import FilterDropdown from "./FilterDropdown";
import Image from "next/image";

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
  const [activeProjects, setActiveProjects] = useState(projects);
  const [tagFilters, setTagFilters] = useState([]);

  const handleTagSelect = (tag) => {
    if (tagFilters.includes(tag)) {
      setTagFilters((prev) => prev.filter((t) => t !== tag));
    } else {
      setTagFilters((prev) => [...prev, tag]);
    }
  };

  useEffect(() => {
    if (tagFilters.length === 0) {
      setActiveProjects(projects);
    } else {
      setActiveProjects(
        projects.filter((project) =>
          tagFilters.every((tag) => project.tags.includes(tag)),
        ),
      );
    }
  }, [tagFilters]);

  return (
    <section className="yPaddings w-full space-y-4">
      <div className="flex w-full items-center justify-end gap-4">
        <FilterDropdown
          tags={tags}
          selected={tagFilters}
          setTagFilters={handleTagSelect}
          clearFilters={() => setTagFilters([])}
        />
      </div>
      {activeProjects.length === 0 && (
        <div className="flex h-96 w-full flex-col items-center justify-center">
          <Image
            src="/programming.svg"
            width={500}
            height={500}
            alt="Programming"
          />
          <p className="interWidth mx-auto my-2 text-center text-lg font-medium text-primary-800 dark:text-primaryDark">
            Don&apos;t have any projects with those tags. But I&apos;m working
            on it! Check back soon.
          </p>
        </div>
      )}
      <section className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
        {activeProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </section>
  );
};

export default Projects;
