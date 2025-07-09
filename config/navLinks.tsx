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
    icon: <IconSmartHome className="text-fg h-full w-full" />,
    href: "/",
  },
  {
    title: "Who Am I",
    icon: <IconUser className="text-fg h-full w-full" />,
    href: "/about",
  },
  {
    title: "My Works",
    icon: <IconTerminal2 className="text-fg h-full w-full" />,
    href: "/projects",
  },
  {
    title: "Say Hello",
    icon: <IconMessageDots className="text-fg h-full w-full" />,
    href: "/contact",
  },
  {
    title: "Professional Stuff",
    icon: <IconBrandLinkedin className="text-fg h-full w-full" />,
    href: "https://www.linkedin.com/in/hthantoo",
  },
  {
    title: "More Codes",
    icon: <IconBrandGithub className="text-fg h-full w-full" />,
    href: "https://github.com/IndieCoderMM",
  },
];
