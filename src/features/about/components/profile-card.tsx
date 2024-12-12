import { IconPlus } from "@tabler/icons-react";
import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="relative mx-auto flex h-[30rem] max-w-sm flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]">
      <IconPlus className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <IconPlus className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <IconPlus className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <IconPlus className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />
      <div className="group relative flex w-full items-center justify-center">
        <Image
          src="/assets/selfie.jpg"
          alt="profile picture"
          width={200}
          height={500}
          className="h-auto w-full object-contain"
        />

        <Image
          src="/assets/arrow.png"
          alt="arrow"
          width={70}
          height={70}
          className="absolute bottom-7 right-20 h-auto w-[70px] -rotate-90 transform object-contain opacity-0 transition duration-500 group-hover:opacity-100"
        />
        <h2 className="absolute bottom-1 right-6 font-hand text-lg font-bold text-black opacity-0 transition duration-700 group-hover:opacity-100">
          Don-yee
        </h2>
        <div className="absolute left-0 top-0 h-full w-full bg-[#000000]/0 opacity-100 mix-blend-normal blur-[0px] grayscale-[100%] invert-[0%] sepia-[0%] backdrop-brightness-[110%] backdrop-contrast-[110%] backdrop-hue-rotate-[0deg] backdrop-saturate-[100%] transition duration-300 group-hover:opacity-0"></div>
        <div className="absolute left-0 top-0 h-full w-full bg-[#f36abc]/30 opacity-0 mix-blend-screen blur-[0px] grayscale-[0%] invert-[0%] sepia-[0%] backdrop-brightness-[110%] backdrop-contrast-[110%] backdrop-hue-rotate-[0deg] backdrop-saturate-[130%] transition duration-300 group-hover:opacity-100"></div>
      </div>
      <p className="mt-4 rounded-lg border border-black/[0.2] px-2 py-1 text-sm font-light text-black dark:border-white/[0.2] dark:text-white">
        She insists on being in every photo. Who am I to argue?
      </p>
    </div>
  );
};

export default ProfileCard;
