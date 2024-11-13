import { Tabs } from "@/components/ui/tabs";
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

const TabContent = ({
  title,
  children,
}: PropsWithChildren<{ title: string }>) => {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-900 p-10 text-xl font-bold text-white md:text-4xl">
      <h3>{title}</h3>
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
        <DummyContent />
      </TabContent>
    ),
  },
  {
    title: "Web App",
    value: "web-app",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-primary md:text-4xl">
        <p>Services tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Landing Page",
    value: "landing-page",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-primary md:text-4xl">
        <p>Playground tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Playground",
    value: "playground",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-primary md:text-4xl">
        <p>Content tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Random",
    value: "random",
    content: (
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-primary md:text-4xl">
        <p>Random tab</p>
        <DummyContent />
      </div>
    ),
  },
];

const ProjectTabs = () => {
  return (
    <div className="relative flex h-[80vh] w-full flex-col items-start justify-start [perspective:1000px]">
      <Tabs
        tabs={projectTabs}
        contentClassName="mt-14"
        activeTabClassName="bg-primary/30"
      />
    </div>
  );
};

export default ProjectTabs;
