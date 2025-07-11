import AnimatedNumber from "@/components/common/animated-number";
import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { homepageContent } from "@/config/content/homepage";
import Socials from "@/features/contact/components/socials";
import { ProfileQueryResult } from "@/sanity.types";
import { IconBriefcase } from "@tabler/icons-react";
import Link from "next/link";

type Metrics = NonNullable<ProfileQueryResult>["metrics"] | undefined;

const Metrics = ({ metrics }: { metrics: Metrics }) => {
  let { apps, websites, users, years } = metrics ?? {};

  return (
    <SectionContainer className="relative w-full">
      <ShootingStars />
      <div className="relative">
        <div className="mx-auto w-full text-center md:w-[80%]">
          <Heading as="h2">{homepageContent.metricHeading}</Heading>
        </div>

        <div className="text-text-secondary relative mt-8 grid grid-cols-2 place-items-center gap-8 text-center sm:grid-cols-3 sm:gap-x-8 lg:mt-14">
          <div>
            <h3 className="text-4xl font-bold sm:text-6xl md:text-7xl">
              <AnimatedNumber
                value={apps ?? 0}
                className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
              />
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                {"+"}
              </span>
            </h3>
            <p className="mt-4 font-medium sm:text-xl">Apps launched</p>
            <p className="mt-0.5 text-xs sm:text-base">
              In last {years ?? 0} years
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold sm:text-6xl md:text-7xl">
              <AnimatedNumber
                value={websites ?? 0}
                className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
              />
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                {"+"}
              </span>
            </h3>
            <p className="mt-4 font-medium sm:text-xl">Projects</p>
            <p className="mt-0.5 text-xs sm:text-base">
              Completed and delivered
            </p>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-4xl font-bold sm:text-6xl md:text-7xl">
              <AnimatedNumber
                value={users ?? 0}
                className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent"
              />
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                {"K+"}
              </span>
            </h3>
            <p className="mt-4 font-medium sm:text-xl">Satisfied users</p>
            <p className="mt-0.5 text-xs sm:text-base">Across all projects</p>
          </div>
        </div>

        <div className="inner-container relative mt-10 flex flex-col items-center gap-4 text-center lg:mt-24 lg:gap-8">
          <Heading
            as="h3"
            className="text-text-main text-xl md:text-2xl lg:text-4xl"
          >
            Want to work together?
          </Heading>
          <p className="cta-desc">
            Drop me a message and let’s see how we can build something great
            together.
          </p>
          <Socials />
          <Link href="/contact" className="outline-button mt-2 rounded-full">
            <IconBriefcase />
            <span>Let's Talk Success</span>
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Metrics;
