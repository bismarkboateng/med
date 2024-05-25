import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Toaster } from 'sonner';
import "./globals.css";
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

const inter = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Med",
  description: "Med is a medical management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <head>
      <ColorSchemeScript />
     </head>
     <body className={inter.className}>
      <MantineProvider>
        <Toaster />
        {children}
      </MantineProvider>
     </body>
    </html>
  );
}
