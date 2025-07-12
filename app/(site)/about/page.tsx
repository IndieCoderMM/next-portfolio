import { metaTexts } from "@/config/metadata";
import AboutMeSection from "@/features/about/sections/about-me";
import ExperienceSection from "@/features/about/sections/experience";
import { getProfile } from "@/sanity/lib/query";
import { getMetadata } from "@/utils/meta";
import { Metadata } from "next";

export const metadata: Metadata = getMetadata({
  title: metaTexts.home.title,
  description: metaTexts.home.description,
});

const AboutPage = async () => {
  const profile = await getProfile();

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center">
      <AboutMeSection profile={profile} />
      <ExperienceSection />
    </div>
  );
};

export default AboutPage;
