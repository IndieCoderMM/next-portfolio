import AboutMeSection from "@/features/about/sections/about-me";
import ExperienceSection from "@/features/about/sections/experience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Hein Thant · Full-Stack Developer",
  description:
    "A little about me, my journey, and my experiences as a self-taught developer.",
};

const AboutPage = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <AboutMeSection />
      <ExperienceSection />
    </div>
  );
};

export default AboutPage;
