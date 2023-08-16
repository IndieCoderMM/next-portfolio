import Image from "next/image";

import { getProfile } from "@/sanity/sanity.query";

import TitleText from "@/components/TitleText";
import TypingText from "@/components/TypingText";
import { DownloadIcon } from "@/components/Icons";

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
              className="primaryBtn gap-2 border border-primary bg-light px-4 py-2 text-lg font-medium text-primary transition-colors duration-150 hover:bg-primary hover:text-white md:px-8 md:text-2xl"
            >
              <div className="h-8 w-8">
                <DownloadIcon />
              </div>
              <span>Get My CV</span>
            </a>
            <a
              href="/projects"
              className="btn bg-light px-4 py-2 text-lg font-bold text-dark/90 hover:text-primary md:px-8 md:text-2xl"
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
