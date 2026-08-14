import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileBar } from "@/components/layout/StickyMobileBar";
import { BusinessSchema } from "@/components/seo/BusinessSchema";
import { site } from "@/lib/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Home of Talent | Home Improvement & Handyman Services Johannesburg",
    template: "%s | Home of Talent",
  },
  description: site.description,
  icons: {
    icon: "/brand/favicon.svg",
  },
  openGraph: {
    title: "Home of Talent | Home Improvement & Handyman Services Johannesburg",
    description: site.description,
    type: "website",
    locale: "en_ZA",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Home of Talent | Home Improvement & Handyman Services Johannesburg",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileBar />
        <BusinessSchema />
      </body>
    </html>
  );
}
