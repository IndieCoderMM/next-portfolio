import { SectionContainer } from "@/components/layout/section";
import { ParallaxText } from "@/components/ui/parallax-text";
import { TechQueryResult } from "@/sanity.types";

const TechnologySection = ({ techs }: { techs: TechQueryResult }) => {
  return (
    <SectionContainer className="relative flex w-full items-center justify-center overflow-hidden">
      <div className="flex flex-col gap-2">
        <ParallaxText baseVelocity={-5}>
          <TechStack techs={techs} />
        </ParallaxText>
        <ParallaxText baseVelocity={5}>
          <TechStack techs={techs} />
        </ParallaxText>
        <ParallaxText baseVelocity={-5}>
          <TechStack techs={techs} />
        </ParallaxText>
      </div>
    </SectionContainer>
  );
};

const TechStack = ({ techs }: { techs: TechQueryResult }) => {
  return (
    <>
      {techs.map(
        (tech) =>
          !tech.hidden && (
            <p
              key={tech._id}
              className="text-fg/30 text-3xl font-semibold tracking-tighter uppercase md:text-7xl md:font-bold"
            >
              <span className="hover:text-fg">{tech.title}</span> •
            </p>
          ),
      )}
    </>
  );
};

export default TechnologySection;
