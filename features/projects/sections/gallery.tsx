import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { projectContent } from "@/config/content/projectPage";
import ProjectTabs from "../components/project-tabs";

const GallerySection = () => {
  return (
    <SectionContainer className="hidden sm:block">
      <div className="max-container mx-auto w-full">
        <div className="flex w-full flex-col items-center pb-12">
          <div className="mb-8 flex items-center gap-10">
            <Heading className="">{projectContent.heading}</Heading>
          </div>
          <p className="text-center text-lg font-light sm:w-[80%] md:text-xl lg:text-2xl">
            {projectContent.desc}
          </p>
        </div>
        <ProjectTabs />
      </div>
    </SectionContainer>
  );
};

export default GallerySection;
