"use client";

import { usePathname } from "next/navigation";

import { getBaseUrl } from "@/utils/url";

export default function useCurrentUrl() {
  const pathname = usePathname();

  return `${getBaseUrl()}${pathname}`;
}
