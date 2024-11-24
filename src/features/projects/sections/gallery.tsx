import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { IconBuildingCastle } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import ProjectTabs from "../components/project-tabs";

const GallerySection = () => {
  return (
    <SectionContainer className="bg-gradient-to-b from-white/30 via-white/80 to-white dark:bg-none">
      <div className="borderVr mx-auto w-full">
        <div className="w-full pb-12">
          <div className="mb-8 flex items-center gap-10">
            <Heading className="text-left text-xl font-medium lg:text-6xl">
              Code in Action
            </Heading>
            <Image
              src={"/assets/rocket.png"}
              width={80}
              height={80}
              alt="rocket"
            />
          </div>
          <p className="text-lg font-light md:text-xl lg:text-3xl">
            Here are some of the cool projects that I've built.
          </p>
        </div>
        <ProjectTabs />
      </div>

      <div className="inner-container mt-20 flex flex-col items-center gap-4 text-center lg:mt-32 lg:gap-8">
        <Heading as="h3" className="text-xl md:text-3xl lg:text-5xl">
          Wanna see fun projects instead?
        </Heading>
        <p className="ld:text-3xl font-medium md:text-xl">
          Join the fun side of the playground and checkout more projects.
        </p>
        <Link href="/playground" className="outline-button mt-8 rounded-full">
          <IconBuildingCastle />
          <span>Enter Playground</span>
        </Link>
      </div>
    </SectionContainer>
  );
};

export default GallerySection;
