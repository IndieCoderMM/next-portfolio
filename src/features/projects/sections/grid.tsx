import { SectionContainer } from "@/components/layout/section";
import { products } from "@/config/projectData";
import { ProjectsGrid } from "../components/projects-grid";

const ProjectSection = () => {
  return (
    <SectionContainer className="relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white/50 via-white/90 to-white pt-0 dark:bg-none">
      <ProjectsGrid projects={products} />
    </SectionContainer>
  );
};

export default ProjectSection;
