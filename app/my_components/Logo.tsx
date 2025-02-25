"use client"
import React from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'


// export default function Logo() {
//     const { theme, setTheme } = useTheme()
    
//   return (
//     <div>
//         {
//             theme === 'dark'? (<Image priority={true} src="/logo/IIT KIRBA LOGO WHITE.png" width={55} height={55} alt="logo" />)
//             :
//             (<Image priority={true} src="/logo/IIT KIRBA LOGO BLACK.png" width={55} height={55} alt="logo" />)
//         }
//     </div>
//   )
// }


export default function Logo() {
  const { theme, setTheme } = useTheme()
  
return (
  <div>
      {
          theme === 'dark'? (
            <h1 className='text-blue-500 '>VeerPreps</h1>
          )
          :
          (
            <h1 className='text-blue-500 '>VeerPreps</h1>
          )
      }
  </div>
)
}

