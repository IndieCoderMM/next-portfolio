import { HoverBorderButton } from "@/components/ui/hover-button";
import { SlideIn, Transition } from "@/components/ui/transitions";
import { homepage } from "@/config/content/pages";
import { ProfileQueryResult } from "@/sanity.types";
import { IconMessage } from "@tabler/icons-react";
import Link from "next/link";
import HeroBadge from "../components/badge";

const HeroSection = ({ profile }: { profile: ProfileQueryResult }) => {
  return (
    <div className="relative min-h-[60vh] w-full pt-10 pb-4">
      <Transition>
        <span className="blob-nova absolute -top-20 -left-40 size-1/2 opacity-80 blur-[150px]" />
      </Transition>
      <section className="max-container relative mx-auto flex h-full flex-col items-center justify-center gap-8 pt-10 sm:pt-0">
        <div className="flex flex-1 flex-col space-y-8 px-4 sm:items-center sm:space-y-2 sm:text-center">
          <HeroBadge text={homepage.badge} />
          <h1 className="font-body text-gradient text-fg mb-4 w-full text-4xl font-medium tracking-tighter sm:leading-tight md:text-5xl md:font-semibold lg:text-7xl lg:leading-[1.1]">
            {homepage.heading}
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
                      {homepage.ctaText}
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
