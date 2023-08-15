import AnimatedNumber from "@/components/AnimatedNumber";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import TitleText from "@/components/TitleText";
import TypingText from "@/components/TypingText";
import { getProfile, getProjects, getSkills } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

const About = async () => {
  const profile = await getProfile();
  const skills = await getSkills();
  console.log(skills);

  return (
    <main className="paddings w-full">
      <section className="innerWidth yPaddings mx-auto">
        <TitleText text={"About Me"} styles="text-center mb-8" />
        <div className="yPaddings grid w-full grid-cols-12 gap-16">
          <div className="col-span-5 flex flex-col items-start justify-start">
            <TypingText
              text={"I'm a web developer from Myanmar"}
              styles={"font-semibold text-lg"}
            />
            <div className="flex flex-col gap-4 leading-relaxed text-dark">
              <PortableText
                value={profile?.about}
                components={{
                  marks: {
                    link: ({ value, children }) => (
                      <a
                        href={value?.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary underline"
                      >
                        {children}
                      </a>
                    ),
                  },
                }}
              />
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
      <Skills skills={skills} />
      <Experience />
    </main>
  );
};

export default About;
