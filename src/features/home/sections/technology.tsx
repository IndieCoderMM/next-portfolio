import { technology } from "@/config/technology";
import { cn } from "@/utils/cn";
import React from "react";

const TechnologySection = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden border-t-0">
      <div className="interWidth borderVr flex w-full flex-shrink-0 flex-row items-center justify-center gap-8 p-8">
        {technology.map((tech) => {
          return (
            <Container key={tech.id} className="text-neutral-400">
              {tech.icon}
            </Container>
          );
        })}
      </div>
    </div>
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
        `flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(248,248,248,0.01)]`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default TechnologySection;
