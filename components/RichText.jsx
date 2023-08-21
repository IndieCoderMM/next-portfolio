import { PortableText } from "@portabletext/react";

const RichText = ({ value, styles }) => {
  return (
    <PortableText
      value={value}
      components={{
        block: ({ children }) => (
          <div
            className={`${styles} font-medium leading-loose text-dark dark:text-light`}
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
              className="font-semibold text-primary underline transition-all duration-300 hover:text-primary/70 hover:no-underline"
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
