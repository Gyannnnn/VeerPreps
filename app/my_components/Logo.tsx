"use client"
import React from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'


export default function Logo() {
    const { theme, setTheme } = useTheme()
    
  return (
    <div>
        {
            theme === 'dark'? (<Image priority={true} src="/logo/IIT KIRBA LOGO WHITE.png" width={60} height={60} alt="logo" />)
            :
            (<Image priority={true} src="/logo/IIT KIRBA LOGO BLACK.png" width={60} height={60} alt="logo" />)
        }
    </div>
  )
}
