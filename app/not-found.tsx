import { HoverBorderButton } from "@/components/ui/hover-button";
import { StarsBackground } from "@/components/ui/star-background";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-bg relative flex h-screen flex-col items-center justify-center px-4 text-center">
      <StarsBackground />
      <h1 className="text-gradient text-6xl font-bold sm:text-8xl">404</h1>
      <p className="text-fg mt-4 text-xl sm:text-2xl">
        Oops! This page doesn&apos;t exist.
      </p>
      <p className="text-muted mt-2 mb-8 max-w-md sm:text-lg">
        Either you&apos;re lost, or this page has moved. Let&apos;s get you back
        on track.
      </p>
      <HoverBorderButton>
        <Link
          href="/"
          className="text-fg flex items-center gap-1 px-2 py-px transition"
        >
          <IconChevronLeft />
          Take me home
        </Link>
      </HoverBorderButton>
    </div>
  );
}
