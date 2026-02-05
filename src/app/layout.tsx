import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'BillyB Presents - Event Services',
  description: 'End-to-end event solutions including talent booking, venue procurement, screen printing, catering, and custom art walls.',
  keywords: ['events', 'talent booking', 'venue', 'catering', 'screen printing', 'custom art'],
  authors: [{ name: 'BillyB Presents' }],
  openGraph: {
    title: 'BillyB Presents - Event Services',
    description: 'End-to-end event solutions...',
    url: 'https://billybpresents.com',
    siteName: 'BillyB Presents',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BillyB Presents - Event Services',
    description: 'End-to-end event solutions...',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
