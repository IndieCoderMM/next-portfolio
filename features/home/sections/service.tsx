import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { homepageContent } from "@/config/content/homepage";
import { cn } from "@/utils/cn";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ServiceSection = ({ services }: { services: Service[] }) => {
  return (
    <SectionContainer className="bg-white dark:bg-transparent">
      <div className="borderVr mb-10">
        <div className="section-badge">
          <span>Services</span>
        </div>
        <Heading as="h2">{homepageContent.serviceHeading}</Heading>
      </div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Service key={service.title} {...service} index={index} />
        ))}
      </div>
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
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "group/feature relative flex flex-col py-10 dark:border-neutral-800",
        (index === 0 || index === 3) && "border-0 dark:border-neutral-800",
        index < 3 && "border-0 dark:border-neutral-800",
        (index % 3 === 0 || index % 3 === 1) && "border-0",
      )}
    >
      {index < 3 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      {index >= 3 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      <div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-200">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary dark:bg-neutral-700 dark:group-hover/feature:bg-primaryDark" />
        <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-sm px-10 text-sm text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </div>
  );
};
