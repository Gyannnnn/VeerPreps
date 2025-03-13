import { Card } from "@/components/ui/card";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <Card className="w-full min-h-16 bg-secondary dark:bg-zinc-950 sm:rounded-t-full rounded-t-3xl drop-shadow-xl flex flex-col items-center justify-center py-4">
      <div className="w-full flex flex-col items-center justify-center space-y-2">
        {/* Logo / Branding */}
        <Link href="/" className="w-full flex items-center justify-center group">
          <div className="flex items-center gap-4 text-3xl font-extrabold text-blue-500 hover:text-blue-400 hover:scale-110 transition-transform duration-300 ease-in-out">
            VeerPreps
          </div>
        </Link>

        {/* Copyright */}
        <p className="text-[0.7rem] sm:text-sm text-center" >
          © 2025 IIT KIRBA (VeerPreps). All Rights Reserved.{" "}
          <br className="sm:hidden" />
          Designed for VSSUT students with ❤️.
        </p>

        {/* Links */}
        <div className="flex gap-2 text-sm">
          <Link href="/privacypolicy" className="underline hover:text-blue-400">
            Privacy Policy
          </Link>
          <Link href="/privacypolicy" className="underline hover:text-blue-400">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </Card>
  );
}
