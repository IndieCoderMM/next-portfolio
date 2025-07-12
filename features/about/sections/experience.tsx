import Heading from "@/components/common/heading";
import { Timeline } from "@/components/ui/timeline";
import { aboutPage } from "@/config/content/pages";

const ExperienceSection = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 lg:px-10">
        <div className="section-badge">
          <span>My Journey</span>
        </div>
        <Heading as="h2" id="experience" className="mb-4">
          {aboutPage.experienceHeading}
        </Heading>
        <p className="description">{aboutPage.experienceDesc}</p>
      </div>
      <Timeline />
    </section>
  );
};

export default ExperienceSection;
