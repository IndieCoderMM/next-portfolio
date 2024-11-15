import { SectionContainer } from "@/components/layout/section";
import { LinkPreview } from "@/components/ui/link-preview";
import { TypewriterText } from "@/components/ui/typewriter";
import { aboutData } from "@/config/aboutData";
import ProfileCard from "../components/profile-card";

const AboutMeSection = () => {
  return (
    <SectionContainer className="pt-10">
      <TypewriterText words={aboutData.title} />
      <div className="grid grid-cols-12 px-4 py-10 md:px-8 lg:px-12">
        <div className="col-span-12 md:col-span-6 lg:col-span-8">
          <div className="text-md my-10 leading-loose md:text-lg lg:text-xl">
            My coding journey began in 2020 when I started making simple games.
            This hobby sparked my love for web development, leading me to join
            the{" "}
            <LinkPreview
              url="https://www.microverse.org"
              isStatic={false}
              className="inline-flex font-bold text-primary"
            >
              Microverse
            </LinkPreview>{" "}
            program. I've collaborated with developers from around the world on
            building 10+ real-world web apps.
          </div>
          <p className="text-md my-10 leading-loose md:text-lg lg:text-xl">
            I specialize in designing user-friendly and responsive websites that
            are optimized for performance and best SEO outcomes. I prioritize
            high accessibility and make sure every user can easily navigate and
            enjoy the content without any hassle.
          </p>
          <p className="text-md my-10 leading-loose md:text-lg lg:text-xl">
            My main focus these days is building innovative projects that
            showcase my skills. I'm actively working towards sharpening my
            skills, making meaningful contributions, and positioning myself for
            future opportunities.
          </p>
          <p className="text-md my-10 leading-loose md:text-lg lg:text-xl">
            When I'm not coding, you'll likely find me mastering handstands,
            spending time with my loved ones, or playing with my dogs.
          </p>
        </div>
        <div className="col-span-12 p-4 md:col-span-6 md:p-8 lg:col-span-4">
          <ProfileCard />
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutMeSection;
