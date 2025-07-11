import CTA from "@/components/common/call-to-action";
import { projectContent } from "@/config/content/projectPage";
import { IconBuildingCastle } from "@tabler/icons-react";

const PlaygroundCTA = () => {
  return (
    <CTA
      heading={projectContent.playgroundHeading}
      description={projectContent.playgroundDesc}
      className="mb-20 hidden md:flex"
      href="/playground"
      buttonContent={
        <>
          <IconBuildingCastle />
          <span>{projectContent.playgroundCta}</span>
        </>
      }
    />
  );
};

export default PlaygroundCTA;
