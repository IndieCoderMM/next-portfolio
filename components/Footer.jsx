import { getProfile } from "@/sanity/sanity.query";
import Link from "next/link";
import {
  BlogSmallIcon,
  EmailOutlineIcon,
  GitHubOutlineIcon,
  LinkedInOutlineIcon,
  WhatsAppIcon,
} from "./Icons";
import Image from "next/image";

const Footer = async () => {
  const { email, socials } = await getProfile();
  return (
    <footer className="yPaddings mt-20 border-t border-dark/20 dark:border-light/20">
      <div className="mt-4 flex flex-col items-center justify-center gap-10">
        <Link
          href="/"
          className="relative flex items-center justify-center overflow-hidden rounded-lg bg-light"
        >
          <Image src="/logo.png" alt="logo" width={70} height={70} />
        </Link>
        <h3 className="text-lg font-semibold md:text-2xl">
          Making the web a better place
        </h3>
        <div className="flex w-full flex-wrap items-center justify-center gap-4">
          <a
            href={socials.github}
            title="GitHub"
            aria-label="GitHub"
            className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white dark:border-primaryDark dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-dark"
          >
            <GitHubOutlineIcon />
          </a>
          <a
            href={socials.linkedin}
            title="LinkedIn"
            aria-label="LinkedIn"
            className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white dark:border-primaryDark dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-dark"
          >
            <LinkedInOutlineIcon />
          </a>
          <a
            href={`mailto:${email}`}
            title="Email"
            aria-label="Email"
            className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white dark:border-primaryDark dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-dark"
          >
            <EmailOutlineIcon />
          </a>
          <a
            href={socials.whatsapp}
            title="WhatsApp"
            aria-label="WhatsApp"
            className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white dark:border-primaryDark dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-dark"
          >
            <WhatsAppIcon />
          </a>
          <a
            href={socials.blog}
            title="Blog"
            aria-label="Blog"
            className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white dark:border-primaryDark dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-dark"
          >
            <BlogSmallIcon />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 pt-8 text-center">
          <h3 className="text-xl font-bold md:text-2xl">Connect with me</h3>
          <blockquote className="leading-loose md:text-lg">
            <p>Wanna get in touch or talk about a project?</p>
            <p>
              You can reach me via email at{" "}
              <a
                href={`mailto:${email}`}
                className="font-medium text-primary underline-offset-2 hover:underline hover:brightness-110 dark:text-primaryDark"
              >
                {email}
              </a>
              .
            </p>
            <p>
              Or send me a message using the form at the{" "}
              <Link
                href="/contact"
                className="font-medium text-primary underline-offset-2 hover:underline hover:brightness-110 dark:text-primaryDark"
              >
                Contact Page
              </Link>
              .
            </p>
          </blockquote>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
