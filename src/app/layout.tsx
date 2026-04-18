'use client';

import { Manrope, Playfair_Display, Cormorant_Garamond, Geist } from 'next/font/google';
import { ReactNode } from 'react';
import Script from 'next/script';
import './globals.css';
import { cn } from "@/lib/utils";
import { Toaster } from '../components/ui/sonner';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const manrope = Manrope({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable, playfair.variable, cormorant.variable, manrope.variable)}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning className="antialiased">
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}