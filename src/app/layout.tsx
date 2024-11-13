import "easymde/dist/easymde.min.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const nunito = localFont({
  src: "./fonts/NunitoVF.ttf",
  variable: "--font-nunito",
  weight: "400 600 900",
});

const openSans = localFont({
  src: "./fonts/OpenSansVF.ttf",
  variable: "--font-open-sans",
  weight: "400 600 900",
});

export const metadata: Metadata = {
  title: "Hein Thant Oo",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${openSans.variable} font-open antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
