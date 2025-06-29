import Heading from "@/components/common/heading";
import CtaLayout from "@/components/layout/cta-layout";
import { projectContent } from "@/config/content/projectPage";
import { IconBuildingCastle } from "@tabler/icons-react";
import Link from "next/link";

const PlaygroundCTA = () => {
  return (
    <CtaLayout className="mb-20 hidden md:flex">
      <Heading as="h3" className="text-xl md:text-3xl lg:text-5xl">
        {projectContent.playgroundHeading}
      </Heading>
      <p className="cta-desc">{projectContent.playgroundDesc}</p>
      <Link href="/playground" className="outline-button mt-8 rounded-full">
        <IconBuildingCastle />
        <span>{projectContent.playgroundCta}</span>
      </Link>
    </CtaLayout>
  );
};

export default PlaygroundCTA;
