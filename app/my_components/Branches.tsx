import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Branches() {
  return (
    <Link href="/pyqs" className="hover:cursor-pointer">
      <Card className="w-80 h-74 flex gap-3 flex-col items-center justify-between py-2 max-sm:w-72 max-sm:h-72 px-2 rounded-md">
        <Image
          className="rounded-md"
          height={250}
          width={350}
          src="/images/informationTechnology.png"
          alt="pyqs"
        />

       <div className="flex flex-col gap-2">
       <h1 className="font-sans text-xl text-center">Computer science and engineering(cse)</h1>
       <Button>View Content</Button>
       </div>
      </Card>
    </Link>
  );
}
