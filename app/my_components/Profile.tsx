
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
import { auth } from "@/auth";

import Logout from "./Logout";


export async function Profile() {
  const session = await auth();
  
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={`${session?.user?.image}`} alt="@shadcn" />
          <AvatarFallback>GR</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Link href="/profile">View Profile</Link></DropdownMenuItem>
        
        <DropdownMenuItem>
          {
            session?.user ? (
              <Logout/>
            ) : (
              <Link className="flex gap-2 items-center" href="/sign-in">Sign in <LogIn/></Link> 
            )
          }
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
