import { IconCode } from "@tabler/icons-react";

export const navbarContent = {
  logo: (
    <div className="flex items-center gap-1">
      <div className="bg-primary rounded-lg p-1 text-black transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-sm">
        <IconCode className="h-5 w-5" />
      </div>
      <h1 className="text-lg font-medium tracking-[-0.08rem] sm:text-2xl">
        <span className="text-white">hein</span>
        <span className="text-primary">Thant</span>
      </h1>
    </div>
  ),
  cta: {
    text: "Get My CV",
  },
};
