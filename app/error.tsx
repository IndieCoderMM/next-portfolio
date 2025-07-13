"use client";
import { IconChevronLeft } from "@tabler/icons-react"; // adjust if you use a different icon lib
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isLocalhost, setIsLocalhost] = useState(false);

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1")
    ) {
      setIsLocalhost(true);
    }
  }, []);

  return (
    <div className="bg-bg relative flex h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-gradient text-6xl font-bold sm:text-8xl">Error</h1>
      <p className="text-fg mt-4 text-xl sm:text-2xl">Something went wrong!</p>
      <pre className="text-text-muted bg-secondary/10 mt-2 mb-8 max-w-md rounded p-4 text-left whitespace-pre-wrap sm:text-lg">
        {error?.message}
      </pre>

      <button
        onClick={() => reset()}
        className="text-fg border-fg hover:bg-fg hover:text-bg mb-6 inline-flex items-center gap-2 rounded border px-4 py-2 transition"
      >
        Try again
      </button>

      {isLocalhost && (
        <Link
          href="/dashboard"
          className="text-fg flex items-center gap-1 px-2 py-px transition hover:underline"
        >
          <IconChevronLeft />
          Open Dashboard
        </Link>
      )}
    </div>
  );
}
