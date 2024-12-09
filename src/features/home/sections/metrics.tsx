import AnimatedNumber from "@/components/common/animated-number";
import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import Socials from "@/features/contact/components/socials";
import { ProfileQueryResult } from "@/sanity.types";
import { IconBriefcase } from "@tabler/icons-react";

type Metrics = NonNullable<ProfileQueryResult>["metrics"] | undefined;

const Metrics = ({ metrics }: { metrics: Metrics }) => {
  let { apps, websites, users, years } = metrics ?? {};

  return (
    <SectionContainer className="w-full bg-gradient-to-b from-white via-white/80 to-transparent dark:bg-none">
      <div className="borderVr">
        <div className="mx-auto w-full text-center md:w-[80%]">
          <Heading as="h2">
            My Code compiled into
            <br />
            these Numbers{" "}
            <span className="inline-block -rotate-6 transform shadow-sm">
              📈
            </span>
          </Heading>
        </div>

        <div className="mt-8 grid grid-cols-2 place-items-center gap-8 text-center sm:grid-cols-3 sm:gap-x-8 lg:mt-14">
          <div>
            <h3 className="text-4xl font-bold sm:text-6xl md:text-7xl">
              <AnimatedNumber
                value={apps ?? 0}
                className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent"
              />
              <span className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
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
                className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent"
              />
              <span className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
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
                className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent"
              />
              <span className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
                {"K+"}
              </span>
            </h3>
            <p className="mt-4 font-medium sm:text-xl">Satisfied users</p>
            <p className="mt-0.5 text-xs sm:text-base">Across all projects</p>
          </div>
        </div>

        <div className="inner-container mt-10 flex flex-col items-center gap-4 text-center lg:mt-24 lg:gap-8">
          <Heading as="h3" className="text-xl md:text-2xl lg:text-4xl">
            Want to work together?
          </Heading>
          <p className="text-lg font-medium md:text-xl lg:text-2xl">
            Drop me a message and let’s see how we can build something great
            together.
          </p>
          <Socials />
          <button type="button" className="outline-button mt-2 rounded-full">
            <IconBriefcase />
            <span>Let's Talk Success</span>
          </button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Metrics;
