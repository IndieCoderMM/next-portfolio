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
        <Link href="/" className="relative flex items-center justify-center">
          <Image src="/logo.png" alt="logo" width={70} height={70} />
        </Link>
        <h3 className="text-lg font-semibold md:text-2xl">
          Making the web a better place
        </h3>
        <div className="flex w-full flex-wrap items-center justify-center gap-4">
          <a
            href={socials.github}
            className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white"
          >
            <GitHubOutlineIcon />
          </a>
          <a
            href={socials.linkedin}
            className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white"
          >
            <LinkedInOutlineIcon />
          </a>
          <a
            href={email}
            className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white"
          >
            <EmailOutlineIcon />
          </a>
          <a
            href={socials.whatsapp}
            className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white"
          >
            <WhatsAppIcon />
          </a>
          <a
            href={socials.blog}
            className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white"
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
                className="font-medium text-primary underline-offset-2 hover:underline hover:brightness-110"
              >
                {email}.
              </a>
            </p>
            <p>
              Or send me a message using the form at the{" "}
              <Link
                href="/contact"
                className="font-medium text-primary underline-offset-2 hover:underline hover:brightness-110"
              >
                Contact Page
              </Link>
            </p>
          </blockquote>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
