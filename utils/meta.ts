import { siteUrl } from "@/config";
import { Metadata } from "next";

export const getMetadata = ({
  title,
  description,
  image,
}: {
  title: string;
  description?: string;
  image?: string;
}): Metadata => {
  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    openGraph: {
      images: [image ?? "/api/og?title=Personal+Website"],
    },
  };
};
