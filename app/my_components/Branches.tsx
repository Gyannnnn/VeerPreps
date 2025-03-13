"use client"
import React, { useState, useEffect, useMemo } from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import axios from "axios";
import getName from "@/utils/Name";
import localFont from "next/font/local";
import { Session } from "next-auth";

const myfont = localFont({
  src: "../../font/PlaywriteVN-Regular.ttf",
  display: "swap",
});

interface Branch {
  branch_id: string;
  userid: null | number;
  displayimage: string;
  branchname: string;
}

interface BranchProps {
  session: Session | null;
}

export default function Branches({ session }: BranchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [branches, setBranches] = useState<Branch[]>([]);
  const [loading, setLoading] = useState(true);

  const name = session?.user?.name;

  // Fetch branches on mount
  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await axios.get<{ branches: Branch[] }>(
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

  // Memoize filtered branches to avoid recalculating
  const filteredBranches = useMemo(() => {
    return searchTerm
      ? branches.filter((branch) =>
          branch.branchname.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : branches;
  }, [branches, searchTerm]);

  return (
    <div className="sm:w-[95vw] w-screen flex flex-col gap-2 items-center">
      {/* Search and Welcome */}
      <div className="w-[91vw] 2xl:w-[87vw] h-10 flex sm:flex-row flex-col gap-2 items-center justify-between sm:mb-10 mb-32">
        <div className="max-sm:w-full max-sm:mb-5">
          {session?.user && (
            <h1
              
              className="sm:text-4xl font-bold max-sm:text-3xl text-black flex flex-wrap items-center justify-start gap-2 hover:cursor-pointer dark:text-white"
            >
              <span>Hello</span>
              <span className="inline-block animate-wave  transform-origin-[70%_70%]">
                👋
              </span>
              {name ||
                getName(session?.user?.email as string)?.toLowerCase()}
            </h1>
          )}
        </div>
        <div className="flex sm:w-1/3 w-full items-center justify-between hover:cursor-pointer border-2 rounded-md px-2 py-3">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search branches ..."
            className="px-2 w-full bg-transparent outline-none rounded-lg"
            aria-label="Search branches"
          />
          <Search className="text-gray-400 hover:text-gray-500" />
        </div>
      </div>

      {/* Branch Cards */}
      <div className="sm:w-[95vw] w-screen min-h-screen flex justify-center flex-wrap gap-5">
        {loading ? (
          // Skeleton loader for better UX
          Array.from({ length: 6 }).map((_, index) => (
            <Card
              key={index}
              className="w-80 sm:min-h-[48vh] max-sm:min-h-[50vh]  border flex flex-col drop-shadow-lg items-center justify-between py-2 sm:gap-2 gap-6 max-sm:w-[96vw] px-2 rounded-sm animate-pulse"
            >
              <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
              <div className="w-1/2 h-20 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
              <div className="w-full h-8 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
            </Card>
          ))
        ) : filteredBranches.length > 0 ? (
          filteredBranches.map((branch, index) => (
            <Link
              key={branch.branch_id}
              href={`/year/${branch.branch_id}`}
              className="hover:cursor-pointer"
            >
              <Card className="w-80 sm:min-h-[48vh] max-sm:min-h-[50vh] flex border flex-col drop-shadow-lg items-center justify-between max-lg:justify-around py-2 sm:gap-2 gap-6 max-sm:w-[96vw] px-2 rounded-sm">
                <Image
                  className="rounded-sm border"
                  height={400}
                  width={350}
                  src={branch.displayimage}
                  alt={`${branch.branchname} branch`}
                  priority={index < 2} // Prioritize the first two images
                  loading={index >= 2 ? "lazy" : "eager"}
                  placeholder="blur"
                  blurDataURL="/path-to-placeholder-image.jpg"
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
}
