import { SectionContainer } from "@/components/layout/section";
import { cn } from "@/utils/cn";
import React from "react";

const TechnologySection = ({ techs }: { techs: Technology[] }) => {
  return (
    <SectionContainer className="relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white/50 via-white/90 to-white py-10 dark:bg-none">
      <p className="mb-4 text-sm uppercase text-neutral-400 lg:mb-8 lg:text-xl">
        These are the technologies I work with
      </p>
      <div className="borderVr inner-container flex flex-shrink-0 flex-row flex-wrap items-center justify-center gap-6 sm:gap-8">
        {techs.map((tech) => {
          return (
            <Container key={tech.id} className="text-neutral-400">
              <div className="h-8 w-8 sm:h-10 sm:w-10">{tech.icon}</div>
              <p className="font-heading text-lg font-semibold lg:text-2xl">
                {tech.title}
              </p>
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
