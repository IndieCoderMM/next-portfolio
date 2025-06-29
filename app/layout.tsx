import "@/styles/globals.css";
import "easymde/dist/easymde.min.css";
import type { Metadata } from "next";
import { Gochi_Hand, Poppins } from "next/font/google";

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
        className={`${openSans.variable} ${gochiHand.variable} overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
