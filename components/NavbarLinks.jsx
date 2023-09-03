"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  BlogIcon,
  GitHubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  WhatsAppIcon,
} from "./Icons";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} group relative`}>
      {title}
      <span
        className={`${
          pathname === href ? "w-full" : "w-0"
        } ease absolute -bottom-0.5 left-0 inline-block h-[3px] rounded-full bg-primary transition-[width] duration-300 group-hover:w-full dark:bg-primaryDark`}
      ></span>
    </Link>
  );
};

export const NavbarLinks = ({ socials, mode, setMode }) => {
  return (
    <div className="innerWidth mx-auto hidden items-center justify-between p-2 lg:flex">
      <nav className="flex flex-wrap gap-8 text-lg">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Portfolio" />
        <CustomLink href="/contact" title="Contact" />
      </nav>
      <nav className="flex flex-wrap items-center justify-center">
        <motion.a
          href={socials.github}
          aria-label="github"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="ml-3 h-10 w-10 rounded-full bg-white text-dark"
        >
          <GitHubIcon />
        </motion.a>
        <motion.a
          href={socials.linkedin}
          aria-label="linkedin"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="ml-3 w-9 rounded-md bg-white"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href={socials.whatsapp}
          aria-label="whatsapp"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="ml-3 w-10 rounded-full text-green-500"
        >
          <WhatsAppIcon />
        </motion.a>
        <motion.a
          href={socials.blog}
          aria-label="blog"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="ml-3 w-9"
        >
          <BlogIcon />
        </motion.a>

        <button
          onClick={() =>
            setMode((mode) => (mode === "dark" ? "light" : "dark"))
          }
          type="button"
          aria-label="Toggle Theme"
          className="ml-3 flex h-8 w-8 items-center justify-center rounded-full "
        >
          {mode === "dark" ? (
            <SunIcon className={"text-yellow-500"} key="sun" />
          ) : (
            <MoonIcon className={"text-yellow-500"} key="moon" />
          )}
        </button>
      </nav>
    </div>
  );
};
