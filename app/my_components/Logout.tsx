"use client";
import { logout } from "@/actions/auth"
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";




export default function Logout() {
  return (
    <div>
      <Button className="flex gap-2" onClick={()=>{logout()}}>Logout <LogOut/> </Button>        
    </div>
  )
}
