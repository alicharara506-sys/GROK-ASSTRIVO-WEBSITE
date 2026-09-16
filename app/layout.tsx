import type { Metadata } from "next";
import { Geist, Syne } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "Astrivo",
    "growth agency",
    "branding",
    "digital marketing",
    "software",
    "analytics",
    "AI",
  ],
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    type: "website",
    locale: "en_US",
    siteName: SITE.name,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-void font-sans text-[var(--text)]">
        <div className="cosmic-bg" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
