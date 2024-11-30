import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { LinkPreview } from "@/components/ui/link-preview";
import { getProfile } from "@/sanity/lib/query";
import ProfileCard from "../components/profile-card";

const AboutMeSection = async () => {
  const profile = await getProfile();
  return (
    <SectionContainer className="pt-10">
      <Heading>About Me</Heading>
      <div className="grid grid-cols-12 px-4 py-10 md:px-8 lg:px-12">
        <div className="text-md col-span-12 my-10 leading-loose md:col-span-6 md:text-lg lg:col-span-8 lg:text-xl">
          <p className="mb-4">
            Hi there! You can call me <strong>Hein</strong>. I'm a software
            developer based in Myanmar. I specialize in the React ecosystem and
            have been building native apps with Expo for 2+ years.
          </p>
          <p className="my-4">
            I discovered my love for coding in 2019 when I made mobile apps with
            MIT App Inventor. After leaving university in 2020, I started making
            games with Python, which eventually led me into web development.
          </p>
          <div className="text-md my-4 leading-loose md:text-lg lg:text-xl">
            In 2022, I joined the{" "}
            <LinkPreview
              url="https://www.microverse.org"
              isStatic={false}
              className="inline-flex font-bold text-primary"
            >
              Microverse
            </LinkPreview>{" "}
            program, where I had the opportunity to work with talented
            developers from around the world. It was a life-changing experience
            that helped me grow as a developer and a person, especially because
            of the wonderful people I met along the way.
          </div>
          <div className="text-md my-4 leading-loose md:text-lg lg:text-xl">
            Over the years, I’ve dived deep into React Native and Node.js, even
            launching apps that have reached thousands of users. I sometimes
            write blog posts on{" "}
            <LinkPreview
              url={profile?.socials?.blog ?? "/"}
              isStatic={false}
              className="font-bold text-primary"
            >
              IndieCoder's Blog
            </LinkPreview>{" "}
            to share my knowledge.
          </div>
          <p>
            In most of my free time, I'll be probably updating my Neovim
            configs, or working on one of my unfinished side projects.
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
