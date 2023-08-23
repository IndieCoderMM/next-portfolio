import AnimatedNumber from "@/components/AnimatedNumber";
import Footer from "@/components/Footer";
import { GridIcon } from "@/components/Icons";
import RichText from "@/components/RichText";
import TitleText from "@/components/TitleText";
import Transition from "@/components/Transition";
import TypingText from "@/components/TypingText";
import { getProfile, getSkills } from "@/sanity/sanity.query";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";

export const metadata = {
  title: "About Hein Thant Oo - Full Stack Developer | Portfolio",
};

const About = async () => {
  const profile = await getProfile();
  const skills = await getSkills();

  return (
    <main className="paddings w-full">
      <Transition />
      <section className="innerWidth mx-auto">
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
          {/* <div className="col-span-full hidden flex-col items-center gap-4 self-center lg:col-span-3 lg:flex xl:col-span-2">
            <div className="flex w-full flex-col items-center justify-center rounded-2xl border-2 border-dark bg-light/60 shadow-400 ">
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
                className="btn w-full gap-2 bg-white px-4 py-3 text-lg font-semibold text-dark  md:px-8 md:text-xl"
              >
                <span>My Resume</span>
              </a>
              <a
                href={profile?.socials.github}
                target="_blank"
                rel="noreferrer"
                className="btn w-full gap-2 bg-white px-4 py-3 text-lg font-semibold text-dark  md:px-8 md:text-xl"
              >
                <span>GitHub</span>
              </a>
              <a
                href={`mailto:${profile?.email}`}
                target="_blank"
                rel="noreferrer"
                className="btn w-full gap-2 bg-white px-4 py-3 text-lg font-semibold text-dark  md:px-8 md:text-xl"
              >
                <span>Email</span>
              </a>
              <a
                href={profile?.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn w-full gap-2 bg-white px-4 py-3 text-lg font-semibold text-dark  md:px-8 md:text-xl"
              >
                <span>LinkedIn</span>
              </a>
            </div>
          </div> */}

          <div className="col-span-full flex flex-wrap items-start justify-between lg:col-span-2 lg:flex-col lg:items-end">
            <div className="flex flex-1 flex-col items-center justify-center lg:items-end">
              <span className="dark:text-primaryDark inline-block text-3xl font-bold text-primary lg:text-7xl">
                <AnimatedNumber value={profile?.metrics?.frontEnd} />+
              </span>
              <p className="text-center text-sm font-medium text-dark/75 dark:text-light md:text-xl">
                Front-end Projects
              </p>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center lg:items-end">
              <span className="dark:text-primaryDark inline-block text-3xl font-bold text-primary lg:text-7xl">
                <AnimatedNumber value={profile?.metrics?.fullStack} />+
              </span>
              <p className="text-center text-sm font-medium text-dark/75 dark:text-light md:text-xl">
                Full-stack Projects
              </p>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center lg:items-end">
              <span className="dark:text-primaryDark inline-block text-3xl font-bold text-primary lg:text-7xl">
                <AnimatedNumber value={profile?.metrics?.experience} />+
              </span>
              <p className="text-center text-sm font-medium text-dark/75 dark:text-light md:text-xl">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </section>
      <Skills skills={skills} />
      <Experience
        experiences={profile?.experiences.sort(
          (a, b) => new Date(b.startDate) - new Date(a.startDate),
        )}
      />
      <section className="innerWidth mx-auto">
        <div className="interWidth yPaddings mx-auto flex flex-col items-center justify-center gap-4">
          <h3 className="text-center text-2xl font-bold md:text-3xl">
            Want to see my work?
          </h3>
          <p className="text-center text-lg font-medium">
            Explore my portfolio to see the projects I've built. Get a firsthand
            look at my skills and creativity.
          </p>
          <a href="/projects" className="outlineBtn mt-8 rounded-full">
            <div className="h-8 w-8">
              <GridIcon />
            </div>
            <span>View Portfolio</span>
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;
