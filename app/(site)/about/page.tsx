import { metaTexts } from "@/config/metadata";
import AboutMeSection from "@/features/about/sections/about-me";
import ExperienceSection from "@/features/about/sections/experience";
import { getProfile } from "@/sanity/lib/query";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: metaTexts.about.title,
  description: metaTexts.about.description,
};

const AboutPage = async () => {
  // TODO: About me content renderer
  const profile = await getProfile();

  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <AboutMeSection profile={profile} />
      <ExperienceSection />
    </div>
  );
};

export default AboutPage;
