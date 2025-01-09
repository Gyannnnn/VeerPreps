import { Card } from "@/components/ui/card";
import Link from "next/link";
import axios from "axios";

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

  try {
    const response = await axios.get<{ subjects: Subject[] }>(
      `https://iitkirba-api.vercel.app/api/subject/${branchId}/${yearid}`
    );
    data = response.data.subjects;
  } catch (error) {
    console.log(error);
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
    <div className="min-h-screen w-screen bg-secondary dark:bg-zinc-950 flex justify-center">
      <div className="w-[90vw] min-h-screen mt-16 flex items-center flex-col gap-4 pt-10">
        {data.map((subject) => (
          <Link
            href={`/year/${branchId}/subjects/${yearid}/contents`}
            key={subject.subject_id}
          >
            <Card className="w-[50vw] h-16 flex items-center justify-center">
              <h1>dj</h1>
              <h1 className="text-xl">{subject.subjectname}</h1>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
