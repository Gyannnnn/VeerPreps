import { Card } from "@/components/ui/card";
import subjects from "./helper";
import Link from "next/link";

export default function Subjects() {
  return (
    <div className="min-h-screen w-screen bg-secondary dark:bg-zinc-950 flex justify-center ">
      <div className="w-[90vw] min-h-screen mt-16 flex items-center flex-col gap-4 pt-10">
        {subjects.map((subject) => (
          <Link href={"/year/7/subjects/2/contents"} key={subject.code}>
            <Card
              className="w-[50vw] h-16 flex items-center justify-center"
              
            >
              <h1 className="text-xl">{subject.name}</h1>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
