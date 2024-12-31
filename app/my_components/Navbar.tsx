import Link from "next/link";
import React from "react";
import ThemeToggler from "./ThemeToggler";
import { Profile } from "./Profile";


import { DrawerDemo } from "./Drawer";

export default function Navbar() {
  return (
    <div className="w-screen h-[54px] bg-white dark:bg-zinc-950 flex items-center justify-between px-10 md:px-20">
      <div className="md:hidden">
      <DrawerDemo/>
      </div>
      <div className="md:flex  justify-center gap-10 hidden ">
        <Link href="/" className="font-mono text-2xl font-bold cursor-pointer" >IIT KIRBA</Link>
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
