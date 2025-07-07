import { metaTexts } from "@/config/metadata";
import "easymde/dist/easymde.min.css";
import type { Metadata } from "next";
import { Gochi_Hand, Poppins } from "next/font/google";
import "./globals.css";

const gochiHand = Gochi_Hand({
  variable: "--font-gochi-hand",
  subsets: ["latin"],
  weight: "400",
});

const openSans = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: metaTexts.home.title,
  description: metaTexts.home.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${gochiHand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
