import "@/styles/globals.css";
import "easymde/dist/easymde.min.css";
import type { Metadata } from "next";
import { Gochi_Hand, Open_Sans, Rubik } from "next/font/google";

const gochiHand = Gochi_Hand({
  variable: "--font-gochi-hand",
  subsets: ["latin"],
  weight: "400",
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hein Thant · Full-Stack Developer",
  description:
    "My corner of the internet to share projects I’ve built and a bit about what drives me as a developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} ${openSans.variable} ${gochiHand.variable} w-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
