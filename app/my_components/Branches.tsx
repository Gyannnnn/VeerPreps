"use client"
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import axios from "axios";
import SomethingWentWrong from "./SomethingWentWrong";


import { useState, useEffect } from "react";



interface branch {
  branch_id: string;
  userid: null | number;
  displayimage: string;
  branchname: string;
}

export default function Branches() {
  const [searchTerm, setSearchTerm] = useState("");
  const [branches, setBranches] = useState<branch[]>([]);
  const [loading, setLoading] = useState(true);

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
      
      return (
        <h1>Loading...</h1>
      )
    }
  
    return (
      <div className="sm:w-[95vw] w-screen flex flex-col gap-2 items-center">
        <div className="w-[87vw] h-10 flex items-center justify-end pb-10">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search branches"
            className="px-2 py-2 sm:w-1/3 w-full bg-transparent border-2 border-blue-500 outline-none rounded-lg"
          />
        </div>
        <div className="sm:w-[95vw] w-screen min-h-screen flex justify-center flex-wrap gap-5">
          {filteredbranch.map((branch) => (
            <Link
              key={branch.branch_id}
              href={`/year/${branch.branch_id}`}
              className="hover:cursor-pointer max-sm:px-2"
            >
              <Card className="w-80 sm:h-[48vh] max-sm:h-[48vh] flex border flex-col drop-shadow-lg items-center justify-around max-sm:w-86 px-2 rounded-md">
                <Image
                  className="rounded-xl border"
                  height={250}
                  width={350}
                  src={branch.displayimage}
                  alt="information technology"
                  priority
                />
                <div className="flex flex-col gap-2 items-start w-full">
                  <h1 className="font-sans text-xl w-full text-center tracking-tighter">
                    {branch.branchname}
                  </h1>
                  <Button className="w-full">View Content</Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <SomethingWentWrong/>
    )
    
  }
}
