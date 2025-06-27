import { PrimaryButton } from "@/components/common";
import { homepageContent } from "@/config/homepage";
import { ProfileQueryResult } from "@/sanity.types";
import { formatDate } from "@/utils/format-date";
import { IconCalendarUp, IconMessage } from "@tabler/icons-react";
import Link from "next/link";

const HeroSection = ({ profile }: { profile: ProfileQueryResult }) => {
  return (
    <div className="borderHr w-full bg-gradient-to-b from-transparent via-white/10 to-white/50 pb-10 pt-10 dark:bg-none sm:pt-20">
      <section className="max-container borderVr mx-auto flex h-[60vh] flex-col items-center justify-center gap-8">
        <div className="flex flex-1 flex-col items-center justify-center space-y-4">
          <div className="section-badge gap-4 dark:bg-neutral-800">
            <div className="h-3 w-3 animate-heartbeat rounded-full bg-green-500" />
            <span>{homepageContent.badge}</span>
          </div>
          <h1 className="mb-4 w-full px-4 text-center font-heading text-4xl font-bold leading-tight text-dark dark:text-light sm:text-4xl sm:leading-normal md:text-5xl lg:text-6xl">
            {homepageContent.heading}
          </h1>
          <p className="mx-auto w-[80%] text-center text-xl text-dark dark:text-light md:text-2xl lg:text-3xl">
            {profile?.bio}
          </p>

          <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-300 sm:gap-4">
            <IconCalendarUp className="h-6 w-6" />
            <p className="leading-tight">
              Last Update:{" "}
              {profile?.lastUpdated
                ? formatDate(profile.lastUpdated, "short")
                : ""}
            </p>
          </div>

          <div className="flex w-full flex-col items-center gap-8 pt-8 lg:flex-row lg:justify-center">
            <Link
              prefetch={true}
              href="/contact"
              className="w-full max-w-[250px] flex-1"
            >
              <PrimaryButton>
                <div className="flex w-full items-center justify-center gap-1 text-lg text-white">
                  <IconMessage className="h-7 w-7 text-white" />
                  <span className="text-lg font-semibold md:text-2xl">
                    {homepageContent.ctaText}
                  </span>
                </div>
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
