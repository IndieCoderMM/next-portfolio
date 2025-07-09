"use client";

import Heading from "@/components/common/heading";
import { homepageContent } from "@/config/content/homepage";
import { ProjectsQueryResult } from "@/sanity.types";
import { IconRocket } from "@tabler/icons-react";
import Link from "next/link";
import ProjectCard from "../components/project-card";

const ProjectSection = ({ projects }: { projects: ProjectsQueryResult }) => {
  return (
    <section className="relative flex w-full flex-col items-center bg-white py-16 sm:py-20 dark:bg-transparent">
      <span className="blob absolute top-20 right-0 size-1/2 blur-[120px]" />
      <div className="max-container relative mb-16">
        <div className="section-badge w-fit self-center">
          <span>Projects</span>
        </div>
        <Heading as="h3" className="mb-4 text-3xl md:text-4xl lg:text-5xl">
          {homepageContent.projectHeading}
        </Heading>
      </div>
      <div className="inner-container relative grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects
          .filter((p) => p.status === "live")
          .slice(0, 6)
          .map((p, index) => (
            <ProjectCard key={index} project={p} />
          ))}
      </div>
      <Link href="/projects">
        <button type="button" className="outline-button mt-8 rounded-full">
          <IconRocket />
          <span>{homepageContent.projectCta}</span>
        </button>
      </Link>
    </section>
  );
};

export default ProjectSection;
