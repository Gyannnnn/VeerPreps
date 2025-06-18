"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import axios from "axios";
import getName from "@/utils/Name";

import { Session } from "next-auth";
import { Input } from "@/components/ui/input";

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
  const [error, setError] = useState<string | null>(null);

  const name = session?.user?.name;

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get<{ branches: Branch[] }>(
          "https://api-zeta.vercel.app/api/branch/"
        );
        setBranches(response.data.branches);
      } catch (error) {
        console.error("Error fetching branches:", error);
        setError("Failed to fetch branches. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBranches();
  }, []);

  const filteredBranches = useMemo(() => {
    try {
      return searchTerm
        ? branches.filter((branch) =>
            branch.branchname.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : branches;
    } catch (error) {
      console.error("Error filtering branches:", error);
      return [];
    }
  }, [branches, searchTerm]);

  return (
    <div className="sm:w-[95vw] w-screen flex flex-col gap-2 items-center">
      {/* Search and Welcome */}
      <div className="w-[91vw] 2xl:w-[87vw] h-10 flex sm:flex-row flex-col gap-2 items-center justify-between sm:mb-10 mb-32">
        <div className="max-sm:w-full max-sm:mb-5">
          {session?.user && (
            <h1 className="sm:text-3xl font-bold max-sm:text-3xl text-black flex flex-wrap items-center justify-start gap-2 hover:cursor-pointer dark:text-white">
              <span>Hello</span>
              <span className="inline-block animate-wave transform-origin-[70%_70%]">
                👋
              </span>
              {name || getName(session?.user?.email as string)?.toLowerCase()}
            </h1>
          )}
        </div>
        <div className="flex sm:w-1/3 w-full items-center justify-between hover:cursor-pointer ">
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search Branches ..."
            aria-label="Search branches"
            className="outline outline-1 outline-blue-500"
          />
          
        </div>
      </div>

      {/* Error Handling */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Branch Cards */}
      <div className="sm:w-[95vw] w-screen min-h-screen flex justify-center flex-wrap gap-5">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <Card
              key={index}
              className="w-80 sm:min-h-[48vh] max-sm:min-h-[50vh] border flex flex-col drop-shadow-lg items-center justify-between py-2 sm:gap-2 gap-6 max-sm:w-[96vw] px-2 rounded-sm animate-pulse"
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
              <Card className="w-80 max-sm:w-[95vw] min-h-[52vh] max-sm:min-h-[45vh] p-2  flex flex-col justify-between max-lg:justify-around gap-2  ">
                <Image
                  className="rounded-sm border"
                  height={400}
                  width={450}
                  src={branch.displayimage}
                  alt={`${branch.branchname} branch`}
                  priority={index < 2}
                  loading={index >= 2 ? "lazy" : "eager"}
                  placeholder="blur"
                  blurDataURL="/path-to-placeholder-image.jpg"
                />
                <h1 className="font-sans sm:text-xl text-[1.4rem] w-full text-center tracking-tighter">
                  {branch.branchname}
                </h1>
                <div className="flex flex-col sm:gap-4 gap-2 items-start w-full">
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
