import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import { contactPage } from "@/config/content/pages";
import { IconWorld } from "@tabler/icons-react";
import ContactForm from "../components/form";
import Socials from "../components/socials";

const ConstactFormSection = () => {
  return (
    <SectionContainer className="px-4">
      <Heading className="mb-4 px-4 sm:mx-auto sm:mb-8">
        {contactPage.heading}
      </Heading>
      <p className="inner-container text-center font-light tracking-tight sm:text-lg sm:leading-tight md:text-xl lg:text-2xl">
        {contactPage.desc}
      </p>
      <div className="paddings w-full max-w-3xl">
        <ContactForm />
      </div>
      <div className="mt-26 flex flex-col items-center gap-4 md:mt-20">
        <div className="self-center">
          <div className="section-badge">
            <IconWorld />
            <span className="ml-2">{contactPage.socialHeading}</span>
          </div>
        </div>
        <p className="mb-4 text-center text-lg lg:text-xl">
          {contactPage.socialDesc}
        </p>
        <Socials />
      </div>
    </SectionContainer>
  );
};

export default ConstactFormSection;
