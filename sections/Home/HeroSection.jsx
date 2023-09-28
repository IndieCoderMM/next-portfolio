import Image from "next/image";
import TypingText from "@/components/TypingText";
import { DownloadIcon } from "@/components/Icons";
import CustomButton from "@/components/CustomButton";
import RichText from "@/components/RichText";

const HeroSection = ({ profile }) => {
  return (
    <section className="paddings interWidth mx-auto flex flex-col items-center justify-center gap-8 2xl:flex-row">
      <div>
        <Image
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          src="/developer.svg"
          alt="coding"
          width={500}
          height={500}
          className="object-contain "
        />
      </div>

      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold leading-normal text-dark dark:text-light md:text-5xl lg:text-6xl">
          {profile?.bio}
        </h2>

        <TypingText
          text={"Hi, I'm Hein Thant. Nice to see you here!"}
          styles="whitespace-break-spaces text-lg md:text-3xl font-semibold leading-relaxed text-dark/90 dark:text-light/90"
        />

        <RichText value={profile?.description} styles={" md:text-xl"} />

        <div className="flex w-full flex-col items-center gap-8 pt-8 lg:flex-row">
          <a
            href={`${profile?.resumeURL}?dl=${profile.fullName.replaceAll(
              " ",
              "_",
            )}_CV.pdf`}
            className="w-full max-w-[250px] flex-1"
          >
            <CustomButton>
              <div className="flex w-full items-center justify-center gap-1 text-lg text-white">
                <div className="h-8 w-8">
                  <DownloadIcon />
                </div>
                <span className="text-lg font-semibold md:text-2xl">
                  Get My CV
                </span>
              </div>
            </CustomButton>
          </a>
          <a
            href="/projects"
            className="borderAnimate group relative flex w-full max-w-[250px] flex-1 items-center justify-center overflow-hidden px-4 py-2 text-lg font-medium tracking-wide underline transition-all duration-300 hover:tracking-tight hover:text-primary-800 hover:no-underline active:bg-primary active:text-white dark:hover:text-primaryDark dark:active:bg-primaryDark dark:active:text-dark md:px-8 md:py-4 md:text-2xl "
          >
            <svg>
              <rect
                x="0"
                y="0"
                fill="none"
                width="100%"
                height="100%"
                className="stroke-primary-800 dark:stroke-primaryDark"
              />
            </svg>
            See Projects
            <span className="-translate-x-full font-bold opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
              &#8594;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
