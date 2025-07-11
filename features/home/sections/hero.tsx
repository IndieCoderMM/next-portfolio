import { HoverBorderButton } from "@/components/ui/hover-button";
import { SlideIn, Transition } from "@/components/ui/transitions";
import { homepageContent } from "@/config/content/homepage";
import { ProfileQueryResult } from "@/sanity.types";
import { IconMessage } from "@tabler/icons-react";
import Link from "next/link";

const HeroSection = ({ profile }: { profile: ProfileQueryResult }) => {
  return (
    <div className="relative min-h-[60vh] w-full pt-10 pb-4 sm:pt-10">
      <Transition>
        <span className="blob absolute -top-20 left-0 size-1/2 blur-[120px]" />
      </Transition>
      <section className="max-container relative mx-auto flex h-full flex-col items-center justify-center gap-8">
        <div className="flex flex-1 flex-col space-y-2 px-4 sm:items-center sm:text-center">
          <div className="section-badge gap-4">
            <div className="animate-heartbeat h-3 w-3 rounded-full bg-green-500" />
            <span>{homepageContent.badge}</span>
          </div>
          <h1 className="font-body text-gradient text-fg -mt-4 w-full text-4xl font-medium tracking-tighter sm:leading-tight md:text-5xl md:font-semibold lg:text-7xl">
            {homepageContent.heading}
          </h1>
          <p className="text-fg mx-auto text-lg sm:w-[80%] md:text-xl">
            {profile?.bio}
          </p>

          <div className="flex w-full flex-col gap-8 pt-8 sm:items-center">
            <SlideIn>
              <HoverBorderButton>
                <Link
                  prefetch={true}
                  href="/contact"
                  className="w-full max-w-[250px]"
                >
                  <div className="text-fg flex w-full items-center justify-center gap-2 px-2 py-1 text-lg">
                    <IconMessage className="text-fg h-7 w-7" />
                    <span className="text-lg font-semibold md:text-2xl">
                      {homepageContent.ctaText}
                    </span>
                  </div>
                </Link>
              </HoverBorderButton>
            </SlideIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
