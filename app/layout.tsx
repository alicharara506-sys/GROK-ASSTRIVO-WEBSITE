import type { Metadata } from "next";
import { Geist, Syne } from "next/font/google";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";
import "./globals.css";

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
  title: `${SITE_NAME} Agency — ${SITE_TAGLINE}`,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-space font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
