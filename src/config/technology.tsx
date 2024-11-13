import {
  IconBrandAppstore,
  IconBrandAws,
  IconBrandFirebase,
  IconBrandGit,
  IconBrandGooglePlay,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandRedux,
} from "@tabler/icons-react";

const iconClasses = "h-full w-full text-neutral-400 dark:text-neutral-700";

export const techs: Technology[] = [
  {
    id: 1,
    title: "React",
    icon: <IconBrandReact className={iconClasses} />,
  },
  {
    id: 2,
    title: "Next.js",
    icon: <IconBrandNextjs className={iconClasses} />,
  },
  {
    id: 3,
    title: "Node.js",
    icon: <IconBrandNodejs className={iconClasses} />,
  },
  {
    id: 4,
    title: "Git",
    icon: <IconBrandGit className={iconClasses} />,
  },
  {
    id: 5,
    title: "Redux",
    icon: <IconBrandRedux className={iconClasses} />,
  },
  {
    id: 6,
    title: "Firebase",
    icon: <IconBrandFirebase className={iconClasses} />,
  },
  {
    id: 7,
    title: "MySQL",
    icon: <IconBrandMysql className={iconClasses} />,
  },
  {
    id: 8,
    title: "MongoDB",
    icon: <IconBrandMongodb className={iconClasses} />,
  },
  {
    id: 9,
    title: "Google Play",
    icon: <IconBrandGooglePlay className={iconClasses} />,
  },
  {
    id: 10,
    title: "App Store",
    icon: <IconBrandAppstore className={iconClasses} />,
  },
  {
    id: 11,
    title: "AWS",
    icon: <IconBrandAws className={iconClasses} />,
  },
];
