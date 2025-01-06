import React from 'react'

export default async function page({params}:{params:{
  ids:string[]
}}) {
  console.log(params.ids)
  const ids =await params.ids
  const branchId  = ids[0]
  async function getyears(){
    const years = await axios.get(`https://iitkirba-api.vercel.app/api/year/`)
  }


  return (
    <div className='min-h-screen w-screen bg-secondary dark:bg-zinc-950 flex items-center justify-center text-4xl'>page</div>
  )
}
