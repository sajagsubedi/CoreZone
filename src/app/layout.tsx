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
  title: "CoreZone Fitness",
  description:
    "Discover CoreZone Fitness, your ultimate fitness destination in Pokhara. Offering state-of-the-art gym equipment, personal training, group fitness classes, yoga sessions, and holistic wellness programs to help you move, train, and thrive. Explore our plans and start transforming your fitness journey today!",
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
