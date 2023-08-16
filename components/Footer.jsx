import { getProfile } from "@/sanity/sanity.query";
import Link from "next/link";

const Footer = async () => {
  const { email } = await getProfile();
  return (
    <footer className="yPaddings">
      <div className="innerWidth mx-auto space-y-4 text-center">
        <h3 className="text-3xl font-bold">Let's Connect</h3>
        <blockquote className="leading-relaxed md:text-lg">
          <p>Wanna get in touch or talk about a project?</p>
          <p>
            Feel free to contact me via email at{" "}
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          <p>
            Or send a message using the form at the{" "}
            <Link href="/contact">Contact Page</Link>
          </p>
        </blockquote>
      </div>
    </footer>
  );
};

export default Footer;
