import TitleText from "@/components/TitleText";
import { getProjects } from "@/sanity/sanity.query";
import Projects from "@/sections/Projects";

// get all unique tags from projects
const getUniqueTags = (projects) => [
  ...new Set(
    projects
      .map((project) => project.tags)
      .flat(1)
      .filter(Boolean),
  ),
];

const ProjectsPage = async () => {
  const projects = await getProjects();
  const tags = getUniqueTags(projects);
  return (
    <main className="paddings">
      <section className="innerWidth mx-auto">
        <TitleText text="My Projects" styles="text-center mb-8" />
        <Projects projects={projects} tags={tags} />
      </section>
    </main>
  );
};

export default ProjectsPage;
