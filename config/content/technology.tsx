import {
  IconBrandAws,
  IconBrandCloudflare,
  IconBrandFirebase,
  IconBrandGit,
  IconBrandGooglePlay,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandRedux,
} from "@tabler/icons-react";

const iconClasses = "h-full w-full text-text-muted stroke-[1.4]";

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
    id: 9,
    title: "Google Play",
    icon: <IconBrandGooglePlay className={iconClasses} />,
  },
  {
    id: 10,
    title: "Cloud Flare",
    icon: <IconBrandCloudflare className={iconClasses} />,
  },
  {
    id: 11,
    title: "AWS",
    icon: <IconBrandAws className={iconClasses} />,
  },
];
