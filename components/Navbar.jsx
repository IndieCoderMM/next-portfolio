"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import {
  BlogIcon,
  GitHubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} group relative`}>
      {title}
      <span
        className={`${
          pathname === href ? "w-full" : "w-0"
        } ease absolute -bottom-0.5 left-0 inline-block h-[3px] rounded-full bg-primary transition-[width] duration-300 group-hover:w-full`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = ({ socials }) => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full py-8 font-medium">
      <div className="innerWidth mx-auto hidden items-center justify-between p-2 md:flex">
        <nav className="space-x-8 text-lg">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Portfolio" />
          <CustomLink href="/contact" title="Contact" />
        </nav>
        <nav className="flex flex-wrap items-center justify-center">
          <motion.a
            href={socials.github}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="ml-3 w-9"
          >
            <GitHubIcon />
          </motion.a>
          <motion.a
            href={socials.linkedin}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="ml-3 w-9"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="/"
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
            className="ml-3 flex h-8 w-8 items-center justify-center rounded-full "
          >
            {mode === "dark" ? (
              <SunIcon className={"text-yellow-500"} />
            ) : (
              <MoonIcon className={"text-yellow-500"} />
            )}
          </button>
        </nav>
      </div>
      <div className="absolute left-1/2 top-2 -translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
