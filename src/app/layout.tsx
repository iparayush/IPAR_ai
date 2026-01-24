import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: 'Ayush Ipar | Software Engineer',
  description: 'Personal portfolio of Ayush Ipar, a Software Engineer and Google Developer Expert for Firebase.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head />
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
