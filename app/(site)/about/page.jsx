import AnimatedNumber from "@/components/AnimatedNumber";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { GridIcon } from "@/components/Icons";
import RichText from "@/components/RichText";
import TitleText from "@/components/TitleText";
import TypingText from "@/components/TypingText";
import { getProfile, getSkills } from "@/sanity/sanity.query";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Image from "next/image";

export const metadata = {
  title: "About Hein Thant Oo - Full Stack Developer | Portfolio",
};

const About = async () => {
  const profile = await getProfile();
  const skills = await getSkills();

  return (
    <>
      <main className="w-full">
        <section className="innerWidth xPaddings mx-auto pt-12 sm:pt-16">
          <TitleText text={profile?.headline} styles="text-center mb-12" />
          <TypingText
            text={"About Me"}
            styles={
              "font-semibold uppercase text-lg md:text-xl lg:text-2xl mb-2 lg:mb-8"
            }
          />
          <div className=" grid w-full gap-4 md:grid-cols-8 md:gap-8">
            <div className="col-span-full flex flex-col items-start justify-start pt-4 lg:col-span-6">
              <div className="flex flex-col gap-4 md:text-lg">
                <RichText value={profile?.about} />
              </div>
            </div>
            <div className="col-span-full flex flex-wrap items-start justify-between lg:col-span-2 lg:flex-col lg:items-end">
              <div className="flex flex-1 flex-col items-center justify-center lg:items-end">
                <span className="inline-block text-3xl font-bold text-primary-800 dark:text-primaryDark lg:text-7xl">
                  <AnimatedNumber value={profile?.metrics?.frontEnd} />+
                </span>
                <p className="text-center text-sm font-medium text-dark/75 dark:text-light md:text-xl">
                  Front-end Projects
                </p>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center lg:items-end">
                <span className="inline-block text-3xl font-bold text-primary-800 dark:text-primaryDark lg:text-7xl">
                  <AnimatedNumber value={profile?.metrics?.fullStack} />+
                </span>
                <p className="text-center text-sm font-medium text-dark/75 dark:text-light md:text-xl">
                  Full-stack Projects
                </p>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center lg:items-end">
                <span className="inline-block text-3xl font-bold text-primary-800 dark:text-primaryDark lg:text-7xl">
                  <AnimatedNumber value={profile?.metrics?.experience} />+
                </span>
                <p className="text-center text-sm font-medium text-dark/75 dark:text-light md:text-xl">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </section>
        <Image
          priority
          width={1000}
          height={100}
          src="/wave1.svg"
          alt=""
          className="mb-[-1px] w-full bg-transparent"
        />
        <Skills skills={skills} />
        <Image
          priority
          width={1000}
          height={150}
          src="/wave-down.svg"
          alt=""
          className="mt-[-1px] w-full bg-transparent"
        />
        <Experience
          experiences={profile?.experiences.sort(
            (a, b) => new Date(b.startDate) - new Date(a.startDate),
          )}
        />
        <CTA
          title={"Want to see my work?"}
          text={
            "Explore my portfolio to see the projects I've built. Get a firsthand look at my skills and creativity."
          }
          href={"/projects"}
          buttonText={"View Portfolio"}
          icon={GridIcon}
        />
      </main>
      <Footer />
    </>
  );
};

export default About;
