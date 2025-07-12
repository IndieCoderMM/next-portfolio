import CTA from "@/components/common/call-to-action";
import { projectPage } from "@/config/content/pages";
import { IconMessage2 } from "@tabler/icons-react";

const ContactCTA = () => {
  return (
    <CTA
      heading={projectPage.contactHeading}
      description={projectPage.contactDesc}
      href="/contact"
      buttonContent={
        <>
          <IconMessage2 />
          <span>{projectPage.contactCta}</span>
        </>
      }
    />
  );
};

export default ContactCTA;
