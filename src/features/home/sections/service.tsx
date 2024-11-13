import Heading from "@/components/common/heading";
import { HighlightText } from "@/components/ui/highlight-text";
import { cn } from "@/utils/cn";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ServiceSection = ({
  heading,
  services,
}: {
  heading: string;
  services: Service[];
}) => {
  return (
    <section className="borderHr w-full">
      <div className="interWidth relative z-10 mx-auto">
        <div className="borderVr py-10">
          <Heading
            as="h2"
            className="text-center font-bold capitalize text-neutral-800 dark:text-neutral-100"
          >
            Skills you can rely on
          </Heading>
          <p className="mt-4 text-center text-lg text-neutral-800 dark:text-neutral-100 md:text-xl lg:mt-10 lg:text-2xl">
            See what I offer and let&apos;s{" "}
            <HighlightText>build something great together</HighlightText>
          </p>
        </div>
        <div className="shadow-blur relative z-10 grid grid-cols-1 bg-white md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Service key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
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
        "group/feature relative flex flex-col py-10 dark:border-neutral-800 lg:border-r",
        (index === 0 || index === 3) && "dark:border-neutral-800 lg:border-l",
        index < 3 && "dark:border-neutral-800 lg:border-b",
      )}
    >
      {index < 3 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      {index >= 3 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      <div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500 dark:bg-neutral-700" />
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
