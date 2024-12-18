import { getProfile } from "@/sanity/lib/query";
import {
  IconBrandBluesky,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

const Socials = async () => {
  const profile = await getProfile();

  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-4">
      <a
        href={profile?.socials?.github ?? undefined}
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
        aria-label="GitHub"
        className="social-icon"
      >
        <IconBrandGithub />
      </a>
      <a
        href={profile?.socials?.linkedin ?? undefined}
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
        aria-label="LinkedIn"
        className="social-icon"
      >
        <IconBrandLinkedin />
      </a>
      <a
        href={`mailto:${profile?.email}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Email"
        aria-label="Email"
        className="social-icon"
      >
        <IconMail />
      </a>
      <a
        href={profile?.socials?.bluesky ?? undefined}
        target="_blank"
        rel="noopener noreferrer"
        title="Blue Sky"
        aria-label="Blue Sky"
        className="social-icon"
      >
        <IconBrandBluesky />
      </a>
    </div>
  );
};

export default Socials;
