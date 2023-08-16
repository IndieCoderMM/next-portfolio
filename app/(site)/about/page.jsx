import AnimatedNumber from "@/components/AnimatedNumber";
import Experience from "@/components/Experience";
import RichText from "@/components/RichText";
import TitleText from "@/components/TitleText";
import TypingText from "@/components/TypingText";
import { getProfile, getSkills } from "@/sanity/sanity.query";
import SkillSection from "@/sections/SkillSection";
import Image from "next/image";

export const metadata = {
  title: "Hein Thant | About Me",
};

const About = async () => {
  const profile = await getProfile();
  const skills = await getSkills();

  return (
    <main className="paddings w-full">
      <section className="innerWidth yPaddings mx-auto">
        <TitleText text={profile?.headline} styles="text-center mb-8" />
        <div className="yPaddings grid w-full grid-cols-12 gap-16">
          <div className="col-span-5 flex flex-col items-start justify-start">
            <TypingText
              text={"I'm a web developer from Myanmar"}
              styles={"font-semibold text-lg"}
            />
            <div className="flex flex-col gap-4 leading-relaxed text-dark">
              <RichText value={profile?.about} />
            </div>
          </div>
          <div className="col-span-4 flex flex-col items-start justify-start rounded-2xl border-2 border-dark bg-light p-8">
            <Image
              src={profile?.profileImage.url}
              width={500}
              height={500}
              alt="profile"
            />
          </div>
          {profile?.metrics && (
            <div className="col-span-3 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={profile?.metrics?.frontEnd} />+
                </span>
                <p className="text-xl font-medium text-dark/75">
                  Front-end Projects
                </p>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={profile?.metrics?.fullStack} />+
                </span>
                <p className="text-xl font-medium text-dark/75">
                  Full-stack Projects
                </p>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={profile?.metrics?.experience} />+
                </span>
                <p className="text-xl font-medium text-dark/75">
                  Years of Experience
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
      <SkillSection skills={skills} />
      <Experience />
    </main>
  );
};

export default About;
