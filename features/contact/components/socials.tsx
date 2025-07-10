import { getProfile } from "@/sanity/lib/query";
import {
  IconBrandBluesky,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { Variants } from "motion";
import * as motion from "motion/react-client";

const variants: Variants = {
  hidden: {
    x: "100%",
    opacity: 0,
    rotate: 80,
  },
  show: {
    x: 0,
    opacity: 1,
    rotate: 0,
  },
};

const SocialButton = ({
  href,
  icon: Icon,
  title,
}: {
  href?: string;
  icon: React.ComponentType;
  title: string;
}) => {
  if (!href) {
    return null;
  }

  return (
    <motion.div
      variants={variants}
      transition={{ type: "spring", stiffness: 120, bounce: 0.5 }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        aria-label={title}
        className="social-icon"
      >
        <Icon />
      </a>
    </motion.div>
  );
};

const Socials = async () => {
  const profile = await getProfile();

  return (
    <motion.div
      variants={{
        show: {
          transition: {
            staggerChildren: 0.05,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      className="flex w-full flex-wrap items-center justify-center gap-4"
    >
      <SocialButton
        href={profile?.socials?.github ?? undefined}
        title="GitHub"
        icon={IconBrandGithub}
      />
      <SocialButton
        href={profile?.socials?.linkedin ?? undefined}
        title="LinkedIn"
        icon={IconBrandLinkedin}
      />
      <SocialButton
        href={`mailto:${profile?.socials?.email}`}
        title="Email"
        icon={IconMail}
      />
      <SocialButton
        href={profile?.socials?.bluesky ?? undefined}
        title="Blue Sky"
        icon={IconBrandBluesky}
      />
    </motion.div>
  );
};

export default Socials;
