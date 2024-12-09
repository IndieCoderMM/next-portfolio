import { cn } from "@/utils/cn";
import { PropsWithChildren } from "react";

const Heading = ({
  children,
  as = "h1",
  className,
}: PropsWithChildren<{
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}>) => {
  const HeadingElem = as;

  return (
    <HeadingElem
      className={cn(
        "text-center font-heading text-3xl font-bold capitalize leading-tight text-neutral-800 dark:text-neutral-100 sm:leading-loose md:text-4xl lg:text-5xl",
        className,
      )}
    >
      {children}
    </HeadingElem>
  );
};

export default Heading;
