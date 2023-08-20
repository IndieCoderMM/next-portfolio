import {
  BlogSmallIcon,
  EmailOutlineIcon,
  GitHubOutlineIcon,
  LinkedInOutlineIcon,
  WhatsAppIcon,
  WhatsAppIcon2,
} from "@/components/Icons";
import TitleText from "@/components/TitleText";
import Transition from "@/components/Transition";
import { getProfile } from "@/sanity/sanity.query";
import ContactForm from "@/sections/ContactForm";

const ContactPage = async () => {
  const { email, socials } = await getProfile();
  return (
    <main className="paddings">
      <Transition />
      <section className="innerWidth mx-auto">
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
      <section className="innerWidth yPaddings mx-auto space-y-4">
        <h3 className="text-lg font-semibold md:text-2xl">
          Let's Stay Connected!
        </h3>
        <p className="interWidth font-medium text-dark/75 dark:text-light md:text-lg">
          Connect with me on GitHub and LinkedIn, explore my blog for insights,
          or simply reach out via email or WhatsApp. Looking forward to
          connecting!
        </p>
        <div className="flex flex-wrap items-center gap-4">
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
            href={socials.blog}
            className="h-12 w-12 rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:border-white hover:bg-primary hover:text-white"
          >
            <BlogSmallIcon />
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
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
