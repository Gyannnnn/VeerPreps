import { Card } from "@/components/ui/card";
import Link from "next/link";
import axios from "axios";
import { Metadata } from "next";
import SomethingWentWrong from "../SomethingWentWrong";

import { FaArrowRight } from "react-icons/fa";
interface Subject {
  subject_id: number | undefined;
  yearId: number;
  subjectname: string;
  branchname: string;
  iscommon: boolean;
  branchid: number;
}
interface pageprops {
  ids: string[];
}

export default async function Subjects({ ids }: pageprops) {
  
  const branchId = ids[0];
  const yearid = ids[2];

  try {
    let data: Subject[] = [];
  if (
    yearid === "1" ||
    yearid === "5" ||
    yearid === "6" ||
    yearid === "16" ||
    yearid === "20" ||
    yearid === "24" ||
    yearid === "28" ||
    yearid === "32" ||
    yearid === "36" ||
    yearid === "40"
  ) {
    const response = await axios.get<{ subjects: Subject[] }>(
      `https://api-zeta.vercel.app/api/subject/common`
    );
    data = response.data.subjects;
    
   
  } else {
    try {
      const response = await axios.get<{ subjects: Subject[] }>(
        `https://api-zeta.vercel.app/api/subject/${branchId}/${yearid}`
      );
      data = response.data.subjects;
    } catch (error) {
      
    }
  }

  if (!data || data.length === 0) {
    
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center text-3xl">
        <h1 >Coming Soon !</h1>
        <Link className="text-sm text-blue-500 hover:text-blue-400" href={"/admin"}>Contact Admins</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen bg-secondary dark:bg-zinc-950 flex justify-center items-center pb-10">
      <div className="w-[90vw] max-sm:w-[99vw] min-h-screen mt-16 flex    flex-col items-center justify-start gap-2 pt-5 ">
        {data.map((subject) => (
          <Link
          className="w-[96vw] flex items-center justify-center "
            href={`/year/${branchId}/subjects/${yearid}/contents/${subject.subject_id}`}
            key={subject.subject_id}
          >
            <Card className="sm:w-[50vw] max-sm:w-[96vw] sm:h-16 h-20 flex bg-primary-foreground dark:bg-zinc-950 rounded-sm  items-center justify-between sm:px-4 px-2 max-sm:relative ">
              <h1 className="text-xl max-sm:absolute max-sm:left-2 max-sm:top-2">{subject.subjectname}</h1>
              <p className="text-sm text-blue-500 hover:text-blue-400 flex justify-center items-center gap-2 max-sm:absolute max-sm:right-1 max-sm:bottom-1">Explore materials <FaArrowRight className="font-light"/> </p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
  } catch (error) {
    let err = error as Error;

    return (
      <SomethingWentWrong/>
    )
    
  }
}


export const metadata:Metadata={
  title:"subjects",
  description:"All the subjects of vssut burla"
}