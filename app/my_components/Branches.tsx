import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function () {
  return (
    <Link href="/pyqs" className="hover:cursor-pointer">
      <Card className="w-56 h-60 flex flex-col items-center justify-between py-2 max-sm:w-64">
        <Image
          className="rounded-md"
          height={150}
          width={150}
          src="/images/Information.png"
          alt="pyqs"
        />

       <div className="flex flex-col gap-2">
       <h1>Information Technology (IT)</h1>
       <Button>View Content</Button>
       </div>
      </Card>
    </Link>
  );
}
