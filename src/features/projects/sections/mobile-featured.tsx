import Heading from "@/components/common/heading";
import features from "@/config/features";
import {
  IconBrandAppstore,
  IconBrandGooglePlay,
  IconBrandOpenai,
  IconChartBar,
  IconDeviceMobile,
  IconNote,
} from "@tabler/icons-react";
import Image from "next/image";
import { Button, Chip } from "../components/project-tabs";

const MobileFeaturedProjects = () => {
  return (
    <div className="w-full sm:hidden">
      <Heading as="h2">Big Ideas into Impactful Products</Heading>
      <div className="group">
        <div className="relative h-[400px] overflow-hidden">
          <Image
            src="/screenshots/e2s.webp"
            alt="dummy image"
            width="600"
            height="1200"
            className="object-cover object-left-top"
          />
        </div>
        <div className="bg-white px-2 py-4 dark:bg-transparent">
          <h3 className="mb-2 text-3xl font-semibold text-primary">
            Easy2Success
          </h3>
          <p className="mb-4 text-xl leading-tight text-black dark:text-white">
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
            <div className="mt-auto flex w-full justify-center gap-4 px-4 sm:flex-col">
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
                  className="flex items-center p-2 text-lg text-primary opacity-0 transition duration-500 hover:underline group-hover:opacity-100 lg:text-xl"
                >
                  <IconNote className="text-primary" />
                  Learn More
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFeaturedProjects;
