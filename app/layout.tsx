import { metaTexts } from "@/config/metadata";
import { getMetadata } from "@/utils/meta";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const openSans = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = getMetadata({
  title: metaTexts.home.title,
  description: metaTexts.home.description,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
