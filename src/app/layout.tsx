import type { Metadata } from "next";
import {
  Poppins,
  Outfit,
  Playfair_Display,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/molecules";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  title: "Deepesh Jain - An Engineer and a Problem Solver",
  description:
    "Experienced Fullstack Developer building scalable web apps using React, Next, Node, and Tailwind.",
  authors: [{ name: "Deepesh Jain", url: "https://deepeshjain.vercel.app" }],
  keywords: [
    "Deepesh Jain",
    "Deepesh Jain Portfolio",
    "Deepesh Jain Resume",
    "Fullstack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Express.js Developer",
    "Software Engineer",
    "Developer Portfolio",
    "Modern Portfolio",
    "Freelance Developer",
    "Mern Stack Developer",
    "Remote Developer",
  ],
  abstract:
    "I'm Deepesh Jain, a passionate React & Fullstack Developer with 3+ years of experience crafting dynamic, scalable, and modern web applications. I specialize in React, Node.js, TypeScript, and cloud services like AWS — blending performance and design into seamless user experiences. From portfolios to multi-tenant platforms, I turn ideas into products that perform and scale. Let’s build something great together.",
  creator: "Deepesh Jain",
  applicationName: "Deepesh Jain Portfolio",
  category: "Technology",
  publisher: "Deepesh Jain",
  openGraph: {
    title: "Deepesh Jain - An Engineer and a Problem Solver",
    description:
      "Experienced Fullstack Developer building scalable web apps using React, Next, Node, and Tailwind.",
    siteName: "Deepesh Jain Portfolio",
    url: "https://deepeshjain.vercel.app",
    type: "website",
    countryName: "India",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Deepesh Jain",
              url: "https://deepeshjain.vercel.app",
              sameAs: [
                "https://github.com/deepeshjaindj",
                "https://linkedin.com/in/deepeshjain-dj",
              ],
              jobTitle: "Fullstack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Ksolves India Limited",
              },
              description:
                "Fullstack Developer specializing in scalable web apps using React, Next.js, Node.js, and TypeScript.",
            }),
          }}
        />
      </Head>
      <body
        className={`${poppinsSerif.variable} ${outfitSans.variable} ${playfairDisplay.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
