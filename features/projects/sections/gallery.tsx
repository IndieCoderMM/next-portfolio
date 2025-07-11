import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { projectContent } from "@/config/content/projectPage";
import ProjectTabs from "../components/project-tabs";

const GallerySection = () => {
  return (
    <SectionContainer>
      <div className="max-container relative mx-auto w-full">
        <div className="flex w-full flex-col items-center px-4 md:pb-12">
          <Heading className="mb-4 sm:mb-8">{projectContent.heading}</Heading>
          <p className="description">{projectContent.desc}</p>
        </div>
        <ProjectTabs />
      </div>
    </SectionContainer>
  );
};

export default GallerySection;
