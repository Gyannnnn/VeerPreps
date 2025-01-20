import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/app/my_components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/toaster";
import { GeistSans } from "geist/font/sans";
import Meta from "./Meta";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: "IIT Kirba",
  description:
    "A website for vssut which contains all the previous year question papers and notes ",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <>
      <Meta />
      <SessionProvider session={session}>
        <html
          lang="en"
          className={`${GeistSans.variable} ${GeistMono.variable}`}
        >
          <body className="antialiased">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              {children}
              <Toaster />
            </ThemeProvider>
          </body>
        </html>
      </SessionProvider>
    </>
  );
}
