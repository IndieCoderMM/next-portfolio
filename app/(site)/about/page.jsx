import AnimatedNumber from "@/components/AnimatedNumber";
import CustomButton from "@/components/CustomButton";
import Footer from "@/components/Footer";
import {
  BlogIcon,
  GitHubIcon,
  LinkArrow,
  LinkedInIcon,
} from "@/components/Icons";
import RichText from "@/components/RichText";
import TitleText from "@/components/TitleText";
import TypingText from "@/components/TypingText";
import { getProfile, getSkills } from "@/sanity/sanity.query";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Image from "next/image";

export const metadata = {
  title: "Hein Thant | About Me",
};

const About = async () => {
  const profile = await getProfile();
  const skills = await getSkills();

  return (
    <main className="paddings w-full">
      <section className="innerWidth mx-auto">
        <TitleText text={profile?.headline} styles="text-center mb-12" />
        <TypingText
          text={"Biography"}
          styles={"font-semibold uppercase text-xl mb-8"}
        />
        <div className=" grid w-full gap-16 md:grid-cols-8">
          <div className="col-span-full flex flex-col items-start justify-start pt-4 lg:col-span-5 xl:col-span-4">
            <div className="flex flex-col gap-4 text-lg leading-relaxed text-dark">
              <RichText value={profile?.about} />
            </div>
          </div>
          <div className="col-span-full flex flex-col items-center gap-4 self-center lg:col-span-3 xl:col-span-2">
            <div className=" flex flex-col items-center justify-center rounded-2xl border-2 border-dark bg-light shadow-400 ">
              <Image
                src={profile?.profileImage.url}
                width={500}
                height={500}
                className="h-auto w-full object-contain"
                alt="profile"
              />
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <a
                href={profile?.resumeURL}
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <CustomButton>
                  <span className="block w-full text-lg font-semibold text-light md:text-xl">
                    My Resume
                  </span>
                </CustomButton>
              </a>
              <a
                href={profile?.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <CustomButton>
                  <span className="block w-full text-lg font-semibold text-light md:text-xl">
                    GitHub
                  </span>
                </CustomButton>
              </a>
              <a
                href={`mailto:${profile?.email}`}
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <CustomButton>
                  <span className="block w-full text-lg font-semibold text-light md:text-xl">
                    Email
                  </span>
                </CustomButton>
              </a>
              <a
                href={profile?.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-full"
              >
                <CustomButton>
                  <span className="block w-full text-lg font-semibold text-light md:text-xl">
                    LinkedIn
                  </span>
                </CustomButton>
              </a>
            </div>
          </div>

          <div className="col-span-full flex items-center justify-between xl:col-span-2 xl:flex-col xl:items-end">
            <div className="flex flex-1 flex-col items-center justify-center lg:items-end">
              <span className="inline-block text-2xl font-bold text-primary lg:text-7xl">
                <AnimatedNumber value={profile?.metrics?.frontEnd} />+
              </span>
              <p className="text-lg font-medium text-dark/75 dark:text-light md:text-xl">
                Front-end Projects
              </p>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center lg:items-end">
              <span className="inline-block text-3xl font-bold text-primary lg:text-7xl">
                <AnimatedNumber value={profile?.metrics?.fullStack} />+
              </span>
              <p className="text-xl font-medium text-dark/75 dark:text-light">
                Full-stack Projects
              </p>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center lg:items-end">
              <span className="inline-block text-3xl font-bold text-primary lg:text-7xl">
                <AnimatedNumber value={profile?.metrics?.experience} />+
              </span>
              <p className="text-xl font-medium text-dark/75 dark:text-light">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </section>
      <Skills skills={skills} />
      <Experience />
      <Footer />
    </main>
  );
};

export default About;
