import React from "react";
import {
  BlogSmallIcon,
  EmailOutlineIcon,
  GitHubOutlineIcon,
  LinkedInOutlineIcon,
  WhatsAppIcon,
} from "./Icons";

const SocialIcons = ({ email, socials }) => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <a
        href={socials.github}
        target="_blank"
        rel="noreferrer"
        aria-label="github"
        className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white dark:border-primaryDark dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-dark"
      >
        <GitHubOutlineIcon />
      </a>
      <a
        href={socials.linkedin}
        aria-label="linkedin"
        target="_blank"
        rel="noreferrer"
        className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white dark:border-primaryDark dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-dark"
      >
        <LinkedInOutlineIcon />
      </a>
      <a
        href={`mailto:${email}`}
        aria-label="email"
        target="_blank"
        rel="noreferrer"
        className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white dark:border-primaryDark dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-dark"
      >
        <EmailOutlineIcon />
      </a>
      <a
        href={socials.blog}
        aria-label="blog"
        target="_blank"
        rel="noreferrer"
        className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white dark:border-primaryDark dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-dark"
      >
        <BlogSmallIcon />
      </a>
      <a
        href={socials.whatsapp}
        aria-label="whatsapp"
        target="_blank"
        rel="noreferrer"
        className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white dark:border-primaryDark dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-dark"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
};

export default SocialIcons;
