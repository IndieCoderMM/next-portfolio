import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import ProjectTabs from "../components/project-tabs";

const GallerySection = () => {
  return (
    <SectionContainer className="hidden sm:block">
      <div className="borderVr mx-auto w-full">
        <div className="flex w-full flex-col items-center pb-12">
          <div className="mb-8 flex items-center gap-10">
            <Heading className="">Big Ideas into Impactful Products</Heading>
          </div>
          <p className="text-center text-lg font-light sm:w-[80%] md:text-xl lg:text-3xl">
            Started with an idea, ended with something amazing. Here’s how I
            turn concepts into code that delivers.
          </p>
        </div>
        <ProjectTabs />
      </div>
    </SectionContainer>
  );
};

export default GallerySection;
