import { PrimaryButton } from "@/components/common";
import { homepageContent } from "@/config/content/homepage";
import { ProfileQueryResult } from "@/sanity.types";
import { IconMapPin, IconMessage } from "@tabler/icons-react";
import Link from "next/link";

const HeroSection = ({ profile }: { profile: ProfileQueryResult }) => {
  return (
    <div className="relative w-full pt-10 pb-4 sm:pt-14">
      <span className="blob absolute -top-20 left-0 size-1/2 blur-[120px]" />
      <section className="max-container relative mx-auto flex h-[60vh] flex-col items-center justify-center gap-8">
        <div className="flex flex-1 flex-col items-center space-y-4 text-center">
          <div className="section-badge gap-4">
            <div className="animate-heartbeat h-3 w-3 rounded-full bg-green-500" />
            <span>{homepageContent.badge}</span>
          </div>
          <h1 className="font-body text-gradient text-fg -mt-4 w-full px-4 text-center text-4xl font-medium tracking-tighter sm:text-4xl sm:leading-tight md:text-5xl md:font-bold lg:text-7xl">
            {homepageContent.heading}
          </h1>
          <p className="text-text-main mx-auto w-[80%] text-lg md:text-xl">
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
                  <span className="text-lg font-semibold md:text-xl">
                    {homepageContent.ctaText}
                  </span>
                </div>
              </PrimaryButton>
            </Link>
          </div>
          {/* TODO: Add location schema */}
          {profile?.location ? (
            <div className="text-text-muted flex items-center justify-center gap-2 text-sm">
              <IconMapPin />
              <p className="">{profile.location}</p>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
