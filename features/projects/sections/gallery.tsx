import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { projectPage } from "@/config/content/pages";
import ProjectTabs from "../components/project-tabs";

const GallerySection = () => {
  return (
    <SectionContainer className="lg:pt-10">
      <Heading className="mb-4 px-4 sm:mx-auto sm:mb-8">
        {projectPage.heading}
      </Heading>
      <p className="description mb-10">{projectPage.desc}</p>
      <ProjectTabs />
    </SectionContainer>
  );
};

export default GallerySection;
