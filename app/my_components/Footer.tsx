import { Card } from "@/components/ui/card";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <Card className="w-full min-h-16 bg-secondary dark:bg-zinc-950 sm:rounded-t-full rounded-t-3xl drop-shadow-xl flex flex-col items-center justify-center py-4">
      <div className="w-full flex flex-col items-center justify-center space-y-2">
        <Link href={"/"} className="w-full flex items-center justify-center group">
          <div className="flex items-center gap-4 text-3xl font-extrabold hover:scale-105 transition-transform duration-300 ease-in-out text-blue-500">
            VeerPreps           
          </div>
        </Link>
        <p className="text-[0.7rem] sm:text-sm text-gray-500 text-center hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
          © 2025 IIT KIRBA (VeerPreps). All Rights Reserved. <br className="sm:hidden" />
          Designed for VSSUT students with ❤️.
        </p>
      </div>
    </Card>
  );
}
