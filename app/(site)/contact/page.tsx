import { metaTexts } from "@/config/metadata";
import ConstactFormSection from "@/features/contact/sections/contact-form";
import { getMetadata } from "@/utils/meta";

import { Metadata } from "next";

export const metadata: Metadata = getMetadata({
  title: metaTexts.contact.title,
  description: metaTexts.contact.description,
});

const ContactPage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center">
      <ConstactFormSection />
    </div>
  );
};

export default ContactPage;
