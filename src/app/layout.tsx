import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head />
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
