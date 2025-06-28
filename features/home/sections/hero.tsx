import { PrimaryButton } from "@/components/common";
import { homepageContent } from "@/config/content/homepage";
import { ProfileQueryResult } from "@/sanity.types";
import { formatDate } from "@/utils/format-date";
import { IconMessage } from "@tabler/icons-react";
import Link from "next/link";

const HeroSection = ({ profile }: { profile: ProfileQueryResult }) => {
  return (
    <div className="borderHr w-full bg-gradient-to-b from-transparent via-white/10 to-white/50 pt-10 pb-10 sm:pt-14 dark:bg-none">
      <section className="max-container borderVr mx-auto flex h-[60vh] flex-col items-center justify-center gap-8">
        <div className="flex flex-1 flex-col items-center justify-center space-y-4">
          <div className="section-badge gap-4 dark:bg-neutral-800">
            <div className="animate-heartbeat h-3 w-3 rounded-full bg-green-500" />
            <span>{homepageContent.badge}</span>
          </div>
          <h1 className="font-heading text-text-main leading-tighter w-full px-4 text-center text-4xl font-medium sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl">
            {homepageContent.heading}
          </h1>
          <p className="text-text-secondary mx-auto w-[80%] text-center text-lg tracking-tighter md:text-xl lg:text-2xl">
            {profile?.bio}
          </p>

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
          {profile?.lastUpdated ? (
            <div className="text-text-muted flex items-center justify-center gap-2 text-xs">
              <p className="">
                Last Updated: {formatDate(profile.lastUpdated, "short")}
              </p>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
