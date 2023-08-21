import "./globals.css";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  display: "swap",
});

export const metadata = {
  title: "Hein Thant Oo - Full Stack Web Developer",
  description:
    "Explore the web development projects and skills of Hein Thant, specializing in React, Redux, JavaScript, full-stack and UI/UX.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mont.variable} bg-light font-mont dark:bg-dark dark:text-light`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
