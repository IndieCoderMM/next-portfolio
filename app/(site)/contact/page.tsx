import { metaTexts } from "@/config/metadata";
import ConstactFormSection from "@/features/contact/sections/contact-form";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: metaTexts.contact.title,
  description: metaTexts.contact.description,
};

const ContactPage = () => {
  return (
    <div className="w-full">
      <ConstactFormSection />
    </div>
  );
};

export default ContactPage;
