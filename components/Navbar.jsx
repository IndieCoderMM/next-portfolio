"use client";

import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { GitHubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from "./Icons";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} group relative`}>
      {title}
      <span
        className={`${
          pathname === href ? "w-full" : "w-0"
        } ease absolute -bottom-0.5 left-0 inline-block h-[1px] bg-dark transition-[width] duration-300 group-hover:w-full`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full py-8 font-medium">
      <div className="innerWidth mx-auto flex items-center justify-between">
        <nav className="space-x-8 text-lg">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/projects" title="Projects" />
          <CustomLink href="/contact" title="Contact" />
        </nav>
        <nav className="flex flex-wrap items-center justify-center">
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="ml-3 w-6"
          >
            <GitHubIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="ml-3 w-6"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="ml-3 w-6"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="ml-3 w-6"
          >
            <PinterestIcon />
          </motion.a>
        </nav>
      </div>
      <div className="absolute left-1/2 top-2 -translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
