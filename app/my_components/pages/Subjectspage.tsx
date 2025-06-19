import { Card } from "@/components/ui/card";
import Link from "next/link";
import axios from "axios";
import { Metadata } from "next";
import SomethingWentWrong from "../SomethingWentWrong";
import { FaArrowRight, FaBookOpen } from "react-icons/fa";
import { BookOpen } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
    <div className="min-h-screen w-full bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 flex justify-center items-start pt-20 pb-10">
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-8 items-center py-12 px-4">
        {/* Breadcrumb Navigation */}
        <div className="w-full mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/year/${branchId}`}>Year {branchId}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Subjects</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
            <BookOpen className="h-7 w-7 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Select Subject</h1>
        </div>

        {/* Subject Cards */}
        <div className="w-full flex flex-col gap-5">
          {data.map((subject) => (
            <Link
              className="block"
              href={`/year/${branchId}/subjects/${yearid}/contents/${subject.subject_id}`}
              key={subject.subject_id}
            >
              <Card className="flex items-center justify-between px-6 py-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl group cursor-pointer">
                <span className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">{subject.subjectname}</span>
                <span className="flex items-center gap-2 text-blue-600 group-hover:text-blue-800 dark:group-hover:text-blue-400 text-base font-medium transition-colors duration-200">
                  Explore materials <FaArrowRight className="ml-1" />
                </span>
              </Card>
            </Link>
          ))}
        </div>
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