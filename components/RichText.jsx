import { PortableText } from "@portabletext/react";

const RichText = ({ value, styles }) => {
  return (
    <PortableText
      value={value}
      components={{
        block: ({ children }) => (
          <div
            className={`${styles} leading-loose text-dark dark:text-light md:text-lg`}
          >
            {children}
          </div>
        ),
        marks: {
          link: ({ value, children }) => (
            <a
              href={value?.href}
              target="_blank"
              rel="noreferrer"
              className="dark:text-primaryDark font-medium text-primary underline transition-all duration-300 hover:no-underline hover:brightness-110"
            >
              {children}
            </a>
          ),
        },
      }}
    />
  );
};

export default RichText;
