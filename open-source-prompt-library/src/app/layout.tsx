import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Open Source Prompt Library',
  description: 'A collection of high-quality prompts for various purposes - coding, learning, creativity, and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-900 text-slate-200 antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}