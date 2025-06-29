import { SectionContainer } from "@/components/layout/section";
import { techs } from "@/config/content/technology";
import { cn } from "@/utils/cn";
import React from "react";

const TechnologySection = () => {
  return (
    <SectionContainer className="text-text-main relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white/50 via-white/90 to-white py-10 dark:bg-none">
      <p className="mb-4 text-sm uppercase lg:mb-8 lg:text-xl">
        These are the technologies I work with
      </p>
      <div className="borderVr inner-container flex flex-shrink-0 flex-row flex-wrap items-center justify-center gap-6 sm:gap-8">
        {techs.map((tech) => {
          return (
            <Container key={tech.id} className="text-text-secondary">
              <div className="h-8 w-8 sm:h-10 sm:w-10">{tech.icon}</div>
              <p className="text-lg lg:text-xl">{tech.title}</p>
            </Container>
          );
        })}
      </div>
    </SectionContainer>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn(`flex items-center justify-center`, className)}>
      {children}
    </div>
  );
};

export default TechnologySection;
