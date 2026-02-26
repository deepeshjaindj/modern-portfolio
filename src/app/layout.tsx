import type { Metadata } from "next";
import {
  Poppins,
  Outfit,
  Playfair_Display,
  Geist_Mono,
} from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/molecules";
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

const siteUrl = "https://deepeshjain.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Deepesh Jain - An Engineer and a Problem Solver",
    template: "%s | Deepesh Jain Portfolio",
  },
  description:
    "Results-driven Full-Stack Software Engineer with 3+ years of experience developing scalable web applications and enterprise integration solutions. Expert in React.js, Next.js, Node.js, TypeScript, and Workato.",
  keywords: [
    "Deepesh Jain",
    "Deepesh Jain Portfolio",
    "Deepesh Jain Resume",
    "Senior Software Engineer",
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
    "MERN Stack Developer",
    "Remote Developer",
    "Web Developer India",
    "React TypeScript Developer",
  ],
  authors: [{ name: "Deepesh Jain", url: siteUrl }],
  creator: "Deepesh Jain",
  publisher: "Deepesh Jain",
  applicationName: "Deepesh Jain Portfolio",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Deepesh Jain Portfolio",
    title: "Deepesh Jain - An Engineer and a Problem Solver",
    description:
      "Results-driven Senior Software Engineer with 3.5+ years of experience developing scalable web applications and enterprise integration solutions. Expert in React.js, Next.js, Node.js, Workato, and JavaScript.",
    images: [
      {
        url: `${siteUrl}/deepesh-profile.png`,
        width: 1200,
        height: 630,
        alt: "Deepesh Jain - Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepesh Jain - An Engineer and a Problem Solver",
    description:
      "Results-driven Full-Stack Software Engineer with 3+ years of experience. Expert in React.js, Next.js, Node.js, and TypeScript.",
    creator: "@deepeshjaindj2",
    images: [`${siteUrl}/deepesh-profile.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/deepesh-profile.png", sizes: "192x192", type: "image/png" },
      { url: "/deepesh-profile.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/deepesh-profile.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "theme-color": "#1e3a8a",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Deepesh Jain",
        url: siteUrl,
        sameAs: [
          "https://github.com/deepeshjaindj",
          "https://linkedin.com/in/deepeshjain-dj",
          "https://twitter.com/deepeshjaindj2",
          "https://stackoverflow.com/users/14953697/deepesh-jain",
        ],
        jobTitle: "Senior Software Engineer",
        worksFor: {
          "@type": "Organization",
          name: "OneSolve Technologies",
        },
        description:
          "Senior Software Engineer specializing in scalable web applications and enterprise integration solutions using React, Next.js, Node.js, and TypeScript.",
        image: `${siteUrl}/deepesh-profile.png`,
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Rajiv Gandhi Techniocal University",
        },
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "JavaScript",
          "Full Stack Development",
          "Web Development",
          "Software Engineering",
          "Workato",
          "Stack AI",
          "Salesforce",
          "Enterprise Integration",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Deepesh Jain Portfolio",
        description:
          "Portfolio website of Deepesh Jain, a Fullstack Developer specializing in React, Next.js, Node.js, and TypeScript.",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: "Fullstack Development Services",
        provider: {
          "@id": `${siteUrl}/#person`,
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "IN",
          addressLocality: "India",
        },
        telephone: "+917999186610",
        email: "deepeshjainofficial@gmail.com",
        image: `${siteUrl}/deepesh-profile.png`,
        priceRange: "$$",
        areaServed: "Worldwide",
        serviceType: [
          "Web Development",
          "Fullstack Development",
          "Frontend Development",
          "Backend Development",
          "React Development",
          "Next.js Development",
          "Workato",
          "Stack AI",
          "Enterprise Integration",
          "Workflow Automation",
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${poppinsSerif.variable} ${outfitSans.variable} ${playfairDisplay.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
