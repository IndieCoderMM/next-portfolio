import { SectionContainer } from "@/components/layout/section";
import { products } from "@/config/projectData";
import { ProjectsGrid } from "../components/projects-grid";

const ProjectSection = () => {
  return (
    <SectionContainer className="relative hidden w-full items-center justify-center overflow-hidden py-10 dark:bg-none sm:flex">
      <ProjectsGrid projects={products} />
    </SectionContainer>
  );
};

export default ProjectSection;
