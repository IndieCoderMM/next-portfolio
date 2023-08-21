import Image from "next/image";

import { getProfile } from "@/sanity/sanity.query";

import TitleText from "@/components/TitleText";
import TypingText from "@/components/TypingText";
import { DownloadIcon } from "@/components/Icons";
import CustomButton from "@/components/CustomButton";
import Transition from "@/components/Transition";
import RichText from "@/components/RichText";

const Home = async () => {
  const profile = await getProfile();

  return (
    <main className="paddings">
      <Transition />
      <section className="interWidth mx-auto flex flex-col items-center justify-center xl:flex-row">
        <div className="order-last xl:order-first">
          <Image
            src="/welcome.svg"
            alt=""
            width={500}
            height={500}
            className=" h-auto w-full object-contain "
          />
        </div>

        <div className="flex-1 space-y-4">
          <TitleText text={profile?.bio} />

          <TypingText
            text={"Hi, I'm Hein Thant. Nice to see you here!"}
            styles="whitespace-break-spaces text-xl md:text-3xl font-semibold leading-relaxed text-dark/60 dark:text-light/70"
          />

          <RichText value={profile?.description} styles={" md:text-lg"} />

          <div className="flex w-full flex-col items-center gap-8 pt-8 lg:flex-row">
            <a
              href={`${profile?.resumeURL}?dl=${profile.fullName.replaceAll(
                " ",
                "_",
              )}_CV.pdf`}
              className="w-full max-w-[250px] flex-1"
            >
              <CustomButton>
                <div className="flex w-full items-center justify-center gap-2 text-lg font-semibold text-white md:text-2xl">
                  <div className="h-8 w-8">
                    <DownloadIcon />
                  </div>
                  <span>Get My CV</span>
                </div>
              </CustomButton>
            </a>
            <a
              href="/projects"
              className="borderAnimate group relative flex w-full max-w-[250px] flex-1 items-center justify-center overflow-hidden px-4 py-2 text-lg font-medium tracking-wide underline transition-all duration-300 hover:tracking-tight hover:text-primary hover:no-underline md:px-8 md:py-4 md:text-2xl "
            >
              <svg>
                <rect
                  x="0"
                  y="0"
                  fill="none"
                  width="100%"
                  height="100%"
                  className="stroke-primary dark:stroke-primary"
                />
              </svg>
              See Projects
              <span className="absolute right-0 translate-x-full font-bold transition-all duration-300 ease-in-out group-hover:translate-x-[-4px]">
                &#8594;
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
