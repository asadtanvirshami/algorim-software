import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const revamped = localFont({
  src: "./fonts/Revamped.otf",
  variable: "--font-revamped",
  weight: "100 900",
});

const redhat = localFont({
  src: "./fonts/RedHatDisplay-Regular.ttf",
  variable: "--font-redhat",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Algorim - Blockchain & AI Solutions",
  description:
    "Utilizing the technology of Blockchain & AI for Business. We build robust, scalable, and secure solutions for your business. Learn more about our services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${redhat.variable} ${revamped.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
