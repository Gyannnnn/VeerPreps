import React from 'react'
import Image from 'next/image'

export default function loading() {
  return (
    <div className='h-screen w-screen flex items-center justify-center bg-transparent text-white text-4xl'>
      <Image src="/loader/ld1.gif" height={80} width={80} alt='loader' / >
    </div>
  )
}
