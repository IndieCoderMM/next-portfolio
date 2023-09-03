import {
  BlogSmallIcon,
  EmailOutlineIcon,
  GitHubOutlineIcon,
  LinkedInOutlineIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import SocialIcons from "@/components/SocialIcons";
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
        <SocialIcons email={email} socials={socials} />
      </section>
    </main>
  );
};

export default ContactPage;
