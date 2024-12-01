import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { products } from "@/config/projectData";
import { IconMessage2 } from "@tabler/icons-react";
import { ProjectsGrid } from "../components/projects-grid";

const ProjectSection = () => {
  return (
    <SectionContainer className="relative flex w-full items-center justify-center overflow-hidden py-10 dark:bg-none">
      <ProjectsGrid projects={products} />
      <div className="inner-container mt-10 flex flex-col items-center gap-4 py-10 pb-20 text-center dark:bg-none lg:mt-20 lg:gap-8">
        <Heading as="h3" className="text-xl md:text-3xl lg:text-5xl">
          Have a project 💡idea?
        </Heading>
        <p className="ld:text-3xl font-medium md:text-xl">
          Bring your idea into awesome digital experience with me. Ready to
          innovate?
        </p>
        <button type="button" className="outline-button mt-8 rounded-full">
          <IconMessage2 />
          <span>Let's Chat</span>
        </button>
      </div>
    </SectionContainer>
  );
};

export default ProjectSection;