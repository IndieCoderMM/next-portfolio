import Heading from "@/components/common/heading";
import CtaLayout from "@/components/layout/cta-layout";
import { projectContent } from "@/config/content/projectPage";
import { IconMessage2 } from "@tabler/icons-react";
import Link from "next/link";

const ContactCTA = () => {
  return (
    <CtaLayout>
      <Heading as="h3" className="text-xl md:text-3xl lg:text-5xl">
        {projectContent.contactHeading}
      </Heading>
      <p className="md:text-xl lg:text-2xl">{projectContent.contactDesc}</p>
      <Link href="/contact" className="outline-button mt-8 rounded-full">
        <IconMessage2 />
        <span>{projectContent.contactCta}</span>
      </Link>
    </CtaLayout>
  );
};

export default ContactCTA;
