import { PortableText } from "@portabletext/react";

const RichText = ({ value }) => {
  return (
    <PortableText
      value={value}
      components={{
        block: ({ children }) => (
          <div className="leading-relaxed text-dark dark:text-light">
            {children}
          </div>
        ),
        marks: {
          link: ({ value, children }) => (
            <a
              href={value?.href}
              target="_blank"
              rel="noreferrer"
              className="text-primary underline"
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
