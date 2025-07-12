import { cn } from "@/utils/cn";
import { PropsWithChildren } from "react";

export const SectionContainer = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <section className={cn("w-full py-16 sm:py-20", className)}>
      <div className="max-container flex flex-col items-center px-2">
        {children}
      </div>
    </section>
  );
};
