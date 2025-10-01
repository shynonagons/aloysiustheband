import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import { SiteHeader } from './site-header';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'aloysius the band',
  description: 'Always an aloysius, sometimes a band. Cosmic indie bedroom folk from Minneapolis MN.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
      </body>
    </html>
  );
}
