"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

import useThemeSwitcher from "./hooks/useThemeSwitcher";

import Logo from "./Logo";
import {
  BlogIcon,
  GitHubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  WhatsAppIcon,
} from "./Icons";
import { NavbarLinks } from "./NavbarLinks";
import FixedNavbar from "./FixedNavbar";

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
        aria-label="Toggle Menu"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className={`${
          isMenuOpen ? "" : "bg-white/50 backdrop-blur-md dark:bg-black/10"
        } fixed left-2 top-2 z-[99] flex h-12 w-12 flex-col items-center justify-center rounded-full lg:hidden`}
      >
        <span
          className={`${
            isMenuOpen ? "translate-y-1 rotate-45" : "-translate-y-1.5"
          } block h-0.5 w-8 rounded-md bg-dark transition-all duration-100 ease-out dark:bg-light`}
        ></span>
        <span
          className={`${
            isMenuOpen ? "opacity-0" : "opacity-100"
          } my-0.5 block h-0.5 w-8 rounded-md bg-dark  transition-all duration-100 ease-out dark:bg-light`}
        ></span>
        <span
          className={`${
            isMenuOpen ? "-translate-y-1 -rotate-45" : "translate-y-1.5"
          } block h-0.5 w-8 rounded-md bg-dark transition-all duration-100 ease-out dark:bg-light`}
        ></span>
      </button>

      <NavbarLinks socials={socials} mode={mode} setMode={setMode} />

      <div className="absolute left-1/2 top-2 -translate-x-1/2">
        <Logo />
        <h1 className="sr-only">Hein Thant Oo | Full Stack Developer</h1>
      </div>
      {/* // Mobile Menu */}
      {isMenuOpen ? (
        <motion.div
          initial={{ scale: 0, x: "-50%", y: "-50%", opacity: 0 }}
          animate={{ scale: 1, x: "0", y: "0", opacity: 1 }}
          transition={{
            type: "spring",
            duration: 0.25,
            ease: "easeIn",
          }}
          className="fixed -left-1 -top-1 z-[60] min-w-[250px] rounded-br-[900px] bg-light pb-20 pr-8 pt-4 shadow-md backdrop-blur-md dark:bg-[#3a3a3a]"
        >
          <div className="flex flex-col pl-20">
            <nav className="mb-4 flex items-center justify-center gap-3">
              <motion.a
                href={socials.github}
                target="_blank"
                aria-label="github"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 rounded-full bg-light dark:text-dark"
              >
                <GitHubIcon />
              </motion.a>
              <motion.a
                href={socials.linkedin}
                target="_blank"
                aria-label="linkedin"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 rounded-md bg-white"
              >
                <LinkedInIcon />
              </motion.a>
              <motion.a
                href={socials.whatsapp}
                target="_blank"
                aria-label="whatsapp"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 rounded-full  text-green-500"
              >
                <WhatsAppIcon />
              </motion.a>
              <motion.a
                href={socials.blog}
                target="_blank"
                aria-label="blog"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 rounded-full"
              >
                <BlogIcon />
              </motion.a>

              <button
                onClick={() =>
                  setMode((mode) => (mode === "dark" ? "light" : "dark"))
                }
                type="button"
                aria-label="Toggle Theme"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-light p-1 dark:bg-dark"
              >
                {mode === "dark" ? (
                  <SunIcon className={"text-yellow-500"} />
                ) : (
                  <MoonIcon className={"text-yellow-500"} />
                )}
              </button>
            </nav>

            <nav className="flex flex-1 flex-col items-start space-y-4">
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
          </div>
        </motion.div>
      ) : null}
      <FixedNavbar socials={socials} mode={mode} setMode={setMode} />
    </header>
  );
};

export default Navbar;
