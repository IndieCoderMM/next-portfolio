import CTA from "@/components/common/call-to-action";
import { projectContent } from "@/config/content/projectPage";
import { IconMessage2 } from "@tabler/icons-react";

const ContactCTA = () => {
  return (
    <CTA
      heading={projectContent.contactHeading}
      description={projectContent.contactDesc}
      href="/contact"
      buttonContent={
        <>
          <IconMessage2 />
          <span>{projectContent.contactCta}</span>
        </>
      }
    />
  );
};

export default ContactCTA;
