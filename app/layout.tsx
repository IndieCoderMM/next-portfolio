import "@/styles/globals.css";
import "easymde/dist/easymde.min.css";
import type { Metadata } from "next";
import { Gochi_Hand } from "next/font/google";
import localFont from "next/font/local";

const gochiHand = Gochi_Hand({
  variable: "--font-gochi-hand",
  subsets: ["latin"],
  weight: "400",
});

const nunito = localFont({
  src: "./fonts/NunitoVF.ttf",
  variable: "--font-nunito",
  weight: "400 500 600 900",
});

const openSans = localFont({
  src: "./fonts/OpenSansVF.ttf",
  variable: "--font-open-sans",
  weight: "400 500 600 900",
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
        className={`${nunito.variable} ${openSans.variable} ${gochiHand.variable} font-open w-full antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
