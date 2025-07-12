import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { SlideIn } from "@/components/ui/transitions";
import { homepage } from "@/config/content/pages";
import { ServicesQueryResult } from "@/sanity.types";
import { cn } from "@/utils/cn";
import { IconBriefcase } from "@tabler/icons-react";
import Image from "next/image";

const ServiceSection = ({ services }: { services: ServicesQueryResult }) => {
  return (
    <SectionContainer className="sm:py-16">
      <div className="mb-10 w-full px-4">
        <div className="section-badge">
          <IconBriefcase className="mr-2" />
          <span>Services</span>
        </div>
        <Heading as="h2">{homepage.serviceHeading}</Heading>
      </div>
      {services.length > 0 ? (
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services?.map((service, index) => (
            <SlideIn key={service._id}>
              <Service key={service._id} {...service} index={index} />
            </SlideIn>
          ))}
        </div>
      ) : (
        <div className="flex h-96 items-center justify-center">
          <p className="text-fg text-lg">
            Add services to your portfolio to showcase your skills and
            offerings.
          </p>
        </div>
      )}
    </SectionContainer>
  );
};

export default ServiceSection;

const Service = ({
  title,
  description,
  icon,
  index,
}: {
  title: string | null;
  description: string | null;
  icon: {
    alt: string | null;
    url: string | null;
  } | null;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "group/feature relative flex flex-col border-neutral-800 py-10",
        (index === 0 || index === 3) && "border-0 border-neutral-800",
        index < 3 && "border-0 border-neutral-800",
        (index % 3 === 0 || index % 3 === 1) && "border-0",
      )}
    >
      {index < 3 && (
        <div className="from-primary/10 pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
      )}
      {index >= 3 && (
        <div className="from-primary/10 pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
      )}
      <div className="relative z-10 mb-4 px-10 text-neutral-200">
        {icon?.url ? (
          <div className="relative h-8 w-8">
            <Image
              src={icon.url}
              alt={icon.alt ?? title ?? "Service"}
              width={32}
              height={32}
              className="absolute inset-0 h-8 w-8 object-contain opacity-70 contrast-25 grayscale transition duration-300 group-hover/feature:contrast-0 group-hover/feature:grayscale-0"
            />
          </div>
        ) : (
          <IconBriefcase className="h-8 w-8 text-neutral-200" />
        )}
      </div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="group-hover/feature:bg-primary absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8" />
        <span className="group-hover/feature:text-primary inline-block text-lg text-neutral-100 transition duration-200 group-hover/feature:translate-x-2 md:text-xl lg:text-2xl">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-sm px-10 text-sm text-neutral-300">
        {description}
      </p>
    </div>
  );
};
