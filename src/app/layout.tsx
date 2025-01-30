import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import { Toaster } from "@/components/ui/toaster";
import StoreProvider from "@/redux/storeProvider";
import { ReactQueryClientProvider } from "@/provider/react-query-provider";

// Load local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  weight: "100 900",
  variable: "--font-geist-sans",
});

const revamped = localFont({
  src: "./fonts/Revamped.otf",
  weight: "100 900",
  variable: "--font-revamped",
});

const redhat = localFont({
  src: "./fonts/RedHatDisplay-Regular.ttf",
  weight: "100 900",
  variable: "--font-redhat",
});

const redhatsemibold = localFont({
  src: "./fonts/RedHatDisplay-SemiBold.ttf",
  weight: "100 900",
  variable: "--font-redhat-semi",
});

const redhatextrabold = localFont({
  src: "./fonts/RedHatDisplay-ExtraBold.ttf",
  weight: "100 900",
  variable: "--font-redhat-extra",
});

export const metadata: Metadata = {
  title: "Algorim - Blockchain & AI Solutions",
  description:
    "Utilizing the technology of Blockchain & AI for Business. We build robust, scalable, and secure solutions for your business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Meta tags for SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Algorim - Blockchain & AI Solutions"
        />
        <meta
          property="og:description"
          content="Utilizing the technology of Blockchain & AI for Business. We build robust, scalable, and secure solutions for your business."
        />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://www.algorim.com" />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Algorim - Blockchain & AI Solutions"
        />
        <meta
          name="twitter:description"
          content="Utilizing the technology of Blockchain & AI for Business. We build robust, scalable, and secure solutions for your business."
        />
        <meta name="twitter:image" content="/path-to-your-image.jpg" />
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Algorim",
              url: "https://www.algorim.com",
              logo: "https://www.algorim.com/logo.png",
              description:
                "Utilizing the technology of Blockchain & AI for Business. We build robust, scalable, and secure solutions for your business.",
              sameAs: [
                "https://www.facebook.com/Algorim",
                "https://twitter.com/Algorim",
                "https://www.linkedin.com/company/Algorim",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-123-4567",
                contactType: "Customer Service",
                areaServed: "Global",
                availableLanguage: ["English", "Spanish"],
              },
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${redhat.variable} ${redhatsemibold.variable} ${redhatextrabold.variable} ${revamped.variable} antialiased`}
      >
        <ReactQueryClientProvider>
          <StoreProvider>{children}</StoreProvider>
        </ReactQueryClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
