import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { aboutContent } from "@/config/content/aboutpage";
import ProfileCard from "../components/profile-card";

const AboutMeSection = () => {
  return (
    <SectionContainer className="lg:pt-10">
      <div className="section-badge">
        <span>About Me</span>
      </div>
      <Heading className="mx-auto px-4">{aboutContent.heading}</Heading>
      <div className="grid grid-cols-12 px-4 py-4 sm:py-10 md:px-8 lg:px-12">
        <div className="text-md col-span-12 my-10 space-y-4 leading-normal tracking-tight md:col-span-6 md:text-lg lg:col-span-8 lg:text-xl">
          {aboutContent.content}
        </div>

        <div className="col-span-12 p-4 md:col-span-6 md:p-8 lg:col-span-4">
          <ProfileCard />
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutMeSection;
