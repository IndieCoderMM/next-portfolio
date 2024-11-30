import dayjs from "@/lib/dayjs";
import { ProfileQueryResult } from "@/sanity.types";
import { getProfile } from "@/sanity/lib/query";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconExternalLink,
  IconMail,
} from "@tabler/icons-react";
import LinkUnderline from "../common/link";

const SiteMap = () => {
  return (
    <a
      href="https://github.com/indiecodermm/next-portfolio"
      target="_blank"
      rel="noreferrer nofollow"
      className={"hover:underline"}
    >
      <span>sitemap.xml</span>
    </a>
  );
};

interface FooterLinkProps {
  title: string;
  href: string;
  label?: "new" | "soon";
  isInternal?: boolean;
}

const FooterLink = ({
  title,
  href,
  label = undefined,
  isInternal = true,
}: FooterLinkProps) => {
  if (label === "soon") {
    return (
      <span
        className={
          "footer-link footer-link--soon text-neutral-600 dark:text-neutral-400"
        }
      >
        {title}
        <span
          className={
            "rounded-full bg-green-50 px-2 py-1 text-xs uppercase text-green-500 dark:bg-green-900 dark:text-green-200"
          }
        >
          {label}
        </span>
      </span>
    );
  }

  if (isInternal) {
    return (
      <div className="flex items-center gap-1">
        <LinkUnderline href={href} className={"footer-link"} label={title} />
        {label && (
          <span
            className={
              "rounded-full bg-green-50 px-2 py-1 text-xs text-green-500 dark:bg-green-900 dark:text-green-200"
            }
          >
            {label}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      <LinkUnderline href={href} className={"footer-link"} label={title} />
      <IconExternalLink className="h-4 w-4" />
      {label && (
        <span
          className={
            "rounded-full bg-green-50 px-2 py-1 text-xs text-green-500 dark:bg-green-900 dark:text-green-200"
          }
        >
          {label}
        </span>
      )}
    </div>
  );
};

interface FooterGroupProps {
  title: string;
  links: Array<FooterLinkProps>;
}

const FooterGroup = ({ title, links }: FooterGroupProps) => {
  return (
    <div className={"flex-1"}>
      <div
        className={"mb-2 px-2 text-[13px] text-slate-600 dark:text-slate-400"}
      >
        {title}
      </div>
      <ul className={"flex flex-col"}>
        {links.map(({ title: linkTitle, href, label, isInternal }) => (
          <li key={href}>
            <FooterLink
              title={linkTitle}
              href={href}
              label={label}
              isInternal={isInternal}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

const FooterDescription = ({ profile }: { profile: ProfileQueryResult }) => {
  return (
    <div className={"max-w-[348px]"}>
      <div className={"mb-3 text-[13px] text-slate-600 dark:text-slate-400"}>
        About Me
      </div>
      <p className={"mb-4 font-normal leading-relaxed"}>
        I am a self-taught developer who believes in the power of the internet
        and the community.
      </p>
      <ul className={"-ml-2 flex gap-1"}>
        <li>
          <a
            href={profile?.socials?.linkedin ?? undefined}
            target="_blank"
            rel="noreferrer nofollow"
            className={"flex h-9 w-9 items-center justify-center"}
            aria-label="My Twitter profile"
            title="My Twitter profile"
          >
            <IconBrandLinkedin className={"h-5 w-5"} />
          </a>
        </li>
        <li>
          <a
            href={profile?.socials?.github ?? undefined}
            target="_blank"
            rel="noreferrer nofollow"
            className={"flex h-9 w-9 items-center justify-center"}
            aria-label="My GitHub profile"
            title="My GitHub profile"
          >
            <IconBrandGithub className={"h-5 w-5"} />
          </a>
        </li>
        <li>
          <a
            href={`mailto:${profile?.email}`}
            target="_blank"
            rel="noreferrer nofollow"
            className={"flex h-9 w-9 items-center justify-center"}
            aria-label="My Leetcode profile"
            title="Contact Me"
          >
            <IconMail className={"h-5 w-5"} />
          </a>
        </li>
      </ul>
    </div>
  );
};

const Footer = async () => {
  const profile = await getProfile();

  return (
    <footer
      className={
        "dark:border-divider-dark mt-24 w-full border-light pt-16 text-sm text-slate-900 dark:text-slate-200"
      }
    >
      <div className={"max-container"}>
        <div className={"py-10 font-semibold"}>
          <div className={"flex flex-col-reverse gap-16 lg:flex-row"}>
            <div className={"flex-1"}>
              <FooterDescription profile={profile} />
            </div>
            <div
              className={
                "-mx-2 flex flex-1 flex-col gap-8 sm:flex-row sm:justify-center sm:gap-16 lg:mx-0"
              }
            >
              <div className={"flex sm:gap-16"}>
                <FooterGroup
                  title="Work"
                  links={[
                    { title: "Contact", href: "/contact" },
                    { title: "Experience", href: "/about#experience" },
                    { title: "Projects", href: "/projects" },
                    {
                      title: "Services",
                      href: "/services",
                      label: "soon",
                    },
                    { title: "Studio", href: "/work/studio", label: "soon" },
                  ]}
                />
                <FooterGroup
                  title="Explore"
                  links={[
                    {
                      title: "Personal Blog",
                      href: profile?.socials?.blog ?? "/",
                      isInternal: false,
                    },
                    {
                      title: "Playground",
                      href: "/playground",
                    },
                    {
                      title: "Guest Book",
                      href: "/guestbook",
                      label: "soon",
                    },
                    {
                      title: "T.I.L",
                      href: "/today-i-learned",
                      label: "soon",
                    },
                  ]}
                />
              </div>
              <div className={"flex sm:gap-16"}>
                <FooterGroup
                  title="This Site"
                  links={[
                    {
                      title: "Source Code",
                      href: "https://github.com/indiecodermm/next-portfolio",
                      isInternal: false,
                    },
                    {
                      title: "Site Map",
                      href: "/sitemap.xml",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "border-divider-light dark:border-divider-dark flex justify-between border-t py-6 text-xs"
          }
        >
          <div className={"font-semibold"}>
            &copy; {dayjs().format("YYYY")}, Hein Thant
          </div>
          <div className={"text-slate-500 dark:text-slate-400"}>
            <SiteMap />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
