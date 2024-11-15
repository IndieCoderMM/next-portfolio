import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { IconMessage2 } from "@tabler/icons-react";
import ProjectTabs from "../components/project-tabs";

const GallerySection = () => {
  return (
    <SectionContainer className="bg-gradient-to-b from-white/30 via-white/80 to-white">
      <div className="borderVr mx-auto w-full">
        <div className="w-full pb-12">
          <Heading className="mb-8 text-left text-xl font-medium lg:text-6xl">
            Code in Action 🚀
          </Heading>
          <p className="text-lg font-light md:text-xl lg:text-3xl">
            Here are some of the cool projects that I've built.
          </p>
        </div>
        <ProjectTabs />
      </div>

      <div className="inner-container mt-20 flex flex-col items-center gap-4 text-center lg:mt-32 lg:gap-8">
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

export default GallerySection;
