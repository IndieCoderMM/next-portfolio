import { cn } from "@/utils/cn";
import {
  IconBalloon,
  IconCode,
  IconDeviceDesktop,
  IconPaint,
  IconRocket,
} from "@tabler/icons-react";
import Image from "next/image";
import { PropsWithChildren } from "react";

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

const Button = ({
  href,
  icon,
  title,
  subtitle,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="border-border bg-secondary text-secondary-fg hover:bg-primary/40 flex items-center gap-2 rounded-md border px-2 py-1 transition-colors duration-300 sm:gap-4 sm:px-6 sm:py-2"
    >
      {icon}
      <div className="flex flex-col items-start">
        <span className="text-text text-xs font-light sm:text-sm">
          {subtitle}
        </span>
        <p className="mb-2 leading-[20px] font-medium sm:text-lg">{title}</p>
      </div>
    </a>
  );
};
const TabContent = ({
  title,
  children,
}: PropsWithChildren<{ title: string }>) => {
  return (
    <div className="border-border bg-card text-card-fg relative h-full w-full overflow-hidden rounded-lg border p-10 shadow-sm">
      <div className="flex items-center">
        <h2 className="text-primary text-left font-semibold lg:text-3xl">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
};

export const projectTabs = [
  {
    title: "Animation",
    value: "3d-web-app",
    content: (
      <TabContent title="Metaversus">
        <div className="group grid grid-cols-12">
          <div className="col-span-5 pt-10">
            <p className="mb-4 leading-tight text-black lg:text-2xl dark:text-white">
              Modern Product Landing Page{" "}
              <span className="text-neutral-700 dark:text-neutral-100">
                with interactive 3D animations and parallax effects.
              </span>
            </p>
            <div className="mb-8 flex items-center gap-4">
              <Chip text="Animation" icon={IconBalloon} color="red" />
              <Chip text="Landing" icon={IconDeviceDesktop} color="green" />
              <Chip text="UI" icon={IconPaint} color="blue" />
            </div>
            <div className="mt-auto flex w-fit flex-col justify-end gap-4">
              <Button
                href="https://metaversus-one-silk.vercel.app/"
                icon={<IconRocket className="h-8 w-8" />}
                subtitle="Visit"
                title={"Live Website"}
              />
              <Button
                href="https://github.com/IndieCoderMM"
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
    title: "Web Tool",
    value: "web-tool",
    content: (
      <TabContent title="IP Tracker">
        <Image
          src="/screenshots/iptracker-full.webp"
          alt="IP Tracker"
          width="1000"
          height="1000"
          className="absolute inset-x-0 -bottom-10 mx-auto h-[60%] w-[90%] rounded-xl object-cover object-left-top md:h-[90%]"
        />
      </TabContent>
    ),
  },
  {
    title: "App Landing",
    value: "app-landing",
    content: (
      <TabContent title="Billio">
        <Image
          src="/screenshots/billio-full.webp"
          alt="Billio"
          width="1000"
          height="1000"
          className="absolute inset-x-0 -bottom-10 mx-auto h-[60%] w-[90%] rounded-xl object-cover object-left-top md:h-[90%]"
        />
      </TabContent>
    ),
  },
  {
    title: "Chat App",
    value: "chat-app",
    content: (
      <TabContent title="Convoz">
        <Image
          src="/screenshots/convoz-full.webp"
          alt="Convoz"
          width="1000"
          height="1000"
          className="absolute inset-x-0 -bottom-10 mx-auto h-[60%] w-[90%] rounded-xl object-cover object-left-top md:h-[90%]"
        />
      </TabContent>
    ),
  },
];
