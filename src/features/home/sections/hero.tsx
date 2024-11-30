import { PrimaryButton } from "@/components/common";
import { ProfileQueryResult } from "@/sanity.types";
import { formatDate } from "@/utils/format-date";
import { IconCalendarUp, IconMessage } from "@tabler/icons-react";
import Link from "next/link";

const HeroSection = ({ profile }: { profile: ProfileQueryResult }) => {
  return (
    <div className="borderHr w-full bg-gradient-to-b from-transparent via-white/10 to-white/50 pt-20 dark:bg-none">
      <section className="max-container borderVr mx-auto flex h-[60vh] flex-col items-center justify-center gap-8">
        <div className="flex flex-1 flex-col items-center justify-center space-y-4">
          <h2 className="mb-4 w-[80%] text-center font-nunito text-2xl font-semibold leading-normal text-dark dark:text-light md:text-4xl lg:text-6xl">
            Transforming 💡 ideas into seamless digital experiences 📈
          </h2>

          <p className="mx-auto w-[80%] text-center text-lg leading-normal text-dark dark:text-light md:text-2xl lg:text-3xl">
            {profile?.bio}
          </p>

          <div className="flex items-center justify-center gap-4 text-gray-500 dark:text-gray-300">
            <IconCalendarUp className="h-6 w-6" />
            <p>
              Last Update:{" "}
              {profile?.lastUpdated
                ? formatDate(profile.lastUpdated, "short")
                : ""}
            </p>
          </div>

          <div className="flex w-full flex-col items-center gap-8 pt-8 lg:flex-row lg:justify-center">
            <Link href="/contact" className="w-full max-w-[250px] flex-1">
              <PrimaryButton>
                <div className="flex w-full items-center justify-center gap-1 text-lg text-white">
                  <IconMessage className="h-7 w-7 text-white" />
                  <span className="text-lg font-semibold md:text-2xl">
                    Say Hello
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
