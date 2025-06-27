"use client";

import { IconCompass } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const NotForMobile = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div className="absolute inset-0 grid place-items-center bg-white p-4 md:hidden">
      <div className="flex flex-col items-center gap-8">
        <p className="text-center text-5xl">😐📱&rarr; 🖥🤩</p>
        <p className="text-center text-2xl">
          This page is not available on mobile. Please view on a desktop to
          enjoy the full experience.
        </p>

        <button
          className="outline-button mt-8 rounded-full"
          onClick={handleBack}
        >
          <IconCompass />
          <span>Continue Exploring</span>
        </button>
      </div>
    </div>
  );
};

export default NotForMobile;
