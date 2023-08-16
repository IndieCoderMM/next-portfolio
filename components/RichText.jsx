import { PortableText } from "@portabletext/react";

const RichText = ({ value }) => {
  return (
    <PortableText
      value={value}
      components={{
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
