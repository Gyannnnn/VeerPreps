import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/app/my_components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/toaster";
import { GeistSans } from "geist/font/sans";

import { GeistMono } from "geist/font/mono";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./my_components/Footer";

import { Analytics } from "@vercel/analytics/react";
import AdSense from "./my_components/googleAdd/AdSense";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "IIT KIRBA (VeerPreps)",
  description:
    "Access previous year question papers and handwritten notes for VSSUT Burla (formerly UCE Burla) including mid-semester, end-semester, back papers, and supplementary papers. Login to download and save content for free on iitkirba.xyz.",
  keywords: [
    "VSSUT Burla previous year questions",
    "UCE Burla question papers",
    "VSSUT notes",
    "mid-semester papers",
    "end-semester papers",
    "back papers",
    "supplementary papers",
    "handwritten notes",
    "VSSUT student resources",
    "iitkirba.xyz",
  ],
  openGraph: {
    title: "iitkirba - VSSUT Burla Question Papers & Notes",
    description:
      "Find and download previous year question papers and notes for VSSUT Burla. Get access to mid-semester, end-semester, back, and supplementary papers for free.",
    url: "https://www.iitkirba.xyz",
    images: [
      {
        url: "https://www.iitkirba.xyz/og-image.jpg",
        width: 800,
        height: 600,
        alt: "iitkirba",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iitkirba - VSSUT Burla Question Papers & Notes",
    description:
      "Access VSSUT Burla's previous year question papers and notes. Download mid-semester, end-semester, back, and supplementary papers for free.",
    images: ["https://www.iitkirba.xyz/twitter-image.jpg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <head>
          <AdSense
            pId="pub-6615680210839928"
          />
        </head>
        <body className="antialiased">
          <SpeedInsights />
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={true}
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Analytics />
            <Footer />
            <Toaster />
          </ThemeProvider>
        </body>
        <GoogleAnalytics gaId="G-TZ39FR5E5W" />
      </html>
    </SessionProvider>
  );
}
