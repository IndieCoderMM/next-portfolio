import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import ContactForm from "../components/form";
import Socials from "../components/socials";

const ConstactFormSection = () => {
  return (
    <SectionContainer className="borderHr w-full px-4">
      <Heading className="mb-4 sm:mb-8">Contact Me 💌</Heading>
      <p className="inner-container text-center text-lg font-medium">
        Questions, ideas, or random thoughts? Send them my way—I promise I’ll
        reply (probably with too many emojis).
      </p>
      <div className="borderVr paddings w-full max-w-3xl">
        <ContactForm />
      </div>
      <div className="mt-14 md:mt-20">
        <Heading
          as="h4"
          className="mb-4 text-center text-3xl font-semibold capitalize sm:text-4xl lg:text-5xl"
        >
          Find Me Online 🌐
        </Heading>
        <p className="mb-4 text-center text-lg font-medium lg:text-xl">
          I'll be happy to connect with you on any of these platforms.
        </p>
        <Socials />
      </div>
    </SectionContainer>
  );
};

export default ConstactFormSection;
