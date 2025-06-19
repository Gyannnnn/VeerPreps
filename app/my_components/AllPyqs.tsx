"use client";

import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import Pdf from "../my_components/pdf";
import SomethingWentWrong from "../my_components/SomethingWentWrong";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  FileText, 
  Download, 
  ChevronLeft, 
  ChevronRight,
  Filter,
  BookOpen,
  TrendingUp
} from "lucide-react";
import { motion, useScroll } from "framer-motion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Allpyqs {
  pyqname: string;
  pyq_id: number;
}

export default function AllPyqs() {
  const [pyqs, setPyqs] = useState<Allpyqs[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(12);

  useEffect(() => {
    const fetchPyqs = async () => {
      try {
        setLoading(true);
        const response = await axios.get<{ allpyqs: Allpyqs[] }>(
          "https://api-zeta.vercel.app/api/pyq/"
        );
        setPyqs(response.data.allpyqs);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPyqs();
  }, []);

  const filteredPyqs = useMemo(() => {
    return pyqs.filter((pyq) =>
      pyq.pyqname.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [pyqs, searchTerm]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPyqs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPyqs = filteredPyqs.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset to first page when searching
  };

  if (error) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-secondary dark:bg-zinc-950">
        <SomethingWentWrong />
      </div>
    );
  }

  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 pt-20">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Breadcrumb Navigation */}
      <div className="w-full py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Previous Year Questions</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="w-full py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-8">
            <div className="flex items-center justify-center gap-3 max-sm:gap-1 mb-4 ">
              <FileText className="h-12 w-12 text-blue-600" />
              <h1 className="text-4xl max-sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white w-1/2">
                Previous Year Questions
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto max-sm:text-center">
              Access a comprehensive collection of VSSUT Burla's previous year question papers. 
              Find exactly what you need to ace your exams.
            </p>
          </div>

          {/* Search and Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-6  items-center">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative max-w-2xl">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search PYQs by subject, branch, or year..."
                  className="pl-12 pr-4 h-12 rounded-xl font-medium bg-white/80 dark:bg-zinc-900/80 border-2 border-blue-200 dark:border-blue-800 shadow focus:border-blue-500 focus:ring-2 focus:ring-blue-400/30 transition-all duration-200 text-base placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-4">
              <Card className="flex-1 p-4 text-center bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm border-0 shadow-lg">
                <BookOpen className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{pyqs.length}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">Total PYQs</p>
              </Card>
              <Card className="flex-1 p-4 text-center bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm border-0 shadow-lg">
                <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{filteredPyqs.length}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">Found</p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* PYQs Grid */}
      <div className="w-full py-4 px-4">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            // Loading skeleton
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {Array.from({ length: 12 }).map((_, index) => (
                <Card key={index} className="p-4 animate-pulse">
                  <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-3"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto"></div>
                </Card>
              ))}
            </div>
          ) : currentPyqs.length > 0 ? (
            <>
              {/* Results info */}
              <div className="flex items-center justify-between mb-4">
                <p className="text-gray-600 dark:text-gray-400">
                  Showing {startIndex + 1}-{Math.min(endIndex, filteredPyqs.length)} of {filteredPyqs.length} PYQs
                </p>
                {searchTerm && (
                  <Badge variant="secondary" className="px-3 py-1">
                    "{searchTerm}" found in {filteredPyqs.length} results
                  </Badge>
                )}
              </div>

              {/* PYQs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {currentPyqs.map((pyq) => (
                  <Card 
                    key={pyq.pyq_id}
                    className="group p-4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <Pdf
                      notes={false}
                      pyqid={pyq.pyq_id}
                      pyqname={pyq.pyqname}
                      links={""}
                    />
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex flex-row items-center justify-center gap-2 mt-8 w-full">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>

                  {/* Responsive page numbers: show all on sm+, only 2-3 on mobile */}
                  <div className="flex flex-row items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter(page => {
                        if (typeof window !== 'undefined' && window.innerWidth < 640) {
                          // Show only 2-3 page numbers around currentPage on mobile
                          if (totalPages <= 3) return true;
                          if (currentPage === 1) return page <= 3;
                          if (currentPage === totalPages) return page >= totalPages - 2;
                          return Math.abs(page - currentPage) <= 1;
                        }
                        return true;
                      })
                      .map((page) => (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          size="sm"
                          onClick={() => handlePageChange(page)}
                          className="w-10 h-10 max-sm:w-8 max-sm:h-8 max-sm:text-xs"
                        >
                          {page}
                        </Button>
                      ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-2"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          ) : (
            // No results
            <Card className="w-full max-w-md mx-auto p-12 text-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-0 shadow-lg">
              <div className="space-y-4">
                <div className="text-6xl">📚</div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {searchTerm ? "No PYQs Found" : "No PYQs Available"}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {searchTerm 
                    ? `No PYQs match "${searchTerm}". Try a different search term.`
                    : "PYQs are being uploaded. Check back soon!"
                  }
                </p>
                {searchTerm && (
                  <Button 
                    variant="outline" 
                    onClick={() => handleSearch("")}
                    className="mt-4"
                  >
                    Clear Search
                  </Button>
                )}
              </div>
            </Card>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full py-16 px-4 bg-white/50 dark:bg-zinc-900/50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Can't find what you're looking for?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Help us grow our collection by contributing your PYQs
          </p>
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            asChild
          >
            <a href="https://forms.gle/EYBP1xcCxYqsdeVK6" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Upload Your PYQs
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
