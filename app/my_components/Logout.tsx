"use client";
import { logout } from "@/actions/auth"
import { LogOut } from "lucide-react";




export default function Logout() {
  return (
    <div>
      <h1 className="flex gap-2 " onClick={()=>{logout()}}>Logout <LogOut/> </h1>        
    </div>
  )
}
