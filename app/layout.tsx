import type { Metadata } from "next";
import { Cormorant, Manrope } from "next/font/google";
import "./globals.css";
import { BackgroundMotion } from "@/components/layout/BackgroundMotion";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vanillammer | Luxury Renovation & Interior Design",
  description: "Luxury renovation and interior design studio in Lillehammer.",
  metadataBase: new URL("https://vanillammer.no"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", type: "image/png" }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-background text-foreground">
        <BackgroundMotion />
        {children}
      </body>
    </html>
  );
}
