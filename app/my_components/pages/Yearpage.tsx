import React from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";
import SomethingWentWrong from "../SomethingWentWrong";


interface year {
  year_id: number;
  branchId: number;
  yearName: string;
}

export const metadata: Metadata = {
  title: "Years",
  description: "all the branch years of vssut burla ",
};

export default async function Yearpage({ branchId }: { branchId: number }) {
  try {
    const years = await axios.get<{ requiredyear: year[] }>(
      `https://iitkirba-api.vercel.app/api/year/${branchId}`
    );

    const requiredyears = years.data.requiredyear;
  
    return (
      <div className="w-screen min-h-screen flex justify-center bg-secondary dark:bg-zinc-950">
        <div className="sm:w-[50vw] w-[90vw] min-h-screen flex flex-col gap-2 items-center justify-center ">
          {requiredyears.map((year) => (
            <Link
              key={year.year_id}
              href={`/year/${branchId}/subjects/${year.year_id}`}
            >
              <Card className="h-[10vh] sm:w-[50vw] w-[96vw] bg-primary-foreground flex items-center justify-center sm:text-2xl text-xl rounded-sm">
                <h1 className="text-2xl">{year.yearName}</h1>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    let err = error as Error;
   
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <SomethingWentWrong />
      </div>
    );
  }
}
