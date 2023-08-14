import Navbar from '@/components/Navbar';
import './globals.css';
import { Montserrat } from 'next/font/google';
import Footer from '@/components/Footer';
import HireMe from '@/components/HireMe';

const mont = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export const metadata = {
  title: 'Hein Thant Oo',
  description: 'Web Developer from Myanmar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mont.variable} font-mont bg-light`}>
        <Navbar />
        {children}
        <Footer />
        <HireMe />
      </body>
    </html>
  );
}
