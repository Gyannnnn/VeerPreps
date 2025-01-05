import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import axios from "axios";

interface branch {
  branch_id: string;
  userid: null | number;
  displayimage: string;
  branchname: string;
}

export default async function Branches() {
  const branches = await axios.get<{ branches: branch[] }>(
    "https://iitkirba-api.vercel.app/api/branch/"
  );
  const requiredbranches = branches.data.branches;

  return (
    <div className="w-[90vw] min-h-screen flex  justify-center flex-wrap gap-10">
      {requiredbranches.map((branch) => (
        <Link
          key={branch.branch_id}
          href="/pyqs"
          className="hover:cursor-pointer"
        >
          <Card className="w-80 sm:h-[48vh] max-sm:h-[48vh] flex  flex-col drop-shadow-lg items-center justify-around py-2 max-sm:w-72  px-2 rounded-md ">
            <Image
              className="rounded-md"
              height={250}
              width={350}
              src={branch.displayimage}
              alt="information technology"
              priority
            />
            <div className="flex flex-col  gap-2 items-start  w-full">
              <h1 className="font-sans text-xl text-center tracking-tighter  ">
                {branch.branchname}
              </h1>
              <Button className="w-full">View Content</Button>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
