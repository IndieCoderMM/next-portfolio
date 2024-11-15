import { SectionContainer } from "@/components/layout/section";
import { cn } from "@/utils/cn";
import React from "react";

const TechnologySection = ({ techs }: { techs: Technology[] }) => {
  return (
    <SectionContainer className="relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white/50 via-white/90 to-white pt-0">
      <div className="max-container borderVr flex flex-shrink-0 flex-row flex-wrap items-center justify-center gap-8 p-8">
        {techs.map((tech) => {
          return (
            <Container key={tech.id} className="text-neutral-400">
              <div className="h-10 w-10">{tech.icon}</div>
              <p className="text-lg font-semibold lg:text-2xl">{tech.title}</p>
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
    <div
      className={cn(
        `flex items-center justify-center rounded-full bg-[rgba(248,248,248,0.01)]`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default TechnologySection;
