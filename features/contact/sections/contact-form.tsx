import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { IconWorld } from "@tabler/icons-react";
import ContactForm from "../components/form";
import Socials from "../components/socials";

const ConstactFormSection = () => {
  return (
    <SectionContainer className="borderHr w-full px-4">
      <Heading className="mb-8">
        <span>Say Hi, Let's Collaborate</span>
      </Heading>
      <p className="inner-container text-center font-light sm:text-lg sm:leading-loose lg:text-2xl">
        Questions, ideas or just hello? Send them my way!
        <br /> I promise I’ll reply 💌{" "}
        <small>(probably with too many emojis)</small>
      </p>
      <div className="borderVr paddings w-full max-w-3xl">
        <ContactForm />
      </div>
      <div className="mt-16 md:mt-20">
        <div className="section-badge">
          <IconWorld />
          <span className="ml-2">Find Me Online</span>
        </div>
        <p className="mb-4 text-center text-lg font-medium lg:text-xl">
          I'll be happy to connect with you on any of these platforms.
        </p>
        <Socials />
      </div>
    </SectionContainer>
  );
};

export default ConstactFormSection;
