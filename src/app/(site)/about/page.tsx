import AboutMeSection from "@/features/about/sections/about-me";
import ExperienceSection from "@/features/about/sections/experience";

const AboutPage = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <AboutMeSection />
      <ExperienceSection />
    </div>
  );
};

export default AboutPage;
