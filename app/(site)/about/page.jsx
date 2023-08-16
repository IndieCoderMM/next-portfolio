import AnimatedNumber from "@/components/AnimatedNumber";
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
        <TitleText text={profile?.headline} styles="text-center mb-8" />
        <div className=" grid w-full gap-16 md:grid-cols-12">
          <div className="flex flex-col items-start justify-start md:col-span-6 lg:col-span-5">
            <TypingText
              text={"I'm a web developer from Myanmar"}
              styles={"font-semibold text-lg"}
            />
            <div className="flex flex-col gap-4 leading-relaxed text-dark">
              <RichText value={profile?.about} />
            </div>
          </div>
          <div className="shadow-400 col-span-6 hidden h-fit flex-col items-start justify-start rounded-2xl border-2 border-dark p-8 md:flex lg:col-span-4">
            <Image
              src={profile?.profileImage.url}
              width={500}
              height={500}
              alt="profile"
            />
          </div>
          {profile?.metrics && (
            <div className="col-span-full flex items-center justify-between lg:col-span-3 lg:flex-col lg:items-end">
              <div className="flex flex-1 flex-col items-center justify-center lg:items-end">
                <span className="inline-block text-3xl font-bold lg:text-7xl">
                  <AnimatedNumber value={profile?.metrics?.frontEnd} />+
                </span>
                <p className="text-xl font-medium text-dark/75 dark:text-light">
                  Front-end Projects
                </p>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center lg:items-end">
                <span className="inline-block text-3xl font-bold lg:text-7xl">
                  <AnimatedNumber value={profile?.metrics?.fullStack} />+
                </span>
                <p className="text-xl font-medium text-dark/75 dark:text-light">
                  Full-stack Projects
                </p>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center lg:items-end">
                <span className="inline-block text-3xl font-bold lg:text-7xl">
                  <AnimatedNumber value={profile?.metrics?.experience} />+
                </span>
                <p className="text-xl font-medium text-dark/75 dark:text-light">
                  Years of Experience
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
      <Skills skills={skills} />
      <Experience />
    </main>
  );
};

export default About;
