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
import GoogleAnalyticsClient from "./my_components/Analytics/GoogleAnalyticsClient";
import { ReactLenis } from "@/utils/lenis/lenis";

export const metadata = {
  title: "IIT KIRBA | VeerPreps",
  description:
    "Get instant access to VSSUT Burla's previous year question papers and handwritten notes — including mid-sem, end-sem, back, and supplementary papers. Log in to download, save, and study smarter for free on iit kirba",
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
    "veerpreps",
    "vssut",
    "vssut burla",
    "burla",
    "vssut mid sem",
    "vssut end sem",
    "vssut result",
    "vssut even sem",
    "vssut odd sem",
    "vssut notes",
    "vssut pyq",
    "vssut cse pyq",
    "vssut it pyq",
    "vssut etc pyq",
    "vssut ee pyq",
    "vssut ee pyq",
    "vssut chemical pyq",
    "vssut civil pyq",
    "vssut mechanical pyq",
    "Gyanranjan Patra vssut",
  ],
  openGraph: {
    title: "iitkirba - VSSUT Burla Question Papers & Notes",
    description:
      "Download VSSUT Burla PYQs & notes , mid sem, end sem, back, and supply papers. 100% free. Start preparing smarter today at iitkirba.xyz!",
    url: "https://www.iitkirba.xyz",
    images: [
      {
        url: "https://www.iitkirba.xyz/og/og_image.png",
        width: 1200,
        height: 630,
        alt: "iitkirba",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VSSUT Burla Question Papers & Notes",
    description:
      "Access VSSUT Burla's previous year question papers and notes. Download mid-semester, end-semester, back, and supplementary papers for free.",
    images: ["https://www.iitkirba.xyz/og/og_image.png"],
    creator:"Veerpreps"
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
          <AdSense pId="ca-pub-6615680210839928" />
        </head>
        <ReactLenis root>
          <body className="antialiased">
            <GoogleAnalyticsClient />
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
        </ReactLenis>
      </html>
    </SessionProvider>
  );
}
