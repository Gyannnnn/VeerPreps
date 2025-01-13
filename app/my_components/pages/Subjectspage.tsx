import { Card } from "@/components/ui/card";
import Link from "next/link";
import axios from "axios";
import { Metadata } from "next";

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
  console.log(ids);
  const branchId = ids[0];
  const yearid = ids[2];

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
      `https://iitkirba-api.vercel.app/api/subject/common`
    );
    data = response.data.subjects;
    console.log(data);
  } else {
    try {
      const response = await axios.get<{ subjects: Subject[] }>(
        `https://iitkirba-api.vercel.app/api/subject/${branchId}/${yearid}`
      );
      data = response.data.subjects;
    } catch (error) {
      console.log(error);
    }
  }

  if (!data || data.length === 0) {
    console.log("No subjects available");
    return (
      <div className="h-screen w-screen flex items-center justify-center text-2xl">
        <h1>No Subjects</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen bg-secondary dark:bg-zinc-950 flex justify-center pb-10">
      <div className="w-[90vw] min-h-screen mt-16 flex  flex-col gap-4 pt-10 ">
        {data.map((subject) => (
          <Link
          className="w-[90vw] flex items-center justify-center "
            href={`/year/${branchId}/subjects/${yearid}/contents/${subject.subject_id}`}
            key={subject.subject_id}
          >
            <Card className="sm:w-[50vw] w-[90vw] h-16 flex items-center justify-center">
              <h1 className="text-xl text-center">{subject.subjectname}</h1>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}


export const metadata:Metadata={
  title:"subjects",
  description:"All the subjects of vssut burla"
}