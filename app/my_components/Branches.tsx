"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, BookOpen } from "lucide-react";
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
    <div className="w-full flex flex-col gap-6 items-center">
      {/* Search and Welcome */}
      <div className="w-full max-w-6xl flex sm:flex-row flex-col gap-4 items-center justify-between">
        <div className="max-sm:w-full max-sm:mb-2">
          {session?.user && (
            <h1 className="sm:text-3xl font-bold max-sm:text-2xl text-black dark:text-white flex flex-wrap items-center justify-start gap-2">
              <span>Hello</span>
              <span className="inline-block animate-wave transform-origin-[70%_70%]">
                👋
              </span>
              {name || getName(session?.user?.email as string)?.toLowerCase()}
            </h1>
          )}
        </div>
        
        {/* Search Input */}
        <div className="flex sm:w-1/3 w-full items-center">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 h-5 w-5" />
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
              placeholder="Search branches..."
            aria-label="Search branches"
              className="pl-12 pr-4 h-12 rounded-xl font-medium bg-white/80 dark:bg-zinc-900/80 border-2 border-blue-200 dark:border-blue-800 shadow focus:border-blue-500 focus:ring-2 focus:ring-blue-400/30 transition-all duration-200 text-base placeholder:text-gray-400 dark:placeholder:text-gray-500"
          />
          </div>
        </div>
      </div>

      {/* Error Handling */}
      {error && (
        <Card className="w-full max-w-6xl p-4 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
          <p className="text-red-600 dark:text-red-400 text-center">{error}</p>
        </Card>
      )}

      {/* Branch Cards */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {loading ? (
          // Loading skeleton
          Array.from({ length: 8 }).map((_, index) => (
            <Card
              key={index}
              className="w-full min-h-[52vh] border flex flex-col drop-shadow-lg items-center justify-between py-4 sm:gap-4 gap-6 px-4 rounded-xl animate-pulse"
            >
              <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              <div className="w-3/4 h-8 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
              <div className="w-full h-12 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
            </Card>
          ))
        ) : filteredBranches.length > 0 ? (
          filteredBranches.map((branch, index) => (
            <Link
              key={branch.branch_id}
              href={`/year/${branch.branch_id}`}
              className="hover:cursor-pointer group"
            >
              <Card className="w-full min-h-[52vh] p-4 flex flex-col justify-between gap-4 rounded-xl border-2 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                
                {/* Branch Image */}
                <div className="relative overflow-hidden rounded-lg">
                <Image
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  height={400}
                  width={450}
                  src={branch.displayimage}
                  alt={`${branch.branchname} branch`}
                    priority={index < 4}
                    loading={index >= 4 ? "lazy" : "eager"}
                  placeholder="blur"
                  blurDataURL="/path-to-placeholder-image.jpg"
                />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Branch Name */}
                <div className="text-center">
                  <h2 className="font-bold sm:text-xl text-lg text-black dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {branch.branchname}
                  </h2>
                </div>

                {/* Action Button */}
                <div className="flex flex-col gap-2 items-center w-full">
                  <Button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium group-hover:bg-blue-700 transition-colors duration-300">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Explore Content
                  </Button>
                </div>
              </Card>
            </Link>
          ))
        ) : (
          <Card className="col-span-full max-w-md mx-auto p-8 text-center bg-white/50 dark:bg-zinc-900/50">
            <div className="flex flex-col items-center space-y-4">
              <div className="text-6xl">🥲</div>
              <h2 className="text-2xl font-bold text-black dark:text-white">No Branches Found</h2>
              <p className="text-gray-600 dark:text-gray-400">
                {searchTerm ? `No branches match "${searchTerm}"` : "Unable to load branches"}
              </p>
              {searchTerm && (
                <Button 
                  variant="outline" 
                  onClick={() => setSearchTerm("")}
                  className="mt-2"
                >
                  Clear Search
                </Button>
              )}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
