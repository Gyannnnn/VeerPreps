"use client";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import axios from "axios";
import SomethingWentWrong from "./SomethingWentWrong";
import { Search } from "lucide-react";
import getName from "@/utils/Name";
import { useState, useEffect } from "react";
import Suspense from "./Loading";
import { Session } from "next-auth";
import localFont from "next/font/local";
const myfont = localFont({ src: "../../font/PlaywriteVN-Regular.ttf" });

interface branch {
  branch_id: string;
  userid: null | number;
  displayimage: string;
  branchname: string;
}

interface branchProps {
  session: Session | null;
}

export default function Branches({ session }: branchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [branches, setBranches] = useState<branch[]>([]);
  const [loading, setLoading] = useState(true);
  const name = session?.user?.name;

  try {
    useEffect(() => {
      const fetchBranches = async () => {
        try {
          const response = await axios.get<{ branches: branch[] }>(
            "https://iitkirba-api.vercel.app/api/branch/"
          );
          setBranches(response.data.branches);
        } catch (error) {
          console.error("Error fetching branches:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchBranches();
    }, []);

    const filteredbranch = branches.filter((branch) =>
      branch.branchname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
      return <Suspense />;
    }

    return (
      <div className="sm:w-[95vw] w-screen flex flex-col gap-2 items-center">
        <div className="w-[91vw] 2xl:w-[87vw] h-10 flex sm:flex-row flex-col gap-2 items-center justify-between sm:mb-10 mb-20   ">
          <div className="max-sm:w-full max-sm:mb-5 ">
            {session?.user ? (
              <h1
                style={myfont.style}
                className="sm:text-2xl max-sm:text-2xl text-black flex items-center justify-start gap-2 hover:cursor-pointer dark:text-white"
              >
                <span> hello</span>
                <span className="inline-block animate-wave text-3xl transform-origin-[70%_70%]">
                  👋
                </span>
                {name
                  ? name
                  : getName(session?.user?.email as string)?.toLowerCase()}
              </h1>
            ) : (
              <h1></h1>
            )}
          </div>
          <div className="flex  sm:w-1/3 w-full  items-center justify-between hover:cursor-pointer   border-2 rounded-md px-2 py-3  ">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"              
              placeholder="Search branches ..."
              className="px-2  sm:w-1/3 w-full bg-transparent  outline-none rounded-lg"
            />
            <Search className="text-gray-400 hover:text-gray-500 " />
          </div>
        </div>
        <div className="sm:w-[95vw] w-screen min-h-screen flex justify-center flex-wrap gap-5">
          {filteredbranch.length > 0 ? (
            filteredbranch.map((branch) => (
              <Link
                key={branch.branch_id}
                href={`/year/${branch.branch_id}`}
                className="hover:cursor-pointer "
              >
                <Card className="w-80 sm:min-h-[48vh] max-sm:min-h-[50vh] flex border flex-col drop-shadow-lg items-center justify-between py-2 sm:gap-2 gap-6 max-sm:w-[96vw] px-2 rounded-sm ">
                  <Image
                    className="rounded-sm border"
                    height={400}
                    width={350}
                    src={branch.displayimage}
                    alt="information technology"
                    priority
                  />
                  <div className="flex flex-col sm:gap-4 gap-2 items-start w-full">
                    <h1 className="font-sans sm:text-xl text-[1.4rem] w-full text-center tracking-tighter">
                      {branch.branchname}
                    </h1>
                    <Button className="w-full py-6">View Content</Button>
                  </div>
                </Card>
              </Link>
            ))
          ) : (
            <h1 className="text-xl">No Branches Found 🥲</h1>
          )}
        </div>
      </div>
    );
  } catch (error) {
    return <SomethingWentWrong />;
  }
}
