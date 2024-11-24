import Heading from "@/components/common/heading";
import { SectionContainer } from "@/components/layout/section";
import ContactForm from "../components/form";

const ConstactFormSection = () => {
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
    </SectionContainer>
  );
};

export default ConstactFormSection;
