import Heading from "@/components/common/heading";
import CtaLayout from "@/components/layout/cta-layout";
import { IconMessage2 } from "@tabler/icons-react";
import Link from "next/link";

const ContactCTA = () => {
  return (
    <CtaLayout>
      <Heading as="h3" className="text-xl md:text-3xl lg:text-5xl">
        Have a project idea?
      </Heading>
      <p className="md:text-xl lg:text-2xl">
        You’ve got the vision, I’ve got the code. Let’s build something amazing!
      </p>
      <Link href="/contact" className="outline-button mt-8 rounded-full">
        <IconMessage2 />
        <span>Let's Chat</span>
      </Link>
    </CtaLayout>
  );
};

export default ContactCTA;
