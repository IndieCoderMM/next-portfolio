import { SectionContainer } from "@/components/layout/section";
import { TechQueryResult } from "@/sanity.types";
import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

const TechnologySection = ({ techs }: { techs: TechQueryResult }) => {
  return (
    <SectionContainer className="text-text-main relative flex w-full items-center justify-center overflow-hidden bg-white dark:bg-transparent">
      <p className="mb-4 text-sm uppercase lg:mb-8 lg:text-xl">
        These are the technologies I work with
      </p>
      <div className="inner-container flex flex-shrink-0 flex-row flex-wrap items-center justify-center gap-6 sm:gap-8">
        {techs.map((tech) => {
          if (!tech.icon?.url || tech.hidden) return null;

          return (
            <Container key={tech._id} className="text-text-secondary/60 group">
              <div className="h-8 w-8 sm:h-10 sm:w-10">
                <Image
                  src={tech.icon?.url ?? ""}
                  alt={tech.icon?.alt ?? ""}
                  width={40}
                  height={40}
                  className="h-full w-full object-contain opacity-70 contrast-25 grayscale transition duration-300 group-hover:contrast-100 group-hover:grayscale-0"
                />
              </div>
              <p className="text-lg opacity-80 group-hover:opacity-100 lg:text-xl">
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
