import Heading from "@/components/common/heading";
import { Tabs } from "@/components/ui/tabs";
import { cn } from "@/utils/cn";
import {
  IconBrandAppstore,
  IconBrandGooglePlay,
  IconBrandOpenai,
  IconChartBar,
  IconCode,
  IconDeviceMobile,
  IconNote,
  IconRocket,
} from "@tabler/icons-react";
import Image from "next/image";
import { PropsWithChildren } from "react";

const DummyContent = () => {
  return (
    <Image
      src="https://assets.aceternity.com/templates/startup-1.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="absolute inset-x-0 -bottom-10 mx-auto h-[60%] w-[90%] rounded-xl object-cover object-left-top md:h-[90%]"
    />
  );
};

const Chip = ({
  text,
  icon: Icon,
  color,
  className,
}: {
  text: string;
  color: "green" | "blue" | "red";
  icon: JSX.ElementType;
  className?: string;
}) => {
  const bgColor = {
    green: "bg-green-100 dark:bg-green-900",
    blue: "bg-blue-100 dark:bg-blue-900",
    red: "bg-red-100 dark:bg-red-900",
  };
  const textColor = {
    green: "text-green-700 dark:text-green-200",
    blue: "text-blue-700 dark:text-blue-200",
    red: "text-red-700 dark:text-red-200",
  };
  const iconColor = {
    green: "text-green-500 dark:text-green-200",
    blue: "text-blue-500 dark:text-blue-200",
    red: "text-red-500 dark:text-red-200",
  };

  return (
    <div
      className={cn(
        `flex items-center gap-1 rounded-full px-4 py-1.5`,
        bgColor[color],
        textColor[color],
        className,
      )}
    >
      <span>{text}</span>
      <Icon className={cn(iconColor[color])} />
    </div>
  );
};

const TabContent = ({
  title,
  children,
}: PropsWithChildren<{ title: string }>) => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg border border-light bg-white p-10 shadow-sm dark:border-dark dark:bg-dark">
      <div className="flex items-center">
        <Heading
          as={"h2"}
          className="text-left font-semibold text-primary dark:text-primaryDark lg:text-3xl"
        >
          {title}
        </Heading>
      </div>
      {children}
    </div>
  );
};

const Button = ({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) => {
  return (
    <button className="border-text flex items-center gap-[17px] rounded-md border bg-white px-6 py-2 transition-colors duration-300 hover:brightness-110 dark:bg-dark">
      {icon}
      <div className="flex flex-col items-start">
        <span className="text-text text-sm font-medium">{subtitle}</span>
        <p className="mb-2 text-lg font-medium leading-[20px]">{title}</p>
      </div>
    </button>
  );
};

const projectTabs = [
  {
    title: "Mobile App",
    value: "mobile-app",
    content: (
      <TabContent title="Easy2Success">
        <div className="group grid grid-cols-12">
          <div className="col-span-5 pt-10">
            <p className="mb-4 leading-loose text-black dark:text-white lg:text-3xl">
              AI-Powered Personal Development & E-Learning App{" "}
              <span className="text-neutral-700 dark:text-neutral-200">
                empowering users through personalized learning and development
                plans.
              </span>
            </p>
            <div className="mb-8 flex items-center gap-4">
              <Chip text="AI" icon={IconBrandOpenai} color="green" />
              <Chip text="Mobile" icon={IconDeviceMobile} color="blue" />
              <Chip text="Productivity" icon={IconChartBar} color="red" />
            </div>
            <div className="flex">
              <div className="mt-auto flex w-fit flex-col gap-4">
                <Button
                  icon={<IconBrandGooglePlay className="h-8 w-8" />}
                  subtitle="Get it on"
                  title={"Google Play"}
                />
                <Button
                  icon={<IconBrandAppstore className="h-8 w-8" />}
                  subtitle="Download on the"
                  title={"App Store"}
                />
              </div>
              <div className="ml-4 flex items-center self-end">
                <a
                  href="/projects/0"
                  className="flex items-center p-2 text-lg text-primary opacity-0 transition duration-500 hover:underline group-hover:opacity-100 lg:text-xl"
                >
                  <IconNote className="text-primary" />
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-7">
            <Image
              src="/screenshots/e2s.webp"
              alt="dummy image"
              width="900"
              height="1600"
              className="object-cover object-left-top"
            />
          </div>
        </div>
      </TabContent>
    ),
  },
  {
    title: "Product Landing",
    value: "web-app",
    content: (
      <TabContent title="Metaversus">
        <div className="group grid grid-cols-12">
          <div className="col-span-5 pt-10">
            <p className="mb-4 leading-loose text-black dark:text-white lg:text-3xl">
              Modern Product Landing Page{" "}
              <span className="text-neutral-700 dark:text-neutral-100">
                with interactive 3D animations and parallax effects.
              </span>
            </p>
            <div className="mb-8 flex items-center gap-4">
              <Chip text="AI" icon={IconBrandOpenai} color="green" />
              <Chip text="Mobile" icon={IconDeviceMobile} color="blue" />
              <Chip text="Productivity" icon={IconChartBar} color="red" />
            </div>
            <div className="mt-auto flex w-fit flex-col justify-end gap-4">
              <Button
                icon={<IconRocket className="h-8 w-8" />}
                subtitle="Visit"
                title={"Live Website"}
              />
              <Button
                icon={<IconCode className="h-8 w-8" />}
                subtitle="View"
                title={"Source Code"}
              />
            </div>
          </div>
          <div className="relative col-span-7">
            <Image
              src="/screenshots/web-s1.png"
              alt="dummy image"
              width="300"
              height="1600"
              className="relative z-10 translate-y-8 object-contain shadow-lg transition duration-300 group-hover:-translate-y-10"
            />
            <Image
              src="/screenshots/web-s2.png"
              alt="dummy image"
              width="300"
              height="1600"
              className="absolute -top-40 right-0 -translate-y-10 object-contain shadow-lg transition duration-300 group-hover:translate-y-2"
            />
          </div>
        </div>
      </TabContent>
    ),
  },
  {
    title: "Landing Page",
    value: "landing-page",
    content: (
      <TabContent title="Web App">
        <DummyContent />
      </TabContent>
    ),
  },
  {
    title: "Playground",
    value: "playground",
    content: (
      <TabContent title="Web App">
        <DummyContent />
      </TabContent>
    ),
  },
  {
    title: "Random",
    value: "random",
    content: (
      <TabContent title="Web App">
        <DummyContent />
      </TabContent>
    ),
  },
];

const ProjectTabs = () => {
  return (
    <div className="relative flex h-[80vh] w-full flex-col items-start justify-start [perspective:1000px]">
      <Tabs
        tabs={projectTabs}
        contentClassName="mt-14"
        activeTabClassName="bg-violet-100"
      />
    </div>
  );
};

export default ProjectTabs;
