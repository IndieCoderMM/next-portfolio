import {
  IconBrandGit,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandRedux,
} from "@tabler/icons-react";

export const technology = [
  {
    id: 1,
    title: "React",
    icon: (
      <IconBrandReact className="h-full w-full text-slate-300 dark:text-neutral-300" />
    ),
  },
  {
    id: 2,
    title: "Next.js",
    icon: (
      <IconBrandNextjs className="h-full w-full text-neutral-300 dark:text-neutral-300" />
    ),
  },
  {
    id: 3,
    title: "Node.js",
    icon: (
      <IconBrandNodejs className="h-full w-full text-neutral-300 dark:text-neutral-300" />
    ),
  },
  {
    id: 4,
    title: "Git",
    icon: (
      <IconBrandGit className="h-full w-full text-neutral-300 dark:text-neutral-300" />
    ),
  },
  {
    id: 5,
    title: "Redux",
    icon: (
      <IconBrandRedux className="h-full w-full text-neutral-300 dark:text-neutral-300" />
    ),
  },
];
