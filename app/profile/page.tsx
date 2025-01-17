import { auth } from '@/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'


export default async function page() {

  const session = await auth()
  return (
    <div>
      <h1 mt-20>Profile</h1>
      <Avatar>
          <AvatarImage src={`${session?.user?.image}`} alt="@shadcn" />
          <AvatarFallback>GR</AvatarFallback>
        </Avatar>
    </div>
  )
}
