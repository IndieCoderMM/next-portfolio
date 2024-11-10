import { cn } from "@/utils/cn";
import React from "react";

const TechnologySection = ({ techs }: { techs: Technology[] }) => {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden border-t-0">
      <div className="interWidth borderVr flex w-full flex-shrink-0 flex-row flex-wrap items-center justify-center gap-8 p-8">
        {techs.map((tech) => {
          return (
            <Container key={tech.id} className="text-neutral-400">
              <div className="h-10 w-10">{tech.icon}</div>
              <p className="text-lg lg:text-2xl">{tech.title}</p>
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
        `flex items-center justify-center rounded-full bg-[rgba(248,248,248,0.01)]`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default TechnologySection;
