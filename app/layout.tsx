import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/providers/theme-provider";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://rami-hassan.design";
export const metadata: Metadata = {
  title: "Rami — Product Designer & Developer",
  description: "Designing clear products and building them right for teams between Dubai and Khartoum.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Rami — Product Designer & Developer",
    description: "Minimal, confident, accessible product work built end-to-end.",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: "Rami Hassan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rami — Product Designer & Developer",
    description: "Designing clear products and building them right.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[var(--bg)] text-[var(--fg)] antialiased`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
