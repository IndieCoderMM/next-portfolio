import Image from "next/image";

import { getProfile } from "@/sanity/sanity.query";

import TitleText from "@/components/TitleText";
import TypingText from "@/components/TypingText";
import { DownloadIcon } from "@/components/Icons";
import CustomButton from "@/components/CustomButton";

const Home = async () => {
  const profile = await getProfile();

  return (
    <main className="paddings">
      <section className="interWidth mx-auto flex flex-col items-center justify-center md:flex-row">
        {profile && (
          <Image
            src="/welcome.svg"
            alt=""
            width={500}
            height={500}
            className="order-last object-cover md:order-first"
          />
        )}
        <div className="w-full space-y-4">
          <TitleText
            text={"Hello, I'm Hein Thant"}
            styles="text-center md:text-left"
          />

          <TypingText
            text={profile?.bio}
            styles={"font-medium text-sm md:text-xl text-center md:text-left"}
          />

          <p className="text-center leading-relaxed md:text-left md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            fugiat nihil mollitia totam consequuntur molestias ut voluptas quasi
            aliquid sunt!
          </p>
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
