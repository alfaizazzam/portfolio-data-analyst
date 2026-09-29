import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/content";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-alfaiz-azzam.vercel.app"),
  title: `${profile.name} · ${profile.role}`,
  description: profile.summary,
  openGraph: {
    title: `${profile.name} · ${profile.role}`,
    description: profile.summary,
    url: "https://portfolio-alfaiz-azzam.vercel.app",
    siteName: profile.name,
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · ${profile.role}`,
    description: profile.summary,
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${fraunces.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
