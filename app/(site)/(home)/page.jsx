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
      <section className="interWidth mx-auto flex items-center justify-center">
        {profile && (
          <Image
            src="/welcome.svg"
            alt=""
            width={500}
            height={500}
            className="hidden lg:block"
          />
        )}
        <div className="space-y-4">
          <TitleText text={"Hello, I'm Hein Thant"} />
          <TypingText text={profile?.bio} styles={"font-medium text-lg"} />
          <p className="leading-relaxed md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            fugiat nihil mollitia totam consequuntur molestias ut voluptas quasi
            aliquid sunt!
          </p>
          <div className="flex items-center gap-8 pt-8">
            <a
              href={`${profile?.resumeURL}?dl=${profile.fullName.replaceAll(
                " ",
                "_",
              )}_CV.pdf`}
              className="w-full max-w-[200px]"
            >
              <CustomButton>
                <div className="flex items-center justify-center gap-2 text-lg text-white">
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
