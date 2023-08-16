import "./globals.css";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata = {
  title: "Hein Thant | Web Developer",
  description: "Web Developer from Myanmar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mont.variable} bg-light font-mont dark:bg-dark dark:text-light`}
      >
        {children}
      </body>
    </html>
  );
}
