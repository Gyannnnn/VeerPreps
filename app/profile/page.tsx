import { auth } from '@/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import Link from 'next/link'
import React from 'react'


export default async function page() {
 
  const session = await auth();
 
  
  if (!session) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center">
        <h1>Sign in to view your profile</h1>
        <Link className="flex gap-2 items-center" href="/sign-in">Sign in</Link>
      </div>
    );
  }
  
  return (
    <div>
      <h1>Profile</h1>
      <Avatar>
        <AvatarImage src={`${session?.user?.image}`} alt="User Avatar" />
        <AvatarFallback>GR</AvatarFallback>
      </Avatar>
    </div>
  );
}

