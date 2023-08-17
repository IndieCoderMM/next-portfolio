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
import { useState } from "react";
import { useRouter } from "next/navigation";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} group relative`}>
      {title}
      <span
        className={`${
          pathname === href ? "w-full" : "w-0"
        } ease absolute -bottom-0.5 left-0 inline-block h-[3px] rounded-full bg-primary transition-[width] duration-300 group-hover:w-full`}
      ></span>
    </Link>
  );
};

const MobileLink = ({ href, title, closeMenu, className = "" }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    closeMenu();
    router.push(href);
  };

  return (
    <button
      type="button"
      className={`${className} group relative text-lg text-dark dark:text-light`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`${
          pathname === href ? "w-full" : "w-0"
        } ease absolute -bottom-0.5 left-0 inline-block h-[3px] rounded-full bg-primary transition-[width] duration-300 group-hover:w-full`}
      ></span>
    </button>
  );
};

const Navbar = ({ socials }) => {
  const [mode, setMode] = useThemeSwitcher();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full py-8 font-medium">
      <button
        type="button"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="fixed left-4 top-4 z-50 h-9 w-9 lg:hidden"
      >
        <span
          className={`${
            isMenuOpen ? "translate-y-1 rotate-45" : "-translate-y-1.5"
          } block h-0.5 w-8 rounded-md bg-dark transition-all duration-300 ease-out dark:bg-light`}
        ></span>
        <span
          className={`${
            isMenuOpen ? "opacity-0" : "opacity-100"
          } my-0.5 block h-0.5 w-8 rounded-md bg-dark  transition-all duration-300 ease-out dark:bg-light`}
        ></span>
        <span
          className={`${
            isMenuOpen ? "-translate-y-1 -rotate-45" : "translate-y-1.5"
          } block h-0.5 w-8 rounded-md bg-dark transition-all duration-300 ease-out dark:bg-light`}
        ></span>
      </button>
      <div className="innerWidth mx-auto hidden items-center justify-between p-2 lg:flex">
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
            className="ml-3 w-9 rounded-md bg-white"
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
      {/* // Mobile Menu */}
      {isMenuOpen ? (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-30 grid items-center bg-light/70 backdrop-blur-md dark:bg-dark/75">
          <nav className="flex flex-col items-center justify-center space-y-4">
            <MobileLink
              closeMenu={() => setIsMenuOpen(false)}
              href="/"
              title="Home"
            />
            <MobileLink
              closeMenu={() => setIsMenuOpen(false)}
              href="/about"
              title="About"
            />
            <MobileLink
              closeMenu={() => setIsMenuOpen(false)}
              href="/projects"
              title="Portfolio"
            />
            <MobileLink
              closeMenu={() => setIsMenuOpen(false)}
              href="/contact"
              title="Contact"
            />
          </nav>
          <nav className="flex flex-wrap items-center justify-center gap-3">
            <motion.a
              href={socials.github}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 rounded-full bg-light dark:text-dark"
            >
              <GitHubIcon />
            </motion.a>
            <motion.a
              href={socials.linkedin}
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 rounded-md bg-white"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 rounded-full"
            >
              <BlogIcon />
            </motion.a>

            <button
              onClick={() =>
                setMode((mode) => (mode === "dark" ? "light" : "dark"))
              }
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-light p-1 dark:bg-dark"
            >
              {mode === "dark" ? (
                <SunIcon className={"text-yellow-500"} />
              ) : (
                <MoonIcon className={"text-yellow-500"} />
              )}
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
