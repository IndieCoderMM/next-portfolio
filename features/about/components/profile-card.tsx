import { IconPlus } from "@tabler/icons-react";
import Image from "next/image";

const ProfileCard = ({
  photo,
  alt,
  label,
}: {
  photo: string | null;
  alt: string | null;
  label: string | null;
}) => {
  if (!photo) {
    return null;
  }

  return (
    <div className="relative mx-auto flex max-w-sm flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]">
      <IconPlus className="absolute -top-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <IconPlus className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <IconPlus className="absolute -top-3 -right-3 h-6 w-6 text-black dark:text-white" />
      <IconPlus className="absolute -right-3 -bottom-3 h-6 w-6 text-black dark:text-white" />
      <div className="group relative flex w-full items-center justify-center">
        <Image
          src={photo}
          alt={alt ?? "Profile Photo"}
          width={200}
          height={500}
          className="h-auto w-full object-contain"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-[#000000]/0 opacity-100 mix-blend-normal blur-[0px] grayscale-[100%] invert-[0%] sepia-[0%] backdrop-brightness-[110%] backdrop-contrast-[110%] backdrop-hue-rotate-[0deg] backdrop-saturate-[100%] transition duration-300 group-hover:opacity-0"></div>
      </div>

      <p className="mt-4 w-full rounded-lg border border-black/[0.2] px-2 py-1 text-center text-sm font-light text-black md:text-lg dark:border-white/[0.2] dark:text-white">
        {label}
      </p>
    </div>
  );
};

export default ProfileCard;
