import React from "react";

const CustomButton = ({ children, onClick, color = "primary" }) => {
  return (
    <button
      className={`group relative w-full max-w-[300px] cursor-pointer select-none outline-offset-4 transition-all duration-[250ms] hover:brightness-110`}
      type="button"
      onClick={onClick}
    >
      <span className="absolute left-0 top-0 h-full w-full translate-y-[2px] rounded-xl bg-black/30 transition-transform duration-[600ms] ease-out group-hover:translate-y-[4px] group-hover:duration-[200ms] group-active:translate-y-[1px] group-active:duration-[34ms]"></span>
      <span
        className={`absolute left-0 top-0 h-full w-full rounded-xl bg-gradient-to-r from-${color}-900 via-${color}-800 to-${color}-900`}
      ></span>
      <span
        className={`relative block w-full translate-y-[-4px] rounded-xl bg-${color} px-[27px] py-[12px] transition-transform duration-[600ms] group-hover:translate-y-[-6px] group-hover:duration-[250ms] group-active:translate-y-[-2px] group-active:duration-[34ms]`}
      >
        {children}
      </span>
    </button>
  );
};

export default CustomButton;
