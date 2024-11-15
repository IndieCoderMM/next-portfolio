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
        "text-center font-nunito text-xl font-bold capitalize text-neutral-800 dark:text-neutral-100 md:text-3xl lg:text-5xl",
        className,
      )}
    >
      {children}
    </HeadingElem>
  );
};

export default Heading;
