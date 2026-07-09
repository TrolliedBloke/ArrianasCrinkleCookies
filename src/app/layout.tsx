import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteNav from "@/lib/SiteNav";
import SiteFooter from "@/lib/SiteFooter";
import FloatingHeartsBackground from "@/lib/Floatingheartsbackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arriana's Crinkle Cookies",
  description: "Crinkle Cookies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteNav />
        <FloatingHeartsBackground>
          <main className="flex-1">{children}</main>
        </FloatingHeartsBackground>
        <SiteFooter />
      </body>
    </html>
  );
}
