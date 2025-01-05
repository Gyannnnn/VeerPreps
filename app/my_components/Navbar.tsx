import Link from "next/link";
import React from "react";
import ThemeToggler from "./ThemeToggler";
import { Profile } from "./Profile";


import { DrawerDemo } from "./Drawer";

export default function Navbar() {
  return (
    <div className="w-screen h-[54px] bg-white/30 dark:bg-zinc-950/50 backdrop-blur-lg backdrop-saturate-150 border border-white/10 shadow-md flex items-center justify-between px-10 md:px-20 fixed top-1 z-10">
      <div className="md:hidden flex justify-center items-center">
      <DrawerDemo/>
      </div>
      <div className="md:flex  justify-center items-center gap-10 hidden ">
        <Link href="/" className="font-sans text-2xl font-bold cursor-pointer" >IIT KIRBA</Link>
        <div className="flex items-center gap-4 font-sans text-[14px] text-nav-text">
          <Link className="hover:underline underline-offset-2" href="/">Home</Link>
          <Link className="hover:underline underline-offset-2" href="/profile">Your Profile</Link>
          <Link className="hover:underline underline-offset-2" href="/pyqs">Pyqs</Link>
          <Link className="hover:underline underline-offset-2" href="/notes">Notes</Link>
          <Link className="hover:underline underline-offset-2" href="/analytics">Analytics</Link>
        </div>
      </div>
      <div className="flex items-center justify-center gap-6"> 
        <ThemeToggler/>
        <Profile/>
      </div>
    </div>
  );
}
