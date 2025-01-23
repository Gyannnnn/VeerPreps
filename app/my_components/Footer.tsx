import { Card } from "@/components/ui/card";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <Card className="w-full min-h-10 bg-secondary dark:bg-zinc-950 rounded-none   drop-shadow-xl flex flex-col items-center justify-center  py-2">
      <div className="w-full flex items-center justify-center">
        <Link href={"/"}>
          <div className="w-full flex gap-4 items-center justify-center hover:cursor-pointer">
            <div className=" border-black dark:border-white">
              <Logo />
            </div>
            <h1 className="border-l-4  border-black dark:border-white pl-4 text-center sm:text-3xl text-2xl font-bold">
              IIT KIRBA
            </h1>
          </div>
        </Link>
      </div>
    </Card>
  );
}
