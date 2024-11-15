import { getProfile } from "@/utils/data";
import {
  IconBrandAndroid,
  IconBrandBlogger,
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  const { email, socials } = getProfile();

  return (
    <>
      <footer className="paddings w-full bg-primary pb-12 text-white sm:pb-16 lg:pb-32">
        <div className="flex flex-col items-center justify-center gap-10">
          <Link
            href="/"
            className="relative flex items-center justify-center overflow-hidden rounded-lg bg-light"
          >
            <IconBrandAndroid className="h-12 w-12 text-primary" />
          </Link>
          <h3 className="text-center text-lg font-semibold capitalize md:text-2xl">
            Making the web a better place
          </h3>
          <div className="flex w-full flex-wrap items-center justify-center gap-4">
            <a
              href={socials.github}
              title="GitHub"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-light p-2 text-light transition hover:scale-110 hover:border-white hover:bg-white hover:text-primary"
            >
              <IconBrandGithub />
            </a>
            <a
              href={socials.linkedin}
              title="LinkedIn"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-light p-2 text-light transition hover:scale-110 hover:border-white hover:bg-white hover:text-primary"
            >
              <IconBrandLinkedin />
            </a>
            <a
              href={`mailto:${email}`}
              title="Email"
              aria-label="Email"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-light p-2 text-light transition hover:scale-110 hover:border-white hover:bg-white hover:text-primary"
            >
              <IconBrandGmail />
            </a>
            <a
              href={socials.whatsapp}
              title="WhatsApp"
              aria-label="WhatsApp"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-light p-2 text-light transition hover:scale-110 hover:border-white hover:bg-white hover:text-primary"
            >
              <IconBrandWhatsapp />
            </a>
            <a
              href={socials.blog}
              title="Blog"
              aria-label="Blog"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-light p-2 text-light transition hover:scale-110 hover:border-white hover:bg-white hover:text-primary"
            >
              <IconBrandBlogger />
            </a>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 pt-8 text-center">
            <h3 className="text-xl font-bold md:text-2xl">Connect with me</h3>
            <blockquote className="leading-loose text-white md:text-lg">
              <p>Wanna get in touch or talk about a project?</p>
              <p>
                You can reach me via email at{" "}
                <a
                  href={`mailto:${email}`}
                  target="_blank"
                  className="font-semibold text-white underline underline-offset-2 hover:brightness-110"
                >
                  {email}
                </a>
                .
              </p>
              <p>
                Or send me a message using the form at the{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-white underline underline-offset-2 hover:brightness-110"
                >
                  Contact Page
                </Link>
                .
              </p>
            </blockquote>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
