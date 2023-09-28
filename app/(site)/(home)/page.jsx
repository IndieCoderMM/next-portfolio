import Image from "next/image";

import { getProfile } from "@/sanity/sanity.query";

import Services from "@/sections/Services";
import HeroSection from "@/sections/Home/HeroSection";
import HomeFooter from "@/sections/Home/HomeFooter";

export const revalidate = 60 * 60 * 24; // 24 hours

const Home = async () => {
  const profile = await getProfile();
  const { email, socials } = profile;

  return (
    <>
      <main className="w-full">
        <HeroSection profile={profile} />
        <Image
          priority
          width={1000}
          height={150}
          src="/wave.svg"
          alt=""
          className="mb-[-1px] w-full bg-transparent"
        />
        <Services />
        <Image
          priority
          width={1000}
          height={150}
          src="/wave-down.svg"
          alt=""
          className="mt-[-1px] w-full bg-transparent"
        />
        <HomeFooter
          socials={socials}
          email={email}
          resumeURL={profile?.resumeURL}
        />
      </main>
    </>
  );
};

export default Home;
