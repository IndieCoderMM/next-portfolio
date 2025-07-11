"use client";

import GitHubCard from "@/components/common/github-card";
import Heading from "@/components/common/heading";
import { projectContent } from "@/config/content/projectPage";
import { ProjectsQueryResult } from "@/sanity.types";
import { IconCoffee, IconSortAscending } from "@tabler/icons-react";
import { motion, Variants } from "motion/react";
import { useEffect, useState } from "react";

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

const ProjectRepos = ({ products }: { products: ProjectsQueryResult }) => {
  const [filtered, setFiltered] = useState<ProjectsQueryResult>([]);
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  useEffect(() => {
    // Initial filter to show all projects
    setFiltered(products);
  }, [products]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();

    if (searchTerm.trim() === "") {
      setFiltered(products);
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
        setFiltered(products);
      } else {
        const filteredProjects = products.filter(
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
    <section className="inner-container">
      <div className="inner-container mt-16 mb-16">
        <div className="section-badge">
          <IconCoffee />
          <span className="ml-2">Personal Projects</span>
        </div>
        <Heading as="h3" className="mb-4 lg:mb-8">
          {projectContent.personalHeading}
        </Heading>
        <p className="cta-desc">{projectContent.personalDesc}</p>
      </div>
      <div className="my-8 w-full gap-2">
        <div className="mb-2 flex w-full items-center justify-between gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search projects..."
              onChange={handleSearch}
              className="border-secondary-fg/20 bg-secondary focus:ring-primary w-full rounded-md border px-4 py-2 text-sm focus:ring-2 focus:outline-none md:text-lg lg:text-xl"
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
              <option value="recent">Sort By Recent</option>
              <option value="popular">Sort By Popularity</option>
              <option value="alphabetical">Sort By Name</option>
            </select>
          </div>
        </div>

        <motion.div
          variants={{
            show: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          initial="hidden"
          animate="show"
          className="relative grid w-full grid-cols-1 gap-2 md:grid-cols-3 lg:my-18 lg:gap-4"
        >
          {filtered.map((product) => (
            <motion.div
              variants={variants}
              transition={{ type: "spring", bounce: 0.2 }}
              className="w-full"
            >
              <GitHubCard key={product._id} project={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectRepos;
