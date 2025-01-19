import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import axios from "axios";
import SomethingWentWrong from "./SomethingWentWrong";

interface branch {
  branch_id: string;
  userid: null | number;
  displayimage: string;
  branchname: string;
}

export default async function Branches() {
  try {
    const branches = await axios.get<{ branches: branch[] }>(
      "https://iitkirba-api.vercel.app/api/branch/"
    );
    const requiredbranches = branches.data.branches;
  

    return (
      <div className="sm:w-[90vw] w-screen min-h-screen flex  justify-center flex-wrap gap-10 sm:gap-10">
        {requiredbranches.map((branch) => (
          <Link
            key={branch.branch_id}
            href={`/year/${branch.branch_id}`}
            className="hover:cursor-pointer max-sm:px-2"
          >
            <Card className="w-86 sm:h-[48vh] max-sm:h-[48vh] flex   flex-col drop-shadow-lg items-center justify-around  max-sm:w-86 px-2   rounded-md ">
              <Image
                className="rounded-xl "
                height={250}
                width={350}
                src={branch.displayimage}
                alt="information technology"
                priority
              />
              <div className="flex flex-col  gap-2 items-start  w-full">
                <h1 className="font-sans  text-xl w-full text-center tracking-tighter  ">
                  {branch.branchname}
                </h1>
                <Button className="w-full">View Content</Button>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    );
  } catch (error) {
    return (
      <SomethingWentWrong/>
    );
  }
}
