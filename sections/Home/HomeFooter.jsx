import SocialIcons from "@/components/SocialIcons";
import Proptypes from "prop-types";

const HomeFooter = ({ socials, email, resumeURL }) => {
  return (
    <footer className="xPaddings pb-8 sm:pb-12">
      <div className="interWidth mx-auto flex flex-col items-center justify-center gap-8 md:justify-between lg:flex-row">
        <p className="text-lg font-medium">
          Crafted by me &copy; {new Date().getFullYear()}
        </p>
        <SocialIcons socials={socials} email={email} />
        <div className="flex items-center justify-center gap-4">
          <a
            href={resumeURL}
            target="_blank"
            className="transition-colors hover:text-primary hover:underline dark:hover:text-accent"
          >
            Resume
          </a>
          |
          <a
            href="https://github.com/indiecodermm/next-portfolio"
            target="_blank"
            className="transition-colors hover:text-primary hover:underline dark:hover:text-accent"
          >
            Code
          </a>
          |
          <a
            href="/sitemap.xml"
            target="_blank"
            className="transition-colors hover:text-primary hover:underline dark:hover:text-accent"
          >
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

HomeFooter.propTypes = {
  socials: Proptypes.array.isRequired,
  email: Proptypes.string.isRequired,
  resumeURL: Proptypes.string.isRequired,
};

export default HomeFooter;
