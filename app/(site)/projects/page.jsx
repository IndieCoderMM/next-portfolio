import ProjectCard from "@/components/ProjectCard";
import TitleText from "@/components/TitleText";
import { getProjects } from "@/sanity/sanity.query";
import Image from "next/image";
import React from "react";

const ProjectsPage = async () => {
  const projects = await getProjects();
  return (
    <main className="paddings">
      <TitleText text="My Projects" styles="text-center mb-8" />
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </section>
    </main>
  );
};

export default ProjectsPage;
