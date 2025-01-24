import { Card } from "@/components/ui/card";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <Card className="w-full min-h-10 bg-secondary dark:bg-zinc-950 rounded-t-xl drop-shadow-xl flex flex-col items-center justify-center py-2">
      <div className="w-full flex flex-col items-center justify-center">
        <Link href={"/"}>
          <div className="w-full flex gap-4 items-center justify-center hover:cursor-pointer min-h-[60px]">
            <div className="border-black dark:border-white flex-shrink-0">
              <Logo />
            </div>
            <h1 className="border-l-4 border-black dark:border-white pl-4 text-center sm:text-3xl dark:text-gray-300 text-gray-600 text-2xl font-bold">
              IIT KIRBA
            </h1>
          </div>
        </Link>
        <p className="max-sm:text-[0.6rem] text-gray-500 hover:cursor-pointer text-center">
          © 2025 iitkirba. All Rights Reserved. Designed for VSSUT students with ❤️.
        </p>
      </div>
    </Card>
  );
}
