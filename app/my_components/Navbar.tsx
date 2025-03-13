
import Link from "next/link";
import React from "react";
import ThemeToggler from "./ThemeToggler";
import { Profile } from "./Profile";

import { DrawerDemo } from "./Drawer";

import Logo from "./Logo";

export default function Navbar() {
  

  return (
    <div className="w-screen h-[54px] bg-white/30 dark:bg-zinc-950/50 backdrop-blur-lg backdrop-saturate-150 border border-white/10 shadow-md flex items-center justify-between px-5 md:px-16 fixed top-0 z-10">
      <div className="md:hidden flex justify-center items-center">
        <DrawerDemo />
      </div>
      <div className="md:flex  justify-center items-center gap-6 hidden ">
        <Link
          href="/"
          className="font-sans lg:text-2xl text-sm  font-bold cursor-pointer"
        >
          <Logo/>
        </Link>
        <div className="flex gap-2 items-center  text-[14px] text-nav-text font-sans">
          <Link
            className="hover:bg-primary-foreground  lg:px-2 px-1 py-1 rounded-xl underline-offset-2"
            href="/"
          >
            Home
          </Link>

          <Link
            className="hover:bg-primary-foreground  lg:px-2 px-1 py-1 rounded-xl underline-offset-2"
            href="/pyqs"
          >
            Pyqs
          </Link>
          <Link
            className="hover:bg-primary-foreground  lg:px-2 px-1 py-1 rounded-xl underline-offset-2"
            href="/notes"
          >
            Notes
          </Link>
          <Link
            className="hover:bg-primary-foreground  lg:px-2 px-1 py-1 rounded-xl underline-offset-2"
            href="/profile"
          >
            Your Profile
          </Link>
          <Link
            className="hover:bg-primary-foreground  lg:px-2 px-1 py-1 rounded-xl underline-offset-2"
            href="/admin"
          >
            Contact us
          </Link>

          <Link
            className="hover:bg-primary-foreground  lg:px-2 px-1 py-1 rounded-xl underline-offset-2"
            target="_blank"
            href="https://forms.gle/FKpY6r34xN4Gu6X86"
          >
            Report issue
          </Link>
          {/* <Link
            className="hover:bg-primary-foreground  lg:px-2 px-1 py-1 rounded-xl underline-offset-2"
            
            href="https://iitkirba-io.vercel.app/db/appfile/Iitkirba.apk"
          >
            Download Our App
          </Link> */}
        </div>
      </div>
      <div className="flex items-center justify-center gap-6">
        <ThemeToggler />
        <Profile />
      </div>
    </div>
  );
}
