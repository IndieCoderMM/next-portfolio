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

        <div className="w-full space-y-4">
          <TitleText text={"Hi, I'm Hein Thant"} styles="" />

          <p className="text-xl font-bold leading-relaxed">{profile?.bio}</p>

          <div className="text-lg font-medium leading-relaxed">
            <RichText value={profile?.description} />
          </div>

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
              className="btn px-4 py-2 text-lg font-bold text-dark/90 hover:text-primary dark:text-light md:px-8 md:text-2xl"
            >
              See Projects &#8594;
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
