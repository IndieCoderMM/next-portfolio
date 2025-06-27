import Heading from "@/components/common/heading";
import { Timeline } from "@/components/ui/timeline";
import { aboutContent } from "@/config/content/aboutpage";

const ExperienceSection = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 lg:px-10">
        <div className="section-badge">
          <span>My Journey</span>
        </div>
        <Heading as="h2" id="experience" className="mb-4">
          {aboutContent.experienceHeading}
        </Heading>
        <p className="mx-auto max-w-2xl text-center text-sm text-neutral-700 dark:text-neutral-300 md:text-base lg:text-xl">
          {aboutContent.experienceDesc}
        </p>
      </div>
      <Timeline />
    </section>
  );
};

export default ExperienceSection;
