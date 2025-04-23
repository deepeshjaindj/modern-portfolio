import type { Metadata } from "next";
import {
  Poppins,
  Outfit,
  Playfair_Display,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/molecules";

const poppinsSerif = Poppins({
  variable: "--font-poppins-serif",
  subsets: ["latin"],
  weight: "700",
});

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deepesh Jain",
  description:
    "A Passionate Software Engineer Crafting Interactive Web Experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSerif.variable} ${outfitSans.variable} ${playfairDisplay.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
