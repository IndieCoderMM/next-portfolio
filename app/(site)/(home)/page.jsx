import Image from "next/image";

import { getProfile } from "@/sanity/sanity.query";

import TitleText from "@/components/TitleText";
import TypingText from "@/components/TypingText";

const Home = async () => {
  const profile = await getProfile();

  return (
    <main className="paddings min-h-full">
      <section className="interWidth mx-auto flex items-center justify-center">
        {profile && (
          <Image
            src="/welcome.svg"
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
          <div className="flex items-center gap-8">
            {/* Create link to download resume */}
            <a
              href="/"
              className="blockBtn bg-light px-4 py-2 text-lg font-bold text-dark md:px-8 md:text-2xl"
            >
              Resume
            </a>
            {/* Create link to contact page */}
            <a
              href="/"
              className="blockBtn bg-light px-4 py-2 text-lg font-bold text-dark md:px-8 md:text-2xl"
            >
              Contact
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
