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
        "text-gradient font-body leading-tighter text-center text-3xl font-medium tracking-tighter capitalize sm:leading-tight md:text-4xl md:font-bold lg:text-5xl",
        className,
      )}
    >
      {children}
    </HeadingElem>
  );
};

export default Heading;
