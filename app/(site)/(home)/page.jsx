import Image from "next/image";

import { getProfile } from "@/sanity/sanity.query";

import TypingText from "@/components/TypingText";
import {
  BlogSmallIcon,
  DownloadIcon,
  EmailOutlineIcon,
  GitHubOutlineIcon,
  LinkedInOutlineIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import CustomButton from "@/components/CustomButton";
import RichText from "@/components/RichText";
import TitleText from "@/components/TitleText";
import Services from "@/sections/Services";

const Home = async () => {
  const profile = await getProfile();
  const { email, socials } = profile;

  return (
    <>
      <main className="">
        <section className="paddings interWidth mx-auto flex flex-col items-center justify-center 2xl:flex-row">
          <div className="">
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

          <div className="flex-1 space-y-4 px-8 py-4">
            <h2 className="text-3xl font-bold leading-normal text-dark dark:text-light md:text-5xl lg:text-6xl">
              {profile?.bio}
            </h2>

            <TypingText
              text={"Hi, I'm Hein Thant. Nice to see you here!"}
              styles="whitespace-break-spaces text-xl md:text-3xl font-semibold leading-relaxed text-dark/90 dark:text-light/90"
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
                  <div className="flex w-full items-center justify-center gap-2 text-lg font-semibold text-light md:text-2xl">
                    <div className="h-8 w-8">
                      <DownloadIcon />
                    </div>
                    <span>Get My CV</span>
                  </div>
                </CustomButton>
              </a>
              <a
                href="/projects"
                className="borderAnimate group relative flex w-full max-w-[250px] flex-1 items-center justify-center overflow-hidden px-4 py-2 text-lg font-medium tracking-wide underline transition-all duration-300 hover:tracking-tight hover:text-primary hover:no-underline active:bg-primary active:text-white dark:hover:text-primaryDark dark:active:bg-primaryDark dark:active:text-dark md:px-8 md:py-4 md:text-2xl "
              >
                <svg>
                  <rect
                    x="0"
                    y="0"
                    fill="none"
                    width="100%"
                    height="100%"
                    className="stroke-primary dark:stroke-primaryDark"
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
        <Image
          priority
          width={1000}
          height={150}
          src="/wave.svg"
          alt=""
          className="w-full bg-transparent object-cover"
        />
        <Services />
        <Image
          priority
          width={1000}
          height={150}
          src="/wave-down.svg"
          alt=""
          className="w-full bg-transparent"
        />
      </main>
      <footer className="xPaddings pb-8 sm:pb-12">
        <div className="interWidth mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between">
          <p>Crafted by me &copy; {new Date().getFullYear()}</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={socials.github}
              aria-label="github"
              className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white dark:border-primaryDark dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-dark"
            >
              <GitHubOutlineIcon />
            </a>
            <a
              href={socials.linkedin}
              aria-label="linkedin"
              className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white dark:border-primaryDark dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-dark"
            >
              <LinkedInOutlineIcon />
            </a>
            <a
              href={`mailto:${email}`}
              aria-label="email"
              className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white dark:border-primaryDark dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-dark"
            >
              <EmailOutlineIcon />
            </a>
            <a
              href={socials.blog}
              aria-label="blog"
              className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white dark:border-primaryDark dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-dark"
            >
              <BlogSmallIcon />
            </a>
            <a
              href={socials.whatsapp}
              aria-label="whatsapp"
              className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white dark:border-primaryDark dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-dark"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
