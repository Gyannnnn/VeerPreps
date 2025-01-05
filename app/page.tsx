import { auth } from "@/auth";
import getName from "@/utils/Name";
import React from "react";

import { Playwrite_AR } from "next/font/google";
import Branches from "./my_components/Branches";
const playwright = Playwrite_AR();

export default async function page() {
  const session = await auth();
  const name = session?.user?.name;

  return (
    <div className="min-h-screen w-screen bg-secondary dark:bg-zinc-950 flex justify-center">
      <div className=" w-[90vw] min-h-screen  mt-16">
        <div className="pt-5 pl-2 ">
          {session?.user ? (
            <h1 className="sm:text-2xl text-white flex items-center justify-start gap-2 hover:cursor-context-menu">
              <span className={playwright.className}>hello </span>
              {name
                ? name
                : getName(session?.user?.email as string)?.toUpperCase()}
            </h1>
          ) : (
            <h1></h1>
          )}
        </div>
        <div className="w-[90vw] min-h-screen  flex items-center justify-center mt-10 pb-10 ">
          <div className="  md:w-[80vw] min-h-screen grid grid-cols-3 gap-10  max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1  content-center">
          <Branches />
          <Branches />
          <Branches />
          <Branches />
          <Branches />
          <Branches />
          <Branches />
          <Branches />
          <Branches />
          <Branches />
          </div>
        </div>
      </div>
    </div>
  );
}
