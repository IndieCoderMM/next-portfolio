import {
  BlogSmallIcon,
  EmailOutlineIcon,
  GitHubOutlineIcon,
  LinkedInOutlineIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import TitleText from "@/components/TitleText";
import { getProfile } from "@/sanity/sanity.query";
import ContactForm from "@/sections/ContactForm";
import Image from "next/image";

export const metadata = {
  title: "Contact Hein Thant Oo - Full Stack Developer | Portfolio",
};

const ContactPage = async () => {
  const { email, socials } = await getProfile();
  return (
    <main className="w-full">
      <section className="paddings innerWidth mx-auto">
        <TitleText text="Contact Me" styles="mb-8" />
        <div className="interWidth">
          <p className="font-medium leading-relaxed text-dark/80 dark:text-light md:text-lg lg:text-xl">
            Got a cool project idea or just want to drop a friendly hello? Go
            ahead and send me a message using the awesome form below. Can't wait
            to hear from you!
          </p>
          <ContactForm />
        </div>
      </section>
      <section className="innerWidth paddings mx-auto space-y-4 pb-8">
        <h3 className="text-lg font-semibold md:text-2xl">
          Let's Stay Connected!
        </h3>
        <p className="interWidth font-medium text-dark/75 dark:text-light md:text-lg">
          Connect with me on GitHub and LinkedIn, explore my blog for insights,
          or simply reach out via email or WhatsApp.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={socials.github}
            aria-label="github"
            className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white dark:border-primaryDark dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-dark"
          >
            <GitHubOutlineIcon />
          </a>
          <a
            href={socials.linkedin}
            aria-label="linkedin"
            className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white dark:border-primaryDark dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-dark"
          >
            <LinkedInOutlineIcon />
          </a>
          <a
            href={`mailto:${email}`}
            aria-label="email"
            className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white dark:border-primaryDark dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-dark"
          >
            <EmailOutlineIcon />
          </a>
          <a
            href={socials.blog}
            aria-label="blog"
            className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white dark:border-primaryDark dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-dark"
          >
            <BlogSmallIcon />
          </a>
          <a
            href={socials.whatsapp}
            aria-label="whatsapp"
            className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white dark:border-primaryDark dark:text-primaryDark dark:hover:bg-primaryDark dark:hover:text-dark"
          >
            <WhatsAppIcon />
          </a>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
