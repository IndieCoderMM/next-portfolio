import features from "@/config/features";
import { cn } from "@/utils/cn";
import {
  IconBalloon,
  IconBrandAppstore,
  IconBrandGooglePlay,
  IconBrandOpenai,
  IconChartBar,
  IconCode,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconNote,
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
      className="border-text-muted dark:bg-dark flex items-center gap-2 rounded-md border bg-white px-2 py-1 transition-colors duration-300 hover:brightness-110 sm:gap-4 sm:px-6 sm:py-2"
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
    <div className="border-light dark:border-text-muted dark:bg-dark relative h-full w-full overflow-hidden rounded-lg border bg-white p-10 shadow-sm">
      <div className="flex items-center">
        <h2 className="text-primary dark:text-primaryDark text-left font-semibold lg:text-2xl">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
};

export const projectTabs = [
  {
    title: "Productivity",
    value: "productivity-app",
    content: (
      <TabContent title="Easy2Success">
        <div className="group grid grid-cols-12">
          <div className="col-span-6 pt-10">
            <p className="mb-4 leading-tight text-black lg:text-2xl dark:text-white">
              AI-Powered Personal Development & E-Learning App{" "}
              <span className="text-neutral-700 dark:text-neutral-200">
                empowering users to achieve their goals
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
                  href="https://play.google.com/store/apps/details?id=com.pandoratech.easy2success"
                  icon={<IconBrandGooglePlay className="h-8 w-8" />}
                  subtitle="Get it on"
                  title={"Google Play"}
                />
                <Button
                  href="https://apps.apple.com/us/app/easy2success/id6496866939"
                  icon={<IconBrandAppstore className="h-8 w-8" />}
                  subtitle="Download on the"
                  title={"App Store"}
                />
              </div>
              {features.PROJECT_DETAIL && (
                <div className="ml-4 flex items-center self-end">
                  <a
                    href="/projects/0"
                    className="text-primary flex items-center p-2 text-lg opacity-0 transition duration-500 group-hover:opacity-100 hover:underline lg:text-xl"
                  >
                    <IconNote className="text-primary" />
                    Learn More
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="relative col-span-6">
            <Image
              src="/screenshots/e2s4.png"
              alt="E2S Screenshot 1"
              width="400"
              height="900"
              className="absolute right-10 -bottom-[450px] -rotate-[10deg] object-contain object-center transition duration-500 group-hover:-translate-y-[150px]"
            />
            <Image
              src="/screenshots/e2s1.png"
              alt="E2S Screenshot 2"
              width="400"
              height="900"
              className="absolute top-[100px] -left-[50px] -rotate-[10deg] object-contain object-left-top transition duration-500 group-hover:-translate-x-[50px] group-hover:-translate-y-[100px]"
            />
          </div>
        </div>
      </TabContent>
    ),
  },
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
