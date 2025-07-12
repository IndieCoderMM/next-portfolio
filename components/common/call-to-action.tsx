import { cn } from "@/utils/cn";
import Link from "next/link";
import { PropsWithChildren } from "react";
import Heading from "../common/heading";

type CTAProps = PropsWithChildren<{
  heading: string;
  href: string;
  buttonContent: React.ReactNode;
  description?: string;
  className?: string;
}>;

const CTA = ({
  heading,
  description,
  href,
  buttonContent,
  className,
  children,
}: CTAProps) => {
  return (
    <div
      className={cn(
        "inner-container relative mt-10 flex flex-col items-center gap-4 text-center lg:mt-24 lg:gap-8",
        className,
      )}
    >
      <Heading as="h3" className="text-fg text-xl md:text-2xl lg:text-4xl">
        {heading}
      </Heading>
      {description && <p className="section-label">{description}</p>}
      {children}
      <Link href={href} className="outline-button mt-2 rounded-full">
        {buttonContent}
      </Link>
    </div>
  );
};

export default CTA;
