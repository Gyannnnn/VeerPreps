"use client"
import React from 'react'
import { useTheme } from 'next-themes'

export default function Logo() {
    const { theme, setTheme } = useTheme()
    
  return (
    <div>
        {
            theme === 'dark'? (<img src="/logo/IIT KIRBA LOGO WHITE.png" width={60} height={60} alt="logo" />)
            :
            (<img src="/logo/IIT KIRBA LOGO BLACK.png" width={60} height={60} alt="logo" />)
        }
    </div>
  )
}
