import React from 'react'
import axios from 'axios';
import { Card } from '@/components/ui/card';
import Link from 'next/link';


interface year {
    year_id: number;
    branchId: number;
    yearName: string;
  }
  

export default async function Yearpage({branchId}: {branchId: string}) {
    const years = await axios.get<{ requiredyear: year[] }>(
        `https://iitkirba-api.vercel.app/api/year/${branchId}`
      );
     
      const requiredyears = years.data.requiredyear;
  return (
    <div className="w-screen min-h-screen flex justify-center bg-secondary dark:bg-zinc-950">
      
      <div className="sm:w-[50vw] w-[90vw] min-h-screen flex flex-col gap-4 items-center justify-center ">
        {requiredyears.map((year) => (
          <Link key={year.year_id}  href={`/year/${branchId}/subjects`}>
            
            <Card className="h-[10vh] sm:w-[50vw] w-[90vw] flex gap-2 items-center justify-center sm:text-2xl text-xl">
              <h1>IIT KIRBA /</h1>
              <h1>{year.yearName}</h1>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
