import AnimatedNumber from "@/components/common/animated-number";
import CTA from "@/components/common/call-to-action";
import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { homepageContent } from "@/config/content/homepage";
import Socials from "@/features/contact/components/socials";
import { ProfileQueryResult } from "@/sanity.types";
import { IconBriefcase } from "@tabler/icons-react";

type Metrics = NonNullable<ProfileQueryResult>["metrics"] | undefined;

const Metrics = ({ metrics }: { metrics: Metrics }) => {
  let { apps, websites, users, years } = metrics ?? {};

  return (
    <SectionContainer className="relative w-full">
      <div className="relative">
        <div className="mx-auto w-full px-4 text-center md:w-[80%]">
          <Heading as="h2">{homepageContent.metricHeading}</Heading>
        </div>

        <div className="text-fg relative my-8 grid grid-cols-3 gap-8 text-center sm:place-items-center sm:gap-x-8 lg:my-14">
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

          <div className="col-span-1">
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

        <CTA
          heading="Want to work together?"
          description="Drop me a message and let’s see how we can build something great
            together."
          href="/content"
          className="mt-20"
          buttonContent={
            <>
              <IconBriefcase />
              <span>Let's Talk Success</span>
            </>
          }
        >
          <Socials />
        </CTA>
      </div>
    </SectionContainer>
  );
};

export default Metrics;
