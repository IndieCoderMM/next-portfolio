import { cn } from "@/utils/cn";
import { PropsWithChildren } from "react";

const Heading = ({
  children,
  as = "h1",
  id,
  className,
}: PropsWithChildren<{
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  id?: string;
  className?: string;
}>) => {
  const HeadingElem = as;

  return (
    <HeadingElem
      id={id}
      className={cn(
        "font-heading leading-tighter text-text-main text-center text-3xl font-medium capitalize sm:leading-tight md:text-4xl lg:text-5xl",
        className,
      )}
    >
      {children}
    </HeadingElem>
  );
};

export default Heading;
