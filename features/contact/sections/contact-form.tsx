import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { contactContent } from "@/config/content/contactpage";
import { IconWorld } from "@tabler/icons-react";
import ContactForm from "../components/form";
import Socials from "../components/socials";

const ConstactFormSection = () => {
  return (
    <SectionContainer className="borderHr w-full px-4">
      <Heading className="mb-2">{contactContent.heading}</Heading>
      <p className="inner-container text-center font-light tracking-tight sm:text-lg sm:leading-tight md:text-xl lg:text-2xl">
        {contactContent.desc}
      </p>
      <div className="borderVr paddings w-full max-w-3xl">
        <ContactForm />
      </div>
      <div className="mt-16 flex flex-col items-center gap-4 md:mt-20">
        <div className="self-center">
          <div className="section-badge">
            <IconWorld />
            <span className="ml-2">{contactContent.socialHeading}</span>
          </div>
        </div>
        <p className="mb-4 text-center text-lg lg:text-xl">
          {contactContent.socialDesc}
        </p>
        <Socials />
      </div>
    </SectionContainer>
  );
};

export default ConstactFormSection;
