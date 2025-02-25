"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import Pdf from "../my_components/pdf";
import SomethingWentWrong from "../my_components/SomethingWentWrong";
import { CiSearch } from "react-icons/ci";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Allpyqs {
  pyqname: string;
  pyq_id: number;
}

export default function Page() {
  const [pyqs, setPyqs] = useState<Allpyqs[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchPyqs = async () => {
      try {
        const response = await axios.get<{ allpyqs: Allpyqs[] }>(
          "https://iitkirba-api.vercel.app/api/pyq/"
        );
        setPyqs(response.data.allpyqs);
      } catch (err) {
        setError(true);
      }
    };

    fetchPyqs();
  }, []);

  const filteredPyqs = pyqs.filter((pyq) =>
    pyq.pyqname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-secondary dark:bg-zinc-950">
        <SomethingWentWrong />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-secondary dark:bg-zinc-950 mt-14">
      <div className="w-[95vw]    min-h-screen">
        <div className="flex  sm:flex-row  flex-col sm:items-center  sm:justify-between mt-10 mb-5 sm:pr-5 max-sm:gap-2  ">
              <h1 className="sm:pl-6 sm:text-3xl  text-xl py-3">
                All Previous Year Questions
              </h1>
          <div className="px-2 border rounded-lg flex sm:w-1/3 items-center justify-around">
          <input
            type="text"
            placeholder="Search PYQs...."
            className=" w-full   rounded-md outline-none border-none text-sm py-3   bg-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <CiSearch className="text-2xl  cursor-pointer" />
        </div>
             
        </div>
        
        <div className="flex flex-wrap  justify-around max-sm:justify-between">
          {filteredPyqs.length > 0 ? (
            filteredPyqs.map((pyq) => (
              <Pdf
                key={pyq.pyq_id}
                notes={false}
                pyqid={pyq.pyq_id}
                pyqname={pyq.pyqname}
                links={""}
              />
            ))
          ) : (
            <p className="text-xl pl-4">No pyq found 🥲 </p>
          )}
        </div>
      </div>
    </div>
  );
}
