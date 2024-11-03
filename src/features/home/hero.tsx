import Image from "next/image";
import { PrimaryButton } from "@/components/common";

const HeroSection = ({ profile }: { profile: Profile }) => {
  return (
    <section className="paddings interWidth mx-auto flex flex-col items-center justify-center gap-8 2xl:flex-row">
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold leading-normal text-dark dark:text-light md:text-5xl lg:text-6xl">
          {profile?.bio}
        </h2>

        <p className="text-yellow-500">
          Hi, I'm Hein Thant. Nice to see you here!
          {profile?.description}
        </p>

        <div className="flex w-full flex-col items-center gap-8 pt-8 lg:flex-row">
          <a
            href={`${profile?.resumeURL}?dl=${profile.fullName.replaceAll(
              " ",
              "_",
            )}_CV.pdf`}
            className="w-full max-w-[250px] flex-1"
          >
            <PrimaryButton>
              <div className="flex w-full items-center justify-center gap-1 text-lg text-white">
                <div className="h-8 w-8"></div>
                <span className="text-lg font-semibold md:text-2xl">
                  Get My CV
                </span>
              </div>
            </PrimaryButton>
          </a>
          <a
            href="/projects"
            className="borderAnimate group relative flex w-full max-w-[250px] flex-1 items-center justify-center overflow-hidden px-4 py-2 text-lg font-medium tracking-wide underline transition-all duration-300 hover:tracking-tight hover:text-primary-800 hover:no-underline active:bg-primary active:text-white dark:hover:text-primaryDark dark:active:bg-primaryDark dark:active:text-dark md:px-8 md:py-4 md:text-2xl "
          >
            See Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
