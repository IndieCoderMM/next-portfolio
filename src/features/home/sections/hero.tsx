import { PrimaryButton } from "@/components/common";
import { IconCalendarUp, IconMessage } from "@tabler/icons-react";

const HeroSection = ({ profile }: { profile: Profile }) => {
  return (
    <div className="borderHr w-full">
      <section className="paddings interWidth borderVr mx-auto flex h-[80vh] flex-col items-center justify-center gap-8 2xl:flex-row">
        <div className="flex flex-1 flex-col items-center justify-center space-y-4">
          <h2 className="mb-4 w-[80%] text-center font-nunito text-2xl font-semibold leading-normal text-dark dark:text-light md:text-4xl lg:text-6xl">
            {profile?.bio}
          </h2>

          <p className="text-lg leading-normal text-dark dark:text-light md:text-2xl lg:text-3xl">
            {profile?.description}
          </p>

          <div className="flex items-center justify-center gap-4 text-gray-500 dark:text-gray-300">
            <IconCalendarUp className="h-6 w-6" />
            <p>Last Update: 6/11/2024</p>
          </div>

          <div className="flex w-full flex-col items-center gap-8 pt-8 lg:flex-row lg:justify-center">
            <a
              href={`${profile?.resumeURL}?dl=${profile.fullName.replaceAll(
                " ",
                "_",
              )}_CV.pdf`}
              className="w-full max-w-[250px] flex-1"
            >
              <PrimaryButton>
                <div className="flex w-full items-center justify-center gap-1 text-lg text-white">
                  <IconMessage className="h-7 w-7 text-white" />
                  <span className="text-lg font-semibold md:text-2xl">
                    Say Hello
                  </span>
                </div>
              </PrimaryButton>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
