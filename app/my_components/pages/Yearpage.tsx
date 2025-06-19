import React from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";
import SomethingWentWrong from "../SomethingWentWrong";
import { FaArrowRight } from "react-icons/fa";
import { Calendar } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface year {
  year_id: number;
  branchId: number;
  yearName: string;
}

export const metadata: Metadata = {
  title: "Years",
  description: "all the branch years of vssut burla ",
};

export default async function Yearpage({ branchId }: { branchId: number }) {
  try {
    const years = await axios.get<{ requiredyear: year[] }>(
      `https://api-zeta.vercel.app/api/year/${branchId}`
    );

    const requiredyears = years.data.requiredyear;
    
  
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 pt-20 flex justify-center items-start">
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-8 items-center py-12 px-4">
          {/* Breadcrumb Navigation */}
          <div className="w-full mb-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Year {branchId}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Section Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
              <Calendar className="h-7 w-7 text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Select Year</h1>
          </div>

          {/* Year Cards */}
          <div className="w-full flex flex-col gap-5">
            {requiredyears.map((year) => (
              <Link
                key={year.year_id}
                href={`/year/${branchId}/subjects/${year.year_id}`}
                className="block"
              >
                <Card className="flex items-center justify-between px-6 py-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-xl group cursor-pointer">
                  <div className="flex flex-col">
                    <span className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">{year.yearName}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Academic Year</span>
                  </div>
                  <span className="flex items-center gap-2 text-blue-600 group-hover:text-blue-800 dark:group-hover:text-blue-400 text-base font-medium transition-colors duration-200">
                    Explore subjects <FaArrowRight className="ml-1" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    let err = error as Error;
   
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <SomethingWentWrong />
      </div>
    );
  }
}
