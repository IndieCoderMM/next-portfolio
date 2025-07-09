import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { SlideIn } from "@/components/ui/transitions";
import { aboutContent } from "@/config/content/aboutpage";
import { ProfileQueryResult } from "@/sanity.types";
import { PortableText } from "next-sanity";
import ProfileCard from "../components/profile-card";

const AboutMeSection = ({ profile }: { profile: ProfileQueryResult }) => {
  return (
    <SectionContainer className="lg:pt-10">
      <div className="section-badge">
        <span>About Me</span>
      </div>
      <SlideIn>
        <Heading className="mx-auto mb-8 px-4">{aboutContent.heading}</Heading>
      </SlideIn>
      <div className="max-container grid grid-cols-12 px-4 py-4 sm:py-10 md:px-8 lg:px-12">
        <div className="text-md text-fg col-span-12 space-y-4 leading-tight tracking-tight md:col-span-6 md:text-lg lg:col-span-8 lg:text-3xl">
          <PortableText value={profile?.about ?? []} />
        </div>

        <div className="col-span-12 flex justify-center md:col-span-6 lg:col-span-4">
          {profile ? (
            <SlideIn>
              <ProfileCard
                photo={profile.photo.url}
                label={profile.photo.label}
                alt={profile.photo.alt}
              />
            </SlideIn>
          ) : null}
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutMeSection;
