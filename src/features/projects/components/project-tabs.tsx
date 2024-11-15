import Heading from "@/components/common/heading";
import { Tabs } from "@/components/ui/tabs";
import { cn } from "@/utils/cn";
import {
  IconBrandAppstore,
  IconBrandGooglePlay,
  IconBrandOpenai,
  IconChartBar,
  IconDeviceMobile,
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
    green: "bg-green-100",
    blue: "bg-blue-100",
    red: "bg-red-100",
  };
  const textColor = {
    green: "text-green-700",
    blue: "text-blue-700",
    red: "text-red-700",
  };
  const iconColor = {
    green: "text-green-500",
    blue: "text-blue-500",
    red: "text-red-500",
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
    <div className="relative h-full w-full overflow-hidden rounded-lg border bg-white p-10">
      <div className="flex items-center">
        <Heading
          as={"h2"}
          className="text-left font-semibold text-primary lg:text-3xl"
        >
          {title}
        </Heading>
      </div>
      {children}
    </div>
  );
};

const projectTabs = [
  {
    title: "Mobile App",
    value: "mobile-app",
    content: (
      <TabContent title="Easy2Success">
        <div className="grid grid-cols-12">
          <div className="col-span-5 pt-10">
            <p className="mb-4 leading-loose text-black lg:text-3xl">
              AI-Powered Personal Development & E-Learning App{" "}
              <span className="text-neutral-700">
                empowering users through personalized learning and development
                plans.
              </span>
            </p>
            <div className="mb-8 flex items-center gap-4">
              <Chip text="AI" icon={IconBrandOpenai} color="green" />
              <Chip text="Mobile" icon={IconDeviceMobile} color="blue" />
              <Chip text="Productivity" icon={IconChartBar} color="red" />
            </div>
            <div className="mt-auto flex w-fit flex-col gap-4">
              <button className="border-text flex items-center gap-[17px] rounded-md border px-6 py-2">
                <IconBrandGooglePlay className="h-8 w-8" />
                <div className="flex flex-col items-start">
                  <span className="text-text text-[0.850rem] font-[500]">
                    Get it on
                  </span>
                  <h3 className="mb-2 text-[1.5rem] font-[500] leading-[20px]">
                    Google Play
                  </h3>
                </div>
              </button>
              <button className="border-text flex items-center gap-[17px] rounded-md border px-6 py-2">
                <IconBrandAppstore className="h-8 w-8" />
                <div className="flex flex-col items-start">
                  <span className="text-text text-[0.850rem] font-[500]">
                    Download on the
                  </span>
                  <h3 className="mb-2 text-[1.5rem] font-[500] leading-[20px]">
                    App Store
                  </h3>
                </div>
              </button>
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
    title: "Web App",
    value: "web-app",
    content: (
      <TabContent title="Metaversus">
        <div className="grid grid-cols-12">
          <div className="col-span-5 pt-10">
            <p className="mb-4 leading-loose text-black lg:text-3xl">
              Modern Product Landing Page{" "}
              <span className="text-neutral-700">
                with interactive 3D animations and parallax effects.
              </span>
            </p>
            <div className="mb-8 flex items-center gap-4">
              <Chip text="AI" icon={IconBrandOpenai} color="green" />
              <Chip text="Mobile" icon={IconDeviceMobile} color="blue" />
              <Chip text="Productivity" icon={IconChartBar} color="red" />
            </div>
          </div>
          <div className="relative col-span-7">
            <Image
              src="/screenshots/web-s1.png"
              alt="dummy image"
              width="300"
              height="1600"
              className="relative z-10 object-contain shadow-lg"
            />
            <Image
              src="/screenshots/web-s2.png"
              alt="dummy image"
              width="300"
              height="1600"
              className="absolute -top-40 right-0 object-contain"
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
        activeTabClassName="bg-violet-200"
      />
    </div>
  );
};

export default ProjectTabs;
