"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogIn } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useSession } from "next-auth/react";

import Logout from "./Logout";
import getFallBack from "@/utils/fallback";

export default function Profile() {
  const { data: session } = useSession();
  const name = session?.user?.name;
  const avatarurl = session?.user?.image;
  const defaultavatar = "https://res.cloudinary.com/dlm8mel1x/image/upload/v1739933978/kirba/mdkowbqyq0zvlnxbtz9x.png";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={`${avatarurl ? avatarurl : defaultavatar}`} alt="@shadcn" />
          <AvatarFallback className="text-2xl flex items-center justify-center font-sans font-light">
            {name ? name[0] : getFallBack(session?.user?.email as string)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/profile">View Profile</Link>
        </DropdownMenuItem>
        
        <DropdownMenuItem>
          {session?.user ? (
            <Logout/>
          ) : (
            <Link className="flex gap-2 items-center" href="/sign-in">
              Sign in <LogIn/>
            </Link> 
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
