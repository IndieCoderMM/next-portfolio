import AnimatedNumber from "@/components/common/animated-number";
import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { ProfileQueryResult } from "@/sanity.types";
import { IconMessage2 } from "@tabler/icons-react";

type Metrics = NonNullable<ProfileQueryResult>["metrics"] | undefined;

const Metrics = ({ metrics }: { metrics: Metrics }) => {
  let { apps, websites, users, years } = metrics ?? {};

  return (
    <SectionContainer className="w-full bg-gradient-to-b from-white via-white/80 to-transparent dark:bg-none">
      <div className="borderVr">
        <div className="text-center">
          <Heading as="h2">Proven Impact 📈 Through Numbers </Heading>
          <p className="mt-4 text-center text-lg">
            Here are some of the metrics that define my journey
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 text-center sm:gap-x-8 md:grid-cols-3 lg:mt-14">
          <div>
            <h3 className="text-7xl font-bold">
              <AnimatedNumber
                value={apps ?? 0}
                className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent"
              />
              <span className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
                {"+"}
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium">Apps launched</p>
            <p className="mt-0.5 text-base">In last {years ?? 0} years</p>
          </div>

          <div>
            <h3 className="text-7xl font-bold">
              <AnimatedNumber
                value={websites ?? 0}
                className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent"
              />
              <span className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
                {"+"}
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium">Projects</p>
            <p className="mt-0.5 text-base">Completed and delivered</p>
          </div>

          <div>
            <h3 className="text-7xl font-bold">
              <AnimatedNumber
                value={users ?? 0}
                className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent"
              />
              <span className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
                {"+"}
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium">Satisfied users</p>
            <p className="mt-0.5 text-base">Across all projects</p>
          </div>
        </div>

        <div className="inner-container mt-10 flex flex-col items-center gap-4 text-center lg:mt-24 lg:gap-8">
          <Heading as="h3" className="text-lg md:text-xl lg:text-2xl">
            Interested in collaborating with me?
          </Heading>
          <p className="text-md ld:text-xl font-medium">
            I can translate these numbers into your project&apos;s success.
          </p>
          <button type="button" className="outline-button mt-8 rounded-full">
            <IconMessage2 />
            <span>Let's Chat</span>
          </button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Metrics;
