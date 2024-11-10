import { IconPlus } from "@tabler/icons-react";

const ProfileCard = () => {
  return (
    <div className="relative mx-auto flex h-[30rem] max-w-sm flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]">
      <IconPlus className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <IconPlus className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
      <IconPlus className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
      <IconPlus className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

      <h2 className="mt-4 text-sm font-light text-black dark:text-white">
        Hover over this card to reveal an awesome effect. Running out of copy
        here.
      </h2>
      <p className="mt-4 rounded-full border border-black/[0.2] px-2 py-0.5 text-sm font-light text-black dark:border-white/[0.2] dark:text-white">
        Watch me hover
      </p>
    </div>
  );
};

export default ProfileCard;
