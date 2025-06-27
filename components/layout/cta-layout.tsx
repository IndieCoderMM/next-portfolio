import { cn } from "@/utils/cn";
import { PropsWithChildren } from "react";

const CtaLayout = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <div
      className={cn(
        "inner-container mt-20 flex flex-col items-center gap-4 text-center lg:mt-32 lg:gap-8",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default CtaLayout;
