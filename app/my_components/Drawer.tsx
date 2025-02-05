import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { TbMenu4 } from "react-icons/tb";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


import { LogIn } from "lucide-react";
import { LogOut } from "lucide-react";
import { auth } from "@/auth";
import Logout from "./Logout";



export async function DrawerDemo() {
  const session = await auth();

  return (
    <Drawer>
      <DrawerTrigger>
        <TbMenu4 className="text-3xl"/>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerClose asChild className="absolute top-6 right-4 cursor-pointer">
          <X type="Button" className="text-5xl text-primary" />
        </DrawerClose>

        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="font-sans text-2xl">IIT KIRBA</DrawerTitle>
            <DrawerDescription >
              <p className="text-sm">VSSUT's Hub for Questions & Notes</p>
            </DrawerDescription>
          </DrawerHeader>
        </div>
        <div className="flex flex-col items-center gap-2 font-sans text-[14px] text-nav-text px-16 mt-4">
          <DrawerClose asChild>
            <Link
              className="bg-secondary py-2 w-full flex justify-center rounded-md"
              href="/"
            >
              Home
            </Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link
              className="bg-secondary py-2 w-full flex justify-center rounded-md"
              href="/profile"
            >
              Your Profile
            </Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link
              className="bg-secondary py-2 w-full flex justify-center rounded-md"
              href="/pyqs"
            >
              Pyqs
            </Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link
              className="bg-secondary py-2 w-full flex justify-center rounded-md"
              href="/notes"
            >
              Notes
            </Link>
          </DrawerClose>

          <DrawerClose asChild>
            <Link
              className="bg-secondary py-2 w-full flex justify-center rounded-md"
              href="/admin"
            >
              Admins
            </Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link
              className="bg-secondary py-2 w-full flex justify-center rounded-md"
              target="_blank"
              href="https://forms.gle/FKpY6r34xN4Gu6X86"
            >
              Report Issue
            </Link>
          </DrawerClose>
        </div>
        <DrawerFooter className="w-full flex justify-center items-center mt-5">
          <DrawerClose
            asChild
            className="flex justify-center hover:text-destructive"
          >
            {session?.user ? (
              <AlertDialog>
              <AlertDialogTrigger className="flex gap-2">Logout{<LogOut/>} </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    You cannot acess your profile after logging out.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>
                    {
                      <DrawerClose>
                        <Logout/>
                      </DrawerClose>
                    }
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            
              
            ) : (
              <Link className="flex gap-2" href="/sign-in">
                Sign in <LogIn />
              </Link>
            )}
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
