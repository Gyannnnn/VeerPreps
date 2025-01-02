import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogIn, LogOut } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function Profile() {
  const signin = true
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="https://github.com/account" alt="@shadcn" />
          <AvatarFallback>GR</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Link href="/profile">View Profile</Link></DropdownMenuItem>      
        
        <DropdownMenuItem>
          {
            signin?<Link href="/" className="flex gap-2" >Signout  <LogOut/></Link>:<Link href="/" className="flex gap-2">Signin<LogIn/> </Link>  
          }
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
