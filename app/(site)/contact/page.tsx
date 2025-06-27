import ConstactFormSection from "@/features/contact/sections/contact-form";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Hein Thant · Full-Stack Developer",
  description:
    "Questions, ideas or just a quick hello, this is the place to react me. Let's connect!",
};

const ContactPage = () => {
  return (
    <div className="w-full">
      <ConstactFormSection />
    </div>
  );
};

export default ContactPage;
