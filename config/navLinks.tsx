import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMessageDots,
  IconSmartHome,
  IconTerminal2,
  IconUser,
} from "@tabler/icons-react";

export const navLinks = [
  {
    title: "Home",
    icon: (
      <IconSmartHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    title: "Who Am I",
    icon: (
      <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/about",
  },
  {
    title: "My Works",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/projects",
  },
  {
    title: "Say Hello",
    icon: (
      <IconMessageDots className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/contact",
  },
  {
    title: "Professional Stuff",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/hthantoo",
  },
  {
    title: "More Codes",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/IndieCoderMM",
  },
];
