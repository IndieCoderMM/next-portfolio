import React from "react";

const CTA = ({ title, text, href, buttonText, icon: Icon }) => {
  return (
    <section className="innerWidth mx-auto">
      <div className="interWidth yPaddings mx-auto flex flex-col items-center justify-center gap-4">
        <h3 className="text-center text-2xl font-semibold capitalize lg:text-4xl">
          {title}
        </h3>
        <p className="text-center text-lg lg:text-xl">{text}</p>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="outlineBtn mt-8 rounded-full"
        >
          <div className="h-8 w-8">
            <Icon />
          </div>
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default CTA;
