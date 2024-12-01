import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { getProfile } from "@/sanity/lib/query";
import {
  IconBrandBlogger,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";
import ContactForm from "../components/form";

const ConstactFormSection = async () => {
  const profile = await getProfile();

  return (
    <SectionContainer className="borderHr w-full">
      <Heading className="mb-8">Contact Me 💌</Heading>
      <p className="text-lg font-medium">
        I'm always open to new projects, collaborations, or employment
        opportunities.
      </p>
      <div className="borderVr paddings w-full max-w-3xl">
        <ContactForm />
      </div>
      <div className="mt-14 md:mt-20">
        <Heading
          as="h4"
          className="mb-4 text-center text-lg font-semibold capitalize md:text-2xl lg:text-4xl"
        >
          Find Me Online 🌍
        </Heading>
        <p className="text-center text-lg font-medium">
          Feel free to reach out to me on any of these platforms.
        </p>
        <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-4 md:mt-10">
          <a
            href={profile?.socials?.github ?? undefined}
            title="GitHub"
            aria-label="GitHub"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:bg-primary hover:text-white"
          >
            <IconBrandGithub />
          </a>
          <a
            href={profile?.socials?.linkedin ?? undefined}
            title="LinkedIn"
            aria-label="LinkedIn"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:bg-primary hover:text-white"
          >
            <IconBrandLinkedin />
          </a>
          <a
            href={`mailto:${profile?.email}`}
            title="Email"
            aria-label="Email"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:bg-primary hover:text-white"
          >
            <IconMail />
          </a>
          <a
            href={profile?.socials?.whatsapp ?? undefined}
            title="WhatsApp"
            aria-label="WhatsApp"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:bg-primary hover:text-white"
          >
            <IconBrandWhatsapp />
          </a>
          <a
            href={profile?.socials?.blog ?? undefined}
            title="Blog"
            aria-label="Blog"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary p-2 text-primary transition hover:scale-110 hover:bg-primary hover:text-white"
          >
            <IconBrandBlogger />
          </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ConstactFormSection;
