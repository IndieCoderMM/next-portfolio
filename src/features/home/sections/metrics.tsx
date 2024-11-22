import AnimatedNumber from "@/components/common/animated-number";
import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { IconMessage2 } from "@tabler/icons-react";

const Metrics = () => {
  return (
    <SectionContainer className="w-full bg-gradient-to-b from-white via-white/80 to-transparent dark:bg-none">
      <div className="borderVr">
        <div className="text-center">
          <Heading as="h2">Proven Impact 📈 Through Numbers </Heading>
          <p className="mt-4 text-center text-lg text-gray-500">
            Here are some of the metrics that define my journey
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 text-center sm:gap-x-8 md:grid-cols-3 lg:mt-14">
          <div>
            <h3 className="text-7xl font-bold">
              <AnimatedNumber
                value={6}
                className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent"
              />
              <span className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
                {"+"}
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Apps launched
            </p>
            <p className="mt-0.5 text-base text-gray-500">In last 2 years</p>
          </div>

          <div>
            <h3 className="text-7xl font-bold">
              <AnimatedNumber
                value={10}
                className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent"
              />
              <span className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
                {"k+"}
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">Downloads</p>
            <p className="mt-0.5 text-base text-gray-500">
              Maintaining 4.5+ rating
            </p>
          </div>

          <div>
            <h3 className="text-7xl font-bold">
              <AnimatedNumber
                value={3420}
                className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent"
              />
              <span className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text text-transparent">
                {"+"}
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Codebase commits
            </p>
            <p className="mt-0.5 text-base text-gray-500">
              Working for your success
            </p>
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
