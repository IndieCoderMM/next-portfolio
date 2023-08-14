'use client';

import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

import { GitHubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './Icons';

const CustomLink = ({ href, title, className = '' }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`${pathname === href ? 'w-full' : 'w-0'} h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300`}>
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="ml-8" />
        <CustomLink href="/about" title="About" className="ml-8" />
        <CustomLink href="/projects" title="Projects" className="ml-8" />
        <CustomLink href="/contact" title="Contact" className="ml-8" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href="/" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 ml-3">
          <GitHubIcon />
        </motion.a>
        <motion.a href="/" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 ml-3">
          <LinkedInIcon />
        </motion.a>
        <motion.a href="/" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 ml-3">
          <TwitterIcon />
        </motion.a>
        <motion.a href="/" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 ml-3">
          <PinterestIcon />
        </motion.a>
      </nav>
      <div className="absolute top-2 left-1/2 -translate-x-1/2">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
