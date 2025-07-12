"use client";

import Heading from "@/components/common/heading";
import { homepage } from "@/config/content/pages";
import { ProjectsQueryResult } from "@/sanity.types";
import { IconFolder, IconRocket } from "@tabler/icons-react";
import Link from "next/link";
import ProjectCard from "../components/project-card";

const ProjectSection = ({ projects }: { projects: ProjectsQueryResult }) => {
  return (
    <section className="relative flex w-full flex-col items-center py-16 sm:py-20">
      <div className="max-container relative mb-8 px-4 sm:mb-16">
        <div className="section-badge">
          <IconFolder className="mr-2" />
          <span>Projects</span>
        </div>
        <Heading as="h3">{homepage.projectHeading}</Heading>
      </div>
      <div className="inner-container relative mb-4 grid grid-cols-1 gap-10 md:mb-10 md:grid-cols-2">
        {projects
          .filter((p) => p.isFeatured)
          .map((p, index) => (
            <ProjectCard key={index} project={p} />
          ))}
      </div>
      <Link href="/projects">
        <button type="button" className="outline-button mt-8 rounded-full">
          <IconRocket />
          <span>{homepage.projectCta}</span>
        </button>
      </Link>
    </section>
  );
};

export default ProjectSection;
