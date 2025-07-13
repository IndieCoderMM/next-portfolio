import { footerLinks } from "@/config/footerLinks";
import { profile as profileInfo } from "@/config/profile";
import { ProfileQueryResult } from "@/sanity.types";
import { getProfile } from "@/sanity/lib/query";
import { formatTimeFromNow } from "@/utils/dayjs";
import {
  IconBrandBluesky,
  IconBrandGithub,
  IconBrandLinkedin,
  IconExternalLink,
  IconHistory,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";
import LinkUnderline from "../common/link";
import { SlideIn } from "../ui/transitions";

const FooterLink = ({
  title,
  href,
  label = undefined,
  isInternal = true,
}: FooterLink) => {
  if (label === "soon") {
    return (
      <span className={"footer-link cursor-not-allowed"}>
        {title}
        <span
          className={
            "rounded-full bg-green-900 px-1 py-0.5 text-[8px] text-green-200 uppercase"
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
              "rounded-full bg-green-900 px-1 py-0.5 text-[8px] text-green-200 uppercase"
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
      <LinkUnderline
        href={href}
        target="_blank"
        className={"footer-link"}
        label={title}
      />
      <IconExternalLink className="h-4 w-4" />
      {label && (
        <span
          className={
            "rounded-full bg-green-900 px-1 py-0.5 text-[8px] text-green-200 uppercase"
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
  links: Array<FooterLink>;
}

const FooterGroup = ({ title, links }: FooterGroupProps) => {
  return (
    <div className={"flex-1"}>
      <h2 className={"mb-2 px-2 text-sm font-normal text-slate-400"}>
        {title}
      </h2>
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
    <div className={"flex max-w-sm flex-col"}>
      <div className={"mb-3 text-sm text-slate-400"}>About Me</div>
      <p className={"mb-4 leading-relaxed font-normal"}>{profile?.bio}</p>
      <ul className={"-ml-3 flex items-center gap-1"}>
        <li>
          <a
            href={profile?.socials?.linkedin ?? undefined}
            target="_blank"
            rel="noreferrer nofollow"
            className={
              "hover:text-primary flex h-9 w-9 items-center justify-center transition duration-100 hover:scale-105"
            }
            aria-label="My LinkedIn profile"
            title="Connect on LinkedIn"
          >
            <IconBrandLinkedin className={"h-5 w-5"} />
          </a>
        </li>
        <li>
          <a
            href={profile?.socials?.github ?? undefined}
            target="_blank"
            rel="noreferrer nofollow"
            className={
              "hover:text-primary flex h-9 w-9 items-center justify-center transition duration-100 hover:scale-105"
            }
            aria-label="My GitHub profile"
            title="View my GitHub profile"
          >
            <IconBrandGithub className={"h-5 w-5"} />
          </a>
        </li>
        <li>
          <a
            href={`mailto:${profile?.socials?.email}`}
            target="_blank"
            rel="noreferrer nofollow"
            className={
              "hover:text-primary flex h-9 w-9 items-center justify-center transition duration-100 hover:scale-105"
            }
            aria-label="Email Me"
            title="Email Me"
          >
            <IconMail className={"h-5 w-5"} />
          </a>
        </li>
        <li>
          <a
            href={profile?.socials?.bluesky ?? undefined}
            target="_blank"
            rel="noreferrer nofollow"
            className={
              "hover:text-primary flex h-9 w-9 items-center justify-center transition duration-100 hover:scale-105"
            }
            aria-label="My BlueSky account"
            title="Visit my BlueSky account"
          >
            <IconBrandBluesky className={"h-5 w-5"} />
          </a>
        </li>

        {profile?.location ? (
          <li className="ml-auto">
            <SlideIn>
              <div className="text-text-muted flex items-center justify-center gap-0.5 text-sm">
                <IconMapPin className="h-5 w-5" />
                <p className="">{profile.location}</p>
              </div>
            </SlideIn>
          </li>
        ) : null}
      </ul>
    </div>
  );
};

const Footer = async () => {
  const profile = await getProfile();

  return (
    <footer
      className={
        "border-light relative mt-8 w-full pt-16 text-sm text-slate-200 lg:mt-10"
      }
    >
      <div className={"max-container"}>
        <div className={"py-10"}>
          <div className={"flex flex-col-reverse gap-16 lg:flex-row"}>
            <div className={"flex-1 p-4"}>
              <FooterDescription profile={profile} />
            </div>
            <div
              className={
                "flex flex-1 flex-col gap-8 sm:flex-row sm:justify-center sm:gap-16 lg:mx-0"
              }
            >
              <div className={"flex p-4 sm:gap-16"}>
                {footerLinks.slice(0, 2).map((group) => (
                  <FooterGroup
                    key={group.title}
                    title={group.title}
                    links={group.links}
                  />
                ))}
              </div>
              <div className={"flex p-4 sm:gap-16"}>
                <FooterGroup
                  title={footerLinks[2].title}
                  links={footerLinks[2].links}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "border-light/10 flex w-full justify-between border-t px-4 py-6 text-xs"
          }
        >
          <div className={"font-semibold"}>{profileInfo.copyright}</div>
          {profile?._updatedAt ? (
            <div className="text-fg flex items-center justify-center gap-2 text-xs">
              <IconHistory className="h-4 w-4" />
              <p className="">
                Updated {formatTimeFromNow(profile._updatedAt)}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
