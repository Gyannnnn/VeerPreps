import { auth } from "@/auth";
import getName from "@/utils/Name";
import React from "react";

import { Playwrite_AR } from "next/font/google";
const playwright = Playwrite_AR({ subsets: ["latin"] });

export default async function page() {
  const session = await auth();
  const name = session?.user?.name;

  return (
    <div className="min-h-screen w-screen bg-secondary dark:bg-zinc-950 flex justify-center">
      <div className=" w-[90vw] h-screen  mt-16">
        <div className="pt-5 pl-2 ">
          {session?.user ? (
            <h1  className="text-2xl text-white flex items-center justify-start gap-2">
              <span className={playwright.className}>hello </span>
              {name ? name : getName(session?.user?.email as string)?.toUpperCase()}
            </h1>
          ) : (
            <h1></h1>
          )}
        </div>
      </div>
    </div>
  );
}
