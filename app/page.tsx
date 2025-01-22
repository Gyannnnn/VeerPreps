import { auth } from "@/auth";

import React from "react";

// import { Playwrite_AR } from "next/font/google";
import Branches from "./my_components/Branches";
import { Metadata } from "next";
// const playwright = Playwrite_AR();

export default async function page() {
  const session = await auth();
  // const name = session?.user?.name;

  return (
    <div className="min-h-screen w-screen bg-secondary dark:bg-zinc-950 flex flex-col items-center justify-center">
      
      <div className=" sm:w-[90vw] w-screen min-h-screen flex flex-col items-center justify-center mt-16 pb-10">
        
        <div className="sm:w-[98vw] w-screen flex  items-start justify-center mt-10 pb-10">          
          <Branches session={session} />                    
        </div>
      </div>
    </div>
  );
}


export const metadata:Metadata={
  title:"IIT KIRBA",
  description:"A page where all branches of vssut burla are listed , the only previous year question paper site for veer surendra sai university of technlogy burla samablpur formely university collage of engineering burla sambalpur"
}