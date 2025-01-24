import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar, Footer, Cursor } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CoreZone Fitness - Empower Your Fitness Journey",
  description:
    "Discover CoreZone Fitness in Pokhara with top-tier equipment, personal training, group classes, yoga, and wellness programs. Achieve your fitness goals today!",
  keywords:
    "CoreZone, core, zone , core zone, corezone fitness, fitness, thrive, move, fitness journey, fitness classes, group fitness, pokhara, gym",
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
        <Cursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
