import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { IconBuildingCastle } from "@tabler/icons-react";
import Link from "next/link";
import ProjectTabs from "../components/project-tabs";

const GallerySection = () => {
  return (
    <SectionContainer className="hidden sm:block">
      <div className="borderVr mx-auto w-full">
        <div className="w-full pb-12">
          <div className="mb-8 flex items-center gap-10">
            <Heading className="text-left">
              Big Ideas into Impactful Products
            </Heading>
          </div>
          <p className="text-lg font-light sm:w-[80%] md:text-xl lg:text-3xl">
            Started with an idea, ended with something amazing. Here’s how I
            turn concepts into code that delivers.
          </p>
        </div>
        <ProjectTabs />
      </div>

      <div className="inner-container mt-20 flex flex-col items-center gap-4 text-center lg:mt-32 lg:gap-8">
        <Heading as="h3" className="text-xl md:text-3xl lg:text-5xl">
          Want to see fun projects?
        </Heading>
        <p className="md:text-xl lg:text-2xl">
          Games, algorithms, and some random things I've built.
        </p>
        <Link href="/playground" className="outline-button mt-4 rounded-full">
          <IconBuildingCastle />
          <span>Enter Playground</span>
        </Link>
      </div>
    </SectionContainer>
  );
};

export default GallerySection;
